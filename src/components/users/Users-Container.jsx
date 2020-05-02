import React from 'react';
import {Follow,UnFollow,SetCurrentPage,FollowingInProcces,GetUsersThunkCreator,UnFollowThunkCreator,FollowThunkCreator} from '../.././redux/users-reducer'
import {connect} from 'react-redux';
import Users from './Users'
import Preloader from '../common/preloader/Preloader'
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect'
import {compose} from 'redux'
import {getUsers,pageSize} from '../../redux/selectors'


class UsersContainer extends React.Component{

  componentDidMount() {
    this.props.GetUsersThunkCreator(this.props.currentPage,this.props.pageSize)
  }
  onPageChanged=(pageNumber)=>{
    this.props.GetUsersThunkCreator(pageNumber,this.props.pageSize)
  }

  render() {
    return <>
      {this.props.isFetching?
        <Preloader/>
        :null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        dataUsers={this.props.dataUsers}
        onPageChanged={this.onPageChanged}
        UnFollow={this.props.UnFollow}
        Follow={this.props.Follow}
        followingInProcces={this.props.followingInProcces}
        UnFollowThunkCreator={this.props.UnFollowThunkCreator}
        FollowThunkCreator={this.props.FollowThunkCreator}
      />
    </>
  }
}

let mapStateToProps =(state)=>{
  return {
    dataUsers: getUsers(state),
    pageSize: pageSize(state),
    totalUsersCount: state.Users.totalUsersCount,
    currentPage:state.Users.currentPage,
    isFetching:state.Users.isFetching,
    followingInProcces:state.Users.followingInProcces
  }
}
// можно настроить селокторы для каждого пропса
// но нах это нужно не знаю
// он говорит нужно, для примера 2 сделал

// сюда можно воткнуть dataUsersSuperSelector(state)
// и передать туда что-то
// она не будет постояно вызываться и грузить процессор
// а зупуститься только когда нужно

export default compose(
  connect(mapStateToProps,
    {Follow, UnFollow, SetCurrentPage,
      FollowingInProcces, GetUsersThunkCreator,
      UnFollowThunkCreator,FollowThunkCreator}),
  WithAuthRedirect
)(UsersContainer)

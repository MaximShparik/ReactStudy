import React from 'react';
import {connect} from 'react-redux';
import Friends from './Friends'
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect'
import {compose} from 'redux'
import Preloader from '../common/preloader/Preloader'
import {getUsers} from '../../redux/selectors'
import {GetFriendsThunkCreator} from '../../redux/friends-reducer'
import {UnFollowThunkCreator} from '../../redux/users-reducer'

class FriendsContainer extends React.Component{

  componentDidMount() {
    this.props.GetFriendsThunkCreator()
  }

  onPageChanged=()=>{
    this.props.GetFriendsThunkCreator()
  }



  render() {
    return <>
      {this.props.isFetching?
        <Preloader/>
        :null}
      <Friends
        dataUsers={this.props.dataUsers}
        UnFollowThunkCreator={this.props.UnFollowThunkCreator}
        GetFriendsThunkCreator={this.props.GetFriendsThunkCreator}
        onPageChanged={this.onPageChanged}
      />
    </>
  }
}

let mapStateToProps =(state)=>{
  return {
    dataUsers: state.Friends.dataUsers,
    isFetching:state.Friends.isFetching
  }
}

export default compose(
  connect(mapStateToProps,
    {GetFriendsThunkCreator,UnFollowThunkCreator}),
  WithAuthRedirect
)(FriendsContainer)

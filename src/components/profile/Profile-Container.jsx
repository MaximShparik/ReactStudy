import React from 'react';
import Profile from './Profile';
import '../.././App.css';
import {connect} from 'react-redux';
import {GetUsersProfile,GetUserStatus,UpdateUserStatus} from '../../redux/profile-reducer'
import {withRouter} from 'react-router-dom'
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect'
import {compose} from 'redux'

class ProfileContainer extends React.Component{

  componentDidMount(){

    let id = this.props.match.params.userId

    if (!id){id=this.props.authorisedId}
    this.props.GetUsersProfile(id)
    this.props.GetUserStatus(id)

  }

  render(){

    return (
      <Profile {...this.props} profile={this.props.profile}
        status={this.props.status} UpdateUserStatus={this.props.UpdateUserStatus}/>
    )
  }
}

let mapStateToProps=(state)=>{
  return{
    profile:state.Profile.profile,
    status:state.Profile.status,
    authorisedId: state.Auth.id,
    isAuth:state.Auth.isAuth
  }
}

export default compose(
  connect(mapStateToProps,{GetUsersProfile,GetUserStatus,UpdateUserStatus}),
  withRouter,
  WithAuthRedirect
)(ProfileContainer)

// компосе автоатисеки вызовет первую снизу функцию
// и передаст в неё ProfileContainer
// затем результат первой снизу закинет во вторую снизу
// и тд

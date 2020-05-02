import React from 'react';
import Header from './Header'
import {connect} from 'react-redux';
import {LogoutHOC} from '../../redux/auth-reducer'


class HeaderContainer extends React.Component{



  render(){
    return <Header {...this.props}/>
  }
}

let mapStateToProps=(state)=>({
    isAuth: state.Auth.isAuth,
    login: state.Auth.login
})
// тут мы пишем какие данные нам нужны из стейта

export default connect(mapStateToProps,{LogoutHOC})(HeaderContainer)

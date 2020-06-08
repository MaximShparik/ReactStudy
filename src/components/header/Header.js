import React from 'react';
import {NavLink} from 'react-router-dom'
import '../.././App.css';
import Logo from '../../img/logo.png'

const Header = (props) => {

  return (
    <header className='header'>
      <img src={Logo} alt="Logo" className='header__logo'></img>

      <div className='header__auth'>
        {props.isAuth
          ?<div><p>{props.login}</p><button onClick={props.LogoutHOC}>LogOut</button></div>
          :<NavLink to='/login'>LogIn</NavLink>}
      </div>
    </header>
  );
}

export default Header;

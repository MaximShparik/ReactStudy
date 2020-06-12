import React from 'react';
import {NavLink} from 'react-router-dom'
import '../.././App.css';
import Logo from '../../img/logo.png'

const Header = (props) => {

  return (
    <header className='header'>
      <img src={Logo} alt="Logo" className='header__logo'></img>


        {props.isAuth
          ?<div className='header__auth'><p>{props.login}</p><button onClick={props.LogoutHOC}>LogOut</button></div>
          :<NavLink to='/login' className='header__auth'></NavLink>
        }

    </header>
  );
}

export default Header;

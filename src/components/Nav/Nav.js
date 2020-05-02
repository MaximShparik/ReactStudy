import React from 'react';
import '../.././App.css';
// import BestFriends from './BestFriends'
import {NavLink} from 'react-router-dom'

const Nav = (props) => {

  // let state = props.store.getState();
// пометка когда исправить в app.js

  // такс бля, мы прокидываем store
  // но там только функции, нет данных,
  // но там есть функция которая даёт нам
  // подтянуть данные, именно она сверху


  // let dataRenderBestFriends =
  //   state.Navbar.dataBestFriends.map( el => <BestFriends name={el.name} avasrc={el.avasrc}/>)
// пометка когда исправить в app.js
  return (
    <nav className='nav'>
      <NavLink to='/friends' className='nav__friends'>Friends</NavLink>

      <NavLink to='/profile'>Profile</NavLink>
      <NavLink to='/users'>Users</NavLink>
      <NavLink to='/dialogs'>Messages</NavLink>
      <NavLink to='/news'>News</NavLink>
      <NavLink to='/music'>Music</NavLink>
      <NavLink to='/settings'>Settings</NavLink>
    </nav>
  );
}

// <div className='nav__bestfriend'>
//   {dataRenderBestFriends}
//   </div>
// пометка когда исправить в app.js
// вернуть потом в пустое место между навлинками

export default Nav;

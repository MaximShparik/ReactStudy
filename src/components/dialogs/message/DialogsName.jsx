import React from 'react';
import '../../.././App.css';
import {NavLink} from 'react-router-dom'

const DialogsName = (props) => {
  // debugger
  return (
    <NavLink to={'/dialogs/'+props.id} className='dialogs__item'>{props.name}</NavLink>
  );
}

export default DialogsName;

import React from 'react';
import '../.././App.css';

const BestFriends = (props) => {
  return (
    <div className='nav__bestfriend-item'>
      <img src={props.avasrc} className='nav__bestfriend-ava' alt='ava'/>
      <p className='nav__bestfriend-name'>{props.name}</p>
    </div>
  );
}

export default BestFriends;

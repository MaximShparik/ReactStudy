import React, { useState, useEffect } from 'react';
import '../.././App.css';
import Ava from '../../img/ava.jpg'
import {NavLink} from 'react-router-dom'

let Friends = (props) =>{
  // debugger

  let onClick = function(el){
      props.UnFollowThunkCreator(el)
      props.onPageChanged()
   }


  return(
    <div className='friends'>
    friends number: {props.dataUsers.length}
    {props.dataUsers.map(el=>{
      if (el.followed == true){
        return(
          <div className='friend'>
          <NavLink to={'/profile/'+el.id}>
            <img src={el.photos.small!=null ? el.photos.small:Ava} alt="ava" className='user__ava'/>
          </NavLink>
          <p>{el.name}</p>
          <button
            className='user__follow'
            onClick={()=>onClick(el.id)}>
              Unfollow</button>
          </div>
        )
      }
    })}

    </div>
  )
}

export default Friends;

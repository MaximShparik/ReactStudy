import React from 'react';
import '../.././App.css';
import {NavLink} from 'react-router-dom'

let Users = (props) =>{
  let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
  let pages = [];
  for (let i=1; i<=pagesCount;i++){
    pages.push(i)
  }

  return(
    <div className='users'>
      <div className='users__page'>
        {pages.map(el=>{
          return <span className={props.currentPage === el && 'users__page-current'}
          onClick={()=>{props.onPageChanged(el)}}>{el} </span>
        })}
      </div>
      {props.dataUsers.map(elem=><div className='user__item' key={elem.id}>
      <div className='user__item-face'>
        <NavLink to={'/profile/'+elem.id}>
          <img src={elem.photos.small!=null ? elem.photos.small:'ava.jpg'} alt="ava" className='user__ava'/>
        </NavLink>
        {elem.followed
          ?<button disabled={props.followingInProcces.some(id=>id===elem.id)} className='user__follow'
            onClick={()=>{props.UnFollowThunkCreator(elem.id)}}>
              Unfollow</button>

          :<button disabled={props.followingInProcces.some(id=>id===elem.id)} className='user__follow'
            onClick={()=>{props.FollowThunkCreator(elem.id)}}>
              Follow</button>}
      </div>
        <div className='user__info'>
          <div className='user__info-name'>{elem.name}</div>
          <div className='user__info-status'>Прикольненько</div>
          <div className='user__info-from'>Msk<br></br>RU</div>
        </div>
      </div>)}
      <button className='users-more'>Show more</button>
    </div>
  )
}



export default Users;

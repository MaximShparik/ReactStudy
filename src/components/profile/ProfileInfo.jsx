import React from 'react';
import '../.././App.css';
import Preloader from '../common/preloader/Preloader'
import ProfileStatusHook from './ProfileStatusHook'
import Ava from '../../img/ava.jpg'

const ProfileInfo = (props) => {

// если профайл undefined или null
  if (!props.profile){
    return <Preloader/>
  }

  let ava = props.profile.photos.large
  if (!ava){
    ava = Ava
  }
  return (
    <div>
      <div className='content__bg'></div>
      <div className='content__profile'>
        <img src={ava} alt="ava" className='content__profile-ava'></img>
        <div className='content__profile-info'>
          <p className='info-name'>{props.profile.fullName}</p>
          <p className='info-day'>Date of Birth: 16 september</p>
          <p className='info-city'>City: Moscow</p>
          <p className='info-edu'>Education: Mirea</p>
          <p className='info-site'>Web Site: LookUp</p>
          <ProfileStatusHook status={props.status}
            UpdateUserStatus={props.UpdateUserStatus}/>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;

import React from 'react';
import ProfileInfo from './ProfileInfo'
import '../.././App.css';
import PostsContainer from './Posts-Container';

const Profile = (props) => {

  return (
    <div className='content'>
      <ProfileInfo profile={props.profile}
        profileUpdateStatus={props.profileUpdateStatus}
        status={props.status}
        isOwner={props.isOwner}
        UpdateUserStatus={props.UpdateUserStatus}
        savePhoto={props.savePhoto}
        SaveProfile={props.SaveProfile}/>
      { props.isOwner &&
        <PostsContainer photo={props.profile}/>
      }

    </div>
  );
}

export default Profile;

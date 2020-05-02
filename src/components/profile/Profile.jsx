import React from 'react';
import ProfileInfo from './ProfileInfo'
import '../.././App.css';
import PostsContainer from './Posts-Container';

const Profile = (props) => {

  return (
    <content className='content'>
      <ProfileInfo profile={props.profile}
        status={props.status}
        UpdateUserStatus={props.UpdateUserStatus}/>
      <PostsContainer/>
    </content>
  );
}

export default Profile;

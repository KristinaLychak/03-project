import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div>
        <img src='https://p4.wallpaperbetter.com/wallpaper/161/296/845/nature-sea-water-turquoise-wallpaper-preview.jpg' />
      </div>
      <div>
        avatar + description
      </div>
      <MyPosts />
    </div>
  ); 
}

export default Profile;
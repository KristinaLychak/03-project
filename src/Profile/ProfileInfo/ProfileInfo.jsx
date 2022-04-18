import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://media.istockphoto.com/photos/palm-tree-in-beach-in-tropical-island-caribbean-guadalupe-picture-id955765580?k=20&m=955765580&s=612x612&w=0&h=ORMyzLYhL-4EB8loHqB4wMIoNjk0HoO29aUEV60DZbo=' />
      </div>
      <div className={classes.descriptionBlock}>
        ava + description
      </div>
    </div>
  );  
}

export default ProfileInfo;
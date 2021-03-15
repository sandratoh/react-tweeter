import React from 'react';
import './Profile.css';

export const Profile = () => {
  return(
    <header>
      <span className="avatar-outline">
        <div className="image-mask">
          <img className="profile-pic" src="../images/profile-pug.jpg" alt="avatar" /> 
        </div>
      </span>
      <br />
      <div>
        <h2>Sandra To</h2>
      </div>
    </header>
  )
}
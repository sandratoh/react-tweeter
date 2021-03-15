import React from 'react';

export const Profile = () => {
  return(
    <header>
      <span class="avatar-outline">
        <div class="image-mask">
          <img src="/images/profile-pug.jpg" alt="avatar" class="profile-pic" /> 
        </div>
      </span>
      <br />
      <div>
        <h2>Sandra To</h2>
      </div>
    </header>
  )
}
import React from 'react';
import profilePicturePlaceholder from './../../../images/profile/filled-profile-picture-placeholder.svg';

function ProfilePicture({ src, alt, className }) {
  return (
    <div
      className={
        className ??
        'h-36 w-36 shadow-lg rounded-full overflow-hidden outline outline-2 outline-white'
      }
    >
      <img
        src={src ? src : profilePicturePlaceholder}
        alt={alt}
        className="w-full h-full"
      ></img>
    </div>
  );
}

export default ProfilePicture;

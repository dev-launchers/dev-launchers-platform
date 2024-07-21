import React from 'react';
import profileImgPlaceholder from './../../../images/profile/profile-img-placeholder.svg';
function ProfileImage({ imgSrc, alt, imageClass }) {
  return (
    <div
      className={
        imageClass ??
        'h-36 w-36 shadow-lg rounded-full overflow-hidden outline outline-2 outline-white'
      }
    >
      <img
        src={imgSrc ? imgSrc : profileImgPlaceholder}
        alt={alt}
        className="w-full h-full "
      ></img>
    </div>
  );
}

export default ProfileImage;

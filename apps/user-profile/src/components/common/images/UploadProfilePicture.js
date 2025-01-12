import React from 'react';
import ProfilePicture from './ProfilePicture';
import CameraIcon from './../icons/FilledCamera';

function UploadProfilePicture({ src, alt, className, onChange }) {
  return (
    <div>
      <ProfilePicture src={src} />
      <label htmlFor="file-upload" className="cursor-pointer">
        <CameraIcon />
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/png, image/jpeg"
        onChange={onChange}
        style={{ display: 'none' }}
      />
    </div>
  );
}

export default UploadProfilePicture;

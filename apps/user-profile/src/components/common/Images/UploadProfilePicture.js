import React from 'react';
import ProfilePicture from './ProfilePicture';
import CameraIcon from './../Icons/SVG/FilledCamera';

/**
 * UploadProfilePicture Component
 *
 * This component displays a profile picture along with a button to upload a new picture.
 * It uses a hidden file input element for the upload functionality, triggered by clicking on the camera icon.
 *
 * Props:
 * - `src` (String): The URL of the profile picture. Defaults to a placeholder if not provided.
 * - `alt` (String): The alt text for the profile picture. Improves accessibility.
 * - `className` (String): Custom CSS classes for the profile picture.
 * - `onChange` (Function): Callback function triggered when a new file is selected.
 *
 * @param {Object} props - The component props.
 * @return {JSX.Element} The rendered UploadProfilePicture component.
 */
function UploadProfilePicture({ src, alt, className, onChange }) {
  return (
    <label
      htmlFor="file-upload"
      className="relative inline-block cursor-pointer"
    >
      {/* Profile Picture */}
      <ProfilePicture src={src} alt={alt} className={className} />

      {/* Camera icon - absolutely positioned */}
      <span className="absolute bottom-1 right-1 h-[30px] w-[30px]">
        <CameraIcon />
      </span>

      {/* Hidden file input */}
      <input
        id="file-upload"
        type="file"
        accept="image/png, image/jpeg"
        onChange={onChange}
        style={{ display: 'none' }}
      />
    </label>
  );
}

export default UploadProfilePicture;

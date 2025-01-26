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
    <div>
      {/* Display the current profile picture */}
      <ProfilePicture src={src} alt={alt} className={className} />

      {/* Label that acts as a trigger for the file input */}
      <label htmlFor="file-upload" className="cursor-pointer">
        <CameraIcon /> {/* Camera icon to indicate upload action */}
      </label>

      {/* Hidden file input for uploading a new profile picture */}
      <input
        id="file-upload"
        type="file" // Input type for file upload
        accept="image/png, image/jpeg" // Restrict accepted file types to PNG and JPEG
        onChange={onChange} // Trigger the onChange callback when a file is selected
        style={{ display: 'none' }} // Hide the file input element
      />
    </div>
  );
}

export default UploadProfilePicture;

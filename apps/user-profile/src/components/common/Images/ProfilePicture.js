import profilePicturePlaceholder from './../../../images/profile/filled-profile-picture-placeholder.svg';

/**
 * ProfilePicture Component
 *
 * Displays a circular profile picture with a placeholder fallback if no image source is provided.
 * The component supports custom styling through the `className` prop.
 *
 * Props:
 * - `src` (String): The URL of the profile picture. If not provided, a default placeholder is used.
 * - `alt` (String): The alt text for the profile picture. Improves accessibility.
 * - `className` (String): Custom CSS classes for additional styling. Defaults to a circular frame with shadow.
 *
 * @param {Object} props - The component props.
 * @return {JSX.Element} The rendered profile picture component.
 */
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

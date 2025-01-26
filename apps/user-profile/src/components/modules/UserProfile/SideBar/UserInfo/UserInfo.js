/**
 * UserInfo Component
 *
 * Displays the user's name in a styled container.
 *
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the user to display.
 *
 * @return {JSX.Element} The user info UI.
 */
const UserInfo = ({ name }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[#81C3D7] text-md font-normal">{name}</p>
    </div>
  );
};

export default UserInfo;

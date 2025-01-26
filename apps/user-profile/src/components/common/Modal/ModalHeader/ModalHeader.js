import { Typography } from '@devlaunchers/components/components/atoms';
import { FilledRocketLogo, FilledCross } from './../../../common/Icons';

/**
 * ModalHeader Component
 *
 * A reusable header component for modals that includes:
 * - A logo and title on the left.
 * - A close button on the right.
 *
 * Props:
 * - `closeModal` (Function): Callback function to close the modal when the close button is clicked.
 *
 * @param {Object} props - The component props.
 * @return {JSX.Element} The rendered ModalHeader component.
 */
function ModalHeader({ closeModal }) {
  return (
    <div className="flex justify-between items-center w-full h-16 px-6 py-4 bg-black">
      {/* Left Section: Logo and Title */}
      <div className="flex items-center gap-4">
        <FilledRocketLogo /> {/* Rocket Logo */}
        <Typography type="h4" className="text-white">
          Dev Launchers
        </Typography>
      </div>

      {/* Right Section: Close Button */}
      <div onClick={closeModal}>
        <FilledCross className="cursor-pointer border-1 border-white" />{' '}
        {/* Close Icon */}
      </div>
    </div>
  );
}

export default ModalHeader;

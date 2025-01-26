import cog from './../../../images/icons/outlined-cog.svg';
import { Typography } from '@devlaunchers/components/components/atoms';
import { OutlinedCog } from './../Icons/';

/**
 * EditButton Component
 *
 * A reusable button component that displays an "Edit" label alongside a cog icon.
 * The button triggers the `onEdit` callback function when clicked.
 *
 * Props:
 * - `onEdit` (Function): Callback function to execute when the button is clicked.
 *
 * @param {Object} props - The component props.
 * @return {JSX.Element} The rendered EditButton component.
 */
function EditButton({ onEdit }) {
  return (
    <div
      className="flex gap-2 hover:cursor-pointer" // Flex container with hover pointer styling
      onClick={onEdit} // Trigger the `onEdit` callback on click
    >
      <OutlinedCog />
      <Typography type="p">Edit</Typography>
    </div>
  );
}

export default EditButton;

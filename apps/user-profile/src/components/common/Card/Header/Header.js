import { Typography } from '@devlaunchers/components/components/atoms';
import EditButton from './../../../common/EditButton';

/**
 * Header Component
 *
 * A reusable header component that displays a title and an optional edit button.
 * The edit button is shown only if the `onEdit` prop is provided and is a valid function.
 *
 * Props:
 * - `title` (String): The title to display in the header. If not provided, the component renders nothing.
 * - `onEdit` (Function): Optional callback triggered when the edit button is clicked.
 *
 * @param {Object} props - The component props.
 * @return {JSX.Element|null} The rendered Header component or an empty fragment if no title is provided.
 */
function Header({ title, onEdit }) {
  return title ? (
    <div className="flex justify-between px-8 pt-5 pb-2 items-center border-b-2 border-[#f9f9f9]">
      {/* Title Section */}
      <Typography type="h3" className="m-0 p-0">
        {title}
      </Typography>

      {/* Optional Edit Button */}
      {onEdit != null && typeof onEdit === 'function' ? (
        <EditButton onEdit={onEdit} />
      ) : null}
    </div>
  ) : (
    <></> // Render an empty fragment if no title is provided
  );
}

export default Header;

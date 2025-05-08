import { Typography } from '@devlaunchers/components/components/atoms';
import { OutlinedCog } from './../Icons/';
function EditButton({ onEdit }) {
  return (
    <div className="flex gap-2 hover:cursor-pointer" onClick={onEdit}>
      <OutlinedCog />
      <Typography variant="secondary">Edit</Typography>
    </div>
  );
}

export default EditButton;

import cog from './../../../images/icons/outlined-cog.svg';
import { Typography } from '@devlaunchers/components/components/atoms';

function EditButton() {
  return (
    <div className="flex gap-2">
      <img src={cog} className="w-4" />
      <Typography type="p">Edit</Typography>
    </div>
  );
}

export default EditButton;

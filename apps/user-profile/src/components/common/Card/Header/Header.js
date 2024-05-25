import { Typography } from '@devlaunchers/components/components/atoms';
import EditButton from './../../../common/EditButton';

function Header({ title, showEdit }) {
  return title ? (
    <div className="flex justify-between px-8 pt-5 pb-2 items-center border-b-2 border-[#f9f9f9]">
      <Typography type="h3" className="m-0 p-0">
        {title}
      </Typography>
      <EditButton />
    </div>
  ) : (
    <></>
  );
}

export default Header;

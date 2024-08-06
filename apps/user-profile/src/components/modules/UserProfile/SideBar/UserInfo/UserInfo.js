import { Typography } from '@devlaunchers/components/components/atoms';

const UserInfo = ({ name }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[#81C3D7] text-md font-normal">{name}</p>
    </div>
  );
};

export default UserInfo;

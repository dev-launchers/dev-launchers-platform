import React from 'react';

const UserInfo = ({ name }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-sky-blue text-md font-normal font-['Oswald'] leading-normal tracking-wide">
        {name}
      </div>
    </div>
  );
};

export default UserInfo;

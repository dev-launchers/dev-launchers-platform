import React from 'react';

const Avatar = ({ src, alt }) => {
  return (
    <div className="flex justify-center items-center rounded-full overflow-hidden w-10 h-10">
      <img src={src} alt={alt} className="w-10 h-10 object-cover" />
    </div>
  );
};

export default Avatar;

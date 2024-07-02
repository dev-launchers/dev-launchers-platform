import React, { useState } from 'react';
import SideNavBarIcon from '../../../../images/UserProfile/SVG/SideNavBarIcon';

const NavItem = ({ iconColor, hoverIconColor, label, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex w-full">
      <a
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex items-center w-full py-2 px-6 rounded-full transition-colors duration-200 cursor-pointer ${
          isActive ? 'text-black bg-white' : 'text-white bg-black'
        } ${isHovered || isActive ? 'hover:bg-white hover:text-black' : ''}`}
      >
        <SideNavBarIcon
          iconName={label}
          color={iconColor}
          hoverColor={hoverIconColor}
          isHovered={isHovered || isActive}
          className="w-5 h-5 mr-3"
        />
        <span>{label}</span>
      </a>
    </div>
  );
};

export default NavItem;

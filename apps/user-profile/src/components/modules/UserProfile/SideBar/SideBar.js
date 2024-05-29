import React, { useState } from 'react';

const images = require.context(
  './../../../../images/UserProfile',
  false,
  /\.(png|jpe?g|svg)$/
);

const getImage = (name) => {
  const image = images(`./${name}`);
  console.log(`Image loaded: ${name} -> ${image}`);
  return image;
};

function Avatar({ src, alt }) {
  return (
    <div className="flex justify-center items-center rounded-full overflow-hidden w-10 h-10">
      <img loading="lazy" src={src} alt={alt} className="w-10 h-10 object-cover" />
    </div>
  );
}

function UserInfo({ name, title }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-sky-blue text-md font-normal font-['Oswald'] leading-normal tracking-wide">
        {name}
      </div>
      <div className="text-zinc-100 text-sm font-normal font-['Nunito Sans'] leading-tight">
        {title}
      </div>
    </div>
  );
}

export function NavItem({ icon, hoverIcon, label, isActive, onClick }) {
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
        <img loading="lazy" src={isHovered || isActive ? icon : hoverIcon} alt="" className="w-5 h-5 mr-3" />
        <span>{label}</span>
      </a>
    </div>
  );
}

const Sidebar = ({ isPublic, profilePictureUrl, displayName, title, activeTab, onTabClick }) => {
  const navItems = [
    {
      icon: getImage('overview.png'),
      hoverIcon: getImage('naoverview.png'),
      label: 'Overview',
      tab: 'overview',
    },
    {
      icon: getImage('projects.png'),
      hoverIcon: getImage('naprojects.png'),
      label: 'Projects',
      tab: 'projects',
    },
    {
      icon: getImage('profiles.png'),
      hoverIcon: getImage('naprofiles.png'),
      label: 'Profiles',
      tab: 'profiles',
    },
    {
      icon: getImage('ideas.png'),
      hoverIcon: getImage('naideas.png'),
      label: 'Ideas',
      tab: 'ideas',
    },
    {
      icon: getImage('opportunities.png'),
      hoverIcon: getImage('naopportunities.png'),
      label: 'Opportunities',
      tab: 'opportunities',
    },
  ];

  if (isPublic) return null;

  return (
    <div className="flex flex-col gap-5 pt-6 text-white border-r-2 bg-black border-black border-solid shadow-sm bg-zinc-900 max-w-[288px]">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex gap-3 self-start ml-8">
          <Avatar src={profilePictureUrl} alt="Profile avatar" />
          <UserInfo name={displayName} title={title} />
        </div>
        <div className="gap-0 mt-5 w-full border border-solid bg-zinc-700 border-zinc-700 min-h-[1px]" />
      </div>
      <nav className="flex flex-col items-center gap-3 w-full text-base font-light tracking-wider text-white uppercase">
        {navItems.map(({ icon, hoverIcon, label, tab }) => (
          <NavItem
            key={tab}
            icon={icon}
            hoverIcon={hoverIcon}
            label={label}
            isActive={activeTab === tab}
            onClick={() => onTabClick(tab)}
          />
        ))}
      </nav>
      <div className="flex flex-col gap-5 w-full p-6" />
      <div className="flex flex-col gap-0 items-center justify-center px-7 py-6 mt-auto w-full text-base font-light tracking-wider text-center uppercase border-t border-solid border-zinc-700 text-zinc-100">
        <a href="/logout" className="flex gap-2.5 px-6 py-3 shadow-sm rounded-full hover:bg-zinc-800">
          <img loading="lazy" src="/icons/logout.svg" alt="" className="w-5 h-5" />
          <div>Log out</div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

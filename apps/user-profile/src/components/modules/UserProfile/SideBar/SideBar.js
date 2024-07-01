import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  useSidebarState,
  useSidebarDispatch,
} from './../../../../context/SidebarContext';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';

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
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="w-10 h-10 object-cover"
      />
    </div>
  );
}

function UserInfo({ name }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-sky-blue text-md font-normal font-['Oswald'] leading-normal tracking-wide">
        {name}
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
        <img
          src={isHovered || isActive ? icon : hoverIcon}
          alt=""
          className="w-5 h-5 mr-3"
        />
        <span>{label}</span>
      </a>
    </div>
  );
}

const Sidebar = () => {
  const { userData } = useUserDataContext();
  const state = useSidebarState();
  const dispatch = useSidebarDispatch();
  const router = useRouter();
  const { tab } = router.query;

  useEffect(() => {
    if (tab) {
      dispatch({ type: 'SET_ACTIVE_TAB', payload: tab });
    }
  }, [tab]);

  const handleTabClick = (tab) => {
    dispatch({ type: 'SET_ACTIVE_TAB', payload: tab });
    router.push(
      {
        pathname: router.pathname,
        query: { tab },
      },
      undefined,
      { shallow: true }
    );
  };

  const navItems = [
    {
      icon: getImage('overview.png'),
      hoverIcon: getImage('naoverview.png'),
      label: 'Overview',
      tab: 'overview',
    },
    // { icon: getImage('projects.png'), hoverIcon: getImage('naprojects.png'), label: 'Projects', tab: 'projects' },
    // { icon: getImage('profiles.png'), hoverIcon: getImage('naprofiles.png'), label: 'Profiles', tab: 'profiles' },
    // { icon: getImage('ideas.png'), hoverIcon: getImage('naideas.png'), label: 'Ideas', tab: 'ideas' },
    // { icon: getImage('opportunities.png'), hoverIcon: getImage('naopportunities.png'), label: 'Opportunities', tab: 'opportunities' },
  ];

  return (
    <div className="flex flex-col gap-5 pt-6 text-white border-r-2 bg-black border-black h-full border-solid shadow-sm bg-zinc-900 max-w-[288px]">
      <div className="flex flex-col gap-5 w-full ">
        <div className="flex gap-3 self-start ml-8">
          <Avatar src={userData.profilePictureUrl} alt="Profile avatar" />
          <UserInfo name={userData.name} />
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
            isActive={state.activeTab === tab}
            onClick={() => handleTabClick(tab)}
          />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

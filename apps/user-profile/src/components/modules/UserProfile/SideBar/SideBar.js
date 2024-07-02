import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  useSidebarState,
  useSidebarDispatch,
} from './../../../../context/SidebarContext';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { Avatar, UserInfo, NavItem } from './../SideBarComponents';

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
      iconColor: '#000000',
      hoverIconColor: '#FFFFFF',
      label: 'Overview',
      tab: 'overview',
    },
    // Uncomment and add more nav items as needed
    // { iconColor: '#000000', hoverIconColor: '#FFFFFF', label: 'Projects', tab: 'projects' },
    // { iconColor: '#000000', hoverIconColor: '#FFFFFF', label: 'Ideas', tab: 'ideas' },
    // { iconColor: '#000000', hoverIconColor: '#FFFFFF', label: 'Opportunities', tab: 'opportunities' },
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
        {navItems.map(({ iconColor, hoverIconColor, label, tab }) => (
          <NavItem
            key={tab}
            iconColor={iconColor}
            hoverIconColor={hoverIconColor}
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

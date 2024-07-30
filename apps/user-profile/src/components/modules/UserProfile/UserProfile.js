import { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { EditProfileDataProvider } from './../../../context/EditProfileDataContext';
import { useSidebarDataContext } from './../../../context/SidebarDataContext';

import SideBar from './SideBar';
import Overview from './Overview';
import EditProfileModal from './EditProfileModal';

/**
 * This component has been broken down into two,
 * 1. State management component (UserProfile) – initialising states, getting data from backeend.
 * 2. The view component (UserProfileView) – rendering the UI elements.
 * @export
 * @param {*} { publicUserData, isPublic }
 * @return {*}
 */
export default function UserProfile() {
  const { sidebarState } = useSidebarDataContext();

  const { pages } = sidebarState;

  const showPages = () => {
    if (pages?.showOverview) {
      return <Overview />;
    }
    // else if (pages?.showProjects) {
    //   return <UserProjects myProjects={myProjects} />;
    // } else if (pages?.showProfiles) {
    //   return <People people={people} />;
    // } else if (pages?.showIdeas) {
    //   return <RecommendedIdeas ideas={ideas} />;
    // } else if (pages?.showOpportunities) {
    //   return <Opportunities opportunities={opportunities} />;
    // }
    else {
      return <Overview />;
    }
  };

  return (
    <div className="flex flex-row bg-[#f9f9f9]">
      <div className="w-72">
        <SideBar />
      </div>
      <div className="px-20 pb-20">
        <EditProfileDataProvider>
          {showPages()}
          <EditProfileModal />
        </EditProfileDataProvider>
      </div>
    </div>
  );
}

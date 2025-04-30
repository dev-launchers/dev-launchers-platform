import { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { EditProfileDataProvider } from './../../../context/EditProfileDataContext';
import { useSidebarDataContext } from './../../../context/SidebarDataContext';

import SideBar from './SideBar';
import Overview from './Overview';
import Chatbot from './Chatbot';
import EditProfileModal from './EditProfileModal';

/**
 * UserProfile Component
 *
 * This component manages state and renders different pages based on the user's actions.
 *
 * @export
 * @return {JSX.Element} The UserProfile UI with a sidebar and dynamic content.
 */
export default function UserProfile() {
  // Access the sidebar state from SidebarDataContext
  const { sidebarState } = useSidebarDataContext();

  // Extract pages configuration from the sidebar state
  const { pages } = sidebarState;

  /**
   * Determines which page component to render based on the state of `pages`.
   * Default page is `Overview` if no specific page state is active.
   *
   * @return {JSX.Element} The component corresponding to the active page.
   */
  const showPages = () => {
    if (pages?.showOverview) {
      return <Overview />;
    }
    // Additional page rendering can be uncommented and configured as needed
    // else if (pages?.showProjects) {
    //   return <UserProjects myProjects={myProjects} />;
    // } else if (pages?.showProfiles) {
    //   return <People people={people} />;
    // } else if (pages?.showIdeas) {
    //   return <RecommendedIdeas ideas={ideas} />;
    // } else if (pages?.showOpportunities) {
    //   return <Opportunities opportunities={opportunities} />;
    // }
    else if (pages?.showChatbot) {
      return <Chatbot />;
    } else {
      // Default to Overview if no page is specified
      return <Overview />;
    }
  };

  return (
    <div className="flex flex-row min-h-[75.4vh] bg-[#f9f9f9]">
      <div className="w-72">
        <SideBar />
      </div>

      <div className="px-20 pb-20">
        {/* EditProfileDataProvider wraps child components for state management */}
        <EditProfileDataProvider>
          {/* Render the dynamic page content */}
          {showPages()}

          {/* Edit Profile Modal for user profile editing */}
          <EditProfileModal />
        </EditProfileDataProvider>
      </div>
    </div>
  );
}

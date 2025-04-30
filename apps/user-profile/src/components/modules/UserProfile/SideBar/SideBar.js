import { Typography } from '@devlaunchers/components/components/atoms';
import { useSidebarDataContext } from './../../../../context/SidebarDataContext';
import { sidebarActions } from './../../../../state/actions';
import ProfilePicture from './../../../common/Images/ProfilePicture';

import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import UserInfo from './UserInfo';
import {
  OutlinedOverview,
  OutlinedProjects,
  OutlinedProfiles,
  OutlinedIdeas,
  OutlinedOpportunities,
} from './../../../common/Icons';

import OutlinedCat from '../../../common/Icons/SVG/OutlinedCat';

/**
 * SideBar Component
 *
 * Renders a sidebar with navigation options for the user. Each option triggers
 * an action to update the current page shown in the application.
 *
 * @return {JSX.Element} The sidebar UI with user information and navigation links.
 */
function SideBar() {
  // Access user data from context
  const { userData } = useUserDataContext();

  // Access sidebar state and dispatch function from context
  const { sidebarState, sidebarDispatch } = useSidebarDataContext();

  // Destructure pages object from sidebar state
  const { pages } = sidebarState;

  // Define styling configurations for the sidebar items
  const styling = {
    li: 'flex py-3 pl-6 items-center gap-3 rounded-3xl', // Default list item styles
    text: 'text-white group-hover:text-black', // Default text color and hover effect
    background: 'hover:bg-grayscale-200 hover:cursor-pointer', // Background hover effect
    active: {
      background: 'bg-grayscale-100 hover:cursor-default', // Active state background
      text: 'text-black', // Active state text color
    },
  };

  // Helper function to apply active styling dynamically
  const getActiveStyling = (activePage) => {
    return {
      li: `group ${styling.li} ${
        activePage ? styling.active.background : styling.background
      }`,
      iconColor: `${
        activePage
          ? 'stroke-black'
          : 'stroke-grayscale-100 group-hover:stroke-black'
      }`,
      typography: `${activePage ? styling.active.text : styling.text}`,
    };
  };

  // Apply active styles for each sidebar option
  styling.overview = getActiveStyling(pages.showOverview);
  styling.projects = getActiveStyling(pages.showProjects);
  styling.profiles = getActiveStyling(pages.showProfiles);
  styling.ideas = getActiveStyling(pages.showIdeas);
  styling.opportunities = getActiveStyling(pages.showOpportunities);
  styling.chatbot = getActiveStyling(pages.showChatbot);

  // Event handlers to dispatch actions for page changes
  const onOverviewClick = () => {
    sidebarDispatch({ type: sidebarActions.SHOW_OVERVIEW_SETTING });
  };
  const onProjectsClick = () => {
    sidebarDispatch({ type: sidebarActions.SHOW_PROJECTS_SETTING });
  };
  const onProfilesClick = () => {
    sidebarDispatch({ type: sidebarActions.SHOW_PROFILES_SETTING });
  };
  const onIdeasClick = () => {
    sidebarDispatch({ type: sidebarActions.SHOW_IDEAS_SETTING });
  };
  const onOpportunitiesClick = () => {
    sidebarDispatch({ type: sidebarActions.SHOW_OPPORTUNITIES_SETTING });
  };
  const onChatbotClick = () => {
    sidebarDispatch({ type: sidebarActions.SHOW_CHATBOT_SETTING });
  };

  return (
    // Sidebar container with flex layout and consistent styling
    <div className="flex flex-col gap-7 w-72 text-white border-r-2 bg-grayscale-900 border-grayscale-900 shadow-tra h-full border-solid shadow-sm bg-zinc-900 max-w-[288px]">
      {/* User info section with profile picture and name */}
      <div className="flex gap-4 w-full items-center px-8 py-6 border-b border-[#474747]">
        <ProfilePicture
          imgSrc={userData.profilePictureUrl}
          alt="Profile avatar"
          className="w-10 h-10 shadow-md shadow-grayscale-600 rounded-full overflow-hidden"
        />
        <UserInfo name={userData.name} />
      </div>
      {/* Sidebar navigation options */}
      <ul className="flex flex-col gap-6 px-4">
        {/* Overview navigation item */}
        <li className={styling.overview.li} onClick={onOverviewClick}>
          <OutlinedOverview colorClass={styling.overview.iconColor} />
          <Typography type="p" className={styling.overview.typography}>
            OVERVIEW
          </Typography>
        </li>
        {/* Uncomment the following sections to enable additional navigation options */}
        {/* <li className={styling.projects.li} onClick={onProjectsClick}>
          <OutlinedProjects colorClass={styling.projects.iconColor} />
          <Typography type="p" className={styling.projects.typography}>
            PROJECTS
          </Typography>
        </li>
        <li className={styling.profiles.li} onClick={onProfilesClick}>
          <OutlinedProfiles colorClass={styling.profiles.iconColor} />
          <Typography type="p" className={styling.profiles.typography}>
            PROFILES
          </Typography>
        </li>
        <li className={styling.ideas.li} onClick={onIdeasClick}>
          <OutlinedIdeas colorClass={styling.ideas.iconColor} />
          <Typography type="p" className={styling.ideas.typography}>
            IDEAS
          </Typography>
        </li>
        <li className={styling.opportunities.li} onClick={onOpportunitiesClick}>
          <OutlinedOpportunities colorClass={styling.opportunities.iconColor} />
          <Typography type="p" className={styling.opportunities.typography}>
            OPPORTUNITIES
          </Typography>
        </li>
        <li className={styling.chatbot.li} onClick={onChatbotClick}>
          <OutlinedCat colorClass={styling.chatbot.iconColor} />
          <Typography type="p" className={styling.chatbot.typography}>
            DL Bot
          </Typography>
        </li> */}
      </ul>
    </div>
  );
}

export default SideBar;

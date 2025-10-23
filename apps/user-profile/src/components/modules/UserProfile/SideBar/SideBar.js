import { Typography } from '@devlaunchers/components/components/atoms';
import { useSidebarDataContext } from './../../../../context/SidebarDataContext';
import { sidebarActions } from './../../../../state/actions';
import ProfileImage from '../../../common/ProfileImage';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import UserInfo from './UserInfo';
import {
  OutlinedOverview,
  OutlinedProfiles,
  OutlinedIdeas,
  OutlinedProjects,
  OutlinedOpportunities,
} from './../../../common/Icons';
import OutlinedCat from './../../../common/CatIcon/OutlinedCat';

function SideBar() {
  const { userData } = useUserDataContext();
  const { sidebarState, sidebarDispatch } = useSidebarDataContext();
  const { pages } = sidebarState;

  const styling = {
    li: 'flex py-3 pl-6 items-center gap-3 rounded-3xl',
    text: 'text-white group-hover:text-black',
    background: 'hover:bg-grayscale-200 hover:cursor-pointer',
    active: {
      background: 'bg-grayscale-100 hover:cursor-default',
      text: 'text-black ',
    },
  };

  const getActiveStyling = (activePage) => ({
    li: `group ${styling.li} ${
      activePage ? styling.active.background : styling.background
    }`,
    iconColor: `${
      activePage
        ? 'stroke-black'
        : 'stroke-grayscale-100 group-hover:stroke-black'
    }`,
    typography: `${activePage ? styling.active.text : styling.text}`,
  });

  // Set active styles for each page
  styling.overview = getActiveStyling(pages.showOverview);
  styling.projects = getActiveStyling(pages.showProjects);
  styling.profiles = getActiveStyling(pages.showProfiles);
  styling.ideas = getActiveStyling(pages.showIdeas);
  styling.opportunities = getActiveStyling(pages.showOpportunities);
  styling.chatbot = getActiveStyling(pages.showChatbot);

  // Sidebar click handlers
  const handleClick = (actionType) => {
    sidebarDispatch({ type: actionType });
  };

  return (
    <div className="flex flex-col gap-7 w-72 text-white border-r-2 bg-grayscale-900 border-grayscale-900 shadow-tra h-full border-solid shadow-sm bg-zinc-900 max-w-[288px]">
      {/* User Header */}
      <div className="flex gap-4 w-full items-center px-8 py-6 border-b border-[#474747]">
        <ProfileImage
          imgSrc={userData.profilePictureUrl}
          alt="Profile avatar"
          imageClass="w-10 h-10 shadow-md shadow-grayscale-600 rounded-full overflow-hidden"
        />
        <UserInfo name={userData.name} />
      </div>

      {/* Sidebar Links */}
      <ul className="flex flex-col gap-6 px-4">
        <li
          className={styling.overview.li}
          onClick={() => handleClick(sidebarActions.SHOW_OVERVIEW_SETTING)}
        >
          <OutlinedOverview colorClass={styling.overview.iconColor} />
          <Typography
            variant="secondary"
            className={styling.overview.typography}
          >
            OVERVIEW
          </Typography>
        </li>

        <li
          className={styling.projects.li}
          onClick={() => handleClick(sidebarActions.SHOW_PROJECTS_SETTING)}
        >
          <OutlinedProjects colorClass={styling.projects.iconColor} />
          <Typography
            variant="secondary"
            className={styling.projects.typography}
          >
            PROJECTS
          </Typography>
        </li>

        <li
          className={styling.profiles.li}
          onClick={() => handleClick(sidebarActions.SHOW_PROFILES_SETTING)}
        >
          <OutlinedProfiles colorClass={styling.profiles.iconColor} />
          <Typography
            variant="secondary"
            className={styling.profiles.typography}
          >
            PROFILES
          </Typography>
        </li>

        <li
          className={styling.ideas.li}
          onClick={() => handleClick(sidebarActions.SHOW_IDEAS_SETTING)}
        >
          <OutlinedIdeas colorClass={styling.ideas.iconColor} />
          <Typography variant="secondary" className={styling.ideas.typography}>
            IDEAS
          </Typography>
        </li>

        <li
          className={styling.opportunities.li}
          onClick={() => handleClick(sidebarActions.SHOW_OPPORTUNITIES_SETTING)}
        >
          <OutlinedOpportunities colorClass={styling.opportunities.iconColor} />
          <Typography
            variant="secondary"
            className={styling.opportunities.typography}
          >
            OPPORTUNITIES
          </Typography>
        </li>

        <li
          className={styling.chatbot.li}
          onClick={() => handleClick(sidebarActions.SHOW_CHATBOT_SETTING)}
        >
          <OutlinedCat colorClass={styling.chatbot.iconColor} />
          <Typography
            variant="secondary"
            className={styling.chatbot.typography}
          >
            DL BOT
          </Typography>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;

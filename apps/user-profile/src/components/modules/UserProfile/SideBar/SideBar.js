import { Typography } from '@devlaunchers/components/components/atoms';
import { useSidebarDataContext } from './../../../../context/SidebarDataContext';
import { sidebarActions } from './../../../../state/actions';
import ProfileImage from '../../../common/ProfileImage';

import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import UserInfo from './UserInfo';
import {
  OutlinedOverview,
  OutlinedProjects,
  OutlinedProfiles,
  OutlinedIdeas,
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

  styling.overview = {
    li: `group ${styling.li} ${
      pages.showOverview ? styling.active.background : styling.background
    }`,
    iconColor: `${
      pages.showOverview
        ? 'stroke-black'
        : 'stroke-grayscale-100 group-hover:stroke-black'
    }`,
    typography: `${pages.showOverview ? styling.active.text : styling.text}`,
  };

  styling.projects = {
    li: `group ${styling.li} ${
      pages.showProjects ? styling.active.background : styling.background
    }`,
    iconColor: `${
      pages.showProjects
        ? 'stroke-black'
        : 'stroke-grayscale-100 group-hover:stroke-black'
    }`,
    typography: `${pages.showProjects ? styling.active.text : styling.text}`,
  };

  styling.profiles = {
    li: `group ${styling.li} ${
      pages.showProfiles ? styling.active.background : styling.background
    }`,
    iconColor: `${
      pages.showProfiles
        ? 'stroke-black'
        : 'stroke-grayscale-100 group-hover:stroke-black'
    }`,
    typography: `${pages.showProfiles ? styling.active.text : styling.text}`,
  };

  styling.ideas = {
    li: `group ${styling.li} ${
      pages.showIdeas ? styling.active.background : styling.background
    }`,
    iconColor: `${
      pages.showIdeas
        ? 'stroke-black'
        : 'stroke-grayscale-100 group-hover:stroke-black'
    }`,
    typography: `${pages.showIdeas ? styling.active.text : styling.text}`,
  };

  styling.opportunities = {
    li: `group ${styling.li} ${
      pages.showOpportunities ? styling.active.background : styling.background
    }`,
    iconColor: `${
      pages.showOpportunities
        ? 'stroke-black'
        : 'stroke-grayscale-100 group-hover:stroke-black'
    }`,
    typography: `${
      pages.showOpportunities ? styling.active.text : styling.text
    }`,
  };

  styling.chatbot = {
    li: `group ${styling.li} ${
      pages.showChatbot ? styling.active.background : styling.background
    }`,
    iconColor: `${
      pages.showChatbot
        ? 'stroke-black'
        : 'stroke-grayscale-100 group-hover:stroke-black'
    }`,
    typography: `${pages.showChatbot ? styling.active.text : styling.text}`,
  };

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
    <div className="flex flex-col gap-7 w-72 text-white border-r-2 bg-grayscale-900 border-grayscale-900 shadow-tra h-full border-solid shadow-sm bg-zinc-900 max-w-[288px]">
      <div className="flex gap-4 w-full items-center px-8 py-6 border-b border-[#474747]">
        <ProfileImage
          imgSrc={userData.profilePictureUrl}
          alt="Profile avatar"
          imageClass="w-10 h-10 shadow-md shadow-grayscale-600 rounded-full overflow-hidden"
        />
        <UserInfo name={userData.name} />
      </div>
      <ul className="flex flex-col gap-6 px-4">
        <li className={styling.overview.li} onClick={onOverviewClick}>
          <OutlinedOverview colorClass={styling.overview.iconColor} />
          <Typography type="p" className={styling.overview.typography}>
            OVERVIEW
          </Typography>
        </li>
        {/* <li className={styling.projects.li} onClick={onProjectsClick}>
          <OutlinedProjects colorClass={styling.projects.iconColor} />
          <Typography type="p" className={styling.projects.typography}>
            PROJECTS
          </Typography>
        </li> */}
        {/* <li className={styling.profiles.li} onClick={onProfilesClick}>
          <OutlinedProfiles colorClass={styling.profiles.iconColor} />
          <Typography type="p" className={styling.profiles.typography}>PROFILES</Typography>
        </li>
        <li className={styling.ideas.li} onClick={onIdeasClick}>
          <OutlinedIdeas colorClass={styling.ideas.iconColor} />
          <Typography type="p" className={styling.ideas.typography}>IDEAS</Typography>
        </li>
        <li className={styling.opportunities.li} onClick={onOpportunitiesClick}>
          <OutlinedOpportunities colorClass={styling.opportunities.iconColor} />
          <Typography type="p" className={styling.opportunities.typography}>OPPORTUNITIES</Typography>
        </li> */}

        {/* <li className={styling.chatbot.li} onClick={onChatbotClick}>
          <OutlinedCat colorClass={styling.chatbot.iconColor}/>
          <Typography type="p" className={styling.chatbot.typography}>DL Bot</Typography>
        </li> */}
      </ul>
    </div>
  );
}

export default SideBar;

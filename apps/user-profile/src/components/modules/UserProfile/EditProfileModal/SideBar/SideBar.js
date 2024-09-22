import { Typography } from '@devlaunchers/components/components/atoms';
import { editProfileDataContext } from '../../../../../context/EditProfileDataContext';
import { editProfileActions } from './../../../../../state/actions';
import {
  OutlinedCamera,
  OutlinedPerson,
  OutlinedNote,
  OutlinedWrench,
  OutlinedShapes,
} from './../../../../common/Icons';

function SideBar() {
  const { editProfileState, editProfileDispatch } = editProfileDataContext();
  const pages = editProfileState.pages;

  const styling = {
    li: 'flex py-3 pl-6 items-center gap-3 rounded-3xl',
    text: 'text-grayscale-500 group-hover:text-white',
    background: 'hover:bg-grayscale-200 hover:cursor-pointer',
    active: {
      background: 'bg-grayscale-500 hover:cursor-default',
      text: 'text-white ',
    },
  };

  styling.photo = {
    li: `group ${styling.li} ${
      pages.showPhoto ? styling.active.background : styling.background
    }`,
    iconColor: `${
      pages.showPhoto
        ? 'fill-white'
        : 'fill-grayscale-400 group-hover:fill-white'
    }`,
    typography: `${pages.showPhoto ? styling.active.text : styling.text}`,
  };

  styling.bio = {
    li: `group ${styling.li} ${
      pages.showBio ? styling.active.background : styling.background
    }`,
    iconColor: `${
      pages.showBio ? 'fill-white' : 'fill-grayscale-400 group-hover:fill-white'
    }`,
    typography: `${pages.showBio ? styling.active.text : styling.text}`,
  };

  styling.details = {
    li: `group ${styling.li} ${
      pages.showDetails ? styling.active.background : styling.background
    }`,
    iconColor: `${
      pages.showDetails
        ? 'stroke-white'
        : 'stroke-grayscale-400 group-hover:stroke-white'
    }`,
    typography: `${pages.showDetails ? styling.active.text : styling.text}`,
  };

  styling.skills = {
    li: `group ${styling.li} ${
      pages.showSkills ? styling.active.background : styling.background
    }`,
    iconColor: `${
      pages.showSkills
        ? 'stroke-white'
        : 'stroke-grayscale-400 group-hover:stroke-white'
    }`,
    typography: `${pages.showSkills ? styling.active.text : styling.text}`,
  };

  styling.interests = {
    li: `group ${styling.li} ${
      pages.showInterests ? styling.active.background : styling.background
    }`,
    iconColor: `${
      pages.showInterests
        ? 'fill-white'
        : 'fill-grayscale-400 group-hover:fill-white'
    }`,
    typography: `${pages.showInterests ? styling.active.text : styling.text}`,
  };

  const onPhotoClick = () => {
    editProfileDispatch({ type: editProfileActions.SHOW_PHOTO_SETTING });
  };

  const onBioClick = () => {
    editProfileDispatch({ type: editProfileActions.SHOW_BIO_SETTING });
  };

  const onDetailsClick = () => {
    editProfileDispatch({ type: editProfileActions.SHOW_DETAILS_SETTING });
  };

  const onSkillsClick = () => {
    editProfileDispatch({ type: editProfileActions.SHOW_SKILLS_SETTING });
  };
  const onInterestsClick = () => {
    editProfileDispatch({ type: editProfileActions.SHOW_INTERESTS_SETTING });
  };

  return (
    <div className="flex flex-col gap-7 w-72 border-r-2 border-grayscale-200 bg-grayscale-100">
      <div className="py-4 px-6 border-b-2 border-grayscale-200">
        <Typography type="pLarge" className="p-0 m-0">
          Edit Profile
        </Typography>
      </div>
      <ul className="flex flex-col gap-6 px-4">
        {/* <li className={styling.photo.li} onClick={onPhotoClick}>
          <OutlinedCamera colorClass={styling.photo.iconColor} />
          <Typography type="p" className={styling.photo.typography}>
            PHOTO
          </Typography>
        </li> */}
        <li className={styling.bio.li} onClick={onBioClick}>
          <OutlinedPerson colorClass={styling.bio.iconColor} />
          <Typography type="p" className={styling.bio.typography}>
            BIO
          </Typography>
        </li>
        {/* <li className={styling.details.li} onClick={onDetailsClick}>
          <OutlinedNote colorClass={styling.details.iconColor} />
          <Typography type="p" className={styling.details.typography}> DETAILS </Typography>
        </li>
        <li className={styling.skills.li} onClick={onSkillsClick} >
          <OutlinedWrench colorClass={styling.skills.iconColor} />
          <Typography type="p" className={styling.skills.typography} > SKILLS </Typography>
        </li>
        <li className={styling.interests.li} onClick={onInterestsClick} >
          <OutlinedShapes colorClass={styling.interests.iconColor} />
          <Typography type="p" className={styling.interests.typography} > INTERESTS </Typography>
        </li> */}
      </ul>
    </div>
  );
}

export default SideBar;

import { Typography } from '@devlaunchers/components/components/atoms';
import { editProfileDataContext } from '../../../../../context/EditProfileDataContext';
import { editProfileActions } from './../../../../../state/actions';
import {
  OutlinedCamera,
  OutlinedPerson,
  OutlinedNote,
  OutlinedCog,
  OutlinedShapes,
} from './../../../../common/Icons';

function SideBar() {
  const { editProfileState, editProfileDispatch } = editProfileDataContext();
  const pages = editProfileState.pages;

  const styling = {
    list: 'flex py-3 pl-6 items-center gap-3 rounded-3xl hover:bg-grayscale-500 hover:text-white hover:cursor-pointer',
    active: {
      background: 'bg-grayscale-500',
      text: 'text-white ',
    },
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
    <div className="flex flex-col gap-7 w-72 border-r-2 border-grayscale-200 bg-grayscale-100 h-full">
      <div className="py-4 px-6 border-b-2 border-grayscale-200">
        <Typography type="pLarge">Edit Profile</Typography>
      </div>
      <ul className="flex flex-col gap-6 px-4">
        <li
          className={`group 
          ${styling.list} 
          ${pages.showPhoto ? styling.active.background : ''}`}
          onClick={onPhotoClick}
        >
          <OutlinedCamera
            colorClass={
              pages.showPhoto
                ? 'fill-white'
                : 'fill-grayscale-400 group-hover:fill-white'
            }
          />
          <Typography
            type="p"
            className={pages.showPhoto ? styling.active.text : ''}
          >
            PHOTO
          </Typography>
        </li>
        <li
          className={`group 
          ${styling.list} 
          ${pages.showBio ? styling.active.background : ''}`}
          onClick={onBioClick}
        >
          <OutlinedPerson
            colorClass={
              pages.showBio
                ? 'fill-white'
                : 'fill-grayscale-400 group-hover:fill-white'
            }
          />
          <Typography
            type="p"
            className={pages.showBio ? styling.active.text : ''}
          >
            BIO
          </Typography>
        </li>
        <li
          className={`group 
          ${styling.list} 
          ${pages.showDetails ? styling.active.background : ''}`}
          onClick={onDetailsClick}
        >
          <OutlinedNote
            colorClass={
              pages.showDetails
                ? 'stroke-white'
                : 'stroke-grayscale-400 group-hover:stroke-white'
            }
          />
          <Typography
            type="p"
            className={pages.showDetails ? styling.active.text : ''}
          >
            DETAILS
          </Typography>
        </li>
        <li
          className={`group 
          ${styling.list} 
          ${pages.showSkills ? styling.active.background : ''}`}
          onClick={onSkillsClick}
        >
          <OutlinedCog
            colorClass={
              pages.showSkills
                ? 'stroke-white'
                : 'stroke-grayscale-400 group-hover:stroke-white'
            }
          />
          <Typography
            type="p"
            className={pages.showSkills ? styling.active.text : ''}
          >
            SKILLS
          </Typography>
        </li>
        <li
          className={`group
          ${styling.list} 
          ${pages.showInterests ? styling.active.background : ''}`}
          onClick={onInterestsClick}
        >
          <OutlinedShapes
            colorClass={
              pages.showInterests
                ? 'fill-white'
                : 'fill-grayscale-400 group-hover:fill-white'
            }
          />
          <Typography
            type="p"
            className={pages.showInterests ? styling.active.text : ''}
          >
            INTERESTS
          </Typography>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;

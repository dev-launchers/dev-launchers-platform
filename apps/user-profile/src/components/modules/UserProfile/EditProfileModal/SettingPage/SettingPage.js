import { editProfileDataContext } from '../../../../../context/EditProfileDataContext';

import PhotoSetting from './Photo';
import BioSetting from './Bio';
import DetailsSetting from './Details';
import SkillsSetting from './Skills';
import InterestsSetting from './Interests';
import Button from '@devlaunchers/components/components/atoms/Button';

function SettingPage() {
  const { editProfileState } = editProfileDataContext();

  const showSetting = () => {
    if (editProfileState.pages.showPhoto) {
      return <PhotoSetting />;
    } else if (editProfileState.pages.showBio) {
      return <BioSetting />;
    } else if (editProfileState.pages.showDetails) {
      return <DetailsSetting />;
    } else if (editProfileState.pages.showSkills) {
      return <SkillsSetting />;
    } else if (editProfileState.pages.showInterests) {
      return <InterestsSetting />;
    } else {
      return null;
    }
  };
  return (
    <div className="flex flex-col w-full">
      <div className="h-full w-full">{showSetting()}</div>
      {editProfileState.showModalFooter ? (
        <div className="flex py-4 pr-14 w-full justify-end items-center gap-6 h-20 border-t-2 border-grayscale-200 bg-[#FCFCFC]">
          <Button buttonType="alternative" buttonSize="standard">
            Cancel
          </Button>
          <Button buttonType="primary" buttonSize="standard">
            Save
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default SettingPage;

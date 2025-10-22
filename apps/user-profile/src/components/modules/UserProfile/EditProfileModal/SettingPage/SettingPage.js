import PhotoSetting from './Photo';
import BioSetting from './Bio';
import DetailsSetting from './Details';
import SkillsSetting from './Skills';
import InterestsSetting from './Interests';
import Loader from './../../../../common/Loader';
import Button from '@devlaunchers/components/components/atoms/Button';
import agent from '@devlaunchers/utility/agent';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { editProfileDataContext } from '../../../../../context/EditProfileDataContext';
import { editProfileActions } from './../../../../../state/actions';

function SettingPage({ onClose }) {
  const { editProfileState, editProfileDispatch } = editProfileDataContext();

  const { userData, setUserData } = useUserDataContext();

  const disableSave = !editProfileState.changes.bioChanged;

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

  const onCancel = () => {
    onClose();
  };

  const onSave = () => {
    const profileId = userData?.profile?.id;
    if (profileId) {
      const requestBody = { data: {} };

      // only update values where changs have been made
      if (editProfileState.changes.bioChanged) {
        requestBody.data.bio = editProfileState.bio;
      }

      // stops multiple triggers from happening
      if (!editProfileState.saveInProgress) {
        editProfileDispatch({ type: editProfileActions.SAVE_CHANGES });
        agent.Profiles.put(profileId, requestBody)
          .then(() => {
            editProfileDispatch({
              type: editProfileActions.SAVE_CHANGES_SUCCESS,
            });
            setUserData({ ...userData, bio: editProfileState.bio });
          })
          .catch((error) => {
            editProfileDispatch({
              type: editProfileActions.SAVE_CHANGES_FAILED,
            });
            console.log('[Profile Update Error] — ', error);
          });
      }
    }
  };

  return (
    <div className="flex flex-col w-full h-[652px]">
      <div className="w-full px-16 py-7 h-full">{showSetting()}</div>
      {editProfileState.showModalFooter ? (
        <div className="flex py-4 pr-14 gap-10 w-full justify-end items-center h-20 border-t-2 border-grayscale-200 bg-[#FCFCFC]">
          <div>
            <Button
              buttonType="secondary"
              buttonSize="standard"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
          <div>
            <Button
              buttonType="primary"
              buttonSize="standard"
              onClick={onSave}
              disabled={disableSave}
            >
              {editProfileState.saveInProgress ? (
                <p className="flex items-center gap-3">
                  <span>Saving</span> <Loader borderColorClass="border-white" />{' '}
                </p>
              ) : (
                'Save'
              )}
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SettingPage;

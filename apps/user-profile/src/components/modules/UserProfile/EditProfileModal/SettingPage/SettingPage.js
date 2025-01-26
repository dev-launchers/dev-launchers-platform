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

/**
 * SettingPage Component
 *
 * Handles the rendering of different profile settings pages and allows the user
 * to save changes made to their profile. The component includes:
 * - Conditional rendering of setting components (Photo, Bio, Details, etc.).
 * - Save functionality with state management.
 *
 * @return {JSX.Element} The rendered settings page.
 */
function SettingPage() {
  // Access edit profile state and dispatch function from context
  const { editProfileState, editProfileDispatch } = editProfileDataContext();

  // Access user data and its setter from context
  const { userData, setUserData } = useUserDataContext();

  // Determine whether the "Save" button should be disabled
  const disableSave = !editProfileState.changes.bioChanged;

  /**
   * Conditionally render the appropriate settings page based on the current state.
   *
   * @return {JSX.Element|null} The active settings page or null if none is selected.
   */
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

  /**
   * Handles the "Save" action.
   * Sends updated profile data to the backend if changes are made.
   * @todo more work is still to be done here. Only the edit bio section has been implemented since 26/01/2025.
   * So only the bio is updated in the backend.
   * Review the functionality with the project lead on how the save functionality should work,
   * and refactor where needed.
   */
  const onSave = () => {
    const profileId = userData?.profile?.id;

    if (profileId) {
      const requestBody = { data: {} };

      // Only include bio in the request if it has been changed
      if (editProfileState.changes.bioChanged) {
        requestBody.data.bio = editProfileState.bio;
      }

      // Prevent multiple save operations from triggering simultaneously
      if (!editProfileState.saveInProgress) {
        editProfileDispatch({ type: editProfileActions.SAVE_CHANGES });

        // Make an API call to update the profile
        agent.Profiles.put(profileId, requestBody)
          .then(() => {
            // Dispatch success action and update user data context
            editProfileDispatch({
              type: editProfileActions.SAVE_CHANGES_SUCCESS,
            });
            setUserData({ ...userData, bio: editProfileState.bio });
          })
          .catch((error) => {
            // Dispatch failure action on error
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
      {/* Render the active setting page */}
      <div className="w-full px-16 py-7 h-full">{showSetting()}</div>

      {/* Render the footer with "Save" button if the modal footer should be displayed */}
      {editProfileState.showModalFooter ? (
        <div className="flex py-4 pr-14 w-full justify-end items-center gap-6 h-20 border-t-2 border-grayscale-200 bg-[#FCFCFC]">
          <Button
            buttonType="primary"
            buttonSize="standard"
            onClick={onSave}
            disabled={disableSave} // Disable the button if there are no changes
          >
            {/* Show a loader if save operation is in progress */}
            {editProfileState.saveInProgress ? (
              <p className="flex items-center gap-3">
                <span>Saving</span> <Loader borderColorClass="border-white" />{' '}
              </p>
            ) : (
              'Save' // Show "Save" text when not saving
            )}
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default SettingPage;

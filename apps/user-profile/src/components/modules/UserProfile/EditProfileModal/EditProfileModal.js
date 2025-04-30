import { editProfileDataContext } from '../../../../context/EditProfileDataContext';
import { editProfileActions } from './../../../../state/actions';

import SideBar from './SideBar';
import SettingPage from './SettingPage';
import Modal from './../../../common/Modal';

/**
 * EditProfileModal Component
 *
 * Displays a modal for editing user profile settings. The modal includes a sidebar
 * for navigation and a settings page for the main content. It is shown conditionally
 * based on the state managed by the `EditProfileDataContext`.
 *
 * @return {JSX.Element|null} The rendered modal if the state indicates it should be shown, or null.
 */
function EditProfileModal() {
  // Access the edit profile state and dispatch from context
  const { editProfileState, editProfileDispatch } = editProfileDataContext();

  /**
   * Handles the close action of the modal.
   * Dispatches an action to hide the edit profile modal.
   */
  const onClose = () => {
    editProfileDispatch({ type: editProfileActions.HIDE_EDIT_PROFILE_MODAL });
  };

  // Render the modal only if the `showEditProfileModal` flag is true
  return editProfileState.showEditProfileModal ? (
    <Modal
      maxHeight="720px" // Sets the maximum height of the modal
      width="1000px" // Sets the width of the modal
      showHeader={true} // Displays the header for the modal
      onClose={onClose} // Close action handler
    >
      <div className="flex">
        {/* Sidebar navigation for profile settings */}
        <SideBar />
        {/* Main content for editing settings */}
        <SettingPage />
      </div>
    </Modal>
  ) : null; // Render nothing if `showEditProfileModal` is false
}

export default EditProfileModal;

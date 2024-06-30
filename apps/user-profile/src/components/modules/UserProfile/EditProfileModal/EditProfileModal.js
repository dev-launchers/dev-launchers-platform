import { editProfileDataContext } from '../../../../context/EditProfileDataContext';
import { editProfileActions } from './../../../../state/actions';

import SideBar from './SideBar';
import SettingPage from './SettingPage';
import Modal from './../../../common/Modal';

function EditProfileModal() {
  const { editProfileDispatch } = editProfileDataContext();

  const onClose = () => {
    editProfileDispatch({ type: editProfileActions.HIDE_EDIT_PROFILE_MODAL });
  };

  return (
    <Modal isOpen={true} showHeader={true} onClose={onClose}>
      <div className="flex h-[720px] w-[1000px]">
        <SideBar></SideBar>
        <SettingPage></SettingPage>
      </div>
    </Modal>
  );
}

export default EditProfileModal;

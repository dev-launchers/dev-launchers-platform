import ModalHeader from './ModalHeader';
import SideBar from './SideBar';
import SettingPage from './SettingPage';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

function EditProfileModal() {
  const userUnboardingModalStyle = {
    content: {
      position: 'absolute',
      width: '1000px',
      padding: '0px',
      height: '720px',
      top: '50%',
      left: '50%',
      overflow: 'hidden',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1001,
      borderRadius: '16px',
      border: '0',
    },
    overlay: { zIndex: 1000, backgroundColor: 'rgba(0,0,0,.75)' },
  };
  return (
    <>
      <Modal style={userUnboardingModalStyle} isOpen={true}>
        <ModalHeader />

        <div className="flex h-full">
          <SideBar></SideBar>
          <SettingPage></SettingPage>
        </div>
        {/* </ModalHeader> */}
        {/* <ModalBody /> */}
      </Modal>
    </>
  );
}

export default EditProfileModal;

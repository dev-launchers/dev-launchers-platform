import { GradientLine } from '../../FormPage/styledSignupForm';
import Modal from '../PositionPopupModal/Modal';

interface Props {
  showModal: Boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}
const ConfirmationModal = ({
  showModal,
  handleOpenModal,
  handleCloseModal,
}: Props) => {
  return <ModalContent />;
  return (
    <Modal
      preventScroll={true}
      customModalStyles={customModalStyles}
      showModal={showModal}
      handleOpenModal={handleOpenModal}
      handleCloseModal={handleCloseModal}
      modalContent={<ModalContent />}
    >
      {/* <ModalContent /> */}
    </Modal>
  );
};

const ModalContent = () => {
  return (
    <div>
      <h1>Thank you!</h1>
      <GradientLine />
      <h1>Thank!</h1>
    </div>
  );
};

const customModalStyles = {
  content: {
    width: '2px',
    height: '3px',
    margin: 'auto',
  },
};

export default ConfirmationModal;

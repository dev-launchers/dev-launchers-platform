import { ApplyButton } from '../../FilterPage/RoleModal/StyledRoleModal';
import { GradientLine } from '../../FormPage/styledSignupForm';
import Modal from '../PositionPopupModal/Modal';
import {
  ConfirmationModalSection,
  confirmationModalStyles,
} from './StyledConfirmationModal';

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
  return (
    <Modal
      modalIsOpen={showModal}
      closeModal={handleCloseModal}
      customModalStyles={confirmationModalStyles}
      handleOpenModal={handleOpenModal}
      modalContent={
        <ConfirmationModalSection>
          <h3>Thank you!</h3>
          <GradientLine height={'5px'} />
          <p>
            Your application has been received and is now being reviewed. After
            the product owner reviews your application, they will reach out
            through the email address you have provided.
          </p>

          <ApplyButton color="DarkElectricBlue" onClick={handleCloseModal}>
            Return to search results
          </ApplyButton>
        </ConfirmationModalSection>
      }
    />
  );
};

export default ConfirmationModal;

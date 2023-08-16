import { useState } from 'react';
import Modal from '../../../../../DetailedPage/PositionPopupModal';
import RoleDetailsModal from '../RoleModal/RoleDetailsModal';
import {
  AboutContainer,
  AboutDescription,
  ButtonsContainer,
  CardContainer,
  CardContent,
  Divider,
  Time,
  TimeCommitment,
  TimeContainer,
  Title,
} from '../RoleCard/styledRoleCard';

const SuggestedRole = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <CardContainer>
      <CardContent>
        <Title>{'UX Designer'}</Title>
        <Time style={{ fontSize: '1rem' }}>PRODUCT PLATFORM</Time>
        <Divider />
        <TimeContainer>
          <TimeCommitment>TIME COMMITMENT</TimeCommitment>
          <Time>{'10'} hrs per week</Time>
        </TimeContainer>
        <AboutContainer>
          <TimeCommitment>ABOUT THE ROLE</TimeCommitment>
          <AboutDescription>
            {
              'Previous experience conducting user interviews virtually, attending weekly meetings, and collaborating with team members to create effective insights.'
            }
          </AboutDescription>
        </AboutContainer>
<<<<<<< HEAD
        <ButtonsContainer /*onClick={handleOpenModal}*/>
=======
        <ButtonsContainer onClick={handleOpenModal}>
>>>>>>> b4f9e26e (build: work in time commitment)
          More Details
        </ButtonsContainer>
        <Modal
          modalIsOpen={showModal}
          closeModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
          modalContent={
            <RoleDetailsModal
              position={null}
              projectSlug={'projectSlug'}
              handleCloseModal={handleCloseModal}
            />
          }
        />
      </CardContent>
    </CardContainer>
  );
};

export default SuggestedRole;

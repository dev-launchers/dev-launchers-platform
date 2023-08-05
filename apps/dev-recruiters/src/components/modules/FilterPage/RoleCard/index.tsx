import { useState } from 'react';
import Modal from '../../DetailedPage/PositionPopupModal';
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
} from './styledRoleCard';

const RoleCard = (props) => {
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
        <Title>{props.role.title}</Title>
        <Time style={{ fontSize: '1rem' }}>PRODUCT PLATFORM</Time>
        <Divider />
        <TimeContainer>
          <TimeCommitment>TIME COMMITMENT</TimeCommitment>
          <Time>{props.role.commitmentHoursPerWeek} hrs per week</Time>
        </TimeContainer>
        <AboutContainer>
          <TimeCommitment>ABOUT THE ROLE</TimeCommitment>
          <AboutDescription>{props.role.description}</AboutDescription>
        </AboutContainer>
        <ButtonsContainer onClick={handleOpenModal}>
          More Details
        </ButtonsContainer>
        <Modal
          modalIsOpen={showModal}
          closeModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
          modalContent={
            <RoleDetailsModal
              position={props.role}
              projectSlug={'projectSlug'}
              handleCloseModal={handleCloseModal}
            />
          }
        />
      </CardContent>
    </CardContainer>
  );
};

export default RoleCard;

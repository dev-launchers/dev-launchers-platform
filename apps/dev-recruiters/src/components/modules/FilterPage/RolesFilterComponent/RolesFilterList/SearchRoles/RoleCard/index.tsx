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
} from './styledRoleCard';
import { agent } from '@devlaunchers/utility';
import { result } from 'lodash';
import { Opportunity } from '@devlaunchers/models';
//let projectId: string;
//let projectSlug: string;

let oppProject = {
  projectId: 'projectId',
  projectSlug: 'projectSlug',
};
const RoleCard = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getProjectSlugs = async () => {
    try {
      const oppProjectSlug = await agent.Opportunities.getById(
        `${props.role.id}`
      ).then((result) => {
        oppProject.projectId = result.attributes.projects.data[0].id;
        oppProject.projectSlug =
          result.attributes.projects.data[0].attributes.slug;

        return result;
      });
      return oppProjectSlug;
    } catch (error) {
      console.log('an error occured while fetching project slugs');
    }
  };

  getProjectSlugs();
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
              projectId={oppProject.projectId}
              projectSlug={oppProject.projectSlug}
              handleCloseModal={handleCloseModal}
            />
          }
        />
      </CardContent>
    </CardContainer>
  );
};

export default RoleCard;

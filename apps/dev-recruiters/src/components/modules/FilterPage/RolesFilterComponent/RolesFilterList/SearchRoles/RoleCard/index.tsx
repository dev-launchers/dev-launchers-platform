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

const RoleCard = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  console.log(props);
  console.log(props.role.id);
  //  const oppProjectSlugs = await agent.Opportunities.getById(`${props.role.id}`);
  let oppProjects: Opportunity;
  const getProjectSlugs = async () =>
    /*let selRoleProjectIdSlug = await agent.Opportunities.list(
      new URLSearchParams(
        `populate=*&filters[projects][slug]][$eq]='dev-reruiting'`
      )
    );
    */
    await agent.Opportunities.getById(`${props.role.id}`);
  /*console.log('inside selRolePro');
    console.log(selRoleProjectIdSlug.attributes.projects);
    console.log(selRoleProjectIdSlug.attributes.projects.data[0].id);
    console.log(
      selRoleProjectIdSlug?.attributes?.projects.data[0].attributes?.slug
    );
    console.log('done');
   */
  //return selRoleProjectIdSlug;

  try {
    const x = getProjectSlugs().then((res) => {
      console.log(res);
      oppProjects = res;
      console.log(res.attributes.projects);
      console.log(res.attributes.projects.data[0].id);
      console.log(res?.attributes?.projects.data[0].attributes?.slug);

      //console.log('2');
    });
  } catch (error) {
    console.error(
      'An error occurred while fetching Opportunities Project Id and Slug',
      error
    );
  }
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
              projectId={oppProjects.attributes.projects.data[0].id}
              projectSlug={oppProjects.attributes.projects.data[0].slug}
              handleCloseModal={handleCloseModal}
            />
          }
        />
      </CardContent>
    </CardContainer>
  );
};

export default RoleCard;

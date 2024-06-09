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
let projectId: string;
let projectSlug: string;

let oppProject = {
  projectId: 'projectId',
  projectSlug: 'projectSlug',
};
const RoleCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  //const [oppProjects, setOppProjects] = useState<Opportunity[]>([]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getProjectSlugs = async () => {
    const oppProjectSlug = await agent.Opportunities.getById(
      `${props.role.id}`
    ).then((result) => {
      projectSlug = result.attributes.projects.data[0].attributes.slug;
      projectId = result.attributes.projects.data[0].id;
      oppProject.projectId = projectId;
      oppProject.projectSlug = projectSlug;

      return oppProjectSlug;
    });
    //const oppProjectSlugs = await oppProjectSlug();
    //return oppProjectSlugs;
    /*.then((res) => {
      console.log('inside getProjectSlugs');
      console.log(res);
      projectSlug = res.attributes.projects.data[0].attributes.slug;
      projectId = res.attributes.projects.data[0].id;
      console.log(projectId);
      console.log(projectSlug);
      return res;
    });
    */
    /*console.log(projectId);
    console.log(projectSlug);
    console.log(oppProjectSlugs);
    return oppProjectSlugs;*/
  };
  console.log('below line getProjectSlugs result');
  getProjectSlugs();
  /*const rrrrr = async () => {
    await getProjectSlugs().then((result) => {
      console.log('inside rrrr');
      console.log(result);
      return result;
    });
  };
  console.log(rrrrr());
  */
  console.log(oppProject);

  //console.log(getProjectSlugs().then((res) => res));
  //const resOppProjectSlugs = async () =>
  //  await getProjectSlugs().then((res) => res);
  //console.log(' line below');

  //console.log(resOppProjectSlugs());
  //console.log(' line above');

  /*let oppProjects: Opportunity[];
  const getProjectSlugs = async () => {
    const result = await agent.Opportunities.getById(`${props.role.id}`);
    oppProjects = result.filter(
      (o: Opportunity) => o.attributes.projects.data.length > 0
    );
    return oppProjects;
  };
  try {
    const ops = getProjectSlugs().then((res) => {
      console.log(res);
      //  setOppProjects(res);
      console.log(res?.attributes.projects);
      console.log(res?.attributes.projects.data[0].id);
      console.log(res?.attributes?.projects.data[0].attributes.slug);

      //console.log('2');
      //return res;
    });
  } catch (error) {
    console.error(
      'An error occurred while fetching Opportunities Project Id and Slug',
      error
    );
  }
  //const oppProjects = getProjectSlugs().then((res) => res);
  console.log(oppProjects);
  console.log('above line');
  */
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

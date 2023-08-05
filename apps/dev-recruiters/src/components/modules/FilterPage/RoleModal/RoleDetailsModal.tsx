import { Opportunity } from '@devlaunchers/models';
import { useState } from 'react';
import {
  BulletList,
  BulletListItem,
  CloseIcon,
  ColorBox,
  ModalDescriptionSection,
  ModalProjectSection,
  TagsList,
  TagsListItem,
  TagsSection,
} from '../../DetailedPage/PositionCard/StyledPositionCard';
import Modal from '../../DetailedPage/PositionPopupModal';
import { RowContainer } from '../../DetailedPage/styledProjectDetails';
import SignUpForm from '../../FormPage/signUpForm';
import { ApplyButton, ButtonsSection, CloseButton } from './StyledRoleModal';

interface Props {
  projectSlug: string;
  position: Opportunity;
  handleCloseModal?: () => void;
}

function RoleDetailsModal({ position, handleCloseModal, projectSlug }: Props) {
  return (
    <div>
      <ColorBox />
      <CloseButton onClick={handleCloseModal}>
        <CloseIcon
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </CloseIcon>
      </CloseButton>
      <ModalTopSection position={position} projectSlug={projectSlug} />
      <ModalBottomSection
        position={position}
        projectSlug={projectSlug}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
}

function ModalTopSection({ position }: Props) {
  return (
    <RowContainer paddingVertical={20} justifycontent="justfiy-left">
      <ModalProjectSection>
        <h3>{position.title}</h3>
        {/* <p>{position.isPlatform ? "Platform" : "Independent"}</p> */}
        <h4>PRODUCT PLATFORM</h4>
        <h6>TIME COMMITMENT</h6>
        <p>{position.commitmentHoursPerWeek} hrs per week</p>
      </ModalProjectSection>
      <ModalDescriptionSection Mobile={false}>
        <h3>ABOUT THE PROJECT</h3>
        <p>{position.description}</p>
      </ModalDescriptionSection>
      <ModalProjectSection>
        <h4>SKILLS REQUIRED</h4>
        <TagsSection>
          <TagsList>
            <TagsListItem color="Dark">{position.level}</TagsListItem>
            {position?.skills?.map((skill, index) => (
              <TagsListItem color="Dark" key={index}>
                {skill?.interest}
              </TagsListItem>
            ))}
          </TagsList>
        </TagsSection>
      </ModalProjectSection>
    </RowContainer>
  );
}

function ModalBottomSection({
  position,
  projectSlug,
  handleCloseModal,
}: Props) {
  const [showApplyModal, setShowApplyModal] = useState(false);

  const handleOpenApplyModal = () => {
    setShowApplyModal(true);
  };

  const handleCloseApplyModal = () => {
    setShowApplyModal(false);
  };

  return (
    <div>
      <RowContainer paddingVertical={20} justifycontent="justfiy-left">
        <ModalProjectSection>
          <div>
            <h4>WHY SHOULD YOU JOIN</h4>
            <BulletList>
              <BulletListItem>Mentor and manage a team</BulletListItem>
              <BulletListItem>
                Collaborate with people around the world
              </BulletListItem>
              <BulletListItem>Deliver high quality software</BulletListItem>
            </BulletList>
          </div>
        </ModalProjectSection>
        {/* {position.expectations.length > 0 && (
          <ModalDescriptionSection Mobile={false}>
            <h3>RESPONSIBILITIES</h3>
            <BulletList>
              {position.expectations.map((item, index) => (
                <ExpectationsListItem key={index}>
                  {item.expectation}
                </ExpectationsListItem>
              ))}
            </BulletList>
          </ModalDescriptionSection>
        )} */}
      </RowContainer>

      <ButtonsSection Mobile={false} onClick={handleOpenApplyModal}>
        <ApplyButton color="DarkElectricBlue">Apply</ApplyButton>
      </ButtonsSection>

      <Modal
        modalIsOpen={showApplyModal}
        handleOpenModal={handleOpenApplyModal}
        closeModal={handleCloseApplyModal}
        modalContent={
          <SignUpForm handleCloseModal={handleCloseModal} position={position} />
        }
      />
    </div>
  );
}

export default RoleDetailsModal;

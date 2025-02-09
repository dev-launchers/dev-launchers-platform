import { Opportunity } from '@devlaunchers/models';
import { useState } from 'react';
import { useUserDataContext } from '@devlaunchers/components/src/context/UserDataContext';
import {
  BulletList,
  BulletListItem,
  CloseIcon,
  ColorBox,
  ExpectationsListItem,
  ModalDescriptionSection,
  ModalProjectSection,
  ModalSkillRequiredSection,
  TagsList,
  TagsListItem,
  TagsSection,
} from '../../../../../DetailedPage/PositionCard/StyledPositionCard';
import Modal from '../../../../../DetailedPage/PositionPopupModal';
import {
  RowContainerTop,
  RowContainerBottom,
} from '../../../../../DetailedPage/styledProjectDetails';
import SignUpForm from '../../../../../FormPage/signUpForm';
import LoginPage from '../../../../../LoginPage/loginPage';
import {
  ApplyButton,
  ButtonsSection,
  SaveForLaterButton,
  CloseButton,
} from './StyledRoleModal';
import { RoleDetailsModalWrapper } from './StyledRoleModal';
import { CloseColorBoxContainer } from './StyledRoleModal';
import { Icons } from '@devlaunchers/components/src/assets';

interface Props {
  projectSlug: string;
  projectId: string;
  position: Opportunity;
  handleCloseModal?: () => void;
  isAuthenticated?: boolean;
}

function RoleDetailsModal({
  position,
  handleCloseModal,
  projectId,
  projectSlug,
}: Props) {
  console.log(projectId);
  console.log(projectSlug);

  return (
    <RoleDetailsModalWrapper>
      <CloseColorBoxContainer>
        <ColorBox />
        <CloseButton>
          <Icons.Close height={32} width={32} onClick={handleCloseModal} />
        </CloseButton>
      </CloseColorBoxContainer>
      <ModalTopSection
        position={position}
        projectId={projectId}
        projectSlug={projectSlug}
      />
      <ModalBottomSection
        position={position}
        projectId={projectId}
        projectSlug={projectSlug}
        handleCloseModal={handleCloseModal}
      />
    </RoleDetailsModalWrapper>
  );
}

function ModalTopSection({ position }: Props) {
  /***destructuring propertid from position.attributes */
  const {
    title,
    commitmentHoursPerWeek,
    level,
    description,
    interests: { data },
  } = position.attributes;
  return (
    <RowContainerTop>
      <ModalProjectSection>
        <div className="title">
          <h2>{title}</h2>
          <p>Product Platform</p>
        </div>
        <div className="commitment">
          <h5>TIME COMMITMENT</h5>
          <p>{commitmentHoursPerWeek} hrs per week</p>
        </div>
        <div className="level">
          <h5>
            Level
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-circle-help"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
          </h5>
          <p> {level}</p>
        </div>
      </ModalProjectSection>
      <ModalDescriptionSection Mobile={false}>
        <h5>About the Role</h5>
        <p>{description}</p>
      </ModalDescriptionSection>
      <ModalSkillRequiredSection>
        <div className="require_skill">
          <h5 className="skills">Skills Required</h5>
          <TagsSection>
            <TagsList>
              {data?.map((skill, index) => {
                const { interest } = skill?.attributes;
                return (
                  <TagsListItem color="Dark" key={index}>
                    {interest}
                  </TagsListItem>
                );
              })}
            </TagsList>
          </TagsSection>
        </div>
      </ModalSkillRequiredSection>
    </RowContainerTop>
  );
}

function ModalBottomSection({
  position,
  projectId,
  projectSlug,

  handleCloseModal,
}: Props) {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isAuthenticated } = useUserDataContext();

  const handleOpenApplyModal = () => {
    setShowApplyModal(true);
  };

  const handleCloseApplyModal = () => {
    setShowApplyModal(false);
  };

  /***Handle open and close Login */
  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const customStyles = {
    content: {
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 1)',
      width: '70%',
      height: '80%',
      border: '1px solid  rgba(0, 0, 0, 1)',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1001,
    },
    overlay: { zIndex: 1000, backgroundColor: 'rgba(0,0,0,1)' },
  };
  return (
    <div>
      <RowContainerBottom>
        <ModalProjectSection>
          <div className="responsibilty">
            <h5>Responsibilities</h5>
            <BulletList>
              <BulletListItem>Mentor and manage a team</BulletListItem>
              <BulletListItem>
                Collaborate with people around the world
              </BulletListItem>
              <BulletListItem>Deliver high quality software</BulletListItem>
            </BulletList>
          </div>
        </ModalProjectSection>
        <ModalProjectSection>
          <div className="why">
            <h5>Why Should You Join?</h5>
            <BulletList>
              <BulletListItem>Mentor and manage a team</BulletListItem>
              <BulletListItem>
                Collaborate with people around the world
              </BulletListItem>
              <BulletListItem>Deliver high quality software</BulletListItem>
            </BulletList>
          </div>
        </ModalProjectSection>
      </RowContainerBottom>

      <div>
        {isAuthenticated ? (
          <ButtonsSection Mobile={false} onClick={handleOpenApplyModal}>
            <SaveForLaterButton color="DarkElectricBlue">
              Save For Later
            </SaveForLaterButton>
            <ApplyButton color="DarkElectricBlue">Apply</ApplyButton>
          </ButtonsSection>
        ) : (
          <ButtonsSection Mobile={false} onClick={handleOpenLoginModal}>
            <ApplyButton>Sign In To Apply</ApplyButton>
          </ButtonsSection>
        )}
      </div>

      <Modal
        modalIsOpen={showApplyModal}
        handleOpenModal={handleOpenApplyModal}
        closeModal={handleCloseApplyModal}
        modalContent={
          <SignUpForm
            handleCloseModal={handleCloseModal}
            position={position}
            projectId={projectId}
            projectSlug={projectSlug}
          />
        }
      />
      <Modal
        modalIsOpen={showLoginModal}
        handleOpenModal={handleOpenLoginModal}
        customModalStyles={customStyles}
        modalContent={<LoginPage closeModal={handleCloseLoginModal} />}
      />
    </div>
  );
}

export default RoleDetailsModal;

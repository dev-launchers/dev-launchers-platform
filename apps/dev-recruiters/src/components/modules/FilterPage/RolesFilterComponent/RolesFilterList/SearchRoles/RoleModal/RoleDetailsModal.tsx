import { Opportunity } from '@devlaunchers/models';
import { useState } from 'react';
import { useUserDataContext } from '@devlaunchers/components/src/context/UserDataContext';
import Modal from '../../../../../DetailedPage/PositionPopupModal';
import SignUpForm from '../../../../../FormPage/signUpForm';
import LoginPage from '../../../../../LoginPage/loginPage';
import { Icons } from '@devlaunchers/components/src/assets';
import {
  RoleDetailsModalWrapper,
  CloseColorBoxContainer,
  ColorBox,
  ModalTopSection,
  ModalHeader,
  BadgesContainer,
  Badge,
  ModalDescriptionSection,
  ModalSkillRequiredSection,
  TagsSection,
  TagsList,
  TagsListItem,
  ModalBottomSection,
  ContentGrid,
  ContentSection,
  BulletList,
  BulletListItem,
  ButtonsSection,
  RelatedPositionsSection,
  RelatedPositionsGrid,
  RelatedPositionCard,
  RelatedCardIcon,
  RelatedCardTitle,
  RelatedCardSubtitle,
  RelatedCardMeta,
  RelatedCardDescription,
  RelatedCardButtons,
} from './StyledRoleModal';
import { Button } from '@devlaunchers/components/src/components/atoms';

interface Props {
  projectSlug: string;
  projectId: string;
  position: Opportunity;
  suggestedRoles?: Opportunity[];
  handleCloseModal?: () => void;
}

function RoleDetailsModal({
  position,
  suggestedRoles,
  handleCloseModal,
  projectId,
  projectSlug,
}: Props) {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isAuthenticated } = useUserDataContext();

  const {
    title,
    commitmentHoursPerWeek,
    level,
    description,
    roleCategory,
    interests: { data: skillsData },
  } = position.attributes;

  const handleOpenApplyModal = () => {
    setShowApplyModal(true);
  };

  const handleCloseApplyModal = () => {
    setShowApplyModal(false);
  };

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
      border: '1px solid rgba(0, 0, 0, 1)',
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
    <RoleDetailsModalWrapper>
      {/* Header with Close Button */}
      <CloseColorBoxContainer>
        <ColorBox />
        <Button onClick={handleCloseModal}>
          <Icons.Close height={24} width={24} />
        </Button>
      </CloseColorBoxContainer>

      {/* Top Section */}
      <ModalTopSection>
        <ModalHeader>
          <h2>{title}</h2>
          <p>Platform Team | {roleCategory}</p>
        </ModalHeader>

        <BadgesContainer>
          <Badge>{level}</Badge>
          <Badge>{commitmentHoursPerWeek} Hours Per Week</Badge>
          <Badge>2 Roles Open</Badge>
        </BadgesContainer>

        <ModalDescriptionSection as={'div'}>
          <h5>About the Role</h5>
          <p>{description}</p>
        </ModalDescriptionSection>

        <ModalSkillRequiredSection>
          <h5>Skills Required</h5>
          <TagsSection>
            <TagsList>
              {skillsData?.map((skill, index) => {
                const { interest } = skill?.attributes;
                return (
                  <TagsListItem key={index} as={'div'}>
                    {interest}
                  </TagsListItem>
                );
              })}
            </TagsList>
          </TagsSection>
        </ModalSkillRequiredSection>
      </ModalTopSection>

      {/* Bottom Section */}
      <ModalBottomSection>
        <ContentGrid>
          <ContentSection>
            <h5>Responsibilities</h5>
            <BulletList>
              <BulletListItem>
                Launch and lead engineering initiatives
              </BulletListItem>
              <BulletListItem>
                Create new front-end components and refactor/maintain existing
                front-end and back-end code where applicable
              </BulletListItem>
              <BulletListItem>
                Submit pull requests via GitHub, for review after testing
              </BulletListItem>
              <BulletListItem>
                Implement visual designs created by the UX/UI team
              </BulletListItem>
            </BulletList>
          </ContentSection>

          <ContentSection>
            <h5>Why Should You Join?</h5>
            <BulletList>
              <BulletListItem>
                Develop your professional skills, build and strengthen your
                GitHub portfolio
              </BulletListItem>
              <BulletListItem>
                Collaborate with experienced designers, developers, and product
                leads
              </BulletListItem>
              <BulletListItem>
                Learn and apply modern front-end tools like TypeScript and React
              </BulletListItem>
              <BulletListItem>
                Gain mentorship and feedback through weekly team meetings and
                code reviews
              </BulletListItem>
              <BulletListItem>
                Help build inclusive, mission-driven tech with a global impact
              </BulletListItem>
            </BulletList>
          </ContentSection>
        </ContentGrid>

        {/* Buttons */}
        {isAuthenticated ? (
          <ButtonsSection as={'div'}>
            <Button>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Save For Later
            </Button>
            <Button onClick={handleOpenApplyModal}>Apply</Button>
          </ButtonsSection>
        ) : (
          <ButtonsSection as={'div'}>
            <Button onClick={handleOpenLoginModal}>Sign In To Apply</Button>
          </ButtonsSection>
        )}
      </ModalBottomSection>

      {/* Related Positions */}
      {suggestedRoles && suggestedRoles.length > 0 && (
        <RelatedPositionsSection>
          <h3>Related Positions</h3>
          <RelatedPositionsGrid>
            {suggestedRoles.slice(0, 3).map((role, index) => (
              <RelatedPositionCard key={index} as={'div'}>
                <RelatedCardIcon>
                  <Icons.Bell />
                </RelatedCardIcon>
                <RelatedCardTitle>{role?.attributes?.title}</RelatedCardTitle>
                <RelatedCardSubtitle>
                  Platform Team | {role?.attributes?.roleCategory}
                </RelatedCardSubtitle>
                <RelatedCardMeta>
                  <span>{role?.attributes?.level}</span>
                  <span>
                    {role?.attributes?.commitmentHoursPerWeek} Hours Per Week
                  </span>
                  <span>1 Roles Open</span>
                </RelatedCardMeta>
                <RelatedCardDescription>
                  {role?.attributes?.description}
                </RelatedCardDescription>
                <RelatedCardButtons>
                  <Button>Role Details</Button>
                  <Button>Apply</Button>
                </RelatedCardButtons>
              </RelatedPositionCard>
            ))}
          </RelatedPositionsGrid>
        </RelatedPositionsSection>
      )}

      {/* Modals */}
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
    </RoleDetailsModalWrapper>
  );
}

export default RoleDetailsModal;

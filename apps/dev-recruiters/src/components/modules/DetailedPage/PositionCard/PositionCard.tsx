import { Opportunity } from '@devlaunchers/models';
import Link from 'next/link';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import SignUpForm from '../../FormPage/signUpForm';
import Modal from '../PositionPopupModal/Modal';
import { RowContainer } from '../styledProjectDetails';
import {
  // ApplyButton,
  BulletList,
  BulletListItem,
  Button,
  // ButtonsSection,
  CloseButton,
  CloseIcon,
  ColorBox,
  CommitmentContainer,
  CommitmentSection,
  Container,
  DescriptionSection,
  ExpectationsList,
  ExpectationsListItem,
  ExpectationsSection,
  Icon,
  LikeButton,
  ModalDescriptionSection,
  ModalProjectSection,
  OpportunityDetailsContainer,
  OpportunityInfoContainer,
  PositionDetailsMobile,
  Section,
  TagsList,
  TagsListItem,
  TagsSection,
  TitleSection,
} from './StyledPositionCard';
import {
  ApplyButton,
  ButtonsSection,
} from '@components/modules/FilterPage/RolesFilterComponent/RolesFilterList/SearchRoles/RoleModal/StyledRoleModal';

interface Props {
  projectSlug: string;
  projectId: string;
  position: Opportunity;
  handleCloseModal?: () => void;
}

export default function PositionCard({
  position,
  projectId,
  projectSlug,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Section Mobile={false} color={'Dark'}>
        <LikeButton onClick={() => setLiked((prev) => !prev)}>
          <Icon
            Active={liked}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </Icon>
        </LikeButton>
        <OpportunityInfoContainer>
          <TitleSection>
            <h2>{position.attributes.title}</h2>
          </TitleSection>
          <PositionDetailsMobile>
            <p>{position.attributes.level}</p>
            <p>{position.attributes.commitmentHoursPerWeek} hrs/week</p>
          </PositionDetailsMobile>
          <ButtonsSection Mobile={true}>
            <Button
              color="SonicSilver"
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              {`${isExpanded ? 'Collapse Details' : 'Position details'}`}
            </Button>
            <Link
              href={`${projectSlug}/apply?position=${position.attributes.title}`}
              passHref
            >
              <Button as="a" color="DarkElectricBlue">
                Apply
              </Button>
            </Link>
          </ButtonsSection>
        </OpportunityInfoContainer>
      </Section>

      <Section Mobile={true} color={'Light'}>
        <DescriptionSection Mobile={false} Expanded={isExpanded}>
          <h3>Position Description</h3>
          {isExpanded ? (
            <ReactMarkdown
              components={{
                // Map `h1` (`# heading`) to use `h2`s.
                h1: 'h4',
                // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
              }}
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
            >
              {position.attributes.description}
            </ReactMarkdown>
          ) : (
            <ReactMarkdown
              components={{
                // Map `h1` (`# heading`) to use `h2`s.
                h1: 'h4',
                // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
              }}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {position.attributes.description.slice(
                0,
                position.attributes.description.length / 2
              )}
            </ReactMarkdown>
          )}
        </DescriptionSection>
      </Section>

      <Section Mobile={true} color={'Light'}>
        <OpportunityDetailsContainer>
          <TagsSection>
            <h4>Position Tags</h4>
            <TagsList>
              <TagsListItem color="Dark">
                {position.attributes.level}
              </TagsListItem>
            </TagsList>
          </TagsSection>
        </OpportunityDetailsContainer>
      </Section>

      <Section Mobile={true} color={'Light'} Expanded={isExpanded}>
        <CommitmentContainer>
          <OpportunityDetailsContainer>
            <div>
              <CommitmentSection>
                <h4>Time Commitment</h4>
                <div>
                  <p>Min</p>
                  <p>{position.attributes.commitmentHoursPerWeek} hrs/week</p>
                </div>
              </CommitmentSection>
              <ExpectationsSection Expanded={isExpanded}>
                <h4>Expectations</h4>
                <ExpectationsList>
                  {position.attributes.expectations.map((item, index) => (
                    <ExpectationsListItem key={index}>
                      {item.expectation}
                    </ExpectationsListItem>
                  ))}
                </ExpectationsList>
              </ExpectationsSection>
            </div>
          </OpportunityDetailsContainer>
          <DescriptionSection Mobile={true} Expanded={isExpanded}>
            <h3>Position Description</h3>
            <p>
              {isExpanded
                ? position.attributes.description
                : `${position.attributes.description.substring(0, 320)}...`}
            </p>
          </DescriptionSection>

          <ButtonsSection expanded={isExpanded} Mobile={false}>
            <Button color="SonicSilver" onClick={handleOpenModal}>
              Project details
            </Button>

            <Modal
              modalIsOpen={showModal}
              closeModal={handleCloseModal}
              handleOpenModal={handleOpenModal}
              modalContent={
                <ProjectDetailsModal
                  position={position}
                  projectId={projectId}
                  projectSlug={projectSlug}
                  handleCloseModal={handleCloseModal}
                />
              }
            />
            <Button
              color="SonicSilver"
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              {`${isExpanded ? 'Collapse Description' : 'Expand Description'}`}
            </Button>
            <Link
              href={`${projectSlug}/apply?position=${position.attributes.title}`}
              passHref
            >
              <ApplyButton color="DarkElectricBlue">Apply</ApplyButton>
            </Link>
          </ButtonsSection>
        </CommitmentContainer>
      </Section>
    </Container>
  );
}

function ProjectDetailsModal({
  position,
  handleCloseModal,
  projectId,
  projectSlug,
}: Props) {
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
      <ModalTopSection
        position={position}
        projectId={projectId}
        projectSlug={projectSlug}
      />
      <ModalBottomSection
        position={position}
        projectSlug={projectSlug}
        projectId={projectId}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
}

function ModalTopSection({ position }: Props) {
  return (
    <RowContainer paddingVertical={20} justifycontent="justfiy-left">
      <ModalProjectSection>
        <h3>{position.attributes.title}</h3>

        <h4>PRODUCT PLATFORM</h4>
        <h6>TIME COMMITMENT</h6>
        <p>{position.attributes.commitmentHoursPerWeek} hrs per week</p>
      </ModalProjectSection>
      <ModalDescriptionSection Mobile={false}>
        <h3>ABOUT THE PROJECT</h3>
        <p>{position.attributes.description}</p>
      </ModalDescriptionSection>
      <ModalProjectSection>
        <h4>SKILLS REQUIRED</h4>
        <TagsSection>
          <TagsList>
            <TagsListItem color="Dark">
              {position.attributes.level}
            </TagsListItem>
            {/*{position?.skills?.map((skill, index) => (
              <TagsListItem color="Dark" key={index}>
                {skill?.interest}
              </TagsListItem>
            ))} */}
          </TagsList>
        </TagsSection>
      </ModalProjectSection>
    </RowContainer>
  );
}

function ModalBottomSection({
  position,
  projectId,
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
        {position.attributes.expectations.length > 0 && (
          <ModalDescriptionSection Mobile={false}>
            <h3>RESPONSIBILITIES</h3>
            <BulletList>
              {position.attributes.expectations.map((item, index) => (
                <ExpectationsListItem key={index}>
                  {item.expectation}
                </ExpectationsListItem>
              ))}
            </BulletList>
          </ModalDescriptionSection>
        )}
      </RowContainer>

      <ButtonsSection Mobile={false} onClick={handleOpenApplyModal}>
        <ApplyButton as="a" color="DarkElectricBlue">
          Apply
        </ApplyButton>
      </ButtonsSection>

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
    </div>
  );
}

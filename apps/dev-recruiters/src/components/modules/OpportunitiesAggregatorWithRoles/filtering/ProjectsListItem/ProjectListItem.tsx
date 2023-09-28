import Link from 'next/link';
import { useState } from 'react';
import { ProjectLite } from '@devlaunchers/models/project';
import {
  ItemContainer,
  Section,
  InfoSection,
  DetailsSection,
  DetailsWrapper,
  PositionsContainer,
  Title,
  PositionTitle,
  CommitmentContainer,
  ButtonsContainer,
  PositionsButton,
  DetailsButton,
  PositionLevel,
} from './StyleProjectListItem';
import ReactGA from "@devlaunchers/components/utils/GoogleAnalytics";

interface Props {
  project: ProjectLite;
}

export default function ProjectListItem({ project }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  return (
    <ItemContainer>
      <Section bgColor='NEUTRAL_2' color='NEUTRAL_1'>
        <InfoSection>
          <h2>{project.opportunities[0].title}</h2>
          <span style={{fontSize:"1rem"}}>Product - {project.isPlatform ? 'Platform' : 'Independent'}</span>
          <p>{project.catchPhrase}</p>
        </InfoSection>
      </Section>
      <Section>
        <DetailsSection>
          <DetailsWrapper>
            <PositionsContainer>
              <Title>Positions Available / Level</Title>
              <ul>
                {expanded
                  ? project?.opportunities?.map((opportunity) => (
                      <li key={opportunity.id}>
                        <PositionTitle>{opportunity.title}</PositionTitle>
                        <span> - </span>
                        <PositionLevel>{opportunity.level}</PositionLevel>
                      </li>
                    ))
                  : project.opportunities.slice(0, 3).map((opportunity) => (
                      <li key={opportunity.id}>
                        <PositionTitle>{opportunity.title}</PositionTitle>
                        <span> - </span>
                        <PositionLevel>{opportunity.level}</PositionLevel>
                      </li>
                    ))}
              </ul>
            </PositionsContainer>

            <CommitmentContainer>
              <Title>Time Commitment</Title>
              <p>Min-Max</p>
              <p>{project.commitmentLevel}</p>
            </CommitmentContainer>
          </DetailsWrapper>
          <ButtonsContainer>
            {project.opportunities?.length > 4 && (
              <PositionsButton onClick={() => setExpanded((prev) => !prev)}>
                {expanded ? 'Collapse Positions' : 'More Available Positions'}
              </PositionsButton>
            )}
            <Link href={`join/${project.slug}`} passHref legacyBehavior>
              <DetailsButton onClick={() => {
                ReactGA.event({
                  category: 'Join Page Actions',
                  action: 'Button Clicked [B]',
                  testCategory: 'B',
                  label: project.slug+` [B]`
                });
              }}>
                Project Details
              </DetailsButton>
            </Link>
          </ButtonsContainer>
        </DetailsSection>
      </Section>
    </ItemContainer>
  );
}

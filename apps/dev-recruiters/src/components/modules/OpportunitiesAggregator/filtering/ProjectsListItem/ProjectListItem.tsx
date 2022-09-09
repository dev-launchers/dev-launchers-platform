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

interface Props {
  project: ProjectLite;
}

export default function ProjectListItem({ project }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  return (
    <ItemContainer>
      <Section bgColor='Crayola' color='White'>
        <InfoSection>
          <h2>{project.title}</h2>
          <h3>Product - {project.isPlatform ? 'Platform' : 'Independent'}</h3>
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
                  ? project.opportunities.map((opportunity) => (
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
            <Link href={`/${project.slug}`} passHref>
              <DetailsButton>Project Details</DetailsButton>
            </Link>
          </ButtonsContainer>
        </DetailsSection>
      </Section>
    </ItemContainer>
  );
}

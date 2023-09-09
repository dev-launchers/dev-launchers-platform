import BoxContainer from '../../common/BoxContainer';
import { Opportunity } from '@devlaunchers/models/opportunity';
import Link from 'next/link';
import { useState } from 'react';
import { Project } from 'src/models/project';
import LongCard from '../OpportunitiesAggregator/LongCard';
import ShortCard from '../OpportunitiesAggregator/ShortCard';
import PositionCard from './PositionCard';
import ProductHeader from './ProductHeader';
import {
  BackButton,
  Card,
  CardButton,
  CardContent,
  CardWrapper,
  Container,
  PositionsList,
  Wrapper,
} from './styledProjectDetails';

interface Props {
  project: Project;
  opportunites: Opportunity[];
  maxCommitment: number;
  minCommitment: number;
}

export default function ProjectDetails({
  project,
  opportunites,
  maxCommitment,
  minCommitment,
}: Props) {
  const [expanded, setExpanded] = useState<string[]>([]);

  const IsExpanded = (id: string) => {
    return expanded.includes(id);
  };

  const handleExpand = (id: string) => {
    const items = IsExpanded(id)
      ? [...expanded.filter((el) => el !== id)]
      : [...expanded, id];

    setExpanded(items);
  };

  return (
    <Wrapper>
      <BoxContainer paddingVertical={3}>
        <Link href={'/join'} passHref>
          <BackButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back
          </BackButton>
        </Link>
      </BoxContainer>
      <BoxContainer bgColor="White" paddingVertical={10} marginTop={32}>
        <ProductHeader
          title={project.title}
          vision={project.vision}
          isPlatform={project.isPlatform}
          published_at={project.published_at}
          type="Product"
          maxCommitmentHours={maxCommitment}
          minCommitmentHours={minCommitment}
          interests={project.interests}
          team={project.team}
        />

        <LongCard
          description={project.description}
          details={project.description}
        ></LongCard>
      </BoxContainer>

      <BoxContainer bgColor="White" paddingVertical={32}>
        <CardWrapper>
          {AboutCardsData.map(({ title, elements }, index) => (
            <Card key={index}>
              <h2>{title}</h2>
              <CardContent>
                {elements
                  .slice(0, IsExpanded(title) ? elements.length : 1)
                  .map((element, elIndex) => (
                    <p key={elIndex}>{element}</p>
                  ))}
                <CardButton onClick={() => handleExpand(title)}>
                  {expanded.some((x) => x === title)
                    ? 'Collapse Description'
                    : 'Expand Description'}
                </CardButton>
              </CardContent>
            </Card>
          ))}
          {/* <Card>
            <h2>About Our Volunteers</h2>
            <CardContent>
              <p>
                You’re someone who cares about technology and the people whose
                lives it shapes. You’re looking to build something that matters
                alongside like-minded people. You are excited, ready to learn,
                and looking to grow.
              </p>
              <CardButton>Read Full Description</CardButton>
            </CardContent>
          </Card>

          <Card>
            <h2>About Dev Launchers</h2>
            <CardContent>
              <p>
                Dev Launchers is an international nonprofit organization
                dedicated to preparing people from diverse backgrounds to tackle
                future-proof careers. We are made up of people just like you.
              </p>
              <CardButton></CardButton>
            </CardContent>
          </Card> */}
        </CardWrapper>
      </BoxContainer>
      <BoxContainer bgColor="White" paddingVertical={32}>
        {/* <h1 style={{ marginTop: '0' }}>hello from project details page</h1>
        testing postion Card */}

        <Container>
          <h2>Positions Available</h2>

          {/* 
          <PositionsList>
            {opportunites?.map((position) => (
              <PositionCard
                key={position.id}
                position={position}
                projectSlug={project.slug}
              />
            ))}
          </PositionsList>
          */}
        </Container>
      </BoxContainer>
    </Wrapper>
  );
}

const AboutCardsData = [
  {
    title: 'About Our Volunteers',
    elements: [
      `You’re someone who cares about technology and the people whose lives it shapes. You’re looking to build something that matters alongside like-minded people. You are excited, ready to learn, and looking to grow.`,
      `You want to work towards achieving a goal, you’re willing to work hard, and you’re not afraid to ask for help getting where you want to be! It's not about how much time you can spend, but about being here when you're here. When you work, you work hard.`,
    ],
  },
  {
    title: 'About Dev Launchers',
    elements: [
      `Dev Launchers is an international nonprofit organization dedicated to preparing people from diverse backgrounds to tackle future-proof careers. We are made up of people just like you.`,
      `Dev Launchers facilitates ambitious open source software projects, along with other projects centered around communities and products. We use those same projects to train our members in skills in the realm of software, leadership, community management, product development, marketing, and anything else that may be required to launch real world products. `,
    ],
  },
];

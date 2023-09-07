import React from 'react';
import Avatar from '../../../../images/avatar.png';
import {
  HeaderBlock,
  ColumnTitle,
  Type,
  Username,
  Tags,
  CreationDate,
  Column,
  Row,
  Commitment,
  Vision,
  UsernameAvatar,
} from './StyledProductHeader';
import { Leader2, Project, Team } from '@devlaunchers/models/project';

interface ProductHeaderProps
  extends Pick<
    Project,
    'title' | 'vision' | 'isPlatform' | 'interests' | 'published_at' | 'team'
  > {
  type: 'Product' | 'Project' | 'Idea';
  userAvatar?: string;
  minCommitmentHours: number;
  maxCommitmentHours: number;
}

export default function ProductHeader({
  title,
  vision,
  isPlatform = false,
  type,
  interests = [], //keywords = [],
  published_at, //date,
  team, //username,
  // userAvatar,
  minCommitmentHours,
  maxCommitmentHours,
}: ProductHeaderProps) {
  const teamLeader = (team?.leaders[0] as Partial<Leader2>)?.username;
  const formattedDate = new Date(published_at)
    .toDateString()
    .split(' ')
    .slice(1)
    .join(' ');
  console.log(JSON.stringify(interests, null, 2));
  return (
    <HeaderBlock>
      <Row>
        <Column w="614px" style={{ flexGrow: 1 }}>
          <ColumnTitle>{title}</ColumnTitle>
          <Type>
            {isPlatform ? 'Platform' : 'Independent'} {type}
          </Type>
          <Vision>{vision}</Vision>
        </Column>
        <Column w="384px" style={{ flexGrow: 1 }}>
          <ColumnTitle>Tags</ColumnTitle>
          <Row>
            {interests.data.map(({ attributes, id }) => {
              return <Tags key={id}>{attributes.interest}</Tags>;
            })}
          </Row>
        </Column>
        <Column
          bgColor="#ffffff"
          color="#000000"
          w="384px"
          fa="flex-end"
          style={{ flexGrow: 1 }}
        >
          <ColumnTitle
            style={{ width: '100%', textAlign: 'left' }}
            color="#000000"
          >
            {type} Lead
          </ColumnTitle>
          <Row
            css={`
              width: 100%;
              text-align: left;
              margin-top: 1rem;
              gap: 0.5rem;
            `}
          >
            <UsernameAvatar src={Avatar} />
            <Username>{teamLeader}</Username>
          </Row>
          <CreationDate style={{ width: '100%', textAlign: 'left' }}>
            Product Created: {formattedDate}
          </CreationDate>
          <Commitment style={{ width: '100%', textAlign: 'left' }}>
            {minCommitmentHours} - {maxCommitmentHours} hrs/week
          </Commitment>
        </Column>
      </Row>
    </HeaderBlock>
  );
}

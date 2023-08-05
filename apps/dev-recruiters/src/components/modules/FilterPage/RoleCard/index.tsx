import React from 'react';
import {
  AboutContainer,
  ButtonsContainer,
  CardContainer,
  CardContent,
  TimeCommitment,
  Time,
  Divider,
  TimeContainer,
  Title,
  AboutDescription,
} from './styledRoleCard';
import Link from 'next/link';

const RoleCard = (props) => {
  console.log(props);
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
        <ButtonsContainer>
          <Link href={`join/detail`} passHref>
            More Details
          </Link>
        </ButtonsContainer>
      </CardContent>
    </CardContainer>
  );
};

export default RoleCard;

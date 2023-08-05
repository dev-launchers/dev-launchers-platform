import React from 'react';
import {
  AboutContainer,
  ButtonsContainer,
  CardContainer,
  CardContent,
  Category,
  Content,
  TimeContainer,
  Title,
} from './styledRoleCard';
import Link from 'next/link';

const RoleCard = (props) => {
  return (
    <CardContainer>
      <CardContent>
        <Title>{props.title}</Title>
        <Content style={{ fontSize: '1rem' }}>Product platform</Content>
        <TimeContainer>
          <Category>Time Commitment</Category>
          <Content>{props.time}</Content>
        </TimeContainer>
        <AboutContainer>
          <Category>About the role</Category>
          <Content>
            Play a key role in helping our functional teams collaborate
            seamlessly!
          </Content>
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

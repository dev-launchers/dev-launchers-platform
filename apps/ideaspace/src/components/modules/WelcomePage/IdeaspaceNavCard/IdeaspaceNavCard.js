import React from 'react';
import {
  CardBackground,
  CardTitleDiv,
  CardText,
  CardContinueDiv,
} from './StyledIdeaSpaceNavCard';

const IdeaspaceNavCard = ({
  cardBackgroundColor,
  cardTitle,
  cardDescription,
}) => {
  return (
    <CardBackground
      style={{
        backgroundColor: cardBackgroundColor,
      }}
    >
      <div>
        <CardTitleDiv>{cardTitle}</CardTitleDiv>
        <CardText>{cardDescription}</CardText>
      </div>
      <CardContinueDiv>
        <CardText>CONTINUE &#8594;</CardText>
      </CardContinueDiv>
    </CardBackground>
  );
};

export default IdeaspaceNavCard;

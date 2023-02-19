import React from 'react';
import {
  CardBackground,
  CardTitleDiv,
  CardText,
  CardContinueDiv,
} from './StyledIdeaSpaceNavCard';

const IdeaspaceNavCard = ({
  cardBackgroundColor,
  cardBackgroundImage,
  cardTitle,
  cardDescription,
}) => {
  return (
    <CardBackground
      style={{
        background: `linear-gradient(${cardBackgroundColor}, url(${cardBackgroundImage})`,
        backgroundSize: 'cover'
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

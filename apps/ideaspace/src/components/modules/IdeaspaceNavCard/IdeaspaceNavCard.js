import React from 'react';
import {
  CardBackground,
  CardTitleDiv,
  CardText,
  CardContinueDiv,
} from './StyledIdeaSpaceNavCard';
import LikeButton from '../../../../../../packages/UI/src/components/molecules/InteractionButtons/LikeButton/LikeButton';

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
      }}
    >
      <CardTitleDiv>{cardTitle}</CardTitleDiv>
      <CardText>{cardDescription}</CardText>
      <LikeButton></LikeButton>
      <CardContinueDiv>
        <CardText>CONTINUE &#8594;</CardText>
      </CardContinueDiv>
    </CardBackground>
  );
};

export default IdeaspaceNavCard;

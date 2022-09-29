import React from 'react'
// import CardWrapper from './CardWrapper/StyledCardWrapper';
// import Tab from './Tab/StyledTab';
// import TabText from './TabText/StyledTabText'
// import StarIcon from './StarIcon/StyledStarIcon';
// import AddIconLight from './AddIconLight/StyledAddIconLight';
// import HeaderCard from './HeaderCard/StyledHeaderCard';
// import HeaderContent from './HeaderContent/StyledHeaderContent';
// import HeaderTitle from './HeaderTitle/StyledHeaderTitle';
// import HeaderDescription from './HeaderDescription/StyledHeaderDescription';
// import FooterCard from './FooterCard/StyledFooterCard';
// import FooterLink from './FooterLink/StyledFooterLink';
// import MainCard from './MainCard/StyledMainCard';
// import MainList from './MainList/StyledMainList';
// import MainCell from './MainCell/StyledMainCell';
// import MainCellBorders from './MainCellBorders/StyledMainCellBorders';
// import CellTitle from './CellTitle/StyledCellTitle';
// import CellText from './CellText/StyledCellText';

import { Link } from 'react-router-dom';

import { Star } from "phosphor-react";

import {
  CardArea,
  IdeaHeader,
  IdeaDetails,
  IdeaType,
  IdeaPositionsAvailable,
  IdeaTimeCommitment,
  IdeaMoreDetails,
  TextCardTitleBox,
  TextCardTitle,
  TextCardTitleDescription,
  TextCardDetailLabel,
  TextCardDetailData,
  IdeaMoreDetailsButton,


} from "./StyledIdeaCard";


function IdeaCard({ cards, setSelectedCard }) {

  return (

  <CardArea>
    <IdeaHeader>
      <TextCardTitleBox>
        <TextCardTitle> 
          <Star size={22} weight="fill"/>
            {cards.ideaName}
          </TextCardTitle>
      </TextCardTitleBox>
      <TextCardTitleDescription>
        {cards.description}
      </TextCardTitleDescription>
    </IdeaHeader>
      

    <IdeaDetails>

      <IdeaType>
        <TextCardDetailLabel> 
          Type
        </TextCardDetailLabel>
        <TextCardDetailData> 
        {
          cards.skills.map((skill, index) => {
            if (index === cards.skills.length - 1) {
              return skill.skill;
            }
            return skill.skill + ' / ';
        })}
        </TextCardDetailData>
      </IdeaType>

      <IdeaPositionsAvailable>

        <TextCardDetailLabel> 
          Position Available
        </TextCardDetailLabel>

        <TextCardDetailData> 
        {cards.openPositions.map((position, index) => {
            if (index === cards.openPositions.length - 1) {
              return position.title;
            }
            return position.title + ' ';
        })}
        </TextCardDetailData>

      </IdeaPositionsAvailable>

      <IdeaTimeCommitment>
        <TextCardDetailLabel> 
          Time Commitment
        </TextCardDetailLabel>
        <TextCardDetailData> 
        {`${cards.hourCommitmentMin} - ${cards.hourCommitmentMax}`} hrs
        </TextCardDetailData>
      </IdeaTimeCommitment>
    </IdeaDetails>

    <IdeaMoreDetails>
      <IdeaMoreDetailsButton>
        <Link onClick={() => { setSelectedCard(cards) }} to={`/workshopping/${cards.id}`} >
          See More 
        </Link>
      </IdeaMoreDetailsButton>
    </IdeaMoreDetails>

  </CardArea>
  )
}

export default IdeaCard






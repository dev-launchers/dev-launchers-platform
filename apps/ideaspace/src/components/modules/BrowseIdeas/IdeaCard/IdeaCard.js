import React from 'react';
import CardWrapper from './CardWrapper/StyledCardWrapper';
import Tab from './Tab/StyledTab';
import TabText from './TabText/StyledTabText';
import StarIcon from './StarIcon/StyledStarIcon';
import AddIconLight from './AddIconLight/StyledAddIconLight';
import HeaderCard from './HeaderCard/StyledHeaderCard';
import HeaderContent from './HeaderContent/StyledHeaderContent';
import HeaderTitle from './HeaderTitle/StyledHeaderTitle';
import HeaderDescription from './HeaderDescription/StyledHeaderDescription';
import FooterCard from './FooterCard/StyledFooterCard';
import FooterLink from './FooterLink/StyledFooterLink';
import MainCard from './MainCard/StyledMainCard';
import MainList from './MainList/StyledMainList';
import MainCell from './MainCell/StyledMainCell';
import MainCellBorders from './MainCellBorders/StyledMainCellBorders';
import CellTitle from './CellTitle/StyledCellTitle';
import CellText from './CellText/StyledCellText';

import Link from 'next/link';

function IdeaCard({ cards }) {
  return (
    <CardWrapper>
      <AddIconLight />
      <Tab>
        <StarIcon />
        <TabText>Most Recent</TabText>
      </Tab>
      <HeaderCard>
        <HeaderContent>
          <HeaderTitle>{cards.ideaName}</HeaderTitle>
          <HeaderDescription>{cards.tagline}</HeaderDescription>
        </HeaderContent>
      </HeaderCard>
      <MainCard>
        <MainList>
          <MainCell>
            <CellTitle>Project Type</CellTitle>
            <CellText>
              {cards.skills.map((skill, index) => {
                if (index === cards.skills.length - 1) {
                  return skill.skill;
                }
                return skill.skill + ' / ';
              })}
            </CellText>
          </MainCell>
          <MainCellBorders>
            <CellTitle>Positions Available</CellTitle>
            <CellText>
              {cards.openPositions.map((position, index) => {
                if (index === cards.openPositions.length - 1) {
                  return position.title;
                }
                return position.title + ' ';
              })}
            </CellText>
          </MainCellBorders>
          <MainCell>
            <CellTitle>Time Commitment</CellTitle>
            <CellText>
              {`${cards.hourCommitmentMin} - ${cards.hourCommitmentMax}`} hrs
            </CellText>
          </MainCell>
        </MainList>
      </MainCard>
      <FooterCard>
        <Link href={`/ideaspace/workshop/${cards.id}`}>
          <FooterLink href={`/ideaspace/workshop/${cards.id}`}>See More &#62;</FooterLink>       
        </Link>
      </FooterCard>
    </CardWrapper>
  );
}

export default IdeaCard;

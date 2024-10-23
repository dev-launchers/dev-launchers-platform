import React from 'react';
import {
  CardBackground,
  CardTitleDiv,
  CardText,
  CardContinueDiv,
  TypographyH,
  TypographyB,
} from './StyledIdeaSpaceNavCard';

const IdeaspaceNavCard = ({
  cardIcon,
  cardBackgroundColor,
  cardTitle,
  cardDescription,
  cardCTA,
  cardIconCTA,
}) => {
  const backgroundClass =
    cardBackgroundColor === 'rgba(255, 215, 180, 1)'
      ? 'bg-[#FFD7B4]'
      : cardBackgroundColor === 'rgba(216, 236, 243, 1)'
      ? 'bg-[#D8ECF3]'
      : '';
  return (
    <>
      <div
        className={`group flex flex-col rounded-[20px] p-[32px] border-[#3F1F5F] border-[4px] hover:bg-[rgba(48,24,72,1)] text-[#3F1F5F] transition-colors duration-300 ease-in-out ${backgroundClass}`}
        style={{ color: 'rgba(63, 31, 95, 1)' }}
      >
        <div>
          <div className="2xl:h-[350px] xl:h-[294px] lg:h-[294px] md:h-[346px] sm:h-[342px] h-[326px]">
            <div className="mb-[18px] transition-colors duration-300">
              {cardIcon}
            </div>
            <TypographyH className="mb-[6px] group-hover:text-white">
              {cardTitle}
            </TypographyH>
            <TypographyB className="group-hover:text-white">
              {cardDescription}
            </TypographyB>
          </div>
          <div className="flex flex-row gap-1">
            <TypographyB
              className="group-hover:text-white"
              style={{ fontWeight: '700' }}
            >
              {cardCTA}
            </TypographyB>
            {cardIconCTA}
          </div>
        </div>
      </div>
    </>
  );
};

export default IdeaspaceNavCard;

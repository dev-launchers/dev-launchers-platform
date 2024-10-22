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
          <div className="h-[302px] w-[512px] ">
            <div className="mb-4 transition-colors duration-300">
              {cardIcon}
            </div>
            <TypographyH className="mb-[6px] group-hover:text-white">
              {cardTitle}
            </TypographyH>
            <TypographyB className="group-hover:text-white">
              {cardDescription}
            </TypographyB>
          </div>
          <TypographyB
            className="group-hover:text-white"
            style={{ fontWeight: '700' }}
          >
            {cardCTA} &#8594;
          </TypographyB>
        </div>
      </div>
    </>
  );
};

export default IdeaspaceNavCard;

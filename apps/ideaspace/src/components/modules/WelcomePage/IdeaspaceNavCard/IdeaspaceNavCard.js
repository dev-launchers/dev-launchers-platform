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
  cardBorderColor,
}) => {
  const backgroundClass =
    cardBackgroundColor === 'rgba(63, 31, 95, 0.40)'
      ? 'bg-[rgba(63,31,95,0.4)]'
      : cardBackgroundColor === 'rgba(31, 42, 95, 0.40)'
      ? 'bg-[rgba(31,42,95,0.4)]'
      : '';

  const hoverClass =
    cardBackgroundColor === 'rgba(63, 31, 95, 0.40)'
      ? 'hover:bg-[rgba(63,31,95,0.6)]'
      : cardBackgroundColor === 'rgba(31, 42, 95, 0.40)'
      ? 'hover:bg-[rgba(31,42,95,0.6)]'
      : '';

  const borderColor = cardBorderColor || '#3F1F5F';
  return (
    <>
      <div
        className={`group flex flex-col rounded-[20px] p-[32px] border-[4px] text-[#3F1F5F] transition-colors duration-300 ease-in-out ${backgroundClass} ${hoverClass}`}
        style={{ color: 'rgba(63, 31, 95, 1)', borderColor: borderColor }}
      >
        <div>
          <div className="2xl:h-[350px] xl:h-[294px] lg:h-[294px] md:h-[346px] sm:h-[342px] h-[326px]">
            <div className="mb-[18px] transition-colors duration-300">
              <div style={{ fontWeight: 700, color: 'white' }}>{cardIcon}</div>
            </div>
            <TypographyH
              className="mb-[6px]"
              style={{ fontWeight: 700, color: 'white' }}
            >
              {cardTitle}
            </TypographyH>
            <TypographyB style={{ fontWeight: 400, color: 'white' }}>
              {cardDescription}
            </TypographyB>
          </div>
          <div className="flex flex-row gap-1">
            <TypographyB style={{ fontWeight: 700, color: 'white' }}>
              {cardCTA}
            </TypographyB>
            <div style={{ fontWeight: 700, color: 'white' }}>{cardIconCTA}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdeaspaceNavCard;

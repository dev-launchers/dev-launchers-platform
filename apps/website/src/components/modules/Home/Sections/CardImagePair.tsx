import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface CardImagePairProps {
  image: string;
  altText?: string;
  imagePosition: 'top' | 'bottom';
  imageFit?: 'cover' | 'contain' | 'fill';
  imageBorderColor?: string;
  cardBackgroundColor?: string;
  cardBorderColor?: string;
  descriptionTextColor?: string;
  title: string;
  description: string;
  btnText?: string;
  btnLink?: string;
  onClick?: () => void;
}

const COLORS = {
  description: 'hsla(271, 50%, 74%, 1)',
  defaultBorder: 'white',
  defaultBackground: 'hsla(270, 51%, 25%, 0.4)',
} as const;

// Helper function to parse HSLA color and create a new one with different opacity
const modifyHSLAOpacity = (hslaColor: string, newOpacity: number): string => {
  // Default fallback if parsing fails
  if (!hslaColor.startsWith('hsla(')) return `hsla(0, 0%, 100%, ${newOpacity})`;

  try {
    const values = hslaColor.match(/hsla?\(([^)]+)\)/)?.[1].split(',');
    if (!values) return `hsla(0, 0%, 100%, ${newOpacity})`;

    const [h, s, l] = values;
    return `hsla(${h}, ${s}, ${l}, ${newOpacity})`;
  } catch (e) {
    return `hsla(0, 0%, 100%, ${newOpacity})`;
  }
};

const CardImagePair: React.FC<CardImagePairProps> = ({
  image,
  altText,
  imagePosition,
  imageFit = 'cover',
  imageBorderColor,
  cardBackgroundColor,
  cardBorderColor,
  descriptionTextColor,
  title,
  description,
  btnText,
  btnLink,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const LAYOUT = {
    container: {
      base: 'flex sm:max-w-xs grow gap-6',
      position: {
        top: 'flex-col',
        bottom: 'sm:flex-col-reverse flex-col',
      },
    },
    image: {
      wrapper: `basis-1/2 overflow-hidden rounded-3xl border-4`,
      img: (imageFit: 'cover' | 'contain' | 'fill') =>
        `w-full h-full object-${imageFit}`,
    },
    card: {
      wrapper: 'flex basis-1/2 flex-col rounded-3xl border-4 p-6',
      content: 'flex flex-col gap-1',
      title: 'text-2xl text-left font-semibold pt-4 pb-2',
      description: 'text-sm text-left font-normal pb-2',
      buttonWrapper: 'flex flex-row pt-2 pb-4',
      button: 'text-left normal-case',
      link: 'flex flex-row gap-2 align-center py-2 text-white rounded-xl text-left text-base normal-case font-medium',
    },
  } as const;

  const containerClasses = `${LAYOUT.container.base} ${LAYOUT.container.position[imagePosition]}`;
  const imageClasses = LAYOUT.image.img(imageFit);

  // Create shadow color from border color with 0.3 opacity
  const shadowColor = modifyHSLAOpacity(
    cardBorderColor || COLORS.defaultBorder,
    0.3
  );

  const imageWrapperStyle = {
    borderColor: imageBorderColor || COLORS.defaultBorder,
    order: imagePosition === 'top' ? 2 : 1,
  };

  const cardWrapperStyle = {
    borderColor: cardBorderColor || COLORS.defaultBorder,
    backgroundColor: cardBackgroundColor || COLORS.defaultBackground,
    transition: 'all 0.3s ease',
    boxShadow: isHovered ? `inset 0 0 42px ${shadowColor}` : 'none',
  };

  const descriptionStyle = {
    color: descriptionTextColor || COLORS.description,
  };

  const linkStyle = {
    backgroundColor: 'hsla(0, 0%, 0%, 0)',
    borderColor: cardBorderColor || COLORS.defaultBorder,
  };

  return (
    <a
      href={btnLink}
      onClick={onClick}
      className={LAYOUT.card.link}
      style={linkStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={containerClasses}>
        <div className={LAYOUT.image.wrapper} style={imageWrapperStyle}>
          <img
            src={image}
            alt={altText || 'image'}
            style={{ objectFit: 'cover' }}
            loading="lazy"
            className={imageClasses}
          />
        </div>

        <div className={LAYOUT.card.wrapper} style={cardWrapperStyle}>
          <div className={LAYOUT.card.content}>
            <h3 className={LAYOUT.card.title}>{title}</h3>
            <p className={LAYOUT.card.description} style={descriptionStyle}>
              {description}
            </p>
          </div>
          <div className={LAYOUT.card.buttonWrapper}>
            <a
              href={btnLink}
              onClick={onClick}
              className={LAYOUT.card.link}
              style={linkStyle}
            >
              {btnText} <ChevronRight />
            </a>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CardImagePair;

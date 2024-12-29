import React from 'react';
import Button from '@devlaunchers/components/components/atoms/Button';

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
  btnText: string;
  btnLink: string;
  onClick?: () => void;
}

const COLORS = {
  description: 'hsla(271, 50%, 74%, 1)',
  defaultBorder: 'white',
} as const;

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
      wrapper: 'flex  basis-1/2 flex-col rounded-3xl border-4 p-6',
      content: 'flex flex-col gap-1',
      title: 'text-4xl text-left font-normal',
      description: 'text-base text-left font-normal',
      buttonWrapper: 'flex flex-col pt-4',
      button: 'text-left normal-case',
      link: 'border-2 p-4 text-white rounded-xl text-left text-base normal-case font-medium',
    },
  } as const;

  // Dynamic styles that depend on props
  const containerClasses = `${LAYOUT.container.base} ${LAYOUT.container.position[imagePosition]}`;
  const imageClasses = LAYOUT.image.img(imageFit);

  // Style objects for elements with dynamic colors
  const imageWrapperStyle = {
    borderColor: imageBorderColor || COLORS.defaultBorder,
    order: imagePosition === 'top' ? 2 : 1,
  };

  const cardWrapperStyle = {
    backgroundColor: cardBackgroundColor || 'transparent',
    borderColor: cardBorderColor || COLORS.defaultBorder,
  };

  const descriptionStyle = {
    color: descriptionTextColor || COLORS.description,
  };

  const linkStyle = {
    backgroundColor: 'hsla(0, 0%, 0%, 0.25)',
    borderColor: cardBorderColor || COLORS.defaultBorder,
  };

  return (
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
          <a href={btnLink} className={LAYOUT.card.link} style={linkStyle}>
            <Button onClick={onClick}>{btnText}</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardImagePair;

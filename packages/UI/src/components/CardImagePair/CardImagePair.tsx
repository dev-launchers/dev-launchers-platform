import React from 'react';

// Define TypeScript interface for component props
interface CardImagePairProps {
  layoutRatio: '2/3-1/3' | '1/2-1/2' | '3/4-1/4';
  image: string;
  imageBorderColor?: string; // Optional border color for the image
  imageFit?: 'cover' | 'contain' | 'fill';
  imageAspectRatio?: '1/1' | '16/9' | '4/3' | '3/2';
  imagePosition?: 'left' | 'right' | 'top' | 'bottom';
  altText?: string;
  title: string;
  subtitle?: string;
  description: string;
  btnText: string;
  cardBackgroundColor?: string; // Optional background color for the card
  cardBorderColor?: string; // Optional border color for the card
  onClick?: () => void; // Optional click handler
}

// Functional Component using React.FC with defined props
const CardImagePair: React.FC<CardImagePairProps> = ({
  image,
  altText,
  title,
  subtitle,
  description,
  btnText,
  imagePosition = 'right',
  layoutRatio = '2/3-1/3',
  imageFit = 'cover',
  imageAspectRatio = '16/9',
  cardBackgroundColor = 'bg-white',
  cardBorderColor = 'border-gray-200',
  imageBorderColor = 'border-gray-200',
  onClick,
}) => {
  // Flex direction based on image position for responsive design
  const flexDirection = {
    top: 'flex-col',
    bottom: 'flex-col-reverse',
    right: 'flex-row-reverse',
    left: 'flex-row',
  }[imagePosition];

  // Mapping layout ratios to flex-grow settings
  const ratioMap = {
    '2/3-1/3': { card: 'flex-grow md:basis-2/3', image: 'md:basis-1/3' },
    '1/2-1/2': { card: 'flex-grow md:basis-1/2', image: 'md:basis-1/2' },
    '3/4-1/4': { card: 'flex-grow md:basis-3/4', image: 'md:basis-1/4' },
  }[layoutRatio];

  // Determine object-fit style based on prop
  const imageFitClass = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
  }[imageFit];

  // Render component
  return (
    <article
      className={`flex ${flexDirection} mx-auto max-w-full flex-wrap gap-6 p-4 text-left`}
    >
      <div
        // eslint-disable-next-line tailwindcss/no-arbitrary-value
        className={`${ratioMap.image} min-h-10 w-full grow overflow-hidden           rounded-3xl border-4 md:w-[16.25rem]`}
        style={{
          aspectRatio: imageAspectRatio,
          borderColor: imageBorderColor,
          borderStyle: 'solid',
        }}
      >
        <img
          className={`h-full w-full ${imageFitClass}`}
          src={image}
          alt={altText}
          loading="lazy"
        />
      </div>
      <div
        // eslint-disable-next-line tailwindcss/no-arbitrary-value
        className={`${ratioMap.card} flex w-full flex-col rounded-3xl border-4 p-6 md:w-[16.25rem]`}
        style={{
          backgroundColor: cardBackgroundColor,
          borderColor: cardBorderColor,
          borderStyle: 'solid',
        }}
      >
        <div className="flex grow flex-col gap-2">
          <h3 className="mb-2 text-3xl font-bold">{title}</h3>
          <p className="font-nunito-sans text-base font-normal text-gray-600">
            {description}
          </p>
          <button onClick={onClick} className="text-left text-base">
            {btnText}
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardImagePair;

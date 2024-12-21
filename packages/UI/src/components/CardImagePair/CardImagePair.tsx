import Link from 'next/link';
import Button from '../atoms/Button';
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
  description: string;
  btnText: string;
  btnLink?: string;
  cardBackgroundColor?: string; // Optional background color for the card
  cardBorderColor?: string; // Optional border color for the card
  onClick?: () => void; // Optional click handler
}

// Functional Component using React.FC with defined props
const CardImagePair: React.FC<CardImagePairProps> = ({
  image,
  altText,
  title,
  description,
  btnText,
  btnLink,
  imagePosition = 'right',
  layoutRatio = '1/2-1/2',
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

  const btnStyle = {
    button:
      'text-base bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700',
  };
  // Mapping layout ratios to flex-grow settings
  const ratioMap = {
    '2/3-1/3': { card: 'flex-grow md:basis-2/3', image: 'md:basis-1/3' },
    '1/2-1/2': { card: 'flex-grow md:flex-1', image: 'md:flex-1' },
    '3/4-1/4': { card: 'flex-grow md:basis-3/4', image: 'md:basis-1/4' },
  }[layoutRatio];

  // Determine object-fit style based on prop
  const imageFitClass = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
  }[imageFit];

  console.log(btnLink);
  // Render component
  return (
    <article
      className={`mx-auto flex h-96 max-w-xs flex-col flex-wrap gap-2 gap-6 p-4 text-left`}
    >
      <div
        // eslint-disable-next-line tailwindcss/no-arbitrary-value
        className={`basis-2/3 overflow-hidden rounded-3xl border-4`}
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
        className={`flex w-full flex-1 flex-col rounded-3xl border-4 p-6 md:w-[16.25rem]`}
        style={{
          backgroundColor: cardBackgroundColor,
          borderColor: cardBorderColor,
          borderStyle: 'solid',
        }}
      >
        <div className="flex basis-1/3 flex-col gap-2">
          <h3 className="mb-2 text-3xl font-bold">{title}</h3>
          <p className="font-nunito-sans text-lg font-normal text-gray-600">
            {description}
          </p>
          <a href={btnLink}>
            <Button
              onClick={onClick}
              className="`{btnStyle} text-left text-base"
            >
              {btnText}
            </Button>
          </a>
        </div>
      </div>
    </article>
  );
};

export default CardImagePair;

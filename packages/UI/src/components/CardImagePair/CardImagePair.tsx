export interface CardImagePairProps {
  image: string;
  altText: string;
  title: string;
  subtitle?: string;
  description: string;
  imagePosition?: 'left' | 'right';
  layoutRatio?: '2/3-1/3' | '1/2-1/2' | '3/4-1/4';
}

const CardImagePair: React.FC<CardImagePairProps> = ({
  image,
  altText,
  title,
  subtitle,
  description,
  imagePosition = 'right',
  layoutRatio = '2/3-1/3',
}) => {
  const orderClasses =
    imagePosition === 'right'
      ? 'flex-col-reverse md:flex-row-reverse'
      : 'flex-col md:flex-row';
  const cardRatio =
    layoutRatio === '1/2-1/2'
      ? 'basis-1/2'
      : layoutRatio === '3/4-1/4'
      ? 'basis-3/4'
      : 'basis-2/3';
  const imageRatio =
    layoutRatio === '1/2-1/2'
      ? 'basis-1/2'
      : layoutRatio === '3/4-1/4'
      ? 'basis-1/4'
      : 'basis-1/3';
  return (
    <div className={`flex ${orderClasses} items-center justify-center gap-6`}>
      {/* Image Container */}
      <div className={`w-[300px] shrink grow md:h-[300px] ${imageRatio} flex`}>
        <img
          className="w-[300px] shrink grow rounded-3xl md:h-[300px]"
          src={image}
          alt={altText}
        />
      </div>

      {/* Card Container */}
      <div
        className={`w-[300px] shrink grow md:h-[300px] ${cardRatio} rounded-3xl border-2 border-[#ff993e] bg-[#8c4608]/40`}
      >
        <div className="gap-8 px-6 py-8">
          {/* Title + description */}
          <div className="py-6">
            <h2 className="font-['Oswald'] text-2xl font-light leading-9 tracking-wide text-white">
              {title}
            </h2>
            {subtitle && <h3 className="text-lg text-gray-600">{subtitle}</h3>}
            <p className="font-['Nunito Sans'] text-sm font-normal leading-tight text-[#b9b9b9]">
              {description}
            </p>
          </div>

          {/* Button */}
          <div className="bg-black/25 inline-flex h-11 items-center justify-center rounded-md border-[#979797]">
            <div className="bg-black/25 flex items-center justify-center gap-1 rounded-md border-2 border-[#979797] px-[18px] py-3">
              <div className="flex items-center justify-start gap-1">
                <div className="font-['Nunito Sans'] text-sm font-normal capitalize leading-tight text-[#dad8d9]">
                  Leadership Opportunities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardImagePair;

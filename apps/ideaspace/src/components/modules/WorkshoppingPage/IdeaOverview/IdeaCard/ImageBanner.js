// create image banner component
import React from 'react';
import { ImageModal } from './ImageModal';

export const ImageBanner = ({ bannerImage = null }) => {
  const [bgImage, setBgImage] = React.useState(bannerImage);
  const handleSelectImage = (image) => {
    setBgImage(image);
    console.log(bgImage);
  };
  return (
    <div className="w-full h-[304px] rounded-[16px] bg-[#494949]/5 flex flex-col items-center justify-center gap-2">
      {bgImage ? (
        <div
          className="w-full h-full rounded-[16px] relative group cursor-pointer bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage.original_url})` }}
        >
          {/* Hover overlay with SVG */}
          <div className="absolute inset-0 bg-black/50 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div></div>
          </div>
        </div>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M37 25.4999L30.828 19.3279C30.0779 18.578 29.0607 18.1567 28 18.1567C26.9393 18.1567 25.9221 18.578 25.172 19.3279L7 37.4999M5 1.5H33C35.2091 1.5 37 3.29086 37 5.5V33.5C37 35.7091 35.2091 37.5 33 37.5H5C2.79086 37.5 1 35.7091 1 33.5V5.5C1 3.29086 2.79086 1.5 5 1.5ZM17 13.5C17 15.7091 15.2091 17.5 13 17.5C10.7909 17.5 9 15.7091 9 13.5C9 11.2909 10.7909 9.5 13 9.5C15.2091 9.5 17 11.2909 17 13.5Z"
              stroke="#494949"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="pt-4 pb-6 text-center font-normal text-[#494949] line-height-[125%]">
            Select an image to represent your Idea
          </p>{' '}
          <ImageModal handleSelectImage={handleSelectImage} />
        </>
      )}
    </div>
  );
};

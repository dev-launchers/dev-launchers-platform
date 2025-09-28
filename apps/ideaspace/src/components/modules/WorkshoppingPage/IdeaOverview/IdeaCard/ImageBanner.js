// create image banner component
import React from 'react';
import { ImageModal } from './ImageModal';
import { Wand2, Edit2, Trash2 } from 'lucide-react';

export const ImageBanner = ({ bannerImage = null }) => {
  const [bgImage, setBgImage] = React.useState(bannerImage);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isEditImageModalOpen, setIsEditImageModalOpen] = React.useState(false);
  const handleSelectImage = (image) => {
    setBgImage(image);
    console.log(bgImage);
  };
  const handleDeleteImage = () => {
    setBgImage(null);
    // todo: delete image from database
  };
  const handleEditImage = () => {
    console.log('edit image');
    //== open image modal
    setIsEditImageModalOpen(true);
  };
  return (
    <div className="w-full h-[304px] rounded-[16px] bg-[#494949]/5 flex flex-col items-center justify-center gap-2">
      {bgImage ? (
        <div
          className="w-full h-full rounded-[16px] relative group cursor-pointer bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage.original_url})` }}
        >
          {/* Hover overlay with menu on top right*/}
          <div
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <div className="bg-white rounded-md shadow-lg p-2">
              <button className="flex items-center justify-center text-black bg-grayscale-100 rounded-md p-2 w-10 h-10 hover:bg-grayscale-200 transition-colors">
                <Wand2 size={16} />
              </button>
            </div>
            {isMenuOpen && (
              <div className="bg-white rounded-md shadow-lg p-2 flex flex-col gap-2">
                <button className="flex items-center justify-center text-black bg-grayscale-100 rounded-md p-2 w-10 h-10 hover:bg-grayscale-200 transition-colors">
                  <Edit2 size={16} onClick={() => handleEditImage()} />
                </button>
                <button
                  className="flex items-center justify-center text-black bg-grayscale-100 rounded-md p-2 w-10 h-10 hover:bg-grayscale-200 transition-colors"
                  onClick={() => handleDeleteImage()}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            )}
          </div>
          {isEditImageModalOpen && (
            <ImageModal
              handleSelectImage={handleSelectImage}
              onClose={() => setIsEditImageModalOpen(false)}
              isOpen={true}
            />
          )}
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
          </p>
          <ImageModal
            handleSelectImage={handleSelectImage}
            onClose={() => void 0}
            isOpen={false}
          />
        </>
      )}
    </div>
  );
};

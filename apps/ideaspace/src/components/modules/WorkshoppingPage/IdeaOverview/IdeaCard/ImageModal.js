import {
  Dialog,
  DialogPortal,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@devlaunchers/components/src/components/Dialog';
import { useState, useEffect } from 'react';
import Button from '@devlaunchers/components/src/components/atoms/Button/';
import { Trash, Search } from 'lucide-react';
import { agent } from '@devlaunchers/utility';
import Image from 'next/image';
import PexelsLogo from '../../../../../../public/assets/images/pexels-logo.png';

export const ImageModal = ({
  handleSelectImage,
  handleDeleteImage,
  onClose,
  isOpen = false,
}) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState('a');
  const [open, setOpen] = useState(isOpen);
  const [isRemoveDisabled, setIsRemoveDisabled] = useState(true);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };
  const getImages = async () => {
    setError(null);
    const images = await agent.Images.get(
      keyword || 'a',
      new URLSearchParams({ start: '1', limit: '24' })
    );

    if (images.length === 0) {
      setError('No images found');
      return;
    }
    setImages(images);
  };
  const handleSelectImageEvent = (image) => {
    handleSelectImage(image);
    setIsRemoveDisabled(false);
  };
  const handleRemoveImage = () => {
    handleDeleteImage();
    setIsRemoveDisabled(true);
  };
  useEffect(() => {
    if (isOpen) {
      getImages();
      setOpen(true);
    }
  }, [isOpen]);
  return (
    <>
      {/** The DialogContent component automatically includes a DialogOverlay with the default bg-Light-Overlay class, and there's no way to customize it through props.
          This is a global style to override the background color of the dialog overlay */}
      <style jsx global>{`
        .bg-Light-Overlay {
          background-color: transparent !important;
        }
      `}</style>
      <Dialog open={open} onOpenChange={handleClose} id="image-modal">
        <DialogPortal>
          <DialogContent
            hasCloseBtn={false}
            className="w-full max-w-4xl p-5 sm:w-[512px] 
            sm:p-4 sm:left-8 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0
            rounded-3xl
            shadow-[0_4px_6px_3px_rgba(51,51,51,0.10)]
            "
            style={{ background: 'var(--surface-04, #292929)' }}
          >
            <DialogHeader className="w-full flex items-center gap-2">
              <div className="flex items-center justify-start gap-2">
                <div className="bg-black w-16 h-8 relative rounded-lg flex items-center justify-center">
                  <Image
                    width={42}
                    height={21}
                    src={PexelsLogo}
                    alt="pexels logo"
                  />
                </div>
                {/* <DialogTitle className="text-md font-normal">
                  Pexels
                </DialogTitle> */}
              </div>
              <div className="flex items-center justify-end gap-2 w-full">
                <Button
                  type="primary"
                  size="small"
                  color="error"
                  icon={<Trash className="w-6 h-6" />}
                  mode={isRemoveDisabled ? 'light' : 'dark'}
                  disabled={isRemoveDisabled}
                  onClick={() => {
                    handleRemoveImage();
                  }}
                >
                  Remove
                </Button>
                {/* <button
                  className="p-2 rounded-lg flex justify-center items-center gap-2 text-lg"
                  style={{
                    border: isRemoveDisabled
                      ? 'var(--priority-border-width, 1.5px) solid var(--priority-border, #C66)'
                      : 'border: var(--border-width-none, 0) solid var(--priority-border, #C66)',
                    background: isRemoveDisabled
                      ? 'var(--surface-04, #292929)'
                      : 'var(--priority-surface, #000)',
                    color: 'var(--priority-content, #EBC4C4)',
                    opacity: isRemoveDisabled
                      ? 'var(--opacity, 0.4)'
                      : 'var(--opacity, 1)',
                  }}
                  onClick={() => {
                    handleRemoveImage();
                  }}
                >
                  <Trash className="w-6 h-6" />
                  Remove
                </button> */}
              </div>
            </DialogHeader>
            <div className="relative flex items-center justify-center flex-col gap-2 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-0 w-full rounded-lg border border-grayscale-750 p-1">
                {/* <Search className="w-6 h-6" /> */}
                <input
                  type="text"
                  id="search-for-images"
                  name="search-for-images"
                  placeholder="Search for an image"
                  className="w-full h-10 border-none outline-none p-2 placeholder:text-grayscale-750 rounded-lg"
                  onChange={(e) => {
                    setKeyword(e.target.value);
                    if (e.target.value.length > 0) {
                      setIsRemoveDisabled(false);
                    } else {
                      setIsRemoveDisabled(true);
                    }
                  }}
                />
                <div className="w-12 h-8 absolute right-4 bg-black m-2 rounded-lg flex items-center justify-center">
                  <button
                    className="px-2 disabled:cursor-not-allowed"
                    disabled={isRemoveDisabled}
                    onClick={() => {
                      getImages();
                    }}
                  >
                    <Search className="w-6 h-6" color="white" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 w-full pt-3">
                {error && <p className="text-red-700 font-medium">{error}</p>}
                {images && (
                  <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 overflow-y-auto max-h-[420px] w-full">
                    {images.map((image) => (
                      <div
                        key={image.id}
                        className="group"
                        onMouseEnter={(e) => {
                          const imgWrapper =
                            e.currentTarget.querySelector('[data-image]');
                          const text = e.currentTarget.querySelector('a');

                          if (imgWrapper) imgWrapper.style.opacity = '0.7';
                          if (text)
                            text.style.color = 'var(--content-00, #FFF)';
                        }}
                        onMouseLeave={(e) => {
                          const imgWrapper =
                            e.currentTarget.querySelector('[data-image]');
                          const text = e.currentTarget.querySelector('a');

                          if (imgWrapper) imgWrapper.style.opacity = '1';
                          if (text)
                            text.style.color = 'var(--content-03, #B9B9B9)';
                        }}
                      >
                        <div
                          className="relative w-full h-[103px] cursor-pointer"
                          onClick={() => {
                            handleSelectImageEvent(image);
                          }}
                        >
                          <Image
                            width={141}
                            height={103}
                            src={image.small_url}
                            alt={image.name}
                            id={image.id}
                            data-image
                            className="rounded-lg w-full h-full"
                          />
                        </div>

                        <a
                          className="text-xs font-normal underline"
                          style={{ color: 'var(--content-03, #B9B9B9)' }}
                          href={image.photographer_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {image.photographer}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </>
  );
};

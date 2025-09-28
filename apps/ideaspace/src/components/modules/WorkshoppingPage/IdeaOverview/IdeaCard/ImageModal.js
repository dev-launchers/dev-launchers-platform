import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@devlaunchers/components/src/components/Dialog';
import { useState, useEffect } from 'react';
import { atoms } from '@devlaunchers/components/src/components';
import { Icons } from '@devlaunchers/components/src/assets';
import Button from '@devlaunchers/components/src/components/atoms/Button/';
import { Trash, Search } from 'lucide-react';

export const ImageModal = ({ handleSelectImage, onClose, isOpen = false }) => {
  const [isRemoveDisabled, setIsRemoveDisabled] = useState(true);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState('a');
  const [open, setOpen] = useState(isOpen);
  const handleClose = () => {
    setOpen(false);
    onClose();
  };
  const getImages = async () => {
    setError(null);
    const response = await fetch(
      `http://localhost:1337/api/images/keyword/${keyword}?start=1&limit=24`
    );
    const data = await response.json();
    if (!data.success) {
      setError(data.message);
      return;
    }
    if (data.count === 0) {
      setError('No images found');
      return;
    }
    setImages(data.data);
  };
  const handleSelectImageEvent = (image) => {
    handleSelectImage(image);
  };
  const handleBtnClick = () => {
    setOpen(true);
    getImages();
  };
  useEffect(() => {
    if (isOpen) {
      getImages();
      setOpen(true);
    }
  }, [isOpen]);
  return (
    <div id="image-modal-container">
      {!isOpen && (
        <Button
          mode="light"
          type="secondary"
          size="medium"
          onClick={handleBtnClick}
        >
          Select Image
        </Button>
      )}
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogPortal>
          <DialogOverlay />
          <DialogContent hasCloseBtn={false} className="justify-start">
            <DialogHeader className="w-full flex items-center gap-2">
              <div className="flex items-center justify-start gap-2">
                <img
                  src={
                    'https://help.pexels.com/system/photos/41382335545241/image__1_.png'
                  }
                  alt="pexels logo"
                  className="w-6 h-6"
                />
                <DialogTitle className="text-md font-normal">
                  Pexels
                </DialogTitle>
              </div>
              <div className="flex items-center justify-end gap-2 w-full">
                <Button
                  type="tertiary"
                  size="small"
                  icon={<Trash className="w-6 h-6" />}
                  mode={isRemoveDisabled ? 'dark' : 'light'}
                  disabled={isRemoveDisabled}
                >
                  Remove
                </Button>
              </div>
            </DialogHeader>
            <div className="flex items-center justify-center flex-col gap-2 w-[512px]">
              <div className="flex items-center justify-center gap-0 w-full rounded-lg border border-grayscale-750 p-1">
                <Search className="w-6 h-6" />
                <input
                  type="text"
                  id="search-for-images"
                  name="search-for-images"
                  placeholder="Search for an image"
                  className="w-full h-10 border-none outline-none p-2 placeholder:text-grayscale-750"
                  onChange={(e) => {
                    setKeyword(e.target.value);
                    if (e.target.value.length > 0) {
                      setIsRemoveDisabled(false);
                    } else {
                      setIsRemoveDisabled(true);
                    }
                  }}
                />
                <div className="w-10 h-10">
                  <button
                    className="w-10 h-10 px-2 bg-grayscale-750 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
                  <div className="grid gap-2 grid-cols-3 overflow-y-auto max-h-[420px]">
                    {images.map((image) => (
                      <div key={image.original_url}>
                        <div
                          className="w-full h-[103px] cursor-pointer"
                          onClick={() => {
                            handleSelectImageEvent(image);
                          }}
                        >
                          <img
                            src={image.original_url}
                            alt={image.name}
                            className="rounded-lg w-full h-full"
                          />
                        </div>
                        <a
                          className="text-xs font-normal underline text-grayscale-600"
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
    </div>
  );
};

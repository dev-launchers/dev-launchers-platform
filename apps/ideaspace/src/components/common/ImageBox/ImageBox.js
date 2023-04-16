import React, { useState, useCallback } from 'react';
import { Dialog, IconButton, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { atoms } from '@devlaunchers/components/src/components';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from './canvasUtils';

import {
  Slider,
  CropperWrapper,
} from './StyledImageBox';

const ImageBox = ({ inputImageSrc, setOutputImageSrc, openModal, setOpenModal }) => {

  const handleClose = () => {
    setOpenModal(false);
  };

  const [objectFit, setobjectFit] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const cropperWidth = 350;
  const cropperHeight = 270;

  React.useEffect(() => {
    if (inputImageSrc !== null) {
      let image = new Image();
      image.src = inputImageSrc;
      image.onload = function () {
        if (image.width > image.height) {
          setobjectFit('vertical-cover');
        } else {
          setobjectFit('horizontal-cover');
        }
      };
      setImgSrc(inputImageSrc);
    }
  }, [inputImageSrc]);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, [])

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        inputImageSrc,
        croppedAreaPixels,
        cropperWidth,
        cropperHeight,
      )
      return croppedImage;
    } catch (e) {
      console.error(e);
    }
  }, [inputImageSrc, croppedAreaPixels]);

  const setImage = async () => {
    setOutputImageSrc(await showCroppedImage());
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setCroppedAreaPixels(null);
  }

  return (
    <Dialog
      open={openModal}
      onClose={handleClose}
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '1rem',
          width: '25rem',
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: '1rem',
          top: '0.8rem',
          borderRadius: 0,
          height: '1.5rem',
          width: '1.5rem',
        }}
      >
        x
      </IconButton>

      <DialogTitle
        sx={{
          paddingTop: '2.2rem',
          paddingBottom: '0.5rem',
        }}
      >
        Adjust your image
      </DialogTitle>

      <DialogContent>
        <CropperWrapper>
          <Cropper
            showGrid={false}
            image={imgSrc}
            crop={crop}
            zoom={zoom}
            maxZoom={2}
            aspect={cropperWidth / cropperHeight}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            objectFit={objectFit}
          />
        </CropperWrapper>

        <atoms.Box flexDirection='column' alignItems='center' margin='0.8rem auto 0.5rem' gap='0.2rem'>
          <atoms.Typography type='p'>
            {Math.round(zoom * 100)} %
          </atoms.Typography>

          <Slider
            type="range"
            min={100}
            max={200}
            value={zoom * 100}
            onChange={({ target: { value } }) => setZoom(value / 100)}
          />
        </atoms.Box>
      </DialogContent>

      <DialogActions
        sx={{
          paddingRight: '1rem',
          backgroundColor: '#F0EDEE',
          height: '3.2rem',
          fontSize: '0.8rem'
        }}
      >
        <atoms.Button
          buttonSize='standard'
          buttonType='alternative'
          onClick={handleClose}
        >
          CANCEL
        </atoms.Button>
        <atoms.Button
          buttonSize='standard'
          buttonType='primary'
          onClick={setImage}
        >
          SAVE
        </atoms.Button>
      </DialogActions>
    </Dialog>
  );
}

export default ImageBox;

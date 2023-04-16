import React, { useState } from 'react';
import { Field } from 'formik';
import { atoms } from '@devlaunchers/components/src/components';
import ImageBox from '../../common/ImageBox/ImageBox';
import uploadImage from '../../../images/uploadImage.svg';
import cameraSvg from '../../../images/camera.svg';
import {
  UploadImg,
  CropWrapper,
  CropImg,
  HoverImg,
} from './StyledImgUpload';

const ImgUpload = ({ id, name, initialImgSrc, setFieldValue, touched }) => {
  const [inputImageSrc, setInputImageSrc] = useState('');
  const [outputImageSrc, setOutputImageSrc] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [clickDate, setClickDate] = useState(null);

  React.useEffect(() => {
    if (outputImageSrc != '') {
      setOpenModal(false);
    }
  }, [outputImageSrc]);

  React.useEffect(() => {
    if (initialImgSrc != '') {
      setOutputImageSrc(initialImgSrc);
    }
  }, [initialImgSrc]);

  const clear = () => {
    setOutputImageSrc('');
    setClickDate(Date());
  }

  const hiddenFileInput = React.useRef(null);
  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);
      setInputImageSrc(imageDataUrl);
      setOpenModal(true);
      e.target.value = '';
    }
  }

  function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }

  React.useEffect(() => {
    if (typeof touched[id] == 'boolean' || outputImageSrc != '' || clickDate != null) {
      setFieldValue(id, outputImageSrc);
    } 
  }, [outputImageSrc, clickDate]);

  return (
    <atoms.Box flexDirection='column'>
      <atoms.Typography type='label' style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}>
        DO YOU HAVE A cover image FOR THIS IDEA?
      </atoms.Typography>
      <atoms.Box flexDirection='column' alignItems='flex-start' justifyContent='space-between'>
        <ImageBox
          inputImageSrc={inputImageSrc}
          setOutputImageSrc={setOutputImageSrc}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
        <Field
          as='button'
          id={id}
          name={name}
          type='button'
          onClick={handleClick}
          style={{ border: 'none', padding: '0', }}
        >
          <UploadImg alt="submit_image" src={uploadImage} style={{ display: outputImageSrc ? 'none' : '' }} />
        </Field>
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={onFileChange}
          accept="image/*"
          style={{ display: 'none' }}
        />
        {outputImageSrc ? (
          <atoms.Box flexDirection='row' alignItems='flex-end' gap='2rem'>
            <CropWrapper onClick={handleClick}>
              <CropImg src={outputImageSrc} alt="Cropped" className="Cropped" />
              <HoverImg src={cameraSvg} alt="Camera" className="Camera" />
            </CropWrapper>
            <atoms.Button
              buttonSize='standard'
              buttonType='alternative'
              type='button'
              onClick={clear}
            >
              CLEAR
            </atoms.Button>
          </atoms.Box>
        ) : null}
      </atoms.Box>
    </atoms.Box>
  );
};

export default ImgUpload;
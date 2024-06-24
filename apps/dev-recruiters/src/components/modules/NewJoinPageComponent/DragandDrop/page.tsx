'use client';

import { atoms } from '@devlaunchers/components/src/components';
import axios from 'axios';
import { rgba } from 'polished';
import { ChangeEvent, useRef, useState } from 'react';

export default function DragAndDrop() {
  const [selectFiles, setSelectFiles] = useState<any>([]);
  const [uploadFiles, setUploadFiles] = useState<any>([]);
  let uploadedids = '';
  console.log(selectFiles);
  const portfolioUploadformData = new FormData();
  //let responseUploadId;
  function handleUpload(
    event: MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    const response = (async () => {
      console.log(selectFiles.length);
      for (let i = 0; i < selectFiles.length; ++i) {
        console.log(`i is ${i}`);
        portfolioUploadformData.append('files', selectFiles[i]);

        const postResult = await axios
          .post('http://localhost:1337/api/upload', portfolioUploadformData)
          .then((responseBody) => {
            console.log(responseBody.data[i]['id']);
            /* console.log(uploadedids);
            uploadedids === '' || null || undefined
              ? responseBody.data[i]['id']
              : uploadedids + ',' + responseBody.data[i]['id'];
            console.log(uploadedids);
            */
            setUploadFiles((prevState: any) => [
              ...prevState,
              responseBody.data[i],
            ]);
          });
      }
    })();
  }
  console.log(uploadFiles);
  console.log(uploadFiles.length);
  if (uploadFiles.length === 1) uploadedids = uploadFiles[0]['id'];
  //console.log(uploadFiles[0]['id']);
  //uploadFiles[0]['id'];
  else if (uploadFiles.length > 1) {
    uploadedids = uploadFiles.reduce(
      (acc, currentValue) => acc + ',' + currentValue['id'],
      ''
    );
    uploadedids = uploadedids.slice(1);
  }

  console.log(uploadedids);

  function handleFileSelectChange(event: ChangeEvent<HTMLInputElement>): void {
    const inputFiles = [...event.target.files];

    console.log(inputFiles);
    inputFiles?.map((fil) => {
      console.log(fil);
      setSelectFiles((prevState: any) => [...prevState, fil]);
    });
    console.log(selectFiles);
  }

  function removeFile(name: any, idx: any): void {
    const newArr = [...selectFiles];
    newArr.splice(idx, 1);
    setSelectFiles([]);
    setSelectFiles(newArr);
  }
  console.log(uploadFiles.length);
  if (uploadFiles.length > 0) {
    console.log(uploadFiles[0]['name']);
    console.log(uploadFiles[0]['id']);
  }
  return (
    <>
      <atoms.Box maxWidth="50%">
        <atoms.Button
          buttonSize="standard"
          buttonType="primary"
          type="button"
          onClick={handleUpload}
        >
          Upload
        </atoms.Button>
      </atoms.Box>
      <input
        style={{ color: rgba(0, 0, 0, 0) }}
        id="fileSelect"
        type="file"
        multiple
        onChange={handleFileSelectChange}
        accept=".pdf, .doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, image/*"
      />
      <>
        {selectFiles.length > 0 &&
          selectFiles.map((fil, idx) => (
            <atoms.Box
              justifyContent="center"
              paddingBlock="0.1rem"
              gap="10px"
              flexDirection="row"
              margin="auto"
            >
              {' '}
              <span> {fil.name} </span>
              <span
                className="text-red-500 cursor-pointer"
                onClick={() => removeFile(fil.name, idx)}
              >
                remove
              </span>
            </atoms.Box>
          ))}
      </>
      <>
        {uploadFiles.length > 0 &&
          uploadFiles?.map((upfil, indx) => <span> {upfil['name']} </span>)}
      </>
    </>
  );
}

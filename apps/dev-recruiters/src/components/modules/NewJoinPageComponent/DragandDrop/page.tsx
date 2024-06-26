'use client';

import { atoms } from '@devlaunchers/components/src/components';
import axios from 'axios';
import { rgba } from 'polished';
import { ChangeEvent, useState } from 'react';

export default function DragAndDrop() {
  const [selectFiles, setSelectFiles] = useState<any>([]);
  const [uploadFiles, setUploadFiles] = useState<any>([]);
  const [file, setFile] = useState<string>();

  const [dragActive, setDragActive] = useState<boolean>(false);
  let uploadedids = '';
  console.log(selectFiles);
  const portfolioUploadformData = new FormData();
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

  function dropHandler(e: any): void {
    e.preventDefault();
    // e.stoppropagation();
    setDragActive(false);
    console.log('drop handler start');
    console.log(e.dataTransfer.items);
    /*if (e.dataTransfer.items) {
      [...e.dataTransfer.items].forEach((item, i) => {
        if (item.kind === 'file') {
          const file = item.getAsFile();
          if (file) {
            let blobUrl = URL.createObjectURL(file);
            setFile(blobUrl);
          }
          console.log(`items file[${i}].name = ${file?.name}`);
        }
      });
    } else */
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      for (let i = 0; i < e.dataTransfer.files.length; ++i)
        setSelectFiles((prevState: any) => [
          ...prevState,
          e.dataTransfer.files[i],
        ]);
      /*
      [...e.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });*/
    }
    console.log('drop handler End');
  }

  function dragLeaver(e: any): void {
    e.preventDefault();
    //e.stoppropagation();
    setDragActive(false);
  }

  function dragEnter(e: any): void {
    e.preventDefault();
    //e.stoppropagation();
    setDragActive(true);
  }

  function dragOverHandler(e: any): void {
    e.preventDefault();
    //e.stoppropagation();
    setDragActive(true);
    console.log(e.dataTransfer.items);
  }

  return (
    <>
      <div
        id="drop_zone"
        className={`
           border: 5px solid blue;
  width: 200px;
  height: 100px;
  `}
        onDragEnter={(e) => dragEnter(e)}
        onDrop={(e) => dropHandler(e)}
        onDragOver={(e) => dragOverHandler(e)}
        onDragLeave={(e) => dragLeaver(e)}
      >
        <p>
          Drag and Drop files to this<i> drop zone</i> or{' '}
          <span> Select Files</span> to Upload
        </p>
      </div>
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
              justifyContent="space-between"
              paddingBlock="0.1rem"
              gap="10px"
              flexDirection="row"
              margin="auto"
            >
              <atoms.Typography> {fil.name} </atoms.Typography>
              <atoms.Link
                href="javascript.removeFile(fil.name,idx)"
                text="remove"
              ></atoms.Link>
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

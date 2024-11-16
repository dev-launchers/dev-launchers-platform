'use client';
import { atoms } from '@devlaunchers/components/src/components';
import axios from 'axios';
import { ChangeEvent, useState } from 'react';
export default function DragAndDrop() {
  const [selectFiles, setSelectFiles] = useState<any>([]);
  const [uploadFiles, setUploadFiles] = useState<any>([]);
  const [file, setFile] = useState<string>();
  //const [showUploadModal, setShowUploadModal] = useState(false);
  const [isUploading, setIsUploading] = useState(false); // Uploading state

  const maxSizeInMB = 25;
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  const allowedExtensions = /(\.doc|\.pdf|\.jpg|\.jpeg|\.png)$/i;

  const [dragActive, setDragActive] = useState<boolean>(false);
  let uploadedids = '';
  console.log(selectFiles);
  const portfolioUploadformData = new FormData();
  function handleUpload(
    event: MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    setIsUploading(true);
    console.log('handleUpload');
    alert(isUploading);

    try {
      const response = (async () => {
        console.log(selectFiles.length);
        console.log('handleUpload');
        for (let i = 0; i < selectFiles.length; ++i) {
          console.log(`i is ${i}`);
          portfolioUploadformData.append('files', selectFiles[i]);
          // Check file size

          if (selectFiles[i].size > maxSizeInBytes) {
            alert('File size must be less than 25MB');
            return;
          }

          // Check file type
          if (!allowedExtensions.exec(selectFiles[i].name)) {
            alert(
              'Invalid file type. Only .doc, .pdf, .jpg, .jpeg, and .png are allowed.'
            );
            return;
          }
          /*
        const postResult = await axios
          .post('http://localhost:1337/api/upload', portfolioUploadformData)
          .then((responseBody) => {
            console.log(responseBody.data[i]['id']);
            setUploadFiles((prevState: any) => [
              ...prevState,
              responseBody.data[i],
            ]);
          });

        */
          const postResult = await axios
            .post(
              'http://localhost:1337/googledrive/upload',
              portfolioUploadformData
            )
            .then((responseBody) => {
              console.log(responseBody);
              console.log(responseBody.data.data.id);

              console.log(responseBody.data.data.name);
              setUploadFiles((prevState: any) => [
                ...prevState,
                responseBody.data.data,
              ]);
            });
          postResult;
        }
      })();

      console.log(uploadFiles);
      console.log(uploadFiles.length);
      if (uploadFiles.length === 1) uploadedids = uploadFiles[0]['id'];
      else if (uploadFiles.length > 1) {
        uploadedids = uploadFiles.reduce(
          (acc, currentValue) => acc + ',' + currentValue['id'],
          ''
        );
        uploadedids = uploadedids.slice(1);
      }

      console.log(uploadedids);
      //setShowUploadModal(false);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setIsUploading(false); // Reset uploading state
    }
  }
  function handleFileSelectChange(event: ChangeEvent<HTMLInputElement>): void {
    const inputFiles = [...event.target.files];
    console.log('handleFileSelectChange');
    console.log(inputFiles);
    inputFiles?.map((fil) => {
      console.log(fil);
      setSelectFiles((prevState: any) => [...prevState, fil]);
    });
    console.log(selectFiles);
  }

  //function removeFile(name: any, idx: any): void {
  function removeFile(): void {
    const newArr = [...selectFiles];
    newArr.splice(uploadFiles[0], 1);
    console.log(newArr);
    setSelectFiles([]);
    setSelectFiles(newArr);
    setUploadFiles([]);
    setUploadFiles(newArr);
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
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      for (let i = 0; i < e.dataTransfer.files.length; ++i)
        setSelectFiles((prevState: any) => [
          ...prevState,
          e.dataTransfer.files[i],
        ]);
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
          Please include your portfolio/resume: Max file size 25MB, Only .doc,
          .pdf, .png and .jpg allowed
        </p>
      </div>
      <input
        /*{style={{ color: rgba(0, 0, 0, 0) }} }*/
        id="fileSelect"
        type="file"
        onChange={handleFileSelectChange}
        accept=".pdf, .doc,.docx,.jpg,.jpeg,.png, image/*"
      />
      <atoms.Box maxWidth="50%">
        <atoms.Button
          buttonSize="standard"
          buttonType="primary"
          type="button"
          onClick={handleUpload}
          disabled={isUploading}
        >
          {isUploading ? 'Uploading...' : 'Upload'}
        </atoms.Button>
      </atoms.Box>
      {uploadFiles.length}
      {uploadFiles.length > 0 ? (
        <>
          <atoms.Button
            buttonSize="standard"
            buttonType="primary"
            type="button"
            onClick={removeFile}
          >
            {uploadFiles[0]['name']}
          </atoms.Button>
        </>
      ) : (
        <> NO files loaded yet </>
      )}{' '}
    </>
  );
}

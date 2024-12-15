'use client';
import { atoms } from '@devlaunchers/components/src/components';
import axios from 'axios';
import { ChangeEvent, useState, useRef } from 'react';
export default function DragAndDrop({
  filesUploaded,
  onFilesUploaded,
  //,uploadError
  //  errorEncountered,
  //  onUploadError,
}) {
  // const [selectFiles, setSelectFiles] = useState<any>([]);
  const [selectFiles, setSelectFiles] = useState([]);

  const fileInput = useRef(null);
  const [uploadFiles, setUploadFiles] = useState<any>([]);

  const [file, setFile] = useState<string>();
  //uncommented this
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [isUploading, setIsUploading] = useState(false); // Uploading state
  const maxSizeInMB = 25;
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  const allowedExtensions = /(\.doc|\.pdf|\.jpg|\.jpeg|\.png)$/i;
  const [uploadError, setUploadError] = useState('');
  const [canButVis, setCanButVis] = useState(true);
  const portfolioUploadformData = new FormData();

  //uncommented above lines
  const [dragActive, setDragActive] = useState<boolean>(false);
  let uploadedids = '';
  console.log(selectFiles);
  //const portfolioUploadformData = new FormData();
  /*function handleUpload(
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
  /*
          const postResult = await axios
            .post(
              'http://localhost:1337/api/googledrive/upload',
              portfolioUploadformData
            )
            .then((responseBody) => {
              console.log(responseBody);
              console.log(responseBody.data.id);

              console.log(responseBody.data.name);
              setUploadFiles((prevState: any) => [
                ...prevState,
                responseBody.data,
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
  } */
  //function handleFileSelectChange(event: ChangeEvent<HTMLInputElement>): void {
  const handleFileSelectChange = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    console.log('handleFileSelectChange');
    console.log('inputFiles');
    let sampleOutput = {
      id: '17LV9EHZPGehHMvL86RdV1gmuV8VXL9fa',
      name: 'Energy.jpg',
      mimeType: 'image/jpeg',
      parents: ['1jN1_Crat6nkpakD0BZsE3xKAIkJ26NE2'],
      webViewLink:
        'https://drive.google.com/file/d/17LV9EHZPGehHMvL86RdV1gmuV8VXL9fa/view?usp=drivesdk',
    };
    onFilesUploaded(sampleOutput);
    return sampleOutput;
    //const inputFiles = [...event.target.files];
    const inputFiles = Array.from(event.target.files);
    console.log(inputFiles);

    // copied from handleOkCloseButton
    //setShowUploadModal(false);
    let uploadStatus = true;
    setIsUploading(true);
    console.log('handleUpload');
    //try {
    const response = async () => {
      console.log(inputFiles.length);
      console.log('handleUpload');
      if (!allowedExtensions.exec(inputFiles[0].name)) {
        alert(
          'The file you have chosen is not a valid file type. Please upload only .doc, .pdf, .jpg, .jpeg, and .png (Max 25MB)'
        );
        //uploadError(
        //  'Invalid file type. Only .doc, .pdf, .jpg, .jpeg, and .png are allowed.'
        //);
        setUploadError(
          'The file you have chosen is not a valid file type. Please upload only .doc, .pdf, .jpg, .jpeg, and .png (Max 25MB)'
        );
        setIsUploading(false);
        uploadStatus = false;
        return false;
      }
      // Check file size

      if (inputFiles[0].size > maxSizeInBytes) {
        alert('File size must be less than 25MB');
        //uploadError('File size must be less than 25MB');
        //setUploadError('File size must be less than 25MB');
        setUploadError(
          'The file you have chosen is not a valid file type. Please upload only .doc, .pdf, .jpg, .jpeg, and .png (Max 25MB)'
        );

        setIsUploading(false);
        uploadStatus = false;
        return false;
      }
      return true;
    };
    console.log('before uploadError msg');
    console.log(uploadError);
    const responseResult = await response();
    console.log('before responseResult ');
    console.log(responseResult);

    if (responseResult === true) {
      console.log(process.env.NEXT_PUBLIC_STRAPI_URL);
      console.log(`${process.env.NEXT_PUBLIC_STRAPI_URL}/googledrive/`);
      portfolioUploadformData.append('files', inputFiles[0]);

      const postResult = await axios
        .post(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/googledrive/`,
          portfolioUploadformData
        )
        .then((responseBody) => {
          console.log(responseBody);
          console.log(responseBody.data.id);

          console.log(responseBody.data.name);
          //setUploadFiles((prevState: any) => [...prevState, responseBody.data]);
          //setUploadFiles(responseBody.data);
          onFilesUploaded(responseBody.data);
          setUploadFiles(responseBody.data);
          setCanButVis(true);
          setShowUploadModal(false);
          setIsUploading(false);
          uploadStatus = false;
          console.log('canButVis');
          console.log(canButVis);
        });
      console.log(postResult);
      console.log(uploadStatus);
      console.log(!uploadStatus);
      if (!uploadStatus) return postResult;
    }

    console.log(filesUploaded);
    console.log(filesUploaded.length);
    console.log(uploadFiles);
    console.log(uploadFiles.length);

    //

    /*await new Promise<void>(async (resolve) => {
      //setSelectFiles((prevState: any) => [...prevState, inputFiles]);
      setSelectFiles(inputFiles);
      console.log('before resolve');
      /*if (selectFiles.length > 0) {
        await new Promise<void>((resolve) => {
          onFilesSelected(inputFiles);
          resolve();
        });
      }
      resolve();
      onFilesUploaded(uploadFiles);

      console.log('after resolve');
    });*/
    console.log('selectFiles');
    console.log(selectFiles);
    //onFilesUploaded(uploadFiles);

    console.log('after resolved');
    console.log(onFilesUploaded);

    //const files = Array.from(event.dataTransfer.files);
    //inputFiles?.map((fil) =>
    //  setSelectFiles((prevState: any) => [...prevState, fil])
    //);
    //setSelectFiles((prevState: any) => [...prevState, inputFiles]);
    //console.log(selectFiles);

    //console.log('onFilesSelected below');
    //console.log(onFilesSelected);

    //setSelectFiles(inputFiles);
    //onFilesSelected(inputFiles);
    //onFilesSelected(selectFiles);
  };

  //function removeFile(name: any, idx: any): void {
  function removeFile(): void {
    const newArr = [...selectFiles];
    newArr.splice(uploadFiles[0], 1);
    console.log(newArr);
    setSelectFiles([]);
    setSelectFiles(newArr);
    setUploadFiles([]);
    setUploadFiles(newArr);
    try {
      const response = (async () => {
        const delResult = await axios
          .delete(
            'http://localhost:1337/api/googledrive/delete?fileId=' +
              uploadFiles[0].id
          )
          .then((responseBody) => {
            console.log(responseBody);
            console.log(responseBody.status);

            console.log(responseBody.status);
            setUploadFiles((prevState: any) => [
              ...prevState,
              responseBody.status,
            ]);
          });
        delResult;
        //}
      })();
    } catch (error) {
      console.error('Delete failed:', error);
    } //finally {
    //setIsUploading(false); // Reset uploading state
    //}
  }
  console.log(uploadFiles.length);
  console.log(filesUploaded.length);
  if (uploadFiles.length > 0) {
    console.log(uploadFiles[0]['name']);
    console.log(uploadFiles[0]['id']);
  }
  if (filesUploaded.length > 0) {
    console.log(filesUploaded[0]['name']);
    console.log(filesUploaded[0]['id']);
  }
  function dropHandler(e: any): void {
    e.preventDefault();
    // e.stoppropagation();
    setDragActive(false);
    console.log('drop handler start');
    console.log(e.dataTransfer.files);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      for (let i = 0; i < e.dataTransfer.files.length; ++i)
        setSelectFiles((prevState: any) => [
          ...prevState,
          e.dataTransfer.files[i],
        ]);
    }
    console.log('drop handler End');
    onFilesUploaded(e.dataTransfer.files);
    //onFilesSelected(selectFiles);
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
        className="flex flex-col
        border-e-8 w-96 h-80 bg-orange-400"
        onDragEnter={(e) => dragEnter(e)}
        onDrop={(e) => dropHandler(e)}
        onDragOver={(e) => dragOverHandler(e)}
        onDragLeave={(e) => dragLeaver(e)}
      >
        <h3>Drop your files here or select them using the button below</h3>
        <input
          /*{style={{ color: rgba(0, 0, 0, 0) }} }
        style={{ display: 'none' }}
        ref={fileInput}
        "color:transparent"
        */
          id="fileSelect"
          type="file"
          style={{ color: 'transparent' }}
          onChange={(event) => {
            handleFileSelectChange(event);
          }}
          accept=".pdf, .doc,.docx,.jpg,.jpeg,.png, image/*"
        />
      </div>
      {isUploading ? 'Uploading' : 'no Uploading'}
      {filesUploaded.length}

      <atoms.Box gap="30px">
        <atoms.Typography type="pSmall" css={{ color: 'red' }}>
          {uploadError}
        </atoms.Typography>
      </atoms.Box>

      {/* 
      <div>
        {' '}
        {files.length > 0 ? <>{files[0]['name']}</> : 'Nothing  selected'}
      </div> */}
      {/* <atoms.Box maxWidth="50%">
         <atoms.Button
          buttonSize="standard"
          buttonType="primary"
          type="button"
          onClick={handleUpload}
          disabled={isUploading}
        >
          {isUploading ? 'Uploading...' : 'Upload'}
        </atoms.Button>
      </atoms.Box> } 
      {isUploading ? 'Uploading...' : ''}
      {uploadFiles.length > 0 ? uploadFiles[0].name : 'Nothing Uploaded'}
      {/* {uploadFiles.length > 0 ? (
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
      )}{' '} */}
    </>
  );
}

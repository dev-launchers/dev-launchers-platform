'use client';
import { atoms } from '@devlaunchers/components/src/components';
import axios from 'axios';
import { ChangeEvent, useState, useRef } from 'react';
import {
  AllPageSection,
  AllSection,
  ChooseFileSection,
  PageArrowSection,
  PageCenterSection,
  PageSection,
  PageTriangleTopRightSection,
} from './StyledDragAndDrop';
export default function DragAndDrop({
  filesUploaded,
  onFilesUploaded,
  //,uploadError
  //  errorEncountered,
  //  onUploadError,
}) {
  const [selectFiles, setSelectFiles] = useState([]);

  const [uploadFiles, setUploadFiles] = useState<any>([]);

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
  const fileUpload = async (inFiles) => {
    let uploadStatus = true;
    setIsUploading(true);
    const response = async () => {
      if (!allowedExtensions.exec(inFiles[0].name)) {
        setUploadError(
          'The file you have chosen is not a valid file type. Please upload only .doc, .pdf, .jpg, .jpeg, and .png (Max 25MB)'
        );
        setIsUploading(false);
        uploadStatus = false;
        return false;
      }
      // Check file size

      if (inFiles[0].size > maxSizeInBytes) {
        setUploadError(
          'The file you have chosen is not a valid file type. Please upload only .doc, .pdf, .jpg, .jpeg, and .png (Max 25MB)'
        );

        setIsUploading(false);
        uploadStatus = false;
        return false;
      }
      return true;
    };
    const responseResult = await response();

    if (responseResult === true) {
      portfolioUploadformData.append('files', inFiles[0]);

      const postResult = await axios
        .post(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/googledrive/`,
          portfolioUploadformData
        )
        .then((responseBody) => {
          onFilesUploaded(responseBody.data);
          setUploadFiles(responseBody.data);
          setCanButVis(true);
          setShowUploadModal(false);
          setIsUploading(false);
          uploadStatus = false;
        });
      if (!uploadStatus) return postResult;
    }
  };

  const handleFileSelectChange = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    let sampleOutput = {
      id: '17LV9EHZPGehHMvL86RdV1gmuV8VXL9fa',
      name: 'Energy.jpg',
      mimeType: 'image/jpeg',
      parents: ['1jN1_Crat6nkpakD0BZsE3xKAIkJ26NE2'],
      webViewLink:
        'https://drive.google.com/file/d/17LV9EHZPGehHMvL86RdV1gmuV8VXL9fa/view?usp=drivesdk',
    };
    const inputFiles = Array.from(event.target.files);
    fileUpload(inputFiles);
  };

  function dropHandler(e: any): void {
    e.preventDefault();
    // e.stoppropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectFiles((prevState: any) => [
        ...prevState,
        e.dataTransfer.files[0],
      ]);
    }
    fileUpload(e.dataTransfer.files);
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
  }

  return (
    <AllSection>
      <ChooseFileSection>
        <h3>Drop your files here or select them using the button below</h3>
        <input
          id="fileSelect"
          type="file"
          style={{ color: 'transparent' }}
          onChange={(event) => {
            handleFileSelectChange(event);
          }}
          accept=".pdf, .doc,.docx,.jpg,.jpeg,.png, image/*"
        />
        {isUploading ? (
          'Uploading'
        ) : filesUploaded.id === undefined || filesUploaded.id === null ? (
          <atoms.Box gap="30px">
            <atoms.Typography type="pSmall" css={{ color: 'red' }}>
              {uploadError}
            </atoms.Typography>
          </atoms.Box>
        ) : null}
      </ChooseFileSection>
      <div
        id="drop_zone"
        onDragEnter={(e) => dragEnter(e)}
        onDrop={(e) => dropHandler(e)}
        onDragOver={(e) => dragOverHandler(e)}
        onDragLeave={(e) => dragLeaver(e)}
      >
        <AllPageSection>
          <PageSection>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="86"
              height="111"
              viewBox="0 0 86 111"
              fill="none"
            >
              <path
                d="M1 108.848V2.35244C1 1.60551 1.60551 1 2.35245 1H65.31C65.7208 1 66.1094 1.18676 66.3661 1.50758L84.7036 24.4295C84.8955 24.6694 85 24.9673 85 25.2744V108.848C85 109.594 84.3945 110.2 83.6476 110.2H2.35244C1.60551 110.2 1 109.594 1 108.848Z"
                fill="#F0EDEE"
                stroke="#474747"
                stroke-width="1.35244"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <PageTriangleTopRightSection>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M20.4992 20.0373L4.08203 1.56794C3.88748 1.34907 3.52562 1.46419 3.49328 1.75523L1.44113 20.2246C1.41888 20.4248 1.57566 20.6 1.77718 20.6H20.2465C20.5382 20.6 20.693 20.2553 20.4992 20.0373Z"
                  fill="#474747"
                  stroke="#474747"
                  stroke-width="1.35244"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </PageTriangleTopRightSection>
            <PageCenterSection></PageCenterSection>
            <PageArrowSection>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="62"
                viewBox="0 0 61 62"
                fill="none"
              >
                <path
                  d="M31.5342 7.57422L8.84961 30.9677H23.7363V53.6522H38.6231V30.9677H54.2187L31.5342 7.57422Z"
                  fill="#F0EDEE"
                  stroke="#474747"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M30.6165 0.484375C13.8905 0.484375 0.343262 14.0317 0.343262 30.7576C0.343262 47.4836 13.8905 61.0309 30.6165 61.0309C47.3425 61.0309 60.8898 47.4836 60.8898 30.7576C60.8898 14.0317 47.3425 0.484375 30.6165 0.484375ZM30.6165 8.05269L53.3215 30.7576H38.1848V53.4626H23.0482V30.7576H7.91158L30.6165 8.05269Z"
                  fill="#7F7E7F"
                />
              </svg>
            </PageArrowSection>
          </PageSection>
        </AllPageSection>
      </div>
    </AllSection>
  );
}

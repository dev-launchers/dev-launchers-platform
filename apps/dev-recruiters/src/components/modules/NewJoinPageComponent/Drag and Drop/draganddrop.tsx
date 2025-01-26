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
          <svg
            fill="#000000"
            height="100px"
            width="100px"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 266 266"
            stroke-width="0"
          >
            <path d="M235.829,213.645c-0.038-0.676-0.088-1.35-0.153-2.018c-0.008-0.078-0.012-0.157-0.021-0.236 c-0.075-0.731-0.17-1.455-0.277-2.176c-0.029-0.195-0.06-0.389-0.091-0.583c-0.097-0.607-0.204-1.211-0.323-1.811 c-0.026-0.131-0.048-0.263-0.075-0.394c-0.144-0.695-0.305-1.384-0.477-2.068c-0.05-0.197-0.103-0.393-0.155-0.589 c-0.144-0.542-0.297-1.081-0.459-1.615c-0.053-0.176-0.103-0.353-0.158-0.528c-0.205-0.65-0.424-1.295-0.654-1.933 c-0.074-0.206-0.153-0.409-0.23-0.613c-0.18-0.479-0.368-0.955-0.563-1.427c-0.087-0.211-0.172-0.423-0.262-0.632 c-0.257-0.601-0.526-1.195-0.806-1.783c-0.104-0.219-0.214-0.435-0.322-0.652c-0.205-0.414-0.415-0.824-0.63-1.231 c-0.128-0.241-0.255-0.483-0.387-0.723c-0.301-0.546-0.61-1.086-0.931-1.619c-0.141-0.235-0.29-0.465-0.435-0.697 c-0.218-0.348-0.439-0.694-0.665-1.037c-0.174-0.263-0.349-0.526-0.527-0.786c-0.258-0.375-0.522-0.744-0.79-1.111 c-0.267-0.366-0.54-0.729-0.817-1.087c-0.218-0.282-0.436-0.563-0.66-0.839c-0.223-0.276-0.448-0.551-0.677-0.822 c-0.216-0.256-0.437-0.507-0.657-0.759c-0.394-0.448-0.795-0.89-1.205-1.324c-0.202-0.214-0.404-0.429-0.61-0.64 c-0.274-0.28-0.551-0.557-0.832-0.83c-0.189-0.185-0.382-0.366-0.575-0.548c-0.51-0.482-1.03-0.953-1.56-1.413 c-0.174-0.151-0.347-0.304-0.523-0.453c-0.32-0.27-0.644-0.534-0.971-0.796c-0.177-0.142-0.357-0.282-0.536-0.421 c-0.635-0.495-1.281-0.974-1.94-1.438c-0.12-0.084-0.237-0.171-0.357-0.254c-0.359-0.248-0.723-0.489-1.089-0.728 c-0.177-0.116-0.356-0.229-0.534-0.343c-0.811-0.515-1.635-1.01-2.477-1.478l0,0c-7.11-3.95-15.29-6.208-24-6.208 c-27.338,0-49.5,22.162-49.5,49.5c0,21.257,13.402,39.379,32.214,46.392c0.502,0.187,1.013,0.359,1.523,0.53 c0.215,0.072,0.427,0.148,0.643,0.218c0.458,0.147,0.922,0.281,1.387,0.416c0.279,0.081,0.558,0.163,0.839,0.238 c0.432,0.116,0.868,0.224,1.304,0.329c0.326,0.078,0.652,0.155,0.981,0.226c0.41,0.09,0.821,0.174,1.234,0.253 c0.37,0.071,0.743,0.137,1.116,0.199c0.384,0.065,0.769,0.128,1.156,0.184c0.422,0.061,0.846,0.112,1.272,0.162 c0.35,0.042,0.7,0.085,1.052,0.119c0.501,0.048,1.006,0.082,1.512,0.115c0.286,0.019,0.57,0.044,0.857,0.058 c0.799,0.039,1.602,0.061,2.411,0.061c0.806,0,1.607-0.023,2.403-0.061c0.267-0.013,0.531-0.036,0.797-0.053 c0.527-0.034,1.053-0.07,1.576-0.12c0.316-0.03,0.63-0.069,0.944-0.105c0.468-0.054,0.935-0.111,1.398-0.178 c0.332-0.048,0.662-0.101,0.992-0.155c0.441-0.073,0.881-0.151,1.318-0.235c0.336-0.065,0.67-0.132,1.003-0.203 c0.429-0.092,0.855-0.192,1.28-0.295c0.33-0.08,0.66-0.159,0.988-0.246c0.43-0.114,0.856-0.239,1.282-0.364 c0.312-0.092,0.626-0.179,0.935-0.276c0.491-0.155,0.975-0.324,1.459-0.494c0.235-0.082,0.474-0.157,0.707-0.243 c1.49-0.548,2.947-1.164,4.366-1.848h0c0.028-0.014,0.056-0.029,0.085-0.042c0.615-0.297,1.22-0.61,1.82-0.932 c0.187-0.1,0.373-0.203,0.558-0.306c0.482-0.267,0.959-0.541,1.431-0.823c0.152-0.091,0.306-0.179,0.457-0.271 c0.596-0.365,1.185-0.742,1.764-1.131c0.138-0.092,0.272-0.189,0.409-0.283c0.459-0.315,0.912-0.637,1.359-0.967 c0.171-0.126,0.341-0.252,0.51-0.38c0.511-0.386,1.015-0.781,1.51-1.186c0.053-0.044,0.108-0.085,0.161-0.129 c0.54-0.446,1.067-0.907,1.587-1.375c0.152-0.136,0.301-0.276,0.451-0.414c0.399-0.368,0.792-0.742,1.178-1.123 c0.132-0.13,0.267-0.259,0.397-0.391c0.491-0.495,0.974-0.999,1.444-1.515c0.096-0.105,0.188-0.214,0.283-0.32 c0.384-0.427,0.76-0.862,1.128-1.302c0.135-0.161,0.269-0.323,0.402-0.486c0.383-0.47,0.759-0.947,1.125-1.431 c0.064-0.085,0.131-0.167,0.194-0.252c0.419-0.562,0.824-1.135,1.22-1.716c0.11-0.161,0.217-0.325,0.325-0.488 c0.302-0.454,0.597-0.914,0.884-1.378c0.102-0.165,0.205-0.329,0.305-0.495c0.364-0.604,0.717-1.215,1.055-1.835 c0.052-0.095,0.1-0.193,0.152-0.289c0.288-0.538,0.566-1.082,0.835-1.631c0.092-0.188,0.183-0.377,0.272-0.566 c0.254-0.535,0.498-1.075,0.733-1.621c0.052-0.122,0.108-0.241,0.16-0.364c0.276-0.657,0.537-1.322,0.786-1.992 c0.064-0.173,0.124-0.347,0.186-0.521c0.189-0.529,0.37-1.062,0.541-1.599c0.061-0.192,0.124-0.383,0.183-0.576 c0.212-0.691,0.412-1.388,0.594-2.092c0.016-0.061,0.029-0.123,0.044-0.184c0.165-0.649,0.314-1.303,0.453-1.962 c0.043-0.206,0.084-0.413,0.125-0.62c0.115-0.582,0.219-1.167,0.313-1.755c0.025-0.156,0.053-0.31,0.077-0.466 c0.109-0.727,0.202-1.46,0.279-2.197c0.018-0.175,0.031-0.352,0.048-0.528c0.055-0.588,0.1-1.179,0.135-1.772 c0.012-0.213,0.025-0.427,0.035-0.641c0.034-0.755,0.058-1.513,0.058-2.277c0-0.76-0.023-1.515-0.057-2.266 C235.85,214.037,235.84,213.841,235.829,213.645z M201.416,247h-34c-4.143,0-7.5-3.357-7.5-7.5s3.357-7.5,7.5-7.5h34 c4.143,0,7.5,3.357,7.5,7.5S205.559,247,201.416,247z M208.148,206.321c-2.936,2.922-7.85,2.91-10.774-0.023l-4.291-4.144V217 c0,4.143-3.357,7.5-7.5,7.5s-7.5-3.357-7.5-7.5v-14.917l-4.066,4.226c-2.933,2.926-7.596,2.92-10.524-0.01 c-2.926-2.932-2.88-7.681,0.051-10.607l17.012-16.96c0.373-0.377,0.798-0.717,1.248-1.011c0.002-0.002,0.009-0.002,0.011-0.004 c0.536-0.35,1.115-0.377,1.713-0.577c0.78-0.262,1.588-0.14,2.386-0.14c0.008,0,0.016,0,0.023,0c0.765,0,1.534-0.129,2.281,0.112 c0.677,0.218,1.325,0.408,1.923,0.816c0.002,0,0.003-0.062,0.005-0.06c0.406,0.277,0.781,0.562,1.122,0.908l16.898,16.944 C211.09,198.656,211.081,203.397,208.148,206.321z M205.057,49h-46.974V3.731L205.057,49z M121.917,216.5 c0-35.565,28.768-64.5,64.333-64.5c8.48,0,16.833,1.661,23.833,4.649V64h-59.167c-4.143,0-7.833-3.357-7.833-7.5V0H37.916 c-4.143,0-7.833,3.357-7.833,7.5v247.465c0,4.133,3.509,7.486,7.642,7.5l103.77,0.336 C129.384,251.069,121.917,234.654,121.917,216.5z M69.416,93h99c4.143,0,7.5,3.357,7.5,7.5s-3.357,7.5-7.5,7.5h-99 c-4.143,0-7.5-3.357-7.5-7.5S65.274,93,69.416,93z M61.916,131.5c0-4.143,3.357-7.5,7.5-7.5h99c4.143,0,7.5,3.357,7.5,7.5 s-3.357,7.5-7.5,7.5h-99C65.274,139,61.916,135.643,61.916,131.5z"></path>{' '}
          </svg>
          {/*
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
          </PageSection> */}
        </AllPageSection>
      </div>
    </AllSection>
  );
}

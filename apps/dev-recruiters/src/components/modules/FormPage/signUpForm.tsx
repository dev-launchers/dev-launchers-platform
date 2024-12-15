'use client';
import { atoms, organisms } from '@devlaunchers/components/src/components';
import FormErrorScroller from '@devlaunchers/components/src/utils/formErrorScroller';
import { Opportunity } from '@devlaunchers/models';
import { NewApplicant } from '@devlaunchers/models/newApplicant';
import { agent } from '@devlaunchers/utility';
import { Field, Formik, FormikHelpers } from 'formik';
import { MouseEventHandler, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@devlaunchers/dev-recruiters/src/styles/theme';
import * as Yup from 'yup';
import ConfirmationModal from '../DetailedPage/Confirmation/ConfirmationModal';
import {
  //CancelButton,
  CloseButton,
  CloseIcon,
  //OkButton,
} from '../DetailedPage/PositionCard/StyledPositionCard';
import {
  CancelUploadButton,
  GradientLine,
  ModalFooterSection,
  ModalUploadSection,
  SubmitButton,
  UploadButton,
  OkButton,
  CancelButton,
} from './styledSignupForm';
import { ButtonsContainer } from '../FilterPage/RolesFilterComponent/RolesFilterList/SearchRoles/RoleCard/styledRoleCard';
import UploadModal from './uploadModal';
import Modal from 'react-calendly/typings/components/PopupModal/Modal';
import { OkIcon } from './styledUploadModal';
import DragAndDrop from '../NewJoinPageComponent/Drag and Drop/page';
import axios from 'axios';
import { Button } from '../ConfirmationPage/styledConfirmationPage';

interface UploadProps {
  handleUploadCloseModal?: () => void;
  handleOkCloseModal?: () => void;
  handleCancelCloseModal?: () => void;
}

interface FormFields extends Omit<NewApplicant, 'level'> {
  level: NewApplicant['level'] | '';
}
interface Props {
  projectId: string;
  projectSlug: string;
  handleCloseModal: () => void;
  position: Opportunity;
}

export default function SignUpForm({
  projectId,
  projectSlug,
  handleCloseModal,
  position,
}: Props) {
  //const [uploadFiles, setUploadFiles] = useState<any>([]);
  // const [filesUploaded, setFilesUploaded] = useState<any>([]);
  const [filesUploaded, setFilesUploaded] = useState<{}>([]);

  const [selectedFiles, setSelectedFiles] = useState<any>([]);
  //const [showUploadModal, setShowUploadModal] = useState(false);

  //
  const [isUploading, setIsUploading] = useState(false); // Uploading state

  const maxSizeInMB = 25;
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  const allowedExtensions = /(\.doc|\.pdf|\.jpg|\.jpeg|\.png)$/i;

  const portfolioUploadformData = new FormData();
  /*
  function handleUpload(
    event: MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    handleOkCloseModal();

    alert('handleUpload');
    alert(showUploadModal);
    setIsUploading(true);
    console.log('handleUpload');
    alert(isUploading);
    alert(selectedFiles.length);
    //try {
    const response = (async () => {
      console.log(selectedFiles.length);
      console.log('handleUpload');
      for (let i = 0; i < selectedFiles.length; ++i) {
        console.log(`i is ${i}`);
        portfolioUploadformData.append('files', selectedFiles[i]);
        // Check file size

        if (selectedFiles[i].size > maxSizeInBytes) {
          alert('File size must be less than 25MB');
          return;
        }

        // Check file type
        if (!allowedExtensions.exec(selectedFiles[i].name)) {
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
        console.log(await response);
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
    /*if (uploadFiles.length === 1) uploadedids = uploadFiles[0]['id'];
      else if (uploadFiles.length > 1) {
        uploadedids = uploadFiles.reduce(
          (acc, currentValue) => acc + ',' + currentValue['id'],
          ''
        );
        uploadedids = uploadedids.slice(1);
      }

      console.log(uploadedids); */
  /*
    //setShowUploadModal(false);
    //} catch (error) {
    //  console.error('Upload failed:', error);
    //} finally {
    //  setIsUploading(false); // Reset uploading state
    //}
  }

  //
  function removeFile(): void {
    const newArr = [...selectedFiles];
    newArr.splice(uploadFiles[0], 1);
    console.log(newArr);
    setSelectedFiles([]);
    setSelectedFiles(newArr);
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
  if (uploadFiles.length > 0) {
    console.log(uploadFiles[0]['name']);
    console.log(uploadFiles[0]['id']);
  }
*/
  function UploadDetailsModal({
    handleUploadCloseModal,
    handleOkCloseModal,
    handleCancelCloseModal,
  }: UploadProps) {
    /*const handleFiles = (selectedFiles) => {
      console.log('selectedFiles below');
      console.log(selectedFiles);
      setSelectedFiles(selectedFiles);
      //setShowUploadModal(false); // Close the modal after receiving the files
    };*/
    const handleFiles = (uploadedFiles) => {
      console.log('uploadedFiles below');
      console.log(uploadedFiles);
      /*setFilesUploaded({
        id: '17LV9EHZPGehHMvL86RdV1gmuV8VXL9fa',
        name: 'Energy.jpg',
        mimeType: 'image/jpeg',
        parents: ['1jN1_Crat6nkpakD0BZsE3xKAIkJ26NE2'],
        webViewLink:
          'https://drive.google.com/file/d/17LV9EHZPGehHMvL86RdV1gmuV8VXL9fa/view?usp=drivesdk',
      });*/
      setFilesUploaded(uploadedFiles); //resulted in error
      //setUploadFiles(uploadedFiles);

      //setShowUploadModal(false); // Close the modal after receiving the files
    };
    const handleError = (inUploadError) => {
      console.log('upload Error below');
      console.log(inUploadError);
      setUploadError(inUploadError);
      console.log('uploadError');
      console.log(uploadError);

      //setShowUploadModal(false); // Close the modal after receiving the files
    };

    return (
      <>
        {/*<div>
          <CloseButton onClick={handleUploadCloseModal}>
            <OkIcon
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </OkIcon>
          </CloseButton> */}
        <ModalUploadSection>
          <DragAndDrop
            filesUploaded={filesUploaded}
            onFilesUploaded={handleFiles}
            //uploadError={handleError}
            //errorEncountered={uploadError}
            //onUploadError={handleError}
          />
        </ModalUploadSection>
        <div>
          Parent sees
          {JSON.stringify(filesUploaded).length > 0
            ? filesUploaded['name']
            : 'Nothing'}
        </div>

        <div> Parent sees {uploadError} </div>
        <atoms.Box gap="30px">
          <atoms.Typography type="pSmall" css={{ color: 'red' }}>
            {uploadError}
          </atoms.Typography>
        </atoms.Box>

        {/*</div> 
        
          <ModalFooterSection>
            <OkButton onClick={handleOkCloseModal}> Ok </OkButton>
            <CancelButton onClick={handleCancelCloseModal}>Cancel</CancelButton>
          </ModalFooterSection>
          */}
        <div>
          <ul>
            {JSON.stringify(filesUploaded).length > 0 ? (
              <li>{filesUploaded['name']}</li>
            ) : (
              <> No files Uploaded yet </>
            )}
          </ul>
        </div>
      </>
    );
  }

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Name Field Entry is Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email Field Entry is Required'),
    portfolioLink: Yup.string().nullable(true).default(undefined),
    //.matches(
    //  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    //  'Invalid url'
    //)
    //.transform((_, value) => (value === '' ? null : value))
    commitment: Yup.number()
      .moreThan(4, 'Commitment Field Entry is Required')
      .required('Commitment Field Entry is Required'),
    /* Adding new column yearsExperience column */
    yearsOfExperience: Yup.number()
      .default(0)
      .min(0, 'Years of Experience should be greater than 0')
      .max(100, 'Years of Expereince should be less than 100')
      .test(
        'maxDigitsAfterDecimal',
        'Years of Experience must have 2 digits after decimal or less',
        (number) => /^\d+(\.\d{1,2})?$/.test(number.toString())
      ),
    experience: Yup.string().required('Experience Field Entry is Required'),
    isAgeOver18: Yup.boolean()
      .required('Age over 18 Field is Required')
      .oneOf([true], 'Age over 18 Field is Required'),
    isTermsAgreed: Yup.boolean()
      .required('Terms and Conditions is Required')
      .oneOf([true], 'Terms and Conditions Field is Required'),
  });
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [checkCheckbox, setCheckCheckbox] = useState<undefined | boolean>(
    undefined
  );

  const handleSetCheckCheckbox = () => {
    setCheckCheckbox(!checkCheckbox);
  };

  const handleOpenConfirmationModal = () => {
    setShowConfirmationModal(true);
  };

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [errorEncountered, setErrorEncountered] = useState('');
  const [uploadError, setUploadError] = useState('');

  const [canButVis, setCanButVis] = useState(true);

  const handleUploadOpenModal = () => {
    setSelectedFiles([]);
    //setUploadFiles([]);
    setFilesUploaded([]);
    setUploadError('');
    setShowUploadModal(true);
  };

  const handleUploadCloseModal = () => {
    setShowUploadModal(false);
  };
  const handleOkCloseModal = async () => {
    setShowUploadModal(false);
    setIsUploading(true);
    console.log('handleUpload');
    //try {
    const response = async () => {
      console.log(selectedFiles.length);
      console.log('handleUpload');
      //for (let i = 0; i < selectedFiles.length; ++i) {
      //  console.log(`i is ${i}`);
      // Check file type
      if (!allowedExtensions.exec(selectedFiles[0].name)) {
        alert(
          'Invalid file type. Only .doc, .pdf, .jpg, .jpeg, and .png are allowed.'
        );
        setUploadError(
          'Invalid file type. Only .doc, .pdf, .jpg, .jpeg, and .png are allowed.'
        );
        setIsUploading(false);
        return false;
      }
      // Check file size

      if (selectedFiles[0].size > maxSizeInBytes) {
        alert('File size must be less than 25MB');

        setUploadError('File size must be less than 25MB');
        setIsUploading(false);
        return false;
      }
      return true;

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
      //}
    };
    //response().then(async () => {
    const responseResult = await response();
    if (responseResult === true) {
      console.log(process.env.NEXT_PUBLIC_STRAPI_URL);
      console.log(`${process.env.NEXT_PUBLIC_STRAPI_URL}/googledrive/`);
      portfolioUploadformData.append('files', selectedFiles[0]);

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
          setFilesUploaded((prevState: any) => [
            ...prevState,
            responseBody.data,
          ]);

          setCanButVis(true);
          setIsUploading(false);
          console.log('canButVis');
          console.log(canButVis);
        });
      return postResult;
    }

    console.log(filesUploaded);
    console.log(JSON.stringify(filesUploaded).length);
  };
  const handleCancelCloseModal = () => {
    alert('handleCancelCloseModal');
    setSelectedFiles([]);
    //setUploadFiles([]);
    setFilesUploaded([]);

    setShowUploadModal(false);
  };
  const handleRemoveFile = () => {
    alert(canButVis);
    const newArr = [...selectedFiles];
    //newArr.splice(uploadFiles[0], 1);
    newArr.splice(filesUploaded[0], 1);

    console.log(newArr);
    setSelectedFiles([]);
    setSelectedFiles(newArr);
    //setUploadFiles([]);
    //setUploadFiles(newArr);
    setFilesUploaded([]);
    setFilesUploaded(newArr);
    setCanButVis(false);
    try {
      const response = (async () => {
        //const delResult = await axios
        //  .delete(
        //    `${process.env.NEXT_PUBLIC_STRAPI_URL}/googledrive/`,
        //    uploadFiles[0].id
        //  )
        const delResult = await axios
          .delete(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/googledrive/`,
            filesUploaded[0].id
          )

          .then((responseBody) => {
            console.log(responseBody);
            console.log(responseBody.status);
            console.log(canButVis);

            console.log(responseBody.status);
            // setUploadFiles((prevState: any) => [
            //   ...prevState,
            //   responseBody.status,
            // ]);
          });
        delResult;
        //}
      })();
    } catch (error) {
      console.error('Delete failed:', error);
    } //finally {
    //setIsUploading(false); // Reset uploading state
    //}
  };

  // const router = useRouter();
  // const { userData } = useUserDataContext();

  // ! GOING TO BE ACTIVATED AGAIN ONCE WE HAVE BACKEND REDIRECTION
  // useEffect(() => {
  //   if (userData.id == 0) {
  //     router.push("/login");
  //   }
  // }, [router, userData.id]);

  return (
    <ThemeProvider theme={theme}>
      <Formik
        initialValues={{
          discordUsername: '',
          name: '',
          email: '',
          age: 0,
          level: 'Intermediate',
          accepted: false,
          commitment: 0,
          extraInfo: '',
          portfolioLink: null,
          portfolioFileId: null,
          yearsOfExperience: 0,
          experience: '',
          reason: '',
          zip: 0,
          role: 'title' as string, //  role: position.title as string,
          project: { id: '1', slug: 'projectSlug' }, //router.query.slug as string },
          skills: [{ skill: '' }],
          isAgeOver18: false,
          isTermsAgreed: false,
        }}
        onSubmit={(
          values: NewApplicant,
          { setSubmitting }: FormikHelpers<NewApplicant>
        ) => {
          setSubmitting(true);
          console.log('insidesubmit');
          console.log(values);
          console.log(filesUploaded['id']);
          agent.Applicant.post({
            ...values,
            //@ts-ignore
            level: values.level.toLowerCase(),
            portfolioLink: filesUploaded['webViewLink'],
            portfolioFileId: filesUploaded['id'],
            skills: values.skills
              .toString()
              .split(',')
              .map((skill) => ({ skill: skill })),
            role: position.attributes.title as string,
            project: { id: projectId, slug: projectSlug }, //router.query.slug as string },
          })
            .then((res) => {
              console.log(res);
              handleOpenConfirmationModal();
              setSubmitting(false);
            })
            .catch((error) => {
              setSubmitting(false);
              console.log(error);
              console.log(error.response);
              console.log(error.response.data);
              console.log(error.response.status);
            });
        }}
        validationSchema={SignupSchema}
      >
        {(formik) => (
          <atoms.Box paddingInline="0.5rem" justifyContent="center">
            <CloseButton onClick={handleCloseModal}>
              <CloseIcon
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </CloseIcon>
            </CloseButton>
            <form onSubmit={formik.handleSubmit}>
              <atoms.Box flexDirection="column" margin="auto">
                <atoms.Box flexDirection="column">
                  {/* is the atoms.Layer setting correct? */}
                  <atoms.Layer hasRainbowBottom={true} hasRainbowTop={false}>
                    <atoms.Typography type="h2" textAlign="center">
                      Volunteer Application for{' '}
                      <strong>{position.attributes.title}</strong>{' '}
                      {/*position.title */}
                    </atoms.Typography>
                  </atoms.Layer>
                </atoms.Box>
                <GradientLine />
                <atoms.Box
                  flexDirection="column"
                  gap="32px"
                  paddingBlock="2rem"
                  maxWidth="fit-content"
                >
                  <Field
                    as={organisms.FormField}
                    label="Your Full Name"
                    placeholder="John Smith"
                    id="name"
                    name="name"
                    required
                    // onChange={handleChange}
                    touched={formik.touched['name']}
                    error={formik.errors.name}
                  />
                  <Field
                    as={organisms.FormField}
                    label="Your Email"
                    placeholder="johnsmith@gmail.com"
                    id="email"
                    name="email"
                    required
                    touched={formik.touched['email']}
                    error={formik.errors.email}
                  />
                  <atoms.Box gap="32px" flexDirection="column">
                    <Field
                      as={organisms.FormField}
                      label={
                        <atoms.Box gap="1rem" alignItems="center">
                          What are your relevant skills?
                          <atoms.ToolTip
                            content="Please Separate skills with a comma."
                            direction="left"
                            delay={100}
                          >
                            ℹ️
                          </atoms.ToolTip>
                        </atoms.Box>
                      }
                      placeholder="javascript, react, backend"
                      id="skills"
                      name="skills"
                    />
                  </atoms.Box>
                  <atoms.Box flexDirection="column">
                    <atoms.Typography type="pSmall">
                      HOW MANY HOURS A WEEK WOULD YOU LIKE TO VOLUNTEER?
                    </atoms.Typography>
                    <atoms.Slider
                      min={5}
                      max={40}
                      initialValue={5}
                      onChange={(value) =>
                        formik.setFieldValue('commitment', +value)
                      }
                      withLabels
                      suffix=" hrs"
                      maxWidth="430px"
                    />
                    <atoms.Typography type="pSmall" css={{ color: 'red' }}>
                      {formik.errors.commitment}
                    </atoms.Typography>
                  </atoms.Box>
                  <Field
                    as={organisms.FormField}
                    label="How many years of relevant experience do you have"
                    placeholder="eg, 1"
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    required
                    touched={formik.touched['yearsOfExperience']}
                    error={formik.errors.yearsOfExperience}
                  />

                  <Field
                    as={organisms.OpenResponse}
                    cols={50}
                    touched={formik.touched['experience']}
                    error={formik.errors.experience}
                    label="Please briefly describe your relevant experience"
                    placeholder="My experience with development / design is..."
                    required
                    rows={1}
                    id="experience"
                    name="experience"
                    // onChange={handleChange}
                  />
                  <Field
                    as={organisms.OpenResponse}
                    cols={50}
                    label="Why would you like to be a Dev Launcher?"
                    placeholder="My experience with development / design is..."
                    rows={1}
                    id="reason"
                    name="reason"
                    // onChange={handleChange}
                  />
                  <Field
                    as={organisms.OpenResponse}
                    cols={50}
                    label="Anything else you would like to share with us?"
                    placeholder="I just want the Team Lead to know..."
                    rows={1}
                    id="extraInfo"
                    name="extraInfo"
                    // onChange={handleChange}
                  />
                  <h6> Upload your resume using the links below. </h6>
                  <p>
                    Max file size 25MB, Only .doc, .pdf, .png and .jpg allowed
                  </p>

                  <UploadButton onClick={handleUploadOpenModal}>
                    Upload Files
                  </UploadButton>
                  <Field
                    as={organisms.FormField}
                    label="Portfolio/Resume Link"
                    disabled={true}
                    placeholder="https://myportfolio.com"
                    id="portfolioLink"
                    name="portfolioLink"
                    value={filesUploaded['webViewLink']}
                    // onChange={handleChange}
                    touched={
                      formik.touched.portfolioLink &&
                      !!formik.values['portfolioLink']
                    }
                    error={formik.errors.portfolioLink}
                  />
                  <UploadModal
                    modalIsOpen={showUploadModal}
                    closeModal={handleUploadCloseModal}
                    handleOpenModal={handleUploadOpenModal}
                    modalContent={
                      <UploadDetailsModal
                        handleUploadCloseModal={handleUploadCloseModal}
                        handleOkCloseModal={handleOkCloseModal}
                        handleCancelCloseModal={handleCancelCloseModal}
                      />
                    }
                  />
                  {isUploading}
                  {isUploading
                    ? 'Uploading'
                    : JSON.stringify(filesUploaded).length > 0
                    ? !!JSON.stringify(filesUploaded).length && (
                        <atoms.Box
                          gap="1rem"
                          justifyContent="center"
                          flexDirection="row"
                        >
                          {filesUploaded['name']}
                          {!!canButVis && (
                            <CancelUploadButton onClick={handleRemoveFile}>
                              Remove
                            </CancelUploadButton>
                          )}
                        </atoms.Box>
                      )
                    : null}
                  <atoms.Typography type="p">
                    We require users to be 18 years old or older. Please confirm
                    below.
                  </atoms.Typography>
                  <atoms.Box
                    flexDirection="column"
                    alignItems="flex-start"
                    gap="1rem"
                  >
                    <Field
                      as={atoms.Checkbox}
                      type="checkbox"
                      name="isAgeOver18"
                      id="isAgeOver18"
                      required
                      touched={formik.touched['isAgeOver18']}
                      error={formik.errors.isAgeOver18}
                      label="I am 18 years old or older."
                      onChange={(e) =>
                        formik.setFieldValue('isAgeOver18', e.target.checked)
                      }
                      checked={formik.values.isAgeOver18}
                    />
                    {formik.errors.isAgeOver18 ? (
                      <atoms.Typography type="pSmall" css={{ color: 'red' }}>
                        {formik.errors.isAgeOver18}
                      </atoms.Typography>
                    ) : null}
                    <Field
                      as={atoms.Checkbox}
                      type="checkbox"
                      name="isTermsAgreed"
                      id="isTermsAgreed"
                      required
                      touched={formik.touched['isTermsAgreed']}
                      error={formik.errors.isTermsAgreed}
                      label="I have read and agree to the Terms and Conditions.*"
                      onChange={(e) => {
                        formik.setFieldValue('isTermsAgreed', e.target.checked);
                      }}
                      checked={formik.values.isTermsAgreed}
                    />
                    {formik.errors.isTermsAgreed ? (
                      <atoms.Typography type="pSmall" css={{ color: 'red' }}>
                        {formik.errors.isTermsAgreed}
                      </atoms.Typography>
                    ) : null}
                  </atoms.Box>
                  <SubmitButton
                    as="a"
                    type="submit"
                    onClick={
                      formik.handleSubmit as unknown as MouseEventHandler<HTMLAnchorElement>
                    }
                  >
                    Submit Application
                  </SubmitButton>
                </atoms.Box>
              </atoms.Box>
              <FormErrorScroller focusAfterScroll />
              <ConfirmationModal
                showModal={showConfirmationModal}
                handleOpenModal={handleOpenConfirmationModal}
                handleCloseModal={handleCloseModal}
              />
            </form>
          </atoms.Box>
        )}
      </Formik>
    </ThemeProvider>
  );
}

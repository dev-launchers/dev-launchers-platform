'use client';
import { atoms, organisms } from '@devlaunchers/components/src/components';
import FormErrorScroller from '@devlaunchers/components/src/utils/formErrorScroller';
import { Opportunity } from '@devlaunchers/models';
import { NewApplicant } from '@devlaunchers/models/newApplicant';
import { agent } from '@devlaunchers/utility';
import {
  Field,
  Formik,
  FormikHelpers,
  useFormikContext,
  useField,
} from 'formik';
import { MouseEventHandler, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@devlaunchers/dev-recruiters/src/styles/theme';
import * as Yup from 'yup';
import ConfirmationModal from '../DetailedPage/Confirmation/ConfirmationModal';
import {
  CloseButton,
  CloseIcon,
} from '../DetailedPage/PositionCard/StyledPositionCard';
import {
  CancelUploadButton,
  GradientLine,
  ModalUploadSection,
  SubmitButton,
  UploadButton,
} from './styledSignupForm';
import UploadModal from './uploadModal';
import DragAndDrop from '../NewJoinPageComponent/Drag and Drop';
import axios from 'axios';
import Modal from '../DetailedPage/PositionPopupModal';

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
  const [filesUploaded, setFilesUploaded] = useState<any>({});

  const [selectedFiles, setSelectedFiles] = useState<any>([]);
  const [isUploading, setIsUploading] = useState(false);

  const [isDeleting, setIsDeleting] = useState(false);

  const PortFolioLink = (props) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);

    useEffect(() => {
      {
        setFieldValue(props.name, filesUploaded['webViewLink']);
      }
    }, [filesUploaded]);
    return (
      <Field
        as={organisms.FormField}
        label="Portfolio/Resume Link"
        disabled={true}
        placeholder="https://myportfolio.com"
        id="portfolioLink"
        name="portfolioLink"
        {...props}
        {...field}
      />
    );
  };

  function UploadDetailsModal({
    handleUploadCloseModal,
    handleOkCloseModal,
    handleCancelCloseModal,
  }: UploadProps) {
    const handleFiles = (uploadedFiles) => {
      setFilesUploaded(uploadedFiles);
      setShowUploadModal(false);
    };

    return (
      <>
        <ModalUploadSection>
          <DragAndDrop
            filesUploaded={filesUploaded}
            onFilesUploaded={handleFiles}
          />
        </ModalUploadSection>
        <atoms.Box gap="30px">
          <atoms.Typography
            variant="secondary"
            size="body_sm"
            css={{ color: 'red' }}
          >
            {uploadError}
          </atoms.Typography>
        </atoms.Box>
      </>
    );
  }

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Name Field Entry is Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email Field Entry is Required'),
    skills: Yup.string()
      .required('Skills Field Entry is Required')
      .nullable()
      .matches(/^[^\s]+(\s+[^\s]+)*$/, 'Skills Field Entry is Required'),
    portfolioLink: Yup.string().nullable(true).default(undefined),
    commitment: Yup.number()
      .moreThan(4, 'Commitment Field Entry is Required')
      .required('Commitment Field Entry is Required'),
    /* Adding new column yearsExperience column */
    yearsOfExperience: Yup.number()
      .default(0)
      .typeError('Years of Experience is Required')
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

  const handleOpenConfirmationModal = () => {
    setShowConfirmationModal(true);
  };

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [deleteError, setDeleteError] = useState('');

  const [canButVis, setCanButVis] = useState(true);

  const handleUploadOpenModal = () => {
    setSelectedFiles([]);
    setFilesUploaded({});
    setUploadError('');
    setCanButVis(true);
    setShowUploadModal(true);
  };

  const handleUploadCloseModal = () => {
    setShowUploadModal(false);
  };
  const handleOkCloseModal = async () => {
    setShowUploadModal(false);
    setIsUploading(true);
  };
  const handleCancelCloseModal = () => {
    setSelectedFiles([]);
    setFilesUploaded([]);
    setShowUploadModal(false);
  };

  const handleRemoveFile = () => {
    setIsDeleting(true); // Deleting state
    const newArr = [...selectedFiles];
    try {
      const deleteResult = agent.GoogledriveFile.delete(
        `${filesUploaded['id']}`
      )
        .then((responseBody) => {
          if (responseBody.status === 200) {
            newArr.splice(filesUploaded[0], 1);
            setSelectedFiles([]);
            setSelectedFiles(newArr);
            setFilesUploaded({});
            setCanButVis(false);
            setIsDeleting(false); // Deleting state
            setDeleteError('');
          }
        })
        .catch((error) => {
          setDeleteError('Error Deleting files');
          setIsDeleting(false);
          return 'Delete failed due to an error';
        });
    } catch (error) {
      setDeleteError('Error Deleting files');
      setIsDeleting(false);
      return 'Delete failed due to an error';
    }
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
          skills: null,
          isAgeOver18: false,
          isTermsAgreed: false,
        }}
        onSubmit={(
          values: NewApplicant,
          { setSubmitting }: FormikHelpers<NewApplicant>
        ) => {
          setSubmitting(true);
          agent.Applicant.post({
            ...values,
            //@ts-ignore
            level: values.level.toLowerCase(),
            portfolioLink: filesUploaded['webViewLink'],
            portfolioFileId: filesUploaded['id'],
            interests: values.skills
              .toString()
              .split(',')
              .map((skill) => ({ interest: skill, category: 'skill' })),
            role: position.attributes.title as string,
            project: { id: projectId, slug: projectSlug }, //router.query.slug as string },
          })
            .then((res) => {
              handleOpenConfirmationModal();
              setSubmitting(false);
            })
            .catch((error) => {
              setSubmitting(false);
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
                    <atoms.ToolTip
                      content="Please Separate skills with a comma."
                      direction="right"
                      delay={100}
                    >
                      <Field
                        as={organisms.FormField}
                        label={'What are your relevant skills?'}
                        placeholder="javascript, react, backend"
                        id="skills"
                        name="skills"
                        required
                        touched={formik.touched['skills']}
                        error={formik.errors.skills}
                      />
                    </atoms.ToolTip>
                  </atoms.Box>
                  <atoms.Box flexDirection="column">
                    <atoms.Box flexDirection="row">
                      <atoms.Typography
                        variant="secondary"
                        size="body_sm"
                        textAlign="center"
                      >
                        How many hours a week would you like to volunteer?
                      </atoms.Typography>
                      <atoms.Typography
                        variant="secondary"
                        size="body_sm"
                        css={{ color: 'red' }}
                      >
                        &nbsp; *
                      </atoms.Typography>
                    </atoms.Box>
                    <atoms.Typography variant="secondary" size="body_sm">
                      Note: this role requires at least 10 hours a week.
                    </atoms.Typography>
                    <Field
                      as={atoms.Slider}
                      id="commitment"
                      name="commitment"
                      required
                      touched={formik.touched['commitment']}
                      error={formik.errors.commitment}
                      onChange={(value) =>
                        formik.setFieldValue('commitment', +value)
                      }
                      min={5}
                      max={40}
                      initialValue={5}
                      withLabels
                      suffix=" hrs"
                      maxWidth="430px"
                    />
                    <atoms.Typography
                      variant="secondary"
                      size="body_sm"
                      css={{ color: 'red' }}
                    >
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
                  <PortFolioLink name="testField" />

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
                  {filesUploaded['id'] !== undefined ? (
                    <atoms.Box
                      gap="1rem"
                      justifyContent="center"
                      flexDirection="row"
                    >
                      {filesUploaded['name']}
                      {!!canButVis && filesUploaded['name'] && (
                        <CancelUploadButton onClick={handleRemoveFile}>
                          Remove
                        </CancelUploadButton>
                      )}
                    </atoms.Box>
                  ) : null}
                  <atoms.Box>
                    {isDeleting
                      ? 'Deleting'
                      : deleteError === ''
                      ? null
                      : 'Delete Failed'}
                  </atoms.Box>
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
                      <atoms.Typography
                        variant="secondary"
                        size="body_sm"
                        css={{ color: 'red' }}
                      >
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
                      <atoms.Typography
                        variant="secondary"
                        size="body_sm"
                        css={{ color: 'red' }}
                      >
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

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
  CloseButton,
  CloseIcon,
} from '../DetailedPage/PositionCard/StyledPositionCard';
import { GradientLine, SubmitButton } from './styledSignupForm';

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
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Name Field Entry is Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email Field Entry is Required'),
    portfolioLink: Yup.string()
      .nullable(true)
      .default(undefined)
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Invalid url'
      )
      .transform((_, value) => (value === '' ? null : value)),
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
          agent.Applicant.post({
            ...values,
            //@ts-ignore
            level: values.level.toLowerCase(),
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
                    rows={5}
                    id="experience"
                    name="experience"
                    // onChange={handleChange}
                  />
                  <Field
                    as={organisms.OpenResponse}
                    cols={50}
                    label="Why would you like to be a Dev Launcher?"
                    placeholder="My experience with development / design is..."
                    rows={5}
                    id="reason"
                    name="reason"
                    // onChange={handleChange}
                  />
                  <Field
                    as={organisms.OpenResponse}
                    cols={50}
                    label="Anything else you would like to share with us?"
                    placeholder="I just want the Team Lead to know..."
                    rows={5}
                    id="extraInfo"
                    name="extraInfo"
                    // onChange={handleChange}
                  />
                  <Field
                    as={organisms.FormField}
                    label="Portfolio/Resume Link"
                    placeholder="https://myportfolio.com"
                    id="portfolioLink"
                    name="portfolioLink"
                    // onChange={handleChange}
                    touched={
                      formik.touched.portfolioLink &&
                      !!formik.values['portfolioLink']
                    }
                    error={formik.errors.portfolioLink}
                  />
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

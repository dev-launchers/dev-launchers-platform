import { atoms, organisms } from '@devlaunchers/components/src/components';
import theme from '@devlaunchers/components/src/styles/theme';
import { DefaultTheme, useTheme } from 'styled-components';
import { ThemeType } from '@devlaunchers/components/src/styles/theme';
import FormErrorScroller from '@devlaunchers/components/src/utils/formErrorScroller';
import { Opportunity } from '@devlaunchers/models';
import { NewApplicant } from '@devlaunchers/models/newApplicant';
import { agent } from '@devlaunchers/utility';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as Yup from 'yup';
import ConfirmationModal from '../DetailedPage/Confirmation/ConfirmationModal';
import {
  CloseButton,
  CloseIcon,
} from '../DetailedPage/PositionCard/StyledPositionCard';
import { GradientLine } from './styledSignupForm';

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
  console.log(projectId);
  console.log(projectSlug);
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
    experience: Yup.string().required('Experience Field Entry is Required'),
    accepted: Yup.boolean().required('Acceptance Field Entry is Required'),
  });
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [checkCheckbox, setCheckCheckbox] = useState();

  const handleSetCheckCheckbox = () => {
    setCheckCheckbox(checkCheckbox!);
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
  //'DefaultTheme' only refers to a type, but is being used as a value here.
  /*const isDefaultTheme = (unknownValue): unknownValue is DefaultTheme => {
    // check unknownValue is DefaultTheme or not
    // return boolean
  }
  
  if (isDefaultTheme(someValue:any)) {
    // now type of someValue is DefaultTheme
  } */
  return (
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
        experience: '',
        reason: '',
        zip: 0,
        role: router.query.position as string,
        id: router.query.slug as string,
        project: router.query.slug as string,
        skills: [{ skill: '' }],
      }}
      onSubmit={(
        values: NewApplicant,
        { setSubmitting }: FormikHelpers<NewApplicant>,
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
          role: router.query.position as string,
          project: router.query.slug as string,
        })
          .then((res) => {
            setSubmitting(false);
            router.push('/join/confirmation');
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
      {({ errors, setFieldValue, touched, values }) => (
        <atoms.Box paddingInline='0.5rem' justifyContent='center'>
        <Form
          css={{
            flex: 1,
            padding: '2rem',
            boxShadow: '0px 10px 18px 10px rgba(127, 126, 127, 0.25)',
            borderRadius: 32,
            maxWidth: '1536px',
            margin: '2rem 0',
          }}
        >
          <atoms.Box flexDirection="column" maxWidth="90%" margin="auto">
            <atoms.Box flexDirection="column">
              <atoms.Layer hasRainbow>
                <atoms.Typography type="h2" textAlign="center">
                  Volunteer Application
                </atoms.Typography>
              </atoms.Layer>
            </atoms.Box>
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
                touched={touched['name']}
                error={errors.name}
              />
              <Field
                as={organisms.FormField}
                label="Your Email"
                placeholder="johnsmith@gmail.com"
                id="email"
                name="email"
                required
                touched={touched['email']}
                error={errors.email}
              />
              <Field
                as={organisms.FormField}
                label="Your Discord Username"
                placeholder="johnsmith#1234"
                id="discordUsername"
                name="discordUsername"
              />
              <atoms.Box gap="32px" flexDirection="column">
                <Field
                  as={organisms.FormField}
                  label={
                    <atoms.Box gap="1rem" alignItems="center">
                      What are your relevant skills?
                      <atoms.ToolTip
                        content="Please Separate skills with a coma."
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
                  min={0}
                  max={10}
                  onChange={(value) => setFieldValue('commitment', +value)}
                  withLabels
                  suffix=" hrs"
                  maxWidth='430px'
                />
                <atoms.Typography type="pSmall" css={{ color: 'red' }}>
                  {errors.commitment}
                </atoms.Typography>
              </atoms.Box>
              <Field
                as={organisms.OpenResponse}
                cols={50}
                touched={touched['experience']}
                error={errors.experience}
                label="Please breifly describe your experience in development or design"
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
                touched={touched.portfolioLink && !!values['portfolioLink']}
                error={errors.portfolioLink}
              />
              <atoms.Typography type="p">
                We require users to be 18 years old or older. Please confirm
                below.
              </atoms.Typography>
              <atoms.Checkbox
                label="I am 18 years old or older."
                disabled={false}
                required
              />
              <atoms.Checkbox
                label="I have read and agree to the Terms and Conditions."
                disabled={false}
                required
              />
              <atoms.Box maxWidth="50%">
                <atoms.Button
                  buttonSize="standard"
                  buttonType="primary"
                  type="submit"
                >
                  Submit
                </atoms.Button>
              </atoms.Box>
            </atoms.Box>
          </atoms.Box>
          <FormErrorScroller focusAfterScroll />
        </Form>
        </atoms.Box>
      )}
    </Formik>
  );
}

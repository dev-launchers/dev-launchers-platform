import React, { useEffect } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { useUserDataContext } from '../../../contexts/UserDataContext';
import { NewApplicant } from '@devlaunchers/models/newApplicant';
import { SkillLevel } from '@devlaunchers/models/level';
import {
  atoms,
  organisms,
} from '@devlaunchers/components/src/components';
import { agent } from '@devlaunchers/utility';
interface FormFields extends Omit<NewApplicant, 'level'> {
  level: NewApplicant['level'] | '';
}

export default function SignUpForm() {
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Name Field Entry is Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email Field Entry is Required'),
    age: Yup.number()
      .moreThan(17, 'DevLaunchers is only accepting 18+')
      .required('Age Field Entry is Required'),
    commitment: Yup.number().required('Commitment Field Entry is Required'),
    extraInfo: Yup.string(),
    experience: Yup.string().required('Experience Field Entry is Required'),
    accepted: Yup.boolean().required('Acceptance Field Entry is Required'),
  });

  const router = useRouter();
  const { userData } = useUserDataContext();
  const Formik = useFormik<FormFields>({
    initialValues: {
      discordUsername: '',
      name: '',
      email: '',
      age: 0,
      level: 'Intermediate',
      accepted: false,
      commitment: 0,
      extraInfo: '',
      portfolioLink: '',
      experience: '',
      reason: '',
      zip: 0,
      role: router.query.position as string,
      id: router.query.slug as string,
      project: router.query.slug as string,
      skills: [{ skill: '' }],
    },
    onSubmit: (
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
        role: router.query.position as string,
        project: router.query.project as string,
        id: router.query.slug as string,
      })
        .then((res) => {
          setSubmitting(false);
          router.push('/join/confirmation');
        })
        .catch((error) => {
          setSubmitting(false);
          console.log(error);
          // console.log(error.response);
          // console.log(error.response.data);
          // console.log(error.response.status);
        });
    },
    validationSchema: SignupSchema,
  });

  // ! GOING TO BE ACTIVATED AGAIN ONCE WE HAVE BACKEND REDIRECTION
  // useEffect(() => {
  //   if (userData.id == 0) {
  //     router.push("/login");
  //   }
  // }, [router, userData.id]);

  return (
    <form
      css={{
        padding: '2rem',
        boxShadow: '0px 10px 18px 10px rgba(127, 126, 127, 0.25)',
        borderRadius: 32,
        maxWidth: '1536px',
        margin: 'auto',
      }}
    >
      <atoms.Box flexDirection="column" maxWidth="90%" margin="auto">
        <atoms.Box flexDirection="column">
          <atoms.Layer hasRainbow>
            <atoms.Typography type="h2" css={{ textAlign: 'center' }}>
              Volunteer Application
            </atoms.Typography>
          </atoms.Layer>
        </atoms.Box>
        <atoms.Box
          flexDirection="column"
          gap="32px"
          paddingBlock="2rem"
          css={{ maxWidth: 'fit-content' }}
        >
          <organisms.FormField
            label="Your Full Name"
            placeholder="John Smith"
            id="name"
            required
            onChange={Formik.handleChange}
          />
          <organisms.FormField
            label="Your Email"
            placeholder="johnsmith@gmail.com"
            id="email"
            required
            onChange={Formik.handleChange}
          />
          <organisms.FormField
            label="Your Discord Username"
            placeholder="johnsmith#1234"
            id="discordUsername"
            onChange={Formik.handleChange}
          />
          <atoms.Box gap="32px" flexDirection="column">
            <organisms.FormField
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
              placeholder="Please separate skills with comma"
              id="discordUsername"
              onChange={Formik.handleChange}
            />
          </atoms.Box>
          <atoms.Box flexDirection="column">
            <atoms.Typography type="pSmall">
              HOW MANY HOURS A WEEK WOULD YOU LIKE TO VOLUNTEER?
            </atoms.Typography>

            <atoms.Slider
              min={0}
              max={10}
              onChange={(value) => Formik.setFieldValue('commitment', +value)}
              withLabels
              suffix=" hrs"
            />
          </atoms.Box>
          <organisms.OpenResponse
            cols={50}
            error=""
            label="Please breifly describe your experience in development or design"
            placeholder="My experience with development / design is..."
            required
            rows={5}
            id="experience"
            onChange={Formik.handleChange}
          />
          <organisms.OpenResponse
            cols={50}
            error=""
            label="Why would you like to be a Dev Launcher?"
            placeholder="My experience with development / design is..."
            rows={5}
            id="reason"
            onChange={Formik.handleChange}
          />
          <organisms.FormField
            error=""
            label="Portfolio Link"
            placeholder="https://myportfolio.com"
            id="portfolioLink"
            onChange={Formik.handleChange}
          />
           <atoms.Typography type="p">
          We require users to be 18 years old or older. Please confirm below.
          </atoms.Typography>
          <atoms.Checkbox
            label="I am 18 years old or older."
            onChange={Formik.handleChange}
            disabled={false}
            required
            />
          <atoms.Checkbox
            label="I have read and agree to the Terms and Conditions."
            onChange={Formik.handleChange}
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
    </form>
  );
}

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import SignInSection from '../../common/SignInSection/SignInSection';
import Vector from '../../../images/Vector.svg';

import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { atoms, organisms } from '@devlaunchers/components/src/components';

import {
  HeadWapper,
  GoBack,
} from './StyledSubmissionForm';

function SubmissionForm() {
  let { userData, setUserData, isAuthenticated } = useUserDataContext();
  //if (process.env.NEXT_PUBLIC_NAME == 'DEVELOPMENT') isAuthenticated = true;

  const router = useRouter();
  const [sending, setSending] = useState(false);

  const goBack = () => {
    window.history.back(-1);
  };

  const initialValues = {
    ideaName: '',
    tagline: '',
    description: '',
    targetAudience: '',
    features: '',
    experience: '',
    extraInfo: '',
    hourCommitmentMin: 0,
    hourCommitmentMax: 0,
    difficultyLevel: 'Beginner',
  };

  const SignupSchema = Yup.object().shape({
    ideaName: Yup.string().required('Idea Name is Required.'),
    description: Yup.string().required('Idea Description is Required.'),
    experience: Yup.string().required('Experience is Required.'),
    features: Yup.string().required('Idea Feature is Required.'),
  });

  const submitHandler = async (values) => {
    //e.preventDefault();
    setSending(true);

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/`,
      values
    );

    if (res.status === 200) {
      router.push(`workshop/${res.data.id}`);
    } else {
      alert('Unable to register your idea.');
      setSending(false);
    }
  };


  return (
    <>
      <HeadWapper>
        <atoms.Layer hasRainbow style={{ width: '17.7rem', margin: 'auto' }}>
          <atoms.Typography type='h1' style={{ fontSize: '4rem', }}>
            IdeaSpace
          </atoms.Typography>
        </atoms.Layer>
        <GoBack onClick={goBack}>
          <img alt='submit_image' src={Vector} />
          Back
        </GoBack>
        <atoms.Typography type='h4' >
          Have an idea for a development project?<br />
          Share your idea with us!
        </atoms.Typography>
      </HeadWapper>

      {!isAuthenticated ? (
        <SignInSection 
          label='Please sign in to submit your idea!'
          redirectURL='https://devlaunchers.org/ideaspace/submit'
        />
      ) : (
        <atoms.Box margin='1rem'>
          <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={submitHandler}
          >

            {({ errors, setFieldValue, touched }) => (
              <Form
                style={{
                  maxWidth: '36rem',
                  margin: '1.5rem auto 1.5rem',
                  padding: '2rem',
                  textAlign: 'left',
                  borderRadius: 32,
                  backgroundColor: 'white',
                }}
              >
                <atoms.Typography type='h4' style={{
                  maxWidth: '37rem',
                  margin: '1rem auto 2.5rem',
                  textAlign: 'left',
                }}>
                  Idea Submission
                </atoms.Typography>

                <atoms.Box
                  flexDirection='column'
                  gap='2rem'
                >
                  <atoms.Box maxWidth='20rem' flexDirection='column'>
                    <Field
                      required
                      as={organisms.FormField}
                      label='Idea Name&nbsp;'
                      placeholder='Your Product Name'
                      id='ideaName'
                      name='ideaName'
                      touched={touched['ideaName']}
                      error={errors.ideaName}
                    />
                  </atoms.Box>
                  <atoms.Box flexDirection='column'>
                    <Field
                      required
                      as={organisms.OpenResponse}
                      label='What is your idea?&nbsp;'
                      placeholder='What is your product idea? Would it be helpful or fun? Who would use it and why?'
                      id='description'
                      name='description'
                      touched={touched['description']}
                      error={errors.description}
                      cols={50}
                      rows={5}
                    />
                  </atoms.Box>
                  <atoms.Box flexDirection='column'>
                    <Field
                      required
                      as={organisms.OpenResponse}
                      label='Do you have any relevant experience in Development or design?&nbsp;'
                      placeholder="If you have any relevant experience in development or design, please explain here. This information will be shared with Devlaunchers and won't be publicly shown in the workshopping page."
                      id='experience'
                      name='experience'
                      touched={touched['experience']}
                      error={errors.experience}
                      cols={50}
                      rows={5}
                    />
                  </atoms.Box>
                  <atoms.Box flexDirection='column'>
                    <Field
                      as={organisms.OpenResponse}
                      label='who do you think your idea is helpful to?'
                      placeholder='Describe your audience, including their demographic information, technology experience, why they would be interested in your idea, etc.'
                      id='targetAudience'
                      name='targetAudience'
                      cols={50}
                      rows={5}
                    />
                  </atoms.Box>
                  <atoms.Box flexDirection='column'>
                    <Field
                      required
                      as={organisms.OpenResponse}
                      label='What Features would your Product have?&nbsp;'
                      placeholder='A list of possible features your product could have.'
                      id='features'
                      name='features'
                      touched={touched['features']}
                      error={errors.features}
                      cols={50}
                      rows={5}
                    />
                  </atoms.Box>
                  <Field
                    as={organisms.OpenResponse}
                    label='Anything else you would like to share with us?'
                    placeholder='Want to share something else not listed above?'
                    id='extraInfo'
                    name='extraInfo'
                    cols={50}
                    rows={5}
                  />
                  <Field
                    as={organisms.FormField}
                    label='Do you have a catchy tagline for this idea submission?'
                    placeholder='Your Tagline'
                    id='tagline'
                    name='tagline'
                  />

                  <atoms.Typography type='p' style={{ marginTop: '0.5rem', }}>
                    After submitting your idea will be reviewed and enter the workshopping stage!
                  </atoms.Typography>

                  {/*
                  <atoms.Box style={{ fontSize: '1rem', }}>
                    <atoms.Checkbox
                      label='I have read and agree to the <a>Terms and Conditions</a>.'
                      disabled={false}
                      required
                    />
                  </atoms.Box>*/}

                  <atoms.Box style={{ justifyContent: 'flex-end' }}>
                    <atoms.Button
                      buttonSize='standard'
                      buttonType='primary'
                      type='submit'
                    >
                      {' '}
                      {sending === true ? 'Wait' : 'Submit'}{' '}
                    </atoms.Button>
                  </atoms.Box>

                </atoms.Box>

              </Form>
            )}
          </Formik>
        </atoms.Box>
      )}
    </>
  );

}

export default SubmissionForm;

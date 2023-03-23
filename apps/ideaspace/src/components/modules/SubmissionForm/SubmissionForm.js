import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';

import SignInSection from '../../common/SignInSection/SignInSection';
import BackButton from '../../common/BackButton/BackButton';
import IdeaForm from '../../common/IdeaForm/IdeaForm';
import useConfirm from '../../common/DialogBox/DialogBox';
import * as Yup from 'yup';
import { atoms } from '@devlaunchers/components/src/components';

import {
  HeadWapper,
  Headline,
  StyledRanbow,
} from './StyledSubmissionForm';

function SubmissionForm() {
  let { userData, setUserData, isAuthenticated } = useUserDataContext();
  if (process.env.NEXT_PUBLIC_NAME == 'DEVELOPMENT') {
    isAuthenticated = true;

    React.useEffect(() => {
      setUserData({ ...userData, id: 30 });
    }, []);
  }

  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [unsavedChanges, setunsavedChanges] = useState(false);
  const [Dialog, confirmLeave] = useConfirm(
    ['You have unsaved changes','',''],
    'Are you sure you want to discard the changes and leave',
    ['alternative primary', 'CANCEL', 'LEAVE']
  )
  const [urrl, setUrrl] = useState('');

  const [CreateFailure, confirmFailure] = useConfirm(
    ['Unable to register your idea.','',''],
    'Please try again.',
    ['primary', 'close'],
  );

  const initialValues = {
    ideaName: '',
    tagline: '',
    description: '',
    targetAudience: '',
    features: '',
    experience: '',
    extraInfo: '',
    involveLevel: '',
    status: '',
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
    values['status'] = 'workshopping';
    setSending(true);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/`,
        values
      );

      if (res.status === 200) {
        setunsavedChanges(false);
        setUrrl(`workshop/${res.data.id}`);
      }
    } catch (error) {
      setSending(false);
      setunsavedChanges(true);
      confirmFailure();
    }
  };


  const handleDialog = async (url) => {
    if (await confirmLeave()) {
      setUrrl(url);
    }
  }

  React.useEffect(() => {
    // For reloading.
    window.onbeforeunload = () => {
      if (unsavedChanges) {
        return 'You have unsaved changes. Do you really want to leave?';
      }
    };

    // For changing route.
    if (unsavedChanges && urrl == '') {
      const routeChangeStart = (url) => {
        handleDialog(url);
        router.events.emit('routeChangeError');
        throw 'Abort route change. Please ignore this error.';
      }
      router.events.on('routeChangeStart', routeChangeStart);
      return () => {
        router.events.off('routeChangeStart', routeChangeStart);
      };
    } else if (urrl !== '') {
      if (urrl == 'back') {
        window.history.back(-1);
      } else {
        router.push(urrl);
      }
    }
  }, [unsavedChanges, urrl]);

  const backHandler = (url) => {
    if (unsavedChanges) {
      handleDialog(url);
    } else {
      window.history.back(-1);
    }
  }

  return (
    <>
      <HeadWapper>
        <Headline>Submit an idea</Headline>
        <StyledRanbow>
          <atoms.Layer hasRainbowBottom />
        </StyledRanbow>
        <BackButton
          buttonType="confirm"
          clickHandler={backHandler}
        />
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
        <>
          <Dialog />
          <CreateFailure />
          <IdeaForm
            initialValues={initialValues}
            SignupSchema={SignupSchema}
            submitHandler={submitHandler}
            unsavedHandler={setunsavedChanges}
            formButton="submit"
            sending={sending}
          />
        </>
      )}
    </>
  );

}

export default SubmissionForm;

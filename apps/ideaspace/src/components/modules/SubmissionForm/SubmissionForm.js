import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { agent } from '@devlaunchers/utility';
import { atoms } from '@devlaunchers/components/src/components';
import { cleanData } from '../../../utils/StrapiHelper';
import SignInSection from '../../common/SignInSection/SignInSection';
import BackButton from '../../common/BackButton/BackButton';
import IdeaForm from '../../common/IdeaForm/IdeaForm';
import useConfirm from '../../common/DialogBox/DialogBox';
import * as Yup from 'yup';
import {
  HeadWapper,
  Headline,
  StyledRanbow,
} from './StyledSubmissionForm';

function SubmissionForm() {
  let { userData, setUserData, isAuthenticated } = useUserDataContext();
  if (process.env.NEXT_PUBLIC_NAME == 'DEVELOPMENT') {
    isAuthenticated = true;

    useEffect(() => {
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

  const originalValue = {
    ideaName: '',
    tagline: '',
    description: '',
    targetAudience: '',
    features: '',
    experience: '',
    extraInfo: '',
    involveLevel: '',
    status: '',
  };

  const [formValue, setFormValue] = useState(originalValue);
  useEffect(() => {
    const storageValue = sessionStorage.getItem("Form");
    if (storageValue !== null && storageValue !== 'null') {
      setFormValue(JSON.parse(storageValue));
    } else {
      setFormValue(originalValue);
    }
  }, []);

  const SignupSchema = Yup.object().shape({
    ideaName: Yup.string().trim().required('Idea Name is Required.'),
    description: Yup.string().trim().required('Idea Description is Required.'),
    experience: Yup.string().trim().required('Experience is Required.'),
    features: Yup.string().trim().required('Idea Feature is Required.'),
    involveLevel: Yup.string().required('Level of involvement is Required.'),
  });


  const submitHandler = async (values) => {
    values['author'] = userData;
    values['status'] = 'workshopping';
    values['ideaName'] = values['ideaName'].trim();
    values['tagline'] = values['tagline'].trim();
    values['description'] = values['description'].trim();
    values['targetAudience'] = values['targetAudience'].trim();
    values['features'] = values['features'].trim();
    values['experience'] = values['experience'].trim();
    values['extraInfo'] = values['extraInfo'].trim();
    setSending(true);

    try {
      const data = cleanData(await agent.Ideas.post(values));

      if (data.ideaName) {
        setunsavedChanges(false);
        router.push(`workshop/${data.id}`);
        
        if (sessionStorage.getItem("Form") !== null) {
          sessionStorage.removeItem("Form");
        }
        if (sessionStorage.getItem("FormTemp") !== null) {
          sessionStorage.removeItem("FormTemp");
        }
      } else {
        alert('Unable to register your idea.');
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

  useEffect(() => {
    // For reloading.
    window.onbeforeunload = () => {
      sessionStorage.setItem("Form",sessionStorage.getItem('FormTemp'));
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
            initialValues={formValue}
            originalValue={originalValue}
            SignupSchema={SignupSchema}
            submitHandler={submitHandler}
            unsavedHandler={setunsavedChanges}
            formButton="submit"
            sending={sending}
            href="terms-and-conditions"
          />
        </>
      )}
    </>
  );

}

export default SubmissionForm;

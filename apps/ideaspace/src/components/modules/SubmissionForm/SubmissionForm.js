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
import { StyledRanbow } from './StyledSubmissionForm';
import { HeadWapper, Headline } from '../../common/CommonStyles';

function SubmissionForm() {
  let { userData, isAuthenticated } = useUserDataContext();

  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [unsavedChanges, setunsavedChanges] = useState(false);
  const [Dialog, confirmLeave] = useConfirm(
    ['You have unsaved changes', '', ''],
    'Are you sure you want to discard the changes and leave',
    ['alternative primary', 'CANCEL', 'LEAVE']
  );
  const [urrl, setUrrl] = useState('');

  const [CreateFailure, confirmFailure] = useConfirm(
    ['Unable to register your idea.', '', ''],
    'Please try again.',
    ['primary', 'close']
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
  };

  const SignupSchema = Yup.object().shape({
    ideaName: Yup.string()
      .trim()
      .required('It looks like you missed a field.')
      .max(80, 'Idea Name must be at most 80 characters'),
    description: Yup.string()
      .trim()
      .required('It looks like you missed a field.')
      .max(1000, 'Description must be at most 1000 characters'),
    experience: Yup.string()
      .trim()
      .required('It looks like you missed a field.')
      .max(1000, 'Experience must be at most 1000 characters'),
    targetAudience: Yup.string()
      .trim()
      .required('It looks like you missed a field.')
      .max(1000, 'Target Audience must be at most 1000 characters'),
    features: Yup.string()
      .trim()
      .required('It looks like you missed a field.')
      .max(1000, 'Features must be at most 1000 characters'),
    extraInfo: Yup.string()
      .trim()
      .max(1000, 'Extra Info must be at most 1000 characters'),
    tagline: Yup.string()
      .trim()
      .max(80, 'Tagline must be at most 80 characters'),
    involveLevel: Yup.string()
      .nullable()
      .required('Please select your level of involvement'),
  });

  const submitHandler = async (values) => {
    values['author'] = userData.id;
    values['ideaOwner'] = userData.id;
    values['status'] = 'workshopping';
    values['ideaName'] = values['ideaName'].trim();
    values['tagline'] = values['tagline'].trim();
    values['description'] = values['description'].trim();
    values['targetAudience'] = values['targetAudience'].trim();
    values['features'] = values['features'].trim();
    values['experience'] = values['experience'].trim();
    values['extraInfo'] = values['extraInfo'].trim();
    values['involveLevel'] = values['involveLevel'].trim();

    setSending(true);

    try {
      const data = cleanData(await agent.Ideas.post(values));

      if (data.ideaName) {
        setunsavedChanges(false);
        router.push(`workshop/${data.id}`);
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
  };

  useEffect(() => {
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
      };
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

  return (
    <>
      <HeadWapper>
        <Headline>Submit an idea</Headline>
        <StyledRanbow>
          <atoms.Layer hasRainbowBottom />
        </StyledRanbow>
        <BackButton buttonType="confirm" backRoute={'/ideaspace'} />
        <atoms.Typography type="h4">
          Have an idea for a software project but need developers to build it?
          <br />
          Bring your idea to us - we will work with you to spin up a project to
          bring it to life!
        </atoms.Typography>
      </HeadWapper>

      {!isAuthenticated ? (
        <SignInSection
          label="Please sign in to submit your idea!"
          redirectURL={
            process.env.NEXT_PUBLIC_FRONT_END_URL + '/ideaspace/submit'
          }
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
            editMode={false}
            formButton="submit"
            sending={sending}
          />
        </>
      )}
    </>
  );
}

export default SubmissionForm;

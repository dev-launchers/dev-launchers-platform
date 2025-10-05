import { useState, useEffect, useRef } from 'react';
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
  const [urrl, setUrrl] = useState('');
  const isProgrammaticNavigation = useRef(false);

  const [Dialog, confirmLeave] = useConfirm(
    ['You have unsaved changes', '', ''],
    'Are you sure you want to discard the changes and leave',
    ['alternative primary', 'CANCEL', 'LEAVE']
  );

  const [submissionError, setSubmissionError] = useState('');

  const initialValues = {
    ideaName: '',
    tagline: '',
    description: '',
    targetAudience: '',
    features: '',
    experience: '',
    extraInfo: '',
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
  });

  const scrollToIdeaNameField = () => {
    setTimeout(() => {
      const ideaNameElement = document.querySelector('[data-field="ideaName"]');
      if (ideaNameElement) {
        ideaNameElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }, 100);
  };

  const checkIdeaNameAvailability = async (ideaName) => {
    try {
      const response = await agent.Ideas.checkAvailability(ideaName);

      return response.available !== false;
    } catch (error) {
      console.error('Error checking idea name availability:', error);

      try {
        const allIdeas = await agent.Ideas.getAll();
        const existingNames = allIdeas.map((idea) =>
          idea.ideaName?.toLowerCase().trim()
        );
        return !existingNames.includes(ideaName.toLowerCase().trim());
      } catch (fallbackError) {
        console.error('Error with fallback check:', fallbackError);
        return true;
      }
    }
  };

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

    setSending(true);
    setSubmissionError('');

    try {
      const isAvailable = await checkIdeaNameAvailability(values.ideaName);
      if (!isAvailable) {
        setSending(false);
        setSubmissionError(
          'This idea name is already in use. Please try something else.'
        );
        scrollToIdeaNameField();
        return false;
      }

      const data = cleanData(await agent.Ideas.post(values));

      if (data.ideaName) {
        setunsavedChanges(false);
        isProgrammaticNavigation.current = true;
        router.push(`workshop/${data.id}`);
      } else {
        setSending(false);
        setSubmissionError(
          'This idea name is already in use. Please try something else.'
        );
        scrollToIdeaNameField();
      }
    } catch (error) {
      setSending(false);
      setunsavedChanges(true);
      if (
        error.response &&
        error.response.data &&
        (error.response.data.message || '')
          .toLowerCase()
          .includes('already exists')
      ) {
        setSubmissionError(
          'This idea name is already in use. Please try something else.'
        );
        scrollToIdeaNameField();
      } else {
        setSubmissionError(
          'This idea name is already in use. Please try something else.'
        );
        scrollToIdeaNameField();
      }
    }
  };

  const handleDialog = async (url) => {
    if (await confirmLeave()) {
      setUrrl(url);
    }
  };

  useEffect(() => {
    window.onbeforeunload = () => {
      if (unsavedChanges) {
        return 'You have unsaved changes. Do you really want to leave?';
      }
    };

    if (unsavedChanges && urrl == '') {
      const routeChangeStart = (url) => {
        if (isProgrammaticNavigation.current) {
          isProgrammaticNavigation.current = false;
          return;
        }

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
        <atoms.Typography textAlign="center" variant="primary" size="xl6">
          Submit an idea
        </atoms.Typography>
        <StyledRanbow>
          <atoms.Layer hasRainbowBottom />
        </StyledRanbow>
        <BackButton buttonType="confirm" backRoute={'/ideaspace'} />
        <atoms.Typography
          variant="primary"
          size="xl3"
          textAlign="center"
          as="h4"
        >
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
          {/*<Dialog />*/}
          <IdeaForm
            initialValues={initialValues}
            SignupSchema={SignupSchema}
            submitHandler={submitHandler}
            unsavedHandler={setunsavedChanges}
            editMode={false}
            formButton="submit"
            sending={sending}
            checkIdeaNameAvailability={checkIdeaNameAvailability}
            submissionError={submissionError}
            onSubmissionErrorClear={() => setSubmissionError('')}
          />
        </>
      )}
    </>
  );
}

export default SubmissionForm;

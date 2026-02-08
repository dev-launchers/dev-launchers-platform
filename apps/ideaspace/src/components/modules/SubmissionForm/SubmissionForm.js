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
  const [referrer, setReferrer] = useState(null);
  const returnBackUrl =
    referrer === 'user-profile' ? '/users/me' : '/ideaspace';

  // Capture ref once, then strip it from the URL to keep things clean.
  useEffect(() => {
    if (!router.isReady) return;

    if (router.query.ref && !referrer) {
      setReferrer(router.query.ref);
    }

    if (router.query.ref) {
      router.replace(`/ideaspace/submit`, undefined, {
        shallow: true,
      });
    }
  }, [router.isReady, router.query.ref, referrer, router]);

  const [sending, setSending] = useState(false);
  const [unsavedChanges, setunsavedChanges] = useState(false);
  const [urrl, setUrrl] = useState('');
  const isProgrammaticNavigation = useRef(false);

  const [Dialog, confirmLeave] = useConfirm(
    ['You have unsaved changes', '', ''],
    'Are you sure you want to discard the changes and leave',
    ['alternative primary', 'CANCEL', 'LEAVE']
  );

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
    //involveLevel: '',
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
    // involveLevel: Yup.string()
    //   .nullable()
    //   .required('Please select your level of involvement'),
  });

  const submitHandler = async (values, actions) => {
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
    //    values['involveLevel'] = values['involveLevel'].trim();

    setSending(true);

    try {
      const response = await agent.Ideas.post(values);
      if (response.error) {
        if (response.error.message.includes('This attribute must be unique')) {
          actions.setFieldError(
            'ideaName',
            'This idea name is already in use. Please try something else'
          );
          actions.setFieldTouched('ideaName', true, false);
          setSending(false);

          // Scroll to the field
          setTimeout(() => {
            const ideaNameElement = document.querySelector(
              '[data-field="ideaName"]'
            );
            if (ideaNameElement) {
              ideaNameElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
            }
          }, 100);
          // Throwing specific error type so IdeaForm knows not to show success message
          const duplicateError = new Error('Duplicate idea name');
          duplicateError.isDuplicateError = true;
          throw duplicateError;
        }
        throw new Error('Unable to register');
      } else {
        const data = cleanData(response);
        isProgrammaticNavigation.current = true;
        setunsavedChanges(false);
        router.push(`workshop/${data.id}`);
      }
    } catch (error) {
      setSending(false);
      setunsavedChanges(true);
      throw error;
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
        <atoms.Typography
          as="h4"
          leading="tight"
          size="xl4"
          textAlign="center"
          textCase="capitalize"
          textDecoration="noUnderline"
          textStyle="normal"
          textWeight="normal"
          variant="primary"
        >
          Submit an idea
        </atoms.Typography>
        <StyledRanbow>
          <atoms.Layer hasRainbowBottom />
        </StyledRanbow>
        <BackButton buttonType="confirm" backRoute={returnBackUrl} />
        <atoms.Typography
          variant="secondary"
          as="p"
          leading="normal"
          size="body_xl"
          textAlign="center"
          textCase="normal"
          textDecoration="noUnderline"
          textStyle="normal"
          textWeight="light"
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

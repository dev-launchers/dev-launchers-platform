import React, { useImperativeHandle, forwardRef, useRef } from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { atoms } from '@devlaunchers/components/src/components';
import { agent } from '@devlaunchers/utility';
import { cleanData } from '../../../utils/StrapiHelper';
import SignInSection from '../../common/SignInSection/SignInSection';
import BackButton from '../../common/BackButton/BackButton';
import IdeaForm from '../../common/IdeaForm/IdeaForm';
import useConfirm from '../../common/DialogBox/DialogBox';
import * as Yup from 'yup';

import { HeadWapper, Headline, StyledRanbow } from './StyledEditIdea';

const EditIdea = forwardRef(({ initialIdea, onEditSuccess }, ref) => {
  let { userData, isAuthenticated } = useUserDataContext();
  const formikRef = useRef();
  const router = useRouter();
  const { ideaId } = router.query;
  const [sending, setSending] = useState(false);
  const [unsavedChanges, setunsavedChanges] = useState(false);
  const [getError, setGetError] = useState(false);
  const [Dialog, confirmLeave] = useConfirm(
    ['You have unsaved changes', '', ''],
    'Are you sure you want to discard the changes and leave?',
    ['alternative primary', 'CANCEL', 'LEAVE']
  );
  const [urrl, setUrrl] = useState('');

  const requiredFields = [
    'ideaName',
    'description',
    'experience',
    'targetAudience',
    'features',
    'involveLevel',
  ];

  const [UpdateSucceed, confirmSucceed] = useConfirm(
    ['Idea updated successfully', '', ''],
    '',
    ['primary', 'got it']
  );

  const [UpdateFailure, confirmFailure] = useConfirm(
    ['Unable to update your idea', '', ''],
    'Please try again.',
    ['primary', 'close']
  );

  const [NotAuthor, confirmNotAuthor] = useConfirm(
    ['This is not your idea.', '', ''],
    '',
    ['primary', 'close']
  );

  const [ArchivedIdea, confirmArchive] = useConfirm(
    ['This idea has been archived.', '', ''],
    'To workshop on it, you need to reactivate it first.',
    ['primary', 'got it']
  );

  const [card, setCard] = useState(
    initialIdea || {
      ideaName: '',
      tagline: '',
      description: '',
      targetAudience: '',
      features: '',
      experience: '',
      extraInfo: '',
      involveLevel: '',
      status: '',
    }
  );

  const rejectAuthor = async () => {
    if (!(await confirmArchive())) {
      router.push(`/ideaspace/workshop/${ideaId}`);
    }
  };

  const rejectUser = async () => {
    if (!(await confirmNotAuthor())) {
      window.history.back(-1);
    }
  };

  useEffect(() => {
    localStorage.removeItem('ideaFormData');
    localStorage.removeItem('involveLevel');

    async function fetchIdea() {
      if (!initialIdea && ideaId) {
        const idea = cleanData(
          await agent.Ideas.getIdea(ideaId, new URLSearchParams('populate=*'))
        );
        if (!idea || !idea.id || idea.id === 0) {
          setGetError(true);
          return;
        }
        if (userData.id !== 0) {
          if (idea.author.data.id === userData.id) {
            if (idea.status === 'archived') {
              rejectAuthor();
            }
            setCard(idea);
          } else {
            rejectUser();
          }
        }
      }
    }
    fetchIdea();
  }, [ideaId, userData.id, initialIdea]);

  const SignupSchema = Yup.object().shape({
    ideaName: Yup.string().trim().required('Idea Name is Required.'),
    description: Yup.string().trim().required('Idea Description is Required.'),
    experience: Yup.string().trim().required('Experience is Required.'),
    targetAudience: Yup.string()
      .trim()
      .required('Target Audience is Required.'),
    features: Yup.string().trim().required('Idea Feature is Required.'),
    involveLevel: Yup.string().required('Level of involvement is Required.'),
  });

  const submitHandler = async (values, actions) => {
    values['ideaName'] = values['ideaName'].trim();
    values['tagline'] = values['tagline'].trim();
    values['description'] = values['description'].trim();
    values['targetAudience'] = values['targetAudience'].trim();
    values['features'] = values['features'].trim();
    values['experience'] = values['experience'].trim();
    values['extraInfo'] = values['extraInfo'].trim();

    // Setting a default or valid status value if it's empty
    if (!values['status'] || values['status'].trim() === '') {
      values['status'] = 'workshopping';
    }

    setSending(true);

    try {
      const payload = { data: values };
      const response = await agent.Ideas.put(ideaId, payload);

      // Check for error response
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

          // Throwing specific error type so IdeaForm knows not to show error alert
          const duplicateError = new Error('Duplicate idea name');
          duplicateError.isDuplicateError = true;
          throw duplicateError;
        }
        throw new Error('Unable to update idea');
      }

      const data = cleanData(response);

      if (data.ideaName) {
        setunsavedChanges(false);
        setSending(false);
        if (onEditSuccess) {
          onEditSuccess(data);
        }
      }
    } catch (error) {
      setSending(false);
      setunsavedChanges(true);

      // Only show the failure dialog if it's not a duplicate error
      if (!error.isDuplicateError) {
        confirmFailure();
      }

      // Re-throw the error so IdeaForm can handle it properly
      throw error;
    }
  };

  const handleDialog = async (url) => {
    if (await confirmLeave()) {
      setUrrl(url);
    } else {
      setSending(false);
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

  const backHandler = (url) => {
    if (unsavedChanges) {
      handleDialog(url);
    } else {
      window.history.back(-1);
    }
  };
  useImperativeHandle(ref, () => ({
    submitForm: () => {
      if (formikRef.current) {
        // Touch all required fields before submission
        requiredFields.forEach((field) =>
          formikRef.current.setFieldTouched(field, true, false)
        );

        // Validate and trigger scrollToError if needed
        return formikRef.current.validateForm().then((errors) => {
          if (Object.keys(errors).length > 0) {
            // Use the same scrollToError logic as in the non-edit mode
            const firstError = Object.keys(errors)[0];
            if (firstError) {
              const errorElement = document.querySelector(
                `[data-field="${firstError}"]`
              );
              if (errorElement) {
                setTimeout(() => {
                  errorElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
                }, 100);
              }
            }
            return Promise.reject(errors);
          }
          return formikRef.current.submitForm();
        });
      }
      return Promise.reject('Formik instance not available');
    },
    touchAllFields: () => {
      if (formikRef.current) {
        requiredFields.forEach((field) =>
          formikRef.current.setFieldTouched(field, true, false)
        );
        formikRef.current.validateForm();
      }
    },
    isSending: () => sending,
  }));

  if (getError) {
    return <Error statusCode={404} title="page Not Found" />;
  } else {
    return (
      <>
        {!isAuthenticated ? (
          <SignInSection
            label="Please sign in to edit your idea!"
            redirectURL={process.env.NEXT_PUBLIC_FRONT_END_URL + '/users/me'}
          />
        ) : (
          <>
            <Dialog />
            <UpdateSucceed />
            <UpdateFailure />
            <NotAuthor />
            <ArchivedIdea />
            <IdeaForm
              initialValues={card}
              SignupSchema={SignupSchema}
              submitHandler={submitHandler}
              unsavedHandler={setunsavedChanges}
              formButton="save"
              sending={sending}
              clickHandler={backHandler}
              editMode={true}
              hideFormButtons={true}
              formikRef={formikRef}
            />
          </>
        )}
      </>
    );
  }
});

export default EditIdea;

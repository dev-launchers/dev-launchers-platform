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


import {
  HeadWapper,
  Headline,
  StyledRanbow,
} from './StyledEditIdea';

function EditIdea() {
  let { userData, setUserData, isAuthenticated } = useUserDataContext();
  if (process.env.NEXT_PUBLIC_NAME == 'DEVELOPMENT') {
    isAuthenticated = true;

    useEffect(() => {
      setUserData({ ...userData, id: 30 });
    }, []);
  }

  const router = useRouter();
  const { ideaId } = router.query;
  const [sending, setSending] = useState(false);
  const [unsavedChanges, setunsavedChanges] = useState(false);
  const [getError, setGetError] = useState(false);
  const [Dialog, confirmLeave] = useConfirm(
    ['You have unsaved changes', '', ''],
    'Are you sure you want to discard the changes and leave?',
    ['alternative primary', 'CANCEL', 'LEAVE'],
  );
  const [urrl, setUrrl] = useState('');

  const [UpdateSucceed, confirmSucceed] = useConfirm(
    ['Idea updated successfully', '', ''],
    '',
    ['primary', 'got it'],
  );

  const [UpdateFailure, confirmFailure] = useConfirm(
    ['Unable to update your idea', '', ''],
    'Please try again.',
    ['primary', 'close'],
  );

  const [NotAuthor, confirmNotAuthor] = useConfirm(
    ["This is not your idea.", '', ''],
    '',
    ['primary', 'close'],
  );

  const [ArchivedIdea, confirmArchive] = useConfirm(
    ["This idea has been archived.", '', ''],
    'To workshop on it, you need to reactivate it first.',
    ['primary', 'got it'],
  );

  const [card, setCard] = useState({
    ideaName: '',
    tagline: '',
    description: '',
    targetAudience: '',
    features: '',
    experience: '',
    extraInfo: '',
    involveLevel: '',
    status: '',
  });

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

  useEffect(async () => {
    if (ideaId) {
      const idea = cleanData(await agent.Ideas.getIdea(ideaId, new URLSearchParams("populate=*")));
      if (!idea || !idea.id || idea.id == 0) {
        setGetError(true);
        return;
      }

      if (userData.id !== 0) {
        if (idea.author.id === userData.id) {
          if (response.data?.status == 'archived') {
            rejectAuthor();
          }

          setCard(idea);
        } else {
          rejectUser();
        }
      }
    }
  }, [ideaId, userData.id]);

  const SignupSchema = Yup.object().shape({
    ideaName: Yup.string().trim().required('Idea Name is Required.'),
    description: Yup.string().trim().required('Idea Description is Required.'),
    experience: Yup.string().trim().required('Experience is Required.'),
    features: Yup.string().trim().required('Idea Feature is Required.'),
    involveLevel: Yup.string().required('Level of involvement is Required.'),
  });

  const submitHandler = async (values) => {
    values['ideaName'] = values['ideaName'].trim();
    values['tagline'] = values['tagline'].trim();
    values['description'] = values['description'].trim();
    values['targetAudience'] = values['targetAudience'].trim();
    values['features'] = values['features'].trim();
    values['experience'] = values['experience'].trim();
    values['extraInfo'] = values['extraInfo'].trim();
    setSending(true);

    try {
      const data = cleanData(await agent.Ideas.put(ideaId, values));

      if (data.ideaName) {
        setunsavedChanges(false);
        if (await confirmNotice()){
          setUrrl(`/ideaspace/workshop/${data.id}`);
        }
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
    } else {
      setSending(false);
    }
  }

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

  if (getError) {
    return <Error statusCode={404} title="page Not Found" />
  } else {

    return (
      <>
        <HeadWapper>
          <Headline>Dev Ideas</Headline>
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
            label='Please sign in to edit your idea!'
            redirectURL={process.env.NEXT_PUBLIC_FRONT_END_URL + '/ideaspace/dashboard'}
          />
        ) : (
          <>
            <Dialog />
            <UpdateSucceed /><UpdateFailure />
            <NotAuthor /><ArchivedIdea />
            <IdeaForm
              initialValues={card}
              SignupSchema={SignupSchema}
              submitHandler={submitHandler}
              unsavedHandler={setunsavedChanges}
              formButton="save"
              sending={sending}
              clickHandler={backHandler}
            />
          </>
        )}
      </>
    );
  }
}

export default EditIdea;

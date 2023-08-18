import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { atoms } from '@devlaunchers/components/src/components';
import { agent } from '@devlaunchers/utility';
import { cleanData } from '../../../utils/StrapiHelper';
import SignInSection from '../../common/SignInSection/SignInSection';
import BackButton from '../../common/BackButton/BackButton';
import IdeaForm from '../../common/IdeaForm/IdeaForm';
import useConfirm from '../../common/DialogBox/DialogBox';
import getNotice from '../../common/DialogBox/NoticeBox';
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

    React.useEffect(() => {
      setUserData({ ...userData, id: 30 });
    }, []);
  }

  const router = useRouter();
  const { ideaId } = router.query;
  const [sending, setSending] = React.useState(false);
  const [unsavedChanges, setunsavedChanges] = useState(false);
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

  const [card, setCard] = React.useState({
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

  React.useEffect(async () => {
    if (ideaId) {
      const idea = await agent.Ideas.getIdea(ideaId, new URLSearchParams("populate=*"));

      if(userData.id !== 0){
        if (idea.author.id === userData.id) {
          setCard(idea);
        } else {
          alert("This is not your idea. You can't edit it.");
          window.history.back(-1);
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

    const data = cleanData(await agent.Ideas.put(ideaId, values));

    if (data.ideaName) {
      setunsavedChanges(false);
      if (await confirmNotice()){
        setUrrl(`/ideaspace/workshop/${data.id}`);
      }
    } else {
      // alert('Unable to update your idea.');
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

  React.useEffect(() => {
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
          redirectURL='https://devlaunchers.org/ideaspace/dashboard'
        />
      ) : (
        <>
          <Dialog />
          <Notice />
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

export default EditIdea;

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';

import SignInSection from '../../common/SignInSection/SignInSection';
import BackButton from '../../common/BackButton/BackButton';
import IdeaForm from '../../common/IdeaForm/IdeaForm';
import useConfirm from '../../common/DialogBox/DialogBox';
import getNotice from '../../common/DialogBox/NoticeBox';
import * as Yup from 'yup';
import { atoms } from '@devlaunchers/components/src/components';

import {
  HeadWapper,
} from '../SubmissionForm/StyledSubmissionForm';

function SubmissionForm() {
  let { userData, setUserData, isAuthenticated } = useUserDataContext();
  if (process.env.NEXT_PUBLIC_NAME == 'DEVELOPMENT') {
    isAuthenticated = true;

    React.useEffect(() => {
      setUserData({ ...userData, id: 2 });
    }, []);
  }

  const router = useRouter();
  const { ideaId } = router.query;
  const [sending, setSending] = React.useState(false);
  const [unsavedChanges, setunsavedChanges] = useState(false);
  const [Dialog, confirmLeave] = useConfirm(
    'You have unsaved changes',
    'Are you sure you want to discard the changes and leave?',
  );
  const [urrl, setUrrl] = useState('');

  const [Notice, confirmNotice] = getNotice(
    'Idea updated successfully',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  );

  const [card, setCard] = React.useState({
    ideaName: 'qq',
    tagline: '',
    description: '',
    targetAudience: '',
    features: '',
    experience: '',
    extraInfo: '',
    involveLevel: 'zero',
    hourCommitmentMin: 0,
    hourCommitmentMax: 0,
    difficultyLevel: 'Beginner',
  });

  React.useEffect(() => {
    if (ideaId) {
      axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/${ideaId}`)
        .then(response => {
          if (response.status === 200) {
            if(userData.id !== 0){
              if(response.data.author.id == userData.id){
                setCard(response.data);
              }else{
                alert("This is not your idea. You can't edit it.");
                window.history.back(-1);
              }
            }
          }
        })
    }
  }, [ideaId,userData.id]);

  const SignupSchema = Yup.object().shape({
    ideaName: Yup.string().required('Idea Name is Required.'),
    description: Yup.string().required('Idea Description is Required.'),
    experience: Yup.string().required('Experience is Required.'),
    features: Yup.string().required('Idea Feature is Required.'),
  });

  const submitHandler = async (values) => {
    //e.preventDefault();
    if (values == card) {
      alert("nothing chage");
      return;
    }
    setSending(true);

    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/${ideaId}`,
      values
    );

    if (res.status === 200) {
      setunsavedChanges(false);
      if (await confirmNotice()){
        setUrrl(`/ideaspace/workshop/${res.data.id}`);
      }
    } else {
      alert('Unable to update your idea.');
      setSending(false);
      setunsavedChanges(true);
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
    
    if (unsavedChanges && urrl == '' ) {
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
      if (urrl == 'back'){
        window.history.back(-1);
      }else{
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
        <atoms.Layer hasRainbow style={{ width: '16.8rem', margin: 'auto' }}>
          <atoms.Typography type='h1' style={{ fontSize: '4rem', }}>
          Dev Ideas
          </atoms.Typography>
        </atoms.Layer>
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

export default SubmissionForm;

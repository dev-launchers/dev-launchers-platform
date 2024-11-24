// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
// import { atoms } from '@devlaunchers/components/src/components';
// import { agent } from '@devlaunchers/utility';
// import { cleanData } from '../../../utils/StrapiHelper';
// import SignInSection from '../../common/SignInSection/SignInSection';
// import BackButton from '../../common/BackButton/BackButton';
// import IdeaForm from '../../common/IdeaForm/IdeaForm';
// import useConfirm from '../../common/DialogBox/DialogBox';
// import * as Yup from 'yup';

// import { HeadWapper, Headline, StyledRanbow } from './StyledEditIdea';

// function EditIdea() {
//   let { userData, isAuthenticated } = useUserDataContext();

//   const router = useRouter();
//   const { ideaId } = router.query;
//   const [sending, setSending] = useState(false);
//   const [unsavedChanges, setunsavedChanges] = useState(false);
//   const [getError, setGetError] = useState(false);
//   const [card, setCard] = useState(initialCardData || null); // Use initial data if available
//   const [loading, setLoading] = useState(!initialCardData); // Only load if no initial data
//   const [Dialog, confirmLeave] = useConfirm(
//     ['You have unsaved changes', '', ''],
//     'Are you sure you want to discard the changes and leave?',
//     ['alternative primary', 'CANCEL', 'LEAVE']
//   );
//   const [urrl, setUrrl] = useState('');

//   const [UpdateSucceed, confirmSucceed] = useConfirm(
//     ['Idea updated successfully', '', ''],
//     '',
//     ['primary', 'got it']
//   );

//   const [UpdateFailure, confirmFailure] = useConfirm(
//     ['Unable to update your idea', '', ''],
//     'Please try again.',
//     ['primary', 'close']
//   );

//   const [NotAuthor, confirmNotAuthor] = useConfirm(
//     ['This is not your idea.', '', ''],
//     '',
//     ['primary', 'close']
//   );

//   const [ArchivedIdea, confirmArchive] = useConfirm(
//     ['This idea has been archived.', '', ''],
//     'To workshop on it, you need to reactivate it first.',
//     ['primary', 'got it']
//   );

//   // const [card, setCard] = useState({
//   //   ideaName: '',
//   //   tagline: '',
//   //   description: '',
//   //   targetAudience: '',
//   //   features: '',
//   //   experience: '',
//   //   extraInfo: '',
//   //   involveLevel: '',
//   //   status: '',
//   // });

//   const rejectAuthor = async () => {
//     if (!(await confirmArchive())) {
//       router.push(`/ideaspace/workshop/${ideaId}`);
//     }
//   };

//   const rejectUser = async () => {
//     if (!(await confirmNotAuthor())) {
//       window.history.back(-1);
//     }
//   };

//   useEffect(async () => {
//     if (ideaId) {
//       const idea = cleanData(
//         await agent.Ideas.getIdea(ideaId, new URLSearchParams('populate=*'))
//       );
//       if (!idea || !idea.id || idea.id == 0) {
//         setGetError(true);
//         return;
//       }

//       if (userData.id !== 0) {
//         if (idea.author.data.id === userData.id) {
//           if (idea.status == 'archived') {
//             rejectAuthor();
//           }

//           setCard(idea);
//         } else {
//           rejectUser();
//         }
//       }
//     }
//   }, [ideaId, userData.id]);

//   const SignupSchema = Yup.object().shape({
//     ideaName: Yup.string().trim().required('Idea Name is Required.'),
//     description: Yup.string().trim().required('Idea Description is Required.'),
//     experience: Yup.string().trim().required('Experience is Required.'),
//     features: Yup.string().trim().required('Idea Feature is Required.'),
//     involveLevel: Yup.string().required('Level of involvement is Required.'),
//   });

//   const submitHandler = async (values) => {
//     values['ideaName'] = values['ideaName'].trim();
//     values['tagline'] = values['tagline'].trim();
//     values['description'] = values['description'].trim();
//     values['targetAudience'] = values['targetAudience'].trim();
//     values['features'] = values['features'].trim();
//     values['experience'] = values['experience'].trim();
//     values['extraInfo'] = values['extraInfo'].trim();
//     setSending(true);

//     try {
//       const data = cleanData(await agent.Ideas.put(ideaId, values));

//       if (data.ideaName) {
//         setunsavedChanges(false);
//         if (await confirmNotice()) {
//           setUrrl(`/ideaspace/workshop/${data.id}`);
//         }
//       }
//     } catch (error) {
//       setSending(false);
//       setunsavedChanges(true);
//       confirmFailure();
//     }
//   };

//   const handleDialog = async (url) => {
//     if (await confirmLeave()) {
//       setUrrl(url);
//     } else {
//       setSending(false);
//     }
//   };

//   useEffect(() => {
//     window.onbeforeunload = () => {
//       if (unsavedChanges) {
//         return 'You have unsaved changes. Do you really want to leave?';
//       }
//     };
//     if (unsavedChanges && urrl == '') {
//       const routeChangeStart = (url) => {
//         handleDialog(url);
//         router.events.emit('routeChangeError');
//         throw 'Abort route change. Please ignore this error.';
//       };
//       router.events.on('routeChangeStart', routeChangeStart);
//       return () => {
//         router.events.off('routeChangeStart', routeChangeStart);
//       };
//     } else if (urrl !== '') {
//       if (urrl == 'back') {
//         window.history.back(-1);
//       } else {
//         router.push(urrl);
//       }
//     }
//   }, [unsavedChanges, urrl]);

//   const backHandler = (url) => {
//     if (unsavedChanges) {
//       handleDialog(url);
//     } else {
//       window.history.back(-1);
//     }
//   };

//   if (getError) {
//     return <Error statusCode={404} title="page Not Found" />;
//   } else {
//     return (
//       <>
//         {/* <HeadWapper>
//           <Headline>Dev Ideas</Headline>
//           <StyledRanbow>
//             <atoms.Layer hasRainbowBottom />
//           </StyledRanbow>
//           <BackButton buttonType="confirm" clickHandler={backHandler} />
//           <atoms.Typography type="h4">
//             Have an idea for a development project?
//             <br />
//             Share your idea with us!
//           </atoms.Typography>
//         </HeadWapper> */}

//         {!isAuthenticated ? (
//           <SignInSection
//             label="Please sign in to edit your idea!"
//             redirectURL={
//               process.env.NEXT_PUBLIC_FRONT_END_URL + '/ideaspace/dashboard'
//             }
//           />
//         ) : (
//           <>
//             <Dialog />
//             <UpdateSucceed />
//             <UpdateFailure />
//             <NotAuthor />
//             <ArchivedIdea />
//             <IdeaForm
//               initialValues={card}
//               SignupSchema={SignupSchema}
//               submitHandler={submitHandler}
//               unsavedHandler={setunsavedChanges}
//               formButton="save"
//               sending={sending}
//               clickHandler={backHandler}
//             />
//           </>
//         )}
//       </>
//     );
//   }
// }

// export default EditIdea;
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { agent } from '@devlaunchers/utility';
import { cleanData } from '../../../utils/StrapiHelper';
import IdeaForm from '../../common/IdeaForm/IdeaForm';
import useConfirm from '../../common/DialogBox/DialogBox';
import * as Yup from 'yup';

function EditIdea({ initialCardData }) {
  const { userData, isAuthenticated } = useUserDataContext();
  const router = useRouter();
  const { ideaId } = router.query;

  const [card, setCard] = useState(initialCardData || null);
  const [loading, setLoading] = useState(!initialCardData);
  const [sending, setSending] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [getError, setGetError] = useState(false);

  const [Dialog, confirmLeave] = useConfirm(
    ['You have unsaved changes', '', ''],
    'Are you sure you want to discard the changes and leave?',
    ['alternative primary', 'CANCEL', 'LEAVE']
  );

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

  const SignupSchema = Yup.object().shape({
    ideaName: Yup.string().trim().required('Idea Name is Required.'),
    description: Yup.string().trim().required('Idea Description is Required.'),
    experience: Yup.string().trim().required('Experience is Required.'),
    features: Yup.string().trim().required('Idea Feature is Required.'),
    involveLevel: Yup.string().required('Level of involvement is Required.'),
  });

  useEffect(() => {
    const fetchIdeaData = async () => {
      if (!initialCardData && ideaId) {
        try {
          const idea = cleanData(
            await agent.Ideas.getIdea(ideaId, new URLSearchParams('populate=*'))
          );
          if (idea && idea.id) {
            console.log('Fetched idea data for pre-filling:', idea); // Debug log
            setCard(idea);
          } else {
            setGetError(true);
          }
        } catch (error) {
          setGetError(true);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchIdeaData();
  }, [ideaId, initialCardData]);

  // const submitHandler = async (values) => {
  //   setSending(true);
  //   try {
  //     console.log('Submitting updated values:', values); // Debug log
  //     const updatedIdea = cleanData(await agent.Ideas.put(ideaId, values));
  //     if (updatedIdea.ideaName) {
  //       setUnsavedChanges(false);
  //       await confirmSucceed();
  //       router.push(`/ideaspace/workshop/${updatedIdea.id}`);
  //     }
  //   } catch (error) {
  //     setSending(false);
  //     confirmFailure();
  //   }
  // };

  // const submitHandler = async (values) => {
  //   setSending(true);
  //   try {
  //     console.log('Submitting values:', values); // Debug log
  //     const payload = {
  //       data: { ...values }, // Wrap values inside a "data" object
  //     };
  //     const updatedIdea = await agent.Ideas.put(ideaId, payload);
  //     console.log('Updated idea:', updatedIdea); // Debug log

  //     if (updatedIdea.data) {
  //       setUnsavedChanges(false);
  //       await confirmSucceed();
  //       router.push(`/ideaspace/workshop/${updatedIdea.data.id}`);
  //     }
  //   } catch (error) {
  //     console.error('Failed to update the idea:', error);
  //     setSending(false);
  //     confirmFailure();
  //   }
  // };\

  const submitHandler = async (values) => {
    setSending(true);
    try {
      console.log('Submitting values:', values); // Debug log
      const payload = {
        data: { ...values }, // Wrap values inside a "data" object
      };
      const updatedIdea = await agent.Ideas.put(ideaId, payload);
      console.log('Updated idea:', updatedIdea); // Debug log

      if (updatedIdea.data) {
        setUnsavedChanges(false);

        // Fetch updated data after successful submission
        const refreshedIdea = await agent.Ideas.getIdea(
          ideaId,
          new URLSearchParams('populate=*')
        );
        setCard(refreshedIdea.data);

        await confirmSucceed();

        // Reload the page to reflect the updates (optional)
        router.reload();
      }
    } catch (error) {
      console.error('Failed to update the idea:', error);
      setSending(false);
      confirmFailure();
    }
  };

  if (loading) return <div>Loading...</div>;
  if (getError) return <div>Error loading idea. Please try again later.</div>;

  console.log('Prefilling the form with data:', card); // Debug log

  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <h2>Please sign in to edit your idea!</h2>
        </div>
      ) : (
        <IdeaForm
          initialValues={card}
          SignupSchema={SignupSchema}
          submitHandler={submitHandler}
          unsavedHandler={setUnsavedChanges}
          formButton="Save"
          sending={sending}
        />
      )}
    </div>
  );
}

export default EditIdea;

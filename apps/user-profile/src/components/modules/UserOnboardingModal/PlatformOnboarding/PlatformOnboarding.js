import { useEffect } from 'react';
import Stepper from '../../../common/Stepper';
import PageOne from './PageOne/PageOne';
import PageTwo from './PageTwo/PageTwo';
import PageThree from './PageThree/PageThree';
import PageFour from './PageFour/PageFour';
import PageFive from './PageFive';
// import UserInterestBubble from '../InterestBubble';
import { PlatformOnboardingContainer } from './StyledPlatformOnboarding';
import { useOnboardingDataContext } from './../../../../context/OnboardingDataContext';
import { onboardingActions } from './../../../../state/actions';

export default function PlatformOnboarding() {
  const { dispatch } = useOnboardingDataContext();

  const hideAllModals = () => {
    dispatch({ type: onboardingActions.HIDE_ALL_MODALS });
  }

  // @description 
  // - dataFromBackend is currently sample
  // - dataFromBackend should be retrieved from backend

  // const  dataFromBackend= [
  //   {id:1, name:"Blockchain"}, {id:2, name:"Javascript"}, {id:3, name:"Web Design"}, 
  //   {id:4, name:"UI/UX"}, {id:5, name:"React"}, {id:6, name:"QA"}, {id:7, name:"Web Development"}, 
  //   {id:8, name:"C/C++/C#"}, {id:9, name:"Discord"}, {id:10, name:"Node.js"}, {id:11, name:"Strapi"}, 
  //   {id:12, name:"Agile Development"}, {id:13, name:"HTML"}, {id:14, name:"Git"}, {id:15, name:"Frontend Development"}, 
  //   {id:16, name:"Python"}, {id:17, name:"Data Structures"}, {id:18, name:"Prototyping"}, {id:19, name:"Project Management"}
  // ]    

  const stepperConfig = [
    {
      component: <p> Skip </p>,
      skip: true,
      config: {
        stepName: 'Profile',
        stepNumber: 1,
        buttons: {
          next: {
            label: 'Next',
          },
          back: {
            label: 'Back',
          },
        },
      },
    },
    {
      component: <PageTwo />,
      config: {
        stepName: 'DevLaunchers',
        stepNumber: 2,
        buttons: {
          next: {
            label: 'Next',
          },
          back: {
            label: 'Back',
            hide: true,
          },
        },
      },
    },
    {
      component: <PageThree />,
      config: {
        stepName: 'About you',
        barSize: 's',
        stepNumber: 3,
        buttons: {
          next: {
            label: 'Next',
          },
          back: {
            label: 'Back',
          },
        },
      },
    },
    {
      component: <PageFour />,
      config: {
        barSize: 's',
        hideStepNumber: true,
        buttons: {
          next: {
            label: 'Next',
          },
          back: {
            label: 'Back',
          },
        },
      },
    },
    {

      component: <PageFive/>,
      // component: <UserInterestBubble interests={dataFromBackend}/>,
      config: {
        barSize: 's',
        hideStepNumber: true,
        buttons: {
          next: {
            label: 'Next',
          },
          back: {
            label: 'Back',
          },
        },
      },
    },
    {
      component: <p className='quickfix' >Congratulations</p>,
      config: {
        stepName: 'Done',
        hideBar: true,
        stepNumber: 4,
        buttons: {
          next: {
            label: 'Finished',
            hideIcons: true,
            onClick: hideAllModals,
          },
          back: {
            label: 'Back',
          },
        },
      },
    },
  ];

  return (
    <PlatformOnboardingContainer>
      <Stepper steps={stepperConfig} startIndex={1} />
    </PlatformOnboardingContainer>
  );
}
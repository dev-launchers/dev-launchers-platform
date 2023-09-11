import { useEffect } from 'react';
import Stepper from '../../../common/Stepper';
import PageOne from './PageOne/PageOne';
import PageTwo from './PageTwo/PageTwo';
import PageThree from './PageThree/PageThree';
import PageFour from './PageFour/PageFour';
import { PlatformOnboardingContainer } from './StyledPlatformOnboarding';
import { useOnboardingDataContext } from './../../../../context/OnboardingDataContext';
import { onboardingActions } from './../../../../state/actions';

export default function PlatformOnboarding() {
  const { dispatch } = useOnboardingDataContext();

  const back = () => {
    dispatch({ type: onboardingActions.SHOW_INTRODUCTION_MODAL });
  }

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
            useDefaultOnClick: true,
            onClick: () => {
              console.log('..some function ');
            },
          },
          back: {
            label: 'Back',
            useDefaultOnClick: false,
            onClick: back,
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
            useDefaultOnClick: true,
            onClick: () => {
              console.log('..some function ');
            },
          },
          back: {
            label: 'Back',
            hide: true,
            useDefaultOnClick: false,
            onClick: back,
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
            useDefaultOnClick: true,
            onClick: () => {
              console.log('..some function ');
            },
          },
          back: {
            label: 'Back',
            useDefaultOnClick: true,
            onClick: () => {
              console.log('..some function ');
            },
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
            useDefaultOnClick: true,
            onClick: () => {
              console.log('..some function ');
            },
          },
          back: {
            label: 'Back',
            useDefaultOnClick: true,
            // useDefaultHide: true,
            onClick: () => {
              console.log('..some function ');
            },
          },
        },
      },
    },
    {
      component: <p> Interest </p>,
      config: {
        barSize: 's',
        hideStepNumber: true,
        buttons: {
          next: {
            label: 'Next',
            useDefaultOnClick: true,
            onClick: () => {
              console.log('..some function ');
            },
          },
          back: {
            label: 'Back',
            useDefaultOnClick: true,
            // useDefaultHide: true,
            onClick: () => {
              console.log('..some function ');
            },
          },
        },
      },
    },
    {
      component: <p>Congratulations</p>,
      config: {
        stepName: 'Done',
        hideBar: true,
        stepNumber: 4,
        buttons: {
          next: {
            label: 'Finished',
            hideIcons: true,
            useDefaultOnClick: true,
            onClick: () => {
              console.log('..some function ');
            },
          },
          back: {
            label: 'Back',
            useDefaultOnClick: true,
            // useDefaultHide: true,
            onClick: () => {
              console.log('..some function ');
            },
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
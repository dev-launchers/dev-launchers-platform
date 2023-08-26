import { useEffect } from 'react';
import Stepper from '../../../common/Stepper';
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
      component: <PageTwo />,
      config: {
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
      component: <PageThree />,
      config: {
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
        buttons: {
          next: {
            label: 'Finish',
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
  ];

  return (
    <PlatformOnboardingContainer>
      <Stepper steps={stepperConfig} />
    </PlatformOnboardingContainer>
  );
}
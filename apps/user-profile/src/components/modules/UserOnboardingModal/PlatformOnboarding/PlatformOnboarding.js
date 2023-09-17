import { useEffect } from 'react';
import Stepper from '../../../common/Stepper';
import CongratulationsPage from './CongratulationsPage/CongratulationsPage';
import PageTwo from './PageTwo/PageTwo';
import PageThree from './PageThree/PageThree';
import PageFour from './PageFour/PageFour';
import { PlatformOnboardingContainer } from './StyledPlatformOnboarding';
import { useOnboardingDataContext } from './../../../../context/OnboardingDataContext';
import { onboardingActions } from './../../../../state/actions';

export default function PlatformOnboarding() {
  const { dispatch } = useOnboardingDataContext();

  const hideAllModals = () => {
    dispatch({ type: onboardingActions.HIDE_ALL_MODALS });
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
      component: <p> Interest </p>,
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
      component: <p>Congratulations</p>,
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
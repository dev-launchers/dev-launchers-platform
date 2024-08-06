import axios from 'axios';
import Stepper from '../Stepper';
import Loader from './../../../../common/Loader';
import PageTwo from './PageTwo/PageTwo';
import PageThree from './PageThree/PageThree';
import PageFour from './PageFour/PageFour';
import PageFive from './PageFive';
import PageSix from './PageSix/PageSix';
import { PlatformOnboardingContainer } from './StyledPlatformOnboarding';
import { useOnboardingDataContext } from './../../../../../context/OnboardingDataContext';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { onboardingActions } from './../../../../../state/actions';
import { featureFlags } from './../../../../../utils/featureFlags';
import { useState } from 'react';

export default function PlatformOnboarding() {
  const { userData } = useUserDataContext();
  const { dispatch } = useOnboardingDataContext();

  const finishOnboarding = ({ onboardingData, dispatch }) => {
    const userId = userData?.profile?.user?.id;

    const requestBody = {
      completedOnboarding: true,
      interests: [],
      experience: onboardingData.user?.selectedExperience,
      job: onboardingData.user?.selectedRole,
    };

    onboardingData.user?.interest?.forEach((interest) => {
      interest.selected && requestBody.interests.push({ id: interest.id });
    });

    userId &&
      axios
        .put(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${userId}/`,
          requestBody,
          { withCredentials: true }
        )
        .then(() => {
          console.log('Onboarding completed successfullyy');
          dispatch({ type: onboardingActions.HIDE_ALL_ONBOARDING_MODALS });
        })
        .catch((error) => {
          console.log(
            'Error uploading onboarding data: ',
            requestBody,
            ' error: ',
            error
          );
          alert(
            'Having issues saving your changes, please can you try again later'
          );
          dispatch({ type: onboardingActions.HIDE_ALL_ONBOARDING_MODALS });
        });
  };

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
            disabled: false,
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
            disabled: true,
            delayEnable: 5000,
            disableOnce: true,
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
            disabled: false,
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
            disabled: false,
          },
          back: {
            label: 'Back',
          },
        },
      },
    },
    {
      component: <PageFive />,
      config: {
        barSize: 's',
        hideStepNumber: true,
        buttons: {
          next: {
            label: 'Next',
            disabled: false,
          },
          back: {
            label: 'Back',
          },
        },
      },
    },
    {
      component: <PageSix />,
      config: {
        hideBar: true,
        stepName: 'Done',
        stepNumber: 4,
        buttons: {
          next: {
            label: 'Finished',
            hideIcons: true,
            onClick: finishOnboarding,
            disabled: false,
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
      <Stepper
        className="platform-onboarding-stepper"
        steps={stepperConfig}
        startIndex={0}
        context={useOnboardingDataContext}
      />
    </PlatformOnboardingContainer>
  );
}

import axios from 'axios';
import Stepper from '../Stepper';
import PageTwo from './PageTwo/PageTwo';
import PageThree from './PageThree/PageThree';
import PageFour from './PageFour/PageFour';
import PageFive from './PageFive';
import PageSix from './PageSix/PageSix';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';

export default function PlatformOnboarding() {
  const { userData } = useUserDataContext();

  const submitOnboardingData = (onboardingData, dispatch) => {
    return new Promise((resolve, reject) => {
      const userId = userData?.profile?.user?.id;

      const requestBody = {
        completedOnboarding: true,
        interests: [],
        experience: onboardingData?.user?.selectedExperience,
        job: onboardingData?.user?.selectedRole,
      };

      onboardingData?.user?.interest?.forEach((interest) => {
        interest?.selected && requestBody?.interests.push({ id: interest?.id });
      });

      if (userId) {
        axios
          .put(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${userId}/`,
            requestBody,
            { withCredentials: true }
          )
          .then(() => {
            resolve();
          })
          .catch((error) => {
            console.error(
              'Error uploading onboarding data: ',
              requestBody,
              ' error: ',
              error
            );
            reject(
              'Having issues saving your changes, please can you try again later'
            );
          });
      } else {
        console.error('Error uploading onboarding data: User Id not found');
        reject(
          'Having issues saving your changes, please can you try again later'
        );
      }
    });
  };

  const profileStep = {
    skip: true,
    header: {
      name: 'Profile',
      number: 1,
    },
    buttons: {
      next: {
        label: 'Next',
      },
      back: {
        label: 'Back',
      },
    },
  };

  const introductionStep = {
    component: <PageTwo />,
    header: {
      name: 'DevLaunchers',
      number: 2,
    },
    buttons: {
      next: {
        label: 'Next',
      },
      back: {
        label: 'Back',
        hide: true,
      },
    },
  };

  const aboutYouStep = {
    component: <PageThree />,
    header: {
      name: 'About you',
      number: 3,
      barSize: 's',
    },
    buttons: {
      next: {
        label: 'Next',
      },
      back: {
        label: 'Back',
      },
    },
  };

  const roleStep = {
    component: <PageFour />,
    header: {
      barSize: 's',
      hideNumber: true,
    },
    buttons: {
      next: {
        label: 'Next',
      },
      back: {
        label: 'Back',
      },
    },
  };

  const interestStep = {
    component: <PageFive />,
    header: {
      barSize: 's',
      hideNumber: true,
    },
    buttons: {
      next: {
        label: 'Next',
      },
      back: {
        label: 'Back',
      },
    },
  };

  const congratulationStep = {
    component: <PageSix />,
    header: {
      name: 'Done',
      number: 4,
      barSize: 's',
    },
    buttons: {
      submit: {
        label: 'End',
        hideIcons: true,
        onClick: submitOnboardingData,
      },
      back: {
        label: 'Back',
      },
    },
  };

  const stepperConfig = [
    profileStep,
    introductionStep,
    aboutYouStep,
    roleStep,
    interestStep,
    congratulationStep,
  ];

  return <Stepper steps={stepperConfig} startingIndex={0} />;
}

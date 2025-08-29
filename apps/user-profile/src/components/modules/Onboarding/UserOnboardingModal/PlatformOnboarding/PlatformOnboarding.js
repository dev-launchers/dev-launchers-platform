import axios from 'axios';
import Stepper from '../Stepper';
// TODO: give these pages more descriptive names
import PageTwo from './PageTwo/PageTwo'; // PageTwo -> IntroPage
import PageThree from './PageThree/PageThree'; // PageThree -> AboutYouPage
import PageFour from './PageFour/PageFour'; // PageFour -> RolePage
import InterestsPage from './InterestsPage/InterestsPage'; // PageFive -> InterestsPage
import SkillsPage from './SkillsPage/SkillsPage'; // PageSix -> SkillsPage
import PageSeven from './PageSeven/PageSeven'; // PageSeven -> CongratsPage
// import IntroPage from './IntroPage/IntroPage';
// import AboutYouPage from './AboutYouPage/AboutYouPage';
// import RolePage from './RolePage/RolePage';
// import InterestsPage from './InterestsPage/InterestsPage';
// import SkillsPage from './SkillsPage/SkillsPage';
// import CongratsPage from './CongratsPage/CongratsPage';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';

/**
 * PlatformOnboarding Component
 *
 * This component manages the onboarding process for the platform. It uses the `Stepper` component
 * to navigate through multiple onboarding steps and submits the data to the backend upon completion.
 *
 * @return {JSX.Element} The rendered PlatformOnboarding component with steps.
 */
export default function PlatformOnboarding() {
  const { userData } = useUserDataContext(); // Access user data from context

  /**
   * Submits onboarding data to the backend.
   *
   * @param {Object} onboardingData - The onboarding data collected from the steps.
   * @param {Function} dispatch - Dispatch function for managing onboarding state.
   * @return {Promise} A promise that resolves when the data is successfully submitted or rejects on error.
   */
  const submitOnboardingData = (onboardingData, dispatch) => {
    return new Promise((resolve, reject) => {
      const userId = userData?.profile?.user?.id; // Get the user ID from the profile

      // Prepare the request payload
      const requestBody = {
        completedOnboarding: true,
        interests: [],
        experience: onboardingData?.user?.selectedExperience,
        job: onboardingData?.user?.selectedRole,
      };

      // Add selected interests to the payload
      onboardingData?.user?.interest?.forEach((interest) => {
        interest?.selected && requestBody?.interests.push({ id: interest?.id });
      });

      // Submit the data if user ID is available
      if (userId) {
        axios
          .put(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${userId}/`, // API endpoint
            requestBody,
            { withCredentials: true } // Include credentials for authentication
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

  // Step configurations for the onboarding stepper
  const profileStep = {
    skip: true, // Skip this step
    header: {
      name: 'Profile',
      number: 1,
    },
    buttons: {
      next: { label: 'Next' },
      back: { label: 'Back' },
    },
  };

  const introductionStep = {
    component: <PageTwo />, // Render PageTwo for this step
    header: {
      name: 'DevLaunchers',
      number: 2,
    },
    buttons: {
      next: { label: 'Next' },
      back: { label: 'Back', hide: true }, // Hide the back button
    },
  };

  const aboutYouStep = {
    component: <PageThree />,
    header: {
      name: 'About you',
      number: 3,
      barSize: 's', // Small progress bar
    },
    buttons: {
      next: { label: 'Next' },
      back: { label: 'Back' },
    },
  };

  const roleStep = {
    component: <PageFour />,
    header: {
      barSize: 's',
      hideNumber: true, // Hide the step number
    },
    buttons: {
      next: { label: 'Next' },
      back: { label: 'Back' },
    },
  };

  const interestStep = {
    component: <InterestsPage />,
    header: {
      barSize: 's',
      hideNumber: true,
    },
    buttons: {
      next: { label: 'Next' },
      back: { label: 'Back' },
    },
  };

  const skillStep = {
    component: <SkillsPage />,
    header: {
      barSize: 's',
      hideNumber: true,
    },
    buttons: {
      next: { label: 'Next' },
      back: { label: 'Back' },
    },
  };

  const congratulationStep = {
    component: <PageSeven />,
    header: {
      name: 'Done',
      number: 4,
      barSize: 's',
    },
    buttons: {
      submit: {
        label: 'Finish', // Final button label
        hideIcons: true, // Hide icons for this button
        onClick: submitOnboardingData, // Action to submit onboarding data
      },
      back: { label: 'Back' },
    },
  };

  // Combine all steps into a single stepper configuration
  const stepperConfig = [
    profileStep,
    introductionStep,
    aboutYouStep,
    roleStep,
    interestStep,
    skillStep,
    congratulationStep,
  ];

  // Render the Stepper with the configuration
  return <Stepper steps={stepperConfig} startingIndex={0} />;
}

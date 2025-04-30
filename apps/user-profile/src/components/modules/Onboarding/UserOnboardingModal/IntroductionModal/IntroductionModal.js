import { useOnboardingDataContext } from './../../../../../context/OnboardingDataContext';
import { onboardingActions } from './../../../../../state/actions';
import { Typography } from '@devlaunchers/components/components/atoms';
import Button from '@devlaunchers/components/components/atoms/Button';
import RainbowBar from './../../../../common/RainbowBar/RainbowBar';
import Modal from './../../../../common/Modal';

/**
 * IntroductionModal Component
 *
 * This component displays a welcoming modal for the user onboarding process.
 * It provides two actions:
 * - "Get Started": Proceeds with onboarding and opens the platform onboarding modal.
 * - "Set Up Later": Exits the onboarding process and hides all modals.
 *
 * @return {JSX.Element} The rendered IntroductionModal UI.
 */
export default function IntroductionModal() {
  // Access onboarding data and dispatch from context
  const { onboardingData, dispatch } = useOnboardingDataContext();

  /**
   * Handles the "Get Started" action.
   * Dispatches an action to show the platform onboarding modal.
   */
  const onGetStarted = () => {
    dispatch({ type: onboardingActions.SHOW_PLATFORM_ONBOARDING_MODAL });
  };

  /**
   * Handles the "Set Up Later" action.
   * Dispatches an action to hide all onboarding modals.
   */
  const onSetUpLater = () => {
    dispatch({ type: onboardingActions.HIDE_ALL_ONBOARDING_MODALS });
  };

  return (
    <Modal
      isOpen={onboardingData.showIntroductionModal} // Modal visibility state
      width="488px" // Modal width
      maxHeight="496px" // Maximum modal height
    >
      {/* Modal content container */}
      <div className="flex flex-col gap-10 h-full py-12 px-16">
        {/* Welcome header with rainbow bar */}
        <div>
          <Typography type="h3">Welcome to Dev Launchers</Typography>
          <RainbowBar height="6px" />
        </div>

        {/* Informative text about the onboarding process */}
        <div className="flex flex-col gap-3">
          <Typography type="p">
            We'll introduce you to Dev Launchers and set up your profile for
            team collaboration.
          </Typography>
          <Typography type="p">
            Rest assured, we'll guide you through each step of the process.
          </Typography>
        </div>

        {/* Action buttons for onboarding */}
        <div className="flex flex-col gap-4">
          {/* "Get Started" button */}
          <Button buttonType="primary" buttonSize="xl" onClick={onGetStarted}>
            GET STARTED (TAKES 2-5 MINUTES)
          </Button>
          {/* "Set Up Later" button */}
          <Button
            buttonType="alternative"
            buttonSize="xl"
            onClick={onSetUpLater}
          >
            SET UP LATER
          </Button>
        </div>
      </div>
    </Modal>
  );
}

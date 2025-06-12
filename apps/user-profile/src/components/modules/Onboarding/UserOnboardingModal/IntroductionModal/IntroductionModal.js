import { useOnboardingDataContext } from './../../../../../context/OnboardingDataContext';
import { onboardingActions } from './../../../../../state/actions';
import { Typography } from '@devlaunchers/components/components/atoms';
import Button from '@devlaunchers/components/components/atoms/Button';
import RainbowBar from './../../../../common/RainbowBar/RainbowBar';
import Modal from './../../../../common/Modal';

/**
 * @description This is custom modal for the user onboarding.
 */
export default function IntroductionModal() {
  const { onboardingData, dispatch } = useOnboardingDataContext();

  const onGetStarted = () => {
    dispatch({ type: onboardingActions.SHOW_PLATFORM_ONBOARDING_MODAL });
  };
  const onSetUpLater = () => {
    dispatch({ type: onboardingActions.HIDE_ALL_ONBOARDING_MODALS });
  };

  return (
    <Modal
      isOpen={onboardingData.showIntroductionModal}
      width="488px"
      maxHeight="496px"
    >
      <div className="flex flex-col gap-10 h-full py-12 px-16">
        <div>
          <Typography variant="primary">Welcome to Dev Launchers</Typography>
          <RainbowBar height="6px" />
        </div>
        <div className="flex flex-col gap-3">
          <Typography variant="secondary">
            We'll introduce you to Dev Launchers and set up your profile for
            team collaboration.
          </Typography>
          <Typography variant="secondary">
            Rest assured, we'll guide you through each step of the process.
          </Typography>
        </div>
        <div className="flex flex-col gap-4">
          <Button
            type="primary"
            size="large"
            color="nebula"
            onClick={onGetStarted}
          >
            Get Started (Takes 2-5 Minutes)
          </Button>
          <Button
            type="secondary"
            color="nebula"
            size="large"
            onClick={onSetUpLater}
          >
            Set Up Later
          </Button>
        </div>
      </div>
    </Modal>
  );
}

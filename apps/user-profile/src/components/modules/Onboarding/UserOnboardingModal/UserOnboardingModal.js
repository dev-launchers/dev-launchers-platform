import { useOnboardingDataContext } from '../../../../context/OnboardingDataContext';
import PlatformOnboarding from './PlatformOnboarding/PlatformOnboarding';
import IntroductionModal from './IntroductionModal/IntroductionModal';
import CloseModal from './CloseModal/CloseModal';
import Modal from '../../../common/Modal';

/**
 * @description This is custom modal for the user onboarding.
 */
export default function UserOnboardingModal() {
  const { onboardingData } = useOnboardingDataContext();

  const modal = () => {
    if (onboardingData.showIntroductionModal) {
      return <IntroductionModal />;
    } else if (onboardingData.showPlatformOnboardingModal) {
      return <PlatformOnboarding />;
    } else {
      return null;
    }
  };

  return (
    <>
      {modal()}
      {onboardingData.showCloseModal && <CloseModal />}
    </>
  );
}

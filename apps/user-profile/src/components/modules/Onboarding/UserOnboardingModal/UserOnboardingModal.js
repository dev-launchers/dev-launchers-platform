import { useState, useEffect } from 'react';
import PlatformOnboarding from './PlatformOnboarding/PlatformOnboarding';
import {
  ModalContainer,
  userUnboardingModalStyle,
} from './StyledUserOnboardingModal';
import {
  UseOnboardingData,
  useOnboardingDataContext,
} from '../../../../context/OnboardingDataContext';
import { onboardingActions } from '../../../../state/actions/onboardingActions';
import IntroductionModal from './IntroductionModal/IntroductionModal';
import CloseModal from './CloseModal/CloseModal';

import Modal from '../../../common/Modal';

/**
 * @description This is custom modal for the user onboarding.
 */
export default function UserOnboardingModal() {
  const { onboardingData, dispatch } = useOnboardingDataContext();

  const showModal =
    onboardingData.showIntroductionModal ||
    onboardingData.showPlatformOnboardingModal;

  const modalPage = () => {
    if (onboardingData.showIntroductionModal) {
      return <IntroductionModal />;
    } else if (onboardingData.showPlatformOnboardingModal) {
      return <PlatformOnboarding />;
    } else {
      return null;
    }
  };

  return showModal ? (
    <Modal isOpen={true}>
      {modalPage()}
      {onboardingData.showCloseModal && <CloseModal />}
    </Modal>
  ) : null;
}

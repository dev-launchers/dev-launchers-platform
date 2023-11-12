import { useState, useEffect } from "react";
import Modal from "react-modal";
import PlatformOnboarding from "./PlatformOnboarding/PlatformOnboarding";
import { ModalContainer, userUnboardingModalStyle } from "./StyledUserOnboardingModal";
import { useOnboardingDataContext } from './../../../context/OnboardingDataContext';
import IntroductionModal from "./IntroductionModal/IntroductionModal";
import { onboardingActions } from './../../../state/actions';

Modal.setAppElement("#__next");

export default function UserOnboardingModal() {
    const { onboardingData: { showIntroductionModal, showPlatformOnboardingModal }, dispatch } = useOnboardingDataContext();

    useEffect(() => {
        const onboardingCompleted = localStorage.getItem('onboardingCompleted');
        if (onboardingCompleted === 'true') {
            dispatch({ type: onboardingActions.HIDE_ALL_MODALS });
        }
    }, [dispatch]);

    

    const closeModal = () => {
        dispatch({ type: onboardingActions.HIDE_ALL_MODALS });
    }

    const showModals = () => {
        if (showIntroductionModal) {
            return <IntroductionModal />;
        } else if (showPlatformOnboardingModal) {
            return <PlatformOnboarding />;
        } else {
            return null;
        }
    }
    
    return (
        <>
            <Modal
                isOpen={showIntroductionModal || showPlatformOnboardingModal}
                onRequestClose={closeModal}
                style={userUnboardingModalStyle}
                contentLabel="User Onboarding"
            >
                <ModalContainer>
                    {showModals()}
                </ModalContainer>
            </Modal>
        </>
    );
}

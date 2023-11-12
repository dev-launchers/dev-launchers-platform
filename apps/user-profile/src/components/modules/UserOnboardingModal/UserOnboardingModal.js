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
        // Check if the onboarding has already been completed
        const onboardingCompleted = localStorage.getItem('onboardingCompleted');
        if (onboardingCompleted === 'true') {
            // Update the context to reflect that the onboarding modals should not be shown
            dispatch({ type: onboardingActions.HIDE_ALL_MODALS });
        }
    }, [dispatch]);

    // You no longer need this state since the display logic should be driven by the context
    // const [modalIsOpen, setModalIsOpen] = useState(showIntroductionModal || showPlatformOnboardingModal);

    const closeModal = () => {
        // When closing the modal, ensure to update the context as well
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

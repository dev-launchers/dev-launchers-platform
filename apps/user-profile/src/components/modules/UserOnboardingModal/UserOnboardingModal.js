import { useState, useEffect } from "react";
import Modal from "react-modal";
import PlatformOnboarding from "./PlatformOnboarding/PlatformOnboarding";
import { ModalContainer, userUnboardingModalStyle } from "./StyledUserOnboardingModal";
import CongratulationsPage from "./PlatformOnboarding/CongratulationsPage/index.js";
import { ModalContainer, userUnboardingModalStyle, ModalHeader, ModalBody } from "./StyledUserOnboardingModal";
import { useOnboardingDataContext } from './../../../context/OnboardingDataContext';
import IntroductionModal from "./IntroductionModal/IntroductionModal";
Modal.setAppElement("#__next");

/**
 * @description This is custom modal for the user onboarding. 
 */
export default function UserOnboardingModal() {
    const { onboardingData: { showIntroductionModal, showPlatformOnboardingModal }, dispatch } = useOnboardingDataContext();
    const [modalIsOpen, setModalIsOpen] = useState(showIntroductionModal || showPlatformOnboardingModal);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
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
            {/* "modalIsOpen ? true : false" set this way until we start adding typescript for 
         boolean type */}
            <Modal
                isOpen={showIntroductionModal || showPlatformOnboardingModal}
                onRequestOpen={openModal}
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
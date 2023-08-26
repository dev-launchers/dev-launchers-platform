import { useState, useEffect } from "react";
import Modal from "react-modal";
import OnboardingCard from "./OnboardingCard/OnboardingCard.js";
import PlatformOnboarding from "./PlatformOnboarding/PlatformOnboarding";
import PageOne from "./PlatformOnboarding/PageOne";
import Typography from "@devlaunchers/components/components/atoms/Typography";
import LogoMonogram from '../../../images/logo-monogram.png'
import { ModalContainer, userUnboardingModalStyle, ModalHeader, ModalBody } from "./StyledUserOnboardingModal";
import { useOnboardingDataContext } from './../../../context/OnboardingDataContext';

Modal.setAppElement("#__next");

/**
 * @description This is custom modal for the user onboarding. 
 */
export default function UserOnboardingModal({ isOpen }) {
    const { onboardingData: { showIntroductionModal, showPlatformOnboardingModal }, dispatch } = useOnboardingDataContext();
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const openModal = () => {
        setModalIsOpen(true);
    }

    // const afterOpenModal = () => {
    //     // references are now sync'd and can be accessed.
    // }
    const closeModal = () => {
        setModalIsOpen(false);
    }
    return (
        <>
            {/* "modalIsOpen ? true : false" set this way until we start adding typescript for 
         boolean type */}
            <Modal
                isOpen={modalIsOpen ? true : false}
                onRequestOpen={openModal}
                onRequestClose={closeModal}
                style={userUnboardingModalStyle}
                contentLabel="User Onboarding"
            >
                <ModalContainer>
                    {showPlatformOnboardingModal && <PlatformOnboarding />}
                </ModalContainer>
            </Modal>
        </>
    );
}
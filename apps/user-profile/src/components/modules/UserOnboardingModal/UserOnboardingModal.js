import { useState, useEffect } from "react";
import Modal from "react-modal";
import LogoMonogram from '../../../images/logo-monogram.png'


import PlatformOnboarding from "./PlatformOnboarding/PlatformOnboarding";
import Typography from "@devlaunchers/components/components/atoms/Typography";
import { ModalContainer, userUnboardingModalStyle, ModalHeader, ModalBody } from "./StyledUserOnboardingModal";

Modal.setAppElement("#__next");

/**
 * @description This is custom modal for the user onboarding. 
 */
export default function UserOnboardingModal({ isOpen }) {
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
                    <ModalHeader>
                        <img height="33.6px" src={LogoMonogram} alt="dev-launchers" />
                        <Typography type="h4">Dev Launchers</Typography>
                    </ModalHeader>
                    <ModalBody>
                        <Typography type="h2">Get Started with Devlaunchers</Typography>
                        <Typography type="p">Please complete the following onboarding tasks</Typography>
                        {/* Onboarding Card Component */}
                    </ModalBody>
                </ModalContainer>
            </Modal>
        </>
    );
}
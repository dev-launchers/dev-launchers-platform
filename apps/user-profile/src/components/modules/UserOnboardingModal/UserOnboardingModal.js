import { useState, useEffect } from "react";
import Modal from "react-modal";
import OnboardingCard from "./OnboardingCard/OnboardingCard.js";
import LogoMonogram from '../../../images/logo-monogram.png'
import PlatformOnboarding from "./PlatformOnboarding/PlatformOnboarding";
import Typography from "@devlaunchers/components/components/atoms/Typography";
import LogoMonogram from '../../../images/logo-monogram.png'
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
                <ModalHeader><Typography type="h4"> Modal Title</Typography></ModalHeader>
                <ModalBody>
                <Typography type="p"> body</Typography>                    
                {/* Onboarding Card Component */}
                {/* passing a prop to decide show checked or unchecked 
                    @iconImg: Login
                             Onboarding
                             Zenhub
                             Discord
                        type: string
                    @title same with figma
                    @subtitle same with figma
                    checked: true or false based on the user
                */}
                <OnboardingCard 
                    iconImg={"Onboarding"} 
                    // Platform Onboarding
                    // Dev Launchers Platform Tour
                    // Create Devlanchers Login
                    // All set. Now let’s get started with the rest!
                    // Sign up on Zenhub and github
                    // Connect your account on these platforms
                    // Sign up on discord
                    // Create an account to communicate with your team
                    title={"Sign up on discord"} 
                    subtitle={"Create an account to communicate with your team"} 
                    completed={true}
                />
                </ModalBody>
            </ModalContainer>
        </Modal>
        </>
    );
}
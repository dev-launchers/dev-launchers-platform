import {useState, useEffect} from "react";
import Modal from "react-modal";

import PlatformOnboarding from "./PlatformOnboarding/PlatformOnboarding";
import Typography from "@devlaunchers/components/components/atoms/Typography";
import { ModalContainer, userUnboardingModalStyle, ModalHeader, ModalBody } from "./StyledUserOnboardingModal";

Modal.setAppElement("#__next");

/**
 * @description This is custom modal for the user onboarding. 
 */
export default function UserOnboardingModal({isOpen}) {
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
                </ModalBody>
            </ModalContainer>
        </Modal>
        </>
    );
}
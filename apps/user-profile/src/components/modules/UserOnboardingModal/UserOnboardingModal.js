import { useState, useEffect } from "react";
import Modal from "react-modal";
import OnboardingCard from "./OnboardingCard/OnboardingCard.js";
import PlatformOnboarding from "./PlatformOnboarding/PlatformOnboarding";
import Typography from "@devlaunchers/components/components/atoms/Typography";
import { ModalContainer, userUnboardingModalStyle, ModalHeader, ModalBody, ModalBodyGrid } from "./StyledUserOnboardingModal";
import LogoMonogram from '../../../images/logo-monogram.png'
import OnboardingProgressBar from "../../common/ProgressBar/ProgressBar.js";

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
                        <ModalBodyGrid>
                            <div className="text">
                                <Typography type="h2">Get Started with Devlaunchers</Typography>
                                <Typography type="p">Please complete the following onboarding tasks</Typography>
                            </div>

                            <div className="completed">
                                <Typography type="h2">{progressComplete.length}/{progress.length}</Typography>
                            </div>

                            <div className="progress-bar">
                                <OnboardingProgressBar />
                            </div>
                        </ModalBodyGrid>
                        {/* Onboarding Card Component */}

                        {/*<PlatformOnboarding/> (stepper) */}

                        <OnboardingCard
                            iconImg={"Login"}
                            title={"Create Devlanchers Login"}
                            subtitle={"All set. Now let’s get started with the rest!"}
                            completed={false}
                        />

                    </ModalBody>
                </ModalContainer>
            </Modal>
        </>
    );
}

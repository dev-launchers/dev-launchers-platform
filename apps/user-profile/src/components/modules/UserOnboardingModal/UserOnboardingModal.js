import { useState, useEffect } from "react";
import Modal from "react-modal";
import OnboardingCard from "./OnboardingCard/OnboardingCard.js";
import RoleCard from "./RoleCard/RoleCard.js";
import PlatformOnboarding from "./PlatformOnboarding/PlatformOnboarding";
import ProgressStepper from "../../common/ProgressStepper";
import { useStepper } from "../../../context/ProgressStepperContext.js";
import Typography from "@devlaunchers/components/components/atoms/Typography";
import LogoMonogram from '../../../images/logo-monogram.png'
import { ModalContainer, userUnboardingModalStyle, ModalHeader, ModalBody, StepBody, Button } from "./StyledUserOnboardingModal";

Modal.setAppElement("#__next");

/**
 * @description This is custom modal for the user onboarding. 
 */
export default function UserOnboardingModal({ isOpen }) {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const { incrementCurrentStep, decrementCurrentStep } = useStepper();

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
            <div className="container">
                <ProgressStepper>
                    <ProgressStepper.Steps>
                        <ProgressStepper.Step id="first" name="Profile">
                            <StepBody>
                                <div>
                                    <Button onClick={incrementCurrentStep}>Next step</Button>
                                </div>
                            </StepBody>
                        </ProgressStepper.Step>
                        <ProgressStepper.Step id="second" name="DevLaunchers">
                            <StepBody>
                                <div>
                                    <Button onClick={decrementCurrentStep}>Previous step</Button>
                                    <Button onClick={incrementCurrentStep}>Next step</Button>
                                </div>
                            </StepBody>
                        </ProgressStepper.Step>
                        <ProgressStepper.Step id="third" name="About you">
                            <StepBody>
                                <div>
                                    <Button onClick={decrementCurrentStep}>Previous step</Button>
                                    <Button onClick={incrementCurrentStep}>Next step</Button>
                                </div>
                            </StepBody>
                        </ProgressStepper.Step>
                        <ProgressStepper.Step id="forth" name="Done">
                            <StepBody>
                                <div>
                                    <Button onClick={decrementCurrentStep}>Previous step</Button>
                                    <Button onClick={incrementCurrentStep}>Next step</Button>
                                </div>
                            </StepBody>
                        </ProgressStepper.Step>
                    </ProgressStepper.Steps>
                </ProgressStepper>
            </div>
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
                        <Typography type="subtitle">Please complete the following onboarding tasks</Typography>
                        {/* Onboarding Card Component */}

                        {/*<PlatformOnboarding/> (stepper) */}

                        {/* Role Card Component */}

                    </ModalBody>
                </ModalContainer>
            </Modal>
        </>
    );
}

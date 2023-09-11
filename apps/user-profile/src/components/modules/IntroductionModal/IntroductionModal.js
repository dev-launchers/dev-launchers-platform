import { useState, useEffect } from "react";
import Modal from "react-modal";
import { ModalContainer, introductionModalStyle, ModalHeader, ModalBody, ModalFooter } from "./StyledIntroductionModal";
import { Typography } from "@devlaunchers/components/components/atoms";
import Button from '@devlaunchers/components/components/atoms/Button';
import RainbowBar from "./../../common//RainbowBar";


Modal.setAppElement("#__next");

/**
 * @description This is custom modal for the user onboarding. 
 */
export default function IntroductionModal({ isOpen }) {
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
                style={introductionModalStyle}
                contentLabel="User Onboarding"
            >
                <ModalContainer>
              
                    {/*<ModalBody>*/}
                    <ModalHeader>
                    <Typography type="h3" textAlign="center">
                     Welcome to Dev Launchers
                    </Typography>
                    <div>
                    <RainbowBar height="6px"/>
                  </div>
                  </ModalHeader>
                  <ModalBody>
                    <Typography type="p">
                     We'll introduce you to Dev Launchers and set up your profile for team collaboration.
                    </Typography>
                    <Typography type="p">
                     Rest assured, we'll guide you through each step of the process.
                  
                     </Typography> 
                     </ModalBody>
                     <ModalFooter>
                     <Button buttonType="primary" buttonSize="standard">
                    GET STARTED (TAKES 2-5 MINUTES)
                    </Button>

                    <Button buttonType="alternative" buttonSize="standard">
                    SET UP LATER
                    </Button>
                    </ModalFooter>
                </ModalContainer>
      
            </Modal>
        </>
    );
}


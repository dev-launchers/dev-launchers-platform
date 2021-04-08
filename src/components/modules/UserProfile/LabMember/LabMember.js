import React from "react";
import { openPopupWidget } from "react-calendly";
import Modal from "../../../common/Modal";
import {
  Portal,
  Title,
  BeginnerAndIntermediateLabSignUp,
  AdvancedAndIntermediateLabSignUp,
  OneOnOneSignUp,
  SubmitTimeCapsule,
  ViewTimeCapsule
} from "./StyledLabMember";

export default function LabMember() {
  // Modal state management
  const [modalContent, setModalContent] = React.useState("content");
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openBeginnerAndIntermediateLabSignUpModal = () => {
    openPopupWidget({
      url: "https://calendly.com/devlaunchers/saturday-lab-2"
    });
  };

  const openAdvancedAndIntermediateLabSignUpModal = () => {
    openPopupWidget({
      url: "https://calendly.com/devlaunchers/saturday-lab-1"
    });
  };

  const openOneOnOneSignUpModal = () => {
    openPopupWidget({
      url: "https://calendly.com/devlaunchers/60min"
    });
  };

  return (
    <div>
      <Modal
        modalContent={modalContent}
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
      ></Modal>
      <Portal>
        <Title>Lab - Members</Title>
        <br />
        <BeginnerAndIntermediateLabSignUp
          onClick={openBeginnerAndIntermediateLabSignUpModal}
        >
          Sign - up for Beginner/Intermediate Labs
        </BeginnerAndIntermediateLabSignUp>
        <AdvancedAndIntermediateLabSignUp
          onClick={openAdvancedAndIntermediateLabSignUpModal}
        >
          Sign - up for Advanced/Intermediate Labs
        </AdvancedAndIntermediateLabSignUp>
        <OneOnOneSignUp onClick={openOneOnOneSignUpModal}>
          Sign - Up for One-on-One's
        </OneOnOneSignUp>
      </Portal>
    </div>
  );
}

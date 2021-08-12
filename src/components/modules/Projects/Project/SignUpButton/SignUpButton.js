import React from "react";

import { withTheme } from "styled-components";
import Modal from "../../../../common/Modal";
import SignUpForm from "../../../../common/SignUpForm";
import Button from "../../../../common/Button";

import { Wrapper } from "./StyledSignUpButton";

const SignUpButton = (props) => {
  // Modal state management
  const [modalContent, setModalContent] = React.useState("content");
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openFormModal = () => {
    setModalContent(
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "5rem",
          backgroundColor: "rgb(255,255,255)",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        <SignUpForm projectName={props.projectName} />
      </div>
    );
    openModal();
  };

  return (
    <Wrapper style={props.style}>
      <Modal
        modalContent={modalContent}
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
      ></Modal>
      <Button
        style={props.style}
        rel="noopener noreferrer"
        onClick={openFormModal}
      >
        {props.children}
      </Button>
    </Wrapper>
  );
};

export default withTheme(SignUpButton);

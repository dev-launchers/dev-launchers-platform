/* eslint-disable no-use-before-define */
// TODO: make generic IdeaGenerator for both components to use (DRY issue)

import React from "react";

import Modal from "../common/Modal";

import { ButtonWrapper, ModalWrapper } from "./StyledIdeaGeneratorButton";

export default function IdeaGeneratorButton(props) {
  // Modal state management
  const [modalContent, setModalContent] = React.useState("content");
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openIdeaModal = async () => {
    setModalContent(
      <ModalWrapper>
        <span style={{fontSize:"1.25em"}}>Loading...</span>
        <br />
        <br />
        We are querying a "Large Language Model" to generate a new idea using AI. It may take up to 30 seconds!
        <br />
        <br />
        <span style={{fontSize:".5em"}}>Interested in how this works? This system combines the practice of "Prompt Engineering" with a "GPT Model" called GPT-J to generate pieces of text with specific areas of focus. Go check it out!</span>
      </ModalWrapper>
    );
    openModal();

    setModalContent(
      <ModalWrapper>
        <span style={{fontSize:".6em"}}>Your idea seed is ready! It will most likely need some tweaking and workshopping...</span>
        <br />
        {await props.contentGenerator()}
        <br />
        <span style={{fontSize:".35em"}}>NOTE: These ideas are generated using AI, and as such may contain biases or output unpredictable results at times. Take them with a large grain of salt!</span>
        <br />
        {generateButton({ position: "absolute", bottom: "10%" })}
      </ModalWrapper>
    );
    openModal();
  };

  const generateButton = (styleObject) => (
    <ButtonWrapper style={styleObject}>
      <Modal
        modalContent={modalContent}
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
      ></Modal>
      <div style={{ width: "100%", height: "100%" }} onClick={openIdeaModal}>
        {props.children}
      </div>
    </ButtonWrapper>
  );

  return generateButton(props.style);
}

// TODO: make generic IdeaGenerator for both components to use (DRY issue)

import React from "react";

import Modal from "../../../../../components/common/Modal";

import style from "./IdeaGeneratorButton.module.css";

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

  const openIdeaModal = () => {
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
          textAlign: "center"
        }}
      >
        {props.contentGenerator()}
        {generateButton({ position: "absolute", bottom: "10%" })}
      </div>
    );
    openModal();
  };

  const generateButton = styleObject => {
    return (
      <div className={style.ideaGeneratorButton} style={styleObject}>
        <Modal
          modalContent={modalContent}
          modalIsOpen={modalIsOpen}
          openModal={openModal}
          closeModal={closeModal}
        ></Modal>
        <div style={{ width: "100%", height: "100%" }} onClick={openIdeaModal}>
          {props.children}
        </div>
      </div>
    );
  };

  return generateButton();
}

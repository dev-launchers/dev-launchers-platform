import React from "react";
import ReactModal from "react-modal";

import style from "./Modal.module.css";

// Modal set up
const customModalStyles = {
  content: {
    position: "absolute",
    width: "70%",
    height: "80%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1001
  },
  overlay: { zIndex: 1000, backgroundColor: "rgba(0,0,0,.75)" }
};
ReactModal.setAppElement("#root");

export default function Modal(props) {
  const [modalContent] = React.useState(props.modalContent);

  // Modal functions
  const [modalIsOpen, setModalIsOpen] = React.useState(props.modalIsOpen);
  const openModal = () => {
    console.log("opening");
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const afterOpenModal = () => {};

  return (
    <ReactModal
      isOpen={props.modalIsOpen ? props.modalIsOpen : modalIsOpen}
      onRequestOpen={props.openModal ? props.openModal : openModal}
      onRequestClose={props.closeModal ? props.closeModal : closeModal}
      style={customModalStyles}
      onAfterOpen={afterOpenModal}
      contentLabel="Template Modal"
    >
      <div className={style.modalContent}>
        {props.modalContent ? props.modalContent : modalContent}
      </div>
    </ReactModal>
  );
}

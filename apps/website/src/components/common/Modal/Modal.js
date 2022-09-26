import React from "react";
import ReactModal from "react-modal";

import { ModalContent, customModalStyles } from "./StyledModal";

ReactModal.setAppElement("#__next");

export default function Modal(props) {
  const [modalContent] = React.useState(props.modalContent);

  // Modal functions
  const [modalIsOpen, setModalIsOpen] = React.useState(props.modalIsOpen);
  const openModal = () => {
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
      <ModalContent>
        {props.modalContent ? props.modalContent : modalContent}
      </ModalContent>
    </ReactModal>
  );
}

import React from 'react';
import ReactModal from 'react-modal';

import { ModalContent, defaultModalStyles } from './StyledModal';

ReactModal.setAppElement('#__next');

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
      isOpen={props.modalIsOpen ?? modalIsOpen}
      onRequestOpen={props.openModal ?? openModal}
      onRequestClose={props.closeModal ?? closeModal}
      style={props.customModalStyles ?? defaultModalStyles}
      onAfterOpen={props.afterOpenModal ?? afterOpenModal}
      preventScroll={props.preventScroll ?? true}
      contentLabel="Position Popup Modal"
    >
      <ModalContent>
        {props.modalContent ? props.modalContent : modalContent}
      </ModalContent>
    </ReactModal>
  );
}

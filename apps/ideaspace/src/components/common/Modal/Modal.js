import React from 'react';
import ReactModal from 'react-modal';
import { Typography } from '@devlaunchers/components/components/atoms/Typography';
import { ModalContent, customModalStyles } from './StyledModal';

//ReactModal.setAppElement("#__next");

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
        <Typography as="div" variant="secondary" size="body_base">
          {props.modalContent ? props.modalContent : modalContent}
        </Typography>
      </ModalContent>
    </ReactModal>
  );
}

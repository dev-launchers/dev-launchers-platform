import React from 'react';
import ReactModal from 'react-modal';
import {
  UploadModalContent,
  UploadCustomModalStyles,
} from './styledUploadModal';

ReactModal.setAppElement('#__next');

export default function UploadModal(props) {
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
      style={props.UploadCustomModalStyles ?? UploadCustomModalStyles}
      onAfterOpen={props.afterOpenModal ?? afterOpenModal}
      preventScroll={props.preventScroll ?? true}
      contentLabel="Upload Popup Modal"
    >
      <UploadModalContent>
        Updated This Upload Modal
        {props.modalContent ? props.modalContent : modalContent}
      </UploadModalContent>
    </ReactModal>
  );
}

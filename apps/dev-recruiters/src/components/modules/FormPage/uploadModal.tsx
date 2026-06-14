'use client';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import {
  UploadModalContent,
  UploadCustomModalStyles,
} from './styledUploadModal';

ReactModal.setAppElement('#__next');

export default function UploadModal({
  modalIsOpen,
  handleCloseModal,
  modalContent,
  UploadCustomModalStyles: customStyles,
  preventScroll = true
}) {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      style={customStyles ?? UploadCustomModalStyles}
      preventScroll={preventScroll}
      contentLabel='Upload Popup Modal'
      >
        <UploadModalContent>
          {modalContent}
        </UploadModalContent>
    </ReactModal>
  )
}
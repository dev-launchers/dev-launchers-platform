import { useState } from 'react';
import ModalHeader from './ModalHeader';

function Modal({ isOpen, onClose, showHeader, children, zIndexClass }) {
  const [openModal, setOpenModal] = useState(isOpen);

  const closeModal = () => {
    if (onClose != null && typeof onClose == 'function') {
      onClose();
    }
    setOpenModal(false);
  };

  return openModal ? (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,.75)] transition-opacity ${
        zIndexClass ?? 'z-50'
      }`}
    >
      <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg ">
        {showHeader ? <ModalHeader closeModal={closeModal} /> : null}
        <div className="relative">{children}</div>
      </div>
    </div>
  ) : null;
}

export default Modal;

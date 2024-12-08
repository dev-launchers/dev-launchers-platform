import { useState } from 'react';
import ModalHeader from './ModalHeader';

function Modal({
  isOpen = true,
  onClose,
  showHeader = false,
  zIndexClass,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  height,
  width,
  className,
  modalClassName,
  children,
  ...attributes
}) {
  const [openModal, setOpenModal] = useState(isOpen);

  const closeModal = () => {
    if (onClose != null && typeof onClose == 'function') {
      onClose();
    }
    setOpenModal(false);
  };

  const modalSizeStyling = {
    maxWidth,
    maxHeight,
    minHeight,
    minWidth,
    height,
    width,
  };

  return openModal ? (
    <div
      className={`p-3 flex justify-center items-center fixed inset-0 bg-[rgba(0,0,0,.75)] transition-opacity  ${
        zIndexClass ?? 'z-50'
      }`}
    >
      <div
        style={modalSizeStyling}
        className={`flex flex-col shadow-lg rounded-2xl overflow-hidden ${modalClassName} `}
      >
        {showHeader ? <ModalHeader closeModal={closeModal} /> : null}
        <div className={className ?? 'bg-grayscale-50'} {...attributes}>
          {children}
        </div>
      </div>
    </div>
  ) : null;
}

export default Modal;

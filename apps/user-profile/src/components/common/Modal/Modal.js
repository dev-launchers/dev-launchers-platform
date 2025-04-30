import { useState } from 'react';
import ModalHeader from './ModalHeader';

/**
 * Modal Component
 *
 * A customizable modal dialog component with optional header, dynamic sizing, and close functionality.
 *
 * Props:
 * - `isOpen` (Boolean): Determines if the modal is initially open (default: true).
 * - `onClose` (Function): Callback function to execute when the modal is closed.
 * - `showHeader` (Boolean): Whether to display a header with a close button (default: false).
 * - `zIndexClass` (String): Tailwind CSS class for the z-index of the modal (default: 'z-50').
 * - `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `height`, `width` (String): Styling properties for modal dimensions.
 * - `className` (String): Custom CSS class for the modal content container.
 * - `modalClassName` (String): Custom CSS class for the modal wrapper.
 * - `children` (ReactNode): Content to render inside the modal.
 * - `attributes` (Object): Additional attributes for the modal content container.
 *
 * @param {Object} props - The component props.
 * @return {JSX.Element|null} The rendered Modal component, or null if closed.
 */
function Modal({
  isOpen = true, // Determines if the modal is initially open
  onClose, // Callback when the modal is closed
  showHeader = false, // Whether to show the modal header
  zIndexClass, // Custom z-index class
  maxHeight, // Maximum height of the modal
  maxWidth, // Maximum width of the modal
  minHeight, // Minimum height of the modal
  minWidth, // Minimum width of the modal
  height, // Fixed height of the modal
  width, // Fixed width of the modal
  className, // Custom class for the modal content
  modalClassName, // Custom class for the modal wrapper
  children, // Content inside the modal
  ...attributes // Additional attributes for the content container
}) {
  const [openModal, setOpenModal] = useState(isOpen); // Modal open/close state

  /**
   * Handles closing the modal.
   *
   * - Executes the `onClose` callback if provided.
   * - Updates the modal's open state to `false`.
   */
  const closeModal = () => {
    if (onClose != null && typeof onClose === 'function') {
      onClose();
    }
    setOpenModal(false); // Close the modal
  };

  // Styling for dynamic modal sizing
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
      className={`p-3 flex justify-center items-center fixed inset-0 bg-[rgba(0,0,0,.75)] transition-opacity ${
        zIndexClass ?? 'z-50'
      }`} // Center the modal and apply backdrop
    >
      <div
        style={modalSizeStyling} // Apply dynamic size styles
        className={`flex flex-col shadow-lg rounded-2xl overflow-hidden ${modalClassName}`} // Modal wrapper styling
      >
        {/* Optional header with a close button */}
        {showHeader ? <ModalHeader closeModal={closeModal} /> : null}

        {/* Modal content container */}
        <div className={className ?? 'bg-grayscale-50'} {...attributes}>
          {children}
        </div>
      </div>
    </div>
  ) : null; // Render nothing if the modal is closed
}

export default Modal;

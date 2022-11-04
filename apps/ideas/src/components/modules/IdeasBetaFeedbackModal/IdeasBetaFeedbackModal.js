import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import './IdeasBetaFeedbackModal.css';
import messageIcon from './message-square.svg';
import modalImage from './modal-img.png';

const formLink =
  'https://docs.google.com/forms/d/e/1FAIpQLSdkipdKLxq4dGQf3dX5Sdfb_XNoPhhGsNxPXNcNNSMzhIrYxg/viewform';

const ModalCustomStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    zIndex: 11,
  },
  content: {
    fontFamily: 'Nunito Sans',
    top: 'auto',
    left: 'auto',
    right: '2rem',
    bottom: '2rem',
    maxWidth: '320px',
    paddingTop: '5rem',
    paddingBottom: '0',
    textAlign: 'center',
    height: '570px',
    border: 'none',
    borderRadius: '16px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
  },
};

const IdeasBetaFeedbackModal = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const MILLISECONDS_IN_DAY = 1000 * 3600 * 24;

  function refreshLastVisited(delay = 2) {
    localStorage.setItem('dl_Ideas_lastVisited', Date.now());
    localStorage.setItem('dl_Ideas_delay', delay);
  }

  useEffect(() => {
    const lastVisited = localStorage.dl_Ideas_lastVisited || 0;
    const delay = localStorage.dl_Ideas_delay;
    const timePassed = (Date.now() - lastVisited) / MILLISECONDS_IN_DAY;
    const canShowIcon = !lastVisited || timePassed > delay;
    canShowIcon ? setShowIcon(true) : setShowIcon(false);
  });

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
    refreshLastVisited();
  }

  Modal.setAppElement('#__next');

  return (
    <div>
      {showIcon && (
        <button className="open-button" onClick={openModal}>
          <img src={messageIcon} />
        </button>
      )}
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={ModalCustomStyles}
        closeTimeoutMS={800}
        contentLabel="Feedback Modal"
      >
        <h2 className="title">
          What do you think of{' '}
          <strong style={{ color: '#ff7f0e' }}>IdeaSpace Beta</strong>?
        </h2>
        <small>Take a quick survey to help us improve</small>
        <button className="close-button" onClick={closeModal}>
          ×
        </button>
        <a className="form-link" href={formLink} target="_blank">
          Provide Feedback
        </a>
        <button
          className="remind"
          onClick={() => {
            closeModal();
            refreshLastVisited(1);
          }}
        >
          <small>remind me later</small>
        </button>
        <img
          src={modalImage}
          style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}
        />
      </Modal>
    </div>
  );
};

export default IdeasBetaFeedbackModal;

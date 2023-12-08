import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import style from './IdeasBetaFeedbackModal.module.css';
import messageIcon from './message-square.svg';
import modalImage from './modal-img.png';


const formLink =
  'https://docs.google.com/forms/d/e/1FAIpQLSdkipdKLxq4dGQf3dX5Sdfb_XNoPhhGsNxPXNcNNSMzhIrYxg/viewform';

const ModalCustomStyles = {
  overlay: {
    // position: 'fixed',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    // backgroundColor: 'transparent',
    // zIndex: 11,
  },
  content: {
    // fontFamily: 'Nunito Sans',
    // top: 'auto',
    // left: 'auto',
    // right: '2rem',
    // bottom: '2rem',
    // maxWidth: '320px',
    // paddingTop: '80px',
    // paddingBottom: '0',
    // textAlign: 'center',
    // height: '550px',
    // border: 'none',
    // borderRadius: '16px',
    // boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    // transition: '0.4s all ease-in-out',
    // transform: 'translateX(200%)',
  },
};

const IdeasBetaFeedbackModal = () => {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  useEffect(() => {
    Modal.setAppElement('#__next');
  }, [])

  return (
    <div>
      <button className={style['open-button']} onClick={openModal}>
        <img src={messageIcon.src} />
      </button>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        // style={ModalCustomStyles}
        closeTimeoutMS={800}
        contentLabel="Feedback Modal"
        className={style['ReactModal__Content']}
        overlayClassName={{base: style.Overlay,afterOpen: style['ReactModal__Overlay--after-open'], beforeClose: style['ReactModal__Overlay--before-close']}}
      >
        <div className={style.title}>
          What do you think of{' '}
          <strong style={{ color: '#ff7f0e' }}>IdeaSpace Beta</strong>?
        </div>
        <small className={style.small}>Take a quick survey to help us improve</small>
        <button className={style["close-button"]} onClick={closeModal}>
          ×
        </button>
        <a className={style["form-link"]} href={formLink} target="_blank">
          Provide Feedback
        </a>
        <button className={style.remind} onClick={closeModal}>
          <small className={style.small}>remind me later</small>
        </button>
        <img
          src={modalImage.src}
          style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}
        />
      </Modal>
    </div>
  );
};

export default IdeasBetaFeedbackModal;

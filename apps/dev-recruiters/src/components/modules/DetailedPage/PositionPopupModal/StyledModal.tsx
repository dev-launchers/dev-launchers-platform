import styled from 'styled-components';

export const ModalContent = styled.div`
  position: relative;
  width: 100%;
  // height: 652px;
  font-family: 'Abel', sans-serif;
`;

export const defaultModalStyles = {
  content: {
    position: 'absolute',
    width: '70%',
    height: '98%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1001,
    padding: '24px 32px 32px 32px',
    borderRadius: '16px',
  },
  overlay: { zIndex: 1000, backgroundColor: 'rgba(0,0,0,1)' },
};

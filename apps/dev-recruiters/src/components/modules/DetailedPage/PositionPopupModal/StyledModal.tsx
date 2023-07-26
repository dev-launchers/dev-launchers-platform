import styled from 'styled-components';

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Abel', sans-serif;
`;

// Modal set up
export const customModalStyles = {
  content: {
    position: 'absolute',
    width: '70%',
    height: '80%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1001,
  },
  overlay: { zIndex: 1000, backgroundColor: 'rgba(0,0,0,.75)' },
};

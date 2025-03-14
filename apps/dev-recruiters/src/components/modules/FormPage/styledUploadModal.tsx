import styled from 'styled-components';

export const UploadModalContent = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Abel', sans-serif;
  letter-spacing: 0.25vw;
  font-size: 1.5vw;
`;

export const UploadCustomModalStyles = {
  content: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    marginRight: '-20%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1002,
  },
  overlay: { zIndex: 1000, backgroundColor: 'rgba(0,0,0,.75)' },
};

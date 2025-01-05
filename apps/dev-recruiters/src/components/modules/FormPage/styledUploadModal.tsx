import styled from 'styled-components';

export const UploadModalContent = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Abel', sans-serif;
`;

export const UploadCustomModalStyles = {
  content: {
    position: 'absolute',
    /* width: '40%',
    height: '80%', */
    top: '40%',
    left: '50%',
    marginRight: '-20%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1002,
  },
  overlay: { zIndex: 1000, backgroundColor: 'rgba(0,0,0,.75)' },
};

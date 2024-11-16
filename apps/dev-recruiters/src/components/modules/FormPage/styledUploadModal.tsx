import styled from 'styled-components';

export const CloseButton = styled.button`
  background: ${({ theme }) => theme.colors.CoolGrey};
  border: none;
  border-radius: 5px;
  height: 22px;
  width: 20px;
  margin: 20px;
  position: absolute;
  top: 0;
  right: 0;

  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
`;

export const OkIcon = styled.svg`
  color: ${({ theme }) => theme?.colors?.CoolGrey};
  height: 100%;
  width: 100%;
`;

export const UploadModalContent = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Abel', sans-serif;
`;

export const UploadCustomModalStyles = {
  content: {
    position: 'absolute',
    width: '50%',
    height: '50%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-30%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1002,
  },
  overlay: { zIndex: 1000, backgroundColor: 'rgba(0,0,0,.75)' },
};

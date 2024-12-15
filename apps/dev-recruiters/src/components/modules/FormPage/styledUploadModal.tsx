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
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  font-family: 'Abel', sans-serif;
  & h3 {
    font-family: ${(props) => props.theme?.fonts?.normal};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
`;

export const UploadCustomModalStyles = {
  content: {
    position: 'absolute',
    /* width: '40%',
    height: '80%', */
    top: '50%',
    left: '50%',
    marginRight: '-20%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1002,
  },
  overlay: { zIndex: 1000, backgroundColor: 'rgba(0,0,0,.75)' },
};

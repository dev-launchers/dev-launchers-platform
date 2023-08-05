import styled from 'styled-components';

export const confirmationModalStyles = {
  content: {
    position: 'absolute',
    width: '700px',
    height: '350px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: { zIndex: 1000, backgroundColor: 'rgba(0,0,0,.75)' },
};

export const ConfirmationModalSection = styled.div`
  height: 100%;
  font-family: ${(props) => props.theme?.fonts?.normal};
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  align-items: center;
  text-align: center;
  justifycontent: center;
  display: flex;
  flex-direction: column;
  margin: 0px 10px;

  & h3 {
    font-family: ${(props) => props.theme?.fonts?.normal};
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 22px;
    padding: 30px 0px 20px 0px;
  }

  & p {
    font-family: ${(props) => props.theme?.fonts?.normal};
    font-style: normal;
    font-size: 14px;
    font-weight: 500;
    line-height: 19px;
    line-height: 1.125rem;
    max-width: 28rem;
    overflow: hidden;
    margin: 40px 0px;
  }
`;

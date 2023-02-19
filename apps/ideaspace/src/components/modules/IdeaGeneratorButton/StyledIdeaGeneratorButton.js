import styled from 'styled-components';

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  line-height: 3rem;
  background-color: rgb(255, 255, 255);
  font-weight: bold;
  text-align: center;

  @media (orientation: portrait) {
    font-size: 1.75rem;
    line-height: 1.8rem;
    width: 90%;
  }
`;

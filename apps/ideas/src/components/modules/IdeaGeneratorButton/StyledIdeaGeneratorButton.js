import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width: 50%;
  padding: 0.5%;
  padding-left: 5%;
  padding-right: 5%;
  margin: 0.5%;
  cursor: pointer;
  border: none;
  background-color: rgba(0, 0, 0, 1);
  color: white;
  text-align: center;
  font-size: 2rem;
  border-radius:15px;

  &:hover {
    background-color: rgba(0, 0, 0, .8);
    color: rgb(240, 240, 240);
  }

  @media (orientation: portrait) {
    font-size: 5vw;
    width: 90%;
    display:none;
  }
`;

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  line-height: 3rem;
  background-color: rgb(255,255,255);
  font-weight: bold;
  text-align: center;

  @media (orientation: portrait) {
    font-size: 1.75rem;
    line-height: 1.8rem;
    width: 90%;
  }
`;


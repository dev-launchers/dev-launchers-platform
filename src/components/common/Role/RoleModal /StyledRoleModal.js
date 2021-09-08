import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 520px;
  min-height: 302px;
  height: 100%;
`;

export const ModalStrip = styled.div`
  /* height: 71px; */
  background-color: #3a7ca5;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 25.63px;
  margin: 0;
`;

export const Container = styled.div`
  max-width: 457px;
  min-height: 256px;
  margin: auto;
  position: relative;
`;

export const CloseModal = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  width: 34px;
  height: 34px;
  background-color: #3c3b3c;
  border: 1px solid #f0edee;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #f0edee;
`;

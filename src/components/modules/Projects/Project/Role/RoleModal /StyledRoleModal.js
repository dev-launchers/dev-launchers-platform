import styled from "styled-components";

export const Wrapper = styled.div`
  /* max-width: 520px;
  min-height: 302px;
  height: 100%; */
`;

export const ModalStrip = styled.div`
  /* height: 71px; */
  background-color: #3a7ca5;
`;

export const ModalHeader = styled.div`
  padding: 1rem;
`;

export const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.601875rem;
  padding: 0 1rem 1rem 1rem;
  margin: 0;
`;

export const Container = styled.div`
  max-width: 457px;
  margin: auto;
  position: relative;
`;

export const CloseModal = styled.button`
  cursor: pointer;
  position: absolute;
  right: 2%;
  top: 2%;
  width: 2.125rem;
  height: 2.125rem;
  background-color: #3c3b3c;
  border: 1px solid #f0edee;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  text-align: center;
  color: #f0edee;
`;

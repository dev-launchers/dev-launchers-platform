import styled from "styled-components";

export const Cards = styled.div`
  border-radius: 5px;
  background-color: #3c3b3c;
  position: relative;
  margin: 0;
  padding: 0.0625rem 1.0625rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 3.875rem;
  column-gap: 2.5625rem;
  margin: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 16.6875rem;
  height: 90%;
  margin: 0.9375rem auto;
`;

export const Title = styled.h4`
  padding: ${({ isOpen }) => isOpen && "0 1rem"};
  font-size: 1.5rem;
  line-height: 1.5818rem;
  margin: 0;
`;

export const Subtitle = styled.p`
  flex: 1;
  font-size: 1.125rem;
  line-height: 1.601875rem;
  margin: 0;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

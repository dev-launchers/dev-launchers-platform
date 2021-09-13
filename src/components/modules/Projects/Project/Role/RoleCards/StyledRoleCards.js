import styled from "styled-components";

export const Cards = styled.div`
  width: 20.0625rem;
  border-radius: 5px;
  background-color: #3c3b3c;
  position: relative;
  margin: 0;
  padding: 0;
`;

export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(17.8125rem, 1fr));
  grid-auto-flow: row;
  row-gap: 3.875rem;
  column-gap: 2.5625rem;
  margin: 0;
`;

export const Container = styled.div`
  width: 16.6875rem;
  margin: 0.9375rem auto;
`;

export const Title = styled.h4`
  font-size: 1.5rem;
  line-height: 1.5818rem;
  margin: 0;
`;

export const Subtitle = styled.p`
  height: 1.625rem;
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

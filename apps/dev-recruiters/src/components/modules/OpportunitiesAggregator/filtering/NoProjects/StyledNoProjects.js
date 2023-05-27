import styled from "styled-components";

export const NoResult = styled.div`
box-sizing: border-box;
  background: #c3c0c0;
  border-radius: 2.5rem;
  min-height: 18.75rem;
  //max-width: 61rem;
  width: 100%;
  padding: 1.625rem;
  display: flex;
  margin: 0 auto;
`;

export const NoResultContent = styled.div`
  flex: 1 1 auto;
  background: #6f747c;
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  justify-content: center;
  color: #fff;
`;

export const NoResultTextBig = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.normal}, sans-serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.5rem;
  text-align: center;
  padding: 0;
  margin: 0;
`;

export const NoResultTextSmall = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.normal}, sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1.7rem;
  text-align: center;
  padding: 0;
  margin: 0;
`;

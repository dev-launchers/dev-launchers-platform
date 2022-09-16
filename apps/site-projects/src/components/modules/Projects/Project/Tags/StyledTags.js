import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem 0;
  overflow: hidden;
  height: 2rem;
  font-size: 1.3rem;
  @media (max-width: 45em) {
    height: 5rem;
  }
`;

export const Tag = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #d6d6d6;
  min-width: fit-content;
  height: 2rem;
  padding: 0 1rem 0 1rem;
  border-radius: 20px;
  @media (max-width: 45em) {
    flex: 0;
  }
`;

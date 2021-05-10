import styled from "styled-components";

export const Wrapper = styled.div``;

export const ProjectHero = styled.div`
  font-family: ${({ theme }) => theme.fonts.headline};
  background: ${({ theme }) => theme.colors.NEUTRAL_1};
  color: ${({ theme }) => theme.colors.NEUTRAL_2};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999;
  width: 100%;
  transition: 0.2s;
`;

export const ProjectTitle = styled.h2`
  display: flex;
  align-items: center;
  transition: 0.2s;
  span {
    transition: 0.2s;
    margin-right: 0.5rem;
    font-size: 1rem;
  }
`;

export const InfoContainer = styled.div`
  padding: 1rem;
  p {
    margin: 0;
  }
`;

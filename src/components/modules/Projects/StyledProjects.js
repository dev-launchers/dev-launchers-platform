import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  place-items: center;
  row-gap: 20px;
  margin: 2em 0;

  @media (orientation: portrait) {
    grid-template-columns: auto;
  }
`;

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  padding: 0.5rem;
  width: 60%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.headline};
  display: grid;
  text-align: center;
  :after {
    background: linear-gradient(
      to right,
      ${({theme}) => theme.colors.ACCENT_1} 25%,
      ${({theme}) => theme.colors.ACCENT_2} 25%,
      ${({theme}) => theme.colors.ACCENT_2} 50%,
      ${({theme}) => theme.colors.ACCENT_4} 50%,
      ${({theme}) => theme.colors.ACCENT_4} 75%,
      ${({theme}) => theme.colors.ACCENT_3} 75%
    );
    content: "";
    height: 0.19rem;
    right: 0;
    left: 0;
    top: 1.2em;
    bottom: 0;
  }
`;
export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.normal};
  font-size: 1rem;
  margin-top: 0.2rem;

  b {
    cursor: pointer;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Skills = styled.div`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

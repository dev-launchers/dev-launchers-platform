import styled from "styled-components";
import { hexToRGBA } from "../../../../../styles/helpers";

export const Wrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.headline};
  background: ${({ theme }) => theme.colors.NEUTRAL_1};
  color: ${({ theme }) => theme.colors.NEUTRAL_2};
  background-image: url(${({ imageURL }) => imageURL});
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  align-items: center;
  /* position: fixed; */
  /* width: 100%; */
  max-height: 35rem;
  height: 25vw;
  min-height: 25rem;
`;

export const HeroSection = styled.div`
  width: 70vw;
  justify-self: center;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2rem 3rem;
`;
export const ProjectTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-right: 1rem;
    font-size: 1rem;
  }
`;
export const ProjectDescription = styled.div`
  font-size: 1.5rem;

  @media (orientation: portrait) {
    font-size: 1.2rem;
  }
`;

export const Actions = styled.div`
  width: 50%;
  margin: 2% 0 0 auto;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 1em;

  @media (orientation: portrait) {
    width: 100%;
  }
`;
export const InfoBar = styled.div`
  padding: 0.5rem;
  background-color: ${({ theme }) => hexToRGBA(theme.colors.NEUTRAL_1, 0.7)};
  display: flex;
  justify-content: space-between;
  align-self: end;
`;

export const Section = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  justify-content: ${({ position }) => position};
  align-items: center;
  gap: 0.5rem;
  font-family: sans-serif;
  font-size: ${({ size }) => size};
`;

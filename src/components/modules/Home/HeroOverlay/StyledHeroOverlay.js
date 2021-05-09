import styled from "styled-components";
import theme from "../../../../styles/theme.js";

export const Wrapper = styled.div`
  position: relative;
  background-color: ${theme.colors.NEUTRAL_2};
  width: 100%;
  height: 30vw;
  border-top: 0.5rem solid ${theme.colors.ACCENT_3};
  border-bottom: 0.5rem solid ${theme.colors.NEUTRAL_1};

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;

  @media (orientation: portrait) {
    height: 80vw;
  }
`;

export const Tagline = styled.div`
  width: 80%;
  /* font-weight: bold; */
  font-size: 3rem;
  color: white;
  font-family: ${theme.fonts.headline}, sans-serif;
  line-height: 1.1em;

  @media (orientation: portrait) {
    width: 80%;
  }
`;

export const MessageArea = styled.div`
  width: 70%;
  height: 100%;
  background-color: ${theme.colors.NEUTRAL_1};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageArea = styled.div`
  position: relative;
  width: 30%;
  height: 100%;
  left: -5rem;
  background-color: transparent;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Image = styled.img`
  height: 100%;
  filter: drop-shadow(-0.2rem 0rem 0 ${theme.colors.ACCENT_2})
    drop-shadow(0rem -0.2rem 0 ${theme.colors.ACCENT_2})
    drop-shadow(0.3rem 0rem 0 ${theme.colors.ACCENT_2});
`;

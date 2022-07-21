import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.NEUTRAL_1};
  width: 100%;
  height: 30vw;
  border-bottom: 0.5rem solid ${({ theme }) => theme.colors.NEUTRAL_1};

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;

  @media (orientation: portrait) {
    height: auto;
  }
`;

export const RainbowedMessageArea = styled.div`
  width: 70%;
  height: 50%;
  background-color: ${({ theme }) => theme.colors.NEUTRAL_1};
  flex-direction: column;
  margin-top: 7.25%;
`;

export const MessageArea = styled.div`
  background-color: ${({ theme }) => theme.colors.NEUTRAL_1};
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;

export const Tagline = styled.div`
  width: 80%;
  /* font-weight: bold; */
  font-size: 3rem;
  color: white;
  font-family: ${({ theme }) => theme.fonts.headline}, sans-serif;
  line-height: 1.1em;

  @media (orientation: portrait) {
    width: 80%;
  }
`;

export const ImageArea = styled.div`
  position: relative;
  width: 30%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.ACCENT_3};
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (orientation: portrait) {
    height: inherit;
  }
`;

export const Image = styled.img`
  height: 70%;
  filter: drop-shadow(-0.075rem 0rem 0 ${({ theme }) => theme.colors.NEUTRAL_2})
    drop-shadow(0rem -0.075rem 0 ${({ theme }) => theme.colors.NEUTRAL_2})
    drop-shadow(0.15rem 0rem 0 ${({ theme }) => theme.colors.NEUTRAL_2})
    grayscale(100%);
  transform: scale(2.25);
  position: relative;
  top: 20%;

  @media (orientation: portrait) {
    height: 50%;
    left: 25%;
  }
`;

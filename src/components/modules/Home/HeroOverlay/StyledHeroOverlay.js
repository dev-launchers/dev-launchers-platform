import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.NEUTRAL_2};
  width: 100%;
  height: 30vw;
  border-bottom: 0.5rem solid ${({ theme }) => theme.colors.NEUTRAL_1};
  overflow: hidden;

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
  font-family: ${({ theme }) => theme.fonts.headline}, sans-serif;
  line-height: 1.1em;

  @media (orientation: portrait) {
    font-size: 7vw;
    width: 80%;
  }
`;

export const MessageArea = styled.div`
  width: 70%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.NEUTRAL_1};

  display: flex;
  justify-content: center;
  align-items: center;

  @media (orientation: portrait) {
    width: 85%;
  }
`;

export const ImageArea = styled.div`
  position: relative;
  width: 30%;
  height: 100%;
  left: -5rem;
  background-color: transparent;
  /* overflow: hidden; */

  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (orientation: portrait) {
    width: 15%;
    left: 0;
  }
`;

export const Image = styled.img`
  height: 100%;
  filter: drop-shadow(-0.2rem 0rem 0 ${({ theme }) => theme.colors.NEUTRAL_2})
    drop-shadow(0rem -0.2rem 0 ${({ theme }) => theme.colors.NEUTRAL_2})
    drop-shadow(0.3rem 0rem 0 ${({ theme }) => theme.colors.NEUTRAL_2});

  @media (orientation: portrait) {
    height: 70%;
  }
`;

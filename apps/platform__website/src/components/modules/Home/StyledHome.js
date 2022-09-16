import styled from "styled-components";

export const HomePageBody = styled.div`
  /*margin-top: 45vw;*/
  width: 100%;
  color: black;
  min-height: 40vh;
  @media (orientation: portrait) {
    width: 100%;
    padding: 0%;
  }
`;

export const ColoredCtaWrapper = styled.div`
  width: 100%;
  height: 65vh;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  border-bottom: 1rem solid ${({ theme }) => theme.colors.NEUTRAL_1};

  @media (orientation: portrait) {
    height: 30vh;
  }
`;
export const ColoredCtaEntry = styled.div`
  width: 33.3%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  color: ${({ theme }) => theme.colors.NEUTRAL_2};
  &:hover {
    color: ${(props) => props.backgroundColor};
  }
`;
export const ColoredCtaEntryTitle = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fonts.headline};
  width: 100%;
  /* height: 4rem; */
  background-color: ${({ theme }) => theme.colors.NEUTRAL_1};

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (orientation: portrait) {
    font-size: 2rem;
  }
`;
export const ColoredCtaEntryImage = styled.img`
  height: 100%;
  filter: grayscale(100%);
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;

import styled from "styled-components";

export const ContentArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  height: auto;
  border-bottom: 0.5rem solid ${({ theme }) => theme.colors.NEUTRAL_1};
`;

export const StudentImageWrapper = styled.div`
  position: relative;
  width: 30%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.NEUTRAL_1};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: -webkit-linear-gradient(
    rgba(129, 195, 215, 1),
    rgba(58, 124, 165, 1)
  );
`;

export const StudentImage = styled.img`
  height: 100%;
  transform: scale(3);
  transform: scaleX(-1);
  position: relative;

  opacity: 0.75;

  @media (orientation: portrait) {
    left: -75%;
  }
`;

export const CtaWrapper = styled.div`
  width: 60%;
  min-height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  border: 0.5rem solid ${({ theme }) => theme.colors.ACCENT_1};
`;

export const CtaHeaderArea = styled.div`
  background-color: ${({ theme }) => theme.colors.NEUTRAL_1};
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CtaHeaderMessage = styled.div`
  /* font-weight: bold; */
  font-size: 3rem;
  color: white;
  font-family: ${({ theme }) => theme.fonts.headline}, sans-serif;
  line-height: 1.1em;
  margin: 0.5rem;

  @media (orientation: portrait) {
    width: 80%;
  }
`;

export const CtaText = styled.div`
  width: 80%;
  text-align: center;
  margin-top: 1rem;
`;

export const CtaButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const StatusNote = styled.div`
  width: 100%;
  text-align: center;
  font-size: 0.75rem;
  color: black;
  margin-top: 1%;
  margin-bottom: 1rem;
`;

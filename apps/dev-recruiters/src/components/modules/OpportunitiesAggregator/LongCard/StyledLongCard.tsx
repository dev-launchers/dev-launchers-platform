import styled from "styled-components";
import { CardButton } from "../../DetailedPage/styledProjectDetails";
export const Container = styled.div`
  font-size: 1.2rem;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  background-color: ${({ theme }) => theme?.colors?.White};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-direction: column;

  ul {
    margin-left: 2rem;
  }
  // @media (orientation: portrait) {
  //   margin-bottom: 5%;
  // }
`;

export const HeaderCard = styled.div`
  position: relative;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  font-weight: 500;
  font-size: 24px;
  height: 102px;
  background-color: ${({ theme }) => theme.colors.NEUTRAL_5};
  text-align: left;
  // @media (orientation: portrait) {
  // }
`;

export const FooterCard = styled.div`
  padding: 1rem 2.5rem;

  /* & > li {
    margin-left: 3rem;
    list-style: disc !important;
  } */
  @media (orientation: landscape) {
    width: 50%;
  }
`;

export const TextBold = styled.div`
  padding: 3rem;
`;
export const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  margin: 20px;
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 50px;
  background-color: ${({ theme }) => theme?.colors?.DarkElectricBlue};
  color: ${({ theme }) => theme?.colors?.White};
  font-family: ${({ theme }) => theme?.fonts?.normal};
  font-size: 15px;
`;

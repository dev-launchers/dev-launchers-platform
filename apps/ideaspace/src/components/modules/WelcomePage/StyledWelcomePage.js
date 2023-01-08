import styled from "styled-components";
import Link from 'next/link';

export const ButtonArea = styled.div`
  width: 100%;
  min-height: 50vh;
  height: 1px;
  max-width: 1700px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10vh;

  @media (orientation: portrait) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    min-height: 60vh;
  }
`;

export const StyledLink = styled(Link)`
  width: 40%;
  height: 100%;

  @media (orientation: portrait) {
    width: 100%;
    height: 40%;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.colors.NEUTRAL_2};
  border: 0 none;
  border-radius: 30px;
  cursor: pointer;
  padding: 2rem;
  margin: 10px 5px;
  font-size: 2rem;
  font-family: "Abel";
  background-color: ${({ theme }) => theme.colors.NEUTRAL_1};

  @media (orientation: portrait) {
    font-size: 1.5rem;
    flex-direction: column;
  }
`;


export const Description = styled.p`
  color: black;
  text-align: center;
`;


export const WelcomeNavigationButtonImage = styled.img`
  height: 70%;

  @media (orientation: portrait) {
    height: 30vw;
  }
`;


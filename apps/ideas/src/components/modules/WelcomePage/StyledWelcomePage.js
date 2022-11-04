import styled from "styled-components";
import Link from 'next/link';

export const ButtonArea = styled.div`
  width: 100%;
  height: 50vh;
  max-width: 1700px;
  max-height: 500px;
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
    height: 60vh;
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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* background: #C4C4C4; */
  /* font-weight: bold; */
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
  /* color: #F1F4F5; */
  color: black;
  text-align: center;
`;

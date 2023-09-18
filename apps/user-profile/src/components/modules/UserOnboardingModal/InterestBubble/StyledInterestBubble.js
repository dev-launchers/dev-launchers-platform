import styled from "styled-components";

export const UserInterestsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.NEUTRAL_2};
  padding: 2rem 5rem;
  text-align: center;
  width: 768px;

  h2 {
    color: ${({ theme }) => theme.colors.NEUTRAL_1};
  }
`;

export const UserInterestsCardContainer = styled.div`
  height: 100%;
  max-width: 530px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 10px;

  @media (orientation: portrait) {
    width: 45%;
  }
`;

export const UserInterestCard = styled.div`
  padding: 10px 30px;
  color: black;
  background-color: white;
  border: 2px solid #344E56;
  border-radius: 24px;
  display: flex;
  flex-direction: row;
  flexwrap: "wrap";
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-family: Nunito Sans;
  font-size: 16px;
  margin: 0.5rem;
  
  cursor: pointer;

  &.selected {
    background-color: black;
    color: white;
  }
`;

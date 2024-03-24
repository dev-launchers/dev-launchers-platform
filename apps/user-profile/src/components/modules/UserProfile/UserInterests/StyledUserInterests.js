import styled from "styled-components";

export const UserInterestsContainer = styled.div`
  /*width: 100%;*/
  background-color: ${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK};
  padding: 2rem;
  /* display: ${(props) => (props.ideas?.length ? "block" : "none")}; */

  h2 {
    color: ${({ theme }) => theme.colors.GREYSCALE_OFF_WHITE};
  }
`;

export const UserInterestsCardContainer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 20%);
  width: 20%;
  height: 100%;
  max-width: 530px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (orientation: portrait) {
    width: 45%;
  }
`;

export const UserInterestCard = styled.div`
  width: 100%;
  height: 6rem;
  color: white;
  background-color: #111111;
  border: 0.1rem solid #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-family: Abel;
  margin: 0.2rem;

  cursor: pointer;

  &:hover {
    color: white;
    background-color: #222222;
    border: 0.1rem solid #ffffff;
  }

  @media (orientation: portrait) {
    /* width: 90vw; */
  }

  &.selected {
    background-color: white;
    color: black;
  }
`;

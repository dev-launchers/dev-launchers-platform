import styled from "styled-components";

export const RecommendedIdeasContainer = styled.div`
  /*width: 100%;*/
  background-color: ${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK};
  padding: 2rem;
  display: ${(props) => (props.ideas?.length ? "block" : "none")};

  h2 {
    color: ${({ theme }) => theme.colors.GREYSCALE_OFF_WHITE};
  }
`;

export const RecommendedIdeaCardContainer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 20%);
  width: 100%;
  height: 100%;
  max-width: 530px;
  display: flex;
  justify-content: center;

  @media (orientation: portrait) {
    /* width: 90vw; */
  }
`;

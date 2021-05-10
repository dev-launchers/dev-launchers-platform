import styled from "styled-components";

export const ArticleInfoArea = styled.div`
  display: flex;
  flex-direction: row;
  alignitems: center;
  justifycontent: center;
  margin-bottom: 1rem;
  margin-left: 10%;

  @media (orientation: portrait) {
    flex-wrap: wrap;
  }
`;

export const InfoBlurb = styled.div`
  display: flex;
  width: 50%;
  @media (orientation: portrait) {
    width: 100%;
  }
`;

export const SocialIconsArea = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    margin-left: 2%;
  }
  @media (orientation: portrait) {
    width: 100%;
  }
`;

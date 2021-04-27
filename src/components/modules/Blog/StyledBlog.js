import styled from "styled-components";

export const ArticleHeading1 = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 3rem;
`;

export const ArticleHeading2 = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 2.5rem;
  margin-top: 2rem;
`;

export const ArticleHeading3 = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  margin-top: 2rem;
`;

export const ArticleHeading4 = styled.h4`
  font-family: "Roboto", sans-serif;
  font-size: 1.4rem;
  margin-top: 2rem;
`;

export const ArticleContainer = styled.div`
  padding-left: 20%;
  padding-right: 20%;
  color: rgba(0, 0, 0, 0.84);

  @media (orientation: portrait) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

export const TitleArea = styled.div`
  font-family: "Vollkorn", serif;
  text-align: center;
`;

export const SubTitleArea = styled.div`
  width: 80%;
  text-align: right;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 4rem;
  color: #555555;
`;

export const ArticleIntroImage = styled.img`
  width: 105vw;
  max-width: 105vw;
  margin-left: -25vw;

  @media (orientation: portrait) {
    margin-left: -15vw;
  }
`;

export const ArticleBody = styled.div`
  font-family: "Vollkorn", serif;
`;

export const ArticleParagraph = styled.p`
  font-size: 1.3rem;
  font-weight: light;
  min-height: 1rem;
  text-indent: 3rem;
`;

export const ArticleIframe = styled.div`
  width: 105vw;
  max-width: 105vw;
  height: 95vh;
  margin-left: -25vw;

  @media (orientation: portrait) {
    height: 95vh;
    margin-left: -15vw;
  }
`;

export const ArticleImage = styled.img`
  max-width: 100%;
`;

export const ArticleLink = styled.a`
  font-weight: bold;
  text-decoration: underline;
  color: rgba(0, 0, 0, 0.84);

  :hover {
    color: black;
  }
`;

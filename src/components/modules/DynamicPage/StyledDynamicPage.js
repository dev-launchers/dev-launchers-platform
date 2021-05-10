import styled from "styled-components";

export const PageContainer = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  color: rgba(0, 0, 0, 0.84);

  @media (orientation: portrait) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

export const IntroArea = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100vw;
  min-height: 50vh;
  margin-left: -10vw;

  background-color: rgb(50, 50, 50);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const IntroImage = styled.img`
  width: 100vw;
  max-width: 100vw;
`;

export const TitleArea = styled.div`
  position: absolute;
  bottom: 10vh;
  left: 5vw;

  font-family: "Holtwood One SC", serif;
  text-align: left;
  color: white;
  text-shadow: 0.5vw 0.5vw black;
`;

export const BodyContent = styled.div`
  /*font-family: "Vollkorn", serif;*/
  font-family: sans-serif;
  font-family: "Abel", sans-serif;
`;

export const PageHeading1 = styled.h1`
  font-family: "Holtwood One SC", serif;
  font-size: 5rem;

  @media (orientation: portrait) {
    font-size: 3rem;
  }
`;
export const PageHeading2 = styled.h2`
  font-family: "Holtwood One SC", serif;
  font-size: 2.5rem;
  margin-top: 2rem;
`;
export const PageHeading3 = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  margin-top: 2rem;
`;
export const PageHeading4 = styled.h4`
  font-family: "Roboto", sans-serif;
  font-size: 1.4rem;
  margin-top: 2rem;
`;

export const PageParagraph = styled.p`
  font-size: 1.5rem;
  font-weight: light;
  min-height: 1rem;
  //text-indent: 3rem;
`;
export const PageIframe = styled.div`
  width: 100%;
  max-width: 100%;
  /*height: 95vh;*/
  /*margin-left: 0vw;*/

  iframe {
    width: 100%;
  }
`;

export const PageImage = styled.img`
  max-width: 100%;
`;

export const PageLink = styled.a`
  font-weight: bold;
  text-decoration: underline;
  /*color: rgba(0, 0, 0, 0.84);*/
  color: #0000ee;

  :hover {
    color: black;
  }
`;

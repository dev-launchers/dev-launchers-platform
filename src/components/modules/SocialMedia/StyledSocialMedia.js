import styled from "styled-components";

export const Side = styled.div`
  flex: 45%;
  padding: 20px;
`;

/* Main column */
export const Main = styled.div`
  flex: 45%;
  padding: 20px;
`;

/* Column container */
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const NewTabLink = styled.a.attrs(() => ({
  target: "_blank"
}))`
  color: black;
  text-decoration: underline;
`;

export const LogoImage = styled.img`
  display: inline-block;
  width: 7%;
  filter: brightness(0);
  // TODO: Minor issue where the logo will animate separately from the link
  :hover {
    filter: brightness(0) saturate(100%) invert(88%) sepia(10%) saturate(6102%)
      hue-rotate(358deg) brightness(101%) contrast(103%);
  }
`;

export const ChessImageWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
`;

export const ChessImage = styled.img.attrs(() => ({
  alt: "chess-piece"
}))`
  width: 100%;
`;

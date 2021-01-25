import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin: 1.5%;
  width: ${props => (props.size == "large" ? "90%" : "22%")};
  border-radius: 2px;
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */
  display: flex;
  flex-direction: column;

  .attachments {
    margin-top: auto;
  }

  @media (orientation: portrait) {
    width: 90%;
    margin-bottom: 5%;
  }
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props =>
    props.cardFlexDirection ? props.cardFlexDirection : "column"};
  align-items: center;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  ${props =>
    props.size == "large" &&
    css`
      flex-direction: row;
      justify-content: space-between;
    `}
`;

export const ImageHolder = styled.div`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  width: ${props => (props.size == "large" ? "50%" : "100%")};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.bgColor ? props.bgColor : "black")};
  padding-top: 2px;
  padding-bottom: 2px;

  a {
    display: flex;

    img {
      background-color: lightgray;
      max-width: 100%;
      max-height: 25vh;
      /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */
      cursor: pointer;
      vertical-align: top;
      margin-left: auto;
      margin-right: auto;
      outline: 2px solid black;
    }
  }
`;
export const DataHolder = styled.div`
  ${props =>
    props.size == "large" &&
    css`
      width: 70%;
      padding: 6.75%;
    `}

  .description {
    width: 100%;
    font-size: 1.2rem;
  }
`;

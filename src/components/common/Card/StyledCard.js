import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 1.5%;
  width: ${({ size }) => (size == "large" ? "90%" : "22%")};
  border-radius: 2px;
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */
  display: flex;
  flex-direction: column;
  @media (orientation: portrait) {
    width: 90%;
    margin-bottom: 5%;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "column"};
  ${({ size }) =>
    size == "large" &&
    css`
      flex-direction: row;
      justify-content: space-between;
    `}
  && {
    flex-direction: ${({ flexDirection }) =>
      flexDirection ? flexDirection : "column"};
  }
  align-items: center;
  text-align: ${({ textAlignment }) =>
    textAlignment ? textAlignment : "left"};
`;

export const ImageHolder = styled.div`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  width: ${({ size }) => (size == "large" ? "50%" : "100%")};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "black")};
  padding-top: 2px;
  padding-bottom: 2px;

  a {
    display: flex;
  }
`;

export const DataHolder = styled.div`
  ${({ size }) =>
    size == "large" &&
    css`
      width: 70%;
      padding: 6.75%;
    `}
`;

export const Image = styled.img`
  background-color: lightgray;
  max-width: 100%;
  max-height: 25vh;
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */
  cursor: pointer;
  vertical-align: top;
  margin-left: auto;
  margin-right: auto;
  outline: 2px solid black;
`;

export const Description = styled.div`
  width: 100%;
  font-size: 1.2rem;
  padding-top: 1%;
`;

export const AttachmentsContainer = styled.div`
  margin-top: auto;
`;

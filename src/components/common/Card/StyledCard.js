import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0.5%;
  width: ${({ size }) => (size == "large" ? "90%" : "24%")};
  background-color: white;
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
  position: relative;
  width: 100%;
  height: 25vh;
  overflow: hidden;

  a {
    display: flex;
  }
`;

export const Image = styled.div`
  background-color: lightgray;
  width: 100%;
  height: 100%;
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */
  cursor: pointer;
  vertical-align: top;
  margin-left: auto;
  margin-right: auto;

  background-image: url(${props => props.imageSrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* outline: 2px solid black; */
`;

export const DataHolder = styled.div`
  margin-top: 0.5em;
  padding: 0.5rem;
  ${({ size }) =>
    size == "large" &&
    css`
      width: 70%;
      padding: 6.75%;
    `}
`;

export const Description = styled.div`
  width: 100%;
  font-size: 1.2rem;
  padding-top: 1%;
`;

export const AttachmentsContainer = styled.div`
  margin-top: auto;
`;

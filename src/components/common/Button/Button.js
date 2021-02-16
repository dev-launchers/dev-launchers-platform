import styled, { css } from "styled-components";

const Button = styled.a`
  /*font-family: "Holtwood One SC", serif;*/
  font-family: "Abel", sans-serif;
  background-color: #ff7f0e;
  color: white;
  width: ${({ width }) => (width ? width : "")};
  border: 0px;
  border-bottom: 3px solid #994800;
  cursor: pointer;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.5rem")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "")};
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "100px"};
  font-weight: bolder;

  ${({ hero }) =>
    hero &&
    css`
      width: 80%;
      margin: 0;
      margin-top: 5%;
      text-shadow: none;
      line-height: 1.15;
      display: inline-block;
      text-align: center;
      box-sizing: border-box;
      font-stretch: normal;
      font-variant-east-asian: normal;
      font-variant-numeric: normal;
      font-variant-caps: normal;
      font-variant-ligatures: normal;
      font-style: normal;
    `}
  ${({ modal }) =>
    modal &&
    css`
      display: block;
      width: 95%;
      margin-top: 2%;
      margin-left: auto;
      margin-right: auto;
    `}
  ${({ intro }) =>
    intro &&
    css`
      font-size: 2.5rem;
      margin-top: 2%;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    `}
  &:hover {
    background-color: rgb(255, 217, 0);
    color: rgb(58, 58, 58);
  }
`;
export default Button;

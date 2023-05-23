import styled from "styled-components";



export const AppRoundedButton = styled.button`
  justify-self: center;
  width: auto;
  font-family: ${({ theme }) => theme?.fonts?.normal}, sans-serif;
  font-size: ${(props) =>
            props.fontSize ? `${props.fontSize}rem` : "1.12rem"};
  background: ${(props) => props.bgColor ?? "rgba(84, 87, 91, 0.2)"};
  color: ${(props) => props.textColor ?? "inherit"};
  border-radius: ${(props) => props.borderRadius ?? "1.25rem"};
  border: none;
  padding-top: ${(props) => (props.paddingY ? `${props.paddingY}rem` : "1.25rem")};
  padding-bottom: ${(props) =>
            props.paddingY ? `${props.paddingY}rem` : ".62rem"};
  padding-left: ${(props) => (props.paddingX ? `${props.paddingX}rem` : "auto")};
  padding-right: ${(props) =>
            props.paddingX ? `${props.paddingX}rem` : "auto"};
`;

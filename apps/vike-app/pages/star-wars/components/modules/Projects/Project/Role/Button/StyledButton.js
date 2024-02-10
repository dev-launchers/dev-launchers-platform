import styled from "styled-components";

export const CardButton = styled.button`
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  border-radius: 5px;
  line-height: 1.43375rem;
  text-align: center;
  border: ${({ border }) => (border ? "1px solid #F0EDEE" : "none")};
  font-size: 1.125rem;
  color: ${({ fontColor }) => fontColor && "#F0EDEE"};
  background-color: ${({ bgColor }) => bgColor && "#3C3B3C"};
`;

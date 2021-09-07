import styled from "styled-components";

export const CardButton = styled.button`
  margin-top: 21px;
  width: 125px;
  height: 34px;
  cursor: pointer;
  border-radius: 5px;
  line-height: 22.94px;
  text-align: center;
  border: ${({ border }) => (border ? "1px solid #F0EDEE" : "none")};
  font-size: 18px;
  color: ${({ color }) => color && "#F0EDEE"};
  background-color: ${({ bgColor }) => bgColor && "#3C3B3C"};
`;

import styled from "styled-components";
import Dropdown from "../../Dropdown";

export const DropdownButton = styled(Dropdown)`
  @media (orientation: portrait) {
    display: none;
  }
`;

export const DropdownItem = styled.a`
  font-family: ${({ theme }) => theme.fonts.headline}, sans-serif;
  background-color: #1c1c1c;
  color: #f0edee;

  width: ${({ width }) => (width ? width : "")};
  border: 0px;
  border-bottom: 3px solid;

  cursor: pointer;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.5rem")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "")};
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-weight: bolder;
`;

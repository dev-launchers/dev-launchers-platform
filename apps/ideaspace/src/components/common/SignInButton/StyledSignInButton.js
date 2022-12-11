import styled from "styled-components";
import Button from "../Button";

export const MenuButton = styled(Button)`
  @media (orientation: portrait) {
    display: none;
  }
`;
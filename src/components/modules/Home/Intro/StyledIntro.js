import styled from "styled-components";
import theme from "../../../../styles/theme.js";

export const Wrapper = styled.div`
  padding-top: 15%;
  padding-bottom: 15%;
  text-align: center;
`;

export const CenteredTitleUnderline = styled.h1`
  width: 40%;
  margin: 1%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2%;
  border-bottom: 0.5rem solid ${theme.colors.ACCENT_3};
`;

import styled from "styled-components";
import FlexPageSection from "../../../../components/common/FlexPageSection";

import theme from "../../../../styles/theme.js";

export const Wrapper = styled.div`
  padding-top: 7.5%;
  padding-bottom: 7.5%;
  text-align: center;
`;

export const CenteredTitleUnderline = styled.h1`
  width: 60%;
  margin: 1%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2%;
  border-bottom: 0.5rem solid ${theme.colors.ACCENT_4};
`;

import styled from "styled-components";
import FlexPageSection from "../../../../components/common/FlexPageSection";

import theme from "../../../../styles/theme.js";

export const Wrapper = styled.div`
  padding-top: 7.5%;
  padding-bottom: 7.5%;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: 2rem solid ${theme.colors.NEUTRAL_1};
`;

export const CenteredTitle = styled.div`
  font-family: "Abel", sans-serif;
  font-size: 3rem;
  width: 50%;
  margin: 1%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2%;
`;

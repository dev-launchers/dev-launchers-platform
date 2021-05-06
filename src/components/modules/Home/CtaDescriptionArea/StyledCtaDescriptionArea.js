import styled from "styled-components";
import theme from "../../../../styles/theme.js";
import heroRender from "../../../../images/hero-render.png";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 75vh;
  border-bottom: 2rem solid ${theme.colors.NEUTRAL_1};

  display: flex;
  flex-direction: ${props => props.flexDirection};
`;

export const ImageAreaWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ImageArea = styled.div`
  width: 80%;
  height: 90%;
  background-color: lightgrey;
`;

export const DescriptionAreaWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleArea = styled.div`
  width: 80%;
  font-size: 4rem;
  font-family: ${theme.fonts.headline};

  position: relative;
  top: 1.8rem;
  font-weight: regular;

  display: flex;
  flex-direction: ${props => props.flexDirection};
`;

export const DescriptionArea = styled.div`
  width: 70%;
  min-height: 50%;
  border-top: 1rem solid ${props => props.borderTopColor};
  background-color: ${theme.colors.NEUTRAL_1};
  color: ${theme.colors.NEUTRAL_2};

  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 5%;
`;

export const DescriptionHeadline = styled.div`
  font-family: ${theme.fonts.headline};
`;

export const DescriptionContent = styled.div``;

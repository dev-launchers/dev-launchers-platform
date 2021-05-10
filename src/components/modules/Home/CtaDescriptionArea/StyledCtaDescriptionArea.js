import styled from "styled-components";
import theme from "../../../../styles/theme.js";
import heroRender from "../../../../images/hero-render.png";

export const Wrapper = styled.div`
  width: 100%;
  height: 85vh;
  border-bottom: 2rem solid ${theme.colors.NEUTRAL_1};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : theme.colors.NEUTRAL_2};

  display: flex;
  flex-direction: ${props => props.flexDirection};
`;

export const ImageAreaWrapper = styled.div`
  width: 40%;
  overflow: hidden;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: flex-end;
  align-items: flex-end;
`;

export const CtaImage = styled.img`
  height: 100%;
  filter: grayscale(100%)
    drop-shadow(-0.2rem 0rem 0 ${props => props.outlineColor})
    drop-shadow(0rem -0.2rem 0 ${props => props.outlineColor})
    drop-shadow(0.3rem 0rem 0 ${props => props.outlineColor});
`;

export const DescriptionAreaWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleArea = styled.div`
  width: 80%;
  font-size: 4rem;
  font-family: ${theme.fonts.headline};
  color: ${props =>
    props.fontColor ? props.fontColor : theme.colors.NEUTRAL_1};

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
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : theme.colors.NEUTRAL_1};
  color: ${props =>
    props.fontColor ? props.fontColor : theme.colors.NEUTRAL_2};

  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 5%;
`;

export const DescriptionHeadline = styled.div`
  font-size: 2.5rem;
  font-family: ${theme.fonts.headline};
  text-align: center;
`;

export const DescriptionContent = styled.div``;

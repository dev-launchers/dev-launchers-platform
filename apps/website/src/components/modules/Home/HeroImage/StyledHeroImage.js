import styled from "styled-components";
import heroRender from "../../../../images/hero-render.png?webp";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  /*min-height:100%;*/
  height: auto;
`;
export const ImageContainer = styled.div`
  background-color: #1c1c1c;
  /* background-image: url(${heroRender}); */
  position: fixed;
  z-index: -1;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: auto 60vw;
  width: 100%;
  height: 30vw;
  top: 0%;
  left: 0;

  @media (orientation: portrait) {
    background-position: center 20%;
    background-repeat: no-repeat;
    background-size: auto 100vw;
    width: 100%;
    height: 100vw;
    top: 0%;
    left: 0;
  }
`;

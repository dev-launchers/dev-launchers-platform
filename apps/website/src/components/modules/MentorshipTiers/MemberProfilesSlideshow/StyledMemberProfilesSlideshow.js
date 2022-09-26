import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

export const CarouselHolder = styled.div`
  width: 100%;
  height: 20vh;
  /* background-color: rgba(0, 0, 0, 0.5); */
  color: black;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-content: center;
  margin-top: 2%;
  margin-bottom: 2%;

  @media (orientation: portrait) {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 60vh;
    flex-direction: column;
    align-items: center;
  }
`;

export const CarouselBlock = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //border: 1px solid black;

  @media (orientation: portrait) {
    width: 90%;
    margin: 2.5%;
    padding: 2.5%;
    border-bottom: 1px solid black;
  }
`;

export const CarouselBlockHeader = styled.div`
  margin: 1%;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const CarouselArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (orientation: portrait) {
    display: none;
  }
`;

export const InLabelDiv = styled.div`
  margin: 0;
  font-size: 1rem;
`;

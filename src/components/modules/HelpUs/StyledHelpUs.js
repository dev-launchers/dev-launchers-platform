import styled from "styled-components";

export const Container = styled.div`
  p {
    font-family: "Nunito Sans", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 2.5rem;
  }
  .lighter-orange-30 {
    background-color: #f9a860;
  }
  .lighter-light-blue-30 {
    background-color: #a2d0de;
  }
  .lighter-yellow-30 {
    background-color: #f4c25e;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: #ff7f0e;
  width: 100%;
  @media screen and (min-width: 1400px) {
    padding: 1.5rem 0;
  }
  @media screen and (min-width: 670px) and (max-width: 991px) {
    padding: 1rem 0;
  }
`;

export const Dot1 = styled.span`
  background-color: #81c3d7;
  border: 4px solid #1c1c1c;
  border-radius: 50%;
  margin: 0rem 1rem;
  height: 1rem;
  width: 1rem;

  @media screen and (min-width: 300px) and (max-width: 670px) {
    display: none;
  }
`;

export const Dot2 = styled.span`
  height: 4rem;
  width: 4rem;
  background-color: #ffab00;
  border: 4px solid #1c1c1c;
  border-radius: 50%;
  margin: 0rem 3rem;
`;

export const Heading = styled.h1`
  font-family: "Abel", sans-serif;
  border: 0;
  margin-block: 1rem;
  font-size: 3rem;
  text-align: center;
`;

export const HeadlineContainer = styled.div`
  color: #f0edee;
  font-weight: normal;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  background-color: #1c1c1c;
  width: 100%;

  h3 {
    font-family: "Abel", sans-serif;
    font-size: 2rem;
    font-weight: lighter;
    line-height: 4rem;
  }
`;

export const ContentContainer = styled.div`
  max-width: 71.3rem;
  margin: auto;
  padding: 1rem 4rem;
  .page-info {
    padding: 2rem 1rem;
  }
  .product-post {
    padding: 2rem;
    background-color: white;
    border: 4px solid black;
    border-radius: 2rem;
    & > div {
      h4 {
        font-family: "Nunito Sans", sans-serif;
        font-size: 1.5rem;
        margin: 1rem;
      }
      ul {
        display: flex;
        justify-content: space-evenly;
        list-style-type: none;
        align-items: center;
        padding: 0rem;
        gap: 1rem;
        flex-wrap: wrap;
        .button-text {
          font-family: "Nunito Sans", sans-serif;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
        }
        .button-one {
          background-color: #81c3d7;
          border: 2px solid black;
          border-radius: 1rem;
          padding: 1rem 2rem;
        }
        .button-two {
          background-color: #ff7f0e;
          border: 2px solid black;
          border-radius: 1rem;
          padding: 1rem 2rem;
        }
        .button-three {
          background-color: #ffab00;
          border: 2px solid black;
          border-radius: 1rem;
          padding: 1rem 2rem;
        }
      }
    }
  }
`;

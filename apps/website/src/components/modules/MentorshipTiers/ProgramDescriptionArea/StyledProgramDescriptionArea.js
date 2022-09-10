import styled from "styled-components";

export const HeaderLight = styled.div`
  padding: 5%;
  padding-top: 1%;
  padding-bottom: 1%;
  text-align: center;

  background-color: rgb(255, 255, 255);
  /*background-color: rgb(220, 220, 220);*/
  /*margin-top: 2%;*/
  /*background-image: url("../../../../images/members/photos/adults-coding.jpg?webp");*/
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  background-blend-mode: overlay;
`;

export const DescriptionArea = styled.div`
  margin-top: 5%;
  margin-bottom: 7.5%;
`;

export const DescriptionTimeslotArea = styled.div`
  width: 90%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  justify-content: space-around;

  @media (orientation: portrait) {
    width: 100%;
    flex-direction: column;
  }
`;

export const DescriptionTimeslotBox = styled.div`
  width: 27.5%;
  border: 5px solid black;
  padding: 1%;

  @media (orientation: portrait) {
    width: 90%;
    margin: 5%;
  }
`;

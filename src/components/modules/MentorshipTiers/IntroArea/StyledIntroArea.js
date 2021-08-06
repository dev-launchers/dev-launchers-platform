import styled from "styled-components";
import adultsCoding from "../../../../images/members/photos/adults-coding.jpg";

export const HeaderDark = styled.div`
  background-color: #333333;
  background-color: #3a424f;
  color: white;
  margin-top: 0%;
  padding: 3%;

  /*background-color: rgb(220, 220, 220);*/
  /*margin-top: 2%;*/
  background-image: url(${adultsCoding});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  background-blend-mode: overlay;
`;

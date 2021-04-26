import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  color: #333333;
  color: #ffffff;

  font-size: 3.75rem;
  font-weight: bold;
  text-shadow: #00000094 10px 10px 5px;

  width: 100%;
  height: 40vh;
  background-color: rgb(180, 180, 180);
  background-color: #3a424f;

  /*background-color: rgb(80, 80, 80);*/
  margin-top: 2%;
  background-image: url("../../../../images/members/photos/startup-table.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  background-blend-mode: overlay;

  @media (orientation: portrait) {
    & > h2 {
      font-size: 3.5rem;
    }
  }
`;

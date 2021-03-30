import styled from "styled-components";

export const UserSection = styled.div`
  margin-top: 10px;
  display: grid;
  gap: 15px;
  justify-content: center;
  justify-items: center;
  grid-template-areas: "ProfileCard UserInfo";

  @media (orientation: portrait) {
    grid-template-areas:
      "ProfileCard"
      "UserInfo";
  }
`;

export const UserInfo = styled.div`
  grid-area: UserInfo;

  @media (orientation: portrait) {
    width: 91%;
  }
`;

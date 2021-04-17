import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
  grid-template-areas:
    "UserSection"
    "LabCampus"
    "Misc";
`;

export const UserSection = styled.div`
  grid-area: UserSection;
  margin-top: 3rem;
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
export const DiscordPlaceHolder = styled.div`
  padding: 100px;
  background: grey;
`;
export const Misc = styled.div`
  grid-area: Misc;
  display: grid;
  gap: 15px;
  grid-template-columns: auto auto;
  margin-bottom: 50px;

  @media (orientation: portrait) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
`;

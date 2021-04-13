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
export const DiscordPlaceHolder = styled.div`
  padding: 100px;
  background: grey;
`;
export const Misc = styled.div`
  grid-area: Misc;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  margin-bottom: 50px;
`;

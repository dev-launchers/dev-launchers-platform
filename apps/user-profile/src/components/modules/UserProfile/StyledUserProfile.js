import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
  justify-items: center;
  grid-template-areas:
    "UserSection"
    "LabCampus"
    "WeeksGlance"
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
  /*display: grid;*/
  gap: 15px;
  grid-template-columns: auto auto;
  margin-bottom: 50px;

  .react-tabs__tab-list {
  border-bottom: none;
  }

  .react-tabs__tab {
    font-family: ${({ theme }) => theme.fonts.headline};
    border-radius:0;
    font-size:3rem;
    border:.3rem solid ${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK};
    background-color: ${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK};
    color: ${({ theme }) => theme.colors.GREYSCALE_OFF_WHITE};
    margin-right:.5rem;
  }

  .react-tabs__tab--selected {
    border-color:${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK};
    color:${({ theme }) => theme.colors.GREYSCALE_OFF_BLACK};
    background-color:transparent;
    border-bottom:none;
  }

  @media (orientation: portrait) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;

    .react-tabs__tab {
      font-size:2rem;
    }
  }

`;
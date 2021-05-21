import styled from "styled-components";
import logoMonogramImage from "../../../images/logo-monogram.png";

import theme from "../../../styles/theme.js";

function getRandomThemeColor() {
  const colors = [
    theme.colors.ACCENT_1,
    theme.colors.ACCENT_2,
    theme.colors.ACCENT_3,
    theme.colors.ACCENT_4
  ];
  let colorTrack = -1;

  return function() {
    colorTrack = colorTrack >= colors.length - 1 ? 0 : colorTrack + 1;
    return colors[colorTrack];
  };
}

export const Wrapper = styled.div`
  position: relative;
  background-color: #1c1c1c;
  color: #d9d9d9;
  width: 100%;
  height: 50vh;
  min-height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  z-index: 3;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const FooterLogo = styled.img.attrs(() => ({
  src: logoMonogramImage,
  alt: "logo"
}))`
  height: 10vh;
  @media (orientation: portrait) {
    height: auto;
    width: 15vw;
  }
`;

export const FooterNav = styled.div`
  min-width: 450px;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (orientation: portrait) {
    min-width: 200px;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const SocialMediaContainer = styled.div`
  margin-top: 2.5%;
  min-width: 10rem;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 5rem;
  @media (orientation: portrait) {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SocialMediaLink = styled.a.attrs(({ Type }) => {
  let href;
  let className;
  switch (Type) {
    case "Instagram":
      href = "https://www.instagram.com/devlaunchers/";
      className = "fab fa-instagram";
      break;
    case "Linkedin":
      href = "https://www.linkedin.com/company/devlaunchers/";
      className = "fab fa-linkedin";
      break;
    case "Twitch":
      href = "https://www.twitch.com/devlaunchers/";
      className = "fab fa-twitch";
      break;
    case "Discord":
      href = "https://www.discord.io/devlaunchers/";
      className = "fab fa-discord";
      break;
  }
  return { href, className };
})``;
export const NavEntry = styled.div`
  cursor: pointer;
  font-size: 1.75rem;
  border-bottom: 0.4rem solid transparent;
  padding-top: 0.3rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  &:hover {
    border-bottom: 0.4rem solid ${getRandomThemeColor()};
    color: ${theme.colors.NEUTRAL_2};
  }

  @media (orientation: portrait) {
    font-size: 1.2rem;
  }
`;

export const OrgInfoArea = styled.div`
  width: 90%;
  text-align: right;
  font-size: 0.85rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

import styled from "styled-components";
import logoMonogramImage from "../../../images/logo-monogram.png?webp";

function getRandomThemeColor(theme) {
  const colors = [
    theme.colors.ACCENT_1,
    theme.colors.ACCENT_2,
    theme.colors.ACCENT_3,
    theme.colors.ACCENT_4,
  ];
  let colorTrack = -1;

  return () => {
    colorTrack = colorTrack >= colors.length - 1 ? 0 : colorTrack + 1;
    return colors[colorTrack];
  };
}

export const Wrapper = styled.div`
  position: relative;
  background-color: #1c1c1c;
  color: #d9d9d9;
  padding: 2rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const FooterLogo = styled.img.attrs(() => ({
  src: logoMonogramImage,
  alt: "logo",
}))`
  width: 7rem;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: -10px;
  transition: 0.3s;

  :hover {
    transform: rotate(-60deg);
  }
`;

export const FooterNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 35%;
  justify-content: space-around;
  row-gap: 1rem;
  text-align: center;
`;
export const SocialMediaContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
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
    default:
      href = null;
      className = null;
      break;
  }
  return { href, className };
})`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.ACCENT_4};

  transition: 0.3s;
  :hover {
    color: ${({ theme }) => theme.colors.NEUTRAL_2};
    transform: scale(1.25);
  }
`;

export const NavEntry = styled.div`
  cursor: pointer;
  font-size: 1.75rem;
  border-bottom: 0.4rem solid transparent;
  padding-top: 0.3rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  transition: 0.5s;

  color: ${({ theme }) => theme.colors.NEUTRAL_2};

  &:hover {
    color: ${({ theme }) => theme.colors.ACCENT_4};
    border-bottom: 0.4rem solid ${({ theme }) => getRandomThemeColor(theme)};
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
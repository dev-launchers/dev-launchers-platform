import logoMonogramImage from '../../../images/logo-monogram.png';
import styled from 'styled-components';

export const HeaderBlock = styled.div`
  background-color: #1c1c1c;
  min-height: 7.5vh;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */
  a {
    color: ${({ theme }) => theme.colors.NEUTRAL_2};
  }
`;
export const Logo = styled.div`
  width: 30%;
  a {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
  }
`;

export const LogoWrapper = styled.div`
  display: inline;
  width: auto;
  transition: 1s;
  &:hover {
    filter: brightness(0) saturate(100%) invert(88%) sepia(10%) saturate(6102%)
      hue-rotate(358deg) brightness(101%) contrast(103%);
  }
`;

export const LogoImageHolder = styled.div`
  width: 3rem;
  margin: 2%;
  margin-bottom: 0;
  @media (orientation: portrait) {
    height: auto;
    width: 4rem;
    margin-left: 1vw;
  }
`;
export const LogoImage = styled.img.attrs(() => ({
  src: logoMonogramImage,
  alt: 'logo',
}))`
  display: inline-block;
  width: 100%;
`;
export const LogoWords = styled.div`
  width: 15rem;
  font-family: 'Abel', sans-serif;
  font-size: 1.75rem;
  margin-left: 0.25rem;
  line-height: 140%;
  @media (orientation: portrait) {
    display: none;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1rem;
  width: 40%;
  min-width: 300px;
  height: 7.5vh;
  align-items: center;
  transition: 0.5s;
  & > a {
    display: flex;
    height: 100%;
    align-items: center;
  }
  @media (orientation: portrait) {
    display: none;
  }
`;

export const NavEntry = styled.div`
  font-family: 'Abel', sans-serif;
  cursor: pointer;
`;

export const SignInArea = styled.div`
  width: 10%;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (orientation: portrait) {
    display: none;
  }
`;
export const UserProfilePic = styled.img.attrs(() => ({
  alt: 'profile-pic',
}))`
  max-height: 3rem;
  min-height: 2rem;
  height: 5vw;
  cursor: pointer;
`;
export const HeaderPusher = styled.div`
  position: 'relative';
  width: '100%';
  min-height: '7.5vh';
`;

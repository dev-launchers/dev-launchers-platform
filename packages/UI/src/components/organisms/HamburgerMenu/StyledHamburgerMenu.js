import styled from 'styled-components';

export const HeaderNav = styled.div``;
export const crossButton = styled.div``;

export const EnclosingStyledComponent = styled.div`
.burgerButton {
  position: fixed;
  min-height: 5vh;
  min-width: 5vh;
  right: 1.5vh;
  top: 1.5vh;

  display: none; /* Only display on mobile */

}

@media (orientation: portrait) {
    .burgerButton {
      display: block;
    }
  }

.menuBody {
  top: 0;
};

.overlay {}
  top: 0px;
  right: 0px;
}

.burgerBar {
  background: #d9d9d9;
}

.crossClass{
  background: #d9d9d9;
}
`;

export const Logo = styled.div`
  margin-top: 20%;
  width: 50%;

  a {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
`;

export const LogoWrapper = styled.div`
  display: inline;
  width: auto;

  &:hover {
    filter: brightness(0) saturate(100%) invert(88%) sepia(10%) saturate(6102%)
      hue-rotate(358deg) brightness(101%) contrast(103%);
  }
`;

export const LogoImageHolder = styled.div`
  width: 100%;
  margin: 2%;
  margin-bottom: 0;
`;

export const LogoImage = styled.div`
  display: inline-block;
  width: 100%;
`;

export const LogoWords = styled.div`
  position: absolute;
  bottom: 5%;
  text-align: center;
  width: 100%;
  font-family: 'Abel', sans-serif;
  font-size: 1.25rem;
  margin-left: 0.25rem;
  line-height: 140%;
`;

export const NavEntry = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 10%;
`;

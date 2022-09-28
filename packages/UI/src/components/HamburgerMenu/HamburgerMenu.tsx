/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line no-use-before-define
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { slide as SlideHamburgerMenu } from 'react-burger-menu';
import type { User } from '../../models/common';
import { env } from '../../utils/EnvironmentVariables';
import Logout from '../../utils/Logout';
import logoMonogramImage from './../../images/logo-monogram.png';

import {
  EnclosingStyledComponent,
  HeaderNav,
  Logo,
  LogoImage,
  LogoImageHolder,
  LogoWrapper,
  // eslint-disable-next-line prettier/prettier
  NavEntry
} from './StyledHamburgerMenu';
// import * as style from './HamburgerMenu.module.css';

const HamburgerMenu: React.FC<{ userData: User }> = ({ userData }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Called when the open/close state of the menu changes (onStateChange callback)
  const isMenuOpen = (state: { isOpen: boolean }) => {
    setMenuOpen(state.isOpen);
  };

  // Called whenever a navigation item in the menu is clicked (closes menu)
  function handleNavClick(): void {
    setMenuOpen(false);
  }

  return (
    <EnclosingStyledComponent>
      <SlideHamburgerMenu
        right
        className="menuBody"
        overlayClassName="overlay"
        isOpen={menuOpen}
        burgerButtonClassName="burgerButton"
        burgerBarClassName="burgerBar"
        crossButtonClassName="crossButton"
        crossClassName="crossClass"
        onStateChange={isMenuOpen}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundColor: '#1c1c1c',
            color: '#d9d9d9',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Logo onClick={handleNavClick}>
            <LogoWrapper>
              <Link href={'/'} passHref>
                <a className="nav-link">
                  <LogoImageHolder>
                    <Image
                      alt="Logo"
                      src={logoMonogramImage}
                      className={String(LogoImage)}
                      width="144"
                      height="144"
                    />
                  </LogoImageHolder>
                </a>
              </Link>
            </LogoWrapper>
          </Logo>
          <div>
            <HeaderNav onClick={handleNavClick}>
              <Link href={'/create'} passHref>
                <a className="nav-link">
                  <NavEntry>CREATE</NavEntry>
                </a>
              </Link>
              <Link href={'/learn'} passHref>
                <a className="nav-link">
                  <NavEntry>LEARN</NavEntry>
                </a>
              </Link>

              <div>
                {userData?.id ? (
                  <>
                    <Link href={'/user-profile'} passHref>
                      <a className="nav-link">
                        <NavEntry>VISIT ACCOUNT PAGE</NavEntry>
                      </a>
                    </Link>
                    <a onClick={Logout} className="nav-link">
                      <NavEntry>LOG OUT </NavEntry>
                    </a>
                  </>
                ) : (
                  <a href={env().GOOGLE_AUTH_URL+"?redirectURL="+window.location} className="nav-link">
                    <NavEntry>SIGN IN </NavEntry>
                  </a>
                )}
              </div>

              {/* }
            <Link href={"/play"} className="nav-link">
              <div className={style.navEntry}>PLAY</div>
            </Link>
            { */}
              <Link href={'/support-us'} passHref>
                <a className="nav-link">
                  <NavEntry>SUPPORT US</NavEntry>
                </a>
              </Link>
              <Link href={'/join'} passHref>
                <a className="nav-link">
                  <NavEntry>JOIN</NavEntry>
                </a>
              </Link>
            </HeaderNav>
            {/* }
          <div className={style.SignInArea}>
            {authUser ? (
              <img className={style.UserProfilePic} src={authUser.photoURL} />
            ) : (
              <Button fontSize="1.2rem" onClick={doAuthRequest}>
                Sign In
              </Button>
            )}
          </div>
          { */}
          </div>
          {/* } <div className={style.LogoWords}>Dev Launchers</div> */}
        </div>
      </SlideHamburgerMenu>
    </EnclosingStyledComponent>
  );
};

export default HamburgerMenu;

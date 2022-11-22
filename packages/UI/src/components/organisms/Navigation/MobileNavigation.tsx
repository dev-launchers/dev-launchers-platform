import React, { useState } from 'react';
import { slide as SlideHamburgerMenu } from 'react-burger-menu';

import Box from '../../atoms/Box';
import Button from '../../atoms/Button';
import Typography from '../../atoms/Typography';
import logo from './../../../assets/images/logo-monogram.png';
import { MobileNav, HamburgerWrapper } from './Styled.Navigation';

const MobileNavigation = ({ userInfo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Called when the open/close state of the menu changes (onStateChange callback)
  const isMenuOpen = (state: { isOpen: boolean }) => {
    setMenuOpen(state.isOpen);
  };

  // Called whenever a navigation item in the menu is clicked (closes menu)
  function handleNavClick(): void {
    setMenuOpen(false);
  }
  return (
    <HamburgerWrapper>
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
        <Box flexDirection="column">
          <MobileNav onClick={handleNavClick}>
            <Box
              gap={'5px'}
              alignItems={'center'}
              justifyContent={'center'}
              paddingBlock="40px"
            >
              {userInfo.id ? (
                <Box gap={'16px'} alignItems={'center'}>
                  <img
                    width="36"
                    height="33"
                    src={userInfo.profilePictureUrl}
                    alt="logo"
                  />
                  <Typography type="h2">Hi {userInfo.name}</Typography>
                </Box>
              ) : (
                <img width="139.26" height="114" src={logo} alt="logo" />
              )}
            </Box>
            <ul>
              <Box gap={'40px'} flexDirection="column" alignItems="center">
                <li>
                  <Button as="a" buttonType="alternative" buttonSize="standard">
                    Learn
                  </Button>
                </li>
                <li>
                  <Button as="a" buttonType="alternative" buttonSize="standard">
                    Join Use
                  </Button>
                </li>
                <li>
                  <Button as="a" buttonType="alternative" buttonSize="standard">
                    Create
                  </Button>
                </li>
                <li>
                  <Button as="a" buttonType="alternative" buttonSize="standard">
                    Support Us
                  </Button>
                </li>
              </Box>
            </ul>
            <Box
              gap={'16px'}
              flexDirection="column"
              alignItems="center"
              paddingBlock="40px"
            >
              {!userInfo.id ? (
                <>
                  <Button as="a" buttonType="primary" buttonSize="standard">
                    Sign In
                  </Button>
                  <Button as="a" buttonType="secondary" buttonSize="standard">
                    Create an Account
                  </Button>
                </>
              ) : (
                <Button as="a" buttonType="secondary" buttonSize="standard">
                  Logout
                </Button>
              )}
            </Box>
          </MobileNav>
        </Box>
      </SlideHamburgerMenu>
    </HamburgerWrapper>
  );
};

export default MobileNavigation;

import React, { useState } from 'react';
import { slide as SlideHamburgerMenu } from 'react-burger-menu';
import Box from '../../atoms/Box';
import Button from '../../atoms/Button';
import Typography from '../../atoms/Typography';
import BackButton from '../../molecules/BackButton';
import logo from './../../../assets/images/logo-monogram.png';
import { MobileNav, HamburgerWrapper } from './Styled.Navigation';
import type { NavigationProps } from '.';
import Link from 'next/link';

const MobileNavigation = ({ user }: NavigationProps) => {
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
        customCrossIcon={<BackButton type="cancel" withLabel={false} />}
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
      >
        <Box flexDirection="column" style={{ display: 'flex', height: '100%' }}>
          <MobileNav onClick={handleNavClick}>
            <Box
              gap={'5px'}
              alignItems={'center'}
              justifyContent={'center'}
              paddingBlock="40px"
            >
              {user.id ? (
                <Box gap={'16px'} alignItems={'center'}>
                  <img
                    width="36"
                    height="33"
                    src={user.profilePictureUrl}
                    alt="Profile avatar"
                    style={{ borderRadius: '50%' }}
                  />
                  <Typography type="h2">Hi {user.name}</Typography>
                </Box>
              ) : (
                <Link href="/">
                  <a href="/">
                    <img width="139.26" height="114" src={logo} alt="logo" />
                  </a>
                </Link>
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
              {!user.id ? (
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

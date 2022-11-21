import React, { useState } from 'react';
import { slide as SlideHamburgerMenu } from 'react-burger-menu';
import Box from '../../atoms/Box';
import Button from '../../atoms/Button';
import Typography from '../../atoms/Typography';
import logo from './../../../assets/images/logo-monogram.png';
import { MobileNav, HamburgerWrapper } from './Styled.Navigation';

const MobileNavigation = ({ userInfo }) => {
  const ListStyle = { listStyle: 'none' };
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
            <Box gap={'5px'} alignItems={'center'}>
              <img width="36" height="33" src={logo} alt="logo" />
              <Typography type="h3">Dev Launchers</Typography>
            </Box>
            <ul>
              <Box gap={'16px'}>
                <li style={ListStyle}>
                  <a href="#">Learn</a>
                </li>
                <li style={ListStyle}>
                  <a href="#">Join Use</a>
                </li>
                <li style={ListStyle}>
                  {' '}
                  <a href="#">Create</a>
                </li>
                <li style={ListStyle}>
                  {' '}
                  <a href="#">Support Us</a>
                </li>
              </Box>
            </ul>
            {userInfo.id === 0 ? (
              <Box gap={'16px'}>
                <Button buttonType="primary" buttonSize="standard">
                  Sign In
                </Button>
                <Button buttonType="secondary" buttonSize="standard">
                  Create an Account
                </Button>
              </Box>
            ) : (
              <Box gap={'16px'} alignItems={'center'}>
                <img
                  width="36"
                  height="33"
                  src={userInfo.profilePictureUrl}
                  alt="logo"
                />
                <Typography type="p">Hi {userInfo.name}</Typography>
                <Button buttonType="secondary" buttonSize="standard">
                  Log out
                </Button>
              </Box>
            )}
          </MobileNav>
        </Box>
      </SlideHamburgerMenu>
    </HamburgerWrapper>
  );
};

export default MobileNavigation;

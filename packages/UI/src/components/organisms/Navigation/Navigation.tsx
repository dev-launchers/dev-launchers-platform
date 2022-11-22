import React, { useState } from 'react';
import Box from '../../atoms/Box';
import Button from '../../atoms/Button';
import Typography from '../../atoms/Typography';
import logo from './../../../assets/images/logo-monogram.png';
import { useUserDataContext } from './../../../context/UserDataContext';
import MobileNavigation from './MobileNavigation';
import { Nav, RainbowBar, NavWrapper } from './Styled.Navigation';
/*
* The following Consumes data from any context:
*  if (!user) {
    userInfo = useUserDataContext().userData;
  }
* This is declaration is only for UserDataCotext:
*const { userData } = useUserDataContext();
*
* Either of these can be used
*/
export default function Navigation({ user }) {
  const ListStyle = { listStyle: 'none' };
  let userInfo = user;
  if (!user) {
    userInfo = useUserDataContext().userData;
  }
  // const { userData } = useUserDataContext();
  return (
    <>
      <Nav>
        <Box justifyContent={'space-between'} alignItems={'center'}>
          <Box gap={'5px'} alignItems={'center'}>
            <img width="36" height="33" src={logo} alt="logo" />
            <Typography type="h3">Dev Launchers</Typography>
          </Box>
          <NavWrapper>
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
          </NavWrapper>
        </Box>
        <MobileNavigation userInfo={userInfo} />
      </Nav>
      <RainbowBar />
    </>
  );
}

import Link from 'next/link';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import Logout from '../../../utils/Logout';
import Box from '../../atoms/Box';
import Button from '../../atoms/Button';
import Layer from '../../atoms/Layer';
import NavLink from '../../atoms/NavLink/NavLink';
import Typography from '../../atoms/Typography';
import NavDropdown from '../NavDropdown';
import logo from './../../../assets/images/logo-monogram.png';
import { useUserDataContext } from './../../../context/UserDataContext';
import MobileNavigation from './MobileNavigation';
import { Nav, NavWrapper } from './Styled.Navigation';
import type { NavigationProps } from '.';

const links = {
  CREATE: '/create',
  LEARN: '/learn',
  IDEATE: [
    { text: 'Ideaspace', href: '/ideaspace' },
    { text: 'Submit an idea', href: '/ideaspace/submit' },
    { text: 'Generate an idea', href: '#' },
    { text: 'Help existing idea', href: '/ideaspace/browse' },
  ],
  'SUPPORT US': '/support-us',
  JOIN: '/join',
};

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
export default function Navigation({ user }: NavigationProps) {
  const ListStyle = { listStyle: 'none' };
  let userInfo = user;
  if (!user) {
    userInfo = useUserDataContext().userData;
  }
  // const { userData } = useUserDataContext();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layer hasRainbowBottom={true} type="dark">
          <Nav>
            <Box justifyContent={'space-between'} alignItems={'center'}>
              <Link href="/">
                <a href="/">
                  <Box gap={'5px'} alignItems={'center'}>
                    <img width="36" height="33" src={logo} alt="logo" />
                    <Typography type="h3">Dev Launchers</Typography>
                  </Box>
                </a>
              </Link>
              <NavWrapper>
                <ul>
                  <Box gap={'16px'} alignItems="baseline">
                    {Object.entries(links).map(([name, href], i) => {
                      if (Array.isArray(href))
                        return <NavDropdown title={name} links={href} />;
                      return (
                        <li style={ListStyle} key={i}>
                          <Link href={href} passHref>
                            <NavLink>{name}</NavLink>
                          </Link>
                        </li>
                      );
                    })}
                  </Box>
                </ul>
                {userInfo.id === 0 ? (
                  <Box gap={'16px'}>
                    <Button
                      as="a"
                      href={
                        process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL +
                        '?redirectURL=https://devlaunchers.org/users/me'
                      }
                      buttonType="primary"
                      buttonSize="standard"
                    >
                      Sign In
                    </Button>
                    <Button
                      as="a"
                      href={
                        process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL +
                        '?redirectURL=https://devlaunchers.org/users/me'
                      }
                      buttonType="secondary"
                      buttonSize="standard"
                    >
                      Create an Account
                    </Button>
                  </Box>
                ) : (
                  <Box gap={'16px'} alignItems={'center'}>
                    <img
                      width="36"
                      height="33"
                      src={userInfo.profilePictureUrl}
                      alt="Profile avatar"
                      style={{ borderRadius: '50%' }}
                    />
                    <Typography type="p">Hi {userInfo.name}</Typography>
                    <Button
                      buttonType="secondary"
                      buttonSize="standard"
                      onClick={Logout}
                    >
                      Log out
                    </Button>
                  </Box>
                )}
              </NavWrapper>
            </Box>
            <MobileNavigation links={links} user={userInfo} />
          </Nav>
        </Layer>
      </ThemeProvider>
    </>
  );
}

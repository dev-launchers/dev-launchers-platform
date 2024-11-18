import Link from 'next/link';
import { useEffect } from 'react';
import Box from '../../atoms/Box';
import Button from '../../atoms/Button';
import NavLink from '../../atoms/NavLink/NavLink';
import Typography from '../../atoms/Typography';
import NavDropdown from '../NavDropdown';
import logo from './../../../assets/images/logo-monogram.png';
import type {
  links as Links,
  accountOptions as AccountOptions,
} from './Navigation';
import { MobileNav, HamburgerWrapper } from './Styled.Navigation';
import type { NavigationProps } from '.';
import NotificationPopover from './NotificationPopover';

interface MobileNavigationProps {
  links: typeof Links;
  accountOptions: typeof AccountOptions;
  logout: () => void;
  isSidebarExpanded?: boolean;
  isAuthenticated?: boolean;
  setIsSidebarExpanded?: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavigation = ({
  user,
  links,
  accountOptions,
  logout,
  isSidebarExpanded,
  setIsSidebarExpanded,
  isAuthenticated,
}: NavigationProps & MobileNavigationProps) => {
  useEffect(() => {
    if (!isSidebarExpanded) {
      document.documentElement.classList.add('overflow-x-hidden');
    } else {
      document.documentElement.classList.remove('overflow-x-hidden');
    }

    return () => document.documentElement.classList.remove('overflow-x-hidden');
  }, [isSidebarExpanded]);

  return (
    <HamburgerWrapper
      className={`absolute left-full top-0 z-20 block w-full overflow-auto transition-transform duration-200 ${
        isSidebarExpanded ? '-translate-x-full' : 'hidden'
      }`}
    >
      <Box flexDirection="column" style={{ display: 'flex' }}>
        <MobileNav className="grow">
          <Box
            gap={'5px'}
            alignItems={'center'}
            justifyContent={'center'}
            paddingBlock="40px"
          >
            {isAuthenticated ? (
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
                <a href="/" onClick={() => setIsSidebarExpanded?.(false)}>
                  <img width="139.26" height="114" src={logo} alt="logo" />
                </a>
              </Link>
            )}
          </Box>
          <ul>
            <Box gap={'40px'} flexDirection="column" alignItems="center">
              {isAuthenticated ? <NotificationPopover /> : ''}
              {Object.entries(links).map(([name, href], i) => {
                if (Array.isArray(href))
                  return (
                    <li key={`${name} ` + i}>
                      <NavDropdown
                        toggleElementProps={{
                          as: Button,
                          buttonType: 'alternative',
                          buttonSize: 'standard',
                          style: { color: 'black' },
                        }}
                        title={name}
                        links={href.map((el) => ({
                          ...el,
                          onClick: () => setIsSidebarExpanded?.(false),
                        }))}
                      />
                    </li>
                  );
                return (
                  <li key={`${name} ` + i}>
                    <Link href={href} passHref>
                      <Button
                        buttonType="alternative"
                        buttonSize="standard"
                        onClick={() => setIsSidebarExpanded?.(false)}
                      >
                        {name}
                      </Button>
                    </Link>
                  </li>
                );
              })}
            </Box>
          </ul>
          <Box
            gap={'16px'}
            flexDirection="column"
            alignItems="center"
            paddingBlock="40px"
          >
            {!isAuthenticated ? (
              <>
                <Button
                  as="a"
                  href={
                    process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL +
                    `?redirectURL=${process.env.NEXT_PUBLIC_FRONT_END_URL}/users/me`
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
                    `?redirectURL=${process.env.NEXT_PUBLIC_FRONT_END_URL}/users/me`
                  }
                  buttonType="secondary"
                  buttonSize="standard"
                >
                  Create an Account
                </Button>
              </>
            ) : (
              <>
                <NavDropdown
                  toggleElementProps={{
                    as: Button,
                    buttonType: 'primary',
                    buttonSize: 'standard',
                    style: { color: 'white' },
                  }}
                  title={'MY ACCOUNT'}
                  links={[
                    accountOptions[0],
                    { ...accountOptions[1], hasUnderline: false },
                  ]}
                />
                <Button
                  buttonType="secondary"
                  buttonSize="standard"
                  onClick={logout}
                >
                  Logout
                </Button>
              </>
            )}
          </Box>
        </MobileNav>
      </Box>
    </HamburgerWrapper>
  );
};

export default MobileNavigation;

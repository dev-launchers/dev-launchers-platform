import Link from 'next/link';
import { useEffect } from 'react';
import Box from '../../atoms/Box';
import Button from '../../atoms/Button';
import NavLink from '../../atoms/NavLink/NavLink';
import Typography from '../../atoms/TypographyOld';
import NavDropdown from '../NavDropdown';
import logo from './../../../assets/images/logo-monogram.png';

import { MobileNav, HamburgerWrapper } from './Styled.Navigation';
import type { NavigationProps } from '.';
import NotificationPopover from './NotificationPopover';
import { ReactNode } from 'react';
import { HTMLAttributes } from 'react';

interface MobileNavigationProps {
  links: Record<string, string | { name: string; href: string }[]>;
  accountOptions: { name: string; href: string; hasUnderline?: boolean }[];
  logout: () => void;
  isSidebarExpanded?: boolean;
  isAuthenticated?: boolean;
  setIsSidebarExpanded?: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create an interface that matches what NavDropdown expects
interface NavDropdownLink extends HTMLAttributes<unknown> {
  text: ReactNode;
  href?: string;
  hasUnderline?: boolean;
  as?: ReactNode;
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

  // Helper function to convert accountOptions to the format NavDropdown expects
  const convertToNavDropdownLinks = (
    options: { name: string; href: string; hasUnderline?: boolean }[]
  ): NavDropdownLink[] => {
    return options.map((option) => ({
      text: option.name,
      href: option.href,
      hasUnderline: option.hasUnderline,
    }));
  };

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
                          text: el.name,
                          href: el.href,
                          onClick: () => setIsSidebarExpanded?.(false),
                        }))}
                      />
                    </li>
                  );
                return (
                  <li key={`${name} ` + i}>
                    <Link href={href} passHref>
                      <Button
                        type="secondary"
                        size="medium"
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
                  type="primary"
                  size="medium"
                >
                  Sign In
                </Button>
                <Button
                  as="a"
                  href={
                    process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL +
                    `?redirectURL=${process.env.NEXT_PUBLIC_FRONT_END_URL}/users/me`
                  }
                  type="secondary"
                  size="medium"
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
                    {
                      text: accountOptions[0].name,
                      href: accountOptions[0].href,
                    },
                    {
                      text: accountOptions[1].name,
                      href: accountOptions[1].href,
                      hasUnderline: false,
                    },
                  ]}
                />
                <Button type="secondary" size="medium" onClick={logout}>
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

import Link from 'next/link';
import * as React from 'react';
import { tv } from 'tailwind-variants';
import { useUserDataContext } from '../../../context/UserDataContext';
import Logout from '../../../utils/Logout';
import { Button, NavLink } from '../../atoms';
import NavDropdown from '../NavDropdown/NavDropdown';
import logo from './../../../assets/images/logo-monogram.png';
import MobileNavigation from './MobileNavigation';

const HamburgerButton = ({
  className,
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className: string;
}) => {
  return (
    <button
      className={`tham tham-e-squeeze tham-w-10 ${
        !open || 'tham-active'
      } ${className} z-10`}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="tham-box">
        <div className={`tham-inner ${open ? 'bg-black' : 'bg-white'}`} />
      </div>
    </button>
  );
};

// TODO: Use fonts from figma
const NavigationStyles = tv(
  {
    slots: {
      $wrapper: 'flex h-[100px] items-center justify-between bg-[#1C1C1C] px-8',
      $logoContainer: 'flex items-center gap-4 text-white',
      $linksContainer: '',
      $actionsContainer: '',
    },
    variants: {},
  }
  // { responsiveVariants: ['sm', 'md'] }
);

export const links = {
  CREATE: '/create',
  LEARN: '/learn',
  DREAM: [
    { text: 'Ideaspace', href: '/ideaspace', hasUnderline: true },
    { text: 'Submit an idea', href: '/ideaspace/submit' },
    { text: 'Help existing idea', href: '/ideaspace/browse' },
  ],
  'SUPPORT US': '/support-us',
  JOIN: '/join',
};

export const accountOptions = [
  { text: 'My Profile', href: '/users/me' },
  {
    text: 'my ideas dashboard',
    href: '/ideaspace/dashboard',
    hasUnderline: true,
  },
  {
    text: 'Log out',
    onClick: Logout,
  },
];

// type NavigationProps = VariantProps<typeof NavigationStyles>;

const Navigation = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = React.useState(false);
  const { $wrapper, $logoContainer } = NavigationStyles();
  const { userData, isAuthenticated } = useUserDataContext();

  return (
    <nav className={$wrapper()}>
      <Link href="/">
        <a href="/" className={$logoContainer()}>
          <img className="w-10" src={logo.src} alt="logo"></img>
          <span className="hidden md:inline-block">Dev Launchers</span>
        </a>
      </Link>
      <ul>
        <div className="hidden lg:flex lg:items-baseline lg:gap-12">
          {Object.entries(links).map(([name, href], i) => {
            if (Array.isArray(href))
              return (
                <li key={`${name}-` + i}>
                  <NavDropdown
                    title={name}
                    links={href}
                    toggleElementProps={{ style: { color: 'white' } }}
                  />
                </li>
              );
            return (
              <li className="list-none" key={i}>
                <Link href={href} passHref>
                  <NavLink>{name}</NavLink>
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
      {!isAuthenticated ? (
        <div className="hidden lg:flex lg:gap-4">
          <Button
            as="a"
            href={
              process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL +
              `?redirectURL=${process.env.FRONT_END_URL}/users/me`
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
              `?redirectURL=${process.env.FRONT_END_URL}/users/me`
            }
            buttonType="secondary"
            buttonSize="standard"
          >
            Create an Account
          </Button>
        </div>
      ) : (
        <div className="hidden text-white lg:flex lg:items-center lg:gap-4">
          <img
            width="36"
            height="33"
            src={userData.profilePictureUrl}
            alt="Profile avatar"
            style={{ borderRadius: '50%' }}
          />
          <NavDropdown
            title={`Hi ${userData.name}`}
            links={accountOptions}
            toggleElementProps={{ style: { color: 'white' } }}
          />
        </div>
      )}
      <HamburgerButton
        open={isSidebarExpanded}
        setOpen={setIsSidebarExpanded}
        className="lg:hidden"
      />
      <MobileNavigation
        links={links}
        accountOptions={accountOptions}
        user={userData}
        isAuthenticated={isAuthenticated}
        logout={() => Logout()}
        isSidebarExpanded={isSidebarExpanded}
      />
    </nav>
  );
};

Navigation.displayName = 'Navigation';
export default Navigation;

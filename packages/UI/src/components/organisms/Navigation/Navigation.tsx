import Link from 'next/link';
import * as React from 'react';
import { tv } from 'tailwind-variants';
import { useUserDataContext } from '../../../context/UserDataContext';
import Logout from '../../../utils/Logout';
import { Button, Layer, NavLink } from '../../atoms';
import NavDropdown from '../NavDropdown/NavDropdown';
import logo from './../../../assets/images/logo-monogram.png';
import MobileNavigation from './MobileNavigation';
import NotificationPopover from './NotificationPopover';

const LogoutIcon = ({ fill, ...props }: React.SVGAttributes<SVGElement>) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 3.49691e-07C1.45 2.53526e-07 0.979003 0.195667 0.587003 0.587C0.19567 0.979 2.89369e-06 1.45 2.79753e-06 2L3.49691e-07 16C2.53526e-07 16.55 0.195667 17.021 0.587 17.413C0.979 17.8043 1.45 18 2 18L9 18L9 16L2 16L2 2L9 2L9 1.57361e-06L2 3.49691e-07ZM13 4L11.625 5.45L14.175 8L6 8L6 10L14.175 10L11.625 12.55L13 14L18 9L13 4Z"
        fill={fill || '#1C1C1C'}
      />
    </svg>
  );
};

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
      } ${className} z-30`}
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
    {
      text: 'Ideaspace',
      href: '/ideaspace',
      hasUnderline: true,
    },
    {
      text: 'Submit an idea',
      href: '/ideaspace/submit',
    },
    {
      text: 'Help existing idea',
      href: '/ideaspace/browse',
    },
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
];

// type NavigationProps = VariantProps<typeof NavigationStyles>;

const Navigation = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = React.useState(false);
  const { $wrapper, $logoContainer } = NavigationStyles();
  const { userData, isAuthenticated } = useUserDataContext();

  return (
    <Layer hasRainbowBottom type="dark">
      <nav className={$wrapper()}>
        <Link href="/">
          <a href="/" className={$logoContainer()}>
            <img className="w-10" src={logo} alt="logo"></img>
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
          </div>
        ) : (
          <div className="hidden text-white lg:flex lg:items-center lg:gap-4">
            <NotificationPopover />

            <img
              width="36"
              height="33"
              src={userData.profilePictureUrl}
              alt="Profile avatar"
              style={{ borderRadius: '50%' }}
            />
            <NavDropdown
              title={`Hi ${userData.name}`}
              links={[
                ...accountOptions,
                {
                  text: (
                    <div className="flex gap-1">
                      <LogoutIcon fill="white" />
                      <span>logout</span>
                    </div>
                  ),
                  onClick: Logout,
                  as: 'button',
                },
              ]}
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
          setIsSidebarExpanded={setIsSidebarExpanded}
        />
      </nav>
    </Layer>
  );
};

Navigation.displayName = 'Navigation';
export default Navigation;

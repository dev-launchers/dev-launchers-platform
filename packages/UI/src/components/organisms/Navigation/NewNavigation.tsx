import Link from 'next/link';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { useUserDataContext } from '../../../context/UserDataContext';
import Logout from '../../../utils/Logout';
import { Button, NavLink, Typography } from '../../atoms';
import NavDropdown from '../NavDropdown/NavDropdown';
import logo from './../../../assets/images/logo-monogram.png';

const HamburgerButton = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <button
      className={`tham tham-e-squeeze tham-w-10 ${
        !open || 'tham-active'
      } ${className}`}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="tham-box">
        <div className="tham-inner bg-white" />
      </div>
    </button>
  );
};

// TODO: Use fonts from figma
const NavigationStyles = tv(
  {
    slots: {
      $wrapper: 'flex justify-between items-center px-8 h-[100px] bg-[#1C1C1C]',
      $logoContainer: 'flex gap-4 items-center text-white',
      $linksContainer: '',
      $actionsContainer: '',
    },
    variants: {},
  }
  // { responsiveVariants: ['sm', 'md'] }
);

const links = {
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

type NavigationProps = VariantProps<typeof NavigationStyles>;

const Navigation = ({}: NavigationProps) => {
  const { $wrapper, $actionsContainer, $linksContainer, $logoContainer } =
    NavigationStyles();
  const { setUserData, isAuthenticated } = useUserDataContext();
  const userData = {
    id: 12,
    name: 'string',
    username: 'string',
    email: 'string',
    bio: 'string',
    profilePictureUrl:
      'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
  };

  return (
    <nav className={$wrapper()}>
      <div className={$logoContainer()}>
        <img className="w-10" src={logo.src} alt="logo"></img>
        <span className="hidden md:inline-block">Dev Launchers</span>
      </div>
      <ul>
        <div className="hidden lg:flex lg:gap-12 lg:items-baseline">
          {Object.entries(links).map(([name, href], i) => {
            if (Array.isArray(href))
              return <NavDropdown title={name} links={href} />;
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
      {false ? (
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
        <div className="hidden text-white lg:flex lg:gap-4 lg:items-center">
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
              { text: 'my profile', href: 'https://google.com' },
              {
                text: 'my ideas dashboard',
                href: 'https://google.com',
                hasUnderline: true,
              },
              {
                text: 'Log out',
                href: 'https://google.com',
              },
            ]}
          />
        </div>
      )}
      <HamburgerButton className="lg:hidden" />
    </nav>
  );
};

Navigation.displayName = 'Navigation';
export default Navigation;

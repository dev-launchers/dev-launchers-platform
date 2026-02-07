import { ChevronDown, Menu, X, User, LogOut, Users } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import type MobileNavigationDropdownItem from 'types/MobileNavigationDropdownItem';
import logo from '../../../assets/images/logo-monogram.png';
import { useUserDataContext } from '../../../context/UserDataContext';
import Logout from '../../../utils/Logout';
import NotificationPopover from './NotificationPopover';

// Centralized styles
const styles = {
  // Navigation styles
  nav: 'sticky relative top-0 flex h-16 items-center justify-between bg-black px-4 md:px-8 z-50 text-lg sm:text-sm',
  navItem:
    'cursor-pointer text-gray-400 font-normal transition-all duration-200 hover:text-white hover:font-semibold active:text-white active:font-semibold',

  // Logo styles
  logoContainer: 'flex items-center gap-4',
  logoLink: 'flex items-center gap-3 cursor-pointer',
  logoImage: 'h-8 w-8',
  logoText: 'text-white font-semibold hidden md:block',

  // Button styles
  buttonPrimary:
    'rounded-lg bg-[#52287A] border border-[#996FC3] px-6 py-2 text-sm font-medium text-white hover:bg-purple-700',
  buttonSecondary:
    'rounded-lg border border-purple-600 bg-transparent px-6 py-2 text-sm font-medium text-white hover:bg-purple-600/10',

  // Dropdown styles
  dropdownContainer: 'flex flex-row items-center ',
  dropdownTrigger:
    'text-gray-300 font-normal transition-all duration-200 hover:text-white hover:text-white hover:font-semibold flex items-center gap-2',
  dropdownContent: 'absolute top-8 left-0 w-full border-t border-gray-800 mt-8',
  dropdownItem:
    'cursor-pointer block rounded-lg bg-[#1C1C1C] p-6 transition-colors hover:bg-gray-800',
  dropdownGrid:
    'grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:w-[900px] bg-black p-4 mt-2 mx-auto rounded-xl',

  // Mobile menu styles
  mobileMenu:
    'fixed inset-y-0 right-0 z-50 w-64 transform bg-[#1C1C1C] p-6 shadow-lg transition-transform duration-300 ease-in-out lg:hidden',
  mobileMenuItem: 'block py-0 text-gray-300 hover:text-white cursor-pointer',

  // Profile styles
  profileContainer: 'flex items-center gap-2 text-white',
  profileImage: 'h-8 w-8 rounded-full',
  profileDropdown:
    'absolute right-8 top-full mt-2 w-64 rounded-lg bg-[#1C1C1C] py-2 shadow-xl',
  profileMenuItem:
    'flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-gray-700',

  // Icon styles
  icon: 'h-5 w-5 text-white',
  chevron: 'h-4 w-4 transform transition-transform',

  // Layout styles
  desktopNav: 'hidden flex-1 items-center justify-center gap-8 lg:flex',
  mobileToggle: 'text-white lg:hidden',
};
const projectItems = [
  {
    title: 'Dev Recruit',
    description:
      'Dev Recruit allows current and potential members to easily discover and learn about the projects they can join that aligns with their goals and experience',
    href: '/projects/dev-recruit',
  },
  {
    title: 'IdeaSpace',
    description:
      'A hub where we can make ideas into reality. Our platform allows Dev Launchers users to vocalize their ideas then build them into a project.',
    href: '/projects/DL-IdeaSpace',
  },
  {
    title: 'Universal Design',
    description:
      "The Universal Design team's mission is to ensure consistent, high-quality user experiences across all organization products.",
    href: '/projects/universal-design',
  },
  {
    title: 'Platform',
    description:
      'Provide the underlying internal components required by our cross-functional teams to deliver higher-level services and functionalities.',
    href: '/projects/platform',
  },
  {
    title: 'User Profile',
    description:
      'Crafting a user-friendly profile for our members while facilitating global connections and transforming learning.',
    href: '/projects/user-profile',
  },
  {
    title: 'AI Ally',
    description:
      'Leveraging LLMs to build, streamline and support our platform through automating various aspects of our operations and improving our overall efficiency.',
    href: '/projects/ai-ally',
  },
];

// Helper function to close dropdown on route change
function useCloseOnRouteChange(onClose: () => void) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', onClose);
    router.events.on('hashChangeStart', onClose);

    return () => {
      router.events.off('routeChangeStart', onClose);
      router.events.off('hashChangeStart', onClose);
    };
  }, [router.events, onClose]);
}

interface UserData {
  name: string;
  profilePictureUrl: string;
}

const ProfileDropdown = ({ userData }: { userData: UserData }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLeader, setIsLeader] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const { userData: user, isAuthenticated, isLoading } = useUserDataContext();

  // Close when route OR hash changes
  const close = React.useCallback(() => setIsOpen(false), []);
  useCloseOnRouteChange(close);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (isAuthenticated && user) {
      const isLeader = user.projects?.some((project: any) =>
        project.team?.leaders?.some((l: any) => l.leader?.email === user.email)
      );

      setIsLeader(isLeader);
    } else {
      setIsLeader(false);
    }
  }, [isAuthenticated, user, isLoading]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <div className="mr-6 text-white">
        <NotificationPopover />
      </div>
      <button
        className={styles.profileContainer}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={userData.profilePictureUrl}
          alt="Profile"
          className={styles.profileImage}
        />
        <span>{userData.name}</span>
        <ChevronDown
          className={`${styles.chevron} ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className={styles.profileDropdown}>
          <div className="px-4 py-2">
            <div className={styles.profileContainer}>
              <img
                src={userData.profilePictureUrl}
                alt="Profile"
                className={styles.profileImage}
              />
              <span>{userData.name}</span>
            </div>
          </div>
          <div className="mt-2 border-t border-gray-700">
            <Link href="/users/me">
              <p className={styles.profileMenuItem}>
                <User className={styles.icon} />
                <span className="cursor-pointer">Profile</span>
              </p>
            </Link>
            {isLeader && (
              <Link href="/dev-recruiters/dashboard">
                <p className={styles.profileMenuItem}>
                  <Users className={styles.icon} />
                  <span className="cursor-pointer">Dev-Recruit Dashboard</span>
                </p>
              </Link>
            )}
            <button
              onClick={Logout}
              className={`w-full ${styles.profileMenuItem}`}
            >
              <LogOut className={styles.icon} />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownMenu = ({
  trigger,
  items = projectItems,
}: {
  trigger: React.ReactNode;
  items: typeof projectItems;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close when route OR hash changes
  const close = React.useCallback(() => setIsOpen(false), []);
  useCloseOnRouteChange(close);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <button
        className={styles.dropdownTrigger}
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
        <ChevronDown
          className={`${styles.chevron} ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className={styles.dropdownContent}>
          <div className={styles.dropdownGrid}>
            {items.map((item, index) => (
              <Link key={index} href={item.href}>
                <p className={styles.dropdownItem}>
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface DropdownItem {
  label: string;
  href: string;
}

const MobileDropdown = ({
  title,
  items,
}: {
  title: string;
  items: DropdownItem[];
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close when route OR hash changes
  const close = React.useCallback(() => setIsOpen(false), []);
  useCloseOnRouteChange(close);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef}>
      <button
        className={styles.dropdownTrigger}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown
          className={`${styles.chevron} ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div className={`mt-2 space-y-2 pl-4 ${isOpen ? 'block' : 'hidden'}`}>
        {items.map((item: MobileNavigationDropdownItem, index: number) => (
          <Link key={index} href={item.href}>
            <p className={styles.mobileMenuItem}>{item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { userData, isAuthenticated } = useUserDataContext();

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <p className={styles.logoLink}>
            <img
              src={logo}
              alt="Dev Launchers Logo"
              className={styles.logoImage}
            />
            <span className={styles.logoText}>Dev Launchers</span>
          </p>
        </Link>
      </div>

      <div className={styles.desktopNav}>
        <DropdownMenu
          trigger="About Us"
          items={[
            {
              title: 'About US',
              description: 'Our story & mission.',
              href: '/about',
            },
            {
              title: 'Our Mentors and Instructor Team',
              description:
                'Our mentors lead instruction by guiding members through real projects and assignments aligned to their Product Team and Department.',
              href: '/our-mentors-and-instructor-team',
            },
            {
              title: 'How We Work',
              description:
                'Remote, mentor-led, product teams shipping real features in 4-week sprints—here’s our playbook.',
              href: '/how-we-work',
            },
            {
              title: 'Our Projects',
              description:
                'We believe in learning by doing—inside a collaborative, supportive community. Explore the live products our members are building.',
              href: '/our-projects',
            },
            {
              title: 'Admission & Tuition',
              description:
                'Who can join, how placement works, time expectations.',
              href: '/admissions',
            },
            {
              title: 'Curriculum',
              description:
                'Learn through collaboration—mentor-led sessions, async work, and real projects with feedback tailored to your goals.',
              href: '/curriculum',
            },
          ]}
        />
        <DropdownMenu
          trigger="Collaborate"
          items={[
            {
              title: 'Collaborate with Us',
              description:
                'Learn about our community and how we can elevate your tech career. Launch into our orbit where your skills create real impact through collaboration.',
              href: '/collaborate',
            },
            {
              title: 'Join Team',
              description:
                'Join a team to collaborate, share ideas, and work towards shared goals. Build connections, foster creativity, and make an impact together!',
              href: '/join',
            },
            {
              title: 'Dream with IdeaSpace',
              description:
                'A hub where we can make ideas into reality. Our platform allows Dev Launchers users to vocalize their ideas then build them into a project.',
              href: '/ideaspace',
            },
            {
              title: 'Partner with Us',
              description:
                'Join us in shaping the future of technology by partnering with Dev Launchers. Discover how together we can drive innovation, support education, and build impactful projects.',
              href: '/support-us#partner',
            },
          ]}
        />

        <Link href="/resources">
          <p className={styles.navItem}>Resources</p>
        </Link>
        <Link href="/support-us">
          <p className={styles.navItem}>Support Us</p>
        </Link>
      </div>
      <div className="hidden items-center gap-4 lg:flex">
        {!isAuthenticated ? (
          <>
            <button
              onClick={() =>
                (window.location.href = `${process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL}?redirectURL=${process.env.NEXT_PUBLIC_FRONT_END_URL}/users/me`)
              }
              className={styles.buttonSecondary}
            >
              Create Account
            </button>
            <button
              onClick={() =>
                (window.location.href = `${process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL}?redirectURL=${process.env.NEXT_PUBLIC_FRONT_END_URL}/users/me`)
              }
              className={styles.buttonPrimary}
            >
              Sign In
            </button>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <ProfileDropdown userData={userData} />
          </div>
        )}
      </div>

      <div className={styles.mobileToggle + ' flex gap-6'}>
        {isAuthenticated && <NotificationPopover />}
        <button
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={styles.icon} />
          ) : (
            <Menu className={styles.icon} />
          )}
        </button>
      </div>

      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X className={styles.icon} />
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <MobileDropdown
            title="About Us"
            items={[
              { label: 'About Us', href: '/about' },
              {
                label: 'Our Mentors and Instructor Team',
                href: '/our-mentors-and-instructor-team',
              },
              { label: 'How We Work', href: '/how-we-work' },
              { label: 'Our Projects', href: '/our-projects' },
              { label: 'Admission & Tuition', href: '/admissions' },
              { label: 'Curriculum', href: '/curriculum' },
            ]}
          />
          <MobileDropdown
            title="Collaborate"
            items={[
              { label: 'Collaborate with Us', href: '/collaborate' },
              { label: 'Join Team', href: '/join' },
              { label: 'Dream with IdeaSpace', href: '/ideaspace' },
              { label: 'Partner with Us', href: '/support-us#partner' },
            ]}
          />
          <Link href="/resources">
            <p className={styles.mobileMenuItem}>Resources</p>
          </Link>
          <Link href="/support-us">
            <p className={styles.mobileMenuItem}>Support Us</p>
          </Link>

          {!isAuthenticated ? (
            <div className="mt-4 space-y-4">
              <button
                onClick={() =>
                  (window.location.href = `${process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL}?redirectURL=${process.env.NEXT_PUBLIC_FRONT_END_URL}/users/me`)
                }
                className={styles.buttonSecondary}
              >
                Create Account
              </button>
              <button
                onClick={() =>
                  (window.location.href = `${process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL}?redirectURL=${process.env.NEXT_PUBLIC_FRONT_END_URL}/users/me`)
                }
                className={styles.buttonPrimary}
              >
                Sign In
              </button>
            </div>
          ) : (
            <div className="mt-4 space-y-2">
              <div className={styles.profileContainer}>
                <img
                  src={userData.profilePictureUrl}
                  alt="Profile"
                  className={styles.profileImage}
                />
                <span>{userData.name}</span>
              </div>
              <Link href="/users/me">
                <p className={styles.profileMenuItem}>
                  <User className={styles.icon} />
                  <span>Profile</span>
                </p>
              </Link>
              <button
                onClick={Logout}
                className={`w-full ${styles.profileMenuItem}`}
              >
                <LogOut className={styles.icon} />
                <span>Log Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

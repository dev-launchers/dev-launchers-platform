import React from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  Menu,
  X,
  Bell,
  User,
  Settings,
  LogOut,
  Lightbulb,
} from 'lucide-react';
import logo from '../../../assets/images/logo-monogram.png';
import { useUserDataContext } from '../../../context/UserDataContext';
import Logout from '../../../utils/Logout';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { userData, isAuthenticated } = useUserDataContext();
  const notificationCount = 5; // This should come from your notification system

  return (
    <nav className="relative flex h-16 items-center justify-between bg-black px-4 md:px-8 z-50 text-lg sm:text-sm">
      <div className="flex items-center gap-4">
        <Link href="/">
          <a className="flex items-center gap-3">
            <img src={logo} alt="Dev Launchers Logo" className="h-8 w-8" />
            <span className="text-white font-semibold hidden md:block">
              Dev Launchers
            </span>
          </a>
        </Link>
      </div>

      <div className="hidden flex-1 items-center justify-center gap-8 lg:flex">
        <DropdownMenu
          trigger="Our Projects"
          items={[
            { label: 'Project 1', href: '/projects/1' },
            { label: 'Project 2', href: '/projects/2' },
          ]}
        />
        <DropdownMenu
          trigger="Collaborate"
          items={[
            { label: 'Join Team', href: '/collaborate/join' },
            { label: 'Open Positions', href: '/collaborate/positions' },
          ]}
        />
        <Link href="/about">
          <a className="text-gray-300 hover:text-white">About Us</a>
        </Link>
        <Link href="/resources">
          <a className="text-gray-300 hover:text-white">Resources</a>
        </Link>
        <Link href="/support-us">
          <a className="text-gray-300 hover:text-white">Donate</a>
        </Link>
      </div>

      <div className="hidden items-center gap-4 lg:flex">
        {!isAuthenticated ? (
          <>
            <button
              onClick={() =>
                (window.location.href = `${process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL}?redirectURL=${process.env.NEXT_PUBLIC_FRONT_END_URL}/users/me`)
              }
              className="rounded-lg border border-purple-600 bg-transparent px-6 py-2 text-sm font-medium text-white hover:bg-purple-600/10"
            >
              Create Account
            </button>
            <button
              onClick={() =>
                (window.location.href = `${process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL}?redirectURL=${process.env.NEXT_PUBLIC_FRONT_END_URL}/users/me`)
              }
              className="rounded-lg bg-[#52287A] border border-[#996FC3] px-6 py-2 text-sm font-medium text-white hover:bg-purple-700"
            >
              Sign In
            </button>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <ProfileDropdown
              userData={userData}
              notificationCount={notificationCount}
            />
          </div>
        )}
      </div>

      <button
        className="text-white lg:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 transform bg-[#1C1C1C] p-6 shadow-lg transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X className="h-6 w-6 text-white" />
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <MobileDropdown
            title="Our Projects"
            items={[
              { label: 'Project 1', href: '/projects/1' },
              { label: 'Project 2', href: '/projects/2' },
            ]}
          />
          <MobileDropdown
            title="Collaborate"
            items={[
              { label: 'Join Team', href: '/collaborate/join' },
              { label: 'Open Positions', href: '/collaborate/positions' },
            ]}
          />
          <Link href="/about">
            <a className="block py-2 text-gray-300 hover:text-white">
              About Us
            </a>
          </Link>
          <Link href="/resources">
            <a className="block py-2 text-gray-300 hover:text-white">
              Resources
            </a>
          </Link>
          <Link href="/donate">
            <a className="block py-2 text-gray-300 hover:text-white">Donate</a>
          </Link>

          {isAuthenticated ? (
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 py-2 text-white">
                <img
                  src={userData.profilePictureUrl}
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
                <span>{userData.name}</span>
              </div>
              <Link href="/notifications">
                <a className="flex items-center gap-2 py-2 text-gray-300 hover:text-white">
                  <Bell className="h-5 w-5" />
                  <span>Notifications</span>
                  {notificationCount > 0 && (
                    <span className="ml-2 rounded-full bg-red-500 px-2 py-0.5 text-xs">
                      {notificationCount}
                    </span>
                  )}
                </a>
              </Link>
              <Link href="//users/me">
                <a className="flex items-center gap-2 py-2 text-gray-300 hover:text-white">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </a>
              </Link>
              <Link href="/dashboard">
                <a className="flex items-center gap-2 py-2 text-gray-300 hover:text-white">
                  <Lightbulb className="h-5 w-5" />
                  <span>Idea Dashboard</span>
                </a>
              </Link>
              <Link href="/settings">
                <a className="flex items-center gap-2 py-2 text-gray-300 hover:text-white">
                  <Settings className="h-5 w-5" />
                  <span>Account Settings</span>
                </a>
              </Link>
              <button
                onClick={Logout}
                className="flex w-full items-center gap-2 py-2 text-gray-300 hover:text-white"
              >
                <LogOut className="h-5 w-5" />
                <span>Log Out</span>
              </button>
            </div>
          ) : (
            <div className="mt-4 space-y-4">
              <button
                onClick={() =>
                  (window.location.href = `${process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL}?redirectURL=${process.env.NEXT_PUBLIC_FRONT_END_URL}/users/me`)
                }
                className="w-full rounded-lg border border-purple-600 bg-transparent px-6 py-2 font-medium text-white hover:bg-purple-600/10"
              >
                Create Account
              </button>
              <button
                onClick={() =>
                  (window.location.href = `${process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL}?redirectURL=${process.env.NEXT_PUBLIC_FRONT_END_URL}/users/me`)
                }
                className="w-full rounded-lg bg-[#52287A] border border-[#996FC3] px-6 py-2 text-sm font-medium text-white hover:bg-purple-700"
              >
                Sign In
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const ProfileDropdown = ({ userData, notificationCount }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={userData.profilePictureUrl}
          alt="Profile"
          className="h-8 w-8 rounded-full"
        />
        <span>{userData.name}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 rounded-lg bg-[#1C1C1C] py-2 shadow-xl">
          <div className="px-4 py-2">
            <div className="flex items-center gap-2 text-white">
              <img
                src={userData.profilePictureUrl}
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
              <span>{userData.name}</span>
            </div>
          </div>
          <div className="mt-2 border-t border-gray-700">
            <Link href="/notifications">
              <a className="flex items-center justify-between px-4 py-2 text-gray-300 hover:bg-gray-800">
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  <span>Notifications</span>
                </div>
                {notificationCount > 0 && (
                  <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs">
                    {notificationCount}
                  </span>
                )}
              </a>
            </Link>
            <Link href="/users/me">
              <a className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-gray-800">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </a>
            </Link>
            <Link href="/dashboard">
              <a className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-gray-800">
                <Lightbulb className="h-5 w-5" />
                <span>Idea Dashboard</span>
              </a>
            </Link>
            <Link href="/settings">
              <a className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-gray-800">
                <Settings className="h-5 w-5" />
                <span>Account Settings</span>
              </a>
            </Link>
            <button
              onClick={Logout}
              className="flex w-full items-center gap-2 px-4 py-2 text-gray-300 hover:bg-gray-800"
            >
              <LogOut className="h-5 w-5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownMenu = ({ trigger, items }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-1 text-gray-300 hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
        <ChevronDown
          className={`h-4 w-4 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-lg bg-black p-6 shadow-xl">
          <div className="grid grid-cols-2 gap-4 w-[900px]">
            {projectItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <a className="block rounded-lg bg-[#1C1C1C] p-6 transition-colors hover:bg-gray-800">
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MobileDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
        className="flex w-full items-center justify-between text-gray-300 hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div className={`mt-2 space-y-2 pl-4 ${isOpen ? 'block' : 'hidden'}`}>
        {items.map((item, index) => (
          <Link key={index} href={item.href}>
            <a className="block py-2 text-sm text-gray-300 hover:text-white">
              {item.label}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;

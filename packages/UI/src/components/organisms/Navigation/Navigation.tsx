import React from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../../../assets/images/logo-monogram.png';
const Navigation = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="relative flex h-20 items-center justify-between bg-black px-8">
      <div className="flex items-center gap-4">
        <Link href="/">
          <a className="flex items-center gap-3 text-white">
            <div className="h-12 w-12 rounded-full bg-white/10 p-1">
              <img
                src={logo}
                alt="Dev Launchers Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <h2 className="text-lg font-semibold">Dev Launchers</h2>
          </a>
        </Link>
      </div>

      <div className="hidden text-sm flex-1 items-center justify-center gap-8 lg:flex">
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
        <Link href="/donate">
          <a className="text-gray-300 hover:text-white">Donate</a>
        </Link>
      </div>

      <div className="hidden items-center gap-4 lg:flex">
        {!isAuthenticated ? (
          <>
            <button
              className="rounded-lg bg-[#52287A] border border-[#996FC3] px-6 py-2 text-sm font-medium text-white hover:bg-purple-700"
              onClick={() => setIsAuthenticated(true)}
            >
              Sign In
            </button>
            <button className="rounded-lg border border-purple-600 bg-transparent px-6 py-2 text-sm font-medium text-white hover:bg-purple-600/10">
              Create Account
            </button>
          </>
        ) : (
          <button
            className="rounded-lg bg-purple-600 px-6 py-2 text-sm font-medium text-white hover:bg-purple-700"
            onClick={() => setIsAuthenticated(false)}
          >
            Sign Out
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 transform bg-black p-8 shadow-lg text-sm transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6">
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
            <a className="text-gray-300 hover:text-white">About Us</a>
          </Link>
          <Link href="/resources">
            <a className="text-gray-300 hover:text-white">Resources</a>
          </Link>
          <Link href="/donate">
            <a className="text-gray-300 hover:text-white">Donate</a>
          </Link>

          <div className="mt-6 flex flex-col gap-4">
            {!isAuthenticated ? (
              <>
                <button
                  className="rounded-lg bg-purple-600 px-6 py-2 text-sm font-medium text-white hover:bg-purple-700"
                  onClick={() => setIsAuthenticated(true)}
                >
                  Sign In
                </button>
                <button className="rounded-lg border border-purple-600 bg-transparent px-6 py-2 text-sm font-medium text-white hover:bg-purple-600/10">
                  Create Account
                </button>
              </>
            ) : (
              <button
                className="rounded-lg bg-purple-600 px-6 py-2 text-sm font-medium text-white hover:bg-purple-700"
                onClick={() => setIsAuthenticated(false)}
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const DropdownMenu = ({ trigger, items }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 text-gray-300 hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-48 rounded-lg bg-black/95 py-2 shadow-xl">
          {items.map((item, index) => (
            <Link key={index} href={item.href}>
              <a className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white">
                {item.label}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
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

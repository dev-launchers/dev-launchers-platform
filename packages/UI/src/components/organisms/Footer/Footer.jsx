import { Github, Linkedin } from 'lucide-react';
import logo from '../../../assets/images/logo-monogram.png';

const Footer = () => {
  return (
    <footer className="flex flex-col flex-wrap bg-gray-900 text-gray-300">
      <div className="mx-auto flex max-w-7xl flex-col items-end justify-between gap-16 border-t border-gray-700  px-6 py-8 md:flex-row">
        <div className="flex-1 rounded-lg">
          <div>
            <img src={logo} alt="Dev Launchers Logo" className="h-10 w-10" />
            <h2 className="whitespace-nowrap text-xl font-semibold text-white">
              Dev Launchers
            </h2>
          </div>
          <p className="max-w-3xl  text-sm text-gray-500">
            At Dev Launchers we bridge opportunity gaps in the technology
            industry through education and collaboration. Dev Launchers is a
            501(c)(3) nonprofit organization.
          </p>
        </div>

        <div className=" flex flex-1 items-center rounded-lg">
          <blockquote className="italic text-gray-500">
            "The technology you use impresses no one. The experience you create
            with it is everything." -{' '}
            <span className="font-bold">Sean Gerety</span>
          </blockquote>
        </div>
      </div>

      <div className="border-t border-gray-700 bg-black">
        <div className="mx-auto flex max-w-7xl flex-row flex-wrap items-start justify-between px-6 pb-10 pt-6">
          <div className="flex flex-col flex-wrap place-items-start space-x-4 text-sm md:flex-row">
            <span className="py-2">© 2025 Dev Launchers, Inc.</span>
            <a
              href="mailto:contact@devlaunchers.com"
              className=" py-2 text-purple-400 hover:text-purple-500 hover:underline md:min-w-0"
            >
              contact@devlaunchers.com
            </a>
            <a
              href="page/terms-and-conditions"
              className=" py-2 text-purple-400 hover:text-purple-500 hover:underline md:min-w-0"
            >
              Terms of Service
            </a>
            <a
              href="page/privacy-policy"
              className=" py-2 text-purple-400 hover:text-purple-500 hover:underline md:min-w-0"
            >
              Privacy Policy
            </a>
          </div>
          <div className="mt-4 flex gap-4 space-x-4 px-4 md:mt-0">
            <a
              href="https://www.linkedin.com/company/devlaunchers"
              className="text-purple-400 hover:text-purple-500"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/dev-launchers/dev-launchers-platform"
              className="text-purple-400 hover:text-purple-500"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Github, Linkedin } from 'lucide-react';
import logo from '../../../assets/images/logo-monogram.png';

const Footer = () => {
  return (
    <footer className="flex flex-col bg-gray-900 text-gray-300">
      <div className="border-t border-gray-700 mx-auto px-16 py-8 flex flex-col md:flex-row items-end justify-between gap-16">
        <div className=" flex-1 rounded-lg">
          <div>
            <img src={logo} alt="Dev Launchers Logo" className="h-10 w-10" />
            <h2 className="text-xl font-semibold text-white whitespace-nowrap">
              Dev Launchers
            </h2>
          </div>
          <p className="max-w-3xl  text-sm text-gray-500">
            At Dev Launchers we bridge opportunity gaps in the technology
            industry through education and collaboration. Dev Launchers is a
            501(c)(3) nonprofit organization.
          </p>
        </div>

        <div className=" flex flex-1 align-center items-center rounded-lg">
          <blockquote className="text-gray-500 italic">
            "The technology you use impresses no one. The experience you create
            with it is everything." -{' '}
            <span className="text-bold">Sean Gerety</span>
          </blockquote>
        </div>
      </div>

      <div className="border-t border-gray-700 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-4 text-sm">
            <span>© 2025 Dev Launchers, Inc.</span>
            <a
              href="mailto:contact@devlaunchers.com"
              className="hover:underline text-purple-400 hover:text-purple-500"
            >
              contact@devlaunchers.com
            </a>
            <a
              href="page/terms-and-conditions"
              className="hover:underline text-purple-400 hover:text-purple-500"
            >
              Terms of Service
            </a>
            <a
              href="page/privacy-policy"
              className="hover:underline text-purple-400 hover:text-purple-500"
            >
              Privacy Policy
            </a>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="www.linkedin.com/company/devlaunchers/"
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

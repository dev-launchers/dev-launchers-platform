import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from 'lucide-react';
import logo from '../../../assets/images/logo-monogram.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="flex justify-between text-base py-4 px-4 sm:px-32 bg-black border-t-2 border-gray-900">
        <a href="#" className="hover:underline text-gray-300">
          CREATE
        </a>
        <a href="#" className="hover:underline text-gray-300">
          LEARN
        </a>
        <a href="#" className="hover:underline text-gray-300">
          DREAM
        </a>
        <a href="#" className="hover:underline text-gray-300">
          SUPPORT US
        </a>
        <a href="#" className="hover:underline text-gray-300">
          JOIN
        </a>
      </div>

      <div className="mx-auto px-6 py-12 space-y-8 md:space-y-0 md:flex md:items-center md:justify-between sm:px-32 bg-[#00000030]">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Dev Launchers Logo" className="h-10 w-10" />
            <h2 className="text-xl font-semibold">Dev Launchers</h2>
          </div>
          <p className="text-sm">
            At Dev Launchers we bridge opportunity gaps in the technology
            industry through education and collaboration. Dev Launchers is a
            501(c)(3) nonprofit organization.
          </p>
        </div>

        {/* Right Section */}
        <div className="space-y-4 md:space-y-0">
          <blockquote className="text-gray-400 italic">
            "The technology you use impresses no one. The experience you create
            with it is everything."
          </blockquote>
          <p className="text-right text-sm">- Sean Gerety</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
          {/* Links */}
          <div className="flex space-x-4 text-sm">
            <a
              href="#"
              className="hover:underline text-purple-400 hover:text-purple-500"
            >
              © 2024 Dev Launchers, Inc.
            </a>
            <a
              href="#"
              className="hover:underline text-purple-400 hover:text-purple-500"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:underline text-purple-400 hover:text-purple-500"
            >
              Privacy Policy
            </a>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-purple-400 hover:text-purple-500">
              <Facebook />
            </a>
            <a href="#" className="text-purple-400 hover:text-purple-500">
              <Twitter />
            </a>
            <a href="#" className="text-purple-400 hover:text-purple-500">
              <Instagram />
            </a>
            <a href="#" className="text-purple-400 hover:text-purple-500">
              <Youtube />
            </a>
            <a href="#" className="text-purple-400 hover:text-purple-500">
              <Linkedin />
            </a>
            <a href="#" className="text-purple-400 hover:text-purple-500">
              <Github />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
    <footer className="flex flex-col bg-gray-900 text-gray-300">
      <div className="border-t border-gray-700 mx-auto px-6 py-8 flex flex-col md:flex-row items-end justify-between gap-16">
        <div className="max-w-12   rounded-lg">
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
        {/* B

        <div className=" bg-teal-900 border-teal-500 border-4 p-6 rounded-lg">
          <nav>
            <div className="flex flex-row  gap-10">
              <div className="min-w-16">
                <h2 className="text-white font-medium text-lg mb-4">
                  About Us
                </h2>
                <ul className="space-y-3">
                  <li className="text-gray-300">Figma Design</li>
                  <li className="text-gray-300">FigJam</li>
                  <li className="text-gray-300">Dev Mode</li>
                  <li className="text-gray-300">Figma Slides</li>
                  <li className="text-gray-300">Release notes</li>
                </ul>
              </div>
              <div>
                <h2 className="text-white font-medium text-lg mb-4">
                  Collaborate
                </h2>
                <ul className="space-y-3">
                  <li className="text-gray-300">Figma Design</li>
                  <li className="text-gray-300">FigJam</li>
                  <li className="text-gray-300">Dev Mode</li>
                  <li className="text-gray-300">Figma Slides</li>
                  <li className="text-gray-300">Release notes</li>
                </ul>
              </div>
              <div>
                <h2 className="text-white font-medium text-lg mb-4">
                  Our Projects
                </h2>
                <ul className="space-y-3">
                  <li className="text-gray-300">Figma Design</li>
                  <li className="text-gray-300">FigJam</li>
                  <li className="text-gray-300">Dev Mode</li>
                  <li className="text-gray-300">Figma Slides</li>
                  <li className="text-gray-300">Release notes</li>
                </ul>
              </div>
              <div>
                <h2 className="text-white font-medium text-lg mb-4">
                  Resources
                </h2>
                <ul className="space-y-3">
                  <li className="text-gray-300">Figma Design</li>
                  <li className="text-gray-300">FigJam</li>
                  <li className="text-gray-300">Dev Mode</li>
                  <li className="text-gray-300">Figma Slides</li>
                  <li className="text-gray-300">Release notes</li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        */}
        <div className=" flex align-center items-center rounded-lg">
          <blockquote className="text-gray-500 italic">
            "The technology you use impresses no one. The experience you create
            with it is everything." -{' '}
            <span className="text-bold">Sean Gerety</span>
          </blockquote>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
          {/* Links */}
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

          {/* Social Media */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/*
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
            */}
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

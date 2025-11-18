import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/Collective Knowledge.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Research Centers', href: '/research-centers' },
    { name: 'Publications', href: '/publications' },
    { name: 'Events', href: '/events' },
  ];

  const programs = [
    { name: 'Internships', href: '/internships' },
    { name: 'Fellows Program', href: '/fellowship' },
    { name: 'Student Calendar', href: '/student-calendar' },
    { name: 'Achievements', href: '/achievements' },
  ];

  const about = [
    { name: 'Director & Founder', href: '/director-founder' },
    { name: 'Co-director & Co-founder', href: '/co-director-co-founder' },
    { name: 'People', href: '/people' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src={logoImg} alt="Collective Knowledge" className="h-10 w-10 rounded-md object-cover" />
              <span className="ml-3 text-xl font-semibold text-white">Collective Knowledge</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Advancing knowledge through innovative research, fostering academic excellence, 
              and building bridges between theory and practice in our field.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {/* Twitter */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 ..."/>
                </svg>
              </a>
              {/* Other icons... */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    to={program.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {about.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} Collective Knowledge. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

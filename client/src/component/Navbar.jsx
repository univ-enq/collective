import React, { useState } from "react";
import logoImg from "../assets/Collective Knowledge.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigationItems = [
    { name: "Home", href: "/" },
    {
      name: "Acadmics",
      dropdown: [
        { name: "Director & Founder", href: "/director-founder" },
        { name: "Co-director & Co-founder", href: "/co-director-co-founder" },
        { name: "People", href: "/people" },
      ],
    },
    {
      name: "Research",
      dropdown: [
        { name: "Research Centers", href: "/research-centers" },
        { name: "Research Projects", href: "/research-projects" },
        { name: "Publications", href: "/publications" },
      ],
    },
    {
      name: "Programs",
      dropdown: [
        { name: "Internships", href: "/internships" },
        { name: "Fellowship", href: "/fellowship" },
        { name: "Student Calendar", href: "/student-calendar" },
      ],
    },
    {
      name: "News & Events",
      dropdown: [
        { name: "Latest News", href: "/latest-news" },
        { name: "Events", href: "/events" },
        { name: "Newsletter", href: "/newsletter" },
        { name: "Achievements", href: "/achievements" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <img
                src={logoImg}
                alt="Collective Knowledge"
                className="h-8 w-8 rounded-md object-cover"
              />
              <span className="ml-3 text-xl font-semibold text-white">
                Collective Knowledge
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item, index) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200"
                      >
                        {item.name}
                        <svg
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className="absolute left-0 mt-2 w-56 bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                        style={{
                          transformOrigin: 'top',
                          transition: 'opacity 200ms ease, transform 220ms ease',
                          opacity: activeDropdown === index ? 1 : 0,
                          transform: activeDropdown === index ? 'translateY(0) scale(1)' : 'translateY(-6px) scale(0.98)',
                          pointerEvents: activeDropdown === index ? 'auto' : 'none',
                        }}
                      >
                        <div className="py-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation (animated expand/collapse) */}
        <div className="md:hidden">
          <div
            className="px-2 pt-2 pb-3 sm:px-3 bg-gray-800 rounded-lg mt-2 overflow-hidden"
            style={{
              maxHeight: isOpen ? 1000 : 0,
              opacity: isOpen ? 1 : 0,
              transition: 'max-height 320ms cubic-bezier(.2,.8,.2,1), opacity 200ms ease',
            }}
            aria-hidden={!isOpen}
          >
            {navigationItems.map((item, index) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                    >
                      {item.name}
                    </button>
                    <div
                      className="pl-4"
                      style={{
                        maxHeight: activeDropdown === index ? 800 : 0,
                        opacity: activeDropdown === index ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'max-height 260ms cubic-bezier(.2,.8,.2,1), opacity 200ms ease',
                      }}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

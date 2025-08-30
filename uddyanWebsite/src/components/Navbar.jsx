import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#007FFF] px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="/uddyanLogo.jpeg" 
            alt="Uddyan Logo"
            className="h-12 w-12 object-contain"
          />
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="text-[#FFD700] md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>

        {/* Menu Section */}
        <ul
          className={`flex-col md:flex-row md:flex md:space-x-14 text-[#FFD700] font-semibold text-lg absolute md:static bg-[#007FFF] md:bg-transparent left-0 w-full md:w-auto transition-all duration-300 ease-in-out md:translate-y-0 p-4 md:p-0 shadow-md md:shadow-none z-20 ${
            isOpen ? "top-16 flex" : "top-[-500px] hidden md:flex"
          }`}
        >
          <li>
            <Link
              to="/"
              className="hover:text-white cursor-pointer transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-white cursor-pointer transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-white cursor-pointer transition-colors"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/CoursesPage"
              className="hover:text-white cursor-pointer transition-colors"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="hover:text-white cursor-pointer transition-colors"
            >
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

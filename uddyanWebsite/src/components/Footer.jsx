import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#007FFF] text-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Logo and About */}
        <div className="text-center md:text-left space-y-2">
          <div className="flex justify-center md:justify-start items-center space-x-2 mb-2">
            <img
              src="/uddyanLogo.jpeg"
              alt="Uddyan Logo"
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
            />
          </div>
          <p className="text-sm sm:text-md">
            Empowering learners with quality education and resources. Building a brighter future together.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h2 className="text-md sm:text-lg font-semibold text-yellow-400 mb-2 sm:mb-3">Quick Links</h2>
          <ul className="space-y-1 sm:space-y-2 text-sm sm:text-md">
            <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300">About Us</Link></li>
            <li><Link to="/CoursesPage" className="hover:text-yellow-300">Courses</Link></li>
            <li><Link to="/gallery" className="hover:text-yellow-300">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left text-sm sm:text-md space-y-1">
          <h2 className="text-md sm:text-lg font-semibold text-yellow-400 mb-2 sm:mb-3">Contact</h2>
          <p>108 Satyamev Royal-3, Nr. Apollo International School, Chandkheda, Ahmedabad</p>
          <p>Email: uddyan.stemlab@gmail.com</p>
          <p>Phone: +91 9909008781, 8141528579</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

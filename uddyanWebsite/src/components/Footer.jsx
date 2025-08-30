import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#007FFF] text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and About */}
        <div>
          <div className="flex items-center space-x-2">
                <img
                    src="/uddyanLogo.jpeg"
                    alt="Uddyan Logo"
                    className="h-20 w-20 object-contain"
                />
            </div>
          <p className="text-md">
            Empowering learners with quality education and resources. Building a
            brighter future together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-yellow-400 mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300">About Us</Link></li>
            <li><Link to="/CoursesPage" className="hover:text-yellow-300">Courses</Link></li>
            <li><Link to="/gallery" className="hover:text-yellow-300">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-yellow-400 mb-3">Contact</h2>
          <p className="text-sm">123 Education Street, Knowledge City</p>
          <p className="text-sm">Email: info@example.com</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="border-t border-yellow-400 mt-6 pt-4 text-center text-sm">
        <p>© {new Date().getFullYear()} Your Institute. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

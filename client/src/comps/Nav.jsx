

import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/">
          <img src="/images/logo.png" alt="Logo" className="w-16 rounded-xl" />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/signup"
            className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="text-lg font-semibold text-white bg-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Log In
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;



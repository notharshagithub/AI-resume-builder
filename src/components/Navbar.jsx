"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center"
              onClick={closeMenu}
            >
              <span className="text-indigo-600 font-bold text-xl">
                PrescribeAI
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium ${
                isActive("/")
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/builder"
              className={`px-3 py-2 text-sm font-medium ${
                isActive("/builder")
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              Resume Builder
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-medium ${
                isActive("/about")
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block pl-3 pr-4 py-2 text-base font-medium ${
                isActive("/")
                  ? "text-indigo-600 bg-indigo-50 border-l-4 border-indigo-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/builder"
              className={`block pl-3 pr-4 py-2 text-base font-medium ${
                isActive("/builder")
                  ? "text-indigo-600 bg-indigo-50 border-l-4 border-indigo-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
              }`}
              onClick={closeMenu}
            >
              Resume Builder
            </Link>
            <Link
              to="/about"
              className={`block pl-3 pr-4 py-2 text-base font-medium ${
                isActive("/about")
                  ? "text-indigo-600 bg-indigo-50 border-l-4 border-indigo-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
              }`}
              onClick={closeMenu}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

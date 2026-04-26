"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/30 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="TechCareerAdvisory logo"
              className="h-12 sm:h-14 lg:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            
            <Link
              to="/ai"
              className="text-gray-300 hover:text-white text-sm lg:text-base transition"
            >
              AI Solutions
            </Link>

            <Link
              to="/advisory"
              className="text-gray-300 hover:text-white text-sm lg:text-base transition"
            >
              Advisory
            </Link>

            <Link
              to="/fresher"
              className="text-gray-300 hover:text-white text-sm lg:text-base transition"
            >
              Freshers
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuIsOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuIsOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-4">
            
            <Link
              to="/ai"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm"
            >
              AI Solutions
            </Link>

            <Link
              to="/advisory"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm"
            >
              Advisory
            </Link>

            <Link
              to="/fresher"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm"
            >
              Freshers
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}
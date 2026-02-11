"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="TechCareerAdvisory logo – career positioning and advisory for tech professionals"
              className="h-12 sm:h-14 lg:h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="/about"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              About
            </a>
            <a
              href="/fresher"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Freshers
            </a>
            <a
              href="/experienced"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Experienced
            </a>
            <a
              href="/process"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Process
            </a>
            <a
              href="/apply"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Apply
            </a>
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
          <div className="px-4 py-4 sm:py-6 space-y-3">
            <a
              href="/about"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm"
            >
              About
            </a>
            <a
              href="/fresher"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm"
            >
              Freshers
            </a>
            <a
              href="/experienced"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm"
            >
              Experienced
            </a>
            <a
              href="/process"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm"
            >
              Process
            </a>
            <a
              href="/apply"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm"
            >
              Apply
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

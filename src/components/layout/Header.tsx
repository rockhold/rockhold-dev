"use client";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Résumé", href: "/resume" },
  { label: "Blog", href: "/blog" },
  { label: "Reading", href: "/reading" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-gray-950 text-white shadow-md px-4 py-3 relative">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-lime-400 font-bold text-lg sm:text-xl flex items-center gap-1"
        >
          <span>rockhold.dev&nbsp;&gt;</span>
          <span className="animate-blink w-[1ch] bg-lime-400 ml-1 text-lime-400">
            |
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map(({ label, href }) => {
            const isActive = location.pathname === href;
            return (
              <Link
                key={href}
                to={href}
                className={clsx(
                  "hover:text-lime-400 transition-colors",
                  isActive ? "text-lime-400" : "text-white"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Nav Menu */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <nav className="md:hidden absolute left-0 top-full w-full bg-gray-900 px-4 py-3 shadow-lg z-50">
            <ul className="space-y-3">
              {navItems.map(({ label, href }) => {
                const isActive = location.pathname === href;
                return (
                  <li key={href}>
                    <Link
                      to={href}
                      className={clsx(
                        "block px-2 py-1 rounded hover:text-lime-400 transition-colors",
                        isActive
                          ? "text-lime-400 font-semibold bg-gray-800"
                          : "text-white"
                      )}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

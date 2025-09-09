"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  };

  return (
    <nav className="w-full flex items-center p-4 shadow-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold tracking-wide relative">
      {/* Add subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Portfolio text on the left */}
      <div className="relative z-10 text-lg font-bold">
        <Link href="/" className="hover:opacity-80 transition-opacity text-white drop-shadow-md">
          Portfolio
        </Link>
      </div>

      {/* Everything else slides to the right */}
      <div className="relative z-10 flex items-center space-x-6 ml-auto">
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:opacity-80 transition-opacity hover:underline text-white drop-shadow-md">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:opacity-80 transition-opacity hover:underline text-white drop-shadow-md">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:opacity-80 transition-opacity hover:underline text-white drop-shadow-md">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/skills" className="hover:opacity-80 transition-opacity hover:underline text-white drop-shadow-md">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:opacity-80 transition-opacity hover:underline text-white drop-shadow-md">
              Contact
            </Link>
          </li>
        </ul>
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
          className="ml-4 text-xl hover:opacity-80 transition-opacity text-white drop-shadow-md"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </nav>
  );
}

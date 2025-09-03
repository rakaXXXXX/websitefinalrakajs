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
    <nav className="w-full flex justify-between items-center p-4 shadow-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold tracking-wide">
      <div className="text-lg font-bold">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          Portfolio
        </Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:opacity-80 transition-opacity hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:opacity-80 transition-opacity hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:opacity-80 transition-opacity hover:underline">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/skills" className="hover:opacity-80 transition-opacity hover:underline">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:opacity-80 transition-opacity hover:underline">
            Contact
          </Link>
        </li>
      </ul>
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle Dark Mode"
        className="ml-4 text-xl hover:opacity-80 transition-opacity"
      >
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>
    </nav>
  );
}

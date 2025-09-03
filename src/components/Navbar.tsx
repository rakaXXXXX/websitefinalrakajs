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
    <nav className="w-full flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900 shadow-md text-gray-900 dark:text-white">
      <div className="text-lg font-bold">
        <Link href="/" className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
          Portfolio
        </Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 hover:underline">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/skills" className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 hover:underline">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 hover:underline">
            Contact
          </Link>
        </li>
      </ul>
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle Dark Mode"
        className="ml-4 text-xl text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
      >
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>
    </nav>
  );
}

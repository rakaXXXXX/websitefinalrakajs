"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content on the left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-purple-700 via-pink-600 to-blue-700 bg-clip-text text-transparent tracking-tight drop-shadow-lg"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.3))',
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)'
              }}
            >
            <p>HI GUYS!</p>  
            <p>SAYA RAKA</p>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl font-light mb-8 tracking-wide text-gray-800 dark:text-gray-200"
            >
              <span className="font-semibold text-purple-700 dark:text-purple-300 drop-shadow-sm">Web Developer</span> |{" "}
              <span className="font-semibold text-pink-600 dark:text-pink-300 drop-shadow-sm">UI/UX Enthusiast</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/about"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                About Me
              </Link>
              <Link
                href="/projects"
                className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-center"
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>

          {/* Image on the right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={300}
              height={300}
              className="rounded-full shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

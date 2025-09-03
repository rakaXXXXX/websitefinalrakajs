"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
            <div className="space-y-2">
              <p><strong>Name:</strong> Your Full Name</p>
              <p><strong>School:</strong> Your School Name</p>
              <p><strong>Major:</strong> Computer Science / Web Development</p>
              <p><strong>Location:</strong> Your City, Country</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I started my coding journey with a passion for creating digital experiences.
              What began as curiosity about how websites work has evolved into a deep
              commitment to mastering web development technologies. I love turning ideas
              into functional, beautiful applications that solve real-world problems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              My motivation comes from the endless possibilities in technology and the
              satisfaction of seeing users interact with something I've built. I'm
              constantly learning new technologies and frameworks to stay current in
              this rapidly evolving field.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

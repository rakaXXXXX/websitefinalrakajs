"use client";

import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { FiGithub, FiExternalLink, FiCode, FiEye } from "react-icons/fi";

const projectColors = [
  "from-indigo-700 to-indigo-900",
  "from-emerald-700 to-emerald-900",
  "from-amber-700 to-amber-900",
  "from-rose-700 to-rose-900"
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-700 via-purple-800 to-indigo-900 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-700 dark:border-gray-600">
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${projectColors[index % projectColors.length]}`} />

                {/* Project Content */}
                <div className="p-6 relative">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <div className={`w-full h-full bg-gradient-to-br ${projectColors[index % projectColors.length]} rounded-full transform translate-x-16 -translate-y-16`} />
                  </div>

                  <motion.div
                    className="flex items-center mb-4 relative z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${projectColors[index % projectColors.length]} mr-4 group-hover:shadow-lg transition-shadow duration-300`}>
                      <FiCode className="text-white text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                      {project.name}
                    </h3>
                  </motion.div>

                  <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex flex-col space-y-3 relative z-10">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 group/link"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiGithub className="group-hover/link:rotate-12 transition-transform duration-300" />
                      <span className="font-medium">View Code</span>
                    </motion.a>

                    <motion.a
                      href={project.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center space-x-2 bg-gradient-to-r ${projectColors[index % projectColors.length]} hover:shadow-lg text-white px-4 py-2 rounded-lg transition-all duration-300 group/link`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiEye className="group-hover/link:rotate-12 transition-transform duration-300" />
                      <span className="font-medium">Live Demo</span>
                    </motion.a>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${projectColors[index % projectColors.length]} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl blur-3xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-white">
              More Projects Coming Soon!
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              I'm constantly working on new projects and exploring cutting-edge technologies.
              Check back soon for more exciting developments!
            </p>
            <motion.a
              href="https://github.com/rakaXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub />
              <span>View All on GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

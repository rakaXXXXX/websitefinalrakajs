"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiFirebase, SiFigma } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: <FaHtml5 size={50} color="#B7410E" />, level: 95 },
      { name: "CSS3", icon: <FaCss3Alt size={50} color="#1E40AF" />, level: 90 },
      { name: "JavaScript", icon: <FaJs size={50} color="#D4AF37" />, level: 85 },
      { name: "TypeScript", icon: <SiTypescript size={50} color="#0C4A6E" />, level: 80 },
      { name: "React", icon: <FaReact size={50} color="#0EA5E9" />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs size={50} color="#111827" />, level: 85 },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={50} color="#0E7490" />, level: 88 },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={50} color="#3B7A57" />, level: 75 },
    ]
  },
  {
    title: "Tools & Version Control",
    skills: [
      { name: "Git", icon: <FaGitAlt size={50} color="#B22222" />, level: 85 },
      { name: "GitHub", icon: <FaGithub size={50} color="#0F0F0F" />, level: 90 },
      { name: "Figma", icon: <SiFigma size={50} color="#B03060" />, level: 75 },
    ]
  }
];

export default function Skills() {
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
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
        >
          My Skills 
        </motion.h1>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
                {category.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900 rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300 group-hover:from-orange-50 group-hover:to-red-50 dark:group-hover:from-orange-900 dark:group-hover:to-red-900 border-2 border-transparent group-hover:border-orange-300 dark:group-hover:border-orange-600 relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-400 to-red-400 rounded-full transform translate-x-10 -translate-y-10"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-full transform -translate-x-8 translate-y-8"></div>
                      </div>

                      <motion.div
                        className="flex justify-center mb-4 relative z-10"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        {skill.icon}
                      </motion.div>

                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white relative z-10">
                        {skill.name}
                      </h3>

                      {/* Skill Level Progress Bar */}
                      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 mb-2 relative z-10 shadow-inner">
                        <motion.div
                          className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 h-3 rounded-full shadow-lg"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 + 0.5 }}
                          style={{
                            boxShadow: '0 0 10px rgba(249, 115, 22, 0.5)'
                          }}
                        />
                      </div>

                      <span className="text-sm font-semibold text-orange-600 dark:text-orange-400 relative z-10">
                        {skill.level}% Proficiency
                      </span>

                      {/* Glow Effect on Hover */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-orange-400 to-pink-400 blur-xl"></div>
                    </div>

                    {/* Hover Tooltip */}
                    <motion.div
                      className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
                      initial={{ y: -10 }}
                      whileHover={{ y: 0 }}
                    >
                      {skill.name} - {skill.level}% proficient
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
        </motion.div>
      </motion.div>
    </div>
  );
}
 
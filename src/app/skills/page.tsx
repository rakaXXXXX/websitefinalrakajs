"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={40} color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} color="#1572B6" /> },
  { name: "JavaScript", icon: <FaJs size={40} color="#F7DF1E" /> },
  { name: "React", icon: <FaReact size={40} color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} color="#000000" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#06B6D4" /> },
];

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">My Skills</h1>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 justify-items-center">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center space-y-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {skill.icon}
              <span className="text-center text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

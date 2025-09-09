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
              <p><strong>Name:</strong> Raka Bagus Alif Faza Kaizen</p>
              <p><strong>School:</strong> SMKN 8 MALANG</p>
              <p><strong>Major:</strong> Computer Science / Web Development</p>
              <p><strong>Location:</strong> MALANG, INDONESIA</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
             Saya memulai perjalanan coding saya dengan hasrat untuk menciptakan pengalaman digital.
Yang awalnya hanya rasa ingin tahu tentang cara kerja situs web telah berkembang menjadi komitmen mendalam
untuk menguasai teknologi pengembangan web. Saya senang menuangkan ide
menjadi aplikasi fungsional dan indah yang memecahkan masalah dunia nyata.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Motivasi saya masuk ke jurusan rpl adalah,saya merasa kalau industri dibidang IT akan sangat diperlukan dimasa depan.dan karena perkembangan Artificial intellegent semkain cepat maka kita perlu belajar ilmu yang bisa bersaing dengan AI
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

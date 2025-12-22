import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-8">
      <motion.div 
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Greeting - Handwritten style */}
        <motion.div 
          className="mb-2"
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: -3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span 
            className="text-4xl text-gray-400 inline-block"
            style={{ 
              fontFamily: 'Caveat, cursive',
            }}
          >
            Hi! I'm
          </span>
        </motion.div>

        {/* Main name - Serif */}
        <motion.h1 
          className="text-8xl mb-6 text-gray-900"
          style={{ fontFamily: 'Playfair Display, serif' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Sejal Kautkar
        </motion.h1>

        {/* Role pill - floating white card */}
        <motion.div 
          className="inline-block bg-white px-8 py-3 rounded-full shadow-lg mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-gray-600">
            UI/UX Design Scholar & Intern
          </p>
        </motion.div>

        {/* Bio text */}
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          I'm a UI/UX Design scholar at <span className="text-purple-600">MIT</span> ADT University, Pune. I possess 
          comprehensive command of Figma, Procreate, and Adobe XD, 
          committed to developing intuitive, user-centric digital solutions. 
          Currently a UI/UX & Marketing <span className="text-purple-600">Intern</span> at Dharmik Vibes, shaping 
          digital presence and content strategy. Passionate <span className="text-pink-600">about</span> resolving tangible user 
          challenges.
        </motion.p>

        {/* Resume button */}
        <motion.a 
          href="https://drive.google.com/file/d/1ozv_Mugd-026FcVxi2KTiyJ0-hKXePKo/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors shadow-lg cursor-pointer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
          <ArrowUpRight className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </div>
  );
}
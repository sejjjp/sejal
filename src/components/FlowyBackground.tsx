import React from 'react';
import { motion } from 'motion/react';

export function FlowyBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large flowing gradient orbs */}
      <motion.div
        className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-200/20 via-pink-200/15 to-transparent blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-[-10%] left-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-200/15 via-cyan-200/10 to-transparent blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, -50, 0],
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-violet-200/15 via-purple-200/10 to-transparent blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-[20%] right-[25%] w-[350px] h-[350px] rounded-full bg-gradient-to-bl from-pink-200/15 via-rose-200/10 to-transparent blur-3xl"
        animate={{
          x: [0, -60, 0],
          y: [0, 120, 0],
          scale: [1.1, 1, 1.1],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Smaller ambient orbs */}
      <motion.div
        className="absolute top-[60%] right-[40%] w-[250px] h-[250px] rounded-full bg-gradient-to-br from-indigo-200/10 to-transparent blur-2xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-[30%] right-[15%] w-[300px] h-[300px] rounded-full bg-gradient-to-tl from-teal-200/10 to-transparent blur-2xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 60, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-blue-50/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-50/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent" />
    </div>
  );
}

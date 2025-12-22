import React from "react";
import { motion } from "motion/react";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-purple-50/30" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
        animate={{
          x: [100, 300, 100],
          y: [50, 200, 50],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "10%", right: "10%" }}
      />

      <motion.div
        className="absolute w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
        animate={{
          x: [-100, 100, -100],
          y: [100, -50, 100],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{ bottom: "10%", left: "10%" }}
      />

      <motion.div
        className="absolute w-64 h-64 bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-full blur-3xl"
        animate={{
          x: [200, -100, 200],
          y: [-100, 150, -100],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        style={{ top: "40%", left: "50%" }}
      />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-40"
          animate={{
            x: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Wavy lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <linearGradient
            id="waveGradient1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#e9d5ff", stopOpacity: 0.3 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#fbcfe8", stopOpacity: 0.5 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#e9d5ff", stopOpacity: 0.3 }}
            />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,300 Q250,200 500,300 T1000,300 T1500,300"
          stroke="url(#waveGradient1)"
          strokeWidth="3"
          fill="none"
          animate={{
            d: [
              "M0,300 Q250,200 500,300 T1000,300 T1500,300",
              "M0,350 Q250,250 500,350 T1000,350 T1500,350",
              "M0,300 Q250,200 500,300 T1000,300 T1500,300",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M0,500 Q250,400 500,500 T1000,500 T1500,500"
          stroke="url(#waveGradient1)"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M0,500 Q250,400 500,500 T1000,500 T1500,500",
              "M0,450 Q250,550 500,450 T1000,450 T1500,450",
              "M0,500 Q250,400 500,500 T1000,500 T1500,500",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </svg>

      {/* Rotating shapes */}
      <motion.div
        className="absolute w-32 h-32 border-2 border-purple-200/30 rounded-3xl"
        animate={{
          rotate: 360,
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
          x: {
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          },
          y: {
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        style={{ top: "20%", left: "30%" }}
      />

      <motion.div
        className="absolute w-24 h-24 border-2 border-pink-200/30"
        style={{
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        }}
        animate={{
          rotate: -360,
          x: [0, -80, 0],
          y: [0, 100, 0],
          borderRadius: [
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "70% 30% 30% 70% / 70% 70% 30% 30%",
            "30% 70% 70% 30% / 30% 30% 70% 70%",
          ],
        }}
        transition={{
          rotate: {
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          },
          x: {
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          },
          y: {
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          },
          borderRadius: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        style={{ bottom: "30%", right: "25%" }}
      />
    </div>
  );
}
import React from 'react';
import { motion } from 'motion/react';
import { Eye, Star, Sparkles, Heart, User } from 'lucide-react';
import profileImage from 'figma:asset/9de322454f478694ade66fa8234ab146a46231d6.png';

const floatingAnimation = (duration: number, delay: number, yRange: [number, number], rotation: [number, number]) => ({
  y: yRange,
  rotate: rotation,
  transition: {
    y: {
      duration,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
      delay
    },
    rotate: {
      duration: duration * 1.2,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
      delay: delay + 0.2
    }
  }
});

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Photo Card - Top Center */}
      <motion.div
        className="absolute top-24 left-1/2 -translate-x-1/2 pointer-events-auto cursor-pointer"
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, ...floatingAnimation(3.2, 0.2, [-10, 10], [-2, 2]) }}
        whileHover={{ scale: 1.12, y: 0, rotate: 0, transition: { duration: 0.3 } }}
        style={{ width: '200px' }}
      >
        <div className="bg-white p-4 rounded-2xl shadow-2xl transform rotate-[-3deg] border-4 border-purple-200">
          <div className="relative overflow-hidden rounded-xl mb-3" style={{ aspectRatio: '1' }}>
            <img 
              src={profileImage} 
              alt="Sejal Kautkar"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent" />
          </div>
          <p className="text-center text-gray-900">Sejal Kautkar</p>
          <p className="text-center text-xs text-gray-500 mt-1">UI/UX Designer</p>
        </div>
      </motion.div>

      {/* Top Left - Dark Card (Samsung Iris) */}
      <motion.div
        className="absolute top-32 left-16 pointer-events-auto cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, ...floatingAnimation(3.5, 0, [-12, 12], [-4, 4]) }}
        whileHover={{ scale: 1.1, y: 0, rotate: 0, transition: { duration: 0.3 } }}
        style={{ width: '220px' }}
      >
        <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-2xl relative transform rotate-[-6deg]">
          <div className="flex justify-center mb-4">
            <motion.div 
              className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Eye className="w-8 h-8 text-white" />
            </motion.div>
          </div>
          <h3 className="text-center mb-2">Samsung Iris 2.0</h3>
          <p className="text-center text-sm text-gray-400">AI Project</p>
          
          {/* Sparkle decoration */}
          <motion.div 
            className="absolute -top-3 -right-3"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Sparkles className="w-8 h-8 text-pink-400 fill-pink-400" />
          </motion.div>
        </div>
      </motion.div>

      {/* Top Right - Polaroid Style (Figma Tools) */}
      <motion.div
        className="absolute top-24 right-24 pointer-events-auto cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, ...floatingAnimation(4.2, 0.5, [-8, 15], [-3, 5]) }}
        whileHover={{ scale: 1.08, y: 0, rotate: 0, transition: { duration: 0.3 } }}
        style={{ width: '240px' }}
      >
        <div className="bg-white p-6 rounded-2xl shadow-xl transform rotate-[4deg]">
          {/* Polaroid image area */}
          <motion.div 
            className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-xl p-8 mb-4 flex justify-center items-center gap-4"
            animate={{
              background: [
                'linear-gradient(to bottom right, #ede9fe, #fce7f3, #dbeafe)',
                'linear-gradient(to bottom right, #fce7f3, #dbeafe, #ede9fe)',
                'linear-gradient(to bottom right, #dbeafe, #ede9fe, #fce7f3)',
                'linear-gradient(to bottom right, #ede9fe, #fce7f3, #dbeafe)'
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg"
              animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L4.5 7.5v9L12 24l7.5-7.5v-9L12 0z"/>
              </svg>
            </motion.div>
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-300 rounded-lg shadow-lg"
              animate={{ rotate: [0, -10, 10, 0], y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg"
              animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >
              <span className="text-white text-xs">Xd</span>
            </motion.div>
          </motion.div>
          {/* Polaroid caption */}
          <p className="text-center text-gray-800">Figma, Procreate, Adobe XD</p>
          <p className="text-center text-sm text-gray-500 mt-1">My Stack</p>
        </div>
      </motion.div>

      {/* Middle Left - Heart Card (User-centric) */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 left-8 pointer-events-auto cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, ...floatingAnimation(3.6, 0.4, [-12, 12], [-6, 6]) }}
        whileHover={{ scale: 1.1, y: 0, rotate: 0, transition: { duration: 0.3 } }}
        style={{ width: '200px' }}
      >
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-3xl shadow-xl transform rotate-[5deg] border-2 border-pink-200">
          <motion.div 
            className="flex justify-center mb-3"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart className="w-12 h-12 text-rose-500 fill-rose-500" />
          </motion.div>
          <p className="text-center text-gray-900">User-centric</p>
          <p className="text-center text-gray-900">design</p>
        </div>
      </motion.div>

      {/* Middle Right - Experience Card */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 right-8 pointer-events-auto cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, ...floatingAnimation(3.9, 0.6, [-14, 10], [-5, 5]) }}
        whileHover={{ scale: 1.1, y: 0, rotate: 0, transition: { duration: 0.3 } }}
        style={{ width: '210px' }}
      >
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-3xl shadow-xl transform rotate-[-4deg] border-2 border-blue-200">
          <motion.div 
            className="flex justify-center mb-3"
            animate={{
              rotateY: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center text-white text-xl">
              2+
            </div>
          </motion.div>
          <p className="text-center text-gray-900">Years of</p>
          <p className="text-center text-gray-900">Experience</p>
        </div>
      </motion.div>

      {/* Bottom Left - Organic Blob (MoHFW) */}
      <motion.div
        className="absolute bottom-32 left-24 pointer-events-auto cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, ...floatingAnimation(3.8, 1, [-10, 10], [-5, 3]) }}
        whileHover={{ scale: 1.1, y: 0, rotate: 0, transition: { duration: 0.3 } }}
        style={{ width: '260px' }}
      >
        <motion.div 
          className="bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-1 shadow-2xl relative"
          style={{
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            transform: 'rotate(-8deg)'
          }}
          animate={{
            borderRadius: [
              '60% 40% 30% 70% / 60% 30% 70% 40%',
              '40% 60% 70% 30% / 40% 70% 30% 60%',
              '60% 40% 30% 70% / 60% 30% 70% 40%'
            ]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div 
            className="bg-white p-8 flex flex-col items-center justify-center"
            style={{
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
              minHeight: '200px'
            }}
          >
            <h3 className="text-center text-gray-900 mb-2">MoHFW Website</h3>
            <h3 className="text-center text-gray-900 mb-2">Redesign</h3>
            <p className="text-center text-sm text-gray-500">Public Access</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Right - Square Card (Dharmik Vibes) */}
      <motion.div
        className="absolute bottom-24 right-16 pointer-events-auto cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, ...floatingAnimation(4, 0.8, [-15, 8], [-4, 6]) }}
        whileHover={{ scale: 1.08, y: 0, rotate: 0, transition: { duration: 0.3 } }}
        style={{ width: '240px' }}
      >
        <div className="bg-white p-8 rounded-3xl shadow-xl transform rotate-[3deg] border-2 border-gray-100">
          <div className="flex justify-center mb-4">
            <motion.div 
              className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl"
              animate={{
                rotate: [12, 24, 12],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          <h3 className="text-center text-gray-900 mb-2">Dharmik Vibes</h3>
          <p className="text-center text-gray-900 mb-1">Intern</p>
          <p className="text-center text-sm text-gray-500">Leadership & Strategy</p>
        </div>
      </motion.div>

      {/* Decorative stars scattered */}
      <motion.div
        className="absolute top-[45%] left-[35%]"
        animate={{
          ...floatingAnimation(2.5, 0.3, [-5, 5], [0, 0]),
          rotate: [0, 360]
        }}
        transition={{
          y: { duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.3 },
          rotate: { duration: 4, repeat: Infinity, ease: "linear" }
        }}
      >
        <Star className="w-6 h-6 text-pink-300 fill-pink-300 opacity-60" />
      </motion.div>

      <motion.div
        className="absolute top-[35%] right-[30%]"
        animate={{
          ...floatingAnimation(3, 0.7, [-8, 8], [0, 0]),
          rotate: [360, 0]
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.7 },
          rotate: { duration: 5, repeat: Infinity, ease: "linear" }
        }}
      >
        <Star className="w-5 h-5 text-purple-300 fill-purple-300 opacity-50" />
      </motion.div>

      <motion.div
        className="absolute bottom-[40%] left-[28%]"
        animate={{
          ...floatingAnimation(2.8, 0.5, [-6, 6], [0, 0]),
          rotate: [0, 360],
          scale: [1, 1.3, 1]
        }}
        transition={{
          y: { duration: 2.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 },
          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Sparkles className="w-5 h-5 text-pink-400 opacity-60" />
      </motion.div>

      <motion.div
        className="absolute bottom-[35%] right-[25%]"
        animate={{
          ...floatingAnimation(3.2, 1.2, [-7, 7], [0, 0]),
          rotate: [360, 0]
        }}
        transition={{
          y: { duration: 3.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.2 },
          rotate: { duration: 6, repeat: Infinity, ease: "linear" }
        }}
      >
        <Star className="w-4 h-4 text-purple-400 fill-purple-400 opacity-70" />
      </motion.div>

      <motion.div
        className="absolute top-[25%] left-[45%]"
        animate={{
          y: [-8, 8, -8],
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 4, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Sparkles className="w-6 h-6 text-purple-400 opacity-50" />
      </motion.div>

      {/* Glossy sphere decoration */}
      <motion.div
        className="absolute top-[55%] right-[40%]"
        animate={{
          ...floatingAnimation(4.5, 0, [-20, 20], [0, 0]),
          scale: [1, 1.2, 1]
        }}
        transition={{
          y: { duration: 4.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div 
          className="w-20 h-20 rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(168, 85, 247, 0.4))',
            boxShadow: '0 10px 40px rgba(168, 85, 247, 0.3)',
            opacity: 0.6
          }}
        />
      </motion.div>

      {/* Additional glossy sphere */}
      <motion.div
        className="absolute bottom-[45%] left-[42%]"
        animate={{
          y: [-15, 15, -15],
          x: [-10, 10, -10],
          scale: [1, 1.3, 1]
        }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
        }}
      >
        <div 
          className="w-16 h-16 rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(236, 72, 153, 0.4))',
            boxShadow: '0 10px 40px rgba(236, 72, 153, 0.3)',
            opacity: 0.5
          }}
        />
      </motion.div>
    </div>
  );
}
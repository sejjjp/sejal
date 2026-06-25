import React from 'react';
import { motion } from 'motion/react';
import { Eye, Heart, Star, Sparkles, Zap } from 'lucide-react';
import profileImage from 'figma:asset/b07f04063ffbf4ac29f42d3c0464701314403cca.png';

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

export function FloatingCards() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Top Left - Samsung Iris - Phone/Device Frame Shape */}
      <motion.div
        className="absolute top-16 left-12 pointer-events-auto cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, ...floatingAnimation(3.5, 0, [-12, 12], [-6, 6]) }}
        whileHover={{ scale: 1.1, y: 0, rotate: 0, transition: { duration: 0.3 } }}
        style={{ width: '180px', height: '200px' }}
      >
        <motion.div 
          className="bg-gray-900 text-white p-4 shadow-2xl relative transform rotate-[-8deg] h-full border-8 border-black overflow-hidden"
          style={{ borderRadius: '36px' }}
          animate={{
            boxShadow: [
              '0 20px 60px rgba(236, 72, 153, 0.4)',
              '0 25px 80px rgba(168, 85, 247, 0.5)',
              '0 20px 60px rgba(236, 72, 153, 0.4)'
            ]
          }}
          transition={{
            boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {/* Phone notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-b-3xl z-10" />
          
          <div className="pt-6 flex flex-col items-center justify-center h-full">
            <motion.div 
              className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mb-3"
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 8, repeat: Infinity, ease: "linear" }
              }}
            >
              <Eye className="w-7 h-7 text-white" />
            </motion.div>
            <h3 className="text-center mb-1 text-xs">Samsung Iris 2.0</h3>
            <p className="text-center text-[10px] text-gray-400">AI Project</p>
          </div>
          
          {/* Sparkle sticker */}
          <motion.div 
            className="absolute -top-4 -right-4 z-20"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.4, 1]
            }}
            transition={{
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Sparkles className="w-10 h-10 text-pink-400 fill-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 2. Top Right - Photo Card - Tilted Polaroid with Stickers */}
      <motion.div
        className="absolute top-24 right-12 pointer-events-auto cursor-pointer"
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, ...floatingAnimation(3.2, 0.3, [-10, 10], [4, 8]) }}
        whileHover={{ scale: 1.12, y: 0, rotate: 5, transition: { duration: 0.3 } }}
        style={{ width: '200px' }}
      >
        <div className="bg-white p-3 rounded-2xl shadow-2xl transform rotate-[5deg] border-4 border-purple-200 relative">
          {/* Tape decoration top */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-purple-100 opacity-60 rounded-sm rotate-[-3deg]" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
          
          <div className="relative overflow-hidden rounded-xl mb-2" style={{ aspectRatio: '3/4', height: '240px' }}>
            <img 
              src={profileImage} 
              alt="Sejal Kautkar"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent"
              animate={{
                opacity: [0.2, 0.35, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          <p className="text-center text-gray-900 text-xs">Sejal Kautkar</p>
          <p className="text-center text-[10px] text-gray-500 mt-0.5">UI/UX Designer</p>
          
          {/* Star sticker */}
          <motion.div 
            className="absolute -top-3 -left-3 z-10"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              rotate: { duration: 6, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Star className="w-8 h-8 text-pink-400 fill-pink-400 drop-shadow-lg" />
          </motion.div>

          {/* Heart sticker bottom right */}
          <motion.div 
            className="absolute -bottom-2 -right-2 z-10"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, -5, 5, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">✨</div>
          </motion.div>
        </div>
      </motion.div>

      {/* 3. Left Middle - My Stack Card - Pill/Capsule Shape */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 left-10 pointer-events-auto cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, ...floatingAnimation(4.2, 0.7, [-8, 15], [-3, 3]) }}
        whileHover={{ scale: 1.08, y: 0, rotate: 0, transition: { duration: 0.3 } }}
        style={{ width: '240px' }}
      >
        <motion.div 
          className="bg-white p-5 shadow-xl transform rotate-[-3deg] overflow-hidden relative"
          style={{ borderRadius: '100px' }}
          animate={{
            boxShadow: [
              '0 10px 40px rgba(168, 85, 247, 0.25)',
              '0 15px 50px rgba(236, 72, 153, 0.35)',
              '0 10px 40px rgba(59, 130, 246, 0.25)',
              '0 10px 40px rgba(168, 85, 247, 0.25)'
            ]
          }}
          transition={{
            boxShadow: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {/* Animated gradient background */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                'linear-gradient(135deg, #ede9fe, #fce7f3, #dbeafe)',
                'linear-gradient(135deg, #fce7f3, #dbeafe, #ede9fe)',
                'linear-gradient(135deg, #dbeafe, #ede9fe, #fce7f3)',
                'linear-gradient(135deg, #ede9fe, #fce7f3, #dbeafe)'
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Tools area */}
          <div className="relative z-10 flex justify-center items-center gap-2 mb-3">
            {/* Figma icon */}
            <motion.div 
              animate={{ 
                rotate: [0, 10, -10, 0], 
                y: [0, -6, 0] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <svg className="w-9 h-9 drop-shadow-md" viewBox="0 0 38 57" fill="none">
                <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                <path d="M0 28.5C0 23.2533 4.25329 19 9.5 19H19V38H9.5C4.25329 38 0 33.7467 0 28.5Z" fill="##A259FF"/>
                <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" fill="#F24E1E"/>
                <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262"/>
              </svg>
            </motion.div>
            
            {/* Procreate icon */}
            <motion.div 
              className="w-9 h-9 bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-300 rounded-xl shadow-lg"
              animate={{ 
                rotate: [0, -10, 10, 0], 
                y: [0, -6, 0] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: 0.3 
              }}
            />
            
            {/* Adobe XD icon */}
            <motion.div 
              className="w-9 h-9 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
              animate={{ 
                rotate: [0, 10, -10, 0], 
                y: [0, -6, 0] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: 0.6 
              }}
            >
              <span className="text-white text-xs">Xd</span>
            </motion.div>
          </div>
          
          <p className="relative z-10 text-center text-gray-800 text-xs leading-tight mb-0.5">Figma, Procreate,</p>
          <p className="relative z-10 text-center text-gray-800 text-xs leading-tight mb-1">Adobe XD</p>
          <p className="relative z-10 text-center text-[10px] text-gray-500">My Stack</p>
        </motion.div>
      </motion.div>

      {/* 4. Right Middle - User-centric - Organic Cloud/Blob Shape */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 right-10 pointer-events-auto cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, ...floatingAnimation(3.6, 0.5, [-12, 12], [6, -6]) }}
        whileHover={{ scale: 1.15, y: 0, rotate: 0, transition: { duration: 0.3 } }}
        style={{ width: '160px', height: '160px' }}
      >
        <motion.div 
          className="bg-gradient-to-br from-pink-50 to-rose-100 p-5 shadow-xl transform rotate-[-8deg] border-2 border-pink-200 h-full flex flex-col items-center justify-center relative overflow-hidden"
          style={{
            borderRadius: '50% 50% 45% 55% / 55% 45% 55% 45%'
          }}
          animate={{
            borderRadius: [
              '50% 50% 45% 55% / 55% 45% 55% 45%',
              '45% 55% 50% 50% / 50% 50% 45% 55%',
              '55% 45% 55% 45% / 45% 55% 50% 50%',
              '50% 50% 45% 55% / 55% 45% 55% 45%'
            ],
            background: [
              'linear-gradient(to bottom right, #fdf2f8, #ffe4e6)',
              'linear-gradient(to bottom right, #ffe4e6, #fce7f3)',
              'linear-gradient(to bottom right, #fce7f3, #fdf2f8)',
              'linear-gradient(to bottom right, #fdf2f8, #ffe4e6)'
            ]
          }}
          transition={{
            borderRadius: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            background: { duration: 5, repeat: Infinity, ease: "linear" }
          }}
        >
          {/* Floating hearts in background */}
          <motion.div
            className="absolute top-3 right-4 opacity-30"
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [0.8, 1.3, 0.8]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
          </motion.div>

          <motion.div 
            className="flex justify-center mb-2 relative z-10"
            animate={{
              scale: [1, 1.25, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart className="w-12 h-12 text-rose-500 fill-rose-500 drop-shadow-md" />
          </motion.div>
          <p className="relative z-10 text-center text-gray-900 text-xs leading-tight">User-centric</p>
          <p className="relative z-10 text-center text-gray-900 text-xs leading-tight">design</p>
        </motion.div>
      </motion.div>

      {/* 5. Bottom Left - MoHFW - Skewed Parallelogram with Neon Border */}
      <motion.div
        className="absolute bottom-20 left-8 pointer-events-auto cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, ...floatingAnimation(3.8, 0.9, [-10, 10], [-6, 6]) }}
        whileHover={{ scale: 1.1, y: 0, skewY: 0, transition: { duration: 0.3 } }}
        style={{ width: '200px' }}
      >
        <motion.div 
          className="p-[3px] rounded-[22px] shadow-2xl relative"
          style={{
            transform: 'rotate(-7deg) skewY(-2deg)',
            background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)'
          }}
          animate={{
            background: [
              'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
              'linear-gradient(135deg, #f472b6 0%, #a855f7 100%)',
              'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
              'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)'
            ],
            boxShadow: [
              '0 0 30px rgba(236, 72, 153, 0.5)',
              '0 0 45px rgba(168, 85, 247, 0.6)',
              '0 0 30px rgba(236, 72, 153, 0.5)'
            ]
          }}
          transition={{
            background: { duration: 5, repeat: Infinity, ease: "linear" },
            boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="bg-white p-4 rounded-[20px] relative overflow-hidden">
            {/* Animated light streak */}
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                background: 'linear-gradient(90deg, transparent, #ec4899, transparent)'
              }}
              animate={{
                x: ['-100%', '200%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <h3 className="relative z-10 text-center text-gray-900 text-xs leading-tight mb-0.5">MoHFW Website</h3>
            <h3 className="relative z-10 text-center text-gray-900 text-xs leading-tight mb-1">Redesign</h3>
            <p className="relative z-10 text-center text-[10px] text-gray-500">Public Access</p>
            
            {/* Corner accent */}
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 bg-pink-400 opacity-50"
              style={{ borderRadius: '0 20px 0 100%' }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* 6. Bottom Right - Dharmik Vibes - Liquid Morphing Blob */}
      <motion.div
        className="absolute bottom-16 right-16 pointer-events-auto cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, ...floatingAnimation(4, 1.1, [-15, 8], [4, -4]) }}
        whileHover={{ scale: 1.12, y: 0, rotate: 6, transition: { duration: 0.3 } }}
        style={{ width: '180px' }}
      >
        <motion.div 
          className="bg-white p-5 shadow-xl border-2 border-gray-100 transform rotate-[6deg] relative overflow-hidden"
          style={{
            borderRadius: '40% 60% 65% 35% / 45% 50% 50% 55%'
          }}
          animate={{
            borderRadius: [
              '40% 60% 65% 35% / 45% 50% 50% 55%',
              '60% 40% 35% 65% / 50% 60% 40% 50%',
              '50% 50% 60% 40% / 65% 35% 60% 40%',
              '40% 60% 65% 35% / 45% 50% 50% 55%'
            ],
            boxShadow: [
              '0 15px 40px rgba(236, 72, 153, 0.15)',
              '0 20px 50px rgba(168, 85, 247, 0.2)',
              '0 15px 40px rgba(236, 72, 153, 0.15)'
            ]
          }}
          transition={{
            borderRadius: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {/* Liquid gradient background */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #ec4899 0%, #f472b6 50%, transparent 70%)'
            }}
            animate={{
              background: [
                'radial-gradient(circle at 30% 30%, #ec4899 0%, #f472b6 50%, transparent 70%)',
                'radial-gradient(circle at 70% 70%, #f472b6 0%, #a855f7 50%, transparent 70%)',
                'radial-gradient(circle at 50% 50%, #a855f7 0%, #ec4899 50%, transparent 70%)',
                'radial-gradient(circle at 30% 30%, #ec4899 0%, #f472b6 50%, transparent 70%)'
              ],
              scale: [1, 1.5, 1.2, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="relative z-10 flex justify-center mb-3">
            <motion.div 
              className="w-16 h-16 shadow-lg relative overflow-hidden"
              style={{
                borderRadius: '35% 65% 60% 40% / 40% 35% 65% 60%',
                background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)'
              }}
              animate={{
                borderRadius: [
                  '35% 65% 60% 40% / 40% 35% 65% 60%',
                  '65% 35% 40% 60% / 60% 65% 35% 40%',
                  '50% 50% 35% 65% / 35% 65% 65% 35%',
                  '35% 65% 60% 40% / 40% 35% 65% 60%'
                ],
                rotate: [0, 90, 180, 270, 360]
              }}
              transition={{
                borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 12, repeat: Infinity, ease: "linear" }
              }}
            >
              {/* Glowing particles inside */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full opacity-60"
                animate={{
                  x: [0, 20, -10, 0],
                  y: [0, -15, 10, 0],
                  scale: [1, 0.5, 1.2, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-white rounded-full opacity-40"
                animate={{
                  x: [0, -15, 10, 0],
                  y: [0, 10, -15, 0],
                  scale: [1, 1.3, 0.7, 1]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.div>
          </div>
          <h3 className="relative z-10 text-center text-gray-900 mb-1 text-xs">Dharmik Vibes</h3>
          <p className="relative z-10 text-center text-gray-900 mb-0.5 text-xs">Intern</p>
          <p className="relative z-10 text-center text-[10px] text-gray-500">Leadership & Strategy</p>
          
          {/* Corner sparkle */}
          <motion.div
            className="absolute top-2 right-2"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1]
            }}
            transition={{
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Zap className="w-5 h-5 text-pink-400 fill-pink-400" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative stars scattered */}
      <motion.div
        className="absolute top-[20%] left-[25%]"
        animate={{
          y: [-8, 8, -8],
          rotate: [0, 360],
          scale: [1, 1.4, 1]
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 4, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Sparkles className="w-6 h-6 text-pink-400 opacity-60" />
      </motion.div>

      <motion.div
        className="absolute top-[35%] right-[38%]"
        animate={{
          y: [-5, 5, -5],
          rotate: [360, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 5, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Star className="w-5 h-5 text-purple-300 fill-purple-300 opacity-50" />
      </motion.div>

      <motion.div
        className="absolute bottom-[48%] left-[42%]"
        animate={{
          y: [-6, 6, -6],
          rotate: [0, 360],
        }}
        transition={{
          y: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 3, repeat: Infinity, ease: "linear" }
        }}
      >
        <Star className="w-6 h-6 text-pink-300 fill-pink-300 opacity-60" />
      </motion.div>

      <motion.div
        className="absolute bottom-[35%] right-[35%]"
        animate={{
          y: [-7, 7, -7],
          rotate: [360, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          y: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 6, repeat: Infinity, ease: "linear" },
          scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Star className="w-4 h-4 text-purple-400 fill-purple-400 opacity-70" />
      </motion.div>

      <motion.div
        className="absolute top-[42%] left-[38%]"
        animate={{
          y: [-4, 4, -4],
          rotate: [0, 360],
          scale: [1, 1.4, 1]
        }}
        transition={{
          y: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 4.5, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Sparkles className="w-5 h-5 text-pink-400 opacity-50" />
      </motion.div>
    </div>
  );
}

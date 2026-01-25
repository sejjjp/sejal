import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import imgCaseStudy from 'figma:asset/d240d9fe427e86989f37f98da4e96de2fa8190d6.png';

interface SamsungIrisCaseStudyProps {
  onBack: () => void;
}

export function SamsungIrisCaseStudy({ onBack }: SamsungIrisCaseStudyProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Back Button - Fixed at top */}
      <motion.div 
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
            whileHover={{ x: -4 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowLeft className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
            <span className="font-['Inter',sans-serif] text-sm md:text-base">Back to Projects</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Case Study Content */}
      <div className="pt-24 pb-16">
        <motion.div 
          className="max-w-5xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Full Case Study Image */}
          <div className="w-full">
            <img 
              src={imgCaseStudy}
              alt="Samsung Iris AI Agent Case Study"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

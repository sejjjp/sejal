import React from 'react';
import { motion } from 'motion/react';
import svgPathsSamsung from "../imports/svg-b3artj8j61";
import svgPathsHeart from "../imports/svg-skgz6rt9gi";
import imgSamsungWave from "figma:asset/beacfb1955310f56039605f02d9be059c47212b3.png";
import imgDharmikVibes from "figma:asset/5c7e5d13a4551192be5c4f94808a36228eaece9c.png";
import imgDharmikVibesScreenshot from "figma:asset/a408c3c294fd54db242b36f0be3223e6c56740ae.png";
import { CaseStudyModal } from './CaseStudyModal';
import { samsungIrisCaseStudy } from '../data/caseStudies';

interface Project {
  id: number;
  title: string;
  category: string;
  type: 'samsung' | 'heart' | 'dharmik' | 'meta' | 'nike' | 'mohfw';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Meta Rebranding',
    category: 'Brand Identity',
    type: 'meta',
  },
  {
    id: 2,
    title: 'Gravity Sketch',
    category: 'Product Design',
    type: 'nike',
  },
  {
    id: 3,
    title: 'Nike Loop',
    category: 'Building Empathy',
    type: 'heart',
  },
  {
    id: 4,
    title: 'Samsung Iris 2.0',
    category: 'AI Project',
    type: 'samsung',
  },
  {
    id: 5,
    title: 'MoHFW Website',
    category: 'Public Access Redesign',
    type: 'mohfw',
  },
  {
    id: 6,
    title: 'Dharmik Vibes',
    category: 'Leadership & Strategy',
    type: 'dharmik',
  }
];

// Samsung Card Icon Component
function SamsungIcon() {
  return (
    <div className="overflow-clip relative size-[53.632px]">
      {/* Main Star Shape */}
      <div className="absolute content-stretch flex flex-col items-start left-[2.23px] size-[49.174px] top-[2.23px]">
        <div className="h-[49.174px] overflow-clip relative shrink-0 w-full">
          <div className="absolute inset-[4.48%_5.91%_5.91%_4.48%]">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
                <path 
                  d={svgPathsSamsung.p19592a00} 
                  fill="#FB64B6" 
                  stroke="#FB64B6" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="4.4055" 
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Small Circle */}
      <div className="absolute content-stretch flex flex-col items-start left-[37.98px] size-[13.433px] top-[11.67px]">
        <div className="h-[13.433px] overflow-clip relative shrink-0 w-full">
          <div className="absolute inset-[15.88%_20.59%_20.59%_15.88%]">
            <div className="absolute inset-[-25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                <path 
                  d={svgPathsSamsung.p24954500} 
                  fill="#FB64B6" 
                  stroke="#FB64B6" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="4.2668" 
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Heart Icon Component
function HeartIcon() {
  return (
    <div className="overflow-clip size-[64.98px]">
      <div className="absolute inset-[14.22%_9%_15.48%_8.36%]">
        <div className="absolute inset-[-5.88%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 52">
            <path 
              d={svgPathsHeart.pb4546f0} 
              fill="#FF2056" 
              stroke="#FF2056" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="5.36968" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Samsung Card
function SamsungCard() {
  return (
    <motion.div 
      className="bg-black rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] p-8 aspect-[4/5] flex flex-col items-center justify-center relative overflow-hidden cursor-pointer"
      whileHover={{ y: -8, boxShadow: '0px 35px 60px -12px rgba(0,0,0,0.35)' }}
      transition={{ duration: 0.3 }}
    >
      {/* Floating Icon */}
      <motion.div 
        className="absolute -top-16 left-1/2 -translate-x-1/2"
        animate={{ 
          rotate: [201.78, 211.78, 201.78],
          y: [0, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <SamsungIcon />
      </motion.div>

      {/* Wave Image */}
      <div className="mb-4 w-full flex justify-center">
        <div className="h-[25.534px] rounded-[56px] w-[185.937px] overflow-hidden">
          <img 
            alt="" 
            className="h-[246.15%] w-full object-cover -mt-[83.08%]" 
            src={imgSamsungWave} 
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-white text-center mb-2">Samsung Iris 2.0</h3>

      {/* Category */}
      <p className="text-[#99a1af] text-sm text-center">AI Project</p>
      
      {/* Click to view indicator */}
      <motion.div 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#3497f9] text-xs flex items-center gap-1"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>View Case Study</span>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

// Heart Card
function HeartCard({ title, category }: { title: string; category: string }) {
  return (
    <motion.div 
      className="rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] p-8 aspect-[4/5] flex flex-col items-center justify-center relative overflow-hidden border-2 border-[#fccee8]"
      style={{ backgroundImage: "linear-gradient(141.67deg, rgb(253, 242, 248) 3.3924%, rgb(255, 241, 242) 96.608%)" }}
      whileHover={{ y: -8, boxShadow: '0px 30px 35px -5px rgba(0,0,0,0.15)' }}
      transition={{ duration: 0.3 }}
    >
      {/* Heart Icon */}
      <motion.div 
        className="mb-6"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <HeartIcon />
      </motion.div>

      {/* Title */}
      <p className="text-[#101828] text-center">{title}</p>
      
      {/* Category if provided */}
      {category && <p className="text-[#6a7282] text-sm text-center mt-1">{category}</p>}
    </motion.div>
  );
}

// Dharmik Vibes Card
function DharmikVibesCard() {
  return (
    <motion.div 
      className="bg-white rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] p-8 aspect-[4/5] flex flex-col items-center justify-center border-2 border-[#f3f4f6]"
      whileHover={{ y: -8, boxShadow: '0px_30px_35px_-5px rgba(0,0,0,0.15)' }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo Image */}
      <div className="mb-6">
        <div className="h-[103.036px] w-[170.125px] overflow-hidden">
          <img 
            alt="Dharmik Vibes" 
            className="h-[165.11%] w-full object-cover" 
            src={imgDharmikVibes} 
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-[#101828] text-center mb-2">Dharmik Vibes Intern</h3>

      {/* Category */}
      <p className="text-[#6a7282] text-sm text-center">Leadership & Strategy</p>
    </motion.div>
  );
}

// Generic Card (for Meta, Nike, MoHFW)
function GenericCard({ title, category, bgGradient, iconColor }: { title: string; category: string; bgGradient: string; iconColor: string }) {
  return (
    <motion.div 
      className={`rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] p-8 aspect-[4/5] flex flex-col items-center justify-center ${bgGradient}`}
      whileHover={{ y: -8, boxShadow: '0px_30px_35px_-5px rgba(0,0,0,0.15)' }}
      transition={{ duration: 0.3 }}
    >
      {/* Icon Circle */}
      <motion.div 
        className={`mb-6 rounded-full size-16 flex items-center justify-center ${iconColor}`}
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-white text-3xl">∞</div>
      </motion.div>

      {/* Title */}
      <h3 className="text-white text-center mb-2">{title}</h3>

      {/* Category */}
      <p className="text-white/80 text-sm text-center">{category}</p>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [isSamsungModalOpen, setIsSamsungModalOpen] = React.useState(false);

  return (
    <section className="relative py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Selected Work
          </h2>
          <p className="text-gray-600 text-lg">
            A collection of projects that showcase my design thinking and problem-solving skills
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => {
                if (project.type === 'samsung') {
                  setIsSamsungModalOpen(true);
                }
              }}
            >
              {project.type === 'samsung' && <SamsungCard />}
              {project.type === 'heart' && <HeartCard title={project.title} category={project.category} />}
              {project.type === 'dharmik' && <DharmikVibesCard />}
              {project.type === 'meta' && (
                <GenericCard 
                  title={project.title} 
                  category={project.category}
                  bgGradient="bg-gradient-to-br from-blue-600 to-purple-600"
                  iconColor="bg-blue-500"
                />
              )}
              {project.type === 'nike' && (
                <GenericCard 
                  title={project.title} 
                  category={project.category}
                  bgGradient="bg-gradient-to-br from-emerald-500 to-cyan-500"
                  iconColor="bg-emerald-600"
                />
              )}
              {project.type === 'mohfw' && (
                <GenericCard 
                  title={project.title} 
                  category={project.category}
                  bgGradient="bg-gradient-to-br from-indigo-600 to-purple-600"
                  iconColor="bg-indigo-500"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button 
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-10 py-4 rounded-full shadow-lg"
            whileHover={{ scale: 1.05, backgroundColor: '#1f2937' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Samsung Iris Case Study Modal */}
      <CaseStudyModal
        isOpen={isSamsungModalOpen}
        onClose={() => setIsSamsungModalOpen(false)}
        pages={samsungIrisCaseStudy.pages}
      />
    </section>
  );
}
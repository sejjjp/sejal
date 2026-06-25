import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import imgScreenshot from "figma:asset/a408c3c294fd54db242b36f0be3223e6c56740ae.png";
import imgDvPartnerLogo from "figma:asset/5c7e5d13a4551192be5c4f94808a36228eaece9c.png";
import imgSociolinq from "figma:asset/ab611b5bd026b435a77726b8564d476a9012a8b2.png";
import imgSociolinqLogo from "figma:asset/6cefd352121c5484acd9abe8ae237200cf863945.png";
import imgEclipticonScreenshot from "../../imports/image-2.png";
import imgEclipticonLogo from "../../imports/image.png";
import imgPraxtoLogo from "../../imports/image-3.png";
import imgPraxtoCertificate from "../../imports/image-4.png";
import { ChevronDown } from "lucide-react";

interface ExperienceData {
  id: string;
  role: string;
  company: string;
  companySubtext?: string;
  duration: string;
  logo?: string;
  logoAlt?: string;
  accentColor: string;
  bullets: React.ReactNode[];
  keyHighlight?: { title: string; body: string };
  tags?: string[];
  screenshot: string;
  screenshotAlt: string;
  secondaryScreenshot?: string;
  secondaryScreenshotAlt?: string;
  certificateUrl?: string;
}

const experiences: ExperienceData[] = [
  {
    id: "eclipticon",
    role: "UI/UX Designer",
    company: "Eclipticon Softwares Private Limited",
    duration: "Feb 2026 - Present",
    logo: imgEclipticonLogo,
    logoAlt: "Eclipticon Logo",
    accentColor: "#000000",
    bullets: [
      <><strong className="text-[#101828] font-semibold">Spearheaded the design</strong> of the <strong className="text-[#101828] font-semibold">'Plan a Hangout'</strong> feature for Frenley (MVP), focusing on <strong className="text-[#101828] font-semibold">user safety</strong> and <strong className="text-[#101828] font-semibold">platform compliance</strong>.</>,
      <>Established the foundational <strong className="text-[#101828] font-semibold">Design System</strong> and <strong className="text-[#101828] font-semibold">brand identity</strong> to ensure visual consistency across the mobile application.</>,
      <>Conducted <strong className="text-[#101828] font-semibold">deep-dive benchmarking</strong> and <strong className="text-[#101828] font-semibold">UI analysis</strong> to identify market gaps for Lawyer's Diary.</>,
      <>Architected a <strong className="text-[#101828] font-semibold">novel, industry-first feature</strong> aimed at streamlining legal workflows — currently <strong className="text-[#101828] font-semibold">non-existent in competing applications</strong>.</>,
      <>Bridged complex backend logic with <strong className="text-[#101828] font-semibold">human-centric UI</strong> to deliver <strong className="text-[#101828] font-semibold">intuitive user journeys</strong> for diverse user bases.</>,
    ],
    tags: ["MVP Strategy", "UI Analysis", "Design Systems"],
    screenshot: imgEclipticonScreenshot,
    screenshotAlt: "Eclipticon Softwares Projects Screenshot",
    certificateUrl: "https://drive.google.com/file/d/1JUyVLbSA8CZ4ARRc5HNUvsuZwV_KPmZJ/view?usp=sharing",
  },
  {
    id: "dharmik",
    role: "UX Designer Intern",
    company: "Dharmik Vibes",
    companySubtext: "(Divvib Lifestyle Pvt Ltd)",
    duration: "Aug 2025 - Nov 2025",
    logo: imgDvPartnerLogo,
    logoAlt: "Dharmik Vibes Logo",
    accentColor: "#E87A2D",
    bullets: [
      <>Conducted extensive <strong className="text-[#E87A2D] font-semibold">user research</strong>, <strong className="text-[#E87A2D] font-semibold">personas</strong>, and <strong className="text-[#E87A2D] font-semibold">journey mapping</strong> for a spiritual travel platform.</>,
      <>Designed clear <strong className="text-[#E87A2D] font-semibold">Information Architecture</strong> and <strong className="text-[#E87A2D] font-semibold">interactive wireframes</strong> to simplify navigation and reduce user drop-off.</>,
      <>Created <strong className="text-[#E87A2D] font-semibold">intuitive UI</strong> for <strong className="text-[#E87A2D] font-semibold">AI-driven recommendation engines</strong>, making complex suggestions feel effortless.</>,
      <>Enhanced <strong className="text-[#E87A2D] font-semibold">brand identity</strong> with aesthetically aligned <strong className="text-[#E87A2D] font-semibold">UI elements</strong> and <strong className="text-[#E87A2D] font-semibold">color systems</strong> to reinforce brand recall.</>,
    ],
    tags: ["User Research", "AI/UX Design", "Brand Identity"],
    screenshot: imgScreenshot,
    screenshotAlt: "Dharmik Vibes Project Screenshot",
    certificateUrl:
      "https://drive.google.com/file/d/15aqvw89Qhh2A167Bg-MFqj2wwsDH2V4f/view?usp=sharing",
  },
  {
    id: "sociolinq",
    role: "UI/UX Design Intern",
    company: "SociolinQ Technologies Private Limited",
    duration: "Feb 2026 - Mar 2026",
    logo: imgSociolinqLogo,
    logoAlt: "SociolinQ Logo",
    accentColor: "#4B50B6",
    bullets: [
      <>Designed a <strong className="text-[#4B50B6] font-semibold">centralized HRMS dashboard</strong> featuring <strong className="text-[#4B50B6] font-semibold">dynamic editing modules</strong> for 'Employee Central'.</>,
      <>Simplified <strong className="text-[#4B50B6] font-semibold">complex admin workflows</strong> into <strong className="text-[#4B50B6] font-semibold">intuitive, easy-to-navigate user flows</strong> that cut task completion time.</>,
      <>Expanded the internal <strong className="text-[#4B50B6] font-semibold">Design System</strong> with <strong className="text-[#4B50B6] font-semibold">scalable components</strong> to accelerate developer handoff.</>,
    ],
    tags: ["HRMS Design", "Design Systems", "Complex Workflows"],
    screenshot: imgSociolinq,
    screenshotAlt: "SociolinQ HRMS Employee Central Dashboard",
  },
  {
    id: "praxto",
    role: "User Experience Designer",
    company: "Praxto Designs",
    duration: "Jun 2025 - Oct 2025",
    logo: imgPraxtoLogo,
    logoAlt: "Praxto Designs Logo",
    accentColor: "#6B4CE6",
    bullets: [
      <><strong className="text-[#6B4CE6] font-semibold">Led end-to-end UX/UI</strong> for the company portfolio — shaping its <strong className="text-[#6B4CE6] font-semibold">visual identity</strong> and <strong className="text-[#6B4CE6] font-semibold">navigation structure</strong> from scratch.</>,
      <>Delivered <strong className="text-[#6B4CE6] font-semibold">multiple client projects</strong> end-to-end, including <strong className="text-[#6B4CE6] font-semibold">high-fidelity mockups</strong> aligned to user goals and business objectives.</>,
      <>Coordinated with <strong className="text-[#6B4CE6] font-semibold">designers, developers, and content creators</strong> to transform design vision into <strong className="text-[#6B4CE6] font-semibold">polished web experiences</strong>.</>,
      <>Translated <strong className="text-[#6B4CE6] font-semibold">complex client requirements</strong> into <strong className="text-[#6B4CE6] font-semibold">intuitive interfaces</strong> — balancing aesthetics with usability across diverse industries.</>,
      <>Applied <strong className="text-[#6B4CE6] font-semibold">wireframing</strong>, <strong className="text-[#6B4CE6] font-semibold">prototyping</strong>, and <strong className="text-[#6B4CE6] font-semibold">client collaboration</strong> to consistently deliver on-time, on-brief design solutions.</>,
    ],
    tags: ["User Experience (UX)", "User Flow Mapping", "Client Projects"],
    screenshot: imgPraxtoCertificate,
    screenshotAlt: "Praxto Designs Internship Certificate",
    certificateUrl: "https://drive.google.com/file/d/YOUR_PRAXTO_CERTIFICATE_ID/view?usp=sharing",
  },
];

export function ProfessionalExperience() {
  const [activeId, setActiveId] = useState<string>("eclipticon");

  return (
    <div
      id="experience"
      className="relative bg-gradient-to-br from-[rgba(249,250,251,0.5)] via-white to-[rgba(250,245,255,0.3)] py-10 md:py-10 lg:py-20 px-4 md:px-8 lg:px-12 overflow-hidden"
      data-name="ProfessionalExperience"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-12 h-12 md:w-16 md:h-16 rounded-full opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgb(218, 178, 255) 0%, rgb(253, 165, 213) 100%)",
          }}
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-8 h-8 md:w-10 md:h-10 rounded-full opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgb(218, 178, 255) 0%, rgb(253, 165, 213) 100%)",
          }}
          animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-6 h-6 md:w-8 md:h-8 rounded-full opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgb(218, 178, 255) 0%, rgb(253, 165, 213) 100%)",
          }}
          animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 md:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="font-['Caveat',sans-serif] text-[28px] md:text-[34px] lg:text-[38px] text-purple-400/80 mb-2"
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Here is my
          </motion.p>
          <h2 className="font-['Playfair_Display',sans-serif] text-[#101828] text-2xl md:text-3xl lg:text-5xl">
            Professional Experience
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-300 via-purple-200 to-purple-100 rounded-full z-0" />

          {/* Experience Cards */}
          <div className="space-y-6">
            {experiences.map((exp, idx) => {
              const isActive = activeId === exp.id;
              return (
                <motion.div
                  key={exp.id}
                  className="relative pl-16 md:pl-20"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-[16px] md:left-[24px] top-6 z-10"
                    animate={{
                      scale: isActive ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="w-5 h-5 rounded-full border-[3px] border-white shadow-md"
                      style={{
                        backgroundColor: isActive
                          ? exp.accentColor
                          : "#d1d5db",
                      }}
                    />
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: exp.accentColor }}
                        animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    className="rounded-2xl border cursor-pointer overflow-hidden"
                    style={{
                      borderColor: isActive
                        ? `${exp.accentColor}30`
                        : "#e5e7eb",
                      backgroundColor: isActive ? "white" : "#fafafa",
                      boxShadow: isActive
                        ? "0 20px 40px -12px rgba(0,0,0,0.1)"
                        : "0 2px 8px -2px rgba(0,0,0,0.05)",
                    }}
                    onClick={() => setActiveId(exp.id)}
                    onMouseEnter={() => setActiveId(exp.id)}
                    whileHover={
                      !isActive
                        ? { y: -2, boxShadow: "0 8px 24px -8px rgba(0,0,0,0.1)" }
                        : {}
                    }
                    layout
                    transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
                  >
                    {/* Collapsed Header - Always Visible */}
                    <div className="p-5 md:p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          {/* Logo or colored dot */}
                          {exp.logo ? (
                            <img
                              src={exp.logo}
                              alt={exp.logoAlt}
                              className="w-10 h-10 md:w-12 md:h-12 object-contain flex-shrink-0"
                            />
                          ) : (
                            <div
                              className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: `${exp.accentColor}15` }}
                            >
                              <span
                                className="font-['Inter',sans-serif] text-lg"
                                style={{ color: exp.accentColor }}
                              >
                                {exp.company.charAt(0)}
                              </span>
                            </div>
                          )}
                          <div>
                            <h3 className="font-['Inter',sans-serif] text-[#101828] text-base md:text-lg">
                              {exp.role}
                            </h3>
                            <p
                              className="font-['Inter',sans-serif] text-sm md:text-base"
                              style={{ color: exp.accentColor }}
                            >
                              {exp.company}
                              {exp.companySubtext && (
                                <span className="text-[#6a7282]">
                                  {" "}
                                  {exp.companySubtext}
                                </span>
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="font-['Inter',sans-serif] text-[#6a7282] text-xs md:text-sm hidden sm:block">
                            {exp.duration}
                          </span>
                          <motion.div
                            animate={{ rotate: isActive ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown
                              className="w-5 h-5 text-[#9ca3af]"
                            />
                          </motion.div>
                        </div>
                      </div>
                      {/* Mobile duration */}
                      <span className="font-['Inter',sans-serif] text-[#6a7282] text-xs mt-1 block sm:hidden">
                        {exp.duration}
                      </span>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.4, ease: "easeInOut" },
                            opacity: { duration: 0.3, delay: 0.1 },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 md:px-6 pb-6">
                            {/* Divider */}
                            <div
                              className="h-[1px] mb-6"
                              style={{
                                backgroundImage: `linear-gradient(to right, transparent, ${exp.accentColor}30, transparent)`,
                              }}
                            />

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                              {/* Screenshot(s) */}
                              <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                              >
                                {exp.secondaryScreenshot ? (
                                  <div className="grid grid-cols-2 gap-4">
                                    {/* Left Image */}
                                    <div className="relative">
                                      <div
                                        className="absolute inset-0 rounded-xl transform rotate-1 scale-[1.02] -z-10"
                                        style={{
                                          backgroundImage:
                                            "linear-gradient(156.995deg, rgb(223, 234, 254) 7.9104%, rgb(241, 233, 251) 50%, rgb(244, 232, 246) 92.09%)",
                                        }}
                                      />
                                      <motion.div
                                        className="bg-white rounded-xl shadow-lg p-2 md:p-3 transform -rotate-[0.5deg]"
                                        whileHover={{ scale: 1.02, rotate: 0 }}
                                        transition={{ duration: 0.3 }}
                                      >
                                        <div className="rounded-lg overflow-hidden">
                                          <img
                                            src={exp.secondaryScreenshot}
                                            alt={exp.secondaryScreenshotAlt}
                                            className="w-full h-auto object-cover"
                                          />
                                        </div>
                                      </motion.div>
                                    </div>
                                    {/* Right Image */}
                                    <div className="relative">
                                      <div
                                        className="absolute inset-0 rounded-xl transform -rotate-1 scale-[1.02] -z-10"
                                        style={{
                                          backgroundImage:
                                            "linear-gradient(156.995deg, rgb(223, 234, 254) 7.9104%, rgb(241, 233, 251) 50%, rgb(244, 232, 246) 92.09%)",
                                        }}
                                      />
                                      <motion.div
                                        className="bg-white rounded-xl shadow-lg p-2 md:p-3 transform rotate-[0.5deg]"
                                        whileHover={{ scale: 1.02, rotate: 0 }}
                                        transition={{ duration: 0.3 }}
                                      >
                                        <div className="rounded-lg overflow-hidden">
                                          <img
                                            src={exp.screenshot}
                                            alt={exp.screenshotAlt}
                                            className="w-full h-auto object-cover"
                                          />
                                        </div>
                                      </motion.div>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="relative">
                                    <div
                                      className="absolute inset-0 rounded-xl transform rotate-1 scale-[1.02] -z-10"
                                      style={{
                                        backgroundImage:
                                          "linear-gradient(156.995deg, rgb(223, 234, 254) 7.9104%, rgb(241, 233, 251) 50%, rgb(244, 232, 246) 92.09%)",
                                      }}
                                    />
                                    <motion.div
                                      className="bg-white rounded-xl shadow-lg p-3 md:p-4 transform -rotate-[0.5deg]"
                                      whileHover={{ scale: 1.02, rotate: 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <div className="rounded-lg overflow-hidden">
                                        <img
                                          src={exp.screenshot}
                                          alt={exp.screenshotAlt}
                                          className="w-full h-auto object-cover"
                                        />
                                      </div>
                                    </motion.div>
                                  </div>
                                )}
                              </motion.div>

                              {/* Details */}
                              <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                              >
                                {/* Bullet Points */}
                                <ul className="space-y-3 font-['Inter',sans-serif] text-[#4a5565] text-sm md:text-base mb-5">
                                  {exp.bullets.map((item, bIdx) => (
                                    <motion.li
                                      key={bIdx}
                                      className="flex gap-3 items-start"
                                      initial={{ opacity: 0, x: -15 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        duration: 0.4,
                                        delay: 0.35 + bIdx * 0.08,
                                      }}
                                    >
                                      <span
                                        className="text-lg flex-shrink-0 leading-6"
                                        style={{ color: exp.accentColor }}
                                      >
                                        •
                                      </span>
                                      <span className="leading-relaxed">
                                        {item}
                                      </span>
                                    </motion.li>
                                  ))}
                                </ul>

                                {/* Tags */}
                                {exp.tags && (
                                  <motion.div
                                    className="flex flex-wrap gap-2 mb-5"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.5 }}
                                  >
                                    {exp.tags.map((tag, tIdx) => (
                                      <span
                                        key={tIdx}
                                        className="px-4 py-1.5 rounded-full text-xs md:text-sm font-['Inter',sans-serif] border"
                                        style={{
                                          color: exp.accentColor,
                                          borderColor: `${exp.accentColor}40`,
                                          backgroundColor: `${exp.accentColor}08`,
                                        }}
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                  </motion.div>
                                )}

                                {/* Certificate Button */}
                                {exp.certificateUrl && (
                                  <motion.button
                                    className="bg-[#101828] text-white px-5 py-2.5 rounded-full font-['Inter',sans-serif] text-sm shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2 cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      window.open(exp.certificateUrl, "_blank");
                                    }}
                                  >
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.5 15L12.5 10L7.5 5"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                    Certificate
                                  </motion.button>
                                )}
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
import React from "react";
import { motion } from "motion/react";
import imgScreenshot from "figma:asset/a408c3c294fd54db242b36f0be3223e6c56740ae.png";
import imgDvPartnerLogo from "figma:asset/5c7e5d13a4551192be5c4f94808a36228eaece9c.png";

export function ProfessionalExperience() {
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

        {/* Main Content - Two Column Layout on Desktop, Single Column on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Screenshot */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative">
              {/* Gradient Background Card */}
              <div
                className="absolute inset-0 rounded-2xl transform rotate-2 scale-105 -z-10"
                style={{
                  backgroundImage:
                    "linear-gradient(156.995deg, rgb(223, 234, 254) 7.9104%, rgb(241, 233, 251) 50%, rgb(244, 232, 246) 92.09%)",
                }}
              />

              {/* White Container with Shadow */}
              <motion.div
                className="bg-white rounded-2xl shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)] p-4 md:p-6 transform -rotate-1"
                whileHover={{ scale: 1.02, rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={imgScreenshot}
                    alt="Dharmik Vibes Project Screenshot"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Company Logo - positioned absolutely for desktop, relatively for mobile */}
            <motion.div
              className="relative lg:absolute lg:left-0 lg:top-4 w-32 h-32 md:w-40 md:h-32 mx-auto lg:mx-0 mb-6 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src={imgDvPartnerLogo}
                alt="Dharmik Vibes Logo"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Role Badge - positioned to align with Figma design */}
            <motion.div
              className="bg-white rounded-full shadow-lg px-6 py-3 mb-6 lg:ml-[220px] lg:mt-8 inline-block w-full lg:w-auto text-center lg:text-left"
              whileHover={{ x: 3, y: -3 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-['Inter',sans-serif] text-[#4a5565] text-sm md:text-base font-semibold leading-6">
                UX Designer Intern | Dharmik Vibes
              </p>
              <p className="font-['Inter',sans-serif] text-[#4a5565] text-sm md:text-base font-semibold leading-6">
                (Divvib Lifestyle Pvt Ltd)
              </p>
              <p className="font-['Inter',sans-serif] text-[#6a7282] text-xs md:text-sm mt-1 leading-5">
                Aug 2025 – Nov 2025
              </p>
            </motion.div>

            {/* Responsibilities List */}
            <motion.ul
              className="space-y-3 md:space-y-4 font-['Inter',sans-serif] text-[#4a5565] text-base md:text-lg mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                "Conducted extensive user research, personas, and journey mapping for spiritual travel.",
                "Designed clear Information Architecture and interactive wireframes to simplify navigation.",
                "Created intuitive UI for AI-driven recommendation engines.",
                "Enhanced brand identity with aesthetically aligned UI elements and color systems.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex gap-3 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                  }}
                >
                  <span className="text-[#ad46ff] text-xl flex-shrink-0 leading-7">
                    •
                  </span>
                  <span className="leading-[1.625]">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Certificate Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.button
                className="bg-[#101828] text-white px-6 py-3 rounded-full font-['Inter',sans-serif] text-sm md:text-base shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2 mx-auto lg:mx-0 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/15aqvw89Qhh2A167Bg-MFqj2wwsDH2V4f/view?usp=sharing",
                    "_blank",
                  )
                }
              >
                <svg
                  width="20"
                  height="20"
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
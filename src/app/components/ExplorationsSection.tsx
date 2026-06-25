import React from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Layout,
  BookOpen,
  Orbit,
} from "lucide-react";

interface ExplorationCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  points: string[];
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  index: number;
  focusedIndex: number | null;
  onFocus: () => void;
  position: { left: string; top: string };
  rotation: number;
}

function ExplorationCard({
  icon,
  title,
  subtitle,
  points,
  accentColor,
  gradientFrom,
  gradientTo,
  index,
  focusedIndex,
  onFocus,
  position,
  rotation,
}: ExplorationCardProps) {
  const isFocused = focusedIndex === index;
  const isOtherFocused = focusedIndex !== null && !isFocused;

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: position.left,
        top: position.top,
      }}
      onMouseEnter={onFocus}
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 0.61, 0.36, 1],
      }}
    >
      <motion.div
        className="relative bg-white rounded-2xl md:rounded-3xl p-5 md:p-7 shadow-lg overflow-hidden"
        style={{
          width: isFocused
            ? "min(340px, 90vw)"
            : "min(260px, 85vw)",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: isFocused ? accentColor : "#f3f4f6",
        }}
        animate={{
          scale: isFocused ? 1.05 : isOtherFocused ? 0.92 : 1,
          opacity: isOtherFocused ? 0.5 : 1,
          rotate: isFocused ? 0 : rotation,
          zIndex: isFocused ? 50 : 10,
          boxShadow: isFocused
            ? `0 25px 60px ${accentColor}35, 0 0 0 1px ${accentColor}20`
            : "0 10px 30px rgba(0,0,0,0.08)",
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 0.61, 0.36, 1],
        }}
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${gradientFrom}, transparent 70%)`,
          }}
          animate={{ opacity: isFocused ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Floating particles when focused */}
        {isFocused && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: accentColor,
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  y: [0, -30, -60],
                  x: [
                    0,
                    Math.random() * 20 - 10,
                    Math.random() * 40 - 20,
                  ],
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut",
                }}
              />
            ))}
          </>
        )}

        {/* Icon with glow effect */}
        <div className="relative mb-5 flex justify-center z-10">
          <motion.div
            className="relative w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${accentColor}15, ${accentColor}25)`,
            }}
            animate={{
              boxShadow: isFocused
                ? [
                    `0 0 20px ${accentColor}40`,
                    `0 0 30px ${accentColor}60`,
                    `0 0 20px ${accentColor}40`,
                  ]
                : `0 4px 12px ${accentColor}20`,
              rotate: isFocused ? [0, 5, -5, 0] : 0,
            }}
            transition={{
              duration: 2,
              repeat: isFocused ? Infinity : 0,
              ease: "easeInOut",
            }}
          >
            <div style={{ color: accentColor }}>{icon}</div>
          </motion.div>

          {/* Orbiting dot */}
          {isFocused && (
            <motion.div
              className="absolute w-2 h-2 rounded-full"
              style={{ backgroundColor: accentColor }}
              animate={{
                x: [15, 30, 15, 0, 15],
                y: [0, -15, -30, -15, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          )}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <motion.h3
            className="font-['Inter',sans-serif] text-[16px] md:text-[19px] font-bold mb-2 md:mb-2.5 text-center"
            style={{
              color: isFocused ? accentColor : "#101828",
            }}
            animate={{
              scale: isFocused ? 1.02 : 1,
            }}
          >
            {title}
          </motion.h3>

          <p className="font-['Inter',sans-serif] text-[12px] md:text-[14px] text-[#4a5565] text-center mb-3 md:mb-4 leading-relaxed">
            {subtitle}
          </p>

          {/* Expandable points section */}
          <motion.div
            initial={false}
            animate={{
              height: isFocused ? "auto" : 0,
              opacity: isFocused ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className="h-[2px] w-12 mx-auto mb-4 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${accentColor}, transparent)`,
              }}
            />
            <ul className="space-y-2.5">
              {points.map((point, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{
                    opacity: isFocused ? 1 : 0,
                    x: isFocused ? 0 : -15,
                  }}
                  transition={{
                    delay: idx * 0.08,
                    duration: 0.3,
                  }}
                  className="flex items-start gap-2 md:gap-2.5 font-['Inter',sans-serif] text-[11px] md:text-[13px] text-[#6a7282] leading-relaxed"
                >
                  <motion.span
                    style={{ color: accentColor }}
                    className="mt-1 text-base"
                    whileHover={{ scale: 1.3 }}
                  >
                    •
                  </motion.span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ExplorationsSection() {
  const [focusedIndex, setFocusedIndex] = React.useState<
    number | null
  >(2);

  const explorations = [
    {
      icon: <Sparkles className="w-7 h-7" strokeWidth={2.5} />,
      title: "AI & Creative Development",
      subtitle: "Designing with AI. Shipping with code.",
      points: [
        "Vibe-coding with AI tools (Cursor, v0)",
        "Built this site with HTML, CSS, JS",
        "From design files to working products",
      ],
      accentColor: "#7c3aed",
      gradientFrom: "rgba(124, 58, 237, 0.3)",
      gradientTo: "rgba(168, 85, 247, 0.1)",
      position: { left: "8%", top: "15%" },
      rotation: -3,
    },
    {
      icon: <Layout className="w-7 h-7" strokeWidth={2.5} />,
      title: "Advanced Product Thinking",
      subtitle: "Beyond pixels. Into systems.",
      points: [
        "Solving real, complex problems",
        "Scalable design systems",
        "Designed for edge cases",
      ],
      accentColor: "#8b5cf6",
      gradientFrom: "rgba(139, 92, 246, 0.3)",
      gradientTo: "rgba(124, 58, 237, 0.1)",
      position: { left: "28%", top: "50%" },
      rotation: 2,
    },
    {
      icon: <BookOpen className="w-7 h-7" strokeWidth={2.5} />,
      title: "Narrative & Storytelling",
      subtitle: "Work that tells a story.",
      points: [
        "Case studies as journeys",
        "Clear design reasoning",
        "Decisions, not just screens",
      ],
      accentColor: "#a855f7",
      gradientFrom: "rgba(168, 85, 247, 0.3)",
      gradientTo: "rgba(147, 51, 234, 0.1)",
      position: { left: "52%", top: "8%" },
      rotation: -2,
    },
    {
      icon: <Orbit className="w-7 h-7" strokeWidth={2.5} />,
      title: "Future Tech Integration",
      subtitle: "Designing what's next.",
      points: [
        "Exploring Gen-AI interfaces",
        "New interaction patterns",
        "Learning ahead of trends",
      ],
      accentColor: "#9333ea",
      gradientFrom: "rgba(147, 51, 234, 0.3)",
      gradientTo: "rgba(126, 34, 206, 0.1)",
      position: { left: "75%", top: "45%" },
      rotation: 3,
    },
  ];

  // Connection dots between cards
  const connectionPoints = [
    { left: "19%", top: "32%" },
    { left: "40%", top: "28%" },
    { left: "63%", top: "26%" },
  ];

  return (
    <div
      id="explorations"
      className="relative bg-gradient-to-br from-white via-purple-50/20 to-pink-50/10 py-12 md:py-16 lg:py-20 px-4 md:px-8 overflow-hidden"
      data-name="ExplorationsSection"
    >
      {/* Ambient background blobs */}
      <motion.div
        className="absolute top-32 left-[-10%] w-[600px] h-[600px] bg-purple-200/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-10 right-[-5%] w-[500px] h-[500px] bg-pink-200/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-[30%] w-[400px] h-[400px] bg-blue-200/8 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-[1600px] mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 md:mb-12 lg:mb-14 relative z-30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="font-['Caveat',sans-serif] text-[28px] md:text-[34px] lg:text-[38px] text-purple-400/80 mb-2"
            initial={{ opacity: 0, rotate: -3 }}
            whileInView={{ opacity: 1, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Here is what I'm
          </motion.p>

          <motion.h2
            className="font-['Playfair_Display',serif] text-2xl md:text-4xl lg:text-[58px] text-[#101828] mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Exploring
          </motion.h2>

          <motion.p
            className="font-['Inter',sans-serif] text-[13px] md:text-[15px] text-[#6a7282] max-w-lg mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hover over each card to see my journey
          </motion.p>
        </motion.div>

        {/* Cards Container - Organic Layout */}
        <div className="relative w-full h-[500px] md:h-[580px] lg:h-[720px]">
          {/* Curved SVG path connecting cards - Hidden on mobile */}
          <svg
            className="hidden md:block absolute inset-0 w-full h-full pointer-events-none opacity-40"
            style={{ zIndex: 1 }}
          >
            <defs>
              <linearGradient
                id="pathGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stopColor="#7c3aed"
                  stopOpacity="0.2"
                />
                <stop
                  offset="33%"
                  stopColor="#8b5cf6"
                  stopOpacity="0.3"
                />
                <stop
                  offset="66%"
                  stopColor="#a855f7"
                  stopOpacity="0.3"
                />
                <stop
                  offset="100%"
                  stopColor="#9333ea"
                  stopOpacity="0.2"
                />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur
                  stdDeviation="3"
                  result="coloredBlur"
                />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Smooth flowing path through all cards */}
            <motion.path
              d="M 12% 22% Q 20% 35%, 32% 57% T 56% 15% Q 65% 30%, 79% 52%"
              fill="none"
              stroke="url(#pathGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="8 8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />

            {/* Animated dash overlay */}
            <motion.path
              d="M 12% 22% Q 20% 35%, 32% 57% T 56% 15% Q 65% 30%, 79% 52%"
              fill="none"
              stroke="url(#pathGrad)"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.6"
              filter="url(#glow)"
              animate={{
                strokeDasharray: ["0 100", "100 0"],
                strokeDashoffset: [0, -200],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>

          {/* Connection indicator dots - Hidden on mobile */}
          {connectionPoints.map((point, idx) => (
            <motion.div
              key={idx}
              className="hidden md:block absolute w-3 h-3 rounded-full bg-gradient-to-br from-purple-300 to-pink-300"
              style={{
                left: point.left,
                top: point.top,
                boxShadow: "0 0 15px rgba(168, 85, 247, 0.4)",
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5 + idx * 0.2,
                duration: 0.5,
              }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: idx * 0.3,
              }}
            />
          ))}

          {/* Mobile 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4 md:hidden items-start">
            {explorations.map((exploration, index) => (
              <motion.div
                key={index}
                className="cursor-pointer"
                onClick={() =>
                  setFocusedIndex(
                    focusedIndex === index ? null : index,
                  )
                }
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
              >
                <motion.div
                  className="relative bg-white rounded-2xl p-4 shadow-lg overflow-hidden h-full"
                  style={{
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderColor:
                      focusedIndex === index
                        ? exploration.accentColor
                        : "#f3f4f6",
                  }}
                  animate={{
                    scale:
                      focusedIndex === index
                        ? 1.05
                        : focusedIndex !== null &&
                            focusedIndex !== index
                          ? 0.92
                          : 1,
                    opacity:
                      focusedIndex !== null &&
                      focusedIndex !== index
                        ? 0.5
                        : 1,
                    rotate:
                      focusedIndex === index
                        ? 0
                        : exploration.rotation,
                    zIndex: focusedIndex === index ? 50 : 10,
                    boxShadow:
                      focusedIndex === index
                        ? `0 25px 60px ${exploration.accentColor}35, 0 0 0 1px ${exploration.accentColor}20`
                        : "0 10px 30px rgba(0,0,0,0.08)",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 0.61, 0.36, 1],
                  }}
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${exploration.gradientFrom}, transparent 70%)`,
                    }}
                    animate={{
                      opacity: focusedIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Floating particles when focused */}
                  {focusedIndex === index && (
                    <>
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1.5 h-1.5 rounded-full"
                          style={{
                            backgroundColor:
                              exploration.accentColor,
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                          }}
                          animate={{
                            y: [0, -30, -60],
                            x: [
                              0,
                              Math.random() * 20 - 10,
                              Math.random() * 40 - 20,
                            ],
                            opacity: [0, 0.8, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2 + Math.random(),
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeOut",
                          }}
                        />
                      ))}
                    </>
                  )}

                  {/* Icon with glow effect */}
                  <div className="relative mb-3 flex justify-center z-10">
                    <motion.div
                      className="relative w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${exploration.accentColor}15, ${exploration.accentColor}25)`,
                      }}
                      animate={{
                        boxShadow:
                          focusedIndex === index
                            ? [
                                `0 0 20px ${exploration.accentColor}40`,
                                `0 0 30px ${exploration.accentColor}60`,
                                `0 0 20px ${exploration.accentColor}40`,
                              ]
                            : `0 4px 12px ${exploration.accentColor}20`,
                        rotate:
                          focusedIndex === index
                            ? [0, 5, -5, 0]
                            : 0,
                      }}
                      transition={{
                        duration: 2,
                        repeat:
                          focusedIndex === index ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                    >
                      <div
                        style={{
                          color: exploration.accentColor,
                        }}
                      >
                        {exploration.icon}
                      </div>
                    </motion.div>

                    {/* Orbiting dot */}
                    {focusedIndex === index && (
                      <motion.div
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                          backgroundColor:
                            exploration.accentColor,
                        }}
                        animate={{
                          x: [15, 30, 15, 0, 15],
                          y: [0, -15, -30, -15, 0],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.h3
                      className="font-['Inter',sans-serif] text-[13px] font-bold mb-1.5 text-center"
                      style={{
                        color:
                          focusedIndex === index
                            ? exploration.accentColor
                            : "#101828",
                      }}
                      animate={{
                        scale:
                          focusedIndex === index ? 1.02 : 1,
                      }}
                    >
                      {exploration.title}
                    </motion.h3>

                    <p className="font-['Inter',sans-serif] text-[11px] text-[#4a5565] text-center mb-2 leading-relaxed">
                      {exploration.subtitle}
                    </p>

                    {/* Expandable points section */}
                    <motion.div
                      initial={false}
                      animate={{
                        height:
                          focusedIndex === index ? "auto" : 0,
                        opacity: focusedIndex === index ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div
                        className="h-[2px] w-8 mx-auto mb-2 rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${exploration.accentColor}, transparent)`,
                        }}
                      />
                      <ul className="space-y-1.5">
                        {exploration.points.map(
                          (point, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -15 }}
                              animate={{
                                opacity:
                                  focusedIndex === index
                                    ? 1
                                    : 0,
                                x:
                                  focusedIndex === index
                                    ? 0
                                    : -15,
                              }}
                              transition={{
                                delay: idx * 0.08,
                                duration: 0.3,
                              }}
                              className="flex items-start gap-1.5 font-['Inter',sans-serif] text-[10px] text-[#6a7282] leading-relaxed"
                            >
                              <motion.span
                                style={{
                                  color:
                                    exploration.accentColor,
                                }}
                                className="mt-0.5 text-sm"
                                whileHover={{ scale: 1.3 }}
                              >
                                •
                              </motion.span>
                              <span>{point}</span>
                            </motion.li>
                          ),
                        )}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Exploration Cards - Organic Layout */}
          <div className="hidden md:block">
            {explorations.map((exploration, index) => (
              <ExplorationCard
                key={index}
                icon={exploration.icon}
                title={exploration.title}
                subtitle={exploration.subtitle}
                points={exploration.points}
                accentColor={exploration.accentColor}
                gradientFrom={exploration.gradientFrom}
                gradientTo={exploration.gradientTo}
                index={index}
                focusedIndex={focusedIndex}
                onFocus={() => setFocusedIndex(index)}
                position={exploration.position}
                rotation={exploration.rotation}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
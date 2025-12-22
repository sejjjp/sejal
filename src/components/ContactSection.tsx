import React from "react";
import { motion } from "motion/react";
import {
  Mail,
  Linkedin,
  FileText,
  ExternalLink,
} from "lucide-react";

export function ContactSection() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "sejalkautkar@gmail.com",
      href: "mailto:sejalkautkar@gmail.com",
      description: "Drop me a message",
      isEmail: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "sejal-kautkar",
      href: "https://www.linkedin.com/in/sejal-kautkar/",
      description: "Let's connect professionally",
      isEmail: false,
    },
    {
      icon: FileText,
      label: "Behance",
      value: "sejjjjjjk",
      href: "https://www.behance.net/sejjjjjjk",
      description: "View my design work",
      isEmail: false,
    },
    {
      icon: FileText,
      label: "Resume",
      value: "View Resume",
      href: "https://drive.google.com/file/d/1ozv_Mugd-026FcVxi2KTiyJ0-hKXePKo/view",
      description: "Download my CV",
      isEmail: false,
    },
  ];

  const handleEmailClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    isEmail: boolean,
  ) => {
    if (isEmail) {
      e.preventDefault();
      window.location.href = "mailto:sejalkautkar@gmail.com";
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-white py-20 md:py-25 px-4 md:px-8 lg:px-12 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-purple-100/30 to-pink-100/30 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-br from-blue-100/30 to-cyan-100/30 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['Playfair_Display',sans-serif] text-4xl md:text-5xl lg:text-[64px] text-[#101828] mb-6">
            Let's Create Together
          </h2>
          <p className="font-['Inter',sans-serif] text-base md:text-lg leading-relaxed text-[#4a5565] max-w-[600px] mx-auto">
            I'm always open to discussing new projects, creative
            ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={
                link.href.startsWith("http")
                  ? "_blank"
                  : undefined
              }
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group relative bg-white rounded-[20px] p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.08)] cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={(e) => handleEmailClick(e, link.isEmail)}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:from-purple-50 group-hover:to-pink-50 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <link.icon className="w-5 h-5 text-gray-700 group-hover:text-purple-600 transition-colors" />
                </motion.div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-['Inter',sans-serif] text-[14px] text-gray-500">
                      {link.label}
                    </p>
                    <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="font-['Inter',sans-serif] text-[18px] text-[#101828] mb-2 truncate">
                    {link.value}
                  </p>
                  <p className="font-['Inter',sans-serif] text-[14px] text-gray-500">
                    {link.description}
                  </p>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
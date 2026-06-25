import React from "react";
import { motion } from "motion/react";
import svgPaths from "./imports/svg-knytx4g0jx";
import imgImage1 from "figma:asset/b07f04063ffbf4ac29f42d3c0464701314403cca.png";
import imgImage251 from "figma:asset/7707d3ce251bee5dc79e0eb350da4304e479ea31.png";
import { imgGroup } from "./imports/svg-alsdf";
import { AnimatedParticles } from "./components/AnimatedParticles";
import { ProfessionalExperience } from "./components/ProfessionalExperience";
import { ExplorationsSection } from "./components/ExplorationsSection";
import { ContactSection } from "./components/ContactSection";
import { FlowyBackground } from "./components/FlowyBackground";
import { SmoothScrollHandler } from "./components/SmoothScroll";
import { PDFViewerModal } from "./components/PDFViewerModal";
import { SamsungIrisCaseStudy } from "./components/SamsungIrisCaseStudy";
import imgSamsungIris from "figma:asset/d240d9fe427e86989f37f98da4e96de2fa8190d6.png";
import imgFins from "figma:asset/5d470f87e1948326477b8994d8599a467dc80dfa.png";
import imgMoHFW from "figma:asset/09339eee87f6aadccbaba46a2109de3122ae2dca.png";
import imgEssentrail from "figma:asset/17308e162270ed8ff61719fad065827130dc362a.png";
import imgChromify from "figma:asset/f5d28887cb1f0d0767c5c4d29311de55b6af65b2.png";
import imgJioMart from "figma:asset/89a3b169c18161b3b565d1e4949f65ec3e49fbfd.png";
import imgSamsungIrisWave from "figma:asset/b0e824ac2079e7c633755621ccff69652e5b1c8b.png";
import imgDharmikVibesLogo from "figma:asset/473e1227a87653a6bdbf525cb38767c0b58c836f.png";
import imgFinsFloating from "figma:asset/f56814f9c49b21026ae8c1c3181a6e7f23ca06e0.png";
import imgAccentureLogo from "../imports/image-6.png";

function DeviconIllustrator({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={className} data-name="devicon:illustrator">
      <div
        className="absolute inset-[1.25%_-0.08%_-0.89%_-3.26%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 52 50"
        >
          <path
            d={svgPaths.p21062200}
            fill="var(--fill-0, #330000)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute inset-[22.89%_23.82%_29.77%_20.6%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 28 24"
        >
          <path
            d={svgPaths.p2fbca200}
            fill="var(--fill-0, #FF9A00)"
            id="Vector"
          />
        </svg>
      </div>
    </div>
  );
}

function SkillIconsFigmaLight({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={className}
      data-name="skill-icons:figma-light"
    >
      <div
        className="absolute contents inset-0"
        data-name="Group"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 50 50"
        >
          <path
            d={svgPaths.p16155c00}
            fill="var(--fill-0, #F4F2ED)"
            id="Vector"
          />
        </svg>
        <div
          className="absolute contents inset-[10.94%_24.08%_10.94%_23.83%]"
          data-name="Clip path group"
        >
          <div
            className="absolute inset-[10.94%_24.08%_10.94%_23.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.002px_0px] mask-size-[31.867px_42.643px]"
            data-name="Group"
            style={{ maskImage: `url('${imgGroup}')` }}
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 27 40"
            >
              <g id="Group">
                <path
                  d={svgPaths.p3d8153f0}
                  fill="var(--fill-0, #0ACF83)"
                  id="Vector"
                />
                <path
                  d={svgPaths.p235a8180}
                  fill="var(--fill-0, #A259FF)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p344f4e80}
                  fill="var(--fill-0, #F24E1E)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.p3b71cd00}
                  fill="var(--fill-0, #FF7262)"
                  id="Vector_4"
                />
                <path
                  d={svgPaths.p90e3600}
                  fill="var(--fill-0, #1ABCFE)"
                  id="Vector_5"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="absolute inset-0 w-full h-full"
      data-name="Container"
      style={{
        backgroundImage:
          "linear-gradient(142.895deg, rgba(249, 250, 251, 0.5) 0%, rgb(255, 255, 255) 50%, rgba(250, 245, 255, 0.3) 100%)",
      }}
    />
  );
}

function Container1() {
  return (
    <div
      className="absolute blur-3xl filter left-[1207.63px] rounded-[1.67772e+07px] size-[460.715px] top-[273.27px]"
      data-name="Container"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(245, 245, 245, 0.3) 0%, rgba(250, 250, 250, 0.3) 100%)",
      }}
    />
  );
}

function Container2() {
  return (
    <div
      className="absolute blur-3xl filter left-[198.76px] rounded-[1.67772e+07px] size-[415.342px] top-[589.56px]"
      data-name="Container"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(245, 245, 245, 0.3) 0%, rgba(250, 250, 250, 0.3) 100%)",
      }}
    />
  );
}

function Container3() {
  return (
    <div
      className="absolute blur-3xl filter left-[603.34px] rounded-[1.67772e+07px] size-[374.036px] top-[518.72px]"
      data-name="Container"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(245, 245, 245, 0.2) 0%, rgba(250, 250, 250, 0.2) 100%)",
      }}
    />
  );
}

function Container4() {
  return (
    <div
      className="absolute left-[992.97px] opacity-[0.267] rounded-[1.67772e+07px] size-[9.372px] top-[966.45px]"
      data-name="Container"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(218, 178, 255) 0%, rgb(253, 165, 213) 100%)",
      }}
    />
  );
}

function Container5() {
  return (
    <div
      className="absolute left-[906.56px] opacity-20 rounded-[1.67772e+07px] size-[8.001px] top-[1704.4px]"
      data-name="Container"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(218, 178, 255) 0%, rgb(253, 165, 213) 100%)",
      }}
    />
  );
}

function Container6() {
  return (
    <div
      className="absolute left-[395.76px] opacity-20 rounded-[1.67772e+07px] size-[8.009px] top-[877.43px]"
      data-name="Container"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(218, 178, 255) 0%, rgb(253, 165, 213) 100%)",
      }}
    />
  );
}

function Container7() {
  return (
    <div
      className="absolute left-[249.72px] opacity-[0.259] rounded-[1.67772e+07px] size-[9.218px] top-[784.39px]"
      data-name="Container"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(218, 178, 255) 0%, rgb(253, 165, 213) 100%)",
      }}
    />
  );
}

function Container8() {
  return (
    <div
      className="absolute left-[1064.86px] opacity-[0.203] rounded-[1.67772e+07px] size-[8.058px] top-[742.9px]"
      data-name="Container"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(218, 178, 255) 0%, rgb(253, 165, 213) 100%)",
      }}
    />
  );
}

function Container9() {
  return (
    <div
      className="absolute left-[845.77px] opacity-[0.344] rounded-[1.67772e+07px] size-[10.608px] top-[449.13px]"
      data-name="Container"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(218, 178, 255) 0%, rgb(253, 165, 213) 100%)",
      }}
    />
  );
}

function Container10() {
  return (
    <div
      className="absolute h-[9.415px] left-[906.09px] opacity-[0.271] rounded-[1.67772e+07px] top-[2057.08px] w-[9.414px]"
      data-name="Container"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(218, 178, 255) 0%, rgb(253, 165, 213) 100%)",
      }}
    />
  );
}

function Container11() {
  return (
    <div
      className="absolute left-[989.9px] opacity-[0.354] rounded-[1.67772e+07px] size-[10.727px] top-[649.57px]"
      data-name="Container"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(218, 178, 255) 0%, rgb(253, 165, 213) 100%)",
      }}
    />
  );
}

function Container12() {
  return (
    <div
      className="absolute left-[1430.2px] opacity-20 rounded-[1.67772e+07px] size-[8.007px] top-[778.6px]"
      data-name="Container"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(218, 178, 255) 0%, rgb(253, 165, 213) 100%)",
      }}
    />
  );
}

function Container13() {
  return (
    <div
      className="absolute left-[1196.69px] opacity-[0.543] rounded-[1.67772e+07px] size-[11.948px] top-[200.26px]"
      data-name="Container"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(218, 178, 255) 0%, rgb(253, 165, 213) 100%)",
      }}
    />
  );
}

function Container14() {
  return (
    <div
      className="absolute left-[965.99px] opacity-[0.392] rounded-[1.67772e+07px] size-[11.121px] top-[1572.7px]"
      data-name="Container"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(218, 178, 255) 0%, rgb(253, 165, 213) 100%)",
      }}
    />
  );
}

function Container15() {
  return (
    <div
      className="absolute left-[989.64px] opacity-40 rounded-[1.67772e+07px] size-[11.216px] top-[613.93px]"
      data-name="Container"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(218, 178, 255) 0%, rgb(253, 165, 213) 100%)",
      }}
    />
  );
}

function Container16() {
  return (
    <div
      className="absolute left-[45.14px] opacity-[0.292] rounded-[1.67772e+07px] size-[9.82px] top-[896.74px]"
      data-name="Container"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(218, 178, 255) 0%, rgb(253, 165, 213) 100%)",
      }}
    />
  );
}

function Container17() {
  return (
    <div
      className="absolute left-[971.95px] opacity-[0.519] rounded-[1.67772e+07px] size-[11.894px] top-[933.7px]"
      data-name="Container"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(218, 178, 255) 0%, rgb(253, 165, 213) 100%)",
      }}
    />
  );
}

function Container18() {
  return (
    <div
      className="absolute left-[931.03px] opacity-[0.233] rounded-[1.67772e+07px] size-[8.675px] top-[983.29px]"
      data-name="Container"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(218, 178, 255) 0%, rgb(253, 165, 213) 100%)",
      }}
    />
  );
}

function Icon() {
  return (
    <div
      className="absolute inset-0 w-full h-full"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1478 1118"
      >
        <g clipPath="url(#clip0_7_535)" id="Icon" opacity="0.3">
          <path
            d={svgPaths.p32963600}
            id="Vector"
            stroke="url(#paint0_linear_7_535)"
            strokeWidth="3"
          />
          <path
            d={svgPaths.pe520f80}
            id="Vector_2"
            stroke="url(#paint1_linear_7_535)"
            strokeWidth="2"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_7_535"
            x1="0"
            x2="150000"
            y1="269.815"
            y2="269.815"
          >
            <stop stopColor="#E9D5FF" stopOpacity="0.3" />
            <stop
              offset="0.5"
              stopColor="#FBCFE8"
              stopOpacity="0.5"
            />
            <stop
              offset="1"
              stopColor="#E9D5FF"
              stopOpacity="0.3"
            />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_7_535"
            x1="0"
            x2="150000"
            y1="462.892"
            y2="462.892"
          >
            <stop stopColor="#E9D5FF" stopOpacity="0.3" />
            <stop
              offset="0.5"
              stopColor="#FBCFE8"
              stopOpacity="0.5"
            />
            <stop
              offset="1"
              stopColor="#E9D5FF"
              stopOpacity="0.3"
            />
          </linearGradient>
          <clipPath id="clip0_7_535">
            <rect fill="white" height="1118" width="1478" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div
      className="border-2 border-[rgba(233,212,255,0.3)] border-solid rounded-[24px] size-[137.352px]"
      data-name="Container"
    />
  );
}

function Container20() {
  return (
    <div
      className="border-2 border-[rgba(252,206,232,0.3)] border-solid rounded-br-[40.708px] rounded-tl-[94.428px] size-[135.136px]"
      data-name="Container"
    />
  );
}

function AnimatedBackground() {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden"
      data-name="AnimatedBackground"
    >
      <Container />
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Container1 />
      </motion.div>
      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Container2 />
      </motion.div>
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Container3 />
      </motion.div>
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
      <Icon />
      <motion.div
        className="absolute flex items-center justify-center left-[301.97px] size-[147.388px] top-[71.43px]"
        style={
          {
            "--transform-inner-width": "4",
            "--transform-inner-height": "4",
          } as React.CSSProperties
        }
        animate={{
          rotate: [184.356, 194.356, 184.356],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex-none">
          <Container19 />
        </div>
      </motion.div>
      <motion.div
        className="absolute flex items-center justify-center left-[744.33px] size-[190.226px] top-[635.71px]"
        style={
          {
            "--transform-inner-width": "4",
            "--transform-inner-height": "4",
          } as React.CSSProperties
        }
        animate={{
          rotate: [140.515, 150.515, 140.515],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex-none">
          <Container20 />
        </div>
      </motion.div>
      <AnimatedParticles />
    </div>
  );
}

function Text() {
  return (
    <div className="relative" data-name="Text">
      <p className="font-['Caveat',sans-serif] font-normal text-[rgb(217,147,255)] text-2xl md:text-3xl xl:text-[36px] text-center">{`Hi! I'm`}</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative w-full" data-name="Heading 1">
      <p className="font-['Playfair_Display',sans-serif] font-normal text-[#101828] text-3xl md:text-5xl xl:text-[96px] text-center">
        Sejal Kautkar
      </p>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative px-4" data-name="HeroSection">
      <p className="font-['Inter',sans-serif] font-normal text-[#4a5565] text-sm md:text-base text-center">{`UI/UX Design Scholar & Intern`}</p>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="bg-white px-6 py-3 rounded-full shadow-lg inline-block"
      data-name="Container"
    >
      <HeroSection />
    </div>
  );
}

function Paragraph() {
  return (
    <div
      className="relative w-full max-w-2xl mx-auto"
      data-name="Paragraph"
    >
      <span className="font-['Inter',sans-serif] leading-relaxed text-[#4a5565] text-sm md:text-base text-center font-bold font-normal">
        {`I’m a UI/UX Design Scholar at MIT ADT, Pune 🇮🇳. I don't just design screens; I solve complex logistical problems. From proactive AI agents like `}
      </span>
      <span className="font-['Inter',sans-serif] leading-relaxed text-[#4a5565] text-sm md:text-base text-center font-bold">
        {`Samsung Iris`}
      </span>
      <span className="font-['Inter',sans-serif] leading-relaxed text-[#4a5565] text-sm md:text-base text-center font-normal">{` to privacy-first tools like `}</span>
      <span className="font-['Inter',sans-serif] leading-relaxed text-[#4a5565] text-sm md:text-base text-center font-bold">{`Fins`}</span>
      <span className="font-['Inter',sans-serif] leading-relaxed text-[#4a5565] text-sm md:text-base text-center font-normal">
        {`, I bridge the gap between aesthetic appeal and functional utility.`}
      </span>
    </div>
  );
}

function Icon1() {
  return (
    <div className="size-5" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon">
          <path
            d={svgPaths.p3e47bd00}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPaths.p3610fb80}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <a
      href="https://drive.google.com/file/d/1ozv_Mugd-026FcVxi2KTiyJ0-hKXePKo/view"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#101828] px-6 py-3 rounded-full shadow-lg inline-flex items-center gap-2 hover:bg-[#1a2332] transition-colors cursor-pointer"
      data-name="Button"
    >
      <Icon1 />
      <p className="font-['Inter',sans-serif] font-normal text-sm md:text-base text-white">
        Resume
      </p>
    </a>
  );
}

function HeroSection1() {
  return (
    <div
      className="relative xl:absolute h-auto xl:h-[474px] left-0 xl:left-[403px] top-0 xl:top-[212px] w-full xl:w-[672px] px-4"
      data-name="HeroSection"
    >
      <motion.div
        className="text-center mb-4 pt-20 md:pt-24 xl:pt-0 xl:mb-2 xl:absolute xl:left-[292.73px] xl:top-[-13.1px] z-10"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="xl:rotate-[357deg]">
          <Text />
        </div>
      </motion.div>
      <motion.div
        className="pt-2 xl:pt-0 mb-6 text-center xl:absolute xl:left-0 xl:top-[48px] xl:w-[672px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        <Heading />
      </motion.div>
      <motion.div
        className="mb-6 flex justify-center xl:absolute xl:left-[190.61px] xl:top-[168px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: "easeOut",
        }}
      >
        <Container21 />
      </motion.div>
      <motion.div
        className="mb-8 text-center xl:absolute xl:left-0 xl:top-[248px] xl:w-[672px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.6,
          ease: "easeOut",
        }}
      >
        <Paragraph />
      </motion.div>
      <motion.div
        className="flex justify-center xl:absolute xl:left-[259.68px] xl:top-[370px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          ease: "easeOut",
        }}
      >
        <Button />
      </motion.div>
    </div>
  );
}

function App() {
  return (
    <div
      className="absolute bg-white min-h-[1118px] left-0 overflow-y-auto overflow-x-clip top-0 w-full"
      data-name="App"
    >
      <AnimatedBackground />
      <div className="max-w-[1478px] mx-auto relative min-h-full">
        <HeroSection1 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div
      className="absolute h-[28.134px] left-[40.05px] top-[192.53px] w-[160.568px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[24px] left-[80.52px] not-italic text-[#101828] text-[16px] text-center text-nowrap top-[-0.21px] translate-x-[-50%]">
        Sejal Kautkar
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div
      className="absolute h-[20.137px] left-[39.32px] top-[220.48px] w-[160.361px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[16px] left-[80.59px] not-italic text-[#6a7282] text-[12px] text-center text-nowrap top-[1.43px] translate-x-[-50%]">
        UI/UX Designer
      </p>
    </div>
  );
}

function FloatingElements() {
  return (
    <div
      className="bg-white h-[261.092px] relative rounded-[16px] w-full"
      data-name="FloatingElements"
    >
      <div
        aria-hidden="true"
        className="absolute border-4 border-[#e9d4ff] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
      />
      <Paragraph1 />
      <Paragraph2 />
      <div
        className="absolute flex h-[160.882px] items-center justify-center left-[34.66px] top-[19.71px] w-[176.818px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[0.67deg]">
          <div
            className="h-[158.846px] relative rounded-[30px] w-[174.971px]"
            data-name="image 1"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
              <img
                alt=""
                className="absolute h-[146.87%] left-0 max-w-none top-[-40.19%] w-full"
                src={imgImage1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div
      className="content-stretch flex flex-col h-[285.597px] items-start pb-0 pt-[0.056px] px-[0.072px] relative w-[245.732px]"
      data-name="Container"
    >
      <div
        className="flex h-[273.587px] items-center justify-center relative shrink-0 w-full"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[357deg] w-full">
          <FloatingElements />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div
      className="relative shrink-0 size-[33.133px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 34 34"
      >
        <g id="Icon">
          <path
            d={svgPaths.p2450e500}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.76107"
          />
          <path
            d={svgPaths.p18cb5900}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.76107"
          />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative rounded-[1.67772e+07px] size-[66.266px]"
      data-name="Container"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(194, 122, 255) 0%, rgb(251, 100, 182) 100%)",
      }}
    >
      <Icon2 />
    </div>
  );
}

function Heading1() {
  return (
    <div
      className="absolute h-[29.451px] left-[35.9px] top-[113.05px] w-[156.745px]"
      data-name="Heading 3"
    >
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[24px] left-[78.41px] not-italic text-[16px] text-center text-nowrap text-white top-[-0.48px] translate-x-[-50%]">
        Samsung Iris 2.0
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div
      className="absolute h-[25.454px] left-[37.03px] top-[145.03px] w-[156.605px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[20px] left-[78.09px] not-italic text-[#99a1af] text-[14px] text-center text-nowrap top-[2.11px] translate-x-[-50%]">
        AI Project
      </p>
    </div>
  );
}

function Icon3() {
  return (
    <div
      className="h-[41.928px] overflow-clip relative shrink-0 w-full"
      data-name="Icon"
    >
      <div
        className="absolute inset-[8.32%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-5%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 39 39"
          >
            <path
              d={svgPaths.p3f6f2400}
              fill="var(--fill-0, #FB64B6)"
              id="Vector"
              stroke="var(--stroke-0, #FB64B6)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3.49401"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-3/4 left-[83.33%] right-[16.67%] top-[8.33%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-25%_-1.75px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 4 11"
          >
            <g id="Vector">
              <path
                d="M1.747 1.747V8.73501Z"
                fill="var(--fill-0, #FB64B6)"
              />
              <path
                d="M1.747 1.747V8.73501"
                stroke="var(--stroke-0, #FB64B6)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3.49401"
              />
            </g>
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[83.33%] left-3/4 right-[8.33%] top-[16.67%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-1.75px_-25%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 11 4"
          >
            <g id="Vector">
              <path
                d="M8.73501 1.747H1.747Z"
                fill="var(--fill-0, #FB64B6)"
              />
              <path
                d="M8.73501 1.747H1.747"
                stroke="var(--stroke-0, #FB64B6)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3.49401"
              />
            </g>
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[8.33%] left-[8.33%] right-3/4 top-3/4"
        data-name="Vector"
      >
        <div className="absolute inset-[-25%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 11 11"
          >
            <path
              d={svgPaths.p3fedf7f1}
              fill="var(--fill-0, #FB64B6)"
              id="Vector"
              stroke="var(--stroke-0, #FB64B6)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3.49401"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative size-[41.928px]"
      data-name="Container"
    >
      <Icon3 />
    </div>
  );
}

function FloatingElements1() {
  return (
    <div
      className="bg-black h-[203.588px] relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full overflow-hidden"
      data-name="FloatingElements"
    >
      {/* Wave Graphic - centered and larger */}
      <div className="absolute left-1/2 top-[35px] transform -translate-x-1/2 w-[200px] h-[90px]">
        <img
          src={imgSamsungIrisWave}
          alt="Samsung Iris Wave"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Title - Samsung Iris 2.0 */}
      <div className="absolute left-1/2 top-[130px] transform -translate-x-1/2 text-center">
        <p className="font-['Inter',sans-serif] text-white text-[16px] font-normal whitespace-nowrap">
          Samsung Iris 2.0
        </p>
      </div>

      {/* Subtitle - AI Project */}
      <div className="absolute left-1/2 top-[156px] transform -translate-x-1/2 text-center">
        <p className="font-['Inter',sans-serif] text-[#99a1af] text-[14px] font-normal whitespace-nowrap">
          AI Project
        </p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div
      className="content-stretch flex flex-col h-[210.84px] items-start pb-0 pt-[3.626px] px-[3.189px] relative w-[233.111px]"
      data-name="Container"
    >
      <div
        className="flex h-[226.173px] items-center justify-center relative shrink-0 w-full"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[354deg] w-full">
          <FloatingElements1 />
        </div>
      </div>
    </div>
  );
}

function FloatingElements2() {
  return (
    <div
      className="bg-white h-[263.458px] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] w-[273.809px]"
      data-name="FloatingElements"
    />
  );
}

function Container26() {
  return (
    <div
      className="h-[265.844px] relative w-[258.488px]"
      data-name="Container"
    >
      <div
        className="absolute flex h-[281.916px] items-center justify-center left-[-16.52px] top-[-7.35px] w-[291.52px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[4deg]">
          <FloatingElements2 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div
      className="relative shrink-0 size-[56.523px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 57 57"
      >
        <g id="Icon">
          <path
            d={svgPaths.p2376cac0}
            fill="var(--fill-0, #FF2056)"
            id="Vector"
            stroke="var(--stroke-0, #FF2056)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4.71025"
          />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div
      className="absolute content-stretch flex h-[73.235px] items-start justify-center left-[28px] pb-0 pt-[8.356px] px-0 top-[29.03px] w-[157.568px]"
      data-name="Container"
    >
      <Icon4 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div
      className="absolute h-[47.828px] left-[33.81px] top-[89.09px] w-[149.933px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[24px] left-[75.16px] not-italic text-[#101828] text-[16px] text-center text-nowrap top-[3.32px] translate-x-[-50%]">
        User-centric
      </p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div
      className="absolute h-[47.828px] left-[29.89px] top-[112.77px] w-[149.933px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[24px] left-[75.9px] not-italic text-[#101828] text-[16px] text-center text-nowrap top-[6.91px] translate-x-[-50%]">
        design
      </p>
    </div>
  );
}

function FloatingElements3() {
  return (
    <div
      className="h-[190.49px] relative rounded-[24px] w-full"
      data-name="FloatingElements"
      style={{
        backgroundImage:
          "linear-gradient(139.55deg, rgb(253, 242, 248) 0%, rgb(255, 241, 242) 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#fccee8] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]"
      />
      <Container27 />
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Container28() {
  return (
    <div
      className="content-stretch flex flex-col h-[174.843px] items-start pb-0 pt-[-7.823px] px-[-5.882px] relative w-[211.663px]"
      data-name="Container"
    >
      <div
        className="flex h-[209.238px] items-center justify-center relative shrink-0 w-full"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[5deg] w-full">
          <FloatingElements3 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div
      className="absolute h-[38.525px] left-[41.93px] top-[51.91px] w-[128.385px]"
      data-name="Heading 3"
    >
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[24px] left-[64.23px] not-italic text-[#101828] text-[16px] text-center text-nowrap top-[-1.01px] translate-x-[-50%]">
        MoHFW Website
      </p>
    </div>
  );
}

function Heading3() {
  return (
    <div
      className="absolute h-[31.98px] left-[73.63px] top-[86.96px] w-[72.415px]"
      data-name="Heading 3"
    >
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[24px] left-[36.23px] not-italic text-[#101828] text-[16px] text-center text-nowrap top-[-1.01px] translate-x-[-50%]">
        Redesign
      </p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div
      className="absolute h-[30.679px] left-[65.92px] top-[117.41px] w-[94.802px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[20px] left-[47.17px] not-italic text-[#6a7282] text-[14px] text-center text-nowrap top-[0.49px] translate-x-[-50%]">
        Public Access
      </p>
    </div>
  );
}

function FloatingElements4() {
  return (
    <div
      className="absolute bg-white h-[181.215px] left-[26.62px] rounded-[27px] top-[27.2px] w-[217.478px]"
      data-name="FloatingElements"
    >
      <Heading2 />
      <Heading3 />
      <Paragraph6 />
    </div>
  );
}

function Container29() {
  return (
    <div
      className="h-[236.79px] relative rounded-[22px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-[282.399px] overflow-hidden"
      data-name="Container"
    >
      <img
        src={imgFinsFloating}
        alt="FINS: The Agentic Wallet"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function Container30() {
  return (
    <div
      className="h-[213.98px] relative w-[264.759px]"
      data-name="Container"
    >
      <div
        className="absolute flex h-[273.788px] items-center justify-center left-[-23.92px] top-[-11.41px] w-[312.605px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[352deg]">
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div
      className="rounded-[16px] size-[77.045px]"
      data-name="Container"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(255, 137, 4) 0%, rgb(246, 51, 154) 100%)",
      }}
    />
  );
}

function Heading4() {
  return (
    <div
      className="absolute h-[25.419px] left-[34.74px] top-[114.28px] w-[172.192px]"
      data-name="Heading 3"
    >
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[24px] left-[86.06px] not-italic text-[#101828] text-[16px] text-center text-nowrap top-[-0.74px] translate-x-[-50%]">
        Dharmik Vibes
      </p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div
      className="absolute h-[25.419px] left-[34.48px] top-[146.28px] w-[172.192px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[24px] left-[86.07px] not-italic text-[#101828] text-[16px] text-center text-nowrap top-[-0.47px] translate-x-[-50%]">
        Intern
      </p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div
      className="absolute h-[21.419px] left-[34.28px] top-[174.27px] w-[172.159px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[20px] left-[86.33px] not-italic text-[#6a7282] text-[14px] text-center text-nowrap top-[0.61px] translate-x-[-50%]">{`Leadership & Strategy`}</p>
    </div>
  );
}

function FloatingElements5() {
  return (
    <div
      className="bg-white h-[229.973px] relative rounded-[24px] w-full"
      data-name="FloatingElements"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]"
      />

      {/* Accenture Logo - centered */}
      <div className="absolute left-1/2 top-[28px] transform -translate-x-1/2 w-[80px] h-[60px]">
        <img
          src={imgAccentureLogo}
          alt="Accenture Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Title - Accenture */}
      <div className="absolute left-1/2 top-[105px] transform -translate-x-1/2 text-center">
        <p className="font-['Inter',sans-serif] text-[#101828] text-[16px] font-semibold whitespace-nowrap">
          Accenture
        </p>
      </div>

      {/* Role */}
      <div className="absolute left-1/2 top-[132px] transform -translate-x-1/2 text-center w-[200px]">
        <p className="font-['Inter',sans-serif] text-[#101828] text-[13px] font-normal leading-tight text-center">
          UX Arch Analyst Intern
        </p>
      </div>

      {/* Tag - Summer 2026 */}
      <div className="absolute left-1/2 top-[170px] transform -translate-x-1/2 text-center">
        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-['Inter',sans-serif] font-medium text-[#a100ff] bg-[#a100ff12] border border-[#a100ff30] whitespace-nowrap">
          Summer 2026
        </span>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div
      className="content-stretch flex flex-col h-[238.361px] items-start pb-0 pt-[4.194px] px-[3.973px] relative w-[249.82px]"
      data-name="Container"
    >
      <div
        className="flex h-[242.316px] items-center justify-center relative shrink-0 w-full"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[3deg] w-full">
          <FloatingElements5 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div
      className="h-[26.074px] opacity-60 overflow-clip relative shrink-0 w-full"
      data-name="Icon"
    >
      <div
        className="absolute inset-[8.33%_8.33%_12.2%_8.33%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-5.24%_-5%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24 23"
          >
            <path
              d={svgPaths.p35072100}
              fill="var(--fill-0, #FDA5D5)"
              id="Vector"
              stroke="var(--stroke-0, #FDA5D5)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.17281"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative size-[26.074px]"
      data-name="Container"
    >
      <Icon5 />
    </div>
  );
}

function Icon6() {
  return (
    <div
      className="h-[24.82px] opacity-50 overflow-clip relative shrink-0 w-full"
      data-name="Icon"
    >
      <div
        className="absolute inset-[8.33%_8.33%_12.2%_8.33%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-5.24%_-5%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 23 22"
          >
            <path
              d={svgPaths.pfb71d00}
              fill="var(--fill-0, #DAB2FF)"
              id="Vector"
              stroke="var(--stroke-0, #DAB2FF)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.06834"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative size-[24.82px]"
      data-name="Container"
    >
      <Icon6 />
    </div>
  );
}

function Icon7() {
  return (
    <div
      className="h-[20.994px] opacity-60 overflow-clip relative shrink-0 w-full"
      data-name="Icon"
    >
      <div
        className="absolute inset-[8.32%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-5%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 20 20"
          >
            <path
              d={svgPaths.p28c2c040}
              id="Vector"
              stroke="var(--stroke-0, #FB64B6)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.74952"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-3/4 left-[83.33%] right-[16.67%] top-[8.33%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-25%_-0.87px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 2 6"
          >
            <path
              d="M0.874761 0.874761V4.3738"
              id="Vector"
              stroke="var(--stroke-0, #FB64B6)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.74952"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[83.33%] left-3/4 right-[8.33%] top-[16.67%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-0.87px_-25%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 6 2"
          >
            <path
              d="M4.3738 0.874761H0.874761"
              id="Vector"
              stroke="var(--stroke-0, #FB64B6)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.74952"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[8.33%] left-[8.33%] right-3/4 top-3/4"
        data-name="Vector"
      >
        <div className="absolute inset-[-25%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 6 6"
          >
            <path
              d={svgPaths.p2a831f80}
              id="Vector"
              stroke="var(--stroke-0, #FB64B6)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.74952"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative size-[20.994px]"
      data-name="Container"
    >
      <Icon7 />
    </div>
  );
}

function Icon8() {
  return (
    <div
      className="h-[22.515px] opacity-70 overflow-clip relative shrink-0 w-full"
      data-name="Icon"
    >
      <div
        className="absolute inset-[8.33%_8.33%_12.2%_8.33%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-5.24%_-5%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 21 20"
          >
            <path
              d={svgPaths.p2409f200}
              fill="var(--fill-0, #C27AFF)"
              id="Vector"
              stroke="var(--stroke-0, #C27AFF)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.87622"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative size-[22.515px]"
      data-name="Container"
    >
      <Icon8 />
    </div>
  );
}

function Icon9() {
  return (
    <div
      className="h-[31.946px] opacity-50 overflow-clip relative shrink-0 w-full"
      data-name="Icon"
    >
      <div
        className="absolute inset-[8.32%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-5%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 30 30"
          >
            <path
              d={svgPaths.p13f64300}
              id="Vector"
              stroke="var(--stroke-0, #C27AFF)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.66216"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-3/4 left-[83.33%] right-[16.67%] top-[8.33%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-25%_-1.33px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 3 8"
          >
            <path
              d="M1.33108 1.33108V6.6554"
              id="Vector"
              stroke="var(--stroke-0, #C27AFF)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.66216"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[83.33%] left-3/4 right-[8.33%] top-[16.67%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-1.33px_-25%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 3"
          >
            <path
              d="M6.6554 1.33108H1.33108"
              id="Vector"
              stroke="var(--stroke-0, #C27AFF)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.66216"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-[8.33%] left-[8.33%] right-3/4 top-3/4"
        data-name="Vector"
      >
        <div className="absolute inset-[-25%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 8"
          >
            <path
              d={svgPaths.p343d5f00}
              id="Vector"
              stroke="var(--stroke-0, #C27AFF)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.66216"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative size-[31.946px]"
      data-name="Container"
    >
      <Icon9 />
    </div>
  );
}

function Container38() {
  return (
    <div
      className="absolute left-[806.8px] opacity-60 rounded-[1.67772e+07px] shadow-[0px_10px_40px_0px_rgba(168,85,247,0.3)] size-[80px] top-[628.42px]"
      data-name="Container"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 80 80\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -7.9196 -7.9196 0 24 24)\\'><stop stop-color=\\'rgba(255,255,255,0.8)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(212,170,251,0.6)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(168,85,247,0.4)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
      }}
    />
  );
}

function Container39() {
  return (
    <div
      className="absolute left-[629.6px] opacity-50 rounded-[1.67772e+07px] shadow-[0px_10px_40px_0px_rgba(236,72,153,0.3)] size-[65.147px] top-[535.89px]"
      data-name="Container"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 65.147 65.147\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -6.4492 -6.4492 0 19.544 19.544)\\'><stop stop-color=\\'rgba(255,255,255,0.9)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(250,209,230,0.775)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(246,164,204,0.65)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(241,118,179,0.525)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(236,72,153,0.4)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
      }}
    />
  );
}

function Paragraph9() {
  return (
    <div
      className="h-[75.668px] relative w-[196.967px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[24px] left-[106.02px] not-italic text-[#1e2939] text-[16px] text-center top-[24.32px] translate-x-[-50%] w-[220.892px]">
        Figma, Procreate, Adobe XD
      </p>
    </div>
  );
}

function Container40() {
  return (
    <div
      className="h-[138.974px] relative rounded-[16.4px] w-[206.363px]"
      data-name="Container"
      style={{
        backgroundImage:
          "linear-gradient(146.042deg, rgb(223, 234, 254) 0%, rgb(241, 233, 251) 50%, rgb(244, 232, 246) 100%)",
      }}
    >
      <div
        className="absolute flex items-center justify-center left-[14.84px] size-[50.522px] top-[50.36px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[0.672deg]">
          <SkillIconsFigmaLight className="relative size-[49.939px]" />
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[78.38px] size-[50.522px] top-[49.29px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[0.672deg]">
          <DeviconIllustrator className="relative size-[49.939px]" />
        </div>
      </div>
      <div
        className="absolute flex h-[49.609px] items-center justify-center left-[141.9px] top-[50.94px] w-[50.578px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[0.672deg]">
          <div
            className="h-[49.026px] relative rounded-[16px] w-[50.006px]"
            data-name="image 251"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
              <img
                alt=""
                className="absolute h-full left-[-37.68%] max-w-none top-0 w-[174.29%]"
                src={imgImage251}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div
      className="h-[47.971px] relative w-[192.856px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[20px] left-[96.66px] not-italic text-[#6a7282] text-[14px] text-center text-nowrap top-[10.05px] translate-x-[-50%]">
        My Stack
      </p>
    </div>
  );
}

function FloatingElements6() {
  return (
    <div
      className="absolute h-[1118px] left-0 top-0 w-[1478px] pointer-events-none"
      data-name="FloatingElements"
    >
      <motion.div
        className="absolute flex h-[292px] items-center justify-center left-[1075.35px] top-[30px] w-[253.204px] pointer-events-auto"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
        initial={{ opacity: 0, x: 400, y: -400, rotate: -20 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -15, 0],
          rotate: 0,
        }}
        whileHover={{
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.3 },
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.2 },
          x: {
            duration: 1.2,
            delay: 0.2,
            type: "spring",
            stiffness: 80,
          },
          rotate: {
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          },
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.4,
          },
        }}
      >
        <div className="flex-none rotate-[1.517deg]">
          <Container22 />
        </div>
      </motion.div>
      <motion.div
        className="absolute flex h-[226.558px] items-center justify-center left-[104px] top-[40px] w-[247.224px] pointer-events-auto"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
        initial={{ opacity: 0, x: -400, y: -400, rotate: -20 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -20, 0],
          rotate: 0,
        }}
        whileHover={{
          scale: 1.08,
          rotate: -3,
          y: -10,
          transition: {
            duration: 0.3,
            type: "spring",
            stiffness: 300,
          },
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.3 },
          x: {
            duration: 1.2,
            delay: 0.3,
            type: "spring",
            stiffness: 80,
          },
          rotate: { duration: 1, delay: 0.3 },
          y: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          },
        }}
      >
        <div className="flex-none rotate-[3.992deg]">
          <Container25 />
        </div>
      </motion.div>
      <motion.div
        className="absolute flex h-[285.066px] items-center justify-center left-[1151px] top-[340px] w-[278.302px] pointer-events-auto"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
        initial={{ opacity: 0, scale: 0.5, y: -100 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, 15, 0],
        }}
        whileHover={{
          scale: 1.12,
          rotate: 8,
          transition: {
            duration: 0.4,
            type: "spring",
            stiffness: 400,
          },
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.4 },
          scale: {
            duration: 0.9,
            delay: 0.4,
            type: "spring",
            bounce: 0.5,
          },
          y: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7,
          },
        }}
      >
        <div className="flex-none rotate-[4.442deg]">
          <Container26 />
        </div>
      </motion.div>
      <motion.div
        className="absolute flex h-[190.535px] items-center justify-center left-[76px] top-[375px] w-[224.428px] pointer-events-auto"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
        initial={{
          opacity: 0,
          x: -400,
          y: 0,
          scale: 0.5,
          rotate: 90,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
          rotate: 0,
          y: [0, -18, 0],
        }}
        whileHover={{
          scale: 1.15,
          rotate: -5,
          y: -15,
          transition: {
            duration: 0.3,
            type: "spring",
            stiffness: 500,
          },
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.5 },
          x: {
            duration: 1.2,
            delay: 0.5,
            type: "spring",
            stiffness: 80,
          },
          scale: {
            duration: 1,
            delay: 0.5,
            type: "spring",
            bounce: 0.6,
          },
          rotate: {
            duration: 1,
            delay: 0.5,
            type: "spring",
            stiffness: 80,
          },
          y: {
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.7,
          },
        }}
      >
        <div className="flex-none rotate-[4.391deg]">
          <Container28 />
        </div>
      </motion.div>
      <motion.div
        className="absolute flex h-[220.069px] items-center justify-center left-[148px] top-[675px] w-[269.655px] pointer-events-auto"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
        initial={{ opacity: 0, x: -400, y: 600, scale: 0.6 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -12, 0],
          scale: 1,
        }}
        whileHover={{
          scale: 1.1,
          rotate: 4,
          transition: {
            duration: 0.35,
            type: "spring",
            stiffness: 350,
          },
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.7 },
          x: {
            duration: 1.2,
            delay: 0.7,
            type: "spring",
            stiffness: 80,
          },
          scale: {
            duration: 0.9,
            delay: 0.7,
            type: "spring",
            bounce: 0.5,
          },
          y: {
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.9,
          },
        }}
      >
        <div className="flex-none rotate-[1.33deg]">
          <Container30 />
        </div>
      </motion.div>
      <motion.div
        className="absolute flex h-[249.144px] items-center justify-center left-[1004px] top-[675px] w-[260.087px] pointer-events-auto"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
        initial={{
          opacity: 0,
          x: 400,
          y: 600,
          scale: 0.6,
          rotate: 45,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -16, 0],
          scale: 1,
          rotate: 0,
        }}
        whileHover={{
          scale: 1.12,
          rotate: -6,
          y: -12,
          transition: {
            duration: 0.3,
            type: "spring",
            stiffness: 450,
          },
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.6 },
          x: {
            duration: 1.2,
            delay: 0.6,
            type: "spring",
            stiffness: 80,
          },
          scale: {
            duration: 1.1,
            delay: 0.6,
            type: "spring",
            bounce: 0.65,
          },
          rotate: {
            duration: 1,
            delay: 0.6,
            type: "spring",
            stiffness: 90,
          },
          y: {
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.8,
          },
        }}
      >
        <div className="flex-none rotate-[357.473deg]">
          <Container32 />
        </div>
      </motion.div>
      <div
        className="absolute flex items-center justify-center left-[513.9px] size-[28.327px] top-[497.07px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[5.193deg]">
          <Container33 />
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[1012.19px] size-[30.802px] top-[374.65px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[343.655deg]">
          <Container34 />
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[412.27px] size-[22.038px] top-[655.39px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[2.924deg]">
          <Container35 />
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[1071.81px] size-[31.682px] top-[705.64px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[50.721deg]">
          <Container36 />
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[631.46px] size-[41.519px] top-[226.85px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[201.78deg]">
          <Container37 />
        </div>
      </div>
      <Container38 />
      <Container39 />
      <motion.div
        className="absolute flex h-[103.765px] items-center justify-center left-[1200.45px] top-[345px] w-[205.941px] pointer-events-auto"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
        initial={{ opacity: 0, x: 400, y: 0, rotate: 0 }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.4 },
          x: {
            duration: 1.2,
            delay: 0.4,
            type: "spring",
            stiffness: 80,
          },
        }}
      >
        <div className="flex-none rotate-[8.442deg]">
          <Paragraph9 />
        </div>
      </motion.div>
      <motion.div
        className="absolute flex h-[167.765px] items-center justify-center left-[1180.04px] top-[415px] w-[224.53px] pointer-events-auto"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
            rotate: "8.442deg",
          } as React.CSSProperties
        }
        initial={{ opacity: 0, x: 400, y: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -10, 0],
          scale: 1,
        }}
        whileHover={{
          scale: 1.08,
          rotate: "11.442deg",
          transition: {
            duration: 0.3,
            type: "spring",
            stiffness: 300,
          },
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.4 },
          x: {
            duration: 1.2,
            delay: 0.4,
            type: "spring",
            stiffness: 80,
          },
          scale: {
            duration: 1,
            delay: 0.4,
            type: "spring",
            bounce: 0.5,
          },
          y: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.6,
          },
        }}
      >
        <div className="flex-none">
          <Container40 />
        </div>
      </motion.div>
      <motion.div
        className="absolute flex h-[75.765px] items-center justify-center left-[1173px] top-[555.32px] w-[197.809px] pointer-events-auto"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
        initial={{ opacity: 0, x: 400, y: 0 }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.4 },
          x: {
            duration: 1.2,
            delay: 0.4,
            type: "spring",
            stiffness: 80,
          },
        }}
      >
        <div className="flex-none rotate-[8.442deg]">
          <Paragraph10 />
        </div>
      </motion.div>
    </div>
  );
}

function Container41() {
  const scrollToTop = (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#home"
      onClick={scrollToTop}
      className="h-[32px] relative shrink-0 w-[131.289px] cursor-pointer hover:opacity-70 transition-opacity block"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Tinos',sans-serif] leading-[32px] left-0 not-italic text-[#101828] text-[24px] text-nowrap top-0 font-[Playfair_Display]">
          Sejal Kautkar
        </p>
      </div>
    </a>
  );
}

function Link() {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const element = document.getElementById("experience");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className="relative shrink-0"
      data-name="Link"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative hover:opacity-70 transition-opacity">
        <p className="font-['Inter',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap font-[Inter]">
          Experience
        </p>
      </div>
    </a>
  );
}

function LinkExplorations() {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    const element = document.getElementById("explorations");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <a
      href="#explorations"
      onClick={handleClick}
      className="relative shrink-0"
      data-name="Link"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative hover:opacity-70 transition-opacity">
        <p className="font-['Inter',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap font-[Inter]">
          Explorations
        </p>
      </div>
    </a>
  );
}

function Link1() {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <a
      href="#projects"
      onClick={handleClick}
      className="relative shrink-0"
      data-name="Link"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative hover:opacity-70 transition-opacity">
        <p className="font-['Inter',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap font-[Inter]">
          Projects
        </p>
      </div>
    </a>
  );
}

function Link2() {
  return (
    <a
      href="#contact"
      className="relative shrink-0"
      data-name="Link"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative hover:opacity-70 transition-opacity">
        <p className="font-['Inter',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap font-[Inter]">
          Contact
        </p>
      </div>
    </a>
  );
}

function Navigation() {
  return (
    <div className="relative shrink-0" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start relative">
        <Link />
        <Link1 />
        <LinkExplorations />
        <Link2 />
      </div>
    </div>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    React.useState(false);

  return (
    <>
      <div
        className="fixed bg-white shadow-sm flex h-16 md:h-20 items-center justify-between left-0 right-0 px-4 md:px-8 xl:px-12 py-0 top-0 w-full z-[150]"
        data-name="Header"
      >
        <Container41 />

        {/* Desktop Navigation */}
        <div className="hidden md:block xl:mr-12">
          <Navigation />
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="md:hidden p-2 text-[#364153] hover:text-[#7f56d9] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-16 left-0 right-0 bg-white shadow-lg z-[140] md:hidden"
        >
          <nav className="flex flex-col p-6 space-y-4">
            <a
              href="#home"
              className="font-['Inter',sans-serif] text-[#364153] text-lg hover:text-[#7f56d9] transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setMobileMenuOpen(false);
              }}
            >
              Home
            </a>
            <a
              href="#"
              className="font-['Inter',sans-serif] text-[#364153] text-lg hover:text-[#7f56d9] transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                const element =
                  document.getElementById("experience");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
                setMobileMenuOpen(false);
              }}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="font-['Inter',sans-serif] text-[#364153] text-lg hover:text-[#7f56d9] transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                const element =
                  document.getElementById("projects");
                if (element) {
                  const offsetTop = element.offsetTop - 80;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  });
                }
                setMobileMenuOpen(false);
              }}
            >
              Work
            </a>
            <a
              href="#explorations"
              className="font-['Inter',sans-serif] text-[#364153] text-lg hover:text-[#7f56d9] transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                const element =
                  document.getElementById("explorations");
                if (element) {
                  const offsetTop = element.offsetTop - 80;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  });
                }
                setMobileMenuOpen(false);
              }}
            >
              Explorations
            </a>
            <a
              href="#contact"
              className="font-['Inter',sans-serif] text-[#364153] text-lg hover:text-[#7f56d9] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </motion.div>
      )}
    </>
  );
}

function ProjectCard({
  image,
  title,
  category,
  description,
  onClick,
}: {
  image: string;
  title?: string;
  category?: string;
  description?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className="group relative rounded-[16px] overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02]"
      onClick={onClick}
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <img
          src={image}
          alt={title || "Project"}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {title && (
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="font-['Inter',sans-serif] text-white text-[18px] font-semibold mb-2">
              {title}
            </p>
            {description && (
              <p className="font-['Inter',sans-serif] text-white/90 text-[14px] leading-relaxed mb-2">
                {description}
              </p>
            )}
            {category && (
              <p className="font-['Inter',sans-serif] text-white/70 text-[12px]">
                {category}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectsSection({
  onProjectClick,
}: {
  onProjectClick: (projectId: string) => void;
}) {
  const [hoveredIndex, setHoveredIndex] = React.useState<
    number | null
  >(null);

  const projects = [
    {
      title: "Samsung Iris",
      category: "AI Agent Design",
      description:
        "Seamless browsing with an AI agent for planning, search, and task management.",
      image: imgSamsungIris,
      id: "samsung-iris",
      externalUrl:
        "https://iris-case-study.figma.site/?from=portfolio",
    },
    {
      title: "FINS: The Agentic Wallet",
      category: "Mobile App Design",
      description:
        "Transforming Financial Anxiety into Financial Agency through Calm Technology.",
      image: imgFins,
      id: "fins",
      externalUrl: "https://fins.figma.site/?from=portfolio",
    },
    {
      title: "Ministry of Health & Family Welfare",
      category: "Government Portal Redesign",
      description:
        "A User-Centric Redesign of the Ministry of Health & Family Welfare Website.",
      image: imgMoHFW,
      id: "mohfw",
      externalUrl:
        "https://mohfw-redesign.figma.site?from=portfolio",
    },
    {
      title: "Essentrail",
      category: "Train Travel App",
      description:
        "Redefining comfort and convenience in train travel.",
      image: imgEssentrail,
      id: "essentrail",
      externalUrl:
        "https://essentrail.figma.site/?from=portfolio",
    },
    {
      title: "Chromify",
      category: "Smart Glasses Design",
      description:
        "Smart glasses that instantly recolor to match any outfit.",
      image: imgChromify,
      id: "chromify",
      externalUrl: "https://chromify.figma.site?from=portfolio",
    },
    {
      title: "JioMart",
      category: "E-commerce Redesign",
      description:
        "Smarter grocery shopping with improved navigation and delivery.",
      image: imgJioMart,
      id: "jiomart",
      externalUrl: "https://jiomart.figma.site?from=portfolio",
    },
  ];

  return (
    <div
      id="projects"
      className="relative bg-white py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12"
      data-name="ProjectsSection"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="text-center mb-10 md:mb-12 lg:mb-16"
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
            Here is my
          </motion.p>
          <h2 className="font-['Playfair_Display',sans-serif] text-2xl md:text-4xl lg:text-[64px] text-[#101828] mb-4">
            Featured Projects
          </h2>
          <p className="font-['Inter',sans-serif] text-sm md:text-base lg:text-lg leading-relaxed text-[#4a5565] max-w-[600px] mx-auto mb-6 md:mb-8 px-4">
            Explore my design work showcasing user-centric
            solutions and innovative approaches
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ProjectCard
                {...project}
                onClick={() => {
                  if ((project as any).externalUrl) {
                    window.location.href = (
                      project as any
                    ).externalUrl;
                  } else {
                    onProjectClick(project.id);
                  }
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioLandingPageDesign() {
  const [selectedProject, setSelectedProject] = React.useState<
    string | null
  >(null);

  const projects = [
    {
      title: "Samsung Iris",
      category: "AI Agent Design",
      description:
        "Seamless browsing with an AI agent for planning, search, and task management.",
      image: imgSamsungIris,
      id: "samsung-iris",
      externalUrl:
        "https://iris-case-study.figma.site/?from=portfolio",
    },
    {
      title: "FINS: The Agentic Wallet",
      category: "Mobile App Design",
      description:
        "Transforming Financial Anxiety into Financial Agency through Calm Technology.",
      image: imgFins,
      id: "fins",
      externalUrl: "https://fins.figma.site/?from=portfolio",
    },
    {
      title: "Ministry of Health & Family Welfare",
      category: "Government Website Redesign",
      description:
        "A fresh perspective for the Ministry of Health & Family Welfare digital experience.",
      image: imgMoHFW,
      id: "mohfw",
      externalUrl:
        "https://mohfw-redesign.figma.site/?from=portfolio",
    },
    {
      title: "Essentrail",
      category: "App Design",
      description:
        "Streamlining essential services with intuitive design.",
      image: imgEssentrail,
      id: "essentrail",
      externalUrl:
        "https://essentrail.figma.site/?from=portfolio",
    },
    {
      title: "Chromify",
      category: "Website Design",
      description:
        "Modern web experience with vibrant aesthetics.",
      image: imgChromify,
      id: "chromify",
      externalUrl:
        "https://chromify.figma.site/?from=portfolio",
    },
    {
      title: "JioMart",
      category: "E-commerce Redesign",
      description:
        "Smarter grocery shopping with improved navigation and delivery.",
      image: imgJioMart,
      id: "jiomart",
      externalUrl: "https://jiomart.figma.site/?from=portfolio",
    },
  ];

  return (
    <div
      className="bg-white relative w-full overflow-x-hidden"
      data-name="Portfolio Landing Page Design"
    >
      {/* Smooth Scroll Handler */}
      <SmoothScrollHandler />

      {/* Flowy Background Animation */}
      <FlowyBackground />

      {/* Fixed Header */}
      <Header />

      {/* Hero/Landing Section - Desktop Only (Fixed Design) */}
      <div
        id="home"
        className="hidden xl:block relative w-full h-[1118px] pt-16 md:pt-20 z-10"
      >
        <div className="relative h-[1118px] max-w-[1478px] mx-auto">
          <App />
          <FloatingElements6 />
        </div>
      </div>

      {/* Hero/Landing Section - Mobile & Tablet (Responsive, No Overlapping) */}
      <div
        id="home"
        className="xl:hidden relative w-full z-10 pt-24 pb-16 px-4"
      >
        <div className="relative w-full max-w-4xl mx-auto">
          <AnimatedBackground />
          <Text />

          {/* Hero Content */}
          <div className="relative z-10 text-center mb-12 pt-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6"
            >
              <Container21 />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 px-4"
            >
              <Paragraph />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex justify-center"
            >
              <Button />
            </motion.div>
          </div>

          {/* Horizontal Scrolling Skills */}
          <div className="relative z-10 mt-12 overflow-hidden py-6">
            <motion.div
              className="flex gap-8 whitespace-nowrap"
              animate={{
                x: [0, -2000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[
                "Wireframing",
                "Prototyping",
                "User Research",
                "Visual Design",
                "Information Architecture",
                "Usability Testing",
                "Interaction Design",
                "Responsive Design",
                "Design Systems",
                "Accessibility (WCAG)",
                "Wireframing",
                "Prototyping",
                "User Research",
                "Visual Design",
                "Information Architecture",
                "Usability Testing",
                "Interaction Design",
                "Responsive Design",
                "Design Systems",
                "Accessibility (WCAG)",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="font-['Inter',sans-serif] text-[#c27aff] text-base md:text-xl font-normal"
                >
                  {skill} ✦
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Professional Experience Section */}
      <div className="relative z-10 xl:mt-0 mt-0">
        <ProfessionalExperience />
      </div>

      {/* Projects Section */}
      <div className="relative z-10 mt-0">
        <ProjectsSection
          onProjectClick={(projectId) =>
            setSelectedProject(projectId)
          }
        />
      </div>

      {/* Explorations Section */}
      <div className="relative z-10 mt-0">
        <ExplorationsSection />
      </div>

      {/* Contact Section */}
      <div className="relative z-10 mt-0">
        <ContactSection />
      </div>

      {/* PDF Viewer Modal - Rendered at root level to overlay everything */}
      {selectedProject &&
        projects.find((p) => p.id === selectedProject)
          ?.pdfUrl && (
          <PDFViewerModal
            isOpen={true}
            onClose={() => setSelectedProject(null)}
            pdfUrl={
              projects.find((p) => p.id === selectedProject)
                ?.pdfUrl || ""
            }
            projectTitle={
              projects.find((p) => p.id === selectedProject)
                ?.title || ""
            }
          />
        )}
    </div>
  );
}
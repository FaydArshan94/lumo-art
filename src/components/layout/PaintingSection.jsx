import { CopyIcon, Heading } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function PromptToPaintingSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeSlow = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const scaleFade = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section className="relative  overflow-hidden">
      {/* Background video */}
      <motion.div
        variants={fadeSlow}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute inset-0 z-998 h-[120vh]"
      >
        <div className="absolute top-0 left-0 w-full h-full z-1000 bg-[radial-gradient(circle_at_center,transparent_-200%,rgba(0,0,0,0.65)_100%)]" />

        <Image
          className="w-full h-full object-cover"
          src="/ancient2.png"
          height={1000}
          width={1000}
          style={{
            WebkitMaskImage: "url('/textures/rough-mask2.png')",
            WebkitMaskSize: "cover",
            WebkitMaskRepeat: "no-repeat",
            maskImage: "url('/textures/rough-mask2.png')",
            maskSize: "cover",
            maskRepeat: "no-repeat",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-999 container mx-auto px-4 py-28">
        <div className="px-10  gap-16 flex justify-between items-end">
          {/* Left content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl flex flex-col gap-20"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#CEAF79] leading-tight"
            >
              From Prompt to Painting
              <br />
              The Artful Intelligence Behind Every Masterpiece
            </motion.h2>

            <motion.div variants={fadeUp}>
              <p className="text-[#CEAF79]/60 text-sm md:text-base leading-relaxed mb-8">
                A lost kingdom dusk portrayed, cinematic fantasy oil painting,
                grand lighting, dramatic lighting and shadow play, rich Baroque
                textures, deep shadows and light contrast, fantasy realism, soft
                brush strokes, inspired by Renaissance and classic sci-fi
                artists, emotional storytelling, dramatic scale.
              </p>

              <button className="flex items-center gap-2 text-[#CEAF79] hover:text-amber-400 transition text-sm">
                <CopyIcon className="text-xs" />
                <span>Copy prompt</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right video card */}
          <motion.div
            variants={scaleFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex relative flex-col gap-4 p-2 bg-[#1C1608]"
          >
            <div className="w-60 h-40">
              <video
                className="w-full h-full object-cover"
                src="/sectionVideo.mp4"
                autoPlay
                loop
                muted
              />
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.65)_100%)]" />

            <button className="text-sm text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-[#CEAF79] to-amber-400">
              Watch Video
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

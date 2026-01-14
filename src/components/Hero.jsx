"use client";

import { ArrowDown } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="./assets/heroVideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full items-center py-10 font-['Helvetica'] px-8 md:px-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl py-20"
        >
          <h1 className="text-4xl text-center md:text-6xl font-semibold tracking-tight text-[#CEAF79]">
            Museum Quality Art.
            <br />
            Made in Moments
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex items-center justify-center gap-4 w-full origin-center"
        >
          <div className="px-2 py-2 rounded-full bg-[#CEAF79]" />
          <div className="h-px opacity-50 w-full bg-[#CEAF79]" />
          <div className="px-2 py-2 rounded-full bg-[#CEAF79]" />
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-4">
          <p className="text-[#CEAF79] font-bold text-sm flex items-center gap-2 justify-between">
            Scroll to Explore
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown />
            </motion.span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

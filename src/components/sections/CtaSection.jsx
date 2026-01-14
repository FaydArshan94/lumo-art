import { Sparkles } from "lucide-react";
import React from "react";
import { easeInOut, motion } from "framer-motion";

export default function FinalCTASection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const lum = {
    animate: {
      x: -300,
      transition: { ease: easeInOut, duration: 1, delay: 0.3 },
    },
  };

  const art = {
    animate: {
      x: 300,
      transition: { ease: easeInOut, duration: 1, delay: 0.3 },
    },
  };

  return (
    <section className="relative bg-[#1C1608] py-6 pt-20 overflow-hidden">
      {/* Soft top smoke fade */}
      <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-black/60 to-transparent pointer-events-none" />

      <div className="relative container mx-auto px-4   text-center">
        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#CEAF79] leading-tight mb-8"
        >
          Step Into a World Where Your Ideas
          <br />
          Become Timeless Works of Art
        </motion.h2>

        {/* CTA Button */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-full flex items-center gap-2 bg-[#CEAF79] text-[#1C1608] font-medium hover:bg-amber-400 transition"
          >
            <Sparkles className="text-[5px]" />
            Generate Images
          </motion.button>
        </motion.div>

        {/* Contact */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#CEAF79]/60 text-xl mb-6"
        >
          Contact us:{" "}
          <a
            href="mailto:hello@lumeaart.ai"
            className="hover:text-[#CEAF79] transition"
          >
            hello@lumeaart.ai
          </a>
        </motion.p>

        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-10 text-[#CEAF79]/50 text-lg"
        >
          <span>@lumeaart.ai</span>
          <span>@lumeaart</span>
          <span>@lumearts</span>
        </motion.div>

        {/* Social / Meta */}
        <div className="flex justify-center gap-10 text-[#CEAF79]/50 text-lg">
          <span>@lumeaart.ai</span>
          <span>@lumeaart</span>
          <span>@lumearts</span>
        </div>
      </div>

      {/* Bottom Brand Typography */}
      <div className="relative flex items-center justify-center px-8 py-10 text-[#CEAF79]">
        <motion.span
        variants={lum}
          whileInView="animate"
          viewport={{ once: true }}
          className="text-5xl absolute left-1/3 top-[35%] z-10 md:text-[6rem] font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-[#e6ad4b] to-amber-200 tracking-tighter"
        >
          LUM
        </motion.span>

        {/* Center image */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-50 h-50 md:w-50 overflow-hidden"
        >
          <img
            src="/Lastimg.png"
            alt=""
            className="w-full h-full object-cover"
            style={{
              WebkitMaskImage: "url('/textures/rough-mask.png')",
              WebkitMaskSize: "cover",
              WebkitMaskRepeat: "no-repeat",
              maskImage: "url('/textures/rough-mask.png')",
              maskSize: "cover",
              maskRepeat: "no-repeat",
            }}
          />

          <span className="text-5xl md:text-[6rem] font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-[#e6ad4b] to-amber-200 tracking-tighter absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-10">
            O
          </span>
        </motion.div>

        <motion.span
        variants={art}
          whileInView="animate"
          viewport={{ once: true }}
          className="text-5xl absolute right-[35%] top-[35%] z-10 md:text-[6rem] font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-[#e6ad4b] to-amber-200  tracking-tighter"
        >
          ART
        </motion.span>
      </div>
    </section>
  );
}

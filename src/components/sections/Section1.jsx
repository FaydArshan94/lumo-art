import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Palette,
  Sparkles,
  CircleArrowRight,
  ChevronRight,
} from "lucide-react";
import GooeyImage3D from "../3d/GooeyImage";
import EmbleImageCarousel from "../carousel/Embla";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Section1() {
  const subtitleRef = useRef(null);
  const statsRef = useRef(null);
  const bottomTextRef = useRef(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      // Subtitle word color reveal
      const subtitleWords = subtitleRef.current?.querySelectorAll(".word");

      if (subtitleWords?.length) {
        gsap.fromTo(
          subtitleWords,
          { color: "#CEAF79" + "20" },
          {
            color: "#CEAF79",
            duration: 2,
            stagger: 0.08,
            ease: "power1.out",
            scrollTrigger: {
              trigger: subtitleRef.current,
              start: "top 75%",
            },
          }
        );
      }
    };

    loadGSAP();
  }, []);

  const splitIntoWords = (text) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="word inline-block mr-2">
        {word}
      </span>
    ));

  return (
    <section className="min-h-screen bg-[#1C1608] py-20 overflow-hidden">
      {/* Badge */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pt-8 flex justify-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm">
          <span className="text-zinc-400 text-sm">
            Trusted by 400k+ artists
          </span>
          <button className="px-3 py-1 bg-[#CEAF79] hover:bg-amber-500 transition-colors rounded-full text-zinc-900 text-sm font-semibold">
            Learn More
          </button>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-20">
        {/* Subtitle */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          ref={subtitleRef}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-zinc-400 leading-snug">
            {splitIntoWords(
              "We’re not just generating transient glimpses of a digital dream. We’re resurrecting the deliberate ghost of every classic master."
            )}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-32"
        >
          {[Users, Palette, Sparkles].map((Icon, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="mb-4 p-3 rounded-full bg-amber-600/10">
                <Icon className="w-8 h-8 text-[#CEAF79]" />
              </div>
              <div className="text-2xl font-bold text-[#CEAF79] mb-2">
                {i === 0 && "120+ million"}
                {i === 1 && "55+ thousands"}
                {i === 2 && "25+ AI Fine"}
              </div>
              <div className="text-[#CEAF79]/30 text-sm">
                {i === 0 && "Active users"}
                {i === 1 && "Trained models"}
                {i === 2 && "Art styles"}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Heading */}
        <motion.div
          ref={bottomTextRef}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-[#CEAF79] to-amber-400">
            Explore Our AI Image Generation
            <br />
            with Unlimited Possibilities
          </h2>
        </motion.div>
      </div>

      {/* Carousel */}
      <EmbleImageCarousel />

      {/* Feature Cards */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#1C1608] py-28"
      >
        <div className="container mx-auto ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex items-center justify-between mb-16"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-3xl md:text-4xl font-semibold text-[#CEAF79]"
            >
              Everything You Need to Create
              <br />
              Masterpieces Without the Brush
            </motion.h2>

            <div className="flex items-center  justify-center opacity-60 hover:opacity-100 transition">
              <div className="relative w-32 h-12 flex items-center opacity-50 hover:opacity-70 transition-all duration-300 justify-center">
                {/* Top left brace */}
                <div className="absolute top-0 left-0 w-4 h-6 border-t-2 border-l-2 border-amber-200 group-hover/btn:border-amber-100"></div>
                {/* Bottom left brace */}
                <div className="absolute bottom-0 left-0 w-4 h-6 border-b-2 border-l-2 border-amber-200 group-hover/btn:border-amber-100"></div>
                {/* Top right brace */}
                <div className="absolute top-0 right-0 w-4 h-6 border-t-2 border-r-2 border-amber-200 group-hover/btn:border-amber-100"></div>
                {/* Bottom right brace */}
                <div className="absolute bottom-0 right-0 w-4 h-6 border-b-2 border-r-2 border-amber-200 group-hover/btn:border-amber-100"></div>
                {/* Icon */}
                <div className=" flex items-center justify-center  gap-2 w-full">
                  <span className="font-semibold text-[#CEAF79]">See All</span>
                  <ChevronRight size={24} className="text-[#CEAF79]"/>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            className="flex items-center  justify-between "
          >
            <motion.div
              variants={fadeUp}
              style={{
                WebkitMaskImage: "url('/textures/rough-mask.png')",
                WebkitMaskSize: "cover",
                WebkitMaskRepeat: "no-repeat",
                maskImage: "url('/textures/rough-mask.png')",
                maskSize: "cover",
                maskRepeat: "no-repeat",
              }}
              className="bg-[#2A1F0E] h-80 w-140 p-10 py-16 flex flex-col justify-between"
            >
              <h3 className=" relative font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-[#CEAF79] to-amber-200 mb-4">
                AI-Powered Painting
                <br />
                Fine-Tuned Artistic Models
              </h3>
              <div className="flex items-center justify-between">
                <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-[#CEAF79] to-amber-200 text-sm">
                  Learn more
                </span>

                <CircleArrowRight className=" text-[#CEAF79]" />
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <GooeyImage3D image="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80" />
            </motion.div>

            <motion.div
              variants={fadeUp}
              style={{
                WebkitMaskImage: "url('/textures/rough-mask.png')",
                WebkitMaskSize: "cover",
                WebkitMaskRepeat: "no-repeat",
                maskImage: "url('/textures/rough-mask.png')",
                maskSize: "cover",
                maskRepeat: "no-repeat",
              }}
              className="bg-[#2A1F0E]  h-80 w-140 p-10 py-16 flex flex-col justify-between"
            >
              <h3 className="font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-[#CEAF79] to-amber-200 relative   mb-4">
                Blend Your Vision
                <br />
                with Our Any Artistic Style
              </h3>
              <div className="flex items-center justify-between">
                <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-[#CEAF79] to-amber-200 text-sm">
                  Learn more
                </span>

                <CircleArrowRight className=" text-[#CEAF79]" />
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <GooeyImage3D image="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </section>
  );
}

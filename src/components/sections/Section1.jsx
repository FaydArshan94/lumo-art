import React, { useEffect, useRef } from "react";
import { Users, Palette, Sparkles } from "lucide-react";
import ImageCarousel from "../carousel/ImageCarousel";

export default function Section1() {
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const statsRef = useRef(null);
  const bottomTextRef = useRef(null);

  useEffect(() => {
    // Dynamically import gsap to avoid SSR issues in Next.js
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      // Subtitle animation with word reveal effect
      const subtitleWords = subtitleRef.current.querySelectorAll(".word");
      gsap.fromTo(
        subtitleWords,
        {
          color: "#CEAF79/10",
        },
        {
          color: "#CEAF79",

          filter: "blur(0px)",
          duration: 2,
          stagger: 0.1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 75%",
            end: "top 25%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stats animation
      const statItems = statsRef.current.querySelectorAll(".stat-item");
      gsap.fromTo(
        statItems,
        {
          opacity: 0,
          y: 30,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Bottom text animation
      gsap.fromTo(
        bottomTextRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bottomTextRef.current,
            start: "top 85%",
            end: "top 35%",
            toggleActions: "play none none reverse",
          },
        }
      );
    };

    loadGSAP();
  }, []);

  const splitIntoWords = (text) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className="word inline-block mr-2">
        {word}
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-[#1C1608] py-20">
      {/* Header Badge */}
      <div className="pt-8 flex justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm">
          <span className="text-zinc-400 text-sm">
            Trusted by 400k+ artists
          </span>
          <button className="px-3 py-1 bg-[#CEAF79] hover:bg-amber-500 transition-colors rounded-full text-zinc-900 text-sm font-semibold">
            Learn More
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div ref={containerRef} className="container mx-auto px-4 py-16 md:py-24">
        {/* Subtitle with Animation */}
        <div
          ref={subtitleRef}
          className="text-center mb-16 md:mb-24 max-w-4xl mx-auto"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-zinc-400 leading-none">
            {splitIntoWords(
              "We’re not just generating transient glimpses of a digital dream. We’re resurrecting the deliberate ghost of every classic master. Turning a billion cold calculations into a singular, breathtaking masterpiece. "
            )}
          </p>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto mb-20 md:mb-32"
        >
          <div className="stat-item flex flex-col items-center text-center p-6  ">
            <div className="mb-4 p-3 rounded-full bg-amber-600/10">
              <Users className="w-8 h-8 text-[#CEAF79]" />
            </div>
            <div className="text-3xl md:text-2xl font-bold text-[#CEAF79] mb-2">
              120+ million
            </div>
            <div className="text-[#CEAF79]/30 text-sm md:text-base">
              Active users
            </div>
          </div>

          <div className="stat-item flex flex-col items-center text-center p-6  ">
            <div className="mb-4 p-3 rounded-full bg-amber-600/10">
              <Palette className="w-8 h-8 text-[#CEAF79]" />
            </div>
            <div className="text-3xl md:text-2xl font-bold text-[#CEAF79] mb-2">
              55+ thousands
            </div>
            <div className="text-[#CEAF79]/30 text-sm md:text-base">
              Trained models
            </div>
          </div>

          <div className="stat-item flex flex-col items-center text-center p-6  ">
            <div className="mb-4 p-3 rounded-full bg-amber-600/10">
              <Sparkles className="w-8 h-8 text-[#CEAF79]" />
            </div>
            <div className="text-3xl md:text-2xl font-bold text-[#CEAF79] mb-2">
              25+ AI Fine
            </div>
            <div className="text-[#CEAF79]/30 text-sm md:text-base">
              Art styles
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div ref={bottomTextRef} className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-[#CEAF79] to-amber-400 mb-4">
            Explore Our AI Image Generation
            <br />
            with Unlimited Possibilities
          </h2>
        </div>
      </div>

      {/* Add spacing at bottom for scroll effect */}
      <ImageCarousel />
    </div>
  );
}

// src/components/Hero.jsx
import { ArrowDown } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden ">
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

      {/* Overlay (for readability) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full items-center py-10 font-['Helvetica'] px-8 md:px-16">
        <div className="max-w-3xl py-20">
          <h1 className="text-4xl text-center md:text-6xl font-semibold tracking-tight text-[#CEAF79]">
            Museum Quality Art.
            <br />
            Made in Moments
          </h1>
        </div>

        <div className="flex items-center justify-center gap-4 w-full ">
          <div className="px-2 py-2 rounded-full bg-[#CEAF79]"></div>
          <div className="h-px opacity-50 w-full bg-[#CEAF79]"></div>
          <div className="px-2 py-2 rounded-full bg-[#CEAF79]"></div>
        </div>

        <div className="mt-4">
          <p className="text-[#CEAF79] font-bold text-sm flex items-center gap-4 justify-between">
            Scroll to Explore
            <span className="">
              <ArrowDown className="text-[4px]" />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

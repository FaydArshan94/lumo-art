import { Sparkles } from "lucide-react";
import React from "react";

export default function FinalCTASection() {
  return (
    <section className="relative bg-[#1C1608] py-6 pt-20 overflow-hidden">
      {/* Soft top smoke fade */}
      <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-black/60 to-transparent pointer-events-none" />

      <div className="relative container mx-auto px-4   text-center">
        {/* Headline */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#CEAF79] leading-tight mb-8">
          Step Into a World Where Your Ideas
          <br />
          Become Timeless Works of Art
        </h2>

        {/* CTA Button */}
        <div className="flex justify-center mb-8">
          <button className="px-6 py-3 rounded-full flex items-center gap-2 bg-[#CEAF79] text-[#1C1608] font-medium hover:bg-amber-400 transition">
            <span>
              <Sparkles className="text-[5px]"/>
            </span>
            Generate Images
          </button>
        </div>

        {/* Contact */}
        <p className="text-[#CEAF79]/60 text-xl mb-6">
          Contact us:{" "}
          <a
            href="mailto:hello@lumeaart.ai"
            className="hover:text-[#CEAF79] transition"
          >
            hello@lumeaart.ai
          </a>
        </p>

        {/* Social / Meta */}
        <div className="flex justify-center gap-10 text-[#CEAF79]/50 text-lg">
          <span>@lumeaart.ai</span>
          <span>@lumeaart</span>
          <span>@lumearts</span>
        </div>
      </div>

      {/* Bottom Brand Typography */}
      <div className="relative flex items-center justify-between px-8 py-10 text-[#CEAF79]">
        <span className="text-5xl md:text-[6rem] font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-[#e6ad4b] to-amber-200  tracking-tighter">
          LUM
        </span>

        {/* Center image */}
        <div className="relative w-50 h-50 md:w-50   overflow-hidden">
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

          <span className="text-5xl md:text-[6rem]     font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-[#e6ad4b] to-amber-200 tracking-tighter absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 ">
            O
          </span>
        </div>

        <span className="text-5xl md:text-[6rem] font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-[#e6ad4b] to-amber-200  tracking-tighter">
          ART
        </span>
      </div>
    </section>
  );
}

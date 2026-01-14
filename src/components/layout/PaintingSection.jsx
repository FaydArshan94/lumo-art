import { CopyIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function PromptToPaintingSection() {
  return (
    <section className="relative bg-[#1C1608] overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 h-[120vh] ">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/sectionVideo.mp4"
          style={{
            WebkitMaskImage: "url('/textures/rough-mask2.png')",
            WebkitMaskSize: "cover",
            WebkitMaskRepeat: "no-repeat",
            maskImage: "url('/textures/rough-mask2.png')",
            maskSize: "cover",
            maskRepeat: "no-repeat",
          }}
        ></video>

        {/* Dark cinematic overlay */}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-28">
        <div className="px-10  gap-16 flex justify-between items-end">
          {/* Left content */}
          <div className="max-w-xl flex flex-col gap-20  ">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#CEAF79] leading-tight mb-6">
              From Prompt to Painting
              <br />
              The Artful Intelligence Behind
              <br />
              Every Masterpiece
            </h2>

            <div>
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
            </div>
          </div>

          {/* Right video card */}
          <div className="flex relative flex-col gap-4 p-2 bg-[#1C1608] ">
            <Image
              className="w-full h-full object-cover backdrop-blur-xs"
              height={50}
              width={150}
              src="/ancient2.png"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.65)_100%)]" />
            <button className=" text-sm text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-[#CEAF79] to-amber-400">
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

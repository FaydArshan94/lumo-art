"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import HoverGlitchReveal from "../3d/HoverImage"; // your R3F effect
import Image from "next/image";

export default function EmbleImageCarousel() {
  const images = [
    { url: "/summer.jpg", alt: "Summer" },
    { url: "/egypt.jpg", alt: "Egypt" },
    { url: "/egyptian.jpg", alt: "Egyptian" },
    { url: "/woman.jpg", alt: "Woman" },
    { url: "/lamp.jpg", alt: "Lamp" },
    { url: "/culture.jpg", alt: "Culture" },
  ];

  const hoverImages = [
    "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1586351012965-861624544334?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi]);

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);
  }, [emblaApi, updateButtons]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel */}
      <div ref={emblaRef}>
        <div className="relative h-130">
          {Array.from({ length: Math.ceil(images.length / 2) }).map((_, i) => {
            const first = images[i * 2];
            const second = images[i * 2 + 1];

            return (
              <div
                key={i}
                className={`absolute inset-0 mt-6 h-[130vh] flex justify-center px-16 transition-opacity duration-700 ease-out
                    ${
                      selectedIndex === i
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }
                `}
              >
                {/* First image (static) */}
                {first && (
                  <div
                  className=" h-100 w-100 "
                    style={{
                      WebkitMaskImage: "url('/textures/rough-mask.png')",
                      WebkitMaskSize: "cover",
                      WebkitMaskRepeat: "no-repeat",
                      maskImage: "url('/textures/rough-mask.png')",
                      maskSize: "cover",
                      maskRepeat: "no-repeat",
                    }}
                  >
                    <Image
                      height={200}
                      width={200}
                      src={first.url}
                      alt={first.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}

                {/* Second image (hover R3F effect) */}
                {second && (
                  <div
                  className=" h-100 w-100 mt-20"
                    style={{
                      WebkitMaskImage: "url('/textures/rough-mask.png')",
                      WebkitMaskSize: "cover",
                      WebkitMaskRepeat: "no-repeat",
                      maskImage: "url('/textures/rough-mask.png')",
                      maskSize: "cover",
                      maskRepeat: "no-repeat",
                    }}
                  >
                    <Image
                      height={200}
                      width={200}
                      src={second.url}
                      alt={first.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={scrollPrev}
        disabled={!canPrev}
        className={`absolute left-20 top-1/2 -translate-y-1/2 transition-opacity ${
          canPrev ? "opacity-60 hover:opacity-100" : "opacity-20"
        }`}
      >
        <div className="relative w-12 h-12 flex items-center opacity-50 hover:opacity-70 transition-all duration-300 justify-center">
          {/* Top left brace */}
          <div className="absolute top-0 left-0 w-4 h-6 border-t-2 border-l-2 border-amber-200 group-hover/btn:border-amber-100"></div>
          {/* Bottom left brace */}
          <div className="absolute bottom-0 left-0 w-4 h-6 border-b-2 border-l-2 border-amber-200 group-hover/btn:border-amber-100"></div>
          {/* Top right brace */}
          <div className="absolute top-0 right-0 w-4 h-6 border-t-2 border-r-2 border-amber-200 group-hover/btn:border-amber-100"></div>
          {/* Bottom right brace */}
          <div className="absolute bottom-0 right-0 w-4 h-6 border-b-2 border-r-2 border-amber-200 group-hover/btn:border-amber-100"></div>
          {/* Icon */}
          <ChevronLeft size={24} />
        </div>
      </button>

      <button
        onClick={scrollNext}
        disabled={!canNext}
        className={`absolute right-20 top-1/2 -translate-y-1/2 transition-opacity ${
          canNext ? "opacity-60 hover:opacity-100" : "opacity-20"
        }`}
      >
        <div className="relative w-12 h-12 flex items-center opacity-50 hover:opacity-70 transition-all duration-300 justify-center">
          {/* Top left brace */}
          <div className="absolute top-0 left-0 w-4 h-6 border-t-2 border-l-2 border-amber-200 group-hover/btn:border-amber-100"></div>
          {/* Bottom left brace */}
          <div className="absolute bottom-0 left-0 w-4 h-6 border-b-2 border-l-2 border-amber-200 group-hover/btn:border-amber-100"></div>
          {/* Top right brace */}
          <div className="absolute top-0 right-0 w-4 h-6 border-t-2 border-r-2 border-amber-200 group-hover/btn:border-amber-100"></div>
          {/* Bottom right brace */}
          <div className="absolute bottom-0 right-0 w-4 h-6 border-b-2 border-r-2 border-amber-200 group-hover/btn:border-amber-100"></div>
          {/* Icon */}
          <ChevronRight size={24} />
        </div>
      </button>
    </div>
  );
}

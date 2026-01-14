import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";


export default function ImageCarousel() {




  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);


  const images = [
    {
      url: "/summer.jpg",
      alt: "Medieval harbor with sailing ship",
    },
    {
      url: "/egypt.jpg",
      alt: "Egypt",
    },
    {
      url: "/egyptian.jpg",
      alt: "Egyptian",
    },
    {
      url: "/woman.jpg",
      alt: "woman",
    },
  ];

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 350);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 350);
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 350);
  };

  const getImageForSlide = (offset) => {
    return images[(currentIndex + offset) % images.length];
  };

    const isPrevDisabled = currentIndex <= 0;
  const isNextDisabled = currentIndex >= images.length - 1;


  return (
    <div className="flex items-center justify-center p-8">
      <div className="max-w-5xl w-full  ">
        <div className="relative group">
          {/* Main carousel container */}
          <div className="relative  rounded-lg   ">
            {/* Two images side by side with opacity animation */}
            <div
              className={`flex gap-4 h-full transition-opacity duration-700 ease-out ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              {/* First image */}
              <div className="relative h-120 w-140 ">
                <Image
                  src={getImageForSlide(0).url}
                  alt={getImageForSlide(0).alt}
                  width={1000}
                  height={1000}
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


              </div>

              {/* Second image */}
              <div className="relative h-120 w-140 mt-20 ">
                <Image
                  src={getImageForSlide(1).url}
                  alt={getImageForSlide(1).alt}
                  width={1000}
                  height={1000}
                  className="w-full h-full  object-cover"
                  style={{
                    WebkitMaskImage: "url('/textures/rough-mask.png')",
                    WebkitMaskSize: "cover",
                    WebkitMaskRepeat: "no-repeat",
                    maskImage: "url('/textures/rough-mask.png')",
                    maskSize: "cover",
                    maskRepeat: "no-repeat",
                  }}
                />

              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={goToPrevious}
              disabled={isPrevDisabled}
              className={`absolute -left-20 top-1/2 -translate-y-1/2 z-10 group/btn
                ${
                  isPrevDisabled
                    ? "opacity-20 pointer-events-none"
                    : "text-amber-200 hover:text-amber-100 opacity-50 hover:opacity-70 transition-all duration-300"
                }
              `}
              aria-label="Previous image"
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
              onClick={goToNext}
              disabled={isNextDisabled}
              className={`absolute -right-20 top-1/2 -translate-y-1/2 z-10 group/btn
                ${
                isNextDisabled
                  ? "opacity-20 pointer-events-none"
                  : "text-amber-200 hover:text-amber-100 opacity-50 hover:opacity-70 transition-all duration-300"
              }
            `}
              aria-label="Next image"
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

          {/* Dots navigation */}
          {/* <div className="flex justify-center gap-3 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-amber-400'
                    : 'w-3 h-3 bg-amber-600/50 hover:bg-amber-500/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
        </div>

        {/* Image counter */}
        {/* <div className="text-center mt-4 text-amber-200/70 font-medium">
          Showing images {currentIndex + 1} & {((currentIndex + 1) % images.length) + 1} of {images.length}
        </div> */}
      </div>
    </div>
  );
}

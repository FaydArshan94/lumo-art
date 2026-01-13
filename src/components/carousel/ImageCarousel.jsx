import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
      alt: "Medieval harbor with sailing ship"
    },
    {
      url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
      alt: "Ancient stone archway with procession"
    },
    {
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
      alt: "Mystical mountain landscape"
    }
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

  return (
    <div className="flex items-center justify-center p-8">
        
      <div className="max-w-3xl w-full  ">
        <div className="relative group">
          {/* Main carousel container */}
          <div className="relative h-120  rounded-lg shadow-2xl">
            {/* Two images side by side with opacity animation */}
            <div 
              className={`flex gap-4 h-90 transition-opacity duration-700 ease-out ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {/* First image */}
              <div className="flex-1 relative h-full">
                <img
                  src={getImageForSlide(0).url}
                  alt={getImageForSlide(0).alt}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30 rounded-lg" />
              </div>

              {/* Second image */}
              <div className="flex-1 relative mt-20 h-full">
                <img
                  src={getImageForSlide(1).url}
                  alt={getImageForSlide(1).alt}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30 rounded-lg" />
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={goToPrevious}
              className="absolute -left-20 top-1/2 -translate-y-1/2 text-amber-200 hover:text-amber-100 transition-all duration-300 z-10 group/btn"
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
              className="absolute -right-20 top-1/2 -translate-y-1/2 text-amber-200 hover:text-amber-100 transition-all duration-300 z-10 group/btn"
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
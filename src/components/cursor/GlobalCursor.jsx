"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";



const GoldenArrowIcon = ({ size = 32, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F7E08A" />
        <stop offset="45%" stopColor="#E6AD4B" />
        <stop offset="75%" stopColor="#CEAF79" />
        <stop offset="100%" stopColor="#8F6B2D" />
      </linearGradient>
    </defs>

    {/* Filled arrow – same direction as reference */}
    <path d="M6 10L58 30L34 34L36 58L24 36L6 10Z" fill="url(#goldGradient)" />
  </svg>
);


export default function GlobalCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const y = useSpring(mouseY, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX + 1); // offset from real cursor
      mouseY.set(e.clientY + 1);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{ x, y }}
      className="fixed top-0 left-0 z-9999 pointer-events-none"
    >
      <GoldenArrowIcon size={30} />
    </motion.div>
  );
}

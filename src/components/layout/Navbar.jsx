"use client";

import React from "react";
import { motion } from "framer-motion";
import { LoaderPinwheel } from "lucide-react";



const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full absolute top-0 left-0 z-10 py-6 px-10 bg-transparent"
    >
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[#CEAF79]"><LoaderPinwheel /></h1>
        </div>

        <div>
          <h1 className="text-xl text-[#CEAF79] font-bold">LumoArt</h1>
        </div>

        <div className="flex flex-col gap-1">
          {["Home", "Contact", "About", "Settings"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="px-2 text-sm text-center text-[#CEAF79] rounded-full bg-zinc/40 backdrop-blur-3xl"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

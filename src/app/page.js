'use client'

import Hero from "@/components/Hero";
import PromptToPaintingSection from "@/components/layout/PaintingSection";
import FinalCTASection from "@/components/sections/CtaSection";
import PricingSection from "@/components/sections/PricingSection";
import Section1 from "@/components/sections/Section1";
import { Toaster } from "react-hot-toast";


export default function Home() {
  return (
    <>
    <Toaster/>
      <Hero />
      <Section1 />
      <PromptToPaintingSection />
      <PricingSection />
      <FinalCTASection />
    </>
  );
}

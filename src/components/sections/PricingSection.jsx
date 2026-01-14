import React from "react";

export default function PricingSection() {
  return (
    <section className="bg-[#1C1608] py-20 ">
      <div className=" mx-auto ">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl   font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-[#e6ad4b] to-amber-200 mb-4">
            Masterpiece Quality AI Art At a <br />
            Fraction of the Cost
          </h2>
          <p className="text-[#CEAF79]/50 text-sm md:text-base">
            Why pay more for generic generations? LumeArt delivers gallery-grade realism,
            artistic soul, and depth for less than your daily coffee.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  max-w-7xl mx-auto">
          
          {/* Pro Plan */}
          <div className="relative h-164 w-160 p-20 ">
            <div
              className="absolute inset-0  pointer-events-none"
              style={{
                WebkitMaskImage: "url('/textures/rough-mask.png')",
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskImage: "url('/textures/rough-mask.png')",
                maskSize: "cover",
                maskRepeat: "no-repeat",
                backgroundColor: "#3F281B",
              }}
            />

            <div className="relative">
              <h3 className="text-[#CEAF79] font-bold text-2xl mb-2">Pro Plan</h3>

              <div className="tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-[#CEAF79] to-amber-400 text-7xl  mb-6">
                $12<span className="text-xl ml-2 tracking-wide font-normal text-[#CEAF79]/60">/mo</span>
              </div>

              <p className="text-[#CEAF79]/50 text-sm mb-6">
                Best for creators, artists, and indie game designers
              </p>

              <ul className="space-y-3 text-sm text-[#CEAF79]/70 mb-10">
                <li>✓ 500 high-res generations / month</li>
                <li>✓ Full access to oil-painting styles</li>
                <li>✓ Style transfer included</li>
                <li>✓ Prompt-to-process replays</li>
                <li>✓ Commercial usage rights</li>
                <li>✓ Full access to artistic models</li>
                <li>✓ Ownership rights</li>
              </ul>

              <button className="w-full py-3 rounded-full font-semibold bg-linear-to-r from-amber-200 via-[#CEAF79] to-amber-200 text-[#1C1608]  hover:bg-amber-400 transition">
                Try ImagineArt Pro
              </button>
            </div>
          </div>

          {/* Studio Plan */}
          <div className="relative  h-164 w-160 p-20   ">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                WebkitMaskImage: "url('/textures/rough-mask.png')",
                WebkitMaskSize: "cover",
                WebkitMaskRepeat: "no-repeat",
                maskImage: "url('/textures/rough-mask.png')",
                maskSize: "cover",
                maskRepeat: "no-repeat",
                backgroundColor: "#23190B",
              }}
            />

            <div className="relative">
              <h3 className="text-[#CEAF79] font-bold text-2xl mb-2">Studio Plan</h3>

              <div className="tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-[#CEAF79] to-amber-400 text-7xl  mb-6">
                $49<span className="text-xl ml-2 tracking-wide font-normal text-[#CEAF79]/60">/mo</span>
              </div>

              <p className="text-[#CEAF79]/50 text-sm mb-6">
                For teams, agencies, and large-scale art needs
              </p>

              <ul className="space-y-3 text-sm text-[#CEAF79]/70 mb-10">
                <li>✓ Unlimited generations</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ Custom fine-tuned models</li>
                <li>✓ API access for bulk image creation</li>
                <li>✓ Ownership rights</li>
                <li>✓ Creative replay</li>
                <li>✓ Priority support & SLAs</li>
              </ul>

              <button className="w-full py-3 rounded-full bg-[#CEAF79]/20 text-[#CEAF79] hover:bg-[#CEAF79]/30 transition">
                Try ImagineArt Studio
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

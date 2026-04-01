import React from "react";
import AnimatedSection from "../shared/AnimatedSection";

const avatarImages = [
  "https://framerusercontent.com/images/kFPS1Qb6vl1AWJTvqXVAT5vhxWY.png",
  "https://framerusercontent.com/images/BReNkikWaCJZF2Bj04jLXGn26w.png",
  "https://framerusercontent.com/images/MI3z40IAAs8YpJ39EtPI479jW4A.png",
  "https://framerusercontent.com/images/DLrAVWztrtoKQ8NSNMg1Uaiurw.png",
  "https://framerusercontent.com/images/82Sov4wFOHIoNVFxGYqBQSAX5s.png",
];

export default function TrustSection() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-[1300px] mx-auto">
      
      {/* HEADING */}
      <AnimatedSection>
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight max-w-3xl mb-4">
        Why brands choose Borning
        </h2>
        <p className="mb-3">Businesses choose Borning because they need more than generic agency execution. They need a strategic partner who understands growth from both a positioning and performance perspective.
</p>
<p>We combine strategic thinking, intelligent systems, and clean execution to help brands move with clarity and confidence.
</p>
<ul className="list-disc pl-5 space-y-2 mb-8 mt-5">
  <li>Strategy and execution handled together, not in silos</li>
  <li>AI integrated as a business system, not surface-level hype</li>
  <li>Performance marketing and positioning aligned for stronger growth</li>
  <li>Premium communication with founder-safe messaging</li>
  <li>Built for brands that need momentum, trust, and measurable outcomes</li>
</ul>
      </AnimatedSection>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT BIG CARD */}
        <AnimatedSection>
          <div className="bg-gradient-to-br from-black to-neutral-900 text-white rounded-2xl p-8 flex flex-col justify-between h-full min-h-[420px]">
            
            <div>
              <h3 className="text-5xl font-bold mb-4">
                4.9<span className="text-xl font-medium">/5</span>
              </h3>

              <div className="flex -space-x-2 mb-3">
                {avatarImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="client"
                    className="w-9 h-9 rounded-full border-2 border-black object-cover"
                  />
                ))}
              </div>

              <p className="text-sm text-gray-300">
                Trusted by clients worldwide
              </p>
            </div>

            <h4 className="text-2xl font-semibold mt-10">
              Helped over <span className="text-white">100+</span> businesses
            </h4>
          </div>
        </AnimatedSection>

        {/* RIGHT SIDE GRID */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* CARD 1 */}
          <AnimatedSection>
            <div className="bg-white border rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Responsive Design</h3>
              <p className="text-sm text-gray-500">
                Seamless experiences designed to work across all devices and screen sizes.
              </p>
            </div>
          </AnimatedSection>

          {/* CARD 2 */}
          <AnimatedSection>
            <div className="bg-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Built to Scale</h3>
              <p className="text-sm text-gray-500">
                Our systems are flexible, maintainable, and ready to grow with your business.
              </p>
            </div>
          </AnimatedSection>

          {/* CARD 3 */}
          <AnimatedSection>
            <div className="bg-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Clear & Collaborative</h3>
              <p className="text-sm text-gray-500">
                Transparent communication, defined scope, and no unnecessary complexity.
              </p>
            </div>
          </AnimatedSection>

          {/* CARD 4 (ORANGE BIG) */}
          <AnimatedSection>
            <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm text-white/90">
                Efficient workflows that move quickly while maintaining quality, clarity, and intent.
              </p>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
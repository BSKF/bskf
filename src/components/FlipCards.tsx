import React, { useState } from "react";

const cardColors = [
  { bg: "bg-forest-green", border: "border-yellow-200" },
  { bg: "bg-yellow-green", border: "border-yellow-600" },
  { bg: "bg-forest-green", border: "border-yellow-200" },
  { bg: "bg-yellow-green", border: "border-yellow-600" },
];

const focusAreas = [
  {
    title: "Biodiversity Conservation",
    frontDesc: "Protecting native seeds and traditional crops",
    backDesc:
      "We work with farmers to preserve indigenous varieties, maintain seed banks, and promote crop diversity for resilient agriculture.",
  },
  {
    title: "Regenerative Farming",
    frontDesc: "Restoring soil health naturally",
    backDesc:
      "Organic composting, natural pest control, and crop rotation techniques rebuild soil fertility and eliminate harmful chemicals.",
  },
  {
    title: "Community Development",
    frontDesc: "Building stronger rural communities",
    backDesc:
      "Cooperative farming, skill workshops, and women's empowerment programs strengthen the social fabric of rural India.",
  },
  {
    title: "Innovation",
    frontDesc: "Blending tradition with modern solutions",
    backDesc:
      "We create appropriate technology, mobile apps, and innovative irrigation systems for sustainable progress.",
  },
];

const FocusSection = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
     <section className="relative py-20 px-6 bg-[url('/BackgroundPIC.jpg')] bg-current bg-center">
      
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-extrabold text-yellow-300 mb-6">
            Our Core Focus Areas
          </h2>
          <p className="text-lg text-yellow-400 font-semibold max-w-2xl mx-auto">
            Four pillars supporting Bangla Susthayi Krishi Foundation and rural prosperity across India.
          </p>
        </div>

        {/* Responsive grid of flipping cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusAreas.map((area, i) => (
            <div
              key={area.title}
              className="group perspective-1000 h-80"
              onMouseEnter={() => setFlipped(i)}
              onMouseLeave={() => setFlipped(null)}
              onClick={() => setFlipped(flipped === i ? null : i)}
              tabIndex={0}
              role="button"
              aria-pressed={flipped === i}
            >
              <div
                className={`relative w-full h-full duration-700 transform-style-preserve-3d cursor-pointer border-4 rounded-3xl shadow-xl hover:shadow-2xl ${cardColors[i].bg} ${cardColors[i].border} ${
                  flipped === i ? "rotate-y-180" : ""
                }`}
                style={{ minHeight: "20rem" }}
              >
                {/* Front */}
                <div className="absolute inset-0 w-full h-full backface-hidden flex flex-col items-center justify-center rounded-3xl p-8 text-center">
                  <div className="text-2xl font-bold mb-3">{area.title}</div>
                  <p className="text-lg opacity-90">{area.frontDesc}</p>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center rounded-3xl bg-white/95 text-orange-900 p-8 cursor-pointer">
                  <div className="text-lg font-bold mb-3 text-center">{area.title}</div>
                  <p className="text-base leading-relaxed text-center">{area.backDesc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusSection;

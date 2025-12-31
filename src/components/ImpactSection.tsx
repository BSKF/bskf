import React from "react";

// 1. Data Structure
const STATS_DATA = [
  {
    id: 1,
    value: "200+",
    title: "Farmers Empowered",
    description: "Helped farmers to tackle their problem across the country",
    image: "/impact_section_assets/Group 1000000938.svg",
  },
  {
    id: 2,
    value: "40%",
    title: "Income Increased",
    description: "Helped farmers to increase their income by 40%",
  },
  {
    id: 3,
    // Custom data fields for the complex card
    nationalVal: "5+",
    interVal: "1+",
    title: "Projects launched",
    description: "Creating impact throughout the country through our projects",
    image: "/impact_section_assets/Group 1000000941.svg",
  },
  {
    id: 4,
    value: "10+",
    title: "Events Organized",
    description: "Hosted various events across the country",
    image: "/impact_section_assets/Group 1000000942.svg",
  },
  {
    id: 5,
    value: "50+",
    title: "Native Varieties Preserved",
    description: "Leading agriculture through technology and innovation",
    image: "/impact_section_assets/Group 1000000944.svg",
  },
];

// 2. Reusable Bento Card Wrapper
const BentoCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`
      bg-[#FFF4A4]/50 backdrop-blur-sm 
      border border-black rounded-[32px] p-6 md:p-8 
      hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
      transition-all duration-300 ease-in-out
      flex flex-col h-full
      ${className}
    `}
  >
    {children}
  </div>
);

// 3. Simple Stat Content Component
const StatContent = ({ value, title, description, image, align = "left" }: any) => (
  <div className={`flex flex-col h-full justify-between ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
    <div>
      <h3 className="text-4xl md:text-6xl font-semibold text-[#313131] leading-none">
        {value}
      </h3>
      <p className="font-semibold text-black mt-4 text-lg">{title}</p>
      <p className="text-sm text-[#333333] mt-2 leading-relaxed">{description}</p>
    </div>
    {image && (
      <img 
        src={image} 
        alt={title} 
        className={`h-12 w-auto mt-6 object-contain ${align === "center" ? "mx-auto" : ""}`} 
      />
    )}
  </div>
);

const ImpactSection: React.FC = () => {
  return (
    <main className="relative flex flex-col items-center min-h-screen w-full bg-[#FFF4A4] overflow-hidden font-poppins pb-20">
      
      {/* Background Map */}
      <img
        src="/impact_section_assets/india 1.svg"
        alt="Map of India background"
        className="absolute top-10 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 h-full w-full md:w-1/2 object-contain opacity-40 md:opacity-60 pointer-events-none z-0"
      />

      {/* Header Text Section */}
      <div className="relative z-10 w-full flex justify-end px-6 md:px-20 py-10">
        <div className="max-w-3xl text-left">
          <p className="text-base md:text-2xl text-[#4E4E4E] font-medium leading-relaxed">
            From the soil beneath our feet to the supply chains that span the globe, we are rewiring the fundamentals of agriculture.
            <br />
            <span className="text-black block mt-4">
              Our mission is to empower producers with the technology to build a smarter, more sustainable world.
              <br />
              <span className="block mt-6">The results tell the story of our impact:</span>
            </span>
          </p>
        </div>
      </div>

      {/* BENTO GRID LAYOUT */}
      <div className="relative z-10 w-full max-w-[95vw] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-fr">
        
        {/* 1. LEFT COLUMN: Farmers (Tall) */}
        {/* Spans 3 columns, 2 rows */}
        <div className="md:col-span-3 md:row-span-2">
          <BentoCard className="justify-end items-end text-right">
             <div className="flex flex-col items-center md:items-end text-center md:text-right h-full justify-center">
                <StatContent 
                  value={STATS_DATA[0].value}
                  title={STATS_DATA[0].title}
                  description={STATS_DATA[0].description}
                  image={STATS_DATA[0].image}
                  align="right" // Custom logic to handle right alignment if needed, or just standard flex
                />
             </div>
          </BentoCard>
        </div>

        {/* 2. MIDDLE TOP: Income (Wide) */}
        {/* Spans 7 columns */}
        <div className="md:col-span-7">
          <BentoCard>
            <div className="flex flex-col h-full justify-between">
              <StatContent 
                value={STATS_DATA[1].value}
                title={STATS_DATA[1].title}
                description={STATS_DATA[1].description}
              />
              
              {/* Testimonial nested inside the Income Card */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 bg-[#FED16A]/80 rounded-2xl p-4">
                 <div className="text-[#4E4E4E] italic text-sm flex-1">
                    "Working with them was an absolute pleasure. They were professional, efficient, and delivered results that truly exceeded our expectations."
                    <p className="mt-1 font-bold not-italic">- Anjali Bose</p>
                 </div>
                 <button className="h-12 w-12 min-w-[3rem] bg-[#386641] rounded-full flex items-center justify-center hover:bg-[#2e5435] transition-colors shadow-md">
                   <img src="/impact_section_assets/Arrow 3.svg" alt="Read more" className="h-3 w-auto invert" />
                 </button>
              </div>
            </div>
          </BentoCard>
        </div>

        {/* 3. RIGHT COLUMN: Varieties (Tall) */}
        {/* Spans 2 columns, 2 rows */}
        <div className="md:col-span-2 md:row-span-2">
          <BentoCard className="items-center text-center justify-center">
             <StatContent 
               value={STATS_DATA[4].value}
               title={STATS_DATA[4].title}
               description={STATS_DATA[4].description}
               image={STATS_DATA[4].image}
               align="center"
             />
             <button className="mt-8 bg-[#F97A00] px-6 py-2 rounded-full text-white font-semibold text-xs md:text-sm hover:bg-[#d66900] transition shadow-md w-full">
               See more
             </button>
          </BentoCard>
        </div>

        {/* 4. MIDDLE BOTTOM LEFT: Projects */}
        {/* Spans 4 columns */}
        <div className="md:col-span-4">
          <BentoCard>
            <div className="flex flex-col h-full justify-between">
               {/* Dual Value Header */}
               <div className="flex gap-6 mb-2">
                  <div>
                    <span className="text-4xl md:text-6xl block text-[#313131] font-semibold">
                      {STATS_DATA[2].nationalVal}
                    </span>
                    <span className="text-gray-600 font-medium">National</span>
                  </div>
                  {/* <div>
                    <span className="text-4xl md:text-6xl block text-[#313131] font-semibold">
                      {STATS_DATA[2].interVal}
                    </span>
                    <span className="text-gray-600 font-medium">International</span>
                  </div> */}
               </div>
               
               <div>
                 <p className="font-semibold text-lg">{STATS_DATA[2].title}</p>
                 <p className="text-sm text-[#333333] mt-2">{STATS_DATA[2].description}</p>
                 <img src={STATS_DATA[2].image} className="mt-4 h-12" alt="Projects icon" />
               </div>
            </div>
          </BentoCard>
        </div>

        {/* 5. MIDDLE BOTTOM RIGHT: Events */}
        {/* Spans 3 columns */}
        <div className="md:col-span-3">
          <BentoCard className="items-center text-center justify-center">
            <StatContent 
              value={STATS_DATA[3].value}
              title={STATS_DATA[3].title}
              description={STATS_DATA[3].description}
              image={STATS_DATA[3].image}
              align="center"
            />
          </BentoCard>
        </div>

      </div>
    </main>
  );
};

export default ImpactSection;
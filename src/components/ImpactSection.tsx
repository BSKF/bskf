import React from "react";

const indiaMapPath = "/impact_section_assets/india 1.svg";
const imgCapsule1Path = "/impact_section_assets/imgCapsule1.svg";
const imgCapsule2Path = "/impact_section_assets/imgCapsule2.svg";
const imgCapsule3Path = "/impact_section_assets/imgCapsule3.svg";
const farmersImgPath = "/impact_section_assets/Group 1000000938.svg";
const arrowImgPath = "/impact_section_assets/Arrow 3.svg";
const projectsImgPath = "/impact_section_assets/Group 1000000941.svg";
const eventsImgPath = "/impact_section_assets/Group 1000000942.svg";
const varietiesImgPath = "/impact_section_assets/Group 1000000944.svg";
const eyesImgPath = "/impact_section_assets/eyesLeft.svg";

const ImpactSection: React.FC = () => {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen w-full bg-[#FFF4A4] overflow-hidden font-poppins">
      {/* India Map */}
      <img
        src={indiaMapPath}
        alt="Map of India"
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          md:left-0 md:translate-x-0
          object-contain
          w-[90vw] md:w-[45vw]
          opacity-40 md:opacity-60
          pointer-events-none
          z-0
        "
      />

      {/* Top Section */}
      <div className="relative z-10 w-full flex justify-end items-center px-4 md:px-[5vw] py-6 md:pt-[3vw] md:pb-[0.5vw] mt-6 md:mt-0">
        <div className="text-left max-w-[90%] md:max-w-[70%]">
          <p className="text-sm md:text-[1.7vw] text-[#4E4E4E] font-medium leading-relaxed">
            From the soil{" "}
            <img
              className="h-4 md:h-[2.2vw] inline align-middle"
              src={imgCapsule1Path}
              alt=""
            />{" "}
            beneath our feet to the supply chains that span the globe, we are
            rewiring the fundamentals of agriculture.
            <br />
            <span className="text-black">
              Our mission is to empower producers with the technology{" "}
              <img
                className="h-4 md:h-[2.2vw] inline align-middle"
                src={imgCapsule2Path}
                alt=""
              />{" "}
              to build a smarter, more sustainable{" "}
              <img
                className="h-4 md:h-[2.2vw] inline align-middle"
                src={imgCapsule3Path}
                alt=""
              />{" "}
              world.
              <br />
              <span className="block mt-4 md:mt-[1.2vw]">
                The results tell the story of our impact:
              </span>
            </span>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between w-full mt-6 md:mt-[1.5vw]">
        {/* Left */}
        <div className="md:w-[25%] border-b md:border-b-0 md:border-r border-black p-4 md:p-[1vw] flex justify-end">
          <div className="w-full md:w-[70%] text-[#313131] text-center md:text-left">
            <h1 className="text-4xl md:text-[5vw] font-semibold leading-none">
              3000+
            </h1>
            <p className="font-semibold text-black">Farmers Empowered</p>
            <p className="text-xs md:text-[0.6vw] text-[#5d5c5c] mt-1">
              helped farmers to tackle their problem across the country
            </p>
            <img
              src={farmersImgPath}
              alt=""
              className="h-12 md:h-[4vw] w-auto mx-auto md:mx-0 mt-3"
            />
          </div>
        </div>

        {/* Middle */}
        <div className="md:w-[55%] flex flex-col items-center md:items-start p-4 md:p-[0.5vw]">
          {/* Income Increased */}
          <div className="w-full mb-6">
            <h1 className="text-4xl md:text-[5vw] font-semibold text-[#313131]">
              40%
            </h1>
            <p className="font-semibold text-black">Income Increased</p>
            <p className="text-xs md:text-[0.6vw] text-[#5d5c5c] mt-1">
              helped farmers to increase their income by 40%
            </p>

            {/* Testimonial */}
            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mt-4">
              <div className="bg-[#FED16A] rounded-3xl p-3 md:p-[1vw] text-[#4E4E4E] italic text-xs md:text-[0.6vw] w-full sm:w-[80%]">
                "Working with them was an absolute pleasure. They were
                professional, efficient, and delivered results that truly
                exceeded our expectations."
                <p className="mt-2">- Anjali Bose</p>
              </div>
              <div className="h-16 w-16 md:h-[5vw] md:w-[5vw] bg-[#386641] rounded-full flex items-center justify-center cursor-pointer">
                <img src={arrowImgPath} alt="arrow" className="h-4 md:h-auto" />
              </div>
            </div>
          </div>

          {/* Projects + Events */}
          <div className="w-full flex flex-col sm:flex-row border-t md:border-t-0">
            <div className="w-full sm:w-[60%] p-2 md:p-[0.5vw]">
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <div className="flex items-center gap-1">
                  <h1 className="text-3xl md:text-[5vw] font-semibold text-[#313131]">
                    15+
                  </h1>
                  <h3 className="font-semibold text-[#4E4E4E]">National</h3>
                </div>
                <div className="flex items-center gap-1">
                  <h1 className="text-3xl md:text-[5vw] font-semibold text-[#313131]">
                    1+
                  </h1>
                  <h3 className="font-semibold text-[#4E4E4E]">
                    International ✈️
                  </h3>
                </div>
              </div>
              <p className="font-semibold">Projects are launched</p>
              <p className="text-xs md:text-[0.6vw] text-[#5d5c5c] mt-1">
                creating impact throughout the country through our projects
              </p>
              <img
                src={projectsImgPath}
                alt=""
                className="w-16 md:w-[5vw] mt-2 mx-auto md:mx-0"
              />
            </div>

            <div className="w-full sm:w-[40%] p-4 md:p-[1vw] border-t sm:border-t-0 sm:border-l border-black flex flex-col items-center justify-center text-center">
              <h1 className="text-3xl md:text-[5vw] font-semibold text-[#313131]">
                10+
              </h1>
              <p className="font-semibold">Events Organized</p>
              <p className="text-xs md:text-[0.6vw] text-[#5d5c5c] mt-1">
                hosted various events across the country
              </p>
              <img
                src={eventsImgPath}
                alt=""
                className="w-16 md:w-[5vw] mt-2"
              />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="md:w-[20%] border-t md:border-t-0 md:border-l border-black p-4 md:p-[1vw] flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-[5vw] font-semibold text-[#313131]">
            150+
          </h1>
          <p className="font-semibold">Native Varieties Preserved</p>
          <p className="text-xs md:text-[0.6vw] text-[#5d5c5c] mt-1">
            Leading agriculture through technology and innovation
          </p>
          <img
            src={varietiesImgPath}
            alt=""
            className="w-16 md:w-[5vw] mt-2"
          />
          <div className="flex items-center justify-center gap-3 mt-4">
            <button className="bg-[#F97A00] px-4 py-2 md:px-[2vw] md:py-[1vw] rounded-[30px] text-white font-semibold text-sm">
              See more
            </button>
            <img src={eyesImgPath} alt="" className="h-8 md:h-[3vw]" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ImpactSection;

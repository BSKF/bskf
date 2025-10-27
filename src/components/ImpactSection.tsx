import React from 'react';

// Define paths relative to the public folder
const indiaMapPath = "/impact_section_assets/india 1.svg";
const imgCapsule1Path = "/impact_section_assets/imgCapsule1.svg";
const imgCapsule2Path = "/impact_section_assets/imgCapsule2.svg";
const imgCapsule3Path = "/impact_section_assets/imgCapsule3.svg";

const ImpactSection: React.FC = () => {
  return (
    // Main container - keeps w-screen
    <main className="h-screen w-screen bg-custom-yellow-bg flex items-center relative overflow-hidden">

      {/* India Map */}
      <img
        src={indiaMapPath}
        alt="Map of India"
        className="h-[98%] absolute left-0 bottom-0 object-contain"
      />

      {/* Layer for Text Content - Removed w-screen */}
      <div className="h-screen absolute top-0 left-0 flex flex-col w-full"> {/* Removed w-screen, added w-full */}

        {/* Top section containing the text block */}
        <div className="h-[35%] w-full flex justify-end items-start pt-[3vw] pr-[5vw] pb-[0.5vw] pl-[1vw]">

          {/* Text Content Block */}
          <div className="text-left">
            <p className="font-poppins">
              <span className="text-[1.7vw] font-medium text-custom-grey-text">
                From the soil{' '}
                <img className="h-[2.2vw] inline align-middle" src={imgCapsule1Path} alt="" />{' '}
                beneath our feet to the supply chains that <br /> span the globe, we are rewiring the fundamentals of agriculture. <br />
                <span className="text-[1.7vw] font-medium text-black">
                  Our mission is to empower producers with the technology{' '}
                  <img className="h-[2.2vw] inline align-middle" src={imgCapsule2Path} alt="" />{' '}
                  <br /> to build a smarter, more sustainable{' '}
                  <img className="h-[2.2vw] inline align-middle" src={imgCapsule3Path} alt="" />{' '}
                  world. <br />
                  <span className="text-[1.7vw] font-medium text-black block mt-[1.2vw]">
                    The results tell the story of our impact:
                  </span>
                </span>
              </span>
            </p>
          </div>
        </div>

        {/* Bottom section placeholder */}
        <div className="h-[65%] w-full"></div>

      </div>
    </main>
  );
};

export default ImpactSection;
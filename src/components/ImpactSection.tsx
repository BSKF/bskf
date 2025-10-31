import React from 'react';

// Define paths relative to the public folder (as in your example)
const indiaMapPath = "/impact_section_assets/india 1.svg";
const imgCapsule1Path = "/impact_section_assets/imgCapsule1.svg";
const imgCapsule2Path = "/impact_section_assets/imgCapsule2.svg";
const imgCapsule3Path = "/impact_section_assets/imgCapsule3.svg";
const farmersImgPath = "/impact_section_assets/Group 1000000938.svg";
const arrowImgPath = "/impact_section_assets/Arrow 3.svg";
const projectsImgPath = "/impact_section_assets/Group 1000000941.svg";
const eventsImgPath = "/impact_section_assets/Group 1000000942.svg";
const varietiesImgPath = "/impact_section_assets/Group 1000000944.svg";
const eyesImgPath = "/impact_section_assets/eyesLeft.svg"; // Assuming this is the correct file for 'eyesLeft.svg'

const ImpactSection: React.FC = () => {
  return (
    // Main container: Translated from `main` tag
    // Use `font-poppins` (requires setup in tailwind.config.js)
    <main className="h-screen w-screen bg-[#FFF4A4] flex items-center relative overflow-x-hidden font-poppins">

      {/* India Map: Translated from `.indian_map` */}
      <img
        src={indiaMapPath}
        alt="Map of India"
        className="h-[98%] absolute left-0 bottom-0 object-contain pointer-events-none" // Added pointer-events-none
      />

      {/* Layer: Translated from `.layer` */}
      <div className="h-screen w-screen absolute top-0 left-0 flex flex-col">

        {/* Top section: Translated from `.top` */}
        <div className="h-[35%] w-full flex justify-end items-end pt-[3vw] pr-[5vw] pb-[0.5vw] pl-[1vw]">
          <div className="text-left">
            <p>
              {/* `.greyColor` */}
              <span className="text-[1.7vw] font-medium text-[#4E4E4E]">
                From the soil{' '}
                {/* `.imgCapsule` */}
                <img className="h-[2.2vw] inline align-middle" src={imgCapsule1Path} alt="" />{' '}
                beneath our feet to the supply chains that <br /> span the globe, we are rewiring the fundamentals of agriculture. <br />
                {/* `.blackColor` */}
                <span className="text-[1.7vw] font-medium text-black">
                  Our mission is to empower producers with the technology{' '}
                  <img className="h-[2.2vw] inline align-middle" src={imgCapsule2Path} alt="" />{' '}
                  <br /> to build a smarter, more sustainable{' '}
                  <img className="h-[2.2vw] inline align-middle" src={imgCapsule3Path} alt="" />{' '}
                  world. <br />
                  {/* `.para2` */}
                  <span className="text-[1.7vw] font-medium text-black block mt-[1.2vw]">
                    The results tell the story of our impact:
                  </span>
                </span>
              </span>
            </p>
          </div>
        </div>

        {/* Bottom section: Translated from `.bottom` */}
        <div className="h-[calc(65%_-_1.5vw)] w-full flex mt-[1.5vw]">

          {/* Bottom Left: Translated from `.bottomLeft` */}
          <div className="h-[70%] w-[25%] border-r-[1.5px] border-black p-[1vw] flex justify-end">
            {/* `.farmersEmpoweredBox` */}
            <div className="w-[70%] h-fit flex flex-col text-[#313131]">
              <h1 className="text-[5vw] font-semibold leading-none">3000+</h1>
              <p className="font-semibold text-black">Farmers Empowered</p>
              {/* `.farmersEmpoweredTag` */}
              <p className="text-[0.6vw] text-[#5d5c5c] mt-[0.3vw]">helped farmers to tackle their problem across the country</p>
              <img src={farmersImgPath} alt="" className="h-[4vw] w-[6.5vw] mt-[1vw]" />
            </div>
          </div>

          {/* Bottom Middle: Translated from `.bottomMiddle` */}
          <div className="h-full w-[55%] flex flex-col">
            {/* `.bottomMiddleTop` */}
            <div className="w-full h-1/2 flex items-center justify-center p-[0.5vw]">
              {/* `.incomeIncreased` */}
              <div className="h-full w-1/2 border-b-[1.5px] border-black">
                <h1 className="text-[5vw] font-semibold leading-none text-[#313131]">40%</h1>
                <p className="font-semibold text-black">Income Increased</p>
                <p className="text-[0.6vw] text-[#5d5c5c] mt-[0.3vw]">helped farmers to increase their income by 40%</p>
                {/* `.testimonialsAndCTAButton` */}
                <div className="w-full h-[40%] flex items-center justify-between mb-[0.5vw]">
                  {/* `.testimonials` */}
                  <div className="h-full w-[80%] bg-[#FED16A] rounded-[30px] mt-[0.5vw] flex justify-center p-[1vw] flex-col">
                    <p className="text-[0.6vw] text-[#4E4E4E] italic">"Working with them was an absolute pleasure. They were professional, efficient, and delivered results that truly exceeded our expectations. We couldn't be happier!"</p>
                    <p className="text-[0.6vw] text-[#4E4E4E] italic">-Anjali Bose</p>
                  </div>
                  {/* `.testimonialsCTAbtn` */}
                  <div className="h-[5vw] w-[5vw] bg-[#386641] rounded-full flex items-center justify-center cursor-pointer">
                    <img src={arrowImgPath} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
            {/* `.bottomMiddleBottom` */}
            <div className="w-full h-1/2 flex">
              {/* `.projectsSection` */}
              <div className="h-full w-[60%] p-[0.5vw]">
                {/* `.projectNumbers` */}
                <div className="flex gap-[0.5vw]">
                  {/* `.nationalProjects` */}
                  <div className="h-fit w-fit flex items-center justify-center">
                    <h1 className="text-[5vw] font-semibold leading-none text-[#313131]">15+</h1>
                    <h3 className="font-semibold text-[#4E4E4E]">National</h3>
                  </div>
                  {/* `.internationalProjects` */}
                  <div className="h-fit w-fit flex items-center justify-center">
                    <h1 className="text-[5vw] font-semibold leading-none text-[#313131]">, 1+</h1>
                    <h3 className="font-semibold text-[#4E4E4E]">International✈️</h3>
                  </div>
                </div>
                <p className="font-semibold">Projects are launched</p>
                <p className="text-[0.6vw] text-[#5d5c5c] mt-[0.3vw]">creating impact through out the country through our projects</p>
                <img src={projectsImgPath} alt="" className="w-[5vw] mt-[1vw]" />
              </div>
              {/* `.eventsOrganizedSection` */}
              <div className="w-[40%] h-full p-[0.5vw_1vw_0.5vw_2vw] border-l-[1.5px] border-black flex flex-col items-center justify-center">
                <h1 className="text-[5vw] font-semibold leading-none text-[#313131]">10+</h1>
                <p className="font-semibold">Events Organized</p>
                <p className="text-[0.6vw] text-[#5d5c5c] mt-[0.3vw]">hosted various events across the country</p>
                <img src={eventsImgPath} alt="" className="w-[5vw] mt-[1vw]" />
              </div>
            </div>
          </div>

          {/* Bottom Right: Translated from `.bottomRight` */}
          <div className="h-full w-[20%]">
            {/* `.nativeVaritiesPreserved` */}
            <div className="h-[70%] w-full p-[1vw] border-l-[1.5px] border-black">
              <h1 className="text-[5vw] font-semibold leading-none text-[#313131]">150+</h1>
              <p className="font-semibold">Native Varities Preserved</p>
              <p className="text-[0.6vw] text-[#5d5c5c] mt-[0.3vw]">Leading agriculture through technology and innovation</p>
              <img src={varietiesImgPath} alt="" className="w-[5vw] mt-[1vw]" />
              {/* `.seemorediv` */}
              <div className="h-fit w-fit flex items-center justify-center gap-[1vw] mt-[1vw]">
                {/* `.pusblicationSeemore` */}
                <button className="border-none bg-[#F97A00] px-[2vw] py-[1vw] rounded-[30px]">
                  <a href="#" className="no-underline text-white font-semibold">See more</a>
                </button>
                <img src={eyesImgPath} alt="" className="h-[3vw] w-[3vw] mt-0" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section placeholder */}
        <div className="h-[65%] w-full"></div>

      </div>
    </main>
  );
};

export default ImpactSection;
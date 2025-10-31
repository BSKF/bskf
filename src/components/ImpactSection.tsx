type Place = { name: string; lat: number; lon: number };
const ImpactSection = () => {
  const stats = [
    { number: "3,000+", label: "Farmers Empowered", icon: "👨‍🌾 " },
    { number: "10+", label: "Events", icon: "🏘️" },
    { number: "500", label: "Youth Empowered", icon: "🌾" },
    { number: "150+", label: "Native Varieties Preserved", icon: "🌱" },
    { number: "40%", label: "Income  Increased", icon: "📈" },
    { number: "5+", label: "Projects", icon: "🗺️" }
  ];

  const places: Place[] = [
    // { name: "Delhi", lat: 28.55, lon: 77.19 },
    // { name: "Mumbai", lat: 19.07, lon: 72.88 },
    // { name: "Chennai", lat: 13.08, lon: 80.27 },
    // { name: "Kolkata", lat: 22.57, lon: 88.36 },
    // { name: "Chandigarh", lat: 30.71, lon: 76.76 },
  ];


  const convertCoordinatesToPercent = (lat: number, lon: number) => {
    const latN = 37.6;
    const latNPers = 5.4;
    const latS = 8.4;
    const latSPers = 90.4;

    const longE = 97.2;
    const longEPers = 90.6;
    const longW = 68.7;
    const longWPers = 12.8;

    const top =
      latNPers +
      ((latN - lat) / (latN - latS)) * (latSPers - latNPers);

    const left =
      longWPers +
      ((lon - longW) / (longE - longW)) * (longEPers - longWPers);

    return { top: +top.toFixed(2), left: +left.toFixed(2) };
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-green-100 to-orange-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Side */}
          <div className="relative">
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
                Our Impact Across India
              </h2>
              <p className="text-xl text-green-700">
                Transforming rural landscapes from Kashmir to Kerala
              </p>
            </div>
          </div>

          {/* Bottom Middle: Translated from `.bottomMiddle` */}
          <div className="h-full w-[55%] flex flex-col">
            {/* `.bottomMiddleTop` */}
            <div className="w-full h-1/2 flex items-center justify-center p-[0.5vw]">
              {/* `.incomeIncreased` */}
              <div className="h-full w-1/2 mb-6">
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
                {places.map((p) => {
                  const { top, left } = convertCoordinatesToPercent(p.lat, p.lon);
                  return (
                    <span
                      key={p.name}
                      title={p.name}
                      className="absolute w-3 h-3 bg-green-500 rounded-full animate-pulse"
                      style={{
                        top: `${top}%`,
                        left: `${left}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Statistics Side */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-green-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-green-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

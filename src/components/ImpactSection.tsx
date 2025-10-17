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

            {/* India Map with Activity Dots */}
            <div className="relative bg-gray-400 rounded-2xl p-8 shadow-lg">
              <div className="aspect-square w-full max-w-md mx-auto relative">
                {/* India Map SVG */}
                <img
                  src="india.jpg"
                  alt="India Map"
                  className="w-full h-full object-contain rounded-lg"
                />
                <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-md">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Active Projects</span>
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

const ImpactSection = () => {
  const stats = [
    { number: "12,000+", label: "Farmers Empowered", icon: "👨‍🌾" },
    { number: "850+", label: "Villages Reached", icon: "🏘️" },
    { number: "25,000", label: "Acres Transformed", icon: "🌾" },
    { number: "150+", label: "Native Varieties Preserved", icon: "🌱" },
    { number: "40%", label: "Income Increase", icon: "📈" },
    { number: "30+", label: "Districts Covered", icon: "🗺️" }
  ];

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
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
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

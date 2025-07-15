
import { useState } from 'react';
import { Card } from '@/components/ui/card';

const FlipCards = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const cards = [
    {
      title: "Biodiversity Conservation",
      icon: "🌱",
      frontDesc: "Protecting native seeds and traditional crops",
      backDesc: "We work with farmers to preserve indigenous varieties, maintain seed banks, and promote crop diversity that has sustained India for millennia.",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Regenerative Farming", 
      icon: "🚜",
      frontDesc: "Restoring soil health through natural methods",
      backDesc: "Our programs teach organic composting, natural pest control, and crop rotation techniques that rebuild soil fertility without harmful chemicals.",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Community Development",
      icon: "👥", 
      frontDesc: "Building stronger rural communities",
      backDesc: "Through cooperative farming, skill development workshops, and women's empowerment programs, we strengthen the social fabric of rural India.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Innovation",
      icon: "💡",
      frontDesc: "Blending tradition with modern solutions",
      backDesc: "We develop appropriate technology solutions, mobile apps for farmers, and innovative irrigation systems that honor traditional wisdom.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-orange-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Our Core Focus Areas
          </h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Four pillars supporting Bangla Susthayi Krishi Foundation and rural prosperity across India
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group perspective-1000 h-80"
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <Card className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                flippedCard === index ? 'rotate-y-180' : ''
              }`}>
                {/* Front */}
                <div className={`absolute inset-0 w-full h-full backface-hidden rounded-lg bg-gradient-to-br ${card.color} p-6 flex flex-col items-center justify-center text-white text-center`}>
                  <div className="text-6xl mb-4">{card.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-lg opacity-90">{card.frontDesc}</p>
                </div>
                
                {/* Back */}
                <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-lg bg-gradient-to-br ${card.color} p-6 flex flex-col justify-center text-white`}>
                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                  <p className="text-base leading-relaxed">{card.backDesc}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlipCards;

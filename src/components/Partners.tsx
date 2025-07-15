import { Card } from '@/components/ui/card';

const Partners = () => {
  const partners = [
    { name: "Prakhreti", logo: "/Partners/prakheti.jpg", type: "Corporate" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Our Partners
          </h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Working together with organizations across sectors to create lasting impact in rural India
          </p>
        </div>

        {/* Partner Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {['Corporate'].map((category) => (
            <div key={category} className="text-center">
              <h3 className="font-semibold text-green-800 mb-4">{category}</h3>
              <div className="space-y-3">
                {partners
                  .filter(partner => partner.type === category)
                  .map((partner, index) => (
                    <Card key={index} className="p-4 hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                      <div className="flex flex-col items-center space-y-2">
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} Logo`} 
                          className="w-16 h-16 object-contain"
                        />
                        <p className="text-sm font-medium text-green-700 text-center leading-tight">
                          {partner.name}
                        </p>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

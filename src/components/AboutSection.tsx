
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Target, Heart, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            About Us
          </h2>
          <p className="text-lg text-green-600 max-w-3xl mx-auto">
            Transforming lives through sustainable agriculture and empowering farming communities across India
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-800">Our Mission</h3>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are committed to preserving biodiversity, advancing sustainable agriculture, and empowering local communities. By promoting agroecology and integrating traditional knowledge with innovative solutions, we aim to protect our agricultural heritage, foster ecological balance, and build resilient, self-reliant communities for a sustainable future.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Leaf className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-800">Our Vision</h3>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We envision a future where traditional farming practices coexist in harmony with rich, diverse ecosystems—ensuring food security, ecological balance, and sustainable economic growth. Through our work, we strive to foster climate resilience, enhance health and well-being, and support enduring livelihoods for present and future generations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-green-800 mb-8">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-green-800 mb-2">Compassion</h4>
              <p className="text-gray-600">Understanding farmer challenges and working together for solutions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold text-orange-800 mb-2">Sustainability</h4>
              <p className="text-gray-600">Prioritizing environmental conservation in all our initiatives</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-green-800 mb-2">Community</h4>
              <p className="text-gray-600">Believing in collective growth and mutual support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    // Handle newsletter signup
    setEmail('');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-green-800 to-green-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Newsletter Signup */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-green-800 mb-4">
                Stay Connected with Our Mission
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get monthly updates on our projects, farmer success stories, 
                and ways you can contribute to sustainable agriculture in India.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-12 rounded-full border-green-200 focus:border-green-500"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 h-12 px-8 rounded-full text-white font-medium transition-all duration-300"
                  >
                    Subscribe
                  </Button>
                </div>
              </form>
              
              <p className="text-sm text-gray-500 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
          
          {/* Call to Action */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Join Us in Growing a
              <span className="block text-orange-300">Sustainable Future</span>
            </h2>
            
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Every contribution, whether through volunteering, donations, or spreading awareness, 
              helps us empower more farmers and heal our precious land.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
                Donate Now
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
              >
                Volunteer With Us
              </Button>
            </div>
            
            <div className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <h4 className="text-xl font-semibold mb-3">Quick Impact Stats</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-300">₹500</div>
                  <div className="text-sm opacity-90">Trains 1 farmer</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-300">₹2000</div>
                  <div className="text-sm opacity-90">Transforms 1 acre</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;


import { useState, useEffect } from 'react';
import { Sprout, Leaf, Sun, Droplets } from 'lucide-react';

const LoadingScreen = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  
  const growthPhases = [
    { icon: Droplets, text: "Watering the seeds...", color: "text-blue-500" },
    { icon: Sprout, text: "Sprouting new growth...", color: "text-green-500" },
    { icon: Leaf, text: "Growing strong roots...", color: "text-green-600" },
    { icon: Sun, text: "Harvesting success...", color: "text-yellow-500" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % growthPhases.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = growthPhases[currentPhase].icon;

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-green-50 to-orange-50 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Plant Growth */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto relative">
            {/* Soil base */}
            <div className="absolute bottom-0 w-full h-8 bg-amber-800 rounded-full"></div>
            
            {/* Growing plant animation */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <CurrentIcon 
                className={`h-16 w-16 ${growthPhases[currentPhase].color} animate-pulse transition-all duration-500`}
              />
            </div>
            
            {/* Floating particles */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-green-400 rounded-full animate-bounce opacity-60"
                  style={{
                    left: `${20 + i * 12}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '1s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Loading text */}
        <h2 className="text-2xl font-bold text-green-800 mb-4 animate-fade-in">
          Bangla Susthayi Krishi Foundation
        </h2>
        
        <p className={`text-lg ${growthPhases[currentPhase].color} mb-6 transition-all duration-500`}>
          {growthPhases[currentPhase].text}
        </p>

        {/* Progress bar */}
        <div className="w-64 h-2 bg-green-200 rounded-full mx-auto overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-500 to-orange-500 rounded-full transition-all duration-1000"
            style={{ width: `${((currentPhase + 1) / growthPhases.length) * 100}%` }}
          />
        </div>

        {/* Subtitle */}
        <p className="text-green-600 mt-4 text-sm animate-pulse">
          Cultivating a sustainable future...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;

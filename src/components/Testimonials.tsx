import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const testimonials = [
    {
      name: "Raju Patel",
      location: "Gujarat",
      quote:
        "Bangla Susthayi Krishi Foundation has changed my life. Now I practice organic farming and my income has doubled.",
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Sunita Devi",
      location: "Uttar Pradesh",
      quote:
        "By joining the women farmers collective, I not only learned new techniques but also became self-reliant.",
      image:
        "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Krishna Rao",
      location: "Karnataka",
      quote:
        "Bringing back traditional millet varieties has made my soil healthier and crops better.",
      image:
        "https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Navigation
  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(deltaX) > 50) {
      deltaX > 0 ? nextTestimonial() : prevTestimonial();
    }
    touchStartX.current = null;
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-orange-300 to-[#FFF9A2] overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Testimonials
          </h2>
          <p className="text-lg text-green-600">
            Real stories from farmers whose lives have been transformed
          </p>
        </div>

        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Card */}
          <Card className="max-w-4xl mx-auto shadow-2xl border-2 border-green-700 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="order-2 md:order-1 text-center">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                  />
                  <h3 className="text-2xl font-bold text-green-800 mb-1">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-orange-600">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>

                {/* Quote Section with Animation */}
                <div className="order-1 md:order-2 md:col-span-2">
                  <div className="text-6xl text-green-200 mb-4">"</div>
                  <AnimatePresence mode="wait">
                    <motion.blockquote
                      key={currentTestimonial}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6 }}
                      className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed font-medium"
                    >
                      {testimonials[currentTestimonial].quote}
                    </motion.blockquote>
                  </AnimatePresence>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentTestimonial === index
                    ? "bg-green-600 scale-125"
                    : "bg-green-300 hover:bg-green-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrows (Desktop Only) */}
          <button
            onClick={prevTestimonial}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-green-600 text-white p-3 rounded-full hover:bg-green-700 shadow-lg transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-green-600 text-white p-3 rounded-full hover:bg-green-700 shadow-lg transition"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

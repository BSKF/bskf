import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StickyImageNarrative = () => {
    const sectionRef = useRef(null);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
                const progress = self.progress;
                if (progress < 0.33) setActiveStep(0);
                else if (progress < 0.66) setActiveStep(1);
                else setActiveStep(2);
            }
        });
    }, []);

    const steps = [
        {
            text: "In the heart of West Bengal, a quiet revolution is taking root. Children who once watched the world from afar are now joining the global conversation.",
            img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop"
        },
        {
            text: "We believe that talent is universal, but opportunity is not. Digital Pathsala exists to bridge that gap—connecting rural potential with global tools.",
            img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2670&auto=format&fit=crop"
        },
        {
            text: "From preserving ancient seed knowledge to mastering modern AI, we are cultivating a generation that respects its roots while reaching for the sky.",
            img: "/digital_pathshala/WhatsApp Image 2026-01-26 at 21.11.21.jpeg"
        }
    ];

    return (
        <section ref={sectionRef} className="relative h-[300vh] bg-[#050505]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {steps.map((step, idx) => (
                    <img 
                        key={idx}
                        src={step.img} 
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${activeStep === idx ? 'opacity-50' : 'opacity-0'}`}
                        alt="Narrative Background"
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20"></div>
            </div>

            <div className="absolute inset-0 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 min-h-screen">
                <div className="md:col-start-2 md:col-span-10 relative">
                    {steps.map((step, idx) => (
                        <div key={idx} className="h-screen flex items-center justify-center">
                            <p className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold text-white leading-[1.1] tracking-tight drop-shadow-xl text-center">
                                {step.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StickyImageNarrative;

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TripleSHorizontalScroll = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollTween = gsap.to(sectionRef.current, {
            xPercent: -100 * (2 / 3), // Move 2/3 of the width (since 3 items, show 1 at a time roughly, or partial)
            ease: "none",
            scrollTrigger: {
                trigger: triggerRef.current,
                pin: true,
                scrub: 1,
                // Adjust scroll distance based on content width
                end: "+=3000", 
            }
        });
        return () => {
            scrollTween.kill();
        }
    }, []);

    const pillars = [
        {
            id: "01",
            title: "SKILL",
            subtitle: "Future Ready",
            desc: "Bridging the digital divide with AI, Cloud, and practical digital tools for the next generation of rural innovators.",
            img: "/digital_pathshala/WhatsApp Image 2026-01-26 at 21.11.22.jpeg", 
            color: "#4ADE80"
        },
        {
            id: "02",
            title: "SOIL",
            subtitle: "Earth Rooted",
            desc: "A living seed bank identifying and preserving local biodiversity. Connecting technology with ancient agricultural wisdom.",
            img: "/digital_pathshala/WhatsApp Image 2026-01-26 at 21.11.21.jpeg",
            color: "#FCD34D"
        },
        {
            id: "03",
            title: "STORY",
            subtitle: "Voice Amplified",
            desc: "Narrative workshops that give children the confidence to lead, document their heritage, and share their unique stories.",
            img: "/digital_pathshala/WhatsApp Image 2026-01-26 at 21.11.23.jpeg",
            color: "#60A5FA"
        }
    ];

    return (
        <section ref={triggerRef} className="relative h-screen bg-[#111] overflow-hidden">
            <div 
                ref={sectionRef} 
                className="absolute top-0 left-0 h-full flex w-[300vw]" // 300vw for 3 sections
            >
                {pillars.map((item, idx) => (
                    <div key={idx} className="w-screen h-full relative flex items-center justify-center p-6 md:p-24 border-r border-white/5">
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 z-0">
                            <img src={item.img} className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-700" alt={item.title} />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/80 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/50 to-transparent"></div>
                        </div>

                        {/* Content Card */}
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl items-center">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="text-6xl font-poppins font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/5">
                                        {item.id}
                                    </span>
                                    <div className="h-[1px] w-24 bg-white/20"></div>
                                </div>
                                <h2 
                                    className="text-8xl md:text-[10rem] font-poppins font-bold text-white leading-[0.8] tracking-tighter mix-blend-overlay opacity-50 absolute -top-20 -left-20 select-none pointer-events-none"
                                >
                                    {item.title}
                                </h2>
                                <h3 className="text-5xl md:text-7xl font-poppins font-bold text-white relative">
                                    {item.title}
                                    <span className="block text-2xl md:text-3xl font-light text-[#4ADE80] mt-2 tracking-widest uppercase">{item.subtitle}</span>
                                </h3>
                                <p className="text-xl md:text-2xl text-gray-300 font-poppins max-w-xl leading-relaxed border-l-2 border-[#4ADE80] pl-6">
                                    {item.desc}
                                </p>
                            </div>
                            
                            {/* Visual Element / Card */}
                            <div className="hidden md:flex justify-end">
                                <div className="w-[400px] h-[500px] bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 p-2 relative group hover:-translate-y-4 transition-transform duration-500">
                                    <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                                        <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                        
                                        <div className="absolute bottom-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                                            <ArrowRight size={24} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Scroll Progress / Navigation hint */}
            <div className="absolute bottom-12 left-12 z-20 text-white/30 font-poppins font-bold tracking-widest text-sm uppercase">
                Scroll to Explore
            </div>
        </section>
    );
};

export default TripleSHorizontalScroll;

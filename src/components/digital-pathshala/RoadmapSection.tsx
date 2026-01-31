import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RoadmapSection = () => {
    const containerRef = useRef(null);
    const lineRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        // Line Drawing Animation
        gsap.fromTo(lineRef.current, 
            { height: "0%" },
            { 
                height: "100%", 
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1.5,
                }
            }
        );

        // Cards Floating Animation
        const cards = gsap.utils.toArray('.roadmap-card');
        cards.forEach((card: any, i) => {
            gsap.fromTo(card,
                { y: 100, opacity: 0, scale: 0.9 },
                {
                    y: 0, opacity: 1, scale: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            )
        });
    }, []);

    const phases = [
        { 
            year: "2024", 
            title: "Genesis", 
            desc: "Establishment of the first Gold Standard Center in Bankura. Laying the digital foundation.",
            color: "#4ADE80"
        },
        { 
            year: "2025", 
            title: "Expansion", 
            desc: "Scaling to one model center per district. Creating a statewide blueprint for rural education.",
            color: "#60A5FA"
        },
        { 
            year: "2027", 
            title: "Integration", 
            desc: "100+ centers integrated with local schools. Preserving biodiversity through student-led initiatives.",
            color: "#F472B6"
        },
        { 
            year: "2030", 
            title: "Ecosystem", 
            desc: "A fully self-sustaining network of 344 centers, covering every administrative block in West Bengal.",
            color: "#FCD34D"
        }
    ];

    return (
        <section ref={containerRef} className="py-40 bg-[#050505] relative overflow-hidden text-white">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#1A5D1A]/20 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10" ref={triggerRef}>
                <div className="text-center mb-40">
                    <span className="text-[#4ADE80] font-bold tracking-[0.3em] text-sm uppercase border border-[#4ADE80]/30 px-6 py-2 rounded-full inline-block mb-8 hover:bg-[#4ADE80]/10 transition-colors">The Journey</span>
                    <h2 className="text-4xl sm:text-6xl md:text-8xl font-poppins font-extrabold text-white tracking-tighter">
                        Decade of<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ADE80] to-teal-400">Transformation</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* The Living Line Container */}
                    <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-ml-[1px]">
                        {/* The Active Drawing Line */}
                        <div ref={lineRef} className="w-full bg-gradient-to-b from-[#4ADE80] via-teal-400 to-[#4ADE80] shadow-[0_0_20px_rgba(74,222,128,0.5)]"></div>
                    </div>

                    <div className="space-y-32">
                        {phases.map((phase, idx) => (
                            <div key={idx} className={`relative flex flex-col md:flex-row gap-12 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center`}>
                                
                                {/* Timeline Node */}
                                <div className="absolute left-[30px] md:left-1/2 w-4 h-4 -ml-[7px] md:-ml-2 bg-[#050505] border-2 border-[#4ADE80] rounded-full z-20 shadow-[0_0_15px_rgba(74,222,128,0.5)] transform translate-y-2">
                                    <div className="absolute inset-0 bg-[#4ADE80] animate-ping opacity-75 rounded-full"></div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block w-1/2"></div>
                                
                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${idx % 2 === 0 ? 'md:pr-24 md:text-right' : 'md:pl-24 md:text-left'}`}>
                                    <div className="roadmap-card relative">
                                        {/* Large Background Year */}
                                        <div 
                                            className={`absolute -top-20 text-[6rem] md:text-[8rem] font-poppins font-bold text-white/5 select-none leading-none z-0 ${idx % 2 === 0 ? 'right-0' : 'left-0'}`}
                                        >
                                            {phase.year}
                                        </div>

                                        {/* Card Content */}
                                        <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-2xl hover:bg-white/10 transition-colors duration-500 group">
                                            <div 
                                                className={`text-sm font-bold tracking-widest uppercase mb-4 opacity-80 ${idx % 2 === 0 ? 'md:ml-auto' : ''}`} 
                                                style={{ color: phase.color }}
                                            >
                                                Phase 0{idx + 1}
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4 group-hover:text-[#4ADE80] transition-colors">{phase.title}</h3>
                                            <p className="text-lg text-gray-400 font-poppins leading-relaxed font-light">{phase.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;

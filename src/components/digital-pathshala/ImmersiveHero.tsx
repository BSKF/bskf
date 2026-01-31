import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImmersiveHero = () => {
    const containerRef = useRef(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // Initial setup
        gsap.set(imageRef.current, { scale: 1.2 });
        
        // 1. Image Reveal using Clip Path
        tl.fromTo(containerRef.current, 
            { clipPath: "inset(10% 10% 10% 10%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut" }
        )
        // 2. Slow Zoom Out of Image
        .to(imageRef.current, { scale: 1, duration: 2.5 }, "-=1.5")
        
        // 3. Staggered Text Reveal
        .fromTo(".hero-text-reveal", 
            { y: 100, opacity: 0, rotateX: 20 },
            { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.15 }, "-=1.0"
        )
        // 4. Button Fade In
        .fromTo(".hero-btn", 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8 }, "-=0.8"
        );
        
        // Scroll Parallax
        gsap.to(imageRef.current, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            } 
        });
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
                <img 
                    ref={imageRef}
                    src="/digital_pathshala/WhatsApp Image 2026-01-26 at 21.11.07.jpeg" 
                    className="w-full h-full object-cover opacity-60"
                    alt="Digital Pathsala"
                />
                {/* Elegant overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60"></div>
            </div>
            
            <div ref={contentRef} className="relative z-10 text-center max-w-5xl px-6">
                <div className="hero-text-reveal mb-8 inline-block">
                    <div className="flex items-center justify-center gap-4 text-white/80 border border-white/20 px-6 py-2 rounded-full backdrop-blur-sm bg-white/5">
                        <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse"></span>
                        <span className="text-xs font-medium tracking-[0.3em] uppercase font-poppins">Empowering Rural India</span>
                    </div>
                </div>

                <h1 className="hero-text-reveal text-5xl md:text-7xl lg:text-8xl font-poppins font-light text-white leading-[1.1] tracking-tight mb-8">
                    Unite. Act. <br />
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#4ADE80] to-white bg-[length:200%_auto] animate-gradient">Transform.</span>
                </h1>

                <p className="hero-text-reveal text-lg md:text-xl font-poppins text-gray-300 max-w-2xl mx-auto leading-relaxed font-light tracking-wide mb-12 opacity-90">
                    Bridging the digital divide and preserving agricultural heritage in the heart of Bengal.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center h-[60px]">
                    {/* Placeholder for the Sticky Button to launch from */}
                    <div id="hero-donate-placeholder" className="w-[170px] h-[56px] bg-transparent"></div>
                </div>
            </div>
            
            <style>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </section>
    );
};

export default ImmersiveHero;

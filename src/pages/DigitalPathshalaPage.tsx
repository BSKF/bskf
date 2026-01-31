import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check, Play, Heart, Globe, Plus, Instagram, Twitter, Linkedin, Facebook, ArrowUp } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Navbar from "@/components/Navbar";


gsap.registerPlugin(ScrollTrigger);

const DigitalPathshalaPage = () => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            touchMultiplier: 2,
        });
        lenisRef.current = lenis;

        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-foreground selection:bg-[#1A5D1A] selection:text-white">
            <style>{`
                html.lenis { height: auto; }
                .lenis.lenis-smooth { scroll-behavior: auto; }
                .lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
                .lenis.lenis-stopped { overflow: hidden; }
                .lenis.lenis-scrolling iframe { pointer-events: none; }
                
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
            
            
            <Navbar />
            <main className="relative">
                <ImmersiveHero />
                <StickyImageNarrative />
                {/* ImpactStatsSection removed as per request */}
                <TripleSHorizontalScroll />
                <ProgramsShowcase />
                {/* MasonryGallery removed as per request */}
                <RoadmapSection />
                <FAQSection />
                <BudgetSection />
                <FooterSection />
                <StickyDonateButton />

            </main>
        </div>
    );
};

// 1. Immersive Hero with Premium Design & Animations
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

// 2. Sticky Scroll Narrative: Images change as you read
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

// 3. Triple-S: Horizontal Scroll (Awwwards Style)
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

// 4. Masonry Gallery: "Life in the Pathsala"
const MasonryGallery = () => {
    return (
        <section className="py-32 bg-[#F5F5F5]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                     <h2 className="text-5xl md:text-7xl font-poppins font-bold text-[#111] tracking-tight">Moments of <span className="text-[#1A5D1A]">Change</span></h2>
                     <button className="hidden md:flex items-center gap-3 text-gray-500 font-poppins font-semibold hover:text-[#1A5D1A] transition-colors">View Instagram <ArrowRight size={18}/></button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[350px]">
                    <div className="md:col-span-2 row-span-2 rounded-3xl overflow-hidden relative group shadow-lg">
                        <img src="https://images.unsplash.com/photo-1606092195730-5d7b9af1ef4d?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Girl Learning" />
                         <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div className="md:col-span-1 rounded-3xl overflow-hidden relative group shadow-lg">
                        <img src="https://images.unsplash.com/photo-1544367563-12123d83cd3e?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Writing" />
                    </div>
                    <div className="md:col-span-1 cursor-pointer bg-[#1A5D1A] rounded-3xl flex flex-col items-center justify-center text-white p-8 text-center hover:bg-[#154a15] transition-colors shadow-lg group">
                        <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-white/10">
                            <Play size={32} fill="white" />
                        </div>
                        <span className="font-poppins font-bold text-2xl leading-tight">Watch Our<br/>Story</span>
                    </div>
                     <div className="md:col-span-2 rounded-3xl overflow-hidden relative group shadow-lg">
                        <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Classroom" />
                    </div>
                </div>
            </div>
        </section>
    );
};

// 5. Programs/Causes with Card Layout (Interactive Grid)
const ProgramsShowcase = () => {
    const programs = [
        {
            id: "01",
            title: "Sunday Masterclass",
            subtitle: "Mentorship",
            desc: "Weekly online sessions with IIT/NIT mentors guiding students through STEM concepts and career paths.",
            img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800",
        },
        {
            id: "02",
            title: "Seed Library",
            subtitle: "Preservation",
            desc: "A community-led living repository of local biodiversity, cataloging and saving indigenous seeds.",
            img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800",
        },
        {
            id: "03",
            title: "Digital Lab",
            subtitle: "Innovation",
            desc: "Hands-on training in AI, modern agricultural tools, and computer literacy for rural youth.",
            img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
        },
    ];

    return (
        <section className="py-32 px-6 bg-[#0a0a0a] text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
                    <div>
                         <span className="text-[#4ADE80] font-bold tracking-[0.2em] text-sm uppercase border-b-2 border-[#4ADE80] pb-3 inline-block mb-6">Take Action</span>
                        <h2 className="text-5xl md:text-7xl font-poppins font-bold text-white leading-none">
                            Causes That<br/>Inspire
                        </h2>
                    </div>
                    <p className="text-gray-400 font-poppins max-w-sm text-right mt-8 md:mt-0">
                        Choose a program to support and witness the direct impact of your contribution.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 h-[180vh] md:h-[600px]">
                    {programs.map((program, idx) => (
                        <div 
                            key={idx} 
                            className="group relative flex-1 hover:flex-[2.5] transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-3xl overflow-hidden border border-white/10"
                        >
                            {/* Background Image */}
                            <img 
                                src={program.img} 
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                                alt={program.title} 
                            />
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90 group-hover:via-black/20 group-hover:to-black/80 transition-all duration-500"></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                {/* Wrapper to prevent text reflow during width transition */}
                                <div className="w-full min-w-[280px] md:min-w-[360px] h-full flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <span className="text-4xl font-poppins font-bold text-white/20 group-hover:text-white/60 transition-colors">
                                            {program.id}
                                        </span>
                                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                            <ArrowRight className="text-white" size={20} />
                                        </div>
                                    </div>

                                    <div>
                                        <span className="text-[#4ADE80] text-sm font-bold tracking-widest uppercase mb-2 block opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            {program.subtitle}
                                        </span>
                                        <h3 className="text-2xl md:text-4xl font-poppins font-bold text-white mb-4 leading-tight whitespace-normal">
                                            {program.title}
                                        </h3>
                                        <div className="max-h-0 group-hover:max-h-[300px] overflow-hidden transition-[max-height] duration-700 ease-in-out">
                                            <p className="text-gray-300 font-poppins mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                {program.desc}
                                            </p>
                                            <a 
                                                href="https://docs.google.com/forms/d/e/1FAIpQLSc6QO1IkHAAd0bProH7uD6s-BUClFaFzvZUIKGgZzqkiWK--g/viewform"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block w-full text-center bg-[#4ADE80] text-[#0D1B0D] py-4 rounded-xl font-bold hover:bg-white transition-colors transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-500 delay-200"
                                            >
                                                Support This Cause
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// 6. Roadmap: "Living Line" Awwwards Style
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

// 7. FAQ Section (Modern & Minimalist)
const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        { q: "What age group does Digital Pathshala serve?", a: "We primarily serve children aged 10-16 in rural West Bengal communities, focusing on those with limited access to digital resources." },
        { q: "How can I volunteer as a mentor?", a: "IIT/NIT professionals and industry experts can apply through our mentorship program. Sessions are conducted online every Sunday to ensure flexibility." },
        { q: "Where does the funding go?", a: "100% of donations go directly to tech infrastructure, educational materials, and operational costs. We maintain full transparency with our donors." },
        { q: "Can I visit a center?", a: "Absolutely! We encourage donors and supporters to visit our centers in Bankura to see the impact firsthand. Please contact us to schedule a visit." },
    ];

    const toggleFAQ = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className="py-32 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3">
                        <span className="text-[#1A5D1A] font-bold tracking-[0.2em] text-sm uppercase border-b-2 border-[#1A5D1A] pb-3 inline-block mb-6">Support</span>
                        <h2 className="text-5xl font-poppins font-bold text-[#111] leading-[0.95] tracking-tight mb-6">
                            Common<br/>Questions
                        </h2>
                        <p className="text-gray-500 font-poppins text-lg">Everything you need to know about the initiative.</p>
                    </div>
                    
                    <div className="md:w-2/3">
                        <div className="space-y-0">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="border-b border-gray-200">
                                    <button 
                                        onClick={() => toggleFAQ(idx)}
                                        className="w-full py-8 text-left group flex items-start justify-between gap-4 focus:outline-none"
                                    >
                                        <h3 className={`text-2xl md:text-3xl font-poppins font-semibold transition-colors duration-300 ${openIndex === idx ? 'text-[#1A5D1A]' : 'text-[#111] group-hover:text-[#1A5D1A]'}`}>
                                            {faq.q}
                                        </h3>
                                        <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300 ${openIndex === idx ? 'bg-[#1A5D1A] border-[#1A5D1A] rotate-45' : 'group-hover:border-[#1A5D1A]'}`}>
                                            <Plus size={18} className={`transition-colors duration-300 ${openIndex === idx ? 'text-white' : 'text-gray-400 group-hover:text-[#1A5D1A]'}`} />
                                        </div>
                                    </button>
                                    <div 
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-40 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-gray-600 font-poppins text-lg leading-relaxed pr-12">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 8. Budget: Premium "Financial Clarity" Theme
const BudgetSection = () => {
    const sectionRef = useRef(null);
    const chartRef = useRef(null);
    
    // Animate numbers on scroll
    useEffect(() => {
        const counters = gsap.utils.toArray('.budget-counter');
        counters.forEach((counter: any) => {
            const target = parseInt(counter.innerText);
            gsap.fromTo(counter, 
                { innerText: 0 },
                {
                    innerText: target,
                    duration: 2,
                    snap: { innerText: 1 },
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );
        });

        gsap.fromTo(chartRef.current,
            { scale: 0.8, opacity: 0, rotate: -45 },
            { 
                scale: 1, opacity: 1, rotate: 0, 
                duration: 1.5, ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            }
        );
    }, []);

    const data = [
        { name: "Tech Hub", value: 36, color: "#4ADE80", desc: "Computer Labs & AI Tools" }, 
        { name: "Infrastructure", value: 20, color: "#22c55e", desc: "Building & Maintenance" },
        { name: "Operations", value: 20, color: "#16a34a", desc: "Staff & Logistics" },
        { name: "Education", value: 14, color: "#86efac", desc: "Teacher Training & Books" }, 
        { name: "Community", value: 6, color: "#15803d", desc: "Outreach Programs" },
        { name: "Seeds", value: 4, color: "#bbf7d0", desc: "Seed Bank Initiative" },
    ];

    return (
        <section ref={sectionRef} className="py-32 px-6 bg-[#020a05] text-white relative overflow-hidden">
             {/* Decorative Background */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#1A5D1A]/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#4ADE80]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    
                    {/* Left Column: Text & Chart */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <span className="text-[#4ADE80] font-bold tracking-[0.2em] text-sm uppercase border-b border-[#4ADE80] pb-2 inline-block mb-6">Transparency</span>
                        <h2 className="text-5xl md:text-7xl font-poppins font-bold text-white mb-6 leading-tight">
                            Every Rupee<br/> <span className="text-gray-500">Accounted For.</span>
                        </h2>
                        <p className="text-xl text-gray-400 font-poppins mb-12 max-w-lg font-light">
                            Direct impact. Zero fluff. Our pilot budget of ₹50,000 is meticulously allocated to drive real change.
                        </p>

                        <div ref={chartRef} className="h-[400px] relative flex items-center justify-center">
                             {/* Center text overlay */}
                            <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none z-20">
                                <span className="text-6xl font-poppins font-bold text-white tracking-tighter">100%</span>
                                <span className="text-sm font-bold tracking-widest uppercase text-[#4ADE80]">Impact</span>
                            </div>
                            
                            {/* Glowing Ring */}
                            <div className="absolute inset-0 rounded-full border border-white/5 scale-90"></div>
                            <div className="absolute inset-0 rounded-full border border-white/5 scale-75"></div>

                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie 
                                        data={data} 
                                        cx="50%" 
                                        cy="50%" 
                                        innerRadius={100} 
                                        outerRadius={140} 
                                        paddingAngle={5} 
                                        dataKey="value" 
                                        stroke="none"
                                        cornerRadius={8}
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} className="stroke-black stroke-2" />
                                        ))}
                                    </Pie>
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '12px 20px' }} 
                                        itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                                        cursor={false}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Right Column: Cards */}
                    <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {data.map((item, idx) => (
                            <div key={item.name} className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/5 hover:border-[#4ADE80]/30 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]" style={{ color: item.color, backgroundColor: item.color }}></div>
                                    <span className="text-3xl font-bold font-poppins text-white budget-counter">{item.value}%</span>
                                </div>
                                <h4 className="text-lg font-bold text-white font-poppins mb-1">{item.name}</h4>
                                <p className="text-xs text-gray-400 font-poppins uppercase tracking-wider">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};



// 9. Designer Footer
const FooterSection = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-white pt-24 pb-12 px-6 border-t border-black/5 relative overflow-hidden text-[#0D1B0D]">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Massive CTA */}
                <div className="mb-32 text-center md:text-left">
                    <h2 className="text-[12vw] leading-none font-poppins font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#0D1B0D] to-gray-300 tracking-tighter hover:tracking-wide transition-all duration-700 cursor-default select-none">
                        JOIN US
                    </h2>
                </div>

                <div className="grid md:grid-cols-4 gap-12 md:gap-24 mb-24">
                    <div className="md:col-span-2 space-y-6">
                        <h3 className="text-2xl font-poppins font-bold text-[#0D1B0D]">Digital Pathsala</h3>
                        <p className="text-gray-600 font-poppins max-w-sm leading-relaxed">
                            Empowering rural Bengal through digital literacy, sustainable agriculture, and community leadership.
                        </p>
                        <div className="flex gap-4 pt-4">
                        <div className="flex gap-4 pt-4">
                            {[
                                { Icon: Instagram, url: "https://www.instagram.com/bskf.official?igsh=MXBnMjZmc2Ztc21rcQ==" },
                                { Icon: Twitter, url: "https://twitter.com/sustainable_ag" },
                                { Icon: Linkedin, url: "https://www.linkedin.com/company/susthayi-krishi-foundation/" },
                                { Icon: Facebook, url: "https://www.facebook.com/share/1CzQowPX4N/" }
                            ].map(({ Icon, url }, i) => (
                                <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#4ADE80] hover:text-black hover:scale-110 transition-all duration-300 group">
                                    <Icon size={20} className="group-hover:rotate-12 transition-transform" />
                                </a>
                            ))}
                        </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-bold tracking-widest uppercase text-gray-500 font-poppins">Quick Links</h4>
                        <ul className="space-y-4 font-poppins">
                            {['Our Story', 'Impact', 'Programs', 'Get Involved'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-[#0D1B0D] hover:text-[#4ADE80] transition-colors flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-4 h-[1px] bg-[#4ADE80] transition-all duration-300"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-bold tracking-widest uppercase text-gray-500 font-poppins">Contact</h4>
                        <ul className="space-y-4 font-poppins text-gray-600">
                            <li>hello@digitalpathsala.org</li>
                            <li>+91 98765 43210</li>
                            <li>Bankura, West Bengal, India</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5 gap-4">
                    <p className="text-gray-500 font-poppins text-sm">© 2026 Digital Pathsala. All rights reserved.</p>
                    
                    <button 
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-[#0D1B0D] font-poppins text-sm uppercase tracking-widest hover:text-[#4ADE80] transition-colors"
                    >
                        Back to Top
                        <span className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center group-hover:border-[#4ADE80] group-hover:-translate-y-1 transition-all">
                            <ArrowUp size={14} />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
};





// 10. Sticky Donate Button with Real Layout Animation
const StickyDonateButton = () => {
    const buttonRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const button = buttonRef.current;
        const placeholder = document.getElementById("hero-donate-placeholder");
        
        if (!button || !placeholder) return;

        // Function to calculate position relative to viewport
        const updateAnimation = () => {
            const rect = placeholder.getBoundingClientRect();
            
            // Calculate starting 'bottom' and 'right' values based on the placeholder's current position
            // This is robust because we are at scroll 0 (or close to it) when page loads.
            // If user refreshes in middle, we might need to adjust, but let's assume top start for now or use ScrollTrigger.refresh()
            
            // To prevent shrinking/resizing, we won't animate width/height.
            // We'll calculate the center of the placeholder and position the button there based on its own dimensions.
            // Actually, simpler: Just set the position (top/left) and let width/height be auto/constant.
            
            // However, we rely on 'bottom' and 'right' for the animation.
            // Start State:
            const startBottom = window.innerHeight - rect.bottom;
            const startRight = window.innerWidth - rect.right;
            
            // Adjust start position to align the visual center of the button with the placeholder center
            // IF the button size differs from placeholder.
            // But let's assume standard sizing for now. 
            // We will just animate properties that change (position, color, radius).
            
            gsap.fromTo(button, 
                {
                    bottom: startBottom,
                    right: startRight,
                    // width: startWidth, // REMOVED to prevent forced sizing
                    // height: startHeight, // REMOVED
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    borderRadius: "99px",
                    padding: "1rem 2rem", // Consistent padding
                    x: 0,
                    y: 0,
                    scale: 1,
                    top: "auto",
                    left: "auto"
                },
                {
                    bottom: "20px", // Mobile: 20px
                    right: "20px",  // Mobile: 20px
                    // width: "auto", // REMOVED
                    // height: "auto", // REMOVED
                    padding: "1rem 2rem",
                    backgroundColor: "#4ADE80",
                    color: "#0D1B0D",
                    borderRadius: "99px",
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: "body",
                        start: "top top",
                        end: "500px top",
                        scrub: 1,
                        invalidateOnRefresh: true, 
                    }
                }
            );
        };
        
        // Slight delay to ensure layout is settled
        setTimeout(updateAnimation, 100);
        
        window.addEventListener('resize', () => setTimeout(updateAnimation, 100)); // Debounced resize fix
        
        return () => {
             // Cleanup if needed
        };
    }, []);

    return (
        <a 
            ref={buttonRef}
            href="https://docs.google.com/forms/d/e/1FAIpQLSc6QO1IkHAAd0bProH7uD6s-BUClFaFzvZUIKGgZzqkiWK--g/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-50 font-poppins font-bold text-sm uppercase tracking-widest shadow-2xl flex items-center justify-center gap-2 group whitespace-nowrap"
            // Start transparent to avoid jumping before GSAP takes over
            style={{ opacity: 1 }} 
        >
            <span className="relative z-10">Donate Now</span>

            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
        </a>
    );
};



export default DigitalPathshalaPage;


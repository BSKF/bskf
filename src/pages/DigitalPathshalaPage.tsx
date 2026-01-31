import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";

// Extracted Components
import ImmersiveHero from "@/components/digital-pathshala/ImmersiveHero";
import StickyImageNarrative from "@/components/digital-pathshala/StickyImageNarrative";
import TripleSHorizontalScroll from "@/components/digital-pathshala/TripleSHorizontalScroll";
import ProgramsShowcase from "@/components/digital-pathshala/ProgramsShowcase";
import RoadmapSection from "@/components/digital-pathshala/RoadmapSection";
import FAQSection from "@/components/digital-pathshala/FAQSection";
import BudgetSection from "@/components/digital-pathshala/BudgetSection";
import FooterSection from "@/components/digital-pathshala/FooterSection";
import StickyDonateButton from "@/components/digital-pathshala/StickyDonateButton";
import TestimonialSection from "@/components/digital-pathshala/TestimonialSection";

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
                <TripleSHorizontalScroll />
                <ProgramsShowcase />
                <RoadmapSection />
                <FAQSection />
                <TestimonialSection />
                <BudgetSection />
                <FooterSection />
                <StickyDonateButton />
            </main>
        </div>
    );
};

export default DigitalPathshalaPage;

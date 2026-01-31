import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

export default StickyDonateButton;

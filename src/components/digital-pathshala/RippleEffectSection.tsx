import { useEffect, useRef } from 'react';
import anime from 'animejs';

const RippleEffectSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    anime({
                        targets: '.ripple-animate',
                        translateY: [40, 0],
                        opacity: [0, 1],
                        delay: anime.stagger(200),
                        duration: 800,
                        easing: 'easeOutQuad',
                    });
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 bg-[#020a05] text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="ripple-animate opacity-0">
                        <span className="text-[#4ADE80] font-bold tracking-[0.2em] text-sm uppercase border-b border-[#4ADE80] pb-2 inline-block mb-6">Ownership</span>
                        <h2 className="text-4xl md:text-5xl font-poppins font-bold leading-tight mb-6">
                            Beyond a Nominal Fee <br/> <span className="text-gray-500 block mt-2 md:mt-4">(₹5/Day)</span>
                        </h2>
                        <p className="text-gray-400 font-light mb-8 leading-relaxed">
                            A small contribution helps build a sense of ownership and responsibility among children and their families. When people invest, they are more likely to value and actively engage with the opportunity.
                        </p>
                        <p className="text-gray-400 font-light leading-relaxed">
                            These collected funds support essential operational costs such as electricity and internet services, enabling each center to operate independently and remain sustainable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 ripple-animate opacity-0">
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4ADE80]/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
                            <h4 className="text-2xl font-bold font-poppins mb-2 relative z-10">Encouraging Responsibility</h4>
                            <p className="text-sm text-gray-400 relative z-10">Building a culture of value and commitment.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4ADE80]/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
                            <h4 className="text-2xl font-bold font-poppins mb-2 relative z-10">Supporting Operations</h4>
                            <p className="text-sm text-gray-400 relative z-10">Sustaining electricity, internet, and daily functions.</p>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-16 ripple-animate opacity-0">
                    <span className="text-[#4ADE80] font-bold tracking-[0.2em] text-sm uppercase border-b border-[#4ADE80] pb-2 inline-block mb-4">The Cycle</span>
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">Fostering a Self-Sustaining Community</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light">
                        As students complete their education up to class 12, they return as junior mentors, creating a continuous cycle of learning, growth, and contribution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4ADE80]/30 to-transparent -translate-y-1/2 z-0"></div>
                    
                    <div className="bg-[#020a05] border border-white/10 p-8 rounded-full aspect-square flex flex-col items-center justify-center relative z-10 ripple-animate opacity-0 hover:border-[#4ADE80]/50 transition-colors">
                        <span className="text-[#4ADE80] text-xl font-bold mb-2">Stage 1</span>
                        <h4 className="text-2xl font-bold font-poppins mb-2">Learner</h4>
                        <p className="text-xs text-gray-400">Class 4-8: Building foundational knowledge.</p>
                    </div>

                    <div className="bg-[#020a05] border border-white/10 p-8 rounded-full aspect-square flex flex-col items-center justify-center relative z-10 ripple-animate opacity-0 hover:border-[#4ADE80]/50 transition-colors">
                        <span className="text-[#4ADE80] text-xl font-bold mb-2">Stage 2</span>
                        <h4 className="text-2xl font-bold font-poppins mb-2">Graduate</h4>
                        <p className="text-xs text-gray-400">Class 12: Equipped with academic competence.</p>
                    </div>

                    <div className="bg-[#020a05] border border-[#4ADE80]/30 p-8 rounded-full aspect-square flex flex-col items-center justify-center relative z-10 shadow-[0_0_30px_rgba(74,222,128,0.1)] ripple-animate opacity-0 hover:border-[#4ADE80] transition-colors">
                        <span className="text-[#4ADE80] text-xl font-bold mb-2">Stage 3</span>
                        <h4 className="text-2xl font-bold font-poppins mb-2">Mentor</h4>
                        <p className="text-xs text-gray-400">Giving Back: Guiding the next generation.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RippleEffectSection;

import { useEffect, useRef } from 'react';
import anime from 'animejs';

const ImpactAchievedSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    anime({
                        targets: '.impact-item',
                        translateY: [30, 0],
                        opacity: [0, 1],
                        delay: anime.stagger(150),
                        duration: 800,
                        easing: 'easeOutSine',
                    });
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="impact" ref={sectionRef} className="py-24 px-6 bg-[#010502] text-white relative border-y border-white/5 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1A5D1A]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 impact-item opacity-0">
                    <span className="text-[#4ADE80] font-bold tracking-[0.2em] text-sm uppercase border-b border-[#4ADE80] pb-2 inline-block mb-4">Milestones</span>
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white leading-tight mb-4">
                        Impact Achieved <span className="text-[#4ADE80]">So Far</span>
                    </h2>
                    <p className="text-gray-400 font-light">January 2026 – June 2026 (First 5 Months)</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Key Progress Indicators */}
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 impact-item opacity-0">
                        <h3 className="text-2xl font-bold font-poppins mb-6 text-[#4ADE80]">Key Progress Indicators</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xl font-bold mb-2">13 Structured Sessions</h4>
                                <ul className="list-disc pl-5 text-gray-400 font-light space-y-1">
                                    <li>1 Orientation Session</li>
                                    <li>1 Assessment/Examination Session</li>
                                    <li>1 Special Climate Awareness Session</li>
                                    <li>10 Regular Digital Literacy Sessions (every Sunday)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">Two Student Batches</h4>
                                <ul className="list-disc pl-5 text-gray-400 font-light space-y-1">
                                    <li>Batch 01 (Classes 4–8): ~25 students per session</li>
                                    <li>Batch 02 (Classes 9–12): ~5 students per session</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Learning Outcomes */}
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 impact-item opacity-0">
                        <h3 className="text-2xl font-bold font-poppins mb-6 text-[#4ADE80]">Learning Outcomes</h3>
                        <ul className="space-y-4 text-gray-300 font-light">
                            <li className="flex items-start gap-3">
                                <span className="text-[#4ADE80] mt-1">✓</span>
                                <span>Identification and understanding of computer hardware.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#4ADE80] mt-1">✓</span>
                                <span>Basic computer operations and responsible use.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#4ADE80] mt-1">✓</span>
                                <span>Creation of professional documents (Microsoft Word, formatting).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#4ADE80] mt-1">✓</span>
                                <span>Essay writing and content drafting using digital tools.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#4ADE80] mt-1">✓</span>
                                <span>Improved confidence in using computers independently.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 bg-gradient-to-r from-[#1A5D1A]/20 to-transparent p-8 rounded-2xl border-l-4 border-[#4ADE80] impact-item opacity-0">
                    <h3 className="text-2xl font-bold font-poppins mb-4">Community & Awareness</h3>
                    <p className="text-gray-300 font-light leading-relaxed mb-4">
                        Successfully introduced climate awareness education through a dedicated environmental session and created a safe, inclusive learning environment for rural students. We have seen increased student interest in technology and future educational opportunities.
                    </p>
                    <p className="text-sm text-[#4ADE80] font-medium uppercase tracking-wider">
                        Building the Foundation for Long-Term Impact
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ImpactAchievedSection;

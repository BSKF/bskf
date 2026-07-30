import { useEffect, useRef } from 'react';
import anime from 'animejs';

const FundingRoundsSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    anime({
                        targets: '.funding-item',
                        translateY: [40, 0],
                        opacity: [0, 1],
                        delay: anime.stagger(150),
                        duration: 800,
                        easing: 'easeOutExpo',
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

    const round2Data = [
        { category: 'Digital Infrastructure Expansion', purpose: 'Refurbished desktops (i5, 8GB RAM)', amount: '₹20,500' },
        { category: 'Smart Classroom Setup', purpose: 'Projector, screen, mounting accessories', amount: '₹16,000' },
        { category: 'Offline Mentor Support', purpose: 'Stipend for local mentor for next 6 months', amount: '₹12,000' },
        { category: 'Basic Infrastructure', purpose: 'Furniture, tables, seating, storage', amount: '₹9,500' },
        { category: 'Operational Buffer', purpose: 'Emergency reserve & maintenance', amount: '₹7,000' },
        { category: 'Internet & Electricity', purpose: 'Internet recharge, electricity, printing', amount: '₹5,000' },
        { category: 'Learning Resources', purpose: 'Books, worksheets, activity kits', amount: '₹5,000' },
        { category: 'Community Outreach', purpose: 'Parent meetings, awareness campaigns', amount: '₹5,000' },
    ];

    return (
        <section ref={sectionRef} className="py-24 px-6 bg-[#020a05] text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 funding-item opacity-0">
                    <span className="text-[#4ADE80] font-bold tracking-[0.2em] text-sm uppercase border-b border-[#4ADE80] pb-2 inline-block mb-4">Financials</span>
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white leading-tight mb-4">
                        Fund Raising <span className="text-[#4ADE80]">Rounds</span>
                    </h2>
                    <p className="text-gray-400 font-light max-w-2xl mx-auto">
                        This initiative is designed to maximize impact while maintaining cost efficiency. Every contribution is strategically allocated.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Round 01 */}
                    <div className="lg:col-span-1 bg-white/5 p-8 rounded-2xl border border-white/10 funding-item opacity-0 h-fit">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-2xl font-bold font-poppins text-white">Round 01</h3>
                            <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">Completed</span>
                        </div>
                        <p className="text-4xl font-bold text-[#4ADE80] mb-2">₹23,300</p>
                        <p className="text-sm text-gray-400 mb-8 font-light">Funds raised to launch the pilot project.</p>
                        
                        <div className="space-y-4">
                            <div className="border-b border-white/5 pb-4">
                                <h4 className="font-bold text-gray-200 mb-1">Digital Infrastructure</h4>
                                <p className="text-sm text-gray-400 font-light flex justify-between">
                                    <span>Refurbished desktops/laptops</span>
                                    <span className="text-white font-medium">₹20,500</span>
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-200 mb-1">Operational Buffer</h4>
                                <p className="text-sm text-gray-400 font-light flex justify-between">
                                    <span>Internet, electricity, reserves</span>
                                    <span className="text-white font-medium">₹2,800</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Round 02 */}
                    <div className="lg:col-span-2 bg-[#010502] p-8 rounded-2xl border border-[#4ADE80]/30 relative overflow-hidden funding-item opacity-0">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ADE80]/5 rounded-bl-full pointer-events-none"></div>
                        
                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <div>
                                <h3 className="text-2xl font-bold font-poppins text-white mb-1">Round 02</h3>
                                <p className="text-sm text-[#4ADE80] uppercase tracking-wider font-bold">Funding Requirement</p>
                            </div>
                            <p className="text-4xl font-bold text-white">₹80,000</p>
                        </div>
                        
                        <p className="text-gray-400 font-light mb-8 relative z-10 max-w-xl">
                            To sustain and scale the project for the next 7 months, strengthening infrastructure, supporting local mentors, and expanding quality learning opportunities.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                            {round2Data.map((item, idx) => (
                                <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-[#4ADE80]/30 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-sm text-white pr-4">{item.category}</h4>
                                        <span className="text-[#4ADE80] font-bold text-sm whitespace-nowrap">{item.amount}</span>
                                    </div>
                                    <p className="text-xs text-gray-400 font-light">{item.purpose}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FundingRoundsSection;

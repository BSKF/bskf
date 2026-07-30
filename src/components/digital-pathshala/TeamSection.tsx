import { useEffect, useRef } from 'react';
import anime from 'animejs';

const TeamSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    anime({
                        targets: '.team-card',
                        translateY: [30, 0],
                        scale: [0.95, 1],
                        opacity: [0, 1],
                        delay: anime.stagger(100),
                        duration: 800,
                        easing: 'easeOutBack',
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

    const team = [
        { name: 'Anirban Das', desig: 'President', role: 'Strategic leadership, governance supervision' },
        { name: 'Sumit Tewari', desig: 'Secretary', role: 'Administrative oversight, project coordination' },
        { name: 'Lakshman Chandra Tewari', desig: 'Treasurer', role: 'Financial management, compliance' },
        { name: 'Swagata Subuddhi', desig: 'Asst. Secretary, MD', role: 'Project management, partnerships' },
        { name: 'Goutam Mandi', desig: 'Vice President, Field Co.', role: 'Field operations, community engagement' },
        { name: 'Ghurni Bhattacharya', desig: 'Project Advisor', role: 'Policy guidance, program design' },
        { name: 'Saurabh Jain', desig: 'Project Advisor', role: 'Strategic advisory support' },
        { name: 'Kamini Chouhan', desig: 'Project Officer', role: 'Day-to-day project administration' },
        { name: 'Poushali Das', desig: 'Project Mentor', role: 'Student mentoring and educational support' },
        { name: 'Kaushiki Halder', desig: 'Project Mentor', role: 'Student mentoring and educational support' },
        { name: 'Kosanam Jerusha', desig: 'Project HR & Ops Coordinator', role: 'Day-to-day project administration and operational coordination' },
        { name: 'Arpan Dhara', desig: 'Project Technical Officer', role: 'Technical Support' },
        { name: 'Snigdha S Srinivas', desig: 'Project Technical Officer', role: 'Technical Support' },
        { name: 'Anurag Gupta', desig: 'Project Outreach Associate', role: 'Strategic Outreach Associate' },
    ];

    return (
        <section ref={sectionRef} className="py-24 px-6 bg-[#010502] text-white relative border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#4ADE80] font-bold tracking-[0.2em] text-sm uppercase border-b border-[#4ADE80] pb-2 inline-block mb-4">Our Team</span>
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white leading-tight">
                        The People Behind <br/> <span className="text-[#4ADE80]">The Vision</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {team.map((member, idx) => (
                        <div key={idx} className="team-card opacity-0 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-[#4ADE80]/50 transition-all duration-300">
                            <h4 className="text-lg font-bold font-poppins text-white mb-1">{member.name}</h4>
                            <p className="text-[#4ADE80] text-sm font-medium mb-3">{member.desig}</p>
                            <p className="text-gray-400 text-xs font-light leading-relaxed">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;

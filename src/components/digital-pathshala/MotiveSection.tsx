import { useEffect, useRef } from 'react';
import anime from 'animejs';

const MotiveSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    anime({
                        targets: '.motive-item',
                        translateY: [50, 0],
                        opacity: [0, 1],
                        delay: anime.stagger(150),
                        duration: 800,
                        easing: 'easeOutExpo',
                    });
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const motives = [
        { title: 'Digital Literacy', desc: 'To spread digital literacy among rural and underprivileged students.' },
        { title: 'SDG 4 (Quality Education)', desc: 'Teaching basic computer skills, English communication, and providing career guidance mentorship.' },
        { title: 'Critical Thinking', desc: 'Developing creativity, confidence, and critical thinking through engaging activities.' },
        { title: 'Cyber Safety', desc: 'Preparing students for the digital future with online responsibility and security awareness.' },
        { title: 'SDG 3 (Good Health and Wellbeing)', desc: 'Conducting monthly sessions on menstrual health, preventive healthcare, and first aid.' },
        { title: 'SDG 5 (Gender Equality)', desc: 'Promoting gender equality and women’s empowerment through education.' },
        { title: 'SDG 2, 12, 13, 15', desc: 'Biodiversity conservation, climate action, sustainable food-growing, and eco-lifestyles.' },
    ];

    return (
        <section id="story" ref={sectionRef} className="py-24 px-6 bg-[#020a05] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A5D1A]/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[#4ADE80] font-bold tracking-[0.2em] text-sm uppercase border-b border-[#4ADE80] pb-2 inline-block mb-4 motive-item opacity-0">Our Core Motive</span>
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white leading-tight motive-item opacity-0">
                        Empowering Rural Students for the <span className="text-[#4ADE80]">Digital Future</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {motives.map((motive, idx) => (
                        <div key={idx} className="motive-item opacity-0 bg-white/5 border border-white/10 hover:border-[#4ADE80]/40 p-8 rounded-2xl transition-all duration-300 backdrop-blur-sm group">
                            <h3 className="text-xl font-bold font-poppins mb-3 group-hover:text-[#4ADE80] transition-colors">{motive.title}</h3>
                            <p className="text-gray-400 font-light leading-relaxed">{motive.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MotiveSection;

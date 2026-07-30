import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TestimonialSection = () => {
    const sectionRef = useRef(null);
    const marqueeRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        // Infinite Marquee Animation for Text
        const textMarquee = marqueeRef.current;
        const textAnim = gsap.to(textMarquee, {
            xPercent: -50,
            ease: "none",
            duration: 20,
            repeat: -1,
        });

        // Infinite Marquee Animation for Cards
        const cardMarquee = cardsRef.current;
        const cardAnim = gsap.to(cardMarquee, {
            xPercent: -50,
            ease: "none",
            duration: 40, // Slower speed for reading
            repeat: -1,
        });

        return () => {
            textAnim.kill();
            cardAnim.kill();
        };
    }, []);

    const testimonials = [
        {
            text: "Digital Pathshala is creating a space where learning goes beyond textbooks. It encourages curiosity, confidence, and critical thinking while helping students stay connected to their roots and community.",
            author: "Poushali",
            role: "Mentor"
        },
        {
            text: "What inspires me most about Digital Pathshala is its commitment to making quality learning accessible and meaningful. The students are not just gaining knowledge—they are discovering their potential.",
            author: "Kaushiki",
            role: "Mentor"
        },
        {
            text: "Digital Pathshala is a thoughtful initiative that bridges educational gaps while nurturing leadership, communication, and community values. It has the potential to create lasting impact in rural and tribal regions.",
            author: "Ghurni Bhattacharya",
            role: "Advisor"
        },
        {
            text: "Digital Pathshala has helped me become more confident in expressing my ideas and speaking in front of others. The classes are engaging, and I have learned many things that are not taught in school.",
            author: "Deb",
            role: "Class XI Student"
        },
        {
            text: "I enjoy coming to Digital Pathshala because learning here is fun. I love the activities, stories, and the support I get from my teachers and mentors.",
            author: "Suvomay Hembram",
            role: "Class II Student"
        }
    ];

    return (
        <section ref={sectionRef} className="py-32 bg-[#050505] relative overflow-hidden text-white border-t border-white/5">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            {/* Marquee Header */}
            <div className="relative z-10 mb-24 overflow-hidden py-10">
                <div ref={marqueeRef} className="flex whitespace-nowrap text-[8vw] font-poppins font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-white/20 via-white/40 to-white/20 select-none">
                    {/* Set 1 */}
                    <div className="flex shrink-0">
                        <span className="mr-8">VOICES OF IMPACT</span>
                        <span className="text-[#4ADE80] mr-8">●</span>
                        <span className="mr-8">STORIES OF CHANGE</span>
                        <span className="text-[#4ADE80] mr-8">●</span>
                    </div>
                    {/* Set 2 (Duplicate) */}
                    <div className="flex shrink-0">
                        <span className="mr-8">VOICES OF IMPACT</span>
                        <span className="text-[#4ADE80] mr-8">●</span>
                        <span className="mr-8">STORIES OF CHANGE</span>
                        <span className="text-[#4ADE80] mr-8">●</span>
                    </div>
                </div>
            </div>

            {/* Testimonials Horizontal Scroll container */}
            <div className="overflow-hidden w-full">
                <div ref={cardsRef} className="flex gap-8 w-fit px-6">
                    {/* Set 1 */}
                    {testimonials.map((item, idx) => (
                        <div 
                            key={`t1-${idx}`} 
                            className="testimonial-card shrink-0 w-[350px] md:w-[450px] group relative p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-[#4ADE80]/50 transition-colors duration-500 mt-6 flex flex-col"
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-6 left-8 bg-[#050505] p-2 rounded-full border border-white/10 group-hover:border-[#4ADE80] transition-colors">
                                <div className="bg-[#4ADE80] rounded-full p-3 text-black">
                                    <Quote size={20} fill="currentColor" />
                                </div>
                            </div>

                            <p className="text-xl text-gray-300 font-poppins font-light leading-relaxed mb-8 pt-4">
                                "{item.text}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div>
                                    <h4 className="font-poppins font-bold text-white text-lg">{item.author}</h4>
                                    <p className="text-sm text-[#4ADE80] font-poppins tracking-wide uppercase">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Set 2 (Duplicate for Loop) */}
                    {testimonials.map((item, idx) => (
                        <div 
                            key={`t2-${idx}`} 
                            className="testimonial-card shrink-0 w-[350px] md:w-[450px] group relative p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-[#4ADE80]/50 transition-colors duration-500 mt-6 flex flex-col"
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-6 left-8 bg-[#050505] p-2 rounded-full border border-white/10 group-hover:border-[#4ADE80] transition-colors">
                                <div className="bg-[#4ADE80] rounded-full p-3 text-black">
                                    <Quote size={20} fill="currentColor" />
                                </div>
                            </div>

                            <p className="text-xl text-gray-300 font-poppins font-light leading-relaxed mb-8 pt-4">
                                "{item.text}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div>
                                    <h4 className="font-poppins font-bold text-white text-lg">{item.author}</h4>
                                    <p className="text-sm text-[#4ADE80] font-poppins tracking-wide uppercase">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </section>
    );
};

export default TestimonialSection;

import { ArrowRight } from "lucide-react";

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

export default ProgramsShowcase;

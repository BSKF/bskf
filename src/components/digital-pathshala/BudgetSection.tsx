import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

gsap.registerPlugin(ScrollTrigger);

const BudgetSection = () => {
    const sectionRef = useRef(null);
    const chartRef = useRef(null);
    
    // Animate numbers on scroll
    useEffect(() => {
        const counters = gsap.utils.toArray('.budget-counter');
        counters.forEach((counter: HTMLElement) => {
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
        { name: "Digital Infrastructure", value: 26, color: "#4ADE80", desc: "Refurbished Desktops/Laptops" }, 
        { name: "Smart Classroom", value: 20, color: "#22c55e", desc: "Projector & Accessories" },
        { name: "Mentor Support", value: 15, color: "#16a34a", desc: "Local Mentor Stipend" },
        { name: "Basic Infrastructure", value: 12, color: "#86efac", desc: "Furniture & Seating" }, 
        { name: "Buffer & Emergency", value: 9, color: "#15803d", desc: "Unforeseen Expenses" },
        { name: "Operations", value: 6, color: "#bbf7d0", desc: "Internet & Electricity" },
        { name: "Learning Resources", value: 6, color: "#166534", desc: "Books & Activity Kits" },
        { name: "Community Outreach", value: 6, color: "#14532d", desc: "Awareness & Events" },
    ];

    return (
        <section id="get-involved" ref={sectionRef} className="py-32 px-6 bg-[#020a05] text-white relative overflow-hidden">
             {/* Decorative Background */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#1A5D1A]/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#4ADE80]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    
                    {/* Left Column: Text & Chart */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                            <span className="text-[#4ADE80] font-bold tracking-[0.2em] text-sm uppercase border-b border-[#4ADE80] pb-2 inline-block">Transparency</span>
                            <span className="bg-red-500/20 text-red-500 border border-red-500/50 text-xs font-bold px-3 py-1 rounded-full animate-pulse flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                ROUND 2 LIVE
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-poppins font-bold text-white mb-6 leading-tight">
                            Every Rupee<br/> <span className="text-gray-500">Accounted For.</span>
                        </h2>
                        <p className="text-xl text-gray-400 font-poppins mb-12 max-w-lg font-light">
                            Direct impact. Zero fluff. Our Round 2 budget of ₹80,000 is meticulously allocated to drive real change.
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

export default BudgetSection;

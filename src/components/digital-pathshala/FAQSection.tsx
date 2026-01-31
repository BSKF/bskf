import { useState } from "react";
import { Plus } from "lucide-react";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        { q: "What age group does Digital Pathshala serve?", a: "We primarily serve children aged 10-16 in rural West Bengal communities, focusing on those with limited access to digital resources." },
        { q: "How can I volunteer as a mentor?", a: "IIT/NIT professionals and industry experts can apply through our mentorship program. Sessions are conducted online every Sunday to ensure flexibility." },
        { q: "Where does the funding go?", a: "100% of donations go directly to tech infrastructure, educational materials, and operational costs. We maintain full transparency with our donors." },
        { q: "Can I visit a center?", a: "Absolutely! We encourage donors and supporters to visit our centers in Bankura to see the impact firsthand. Please contact us to schedule a visit." },
    ];

    const toggleFAQ = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className="py-32 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3">
                        <span className="text-[#1A5D1A] font-bold tracking-[0.2em] text-sm uppercase border-b-2 border-[#1A5D1A] pb-3 inline-block mb-6">Support</span>
                        <h2 className="text-5xl font-poppins font-bold text-[#111] leading-[0.95] tracking-tight mb-6">
                            Common<br/>Questions
                        </h2>
                        <p className="text-gray-500 font-poppins text-lg">Everything you need to know about the initiative.</p>
                    </div>
                    
                    <div className="md:w-2/3">
                        <div className="space-y-0">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="border-b border-gray-200">
                                    <button 
                                        onClick={() => toggleFAQ(idx)}
                                        className="w-full py-8 text-left group flex items-start justify-between gap-4 focus:outline-none"
                                    >
                                        <h3 className={`text-2xl md:text-3xl font-poppins font-semibold transition-colors duration-300 ${openIndex === idx ? 'text-[#1A5D1A]' : 'text-[#111] group-hover:text-[#1A5D1A]'}`}>
                                            {faq.q}
                                        </h3>
                                        <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300 ${openIndex === idx ? 'bg-[#1A5D1A] border-[#1A5D1A] rotate-45' : 'group-hover:border-[#1A5D1A]'}`}>
                                            <Plus size={18} className={`transition-colors duration-300 ${openIndex === idx ? 'text-white' : 'text-gray-400 group-hover:text-[#1A5D1A]'}`} />
                                        </div>
                                    </button>
                                    <div 
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-40 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-gray-600 font-poppins text-lg leading-relaxed pr-12">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;

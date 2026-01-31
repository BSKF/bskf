import { Instagram, Twitter, Linkedin, Facebook, ArrowUp } from "lucide-react";

const FooterSection = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-white pt-24 pb-12 px-6 border-t border-black/5 relative overflow-hidden text-[#0D1B0D]">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Massive CTA */}
                <div className="mb-32 text-center md:text-left">
                    <h2 className="text-[12vw] leading-none font-poppins font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#0D1B0D] to-gray-300 tracking-tighter hover:tracking-wide transition-all duration-700 cursor-default select-none">
                        JOIN US
                    </h2>
                </div>

                <div className="grid md:grid-cols-4 gap-12 md:gap-24 mb-24">
                    <div className="md:col-span-2 space-y-6">
                        <h3 className="text-2xl font-poppins font-bold text-[#0D1B0D]">Digital Pathsala</h3>
                        <p className="text-gray-600 font-poppins max-w-sm leading-relaxed">
                            Empowering rural Bengal through digital literacy, sustainable agriculture, and community leadership.
                        </p>
                        <div className="flex gap-4 pt-4">
                        <div className="flex gap-4 pt-4">
                            {[
                                { Icon: Instagram, url: "https://www.instagram.com/bskf.official?igsh=MXBnMjZmc2Ztc21rcQ==" },
                                { Icon: Twitter, url: "https://twitter.com/sustainable_ag" },
                                { Icon: Linkedin, url: "https://www.linkedin.com/company/susthayi-krishi-foundation/" },
                                { Icon: Facebook, url: "https://www.facebook.com/share/1CzQowPX4N/" }
                            ].map(({ Icon, url }, i) => (
                                <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#4ADE80] hover:text-black hover:scale-110 transition-all duration-300 group">
                                    <Icon size={20} className="group-hover:rotate-12 transition-transform" />
                                </a>
                            ))}
                        </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-bold tracking-widest uppercase text-gray-500 font-poppins">Quick Links</h4>
                        <ul className="space-y-4 font-poppins">
                            {['Our Story', 'Impact', 'Programs', 'Get Involved'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-[#0D1B0D] hover:text-[#4ADE80] transition-colors flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-4 h-[1px] bg-[#4ADE80] transition-all duration-300"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-bold tracking-widest uppercase text-gray-500 font-poppins">Contact</h4>
                        <ul className="space-y-4 font-poppins text-gray-600">
                            <li>hello@digitalpathsala.org</li>
                            <li>+91 98765 43210</li>
                            <li>Bankura, West Bengal, India</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5 gap-4">
                    <p className="text-gray-500 font-poppins text-sm">© 2026 Digital Pathsala. All rights reserved.</p>
                    
                    <button 
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-[#0D1B0D] font-poppins text-sm uppercase tracking-widest hover:text-[#4ADE80] transition-colors"
                    >
                        Back to Top
                        <span className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center group-hover:border-[#4ADE80] group-hover:-translate-y-1 transition-all">
                            <ArrowUp size={14} />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;

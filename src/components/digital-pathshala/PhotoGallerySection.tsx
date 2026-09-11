import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    '/digital_pathshala/photo gallery/img1.jpg',
    '/digital_pathshala/photo gallery/img2.jpg',
    '/digital_pathshala/photo gallery/img3.jpg',
    '/digital_pathshala/photo gallery/img4.jpg',
    '/digital_pathshala/photo gallery/img5.jpg',
    '/digital_pathshala/photo gallery/img6.jpg',
    '/digital_pathshala/photo gallery/img7.jpg',
    '/digital_pathshala/photo gallery/img8.jpg',
    '/digital_pathshala/photo gallery/img9.jpg',
    '/digital_pathshala/photo gallery/img10.jpg',
    '/digital_pathshala/photo gallery/img11.jpg',
];

const PhotoGallerySection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="py-24 px-6 bg-[#020a05] text-white relative overflow-hidden">
            {/* Background glowing effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A5D1A]/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4ADE80]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-4 mb-4"
                        >
                            <span className="w-12 h-[2px] bg-[#4ADE80]"></span>
                            <span className="text-[#4ADE80] font-bold tracking-[0.2em] text-sm uppercase">
                                Visual Journey
                            </span>
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-5xl font-poppins font-bold text-white leading-tight"
                        >
                            Glimpses of <span className="text-[#4ADE80]">Digital Pathshala</span>
                        </motion.h2>
                    </div>

                    {/* Navigation Arrows */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex gap-4"
                    >
                        <button 
                            onClick={scrollPrev}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#4ADE80] hover:border-[#4ADE80] hover:text-[#020a05] transition-all duration-300"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button 
                            onClick={scrollNext}
                            className="w-12 h-12 rounded-full border border-[#4ADE80] bg-[#4ADE80]/10 text-[#4ADE80] flex items-center justify-center hover:bg-[#4ADE80] hover:text-[#020a05] transition-all duration-300"
                            aria-label="Next image"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="overflow-hidden -mx-4 px-4" 
                    ref={emblaRef}
                >
                    <div className="flex cursor-grab active:cursor-grabbing">
                        {images.map((src, idx) => (
                            <div 
                                key={idx} 
                                className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 pl-6"
                            >
                                <div className="relative group rounded-2xl overflow-hidden aspect-[4/3] shadow-xl border border-white/5 bg-[#0a150e]">
                                    <div className="absolute inset-0 bg-[#4ADE80] mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
                                    <img
                                        src={src}
                                        alt={`Gallery Image ${idx + 1}`}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale-[10%] group-hover:grayscale-0"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PhotoGallerySection;

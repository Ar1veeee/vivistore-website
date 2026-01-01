import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Play, X, CheckCircle2 } from 'lucide-react';

interface HeroProps {
    scrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section id="home" className="relative pt-32 lg:pt-48 pb-24 px-6 overflow-hidden bg-[#FAFBFF]">

            <div className="absolute top-0 right-0 w-200 h-200 bg-linear-to-b from-indigo-100/40 to-transparent blur-[120px] rounded-full -mr-96 -mt-96 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-150 h-150 bg-violet-100/30 blur-[100px] rounded-full -ml-48 -mb-48 pointer-events-none" />

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-linear(#4F46E5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7"
                    >

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white shadow-sm border border-slate-100 rounded-full"
                        >
                            <span className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase italic">
                                New Arrival: Iphone Pro Series
                            </span>
                        </motion.div>

                        {/* Header */}
                        <h1 className="text-6xl lg:text-[100px] font-black text-slate-950 leading-[0.85] tracking-tighter mb-10">
                            VIVI <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-violet-600 to-fuchsia-500">
                                STORE.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl text-slate-500 mb-12 max-w-xl leading-relaxed font-medium">
                            Temukan koleksi gadget kurasi terbaik kami dengan jaminan kualitas dan pelayanan purna jual paling premium di kelasnya.
                        </p>

                        {/* CTA Group */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(79, 70, 229, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('products')}
                                className="w-full sm:w-auto cursor-pointer bg-slate-950 text-white px-10 py-6 rounded-4xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all"
                            >
                                Lihat Produk <ChevronRight size={18} />
                            </motion.button>

                            <button
                                onClick={() => setIsVideoOpen(true)}
                                className="group flex cursor-pointer items-center gap-4 text-slate-900 font-black text-xs uppercase tracking-widest hover:text-indigo-600 transition-all"
                            >
                                <div className="w-14 h-14 bg-white shadow-xl rounded-full flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                    <Play size={20} className="fill-current ml-1" />
                                </div>
                                <span>Putar Video</span>
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative z-10">
                            {/* Main Product Image Container */}
                            <div className="relative rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-4 border-white group">
                                <img
                                    src="/images/store.webp"
                                    alt="Premium Gadget"
                                    loading="eager"
                                    fetchPriority="high"
                                    width="800"
                                    height="1000"
                                    className="w-full h-125 lg:h-150 object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />

                                {/* Image Label */}
                                <div className="absolute bottom-8 left-8">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-3">
                                        <CheckCircle2 className="text-white w-5 h-5" />
                                        <span className="text-white text-xs font-black uppercase tracking-widest">Premium Quality</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-100 flex items-center justify-center p-6 bg-slate-950/95 backdrop-blur-2xl"
                    >
                        {/* Tombol Close */}
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-6 cursor-pointer right-6 text-white/40 hover:text-white transition-colors z-110 p-2"
                        >
                            <X className="w-8 h-8" />
                        </motion.button>

                        {/* Box Video Vertikal */}
                        <motion.div
                            initial={{ scale: 0.9, y: 40, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 40, opacity: 0 }}
                            className="relative w-full max-w-sm aspect-9/16 h-auto max-h-[85vh] bg-black rounded-4xl overflow-hidden shadow-[0_0_80px_rgba(79,70,229,0.3)] border border-white/10"
                        >
                            <iframe
                                src="/videos/video-demo.mp4"
                                title="Video Player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full object-cover"
                            ></iframe>
                        </motion.div>

                        {/* Overlay Klik Luar untuk Close */}
                        <div
                            className="absolute inset-0 -z-10"
                            onClick={() => setIsVideoOpen(false)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;
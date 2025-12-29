// src/sections/Reviews.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';
import type { Review } from '../types/types';

interface ReviewsProps {
    reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
    // Duplikasi data reviews beberapa kali agar tidak ada jeda saat looping
    const infiniteReviews = [...reviews, ...reviews, ...reviews, ...reviews];

    return (
        <section id="reviews" className="py-32 bg-[#020617] text-white overflow-hidden relative">
            {/* Dekorasi Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-125 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10">
                {/* Header Section */}
                <div className="max-w-7xl mx-auto px-6 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 mb-6 text-indigo-400"
                    >
                        <span className="w-12 h-px bg-indigo-500"></span>
                        <span className="font-black uppercase tracking-[0.3em] text-xs">Membangun Kepercayaan</span>
                    </motion.div>
                    <h2 className="text-6xl lg:text-7xl font-black leading-none tracking-tighter mb-4 italic">
                        TESTIMONI <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-violet-500 font-black">PELANGGAN.</span>
                    </h2>
                </div>

                {/* SINGLE LINE AUTO-SLIDER */}
                <div className="relative flex overflow-hidden py-10">
                    <motion.div
                        animate={{
                            x: [0, -2000], // Menyesuaikan dengan panjang total kartu
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40, // Atur durasi (semakin besar semakin lambat)
                                ease: "linear",
                            },
                        }}
                        // Fitur Pause saat Hover
                        whileHover={{ animationPlayState: "paused" }}
                        className="flex gap-8 px-4"
                    >
                        {infiniteReviews.map((review, idx) => (
                            <div
                                key={`${review.id}-${idx}`}
                                className="w-112.5 shrink-0 relative group"
                            >
                                {/* Glow Effect Behind Card */}
                                <div className="absolute inset-0 bg-indigo-500/5 blur-2xl group-hover:bg-indigo-500/15 transition-all duration-700 rounded-[3rem]" />

                                <div className="relative h-full bg-white/3 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] hover:border-indigo-500/40 transition-all duration-500">
                                    <div className="flex items-center gap-5 mb-8">
                                        <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-black text-xl shadow-xl shadow-indigo-500/20">
                                            {review.avatar}
                                        </div>
                                        <div>
                                            <p className="font-black text-lg tracking-tight flex items-center gap-2">
                                                {review.name}
                                                <CheckCircle2 className="w-4 h-4 text-indigo-400 fill-indigo-400/10" />
                                            </p>
                                            <div className="flex gap-1 mt-1.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-3 h-3 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-700'}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-slate-300 text-lg leading-relaxed font-medium italic mb-8">
                                        "{review.comment}"
                                    </p>

                                    <div className="flex justify-between items-center opacity-30 group-hover:opacity-60 transition-opacity">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Verified Transaction</span>
                                        <span className="text-[10px] font-bold">{review.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* linear Fade di Sisi Kiri & Kanan agar slider terlihat halus "menghilang" */}
                    <div className="absolute inset-y-0 left-0 w-40 bg-linear-to-r from-[#020617] to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-40 bg-linear-to-l from-[#020617] to-transparent z-20 pointer-events-none" />
                </div>
            </div>
        </section>
    );
};

export default Reviews;
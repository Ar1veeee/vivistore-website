// src/sections/About.tsx
import { motion } from 'framer-motion';
import { ShieldCheck, Star, Users, Heart, Store, Van } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: Users, label: 'Pelanggan Setia', value: '2.500+' },
        { icon: Heart, label: 'Testimoni Positif', value: '1.200+' },
        { icon: Store, label: 'Tahun Beroperasi', value: '8+' },
    ];

    const features = [
        {
            icon: ShieldCheck,
            title: 'Produk Original & Bergaransi',
            desc: 'Setiap gadget yang kami jual 100% original dengan garansi resmi distributor. Kami bantu klaim jika ada masalah.',
            color: 'text-emerald-500',
            bg: 'bg-emerald-50'
        },
        {
            icon: Van,
            title: 'Melayani COD',
            desc: 'Kami menjamin keamanan dan kenyamanan pelanggan saat melakukan COD di area Surakarta & sekitarnya.',
            color: 'text-amber-500',
            bg: 'bg-amber-50'
        },
        {
            icon: Star,
            title: 'Pelayanan Ramah & Sabar',
            desc: 'Kami siap bantu Anda memilih gadget yang paling sesuai kebutuhan dan budget, tanpa paksaan.',
            color: 'text-indigo-500',
            bg: 'bg-indigo-50'
        }
    ];

    return (
        <section id="about" className="py-32 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Top Section: Storytelling */}
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
                                alt="Vivi Store"
                                className="w-full h-125 object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Dekorasi Aksen */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl z-0"></div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-indigo-100 rounded-4xl z-0 rotate-12"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
                            Sejak 2015
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
                            Strategi Layanan Pelanggan <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600">
                                Vivi Phone Cellular.
                            </span>
                        </h2>
                        <p className="text-lg text-slate-500 leading-relaxed mb-10">
                            Vivi Kami mengusung konsep "One-Stop Gadget Solution", di mana pelanggan tidak hanya datang untuk membeli produk, tetapi mendapatkan solusi menyeluruh atas kebutuhan teknologi mereka..
                        </p>

                        <div className="grid grid-cols-3 gap-6">
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center lg:text-left">
                                    <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section: Feature Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            whileHover={{ y: -15 }}
                            className="group p-12 rounded-[3rem] bg-slate-50 hover:bg-white border border-slate-100 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500"
                        >
                            <div className={`w-16 h-16 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <div className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                                {feature.title}
                            </div>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                {feature.desc}
                            </p>

                            <div className="mt-8 overflow-hidden h-1 w-0 group-hover:w-full bg-indigo-600 transition-all duration-700 rounded-full"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
// src/sections/Services.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Smartphone,
    RefreshCcw,
    Wrench,
    MessagesSquare,
    X,
    ArrowRight,
} from 'lucide-react';

const servicesData = [
    {
        id: 1,
        title: 'Personalized Experience',
        subtitle: 'Pra-Penjualan',
        desc: 'Kami percaya bahwa setiap pelanggan memiliki kebutuhan yang unik. Konsultasi gratis dengan admin untuk mengetahui spesifikasi teknis yang sesuai dengan profil pengguna (Contoh: pelajar, fotografer, atau pebisnis). Kami membantu Anda memilih perangkat yang bukan hanya tren, tapi benar-benar menunjang produktivitas harian Anda.',
        icon: Smartphone,
        color: 'from-blue-600 to-cyan-500',
        size: 'lg'
    },
    {
        id: 2,
        title: 'Seamless Setup',
        subtitle: 'Pasca-Penjualan',
        desc: 'Memastikan pelanggan dapat langsung menggunakan perangkat mereka tanpa hambatan teknis. Layanan migrasi data dari perangkat lama ke perangkat baru (iOS/Android) secara tuntas dan aman. Bantuan aktivasi akun, pengaturan keamanan (biometrik), dan instalasi aplikasi produktivitas dasar.',
        icon: RefreshCcw,
        color: 'from-indigo-600 to-blue-600',
        size: 'sm'
    },
    {
        id: 3,
        title: 'Proteksi Investasi',
        subtitle: 'Jaminan Kelangsungan',
        desc: 'Garansi ganti unit baru dalam satu hari jika ditemukan cacat pabrik tanpa prosedur berbelit. Kami bertindak sebagai perantara resmi antara pelanggan dengan Service Center pusat untuk mempermudah klaim garansi di masa mendatang, memastikan perangkat Anda selalu dalam kondisi prima.',
        icon: Wrench,
        color: 'from-violet-600 to-fuchsia-600',
        size: 'sm'
    },
    {
        id: 4,
        title: 'Inovasi & Loyalitas',
        subtitle: 'Solo COD & Trade-in',
        desc: 'Program tukar tambah dengan sistem penilaian transparan. Kami juga menyediakan layanan "Solo COD Tanpa Ongkir" sebagai solusi belanja gadget paling praktis dan terpercaya di Surakarta dengan pembayaran di tempat setelah barang diperiksa.',
        icon: MessagesSquare,
        color: 'from-fuchsia-600 to-pink-500',
        size: 'lg'
    }
];

const Services = () => {
    const [activeService, setActiveService] = useState<typeof servicesData[0] | null>(null);

    useEffect(() => {
        if (activeService) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [activeService]);

    return (
        <section id="services" className="py-32 px-6 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-50 blur-[120px] rounded-full opacity-50" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
                        className="text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8"
                    >
                        LAYANAN <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600 italic">TANPA BATAS.</span>
                    </motion.h2>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 h-full">
                    {servicesData.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                duration: 0.2,
                                ease: [0.22, 1, 0.36, 1],
                                delay: idx * 0.15
                            }}
                            className={`group relative overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100 p-10 flex flex-col justify-between transition-all duration-700 hover:shadow-2xl hover:shadow-indigo-100/50 ${service.size === 'lg' ? 'md:col-span-3' : 'md:col-span-3 lg:col-span-2'
                                }`}
                        >
                            <div
                                className="relative z-10 flex-1 flex flex-col justify-between"
                            >
                                <div>
                                    <motion.div
                                        className={`w-14 h-14 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center mb-10 shadow-lg`}
                                        transition={{ duration: 0.5, ease: 'easeOut' }}
                                    >
                                        <service.icon className="w-7 h-7 text-white" />
                                    </motion.div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-2">{service.subtitle}</p>
                                    <h3 className="text-2xl font-black text-slate-900 leading-tight mb-4">{service.title}</h3>
                                    <p className="text-slate-500 text-sm font-medium line-clamp-2">
                                        {service.desc}
                                    </p>
                                </div>

                                <motion.div
                                    className="mt-10 cursor-pointer flex items-center gap-2 text-slate-900 font-black text-[10px] uppercase tracking-widest"
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 10 }}
                                    transition={{ duration: 0.2 }}
                                    onClick={() => setActiveService(service)}
                                >
                                    Explore <ArrowRight className="w-4 h-4" />
                                </motion.div>
                            </div>

                            {/* Hover Gradient Background */}
                            <motion.div
                                className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0`}
                                whileHover={{ opacity: 0.06 }}
                                transition={{ duration: 0.8 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* DRAWER DETAIL (tetap sama, hanya dibuka saat klik card) */}
            <AnimatePresence mode="wait">
                {activeService && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                            onClick={() => setActiveService(null)}
                            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xl z-100"
                        />

                        {/* Drawer Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{
                                type: 'spring',
                                damping: 30,
                                stiffness: 300,
                                mass: 0.8
                            }}
                            className="fixed top-0 right-0 h-full w-full max-w-xl bg-white z-101 shadow-[-30px_0_60px_rgba(0,0,0,0.15)] flex flex-col"
                        >
                            {/* Header */}
                            <div className="p-8 flex justify-between items-center border-b border-slate-100">
                                <div className="flex items-center gap-4">
                                    <motion.div
                                        initial={{ scale: 0.8, rotate: -12 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.5, ease: 'easeOut' }}
                                        className={`w-12 h-12 rounded-xl bg-linear-to-br ${activeService.color} flex items-center justify-center text-white`}
                                    >
                                        <activeService.icon className="w-6 h-6" />
                                    </motion.div>
                                    <span className="font-black text-xs uppercase tracking-widest text-slate-400">Service Detail</span>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setActiveService(null)}
                                    className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300"
                                >
                                    <X className="w-6 h-6" />
                                </motion.button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-8 md:p-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
                                >
                                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-8">
                                        {activeService.title}
                                    </h3>

                                    <div className="space-y-8">
                                        <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                            {activeService.desc}
                                        </p>

                                        <div className="grid grid-cols-1 gap-4 pt-8">
                                            {['Prioritas Layanan', 'Dukungan 24/7', 'Eksklusif Surakarta'].map((feat, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -30 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                                                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100"
                                                >
                                                    <div className="w-2 h-2 rounded-full bg-indigo-600" />
                                                    <span className="font-bold text-slate-800 text-sm uppercase tracking-wide">{feat}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Footer */}
                            <div className="p-8 border-t border-slate-100">
                                <motion.button
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setActiveService(null)}
                                    className="w-full py-6 bg-slate-900 text-white rounded-4xl font-black text-xs uppercase tracking-[0.3em] hover:bg-indigo-600 transition-all duration-500 shadow-xl"
                                >
                                    Tutup Detail
                                </motion.button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services;
import { motion } from 'framer-motion';
import {
    Instagram,
    ArrowUpRight,
    MessageCircle,
    MapPin,
    ShieldCheck,
    Package,
    Mail
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const containerVariants = {
        initial: { opacity: 0 },
        whileInView: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 }
    };

    return (
        <footer className="bg-[#020617] text-white pt-24 pb-12 px-6 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-40 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20"
                >
                    {/* Brand Section */}
                    <div className="lg:col-span-5 space-y-8">
                        <motion.div variants={itemVariants} className="flex flex-col gap-4">
                            <h3 className="text-4xl font-black tracking-tighter italic">
                                VIVI<span className="text-indigo-500">STORE.</span>
                            </h3>
                            <p className="text-slate-400 font-medium text-lg leading-relaxed max-w-sm">
                                Solusi gadget premium di Surakarta. Kami mengutamakan kualitas unit dan layanan purna jual yang manusiawi.
                            </p>
                        </motion.div>

                        {/* Quick Trust Badges */}
                        <motion.div variants={itemVariants} className="flex gap-6">
                            <div className="flex items-center gap-2 text-indigo-400 font-black text-[10px] uppercase tracking-widest">
                                <ShieldCheck size={16} /> 100% Original
                            </div>
                            <div className="flex items-center gap-2 text-indigo-400 font-black text-[10px] uppercase tracking-widest">
                                <Package size={16} /> COD Area Solo
                            </div>
                        </motion.div>
                    </div>

                    {/* Navigation */}
                    <div className="lg:col-span-3">
                        <motion.h4 variants={itemVariants} className="font-black text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-8">Navigation</motion.h4>
                        <motion.ul variants={itemVariants} className="space-y-4">
                            {['About', 'Services', 'Products', 'Reviews'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-slate-300 hover:text-white hover:translate-x-2 transition-all duration-300 font-bold flex items-center gap-2 group">
                                        <div className="w-0 h-px bg-indigo-500 group-hover:w-4 transition-all" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </motion.ul>
                    </div>

                    {/* Direct Contact Bento */}
                    <div className="lg:col-span-4">
                        <motion.div
                            variants={itemVariants}
                            className="p-8 rounded-[2.5rem] bg-white/3 border border-white/10 backdrop-blur-xl relative group overflow-hidden"
                        >
                            <div className="relative z-10">
                                <h4 className="font-black text-xl mb-6">Punya Pertanyaan?</h4>
                                <div className="space-y-6">
                                    <a
                                        href="https://wa.me/628974070803"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Chat dengan admin via WhatsApp"
                                        className="flex items-center gap-4 group/btn"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-indigo-600 transition-all shadow-lg shadow-indigo-600/20">
                                            <MessageCircle size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Chat Admin</p>
                                            <p className="font-bold text-white group-hover/btn:text-indigo-400 transition-colors">WhatsApp Konsultasi</p>
                                        </div>
                                    </a>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Lokasi</p>
                                            <p className="font-bold text-white leading-tight">Singosaren Plaza, Solo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Icon */}
                            <Mail className="absolute -bottom-6 -right-6 w-32 h-32 text-white/2 group-hover:text-indigo-500/5 transition-all duration-700 rotate-12" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Footer Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
                >
                    <div className="flex items-center gap-6">
                        <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">
                            &copy; {currentYear} VIVI STORE
                        </p>
                        <div className="hidden md:block w-px h-4 bg-white/10" />
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com/davinashakilaa"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Follow kami di Instagram @aliefarfn"
                                className="text-slate-500 hover:text-white transition-colors"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="flex gap-8">
                        {['Terms', 'Privacy'].map((item) => (
                            <a key={item} href="#" className="text-[10px] font-black text-slate-600 hover:text-indigo-400 uppercase tracking-[0.3em] flex items-center gap-1 group">
                                {item} <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-all" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
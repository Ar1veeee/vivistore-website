import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
    isScrolled: boolean;
    activeSection: string;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
    scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({
    isScrolled,
    activeSection,
    mobileMenuOpen,
    setMobileMenuOpen,
    scrollToSection,
}) => {
    const navItems = ['home', 'about', 'services', 'products', 'reviews', 'contact'];

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    }, [mobileMenuOpen]);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 w-full z-100 pointer-events-none"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 lg:py-6">
                <div className={`
                    relative flex justify-between items-center px-4 md:px-6 py-2 md:py-3 
                    rounded-4xl md:rounded-full transition-all duration-700 pointer-events-auto
                    ${isScrolled 
                        ? 'bg-white/70 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/40' 
                        : 'bg-transparent border-transparent'}
                `}>
                    
                    {/* LOGO SECTION */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => scrollToSection('home')}
                        className="flex items-center gap-3 cursor-pointer group"
                    >
                        <div className="relative w-10 h-10 flex items-center justify-center">
                            <motion.div 
                                layoutId="logo-shape"
                                className="absolute inset-0 bg-indigo-600 rounded-2xl transition-transform duration-500 shadow-lg shadow-indigo-200"
                            />
                            <span className="relative text-white font-black text-xl italic leading-none">V</span>
                        </div>
                        <div className="hidden sm:flex flex-col -space-y-1">
                            <span className="text-lg font-black tracking-tighter text-slate-900">
                                VIVI<span className="text-indigo-600">STORE.</span>
                            </span>
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-600">Singosaren</span>
                        </div>
                    </motion.div>

                    {/* DESKTOP & TABLET NAVIGATION (Hidden on Mobile) */}
                    <nav className="hidden md:flex items-center bg-slate-100/30 p-1.5 rounded-full border border-slate-200/20 backdrop-blur-sm">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className={`relative px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-all duration-500 rounded-full ${
                                    activeSection === item ? 'text-white' : 'text-slate-500 hover:text-slate-900'
                                }`}
                            >
                                <span className="relative z-10">{item}</span>
                                {activeSection === item && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-indigo-600 rounded-full shadow-lg"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </button>
                        ))} 
                    </nav>

                    {/* RIGHT ACTIONS */}
                    <div className="flex items-center gap-2 md:gap-4 md:hidden">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            aria-label='Menu Mobile'
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="w-11 h-11 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-900"
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* FULLSCREEN MOBILE OVERLAY */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xl z-80 pointer-events-auto"
                        />
                        
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] bg-white z-90 pointer-events-auto flex flex-col"
                        >
                            {/* Drawer Header */}
                            <div className="p-8 flex justify-between items-center border-b border-slate-50">
                                <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Explore Menu</span>
                                <button onClick={() => setMobileMenuOpen(false)} className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Nav Links */}
                            <nav className="flex-1 px-8 py-12 flex flex-col justify-center gap-4">
                                {navItems.map((item, idx) => (
                                    <motion.button
                                        key={item}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        onClick={() => {
                                            scrollToSection(item);
                                            setMobileMenuOpen(false);
                                        }}
                                        className="relative group py-2"
                                    >
                                        <span className={`text-5xl font-black uppercase tracking-tighter transition-all duration-300 ${
                                            activeSection === item ? 'text-indigo-600 italic' : 'text-slate-900 group-hover:text-indigo-600'
                                        }`}>
                                            {item}
                                        </span>
                                    </motion.button>
                                ))}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
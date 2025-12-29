// src/sections/Contact.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowUpRight, MessageSquare, UserCheck, CheckCircle2, SendHorizonal } from 'lucide-react';

const Contact = () => {
    const [selectedAdminIdx, setSelectedAdminIdx] = useState(1);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const adminContacts = [
        { role: 'Owner', name: 'Ibu Wahyuni', phone: '628989803859', color: 'bg-indigo-50 text-indigo-600', border: 'border-indigo-200' },
        { role: 'Admin 1', name: 'Kak Dian', phone: '6282241765913', color: 'bg-emerald-50 text-emerald-600', border: 'border-emerald-200' },
        { role: 'Admin 2', name: 'Kak Davina', phone: '628974070803', color: 'bg-violet-50 text-violet-600', border: 'border-violet-200' },
        { role: 'Admin 3', name: 'Bapak Ardi', phone: '628983553888', color: 'bg-fuchsia-50 text-fuchsia-600', border: 'border-fuchsia-200' },
    ];

    const handleWhatsAppSend = (e: React.FormEvent) => {
        e.preventDefault();
        const admin = adminContacts[selectedAdminIdx];
        const text = `Halo ${admin.name},\n\nNama saya *${name}*.\n\n${message}`;
        window.open(`https://wa.me/${admin.phone}?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <section id="contact" className="py-32 px-6 relative overflow-hidden bg-white text-slate-900">
            {/* Soft Ambient Background */}
            <div className="absolute top-0 right-0 w-125 h-125 bg-indigo-50/50 blur-[120px] rounded-full -mr-48 -mt-48" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="w-12 h-1 bg-indigo-600 rounded-full" />
                            <span className="text-indigo-600 font-black uppercase tracking-[0.3em] text-xs">Konsultasi Sekarang</span>
                        </motion.div>
                        <h2 className="text-6xl lg:text-7xl font-black leading-[0.8] tracking-tighter text-slate-900">
                            HUBUNGI <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600 italic">KAMI.</span>
                        </h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="lg:text-right space-y-2"
                    >
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Lokasi Toko</p>
                        <p className="text-xl font-black text-slate-900 leading-tight">Matahari Center Celullar, <br /> Surakarta, Indonesia</p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <h3 className="text-sm font-black uppercase tracking-widest text-slate-600 mb-6 flex items-center gap-2">
                                <UserCheck className="w-4 h-4" /> Pilih Konsultan Anda
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {adminContacts.map((contact, i) => (
                                    <motion.button
                                        key={i}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setSelectedAdminIdx(i)}
                                        className={`relative p-6 rounded-4xl border-2 text-left transition-all duration-300 ${selectedAdminIdx === i
                                                ? `${contact.border} bg-white shadow-2xl shadow-slate-200 ring-4 ring-slate-50`
                                                : 'border-transparent bg-slate-50/50 hover:bg-slate-50'
                                            }`}
                                    >
                                        <div className={`w-10 h-10 ${contact.color} rounded-xl flex items-center justify-center mb-4`}>
                                            <MessageSquare className="w-5 h-5" />
                                        </div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-600 mb-1">{contact.role}</p>
                                        <p className="font-black text-slate-900">{contact.name}</p>

                                        {selectedAdminIdx === i && (
                                            <motion.div
                                                layoutId="active-check"
                                                className="absolute top-4 right-4 text-indigo-600"
                                            >
                                                <CheckCircle2 className="w-5 h-5" />
                                            </motion.div>
                                        )}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* GOOGLE MAPS SECTION */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-[2.5rem] p-4 shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden"
                        >
                            <div className="relative w-full h-87.5 rounded-4xl overflow-hidden group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0371914251785!2d110.8228308758832!3d-7.570954974786419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1664a5e502e5%3A0x136b9a98c0cacbb6!2sSingosaren%20Plaza!5e0!3m2!1sid!2sid!4v1709100000000!5m2!1sid!2sid"
                                    width="100%"
                                    height="100%"
                                    style={{
                                        border: 0,
                                        filter: 'grayscale(0.3) contrast(1.1)',
                                        borderRadius: '2rem'
                                    }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale hover:grayscale-0 transition-all duration-700"
                                    title="Lokasi Matahari Center Cellular di Singosaren Plaza, Surakarta"
                                ></iframe>

                                {/* Hover Overlay Information */}
                                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-5 rounded-2xl text-white flex justify-between items-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl">
                                    <div>
                                        <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-0.5">Showroom Solo</p>
                                        <p className="text-sm font-black">Matahari Center Cellular</p>
                                        <p className="text-[10px] text-slate-400 mt-1">Lt. Dasar, Singosaren Plaza</p>
                                    </div>
                                    <a
                                        href="https://maps.app.goo.gl/Yn2N5k1ZkXzB7J9U7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Buka lokasi Matahari Center Cellular di Google Maps"
                                        className="bg-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-all duration-300 shadow-lg"
                                    >
                                        <ArrowUpRight className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Floating Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-7 bg-slate-50/50 rounded-[3.5rem] p-8 lg:p-16 border border-slate-100"
                    >
                        <form onSubmit={handleWhatsAppSend} className="space-y-10">
                            {/* Input Nama */}
                            <div className="relative group">
                                <input
                                    required
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Masukkan nama Anda"
                                    className="w-full bg-transparent border-b-2 border-slate-200 py-4 outline-none focus:border-indigo-600 transition-all font-black text-sm lg:text-md placeholder:text-slate-200"
                                />
                                <label className="absolute -top-6 left-0 text-sm lg:text-md font-black uppercase tracking-[0.2em] text-slate-600">Siapa nama Anda?</label>
                            </div>

                            {/* Info Admin Terpilih */}
                            <div className="flex items-center gap-4 py-4 px-6 mb-12 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <div className={`w-12 h-12 rounded-full ${adminContacts[selectedAdminIdx].color} flex items-center justify-center font-black`}>
                                    {adminContacts[selectedAdminIdx].name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm lg:text-md font-black text-slate-600 uppercase tracking-widest">Mengirim pesan ke:</p>
                                    <p className="font-black text-slate-900">{adminContacts[selectedAdminIdx].name} ({adminContacts[selectedAdminIdx].role})</p>
                                </div>
                            </div>

                            {/* Input Pesan */}
                            <div className="relative group">
                                <textarea
                                    required
                                    rows={3}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Apa yang bisa kami bantu?"
                                    className="w-full bg-transparent border-b-2 border-slate-200 py-4 outline-none focus:border-indigo-600 transition-all font-black text-sm lg:text-md placeholder:text-slate-200 resize-none"
                                />
                                <label className="absolute -top-6 left-0 text-sm lg:text-md font-black uppercase tracking-[0.2em] text-slate-600">Pesan Anda</label>
                            </div>

                            <div className="pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-indigo-600 text-white py-8 rounded-[4xl font-black text-xs uppercase tracking-[0.4em] flex items-center justify-center gap-4 shadow-2xl shadow-indigo-200 hover:bg-slate-900 transition-all duration-500"
                                >
                                    Kirim Sekarang <SendHorizonal className="w-5 h-5" />
                                </motion.button>
                            </div>

                            {/* Meta Info */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 opacity-60">
                                <div className="flex items-center gap-3">
                                    <Clock className="w-4 h-4 text-indigo-600" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Respon cepat: 10:00 - 21:00</span>
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
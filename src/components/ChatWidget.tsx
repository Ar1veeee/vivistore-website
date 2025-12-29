import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Smartphone, MapPin, ShieldCheck } from 'lucide-react';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
}

const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Halo! Vivi AI di sini. Ada yang bisa saya bantu terkait produk premium kami hari ini?", sender: 'bot' }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const quickReplies = [
        { label: "Cek iPhone", icon: <Smartphone size={12} />, value: "Cek Stok iPhone Terbaru" },
        { label: "Lokasi", icon: <MapPin size={12} />, value: "Lokasi Toko Vivi Store" },
        { label: "Garansi", icon: <ShieldCheck size={12} />, value: "Info Garansi" },
    ];

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages, isTyping]);

    const handleSend = (textToSend?: string) => {
        const messageText = textToSend || input;
        if (!messageText.trim()) return;

        setMessages(prev => [...prev, { id: Date.now(), text: messageText, sender: 'user' }]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            let response = "Maaf, saya sedang belajar. Bisa hubungi Admin WhatsApp kami untuk respon kilat?";
            const low = messageText.toLowerCase();
            if (low.includes('iphone')) response = "iPhone Series terbaru ready stok iBox! Mau cicilan atau cash?";
            if (low.includes('lokasi')) response = "Kami di Singosaren Plaza Solo, Lantai 1. Ditunggu kedatangannya!";
            if (low.includes('garansi')) response = "Garansi resmi iBox 1 tahun & garansi toko ganti unit 7 hari!";

            setMessages(prev => [...prev, { id: Date.now() + 1, text: response, sender: 'bot' }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-999 font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-20 right-0 w-[calc(100vw-3rem)] sm:w-105 bg-slate-950/80 backdrop-blur-3xl rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] border border-white/10 overflow-hidden flex flex-col"
                    >
                        {/* HEADER */}
                        <div className="p-7 bg-linear-to-b from-indigo-600/20 to-transparent">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-indigo-500 blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
                                        <div className="relative w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center border border-white/20 shadow-inner">
                                            <Bot className="text-white w-7 h-7" />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-4 border-slate-950 rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-black text-lg tracking-tight">Vivi Assistant</h4>
                                        <div className="flex items-center gap-2">
                                            <div className="flex gap-0.5">
                                                {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />)}
                                            </div>
                                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Always Online</span>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all">
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* MESSAGES AREA */}
                        <div
                            ref={scrollRef}
                            className="h-105 overflow-y-auto px-7 py-2 space-y-5 no-scrollbar scroll-smooth"
                            style={{
                                msOverflowStyle: 'none',
                                scrollbarWidth: 'none'
                            }}
                        >
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20, y: 10 }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`relative max-w-[85%] px-5 py-3.5 rounded-4xl text-sm font-medium leading-relaxed ${msg.sender === 'user'
                                        ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-900/20 rounded-tr-none'
                                        : 'bg-white/5 text-slate-200 border border-white/5 rounded-tl-none backdrop-blur-md'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex gap-1.5 p-4 bg-white/5 w-16 rounded-full border border-white/5 justify-center"
                                >
                                    <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                                    <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                                    <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                                </motion.div>
                            )}
                        </div>

                        {/* FOOTER AREA */}
                        <div className="p-7 bg-slate-900/30">
                            {/* Horizontal Quick Replies */}
                            <div className="flex gap-2 overflow-x-auto no-scrollbar mb-5 py-1">
                                {quickReplies.map((reply) => (
                                    <motion.button
                                        key={reply.label}
                                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(79, 70, 229, 0.2)' }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleSend(reply.value)}
                                        className="flex items-center gap-2 whitespace-nowrap px-4 py-2 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-black text-indigo-400 uppercase tracking-widest transition-all"
                                    >
                                        {reply.icon} {reply.label}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Input Field - Pill Style */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-indigo-600/20 rounded-4xl blur-md group-focus-within:bg-indigo-600/40 transition-all" />
                                <div className="relative flex items-center bg-slate-900/80 border border-white/10 rounded-4xl p-1.5 transition-all group-focus-within:border-indigo-500/50">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                        placeholder="Tulis sesuatu..."
                                        className="flex-1 bg-transparent px-5 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none"
                                    />
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => handleSend()}
                                        className="w-12 h-12 bg-indigo-600 text-white rounded-3xl flex items-center justify-center shadow-lg shadow-indigo-600/40 hover:bg-indigo-500"
                                    >
                                        <Send size={18} />
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MAIN TRIGGER */}
            <motion.button
                aria-label="Tampilkan Live Chat"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`relative cursor-pointer w-18 h-18 rounded-[2.2rem] flex items-center justify-center text-white shadow-2xl transition-all duration-700 ${isOpen ? 'bg-slate-900 rotate-90 border border-white/10' : 'bg-indigo-600 shadow-indigo-500/40'
                    }`}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div key="close" initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 45 }}>
                            <X size={32} />
                        </motion.div>
                    ) : (
                        <motion.div key="open" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className="relative">
                            <MessageCircle size={32} />
                            <motion.span
                                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 border-4 border-indigo-600 rounded-full"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
};

export default ChatWidget;
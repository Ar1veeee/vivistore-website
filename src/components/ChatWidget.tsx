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
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[999] font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        // Responsive Width & Height
                        className="absolute bottom-20 right-0 w-[calc(100vw-2rem)] sm:w-[400px] h-[70vh] sm:h-[600px] max-h-[calc(100vh-120px)] bg-slate-950/90 backdrop-blur-3xl rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] border border-white/10 overflow-hidden flex flex-col"
                    >
                        {/* HEADER - Ukuran dikurangi sedikit untuk mobile */}
                        <div className="p-5 md:p-7 bg-linear-to-b from-indigo-600/20 to-transparent flex-shrink-0">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-indigo-500 blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
                                        <div className="relative w-10 h-10 md:w-14 md:h-14 bg-indigo-600 rounded-xl md:rounded-2xl flex items-center justify-center border border-white/20 shadow-inner">
                                            <Bot className="text-white w-5 h-5 md:w-7 md:h-7" />
                                        </div>
                                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 md:w-4 md:h-4 bg-emerald-500 border-2 md:border-4 border-slate-950 rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-black text-base md:text-lg tracking-tight">Vivi Assistant</h4>
                                        <div className="flex items-center gap-2">
                                            <div className="flex gap-0.5">
                                                {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />)}
                                            </div>
                                            <span className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Always Online</span>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all">
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* MESSAGES AREA - Menggunakan flex-1 agar memenuhi ruang tengah */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto px-5 md:px-7 py-2 space-y-4 no-scrollbar scroll-smooth"
                        >
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`relative max-w-[90%] md:max-w-[85%] px-4 py-3 md:px-5 md:py-3.5 rounded-2xl md:rounded-4xl text-sm font-medium leading-relaxed ${msg.sender === 'user'
                                        ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-900/20 rounded-tr-none'
                                        : 'bg-white/5 text-slate-200 border border-white/5 rounded-tl-none backdrop-blur-md'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="flex gap-1.5 p-3 bg-white/5 w-14 rounded-full border border-white/5 justify-center">
                                    <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1 h-1 bg-indigo-500 rounded-full" />
                                    <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1 h-1 bg-indigo-500 rounded-full" />
                                    <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1 h-1 bg-indigo-500 rounded-full" />
                                </div>
                            )}
                        </div>

                        {/* FOOTER AREA */}
                        <div className="p-5 md:p-7 bg-slate-900/30 flex-shrink-0">
                            {/* Horizontal Quick Replies */}
                            <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4 py-1">
                                {quickReplies.map((reply) => (
                                    <button
                                        key={reply.label}
                                        onClick={() => handleSend(reply.value)}
                                        className="flex items-center gap-2 whitespace-nowrap px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-indigo-400 uppercase tracking-widest hover:bg-indigo-500/20 transition-all"
                                    >
                                        {reply.icon} {reply.label}
                                    </button>
                                ))}
                            </div>

                            {/* Input Field */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-indigo-600/20 rounded-full blur-md group-focus-within:bg-indigo-600/40 transition-all" />
                                <div className="relative flex items-center bg-slate-900 border border-white/10 rounded-full p-1 transition-all group-focus-within:border-indigo-500/50">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                        placeholder="Tanya Vivi..."
                                        className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-slate-600 focus:outline-none min-w-0"
                                    />
                                    <button
                                        onClick={() => handleSend()}
                                        className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-500 flex-shrink-0"
                                    >
                                        <Send size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MAIN TRIGGER */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl md:rounded-[2rem] flex items-center justify-center text-white shadow-2xl transition-all duration-500 ${isOpen ? 'bg-slate-900 rotate-90 border border-white/10' : 'bg-indigo-600 shadow-indigo-500/40'
                    }`}
            >
                {isOpen ? <X size={28} /> : (
                    <div className="relative">
                        <MessageCircle size={28} />
                        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 border-2 border-indigo-600 rounded-full" />
                    </div>
                )}
            </motion.button>
        </div>
    );
};

export default ChatWidget;
// src/sections/Products.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Heart, MessageCircle, Send } from 'lucide-react';
import type { Product } from '../types/types';

interface ProductsProps {
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filteredProducts: Product[];
}

const Products: React.FC<ProductsProps> = ({
    categories,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredProducts,
}) => {
    const handleWhatsAppCheckout = (product: Product) => {
        const adminNumber = "628974070803";
        const message = `Halo Admin, saya ingin menanyakan ketersediaan produk berikut:\n\n` +
            `*Produk:* ${product.name}\n` +
            `*Harga:* Rp ${product.price.toLocaleString('id-ID')}\n\n` +
            `Apakah stoknya masih tersedia?`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${adminNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="products" className="py-24 px-6 bg-[#FDFDFD] overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header & Search Bar Section */}
                <div className="flex flex-col space-y-10 mb-16">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div className="max-w-xl">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-2 mb-4"
                            >
                                <span className="w-8 h-0.5 bg-indigo-600"></span>
                                <span className="text-indigo-600 font-bold tracking-[0.2em] uppercase text-xs">
                                    Katalog Terbaru
                                </span>
                            </motion.div>
                            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[0.85] tracking-tighter">
                                Produk <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-500">
                                    Unggulan.
                                </span>
                            </h2>
                        </div>

                        <div className="w-full lg:max-w-md">
                            <div className="group relative">
                                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-600 group-focus-within:scale-110 transition-all duration-300" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Cari gadget impian Anda..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-14 pr-12 py-5 bg-white border border-slate-100 rounded-4xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] focus:shadow-[0_20px_50px_-20px_rgba(79,70,229,0.15)] focus:border-indigo-500 focus:ring-0 outline-none font-semibold text-slate-700 placeholder:text-slate-400 transition-all duration-300"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Filter Categories */}
                    <div className="flex gap-3 overflow-x-auto pt-4 no-scrollbar pb-2">
                        {categories.map((cat) => (
                            <button
                                aria-label="Kategori Filter"
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${selectedCategory === cat
                                    ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100 -translate-y-1'
                                    : 'bg-white text-slate-600 border border-slate-300 hover:border-indigo-200 hover:text-indigo-600'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 min-h-100"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <motion.div
                                    layout
                                    key={product.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{
                                        duration: 0.4,
                                        layout: { type: "spring", stiffness: 200, damping: 25 }
                                    }}
                                >
                                    <div className='group'>
                                        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-100 aspect-4/5 mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                                            <img
                                                loading="eager"
                                                fetchPriority="high"
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                            <div className="absolute top-5 right-5 flex flex-col gap-3 translate-x-16 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                                                <button
                                                    aria-label="Tambahkan ke favorit"
                                                    className="p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl hover:bg-rose-500 hover:text-white transition-all group/heart">
                                                    <Heart className="w-5 h-5 group-hover/heart:fill-current" />
                                                </button>
                                            </div>

                                            {/* Overlay Hover untuk tombol cepat */}
                                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                        </div>
                                    </div>

                                    <div className="px-2">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="flex text-amber-400">
                                                <Star className="w-3.5 h-3.5 fill-current" />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-tighter text-slate-600">
                                                {product.rating} • {product.reviews} ulasan
                                            </span>
                                        </div>
                                        <h3 className="font-black text-slate-900 text-xl mb-2">
                                            {product.name}
                                        </h3>
                                        <div className="flex items-center justify-between mt-6">
                                            <span className="text-2xl font-black text-slate-900">
                                                Rp {product.price.toLocaleString('id-ID')}
                                            </span>

                                            {/* Tombol WhatsApp */}
                                            <motion.button
                                                aria-label="Tanya ketersediaan via WhatsApp"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => handleWhatsAppCheckout(product)}
                                                title="Tanya ketersediaan"
                                                className="p-4 bg-slate-900 text-white rounded-2xl hover:bg-green-500 transition-all shadow-lg flex items-center justify-center group/btn group cursor-pointer"
                                            >
                                                <Send className="w-5 h-5 absolute opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <MessageCircle className="w-5 h-5 opacity-100 group-hover:opacity-0 transition-opacity" />
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full py-32 text-center bg-slate-50 rounded-[3rem] border border-dashed border-slate-200"
                            >
                                <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-slate-900">Produk tidak ditemukan</h3>
                                <p className="text-slate-500">Coba kata kunci lain atau filter kategori berbeda.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Products;
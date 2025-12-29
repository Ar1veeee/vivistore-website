// src/data/products.ts
import type { Product } from '../types/types';

const products: Product[] = [
    { id: 1, name: 'iPhone 15 Pro Max', price: 19999000, image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400', category: 'smartphone', rating: 4.9, reviews: 234 },
    { id: 2, name: 'Samsung Galaxy S24 Ultra', price: 18999000, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400', category: 'smartphone', rating: 4.8, reviews: 189 },
    { id: 3, name: 'MacBook Pro M3', price: 29999000, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400', category: 'laptop', rating: 4.9, reviews: 312 },
    { id: 4, name: 'Dell XPS 15', price: 24999000, image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400', category: 'laptop', rating: 4.7, reviews: 156 },
    { id: 5, name: 'AirPods Pro 2', price: 3999000, image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400', category: 'accessories', rating: 4.8, reviews: 421 },
    { id: 6, name: 'Sony WH-1000XM5', price: 4999000, image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400', category: 'accessories', rating: 4.9, reviews: 267 },
    { id: 7, name: 'iPad Pro 12.9"', price: 16999000, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400', category: 'tablet', rating: 4.8, reviews: 198 },
    { id: 8, name: 'Apple Watch Ultra 2', price: 12999000, image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400', category: 'accessories', rating: 4.7, reviews: 143 },
];

export default products;
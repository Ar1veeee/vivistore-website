// src/data/about.ts

import {
    ShieldCheck,
    Star,
    Users,
    Heart,
    Store,
    Van,
} from 'lucide-react';
import type { Feature, Stat } from '../types/types';

export const aboutStats: Stat[] = [
    { icon: Users, label: 'Pelanggan Setia', value: '2.500+' },
    { icon: Heart, label: 'Testimoni Positif', value: '1.200+' },
    { icon: Store, label: 'Tahun Beroperasi', value: '8+' },
];

export const aboutFeatures: Feature[] = [
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
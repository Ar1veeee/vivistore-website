import type { ComponentType } from 'react';
export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    rating: number;
    reviews: number;
}

export interface Review {
    id: number;
    name: string;
    rating: number;
    comment: string;
    date: string;
    avatar: string;
}

export interface Service {
    id: number;
    title: string;
    subtitle: string;
    desc: string;
    icon: ComponentType<{ className?: string }>;
    color: string;
    size: 'sm' | 'lg';
}

export interface Stat {
    icon: ComponentType<{ className?: string }>;
    label: string;
    value: string;
}

export interface Feature {
    icon: ComponentType<{ className?: string }>;
    title: string;
    desc: string;
    color: string;
    bg: string;
}

export interface AdminContact {
    role: string;
    name: string;
    phone: string; 
    color: string; 
    border: string; 
}
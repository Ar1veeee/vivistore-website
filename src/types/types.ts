// src/types/types.ts
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
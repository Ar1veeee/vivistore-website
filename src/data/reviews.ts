// src/data/reviews.ts
import type { Review } from '../types/types';

const reviews: Review[] = [
    { id: 1, name: 'Andi Wijaya', rating: 5, comment: 'Pelayanan sangat memuaskan! Produk original dan pengiriman cepat.', date: '2 hari lalu', avatar: 'AW' },
    { id: 2, name: 'Siti Nurhaliza', rating: 5, comment: 'Harga kompetitif dan staff sangat membantu. Recommended!', date: '1 minggu lalu', avatar: 'SN' },
    { id: 3, name: 'Budi Santoso', rating: 4, comment: 'Produk bagus, tapi pengiriman sedikit lambat. Overall good!', date: '2 minggu lalu', avatar: 'BS' },
];

export default reviews;
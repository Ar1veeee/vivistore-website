import {
    Smartphone,
    RefreshCcw,
    Wrench,
    MessagesSquare,
} from 'lucide-react';
import type { Service } from '../types/types';


export const servicesData: Service[] = [
    {
        id: 1,
        title: 'Personalized Experience',
        subtitle: 'Pra-Penjualan',
        desc: 'Kami percaya bahwa setiap pelanggan memiliki kebutuhan yang unik. Konsultasi gratis dengan admin untuk mengetahui spesifikasi teknis yang sesuai dengan profil pengguna (Contoh: pelajar, fotografer, atau pebisnis). Kami membantu Anda memilih perangkat yang bukan hanya tren, tapi benar-benar menunjang produktivitas harian Anda.',
        icon: Smartphone,
        color: 'from-blue-600 to-cyan-500',
        size: 'lg'
    },
    {
        id: 2,
        title: 'Seamless Setup',
        subtitle: 'Pasca-Penjualan',
        desc: 'Memastikan pelanggan dapat langsung menggunakan perangkat mereka tanpa hambatan teknis. Layanan migrasi data dari perangkat lama ke perangkat baru (iOS/Android) secara tuntas dan aman. Bantuan aktivasi akun, pengaturan keamanan (biometrik), dan instalasi aplikasi produktivitas dasar.',
        icon: RefreshCcw,
        color: 'from-indigo-600 to-blue-600',
        size: 'sm'
    },
    {
        id: 3,
        title: 'Proteksi & Jaminan',
        subtitle: 'Jaminan Kelangsungan',
        desc: 'Garansi ganti unit baru dalam satu hari jika ditemukan cacat pabrik tanpa prosedur berbelit. Kami bertindak sebagai perantara resmi antara pelanggan dengan Service Center pusat untuk mempermudah klaim garansi di masa mendatang, memastikan perangkat Anda selalu dalam kondisi prima.',
        icon: Wrench,
        color: 'from-violet-600 to-fuchsia-600',
        size: 'sm'
    },
    {
        id: 4,
        title: 'Inovasi & Loyalitas',
        subtitle: 'Solo COD & Trade-in',
        desc: 'Program tukar tambah dengan sistem penilaian transparan. Kami juga menyediakan layanan "Solo COD Tanpa Ongkir" sebagai solusi belanja gadget paling praktis dan terpercaya di Surakarta dengan pembayaran di tempat setelah barang diperiksa.',
        icon: MessagesSquare,
        color: 'from-fuchsia-600 to-pink-500',
        size: 'lg'
    }
];
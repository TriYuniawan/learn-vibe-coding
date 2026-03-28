# Setup Backend Project: Node.js + ElysiaJS + Drizzle ORM (MySQL)

**Tujuan:** 
Menginisialisasi proyek backend baru menggunakan runtime Node.js, framework ElysiaJS (via Node adapter), dan Drizzle ORM dengan database MySQL.

## Langkah-langkah Implementasi (High-level):

### 1. Inisialisasi Proyek (Node.js)
- Lakukan inisialisasi project Node kosongan (`npm init -y`) di direktori saat ini.
- Instal TypeScript dan inisialisasi konfigurasi (`npx tsc --init`).
- Instal tool untuk menjalankan TypeScript di environment Node (seperti `tsx` atau `ts-node`).
- Pastikan file konfigurasi dasar seperti `package.json` dan `tsconfig.json` tersusun dengan rapi.

### 2. Konfigurasi Server
- Instal dependency utama untuk framework (karena awalnya mau mencoba ElysiaJS, bisa gunakan `elysia` bersama `@elysiajs/node` atau gunakan framework Node.js native lain seperti Express/Hono jika tidak kompatibel).
- Buat file entry point server (misal: `src/index.ts`).
- Setup endpoint dasar (contoh: `GET /`) untuk memastikan web server berjalan lancar.

### 3. Setup Database (Drizzle ORM & MySQL)
- Instal dependency Drizzle ORM, Drizzle Kit, beserta driver koneksi MySQL (misal: `mysql2`).
- Instal `dotenv` untuk membaca kredensial database dari environment variables (`.env`).
- Buat file konfigurasi Drizzle (`drizzle.config.ts`).
- Buat satu skema tabel dasar (misal: tabel `users`) sebagai contoh awal.
- Siapkan script di `package.json` untuk menjalankan Drizzle Kit (berguna untuk `generate` dan `migrate` database migrations).

### 4. Verifikasi dan Penyelesaian
- Pastikan aplikasi bisa dijalankan dengan perintah development (contoh: `npm run dev` yang memanggil `tsx watch src/index.ts`).
- Uji koneksi ke database MySQL untuk memastikan tidak ada masalah akses.
- Dokumentasikan struktur folder secara ringkas agar tim bisa langsung bekerja.
---
*Catatan untuk implementator: Jangan terlalu fokus pada detail implementasi bisnis logik dulu, fokus utamanya hanya mensetup scaffolding yang clean, agar siap digunakan untuk membuat fitur-fitur baru menggunakan Node.js.*

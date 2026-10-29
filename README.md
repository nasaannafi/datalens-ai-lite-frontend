# DataLens AI Lite — Frontend

Frontend MVP untuk project Sehat Jatim menggunakan React + Vite.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Untuk membuat build produksi:

```bash
npm run build
```

## Status implementasi

- Dashboard bergaya navy/biru sesuai referensi prototipe.
- Kartu statistik, daftar wilayah, detail wilayah, grafik perbandingan, dan panel insight.
- Peta Leaflet dengan marker ilustratif untuk interaksi UI.
- Dataset saat ini masih berupa data sintetis dari `src/data/demoData.js`.
- Marker bukan koordinat fasilitas dan peta belum menggunakan batas administrasi GeoJSON resmi.
- AI generatif belum terhubung; insight adalah ringkasan deskriptif lokal atas data demo.
- Tahun dan indikator pada header saat ini adalah kontrol UI untuk prototipe, bukan pemilih data historis yang terhubung ke dataset.

## Catatan data

Angka dan lokasi demo tidak boleh ditafsirkan sebagai statistik resmi Puskesmas Jawa Timur. Sebelum rilis publik, ganti data demo dengan sumber terverifikasi, cocokkan nama/kode wilayah, lalu gunakan GeoJSON administrasi yang dapat dipertanggungjawabkan.

## Struktur

- `src/App.jsx`: komposisi dashboard
- `src/components/`: sidebar, header, kartu statistik, peta, grafik, dan insight
- `src/data/demoData.js`: data latihan sintetis
- `src/services/dashboardService.js`: transformasi data dashboard
- `src/styles.css`: tema responsif navy/biru

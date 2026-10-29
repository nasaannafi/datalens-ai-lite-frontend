# DataLens AI Lite — Frontend MVP

Frontend awal Sehat Jatim menggunakan React, Vite, JavaScript, Leaflet, React-Leaflet, Recharts, dan CSS.

## Status data
- Semua angka dalam `src/data/demoData.js` adalah data sintetis untuk demo UI, bukan statistik resmi Jawa Timur.
- Titik peta hanya ilustrasi lokasi kota, bukan lokasi fasilitas kesehatan atau batas administrasi resmi.
- Insight dihitung lokal dari data demo. AI generatif dan FastAPI belum terhubung.
- Basemap OpenStreetMap membutuhkan koneksi internet.

## Menjalankan
Prasyarat: Node.js 18+ dan npm.

```bash
npm install
npm run dev
```

Buka URL lokal yang ditampilkan Vite, biasanya http://localhost:5173.

## Uji build
```bash
npm run build
npm run preview
```

## Struktur
- `src/components/`: komponen UI modular
- `src/data/demoData.js`: data contoh
- `src/services/dashboardService.js`: lapisan transformasi data
- `src/App.jsx`: state dan susunan dashboard
- `src/styles.css`: desain responsif

## Integrasi selanjutnya
1. Validasi kolom CSV latihan.
2. Hitung statistik dengan kode dan uji hasilnya.
3. Tambahkan endpoint FastAPI lalu sambungkan melalui service.
4. Cocokkan kode/nama wilayah dengan GeoJSON dari sumber terverifikasi.
5. Ganti titik ilustratif dengan batas wilayah yang faktual.
6. Simpan API key hanya di backend, bukan frontend.

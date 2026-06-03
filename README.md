# Alifa Mauludyah Dzukha — E-Portfolio Guru PPG

E-Portfolio berbasis Vue 3 + Tailwind CSS untuk Praktik Pengalaman Lapangan (PPL).

## 🚀 Cara Menjalankan

### Prasyarat
- Node.js versi 18 ke atas
- npm atau yarn

### Instalasi

```bash
# Clone atau ekstrak proyek
cd alifa-portfolio

# Install dependencies
npm install

# Jalankan dev server
npm run dev
```

Buka browser di `http://localhost:5173`

### Build untuk Production

```bash
npm run build
```

File hasil build ada di folder `dist/`.

---

## 📁 Struktur Proyek

```
alifa-portfolio/
├── public/
│   └── favicon.svg
│   └── alifa-profil.png       ← Letakkan foto Anda di sini!
├── src/
│   ├── components/
│   │   ├── AppNavbar.vue      ← Navigasi (sticky, responsive)
│   │   ├── AppFooter.vue      ← Footer
│   │   ├── HeroSection.vue    ← Hero / Beranda
│   │   ├── ProfilSection.vue  ← Profil & Kompetensi
│   │   ├── RefleksiSection.vue← Jurnal Refleksi PPL
│   │   ├── ModelGuruSection.vue← Visi & Filosofi Guru
│   │   ├── LampiranSection.vue ← Dokumen & Galeri
│   │   └── KontakSection.vue  ← Form Kontak
│   ├── views/
│   │   └── HomeView.vue       ← Halaman Utama
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🖼️ Menambahkan Foto Profil

1. Siapkan foto Anda (format `.png` atau `.jpg`)
2. Rename menjadi `alifa-profil.png`
3. Salin ke folder `public/`

---

## ✏️ Kustomisasi Konten

Semua konten (nama, data diri, refleksi, dll) dapat diubah langsung di masing-masing file `.vue` pada folder `src/components/`.

| File | Konten yang bisa diubah |
|---|---|
| `HeroSection.vue` | Nama, deskripsi, statistik |
| `ProfilSection.vue` | Data diri, riwayat pendidikan, kompetensi |
| `RefleksiSection.vue` | Entri jurnal refleksi PPL |
| `ModelGuruSection.vue` | Filosofi, tokoh inspirasi, kompetensi |
| `LampiranSection.vue` | Daftar dokumen, galeri foto |
| `KontakSection.vue` | Email, nomor HP, media sosial |

---

## 🛠️ Tech Stack

- **Vue 3** — Composition API + `<script setup>`
- **Vue Router 4** — Client-side routing dengan smooth scroll
- **Tailwind CSS 3** — Utility-first styling
- **Vite 5** — Dev server & bundler super cepat
- **Font Awesome 6** — Icon library
- **Google Fonts** — Playfair Display + DM Sans

---

Dibuat dengan ❤️ untuk PPG Prajabatan

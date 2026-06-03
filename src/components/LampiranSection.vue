<template>
  <section id="lampiran" class="py-24 px-6 lg:px-10">
    <div class="max-w-7xl mx-auto">

      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="badge w-fit mx-auto mb-4">
          <i class="fas fa-paperclip text-xs"></i>
          Dokumentasi
        </div>
        <h2 class="section-title">Lampiran & Portofolio</h2>
        <p class="section-subtitle max-w-xl mx-auto">
          Kumpulan dokumen, perangkat pembelajaran, dan dokumentasi kegiatan PPL saya.
        </p>
      </div>

      <!-- Document Categories -->
      <div class="flex flex-wrap justify-center gap-3 mb-10">
        <button
          v-for="cat in categories"
          :key="cat"
          class="font-body text-sm px-5 py-2 rounded-full border transition-all duration-200"
          :class="activeCategory === cat
            ? 'bg-primary text-white border-primary'
            : 'border-primary/20 text-ink-muted hover:border-primary hover:text-primary'"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Document Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        <div
          v-for="doc in filteredDocs"
          :key="doc.title"
          class="card group cursor-pointer"
        >
          <!-- Doc Icon Area -->
          <div
            class="w-full h-32 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden"
            :class="doc.bgClass"
          >
            <i :class="['fas', doc.icon, 'text-4xl', doc.iconColor]"></i>
            <div class="absolute top-2 right-2">
              <span class="font-body text-xs font-bold px-2 py-0.5 bg-white/70 rounded text-ink-muted uppercase">
                {{ doc.type }}
              </span>
            </div>
          </div>

          <!-- Doc Info -->
          <h3 class="font-body text-sm font-semibold text-ink mb-1.5 group-hover:text-primary transition-colors">
            {{ doc.title }}
          </h3>
          <p class="font-body text-xs text-ink-light mb-4">{{ doc.desc }}</p>

          <!-- Download Button -->
          <button class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-primary/20 text-primary text-xs font-semibold hover:bg-primary hover:text-white transition-all duration-200">
            <i class="fas fa-download text-xs"></i>
            Unduh Dokumen
          </button>
        </div>
      </div>

      <!-- Gallery / Foto Kegiatan -->
      <div>
        <h3 class="font-display text-2xl font-bold text-ink text-center mb-8">
          Galeri Kegiatan PPL
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            v-for="(foto, i) in galeri"
            :key="i"
            class="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary-light/20 flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform duration-300 shadow-sm"
          >
            <div class="text-center">
              <i class="fas fa-image text-primary/30 text-3xl mb-2 group-hover:text-primary/60 transition-colors"></i>
              <p class="font-body text-xs text-ink-light group-hover:text-ink transition-colors px-2">{{ foto }}</p>
            </div>
          </div>
        </div>
        <p class="text-center font-body text-xs text-ink-light mt-6 italic">
          * Ganti placeholder di atas dengan foto kegiatan PPL Anda yang sebenarnya
        </p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = ['Semua', 'Perangkat Ajar', 'Asesmen', 'Administrasi', 'Karya Siswa']
const activeCategory = ref('Semua')

const docs = [
  {
    title: 'Modul Ajar – Berpikir Komputasional',
    desc: 'Modul ajar lengkap Kelas X semester 1',
    type: 'PDF',
    icon: 'fa-file-pdf',
    bgClass: 'bg-red-50',
    iconColor: 'text-red-400',
    kategori: 'Perangkat Ajar'
  },
  {
    title: 'RPP – Algoritma dan Pemrograman',
    desc: 'Rencana Pelaksanaan Pembelajaran 2x45 menit',
    type: 'DOCX',
    icon: 'fa-file-word',
    bgClass: 'bg-blue-50',
    iconColor: 'text-blue-400',
    kategori: 'Perangkat Ajar'
  },
  {
    title: 'LKPD – Pemrograman Scratch',
    desc: 'Lembar Kerja Peserta Didik berbasis proyek',
    type: 'PDF',
    icon: 'fa-file-alt',
    bgClass: 'bg-green-50',
    iconColor: 'text-green-500',
    kategori: 'Perangkat Ajar'
  },
  {
    title: 'Soal Ulangan Harian',
    desc: 'Instrumen asesmen sumatif Bab 1-3',
    type: 'DOCX',
    icon: 'fa-clipboard-list',
    bgClass: 'bg-amber-50',
    iconColor: 'text-amber-500',
    kategori: 'Asesmen'
  },
  {
    title: 'Rubrik Penilaian Proyek',
    desc: 'Rubrik penilaian produk digital siswa',
    type: 'XLSX',
    icon: 'fa-table',
    bgClass: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
    kategori: 'Asesmen'
  },
  {
    title: 'Jurnal Mengajar Harian',
    desc: 'Catatan refleksi dan progress mengajar',
    type: 'PDF',
    icon: 'fa-journal-whills',
    bgClass: 'bg-purple-50',
    iconColor: 'text-purple-500',
    kategori: 'Administrasi'
  },
  {
    title: 'Absensi Kelas X-A & X-B',
    desc: 'Rekap kehadiran siswa selama PPL',
    type: 'XLSX',
    icon: 'fa-user-check',
    bgClass: 'bg-sky-50',
    iconColor: 'text-sky-500',
    kategori: 'Administrasi'
  },
  {
    title: 'Portofolio Produk Siswa',
    desc: 'Kumpulan karya terbaik siswa kelas X',
    type: 'PDF',
    icon: 'fa-star',
    bgClass: 'bg-rose-50',
    iconColor: 'text-rose-500',
    kategori: 'Karya Siswa'
  },
  {
    title: 'Video Pembelajaran Informatika',
    desc: 'Tutorial pemrograman Scratch untuk pemula',
    type: 'MP4',
    icon: 'fa-video',
    bgClass: 'bg-indigo-50',
    iconColor: 'text-indigo-500',
    kategori: 'Perangkat Ajar'
  },
]

const filteredDocs = computed(() => {
  if (activeCategory.value === 'Semua') return docs
  return docs.filter(d => d.kategori === activeCategory.value)
})

const galeri = [
  'Kegiatan Mengajar di Kelas',
  'Presentasi Siswa',
  'Praktik Pemrograman',
  'Diskusi Kelompok',
  'Demonstrasi Produk',
  'Konsultasi dengan Guru Pamong',
  'Upacara Bendera',
  'Kegiatan Ekstrakulikuler',
]
</script>

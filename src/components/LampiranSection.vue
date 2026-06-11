<template>
  <section id="lampiran" class="py-24 px-6 lg:px-10">
    <div class="max-w-7xl mx-auto">

      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="badge w-fit mx-auto mb-4">
          <i class="fas fa-paperclip text-xs"></i>
          Dokumentasi
        </div>

        <h2 class="section-title">Artefak</h2>

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
          :class="
            activeCategory === cat
              ? 'bg-primary text-white border-primary'
              : 'border-primary/20 text-ink-muted hover:border-primary hover:text-primary'
          "
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Document Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        <div
          v-for="doc in filteredDocs"
          :key="doc.title"
          class="card group"
        >
          <!-- Preview Video -->
          <video
            v-if="doc.type === 'MP4'"
            controls
            class="w-full h-40 rounded-xl mb-4 object-cover"
          >
            <source :src="doc.fileUrl" type="video/mp4" />
          </video>

          <!-- Icon Preview -->
          <div
            v-else
            class="w-full h-32 rounded-xl flex items-center justify-center mb-4 relative"
            :class="doc.bgClass"
          >
            <i :class="['fas', doc.icon, 'text-4xl', doc.iconColor]"></i>

            <span
              class="absolute top-2 right-2 text-xs font-bold px-2 py-0.5 bg-white/70 rounded text-ink-muted"
            >
              {{ doc.type }}
            </span>
          </div>

          <!-- Info -->
          <h3 class="font-body text-sm font-semibold text-ink mb-1">
            {{ doc.title }}
          </h3>

          <p class="font-body text-xs text-ink-light mb-3">
            {{ doc.desc }}
          </p>

          <!-- Action -->
          <div class="flex gap-2">
            <a
              :href="doc.fileUrl"
              target="_blank"
              class="flex-1 text-center py-2 rounded-lg border border-primary/20 text-primary text-xs font-semibold hover:bg-primary hover:text-white transition"
            >
              Lihat
            </a>

            <a
              :href="doc.fileUrl"
              download
              class="flex-1 text-center py-2 rounded-lg border border-primary/20 text-primary text-xs font-semibold hover:bg-primary hover:text-white transition"
            >
              Unduh
            </a>
          </div>
        </div>
      </div>

<!-- Artefak -->
        <!-- Empat Aspek Utama -->
        <section>
            <h2 class="section-header heading-font text-4xl font-semibold text-teal-800 mb-12 text-center">Analisis Empat Aspek</h2>
            
            <!-- Aspek 1: Kendala -->
            <div class="mb-20">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-10 h-10 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center font-bold text-xl">01</div>
                    <h3 class="heading-font text-3xl font-semibold text-teal-800">Kendala Selama Penyusunan Produk Pembelajaran</h3>
                </div>
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="bg-white p-8 rounded-3xl card-hover border border-teal-100">
                        <h4 class="font-semibold text-teal-700 mb-3">Kendala Teknis</h4>
                        <p class="text-gray-600">Keterbatasan perangkat di laboratorium komputer sekolah dan akses internet yang tidak stabil menjadi tantangan utama dalam mengembangkan materi interaktif.</p>
                    </div>
                    <div class="bg-white p-8 rounded-3xl card-hover border border-teal-100">
                        <h4 class="font-semibold text-teal-700 mb-3">Kendala Pedagogis</h4>
                        <p class="text-gray-600">Variasi tingkat pemahaman siswa terhadap konsep dasar pemrograman memerlukan pendekatan diferensiasi yang lebih intensif.</p>
                    </div>
                    <div class="bg-white p-8 rounded-3xl card-hover border border-teal-100">
                        <h4 class="font-semibold text-teal-700 mb-3">Kendala Waktu</h4>
                        <p class="text-gray-600">Penyeimbangan antara tugas kuliah PPG dan persiapan praktik pengalaman lapangan (PPL) menjadi tekanan tersendiri.</p>
                    </div>
                </div>
            </div>

            <!-- Aspek 2: Teori Pedagogi -->
            <div class="mb-20">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-10 h-10 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center font-bold text-xl">02</div>
                    <h3 class="heading-font text-3xl font-semibold text-teal-800">Teori atau Konsep Pedagogi yang Diadopsi</h3>
                </div>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-white p-8 rounded-3xl card-hover">
                        <h4 class="font-semibold mb-4 text-teal-700">Konstruktivisme (Vygotsky)</h4>
                        <p class="text-gray-600">Siswa membangun pengetahuan melalui pengalaman langsung dan interaksi sosial dengan bantuan scaffolding dari guru.</p>
                    </div>
                    <div class="bg-white p-8 rounded-3xl card-hover">
                        <h4 class="font-semibold mb-4 text-teal-700">Project-Based Learning (PBL)</h4>
                        <p class="text-gray-600">Pembelajaran berbasis proyek nyata yang mendorong siswa memecahkan masalah kontekstual menggunakan teknologi.</p>
                    </div>
                    <div class="bg-white p-8 rounded-3xl card-hover">
                        <h4 class="font-semibold mb-4 text-teal-700">Computational Thinking</h4>
                        <p class="text-gray-600">Mengembangkan kemampuan berpikir komputasional melalui dekomposisi, pola, abstraksi, dan algoritma.</p>
                    </div>
                    <div class="bg-white p-8 rounded-3xl card-hover">
                        <h4 class="font-semibold mb-4 text-teal-700">Pembelajaran Diferensiasi</h4>
                        <p class="text-gray-600">Menyesuaikan konten, proses, dan produk pembelajaran sesuai dengan kebutuhan dan gaya belajar siswa.</p>
                    </div>
                </div>
            </div>

            <!-- Aspek 3: Faktor Keberhasilan -->
            <div class="mb-20">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-10 h-10 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center font-bold text-xl">03</div>
                    <h3 class="heading-font text-3xl font-semibold text-teal-800">Faktor Keberhasilan Penerapan</h3>
                </div>
                <div class="space-y-8">
                    <div class="flex gap-6">
                        <div class="font-mono text-5xl font-bold text-teal-200 w-16 flex-shrink-0">1</div>
                        <div>
                            <h4 class="font-semibold text-xl mb-2">Pendekatan Student-Centered</h4>
                            <p class="text-gray-600">Memberikan kebebasan kepada siswa untuk memilih proyek yang sesuai minat mereka.</p>
                        </div>
                    </div>
                    <div class="flex gap-6">
                        <div class="font-mono text-5xl font-bold text-teal-200 w-16 flex-shrink-0">2</div>
                        <div>
                            <h4 class="font-semibold text-xl mb-2">Kolaborasi dan Peer Tutoring</h4>
                            <p class="text-gray-600">Siswa yang lebih mahir membantu teman-temannya, menciptakan komunitas belajar yang suportif.</p>
                        </div>
                    </div>
                    <div class="flex gap-6">
                        <div class="font-mono text-5xl font-bold text-teal-200 w-16 flex-shrink-0">3</div>
                        <div>
                            <h4 class="font-semibold text-xl mb-2">Umpan Balik Formatif</h4>
                            <p class="text-gray-600">Memberikan feedback secara berkala dan spesifik selama proses pembelajaran.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Aspek 4: Adaptasi -->
            <div>
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-10 h-10 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center font-bold text-xl">04</div>
                    <h3 class="heading-font text-3xl font-semibold text-teal-800">Adaptasi untuk Situasi Kelas Berbeda</h3>
                </div>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-white p-8 rounded-3xl card-hover">
                        <h4 class="font-semibold text-teal-700 mb-3">Strategi Pengelompokan</h4>
                        <p class="text-gray-600">Dapat diubah menjadi kerja kelompok kecil atau proyek individu tergantung ketersediaan perangkat.</p>
                    </div>
                    <div class="bg-white p-8 rounded-3xl card-hover">
                        <h4 class="font-semibold text-teal-700 mb-3">Kompleksitas Materi</h4>
                        <p class="text-gray-600">Materi dasar dapat diperluas dengan studi kasus yang lebih kompleks untuk kelas dengan kemampuan tinggi.</p>
                    </div>
                    <div class="bg-white p-8 rounded-3xl card-hover">
                        <h4 class="font-semibold text-teal-700 mb-3">Moda Pembelajaran</h4>
                        <p class="text-gray-600">Dirancang fleksibel untuk tatap muka, daring, atau blended learning.</p>
                    </div>
                    <div class="bg-white p-8 rounded-3xl card-hover">
                        <h4 class="font-semibold text-teal-700 mb-3">Alat dan Media</h4>
                        <p class="text-gray-600">Dapat diganti dengan tools offline atau platform gratis lain sesuai kondisi sekolah.</p>
                    </div>
                </div>
            </div>
        </section>

<!-- JARAK ANTAR SECTION -->
<div class="mt-24"></div>

      <!-- Gallery -->
      <div>
        <h3 class="font-display text-2xl font-bold text-center mb-8">
          Galeri Karya Siswa & Kegiatan PPL
        </h3>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            v-for="(foto, i) in galeri"
            :key="i"
            class="aspect-square rounded-2xl overflow-hidden relative group shadow-md"
          >
            <img
              :src="foto.gambar"
              :alt="foto.judul"
              class="w-full h-full object-cover transition duration-300 group-hover:scale-105"
            />

            <div
              class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end"
            >
              <p class="text-white text-sm p-3 font-medium">
                {{ foto.judul }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = [
  'Semua',
  'Perangkat Ajar',
  'Asesmen',
  'Siklus',
  'Lampiran 7 & 8',
  'Karya Siswa'
]

const activeCategory = ref('Semua')

const docs = [
  {
    title: 'Modul Ajar – Siklus 1',
    desc: 'Modul ajar lengkap Kelas X semester 1',
    type: 'PDF',
    fileUrl: '/files/Siklus 1 Modul Ajar BAB 4_Proteksi Data di Internet.pdf',
    icon: 'fa-file-pdf',
    bgClass: 'bg-red-50',
    iconColor: 'text-red-400',
    kategori: 'Siklus'
  },
  {
    title: 'Modul Ajar – Siklus 2',
    desc: 'Modul ajar lengkap Kelas X semester 1',
    type: 'PDF',
    fileUrl: '/files/Siklus 2_Modul Ajar BAB 4_Penerapan 2FA.pdf',
    icon: 'fa-file-pdf',
    bgClass: 'bg-red-50',
    iconColor: 'text-red-400',
    kategori: 'Siklus'
  },
  {
    title: 'Modul Ajar – Siklus 3',
    desc: 'Modul ajar lengkap Kelas X semester 1',
    type: 'PDF',
    fileUrl: '/files/Siklus 3_Modul Ajar BAB 5_Dampak Sosial Informatika.pdf',
    icon: 'fa-file-pdf',
    bgClass: 'bg-red-50',
    iconColor: 'text-red-400',
    kategori: 'Siklus'
  },
  {
    title: 'Video Pembelajaran Informatika',
    desc: 'Tutorial Scratch untuk pemula',
    type: 'MP4',
    fileUrl: '/files/video-scratch.mp4',
    icon: 'fa-video',
    bgClass: 'bg-indigo-50',
    iconColor: 'text-indigo-500',
    kategori: 'Perangkat Ajar'
  },
  {
    title: 'Lampiran 7 dan 8',
    desc: 'Penilaian Penyusunan Perangkat Pembelajaran dan Instrumen Penilaian Praktik Mengajar',
    type: 'PDF',
    fileUrl: '/files/Lampiran 7 & 8_Alifa Mauludyah Dzukha.pdf',
    icon: 'fa-file-pdf',
    bgClass: 'bg-indigo-50',
    iconColor: 'text-indigo-500',
    kategori: 'Lampiran 7 & 8'
  }
]

const filteredDocs = computed(() => {
  return activeCategory.value === 'Semua'
    ? docs
    : docs.filter(doc => doc.kategori === activeCategory.value)
})

const galeri = [
  {
    judul: 'Kegiatan Mengajar',
    tanggal: 'Februari 2026',
    deskripsi: 'Melaksanakan kegiatan pembelajaran Informatika di kelas dengan pendekatan pembelajaran aktif dan berpusat pada peserta didik.',
    gambar: '/files/karya1.png'
  },
  {
    judul: 'Presentasi Siswa',
    tanggal: 'Februari 2026',
    deskripsi: 'Peserta didik mempresentasikan hasil diskusi dan pemecahan masalah yang telah dikerjakan secara berkelompok.',
    gambar: '/files/karya2.png'
  },
  {
    judul: 'Praktik Pemrograman',
    tanggal: 'Februari 2026',
    deskripsi: 'Peserta didik melakukan praktik pemrograman dan mengembangkan solusi menggunakan perangkat lunak yang telah dipelajari.',
    gambar: '/files/karya3.png'
  },
  {
    judul: 'Diskusi Kelompok',
    tanggal: 'Maret 2026',
    deskripsi: 'Peserta didik berdiskusi dalam kelompok untuk menganalisis studi kasus dan menyusun solusi yang tepat.',
    gambar: '/files/karya4.png'
  },
  {
    judul: 'Presentasi Hasil Kelompok',
    tanggal: 'Maret 2026',
    deskripsi: 'Setiap kelompok mempresentasikan hasil kerja dan memperoleh umpan balik dari guru serta teman sekelas.',
    gambar: '/files/presentasi_kelompok.jpeg'
  },
  {
    judul: 'Penjelasan Materi',
    tanggal: 'Maret 2026',
    deskripsi: 'Penyampaian materi pembelajaran menggunakan media presentasi interaktif untuk meningkatkan pemahaman peserta didik.',
    gambar: '/files/penjelasan_materi.jpeg'
  },
  {
    judul: 'Penerapan Scaffolding',
    tanggal: 'April 2026',
    deskripsi: 'Guru memberikan bantuan bertahap kepada peserta didik agar mampu menyelesaikan tugas secara mandiri.',
    gambar: '/files/scraffolding.jpeg'
  },
  {
    judul: 'Pembelajaran Berdiferensiasi',
    tanggal: 'April 2026',
    deskripsi: 'Pelaksanaan pembelajaran yang memperhatikan kesiapan belajar, minat, dan profil belajar peserta didik.',
    gambar: '/files/diferensiasi.jpeg'
  }
]
</script>
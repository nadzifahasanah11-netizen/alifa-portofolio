<template>
  <section id="refleksi" class="py-24 px-6 lg:px-10">
    <div class="max-w-7xl mx-auto">

      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="badge w-fit mx-auto mb-4">
          <i class="fas fa-book-open text-xs"></i>
          Refleksi Pembelajaran
        </div>
        <h2 class="section-title">Jurnal Refleksi</h2>
        <p class="section-subtitle max-w-xl mx-auto">
          Catatan perjalanan dan pembelajaran saya selama menjalani Praktik Pengalaman Lapangan (PPL).
        </p>
      </div>

      <!-- Refleksi Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
        <article
          v-for="(refleksi, index) in refleksiList"
          :key="index"
          class="card group cursor-pointer"
        >
          <!-- Icon & Date -->
          <div class="flex items-start justify-between mb-4">
            <div
              class="w-12 h-12 rounded-2xl flex items-center justify-center"
              :class="refleksi.bgClass"
            >
              <i :class="['fas', refleksi.icon, 'text-lg', refleksi.iconColor]"></i>
            </div>
            <span class="font-body text-xs text-ink-light bg-surface px-3 py-1 rounded-full">
              {{ refleksi.tanggal }}
            </span>
          </div>

          <!-- Content -->
          <h3 class="font-display text-lg font-bold text-ink mb-2 group-hover:text-primary transition-colors">
            {{ refleksi.judul }}
          </h3>
          <p class="font-body text-sm text-ink-muted leading-relaxed line-clamp-4">
            {{ refleksi.isi }}
          </p>

          <!-- Footer -->
          <div class="flex items-center gap-2 mt-5 pt-4 border-t border-surface-dark">
            <div class="badge text-[10px]">{{ refleksi.kategori }}</div>
            <span class="ml-auto font-body text-xs text-primary font-semibold group-hover:underline">
              Selengkapnya →
            </span>
          </div>
        </article>
      </div>

      <!-- Insight CTA -->
      <div class="card bg-gradient-to-r from-primary to-primary-dark text-white text-center py-10">
        <i class="fas fa-lightbulb text-3xl mb-4 opacity-80"></i>
        <h3 class="font-display text-2xl font-bold mb-3">Key Takeaway PPL</h3>
        <p class="font-body text-white/80 max-w-2xl mx-auto text-sm leading-relaxed">
          Pengalaman PPL mengajarkan saya bahwa menjadi guru yang baik membutuhkan lebih dari sekadar penguasaan materi —
          dibutuhkan empati, kreativitas, dan kemauan untuk terus belajar bersama siswa setiap harinya.
        </p>
        <a href="#model-guru" class="inline-flex mt-6 bg-white text-primary btn font-semibold text-sm hover:bg-surface">
          Lihat Model Guru Ideal Saya
          <i class="fas fa-arrow-right text-xs"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const refleksiList = [
  {
    judul: 'Pertemuan Pertama yang Mendebarkan',
    tanggal: 'Minggu ke-1',
    kategori: 'Pengalaman Awal',
    icon: 'fa-star',
    bgClass: 'bg-amber-50',
    iconColor: 'text-amber-500',
    isi: 'Hari pertama masuk kelas terasa sangat mendebarkan. Saya menyadari pentingnya membangun rapport dengan siswa sejak awal. Perkenalan yang hangat dan antusias ternyata sangat membantu menciptakan suasana belajar yang nyaman dan kondusif.'
  },
  {
    judul: 'Tantangan Diferensiasi Pembelajaran',
    tanggal: 'Minggu ke-2',
    kategori: 'Strategi Mengajar',
    icon: 'fa-puzzle-piece',
    bgClass: 'bg-blue-50',
    iconColor: 'text-blue-500',
    isi: 'Setiap siswa memiliki kecepatan belajar yang berbeda. Saya belajar bahwa diferensiasi pembelajaran bukan sekadar teori — ia harus dipraktikkan dengan sabar dan kreatif agar semua siswa dapat mencapai tujuan pembelajaran.'
  },
  {
    judul: 'Penggunaan Media Interaktif',
    tanggal: 'Minggu ke-3',
    kategori: 'Inovasi Pembelajaran',
    icon: 'fa-laptop',
    bgClass: 'bg-green-50',
    iconColor: 'text-green-600',
    isi: 'Mengintegrasikan teknologi dalam pembelajaran Informatika terbukti meningkatkan keterlibatan siswa secara signifikan. Platform seperti Canva, Scratch, dan Google Workspace menjadi jembatan antara teori dan praktik nyata.'
  },
  {
    judul: 'Refleksi Evaluasi Formatif',
    tanggal: 'Minggu ke-4',
    kategori: 'Asesmen',
    icon: 'fa-chart-bar',
    bgClass: 'bg-purple-50',
    iconColor: 'text-purple-500',
    isi: 'Penilaian formatif yang berkelanjutan membantu saya memahami pemahaman siswa secara real-time. Kuis singkat, exit ticket, dan diskusi kelompok menjadi alat asesmen yang efektif sekaligus menyenangkan bagi siswa.'
  },
  {
    judul: 'Kolaborasi dengan Guru Pamong',
    tanggal: 'Minggu ke-5',
    kategori: 'Profesionalisme',
    icon: 'fa-handshake',
    bgClass: 'bg-rose-50',
    iconColor: 'text-rose-500',
    isi: 'Bimbingan dari guru pamong sangat berharga. Beliau mengajarkan saya cara mengelola kelas yang efektif, cara berkomunikasi dengan orang tua siswa, dan pentingnya administrasi yang rapi dalam dunia pendidikan.'
  },
  {
    judul: 'Pembelajaran Berbasis Proyek',
    tanggal: 'Minggu ke-6',
    kategori: 'PBL',
    icon: 'fa-project-diagram',
    bgClass: 'bg-teal-50',
    iconColor: 'text-teal-600',
    isi: 'Menerapkan Project-Based Learning untuk materi pemrograman memberikan dampak luar biasa. Siswa lebih termotivasi karena mereka membuat produk nyata yang bisa dibagikan kepada teman-teman dan keluarga mereka.'
  },
]
</script>

<style scoped>
.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

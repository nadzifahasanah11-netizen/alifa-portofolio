<template>
  <section id="refleksi" class="py-24 px-6 lg:px-10 bg-gradient-to-b from-[#F8FAF6] to-[#E8F1E5]">
    <div class="max-w-7xl mx-auto">

      <!-- Header Refleksi Akhir -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 text-sm font-medium text-[#4A7043] mb-6 shadow-sm">
          <i class="fas fa-book-open"></i>
          Refleksi Akhir PPL Terbimbing
        </div>
        
        <h1 class="text-5xl lg:text-6xl font-display font-bold leading-tight text-[#2C3E2F] mb-6">
          Refleksi Akhir<br>Praktik Pengalaman Lapangan Terbimbing
        </h1>
        
        <p class="text-xl text-[#4A7043] mb-4">
          Mahasiswa PPG PPL • Guru Informatika SMAN 1 Salatiga
        </p>
        
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          "Merefleksikan perjalanan menjadi guru profesional melalui pengalaman lapangan terbimbing"
        </p>
      </div>

      <!-- Refleksi Akhir -->
      <div class="mb-20">
        <h2 class="section-title text-center mb-12 text-[#4A7043]">
          Refleksi Akhir Praktik Pengalaman Lapangan Terbimbing
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="card p-8 group">
            <div class="w-14 h-14 bg-[#E8F1E5] rounded-2xl flex items-center justify-center mb-6 text-3xl">📚</div>
            <h3 class="font-display text-2xl font-bold text-[#2C3E2F] mb-4">Apa yang Telah Saya Pelajari</h3>
            <p class="text-gray-600 leading-relaxed">
              Selama tahapan PPL Terbimbing, saya telah mempelajari banyak hal tentang dunia pendidikan, khususnya dalam mengajar mata pelajaran Informatika. Saya belajar menyusun RPP yang efektif, mengelola kelas, diferensiasi pembelajaran, dan memanfaatkan teknologi dalam proses pembelajaran.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="card p-8 group">
            <div class="w-14 h-14 bg-[#E8F1E5] rounded-2xl flex items-center justify-center mb-6 text-3xl">⚡</div>
            <h3 class="font-display text-2xl font-bold text-[#2C3E2F] mb-4">Pengalaman yang Menantang & Solusi</h3>
            <p class="text-gray-600 leading-relaxed">
              Tantangan terbesar adalah mengajar siswa yang kurang tertarik dengan pemrograman. Saya mengatasinya dengan pendekatan kontekstual, menghubungkan materi dengan kehidupan sehari-hari, serta menerapkan Project-Based Learning.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="card p-8 group">
            <div class="w-14 h-14 bg-[#E8F1E5] rounded-2xl flex items-center justify-center mb-6 text-3xl">💬</div>
            <h3 class="font-display text-2xl font-bold text-[#2C3E2F] mb-4">Umpan Balik dan Saran</h3>
            <p class="text-gray-600 leading-relaxed">
              Guru pembimbing memberikan saran untuk meningkatkan teknik bertanya yang lebih mendalam dan lebih banyak menggunakan media interaktif. Saya juga perlu meningkatkan kepercayaan diri dalam manajemen kelas untuk tahap PPL Mandiri.
            </p>
          </div>
        </div>
      </div>

      <!-- Filosofi Mengajar -->
      <div class="mb-20">
        <h2 class="section-title text-center mb-12 text-[#4A7043]">Filosofi Mengajar</h2>
        
        <div class="space-y-8 max-w-4xl mx-auto">
          <div class="card p-8">
            <p class="text-gray-700 leading-relaxed text-lg">
              Saya percaya bahwa setiap siswa memiliki potensi unik yang perlu dikembangkan. Filosofi mengajar saya berpusat pada <strong>student-centered learning</strong>. Siswa bukanlah bejana kosong yang harus diisi, melainkan individu aktif yang membangun pengetahuan melalui pengalaman dan eksplorasi.
            </p>
          </div>

          <div class="card p-8">
            <p class="text-gray-700 leading-relaxed text-lg">
              Terinspirasi dari teori konstruktivisme Jean Piaget dan Lev Vygotsky, saya berkeyakinan bahwa pembelajaran yang bermakna terjadi ketika siswa dapat menghubungkan pengetahuan baru dengan pengalaman sebelumnya. Dalam mengajar Informatika, saya ingin siswa mampu berpikir komputasional dan memecahkan masalah dunia nyata.
            </p>
          </div>

          <div class="card p-8">
            <p class="text-gray-700 leading-relaxed text-lg">
              Nilai-nilai yang saya pegang teguh adalah empati, kesabaran, dan komitmen terhadap pemerataan pendidikan. Menjadi guru profesional berarti terus belajar, berefleksi, serta membentuk generasi muda yang kompeten secara digital dan bertanggung jawab secara moral.
            </p>
          </div>
        </div>
      </div>

      <!-- Jurnal Refleksi Mingguan (Bagian Lama) -->
      <div>
        <h2 class="section-title text-center mb-12 text-[#4A7043]">Jurnal Refleksi Mingguan</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <article
            v-for="(refleksi, index) in refleksiList"
            :key="index"
            class="card group cursor-pointer"
          >
            <div class="flex items-start justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl flex items-center justify-center" :class="refleksi.bgClass">
                <i :class="['fas', refleksi.icon, 'text-lg', refleksi.iconColor]"></i>
              </div>
              <span class="font-body text-xs text-ink-light bg-surface px-3 py-1 rounded-full">
                {{ refleksi.tanggal }}
              </span>
            </div>

            <h3 class="font-display text-lg font-bold text-ink mb-2 group-hover:text-primary transition-colors">
              {{ refleksi.judul }}
            </h3>
            <p class="font-body text-sm text-ink-muted leading-relaxed line-clamp-4">
              {{ refleksi.isi }}
            </p>

            <div class="flex items-center gap-2 mt-5 pt-4 border-t border-surface-dark">
              <div class="badge text-[10px]">{{ refleksi.kategori }}</div>
              <span class="ml-auto font-body text-xs text-primary font-semibold group-hover:underline">
                Selengkapnya →
              </span>
            </div>
          </article>
        </div>
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
.card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(74, 112, 67, 0.08);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(74, 112, 67, 0.12);
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  color: #4A7043;
  position: relative;
}

.section-title:after {
  content: '';
  width: 80px;
  height: 4px;
  background: #A8C4A0;
  display: block;
  margin: 12px auto;
}
</style>
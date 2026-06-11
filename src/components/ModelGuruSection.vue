<template>
  <section id="model-guru" class="py-24 px-6 lg:px-10 bg-white/60 backdrop-blur-sm">
    <div class="max-w-7xl mx-auto">

      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="badge w-fit mx-auto mb-4">
          <i class="fas fa-chalkboard-teacher text-xs"></i>
          Visi & Filosofi
        </div>
        <h2 class="section-title">Model Guru Ideal</h2>
        <p class="section-subtitle max-w-xl mx-auto">
          Gambaran guru yang saya cita-citakan dan sedang saya bangun melalui perjalanan PPG ini.
        </p>
      </div>

      <!-- Misi Profesional -->
      <div class="max-w-3xl mx-auto text-center mb-20">
        <div class="inline-flex items-center gap-2 text-[#4A7043] bg-[#E8F1E5] px-5 py-2 rounded-full text-sm font-medium mb-6">
          <span class="text-xl">🌱</span> Misi Profesional
        </div>
        <p class="text-lg leading-relaxed text-gray-700">
          Menjadi pendidik yang melek teknologi, adaptif terhadap perkembangan zaman dan karakter peserta didik, 
          serta terus belajar, berefleksi, dan berbenah demi menghadirkan pembelajaran yang bermakna, relevan, 
          dan berkelanjutan.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        <!-- Left: Kompetensi yang Dibangun -->
        <div>
          <h3 class="font-display text-3xl font-bold text-[#2C3E2F] mb-8 flex items-center gap-3">
            <span class="text-3xl">🎯</span> Kompetensi yang Dibangun
          </h3>
          
          <div class="space-y-6">
            <div v-for="(komp, i) in kompetensiBaru" :key="i" 
                 class="card p-6 hover:shadow-card transition-all group">
              <div class="flex gap-5">
                <div class="w-10 h-10 rounded-2xl bg-[#E8F1E5] flex items-center justify-center text-2xl flex-shrink-0">
                  {{ komp.emoji }}
                </div>
                <div class="flex-1">
                  <h4 class="font-semibold text-[#2C3E2F] mb-2 group-hover:text-[#4A7043] transition-colors">
                    {{ komp.title }}
                  </h4>
                  <p class="text-gray-600 text-[15px] leading-relaxed">
                    {{ komp.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Nilai Utama + Filosofi -->
        <div class="space-y-8">

          <!-- Nilai Utama -->
          <div class="card p-8">
            <div class="flex items-center gap-3 mb-6">
              <span class="text-3xl">✨</span>
              <h3 class="font-display text-2xl font-bold text-[#2C3E2F]">Nilai Utama</h3>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div v-for="(nilai, i) in nilaiUtama" :key="i" 
                   class="flex items-center gap-3 bg-[#F8FAF6] px-5 py-4 rounded-2xl">
                <span class="text-[#4A7043] text-xl">→</span>
                <span class="font-medium text-[#2C3E2F]">{{ nilai }}</span>
              </div>
            </div>
          </div>

          <!-- Filosofi Mengajar -->
          <div class="card relative overflow-hidden">
            <div class="absolute top-0 right-0 w-40 h-40 bg-[#A8C4A0]/10 rounded-full -translate-x-6 -translate-y-6"></div>
            <div class="relative">
              <div class="badge mb-4">Filosofi Mengajar</div>
              <h3 class="font-display text-2xl font-bold text-ink mb-5">
                "Guru sebagai <span class="text-[#4A7043]">Fasilitator</span> Belajar"
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Saya percaya bahwa tugas utama guru adalah menciptakan lingkungan belajar yang memberdayakan siswa 
                untuk menemukan dan membangun pengetahuan mereka sendiri. Melalui pendekatan <strong>student-centered</strong>, 
                saya berusaha menyalakan semangat belajar dan berpikir kritis pada setiap peserta didik.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const kompetensiBaru = [
  {
    emoji: "💻",
    title: "Literasi Teknologi Pendidikan",
    desc: "Mampu memanfaatkan teknologi digital secara tepat guna untuk mendukung proses pembelajaran, mulai dari perencanaan, pelaksanaan, hingga evaluasi, dengan memperhatikan etika dan keamanan digital."
  },
  {
    emoji: "🔄",
    title: "Desain Pembelajaran Adaptif",
    desc: "Menyusun pembelajaran yang fleksibel, kontekstual, dan berpihak pada peserta didik sesuai kebutuhan, karakter, serta dinamika perkembangan zaman."
  },
  {
    emoji: "🧠",
    title: "Pemahaman Karakter & Perkembangan Peserta Didik",
    desc: "Memahami latar belakang, minat, gaya belajar, dan perkembangan sosial-emosional siswa sebagai dasar pembelajaran yang inklusif."
  },
  {
    emoji: "🚀",
    title: "Integrasi Teknologi & HOTS",
    desc: "Mengintegrasikan teknologi untuk mendorong berpikir kritis, kreatif, kolaboratif, dan reflektif melalui pembelajaran yang relevan dengan kehidupan nyata."
  },
  {
    emoji: "📝",
    title: "Refleksi & Pengembangan Diri Berkelanjutan",
    desc: "Melakukan refleksi rutin, terbuka terhadap umpan balik, dan aktif mengembangkan kompetensi melalui pelatihan dan komunitas belajar."
  },
  {
    emoji: "⚖️",
    title: "Etika & Tanggung Jawab Digital",
    desc: "Menunjukkan sikap profesional dalam pemanfaatan teknologi dengan menjunjung etika, perlindungan data, dan pembentukan karakter digital siswa."
  }
]

const nilaiUtama = [
  "Belajar Sepanjang Hayat",
  "Adaptif",
  "Reflektif",
  "Berpihak pada Peserta Didik",
  "Berorientasi Masa Depan"
]
</script>

<style scoped>
/* Jika belum ada style card & badge, tambahkan ini */
.card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(74, 112, 67, 0.08);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(74, 112, 67, 0.12);
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #E8F1E5;
  color: #4A7043;
  font-size: 0.85rem;
  padding: 4px 14px;
  border-radius: 9999px;
  font-weight: 500;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.75rem;
  color: #2C3E2F;
}
</style>
<template>
  <section id="profil" class="py-24 px-6 lg:px-10 bg-white/60 backdrop-blur-sm">
    <div class="max-w-7xl mx-auto">

      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="badge w-fit mx-auto mb-4">
          <i class="fas fa-user-circle text-xs"></i>
          Tentang Saya
        </div>
        <h2 class="section-title">Profil Saya</h2>
        <p class="section-subtitle max-w-xl mx-auto">
          Mengenal lebih jauh perjalanan akademik dan pengalaman saya sebagai calon guru profesional.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        <!-- Left: Bio Info -->
        <div class="space-y-6">
          <div class="card">
            <h3 class="font-display text-xl font-bold text-ink mb-5 flex items-center gap-2">
              <i class="fas fa-id-card text-primary text-base"></i>
              Data Diri
            </h3>
            <ul class="space-y-4">
              <li v-for="item in bioData" :key="item.label" class="flex items-start gap-4">
                <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i :class="['fas', item.icon, 'text-primary text-xs']"></i>
                </div>
                <div>
                  <p class="font-body text-xs text-ink-light mb-0.5">{{ item.label }}</p>
                  <p class="font-body text-sm font-semibold text-ink">{{ item.value }}</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Keahlian -->
          <div class="card">
            <h3 class="font-display text-xl font-bold text-ink mb-5 flex items-center gap-2">
              <i class="fas fa-tools text-primary text-base"></i>
              Kompetensi Mengajar
            </h3>
            <div class="space-y-3">
              <div v-for="skill in skills" :key="skill.name">
                <div class="flex justify-between mb-1.5">
                  <span class="font-body text-sm text-ink-muted">{{ skill.name }}</span>
                  <span class="font-body text-xs font-semibold text-primary">{{ skill.percent }}%</span>
                </div>
                <div class="w-full bg-primary/10 rounded-full h-1.5">
                  <div
                    class="bg-gradient-to-r from-primary to-primary-light h-1.5 rounded-full transition-all duration-1000"
                    :style="{ width: skill.percent + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Riwayat Pendidikan -->
        <div class="space-y-6">
          <div class="card">
            <h3 class="font-display text-xl font-bold text-ink mb-6 flex items-center gap-2">
              <i class="fas fa-graduation-cap text-primary text-base"></i>
              Riwayat Pendidikan
            </h3>
            <div class="relative">
              <!-- Timeline line -->
              <div class="absolute left-4 top-0 bottom-0 w-px bg-primary/20"></div>
              <div class="space-y-6">
                <div v-for="edu in education" :key="edu.year" class="relative pl-12">
                  <!-- Dot -->
                  <div class="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-primary border-2 border-surface -translate-x-1/2"></div>
                  <div class="badge w-fit mb-2 text-[10px]">{{ edu.year }}</div>
                  <h4 class="font-body text-sm font-semibold text-ink">{{ edu.institution }}</h4>
                  <p class="font-body text-xs text-ink-light mt-0.5">{{ edu.major }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Motivasi -->
          <div class="card bg-gradient-to-br from-primary/5 to-primary-light/5 border border-primary/10">
            <div class="flex gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-quote-left text-primary text-sm"></i>
              </div>
              <h3 class="font-display text-lg font-bold text-ink self-center">Motivasi Menjadi Guru</h3>
            </div>
            <p class="font-body text-sm text-ink-muted leading-relaxed italic">
              "Saya percaya bahwa pendidikan adalah investasi terbaik untuk masa depan bangsa.
              Melalui pembelajaran Informatika, saya ingin menginspirasi siswa untuk menjadi
              pemikir kritis dan inovatif yang siap menghadapi tantangan era digital."
            </p>
            <p class="font-body text-xs text-primary font-semibold mt-3">— Alifa Mauludyah Dzukha</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const bioData = [
  { label: 'Nama Lengkap', value: 'Alifa Mauludyah Dzukha', icon: 'fa-user' },
  { label: 'Asal Daerah', value: 'Kabupaten Kudus, Jawa Tengah', icon: 'fa-map-marker-alt' },
  { label: 'Program', value: 'PPG (Pendidikan Profesi Guru)', icon: 'fa-graduation-cap' },
  { label: 'Sekolah Praktik', value: 'SMAN 1 Salatiga', icon: 'fa-school' },
  { label: 'Mata Pelajaran', value: 'Informatika (Kelas X)', icon: 'fa-laptop-code' },
  { label: 'Status', value: 'Mahasiswa PPG Aktif', icon: 'fa-star' },
]

const skills = [
  { name: 'Perencanaan Pembelajaran (RPP/Modul Ajar)', percent: 88 },
  { name: 'Penguasaan Materi Informatika', percent: 92 },
  { name: 'Teknologi & Media Pembelajaran', percent: 85 },
  { name: 'Manajemen Kelas', percent: 80 },
  { name: 'Evaluasi & Asesmen Siswa', percent: 83 },
]

const education = [
  { year: '2024 – Sekarang', institution: 'Universitas Negeri Semarang', major: 'Program PPG Prajabatan – Pendidikan Informatika' },
  { year: '2019 – 2023', institution: 'Universitas Diponegoro', major: 'S1 Ilmu Komputer / Teknik Informatika' },
  { year: '2016 – 2019', institution: 'SMA Negeri 1 Kudus', major: 'IPA' },
]
</script>

<template>
  <section
    id="beranda"
    class="min-h-screen flex items-center pt-24 pb-16 px-6 lg:px-10"
  >
    <div class="max-w-7xl mx-auto w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Left: Text Content -->
        <div class="space-y-6 animate-fade-up">

          <!-- Badge -->
          <div class="badge w-fit">
            <span class="w-2 h-2 rounded-full bg-primary animate-pulse inline-block"></span>
            PPG Mahasiswa •  Universitas Kristen Satya Wacana
          </div>

          <!-- Heading -->
          <h1 class="font-display text-4xl md:text-5xl xl:text-6xl leading-tight text-ink">
            Hello, I'm
            <br />
            <span class="text-gradient">Alifa Mauludyah</span>
            <br />
            <span class="text-gradient">Dzukha</span>
          </h1>

          <!-- Role -->
          <p class="font-body text-lg md:text-xl text-primary font-semibold tracking-wide">
            Mahasiswa PPG PPL &bull; Guru Informatika SMAN 1 Salatiga
          </p>

          <!-- Description -->
          <p class="font-body text-ink-muted text-base md:text-lg leading-relaxed max-w-lg">
            Berasal dari Kabupaten Kudus, Jawa Tengah. Saat ini saya sedang menjalani
            Praktik Pengalaman Lapangan sebagai guru mata pelajaran Informatika kelas X
            di SMAN 1 Salatiga. Portfolio ini menjadi wadah refleksi awal perjalanan
            saya menjadi guru profesional.
          </p>

          <!-- Stats -->
          <div class="flex flex-wrap gap-6 pt-2">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div class="font-display text-2xl font-bold text-primary">{{ stat.value }}</div>
              <div class="font-body text-xs text-ink-light mt-0.5">{{ stat.label }}</div>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex flex-wrap gap-4 pt-2">
            <a href="#profil" class="btn btn-primary">
              <i class="fas fa-user text-xs"></i>
              Lihat Profil Lengkap
            </a>
            <a href="#refleksi" class="btn btn-outline">
              <i class="fas fa-book text-xs"></i>
              Baca Refleksi
            </a>
          </div>

        </div>

        <!-- Right: Photo -->
        <div class="relative flex justify-center lg:justify-end animate-fade-in">

          <!-- Decorative circles -->
          <div class="absolute w-[480px] h-[480px] rounded-full bg-gradient-to-br from-primary/10 to-primary-light/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div class="absolute w-[380px] h-[380px] rounded-full border border-primary/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_30s_linear_infinite]"></div>

          <!-- Floating dot accents -->
          <div class="absolute top-10 right-8 w-3 h-3 rounded-full bg-primary/40 animate-float"></div>
          <div class="absolute bottom-16 left-4 w-5 h-5 rounded-full bg-primary-light/30 animate-float" style="animation-delay: 2s;"></div>
          <div class="absolute top-1/3 left-0 w-2 h-2 rounded-full bg-primary/25 animate-float" style="animation-delay: 4s;"></div>

          <!-- Photo card -->
          <div class="relative z-10 animate-float">
            <img
              src="/alifa-profil.png"
              alt="Alifa Mauludyah Dzukha"
              class="w-full max-w-[400px] rounded-3xl shadow-card object-cover"
              @error="handleImgError"
            />

            <!-- Floating info card -->
            <div class="absolute -bottom-4 -left-8 bg-white rounded-2xl shadow-card px-5 py-4 flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <i class="fas fa-chalkboard-teacher text-primary text-sm"></i>
              </div>
              <div>
                <p class="font-body text-xs text-ink-light">Mengajar di</p>
                <p class="font-body text-sm font-semibold text-ink">SMAN 1 Salatiga</p>
              </div>
            </div>

            <!-- Subject badge -->
            <div class="absolute -top-4 -right-6 bg-primary rounded-2xl shadow-card px-4 py-3 text-white">
              <div class="flex items-center gap-2">
                <i class="fas fa-laptop-code text-sm"></i>
                <span class="font-body text-xs font-semibold">Informatika</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: 'X', label: 'Kelas Ajar' },
  { value: 'PPG', label: 'Program' },
  { value: 'UKSW', label: 'Universitas' },
]

const handleImgError = (e) => {
  e.target.src = 'https://via.placeholder.com/400x520/2C7A6F/FFFFFF?text=Alifa+Mauludyah'
}
</script>

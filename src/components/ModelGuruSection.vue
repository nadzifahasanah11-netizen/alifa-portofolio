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
          Gambaran guru ideal yang saya jadikan inspirasi dan panduan dalam perjalanan profesional saya.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

        <!-- Left: Qualities -->
        <div class="space-y-4">
          <div
            v-for="(quality, i) in qualities"
            :key="i"
            class="flex items-start gap-4 p-5 rounded-2xl bg-white shadow-sm border border-primary/8 hover:border-primary/20 hover:shadow-card transition-all duration-300 group"
          >
            <div class="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/15 flex items-center justify-center flex-shrink-0 transition-colors">
              <i :class="['fas', quality.icon, 'text-primary text-lg']"></i>
            </div>
            <div>
              <h3 class="font-body text-base font-semibold text-ink mb-1">{{ quality.title }}</h3>
              <p class="font-body text-sm text-ink-muted leading-relaxed">{{ quality.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Right: Philosophy Card -->
        <div class="space-y-6">
          <div class="card relative overflow-hidden">
            <!-- Decorative bg -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-4 -translate-y-4"></div>
            <div class="relative">
              <div class="badge mb-4">Filosofi Mengajar</div>
              <h3 class="font-display text-2xl font-bold text-ink mb-4">
                "Guru sebagai <span class="text-gradient">Fasilitator</span> Belajar"
              </h3>
              <p class="font-body text-sm text-ink-muted leading-relaxed mb-4">
                Saya percaya bahwa tugas utama guru bukan sekadar mentransfer pengetahuan,
                tetapi menciptakan lingkungan di mana siswa dapat menemukan dan mengonstruksi
                pengetahuannya sendiri melalui pengalaman yang bermakna.
              </p>
              <p class="font-body text-sm text-ink-muted leading-relaxed">
                Dengan pendekatan <strong class="text-ink">student-centered learning</strong>, 
                setiap siswa dipandang sebagai individu unik dengan potensi yang luar biasa —
                tugas kita adalah menyalakan percikan semangat belajar itu.
              </p>
            </div>
          </div>

          <!-- Model Inspirasi -->
          <div class="card">
            <h3 class="font-body text-base font-semibold text-ink mb-4 flex items-center gap-2">
              <i class="fas fa-star text-primary text-sm"></i>
              Tokoh Pendidik yang Menginspirasi
            </h3>
            <div class="space-y-3">
              <div
                v-for="tokoh in tokohInspirasi"
                :key="tokoh.name"
                class="flex items-center gap-3 p-3 rounded-xl bg-surface hover:bg-surface-dark transition-colors"
              >
                <div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-xs font-bold font-display flex-shrink-0">
                  {{ tokoh.name.charAt(0) }}
                </div>
                <div>
                  <p class="font-body text-sm font-semibold text-ink">{{ tokoh.name }}</p>
                  <p class="font-body text-xs text-ink-light">{{ tokoh.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Kompetensi Grid -->
      <div>
        <h3 class="font-display text-2xl font-bold text-ink text-center mb-8">
          4 Kompetensi Guru Profesional
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="komp in kompetensi"
            :key="komp.title"
            class="card text-center group hover:bg-primary hover:text-white transition-all duration-300"
          >
            <div class="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-white/10 flex items-center justify-center mx-auto mb-4 transition-colors">
              <i :class="['fas', komp.icon, 'text-primary text-xl group-hover:text-white transition-colors']"></i>
            </div>
            <h4 class="font-body text-sm font-bold text-ink group-hover:text-white mb-2 transition-colors">
              {{ komp.title }}
            </h4>
            <p class="font-body text-xs text-ink-muted group-hover:text-white/75 leading-relaxed transition-colors">
              {{ komp.desc }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const qualities = [
  {
    icon: 'fa-heart',
    title: 'Empati & Kepedulian',
    desc: 'Memahami kondisi dan kebutuhan setiap siswa secara individual untuk menciptakan hubungan yang autentik dan suportif.'
  },
  {
    icon: 'fa-lightbulb',
    title: 'Inovatif & Kreatif',
    desc: 'Terus mengembangkan metode dan media pembelajaran yang menarik, relevan, dan sesuai perkembangan zaman digital.'
  },
  {
    icon: 'fa-sync-alt',
    title: 'Reflektif & Adaptif',
    desc: 'Selalu merefleksikan praktik mengajar dan beradaptasi berdasarkan kebutuhan siswa serta perkembangan pendidikan.'
  },
  {
    icon: 'fa-users',
    title: 'Kolaboratif',
    desc: 'Membangun kerjasama yang baik dengan sesama guru, orang tua, dan komunitas untuk mendukung perkembangan siswa secara holistik.'
  },
]

const tokohInspirasi = [
  { name: 'Ki Hajar Dewantara', desc: 'Ing ngarsa sung tuladha, ing madya mangun karsa' },
  { name: 'Paulo Freire', desc: 'Pendidikan sebagai praktik kebebasan' },
  { name: 'John Dewey', desc: 'Learning by doing — belajar melalui pengalaman' },
]

const kompetensi = [
  {
    icon: 'fa-book',
    title: 'Pedagogik',
    desc: 'Memahami dan menerapkan teori pembelajaran yang berpusat pada siswa.'
  },
  {
    icon: 'fa-brain',
    title: 'Profesional',
    desc: 'Menguasai materi Informatika secara mendalam dan berkelanjutan.'
  },
  {
    icon: 'fa-user-circle',
    title: 'Kepribadian',
    desc: 'Menjadi teladan dalam sikap, etika, dan karakter bagi siswa.'
  },
  {
    icon: 'fa-network-wired',
    title: 'Sosial',
    desc: 'Berkomunikasi efektif dengan seluruh pemangku kepentingan pendidikan.'
  },
]
</script>

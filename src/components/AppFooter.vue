<template>
  <footer class="bg-ink text-white py-12 px-6 lg:px-10">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#beranda" class="font-display text-2xl font-bold text-white">
            Alifa<span class="text-primary-light">.</span>
          </a>
          <p class="font-body text-sm text-white/50 mt-1">E-Portfolio Guru PPG | SMAN 1 Salatiga</p>
        </div>

        <div class="flex flex-wrap gap-6 justify-center">
          <a v-for="link in footerLinks" :key="link" :href="`#${link.toLowerCase().replace(' ', '-')}`"
            class="font-body text-sm text-white/60 hover:text-white transition-colors">
            {{ link }}
          </a>
        </div>

        <p class="font-body text-xs text-white/40 text-center md:text-right">
          © {{ new Date().getFullYear() }} Alifa Mauludyah Dzukha<br />
          Dibuat dengan ❤️ untuk PPG
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const footerLinks = ['Beranda', 'Profil', 'Refleksi', 'Model Guru', 'Lampiran']
</script>

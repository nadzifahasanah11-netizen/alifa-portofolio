<template>
  <header
    class="fixed top-0 w-full z-50 transition-all duration-300"
    :class="isScrolled
      ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-primary/10'
      : 'bg-transparent'"
  >
    <nav class="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

      <!-- Logo -->
      <a href="#beranda" class="font-display text-2xl font-bold text-primary tracking-tight">
        Alifa<span class="text-primary-dark">.</span>
      </a>

      <!-- Desktop Nav -->
      <ul class="hidden md:flex items-center gap-8 list-none">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="font-body text-sm font-500 text-ink-muted hover:text-primary transition-colors duration-200 relative group"
          >
            {{ link.label }}
            <span class="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </ul>

      <!-- CTA Button -->
      <a href="#kontak" class="hidden md:inline-flex btn btn-primary text-sm">
        <i class="fas fa-envelope text-xs"></i>
        Hubungi Saya
      </a>

      <!-- Mobile Hamburger -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-2"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <span
          class="w-6 h-0.5 bg-ink rounded-full transition-all duration-300"
          :class="mobileOpen ? 'rotate-45 translate-y-2' : ''"
        ></span>
        <span
          class="w-6 h-0.5 bg-ink rounded-full transition-all duration-300"
          :class="mobileOpen ? 'opacity-0' : ''"
        ></span>
        <span
          class="w-6 h-0.5 bg-ink rounded-full transition-all duration-300"
          :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''"
        ></span>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div
        v-if="mobileOpen"
        class="md:hidden bg-white border-t border-primary/10 px-6 py-5 flex flex-col gap-4"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-ink-muted font-body font-500 text-sm hover:text-primary transition-colors"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </a>
        <a href="#kontak" class="btn btn-primary text-sm w-fit" @click="mobileOpen = false">
          <i class="fas fa-envelope text-xs"></i>
          Hubungi Saya
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#profil', label: 'Profil' },
  { href: '#refleksi', label: 'Refleksi' },
  { href: '#model-guru', label: 'Model Guru' },
  { href: '#lampiran', label: 'Lampiran' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

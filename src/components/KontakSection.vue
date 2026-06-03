<template>
  <section id="kontak" class="py-24 px-6 lg:px-10 bg-white/60 backdrop-blur-sm">
    <div class="max-w-7xl mx-auto">

      <div class="text-center mb-16">
        <div class="badge w-fit mx-auto mb-4">
          <i class="fas fa-envelope text-xs"></i>
          Kontak
        </div>
        <h2 class="section-title">Hubungi Saya</h2>
        <p class="section-subtitle max-w-lg mx-auto">
          Jangan ragu untuk menghubungi saya jika ada pertanyaan, kolaborasi, atau sekadar ingin berdiskusi.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

        <!-- Contact Info -->
        <div class="space-y-6">
          <div class="card">
            <h3 class="font-display text-xl font-bold text-ink mb-6">Informasi Kontak</h3>
            <div class="space-y-4">
              <a
                v-for="contact in contacts"
                :key="contact.label"
                :href="contact.href"
                class="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
              >
                <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <i :class="['fas', contact.icon, 'text-primary text-sm group-hover:text-white transition-colors']"></i>
                </div>
                <div>
                  <p class="font-body text-xs text-ink-light">{{ contact.label }}</p>
                  <p class="font-body text-sm font-semibold text-ink group-hover:text-primary transition-colors">{{ contact.value }}</p>
                </div>
              </a>
            </div>
          </div>

          <!-- Social Media -->
          <div class="card">
            <h3 class="font-body text-base font-semibold text-ink mb-4">Ikuti Saya</h3>
            <div class="flex gap-3">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.href"
                :title="social.name"
                class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200"
              >
                <i :class="['fab', social.icon, 'text-sm']"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="card">
          <h3 class="font-display text-xl font-bold text-ink mb-6">Kirim Pesan</h3>
          <form class="space-y-4" @submit.prevent="handleSubmit">
            <div>
              <label class="block font-body text-xs font-semibold text-ink-muted mb-1.5 uppercase tracking-wider">
                Nama Lengkap
              </label>
              <input
                v-model="form.nama"
                type="text"
                placeholder="Masukkan nama Anda"
                class="w-full px-4 py-3 rounded-xl border border-primary/15 bg-surface text-ink text-sm font-body placeholder-ink-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
              />
            </div>
            <div>
              <label class="block font-body text-xs font-semibold text-ink-muted mb-1.5 uppercase tracking-wider">
                Email
              </label>
              <input
                v-model="form.email"
                type="email"
                placeholder="email@contoh.com"
                class="w-full px-4 py-3 rounded-xl border border-primary/15 bg-surface text-ink text-sm font-body placeholder-ink-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
              />
            </div>
            <div>
              <label class="block font-body text-xs font-semibold text-ink-muted mb-1.5 uppercase tracking-wider">
                Pesan
              </label>
              <textarea
                v-model="form.pesan"
                rows="4"
                placeholder="Tuliskan pesan Anda di sini..."
                class="w-full px-4 py-3 rounded-xl border border-primary/15 bg-surface text-ink text-sm font-body placeholder-ink-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
              ></textarea>
            </div>

            <!-- Success message -->
            <div v-if="submitted" class="flex items-center gap-2 text-green-600 text-sm font-body bg-green-50 px-4 py-3 rounded-xl">
              <i class="fas fa-check-circle"></i>
              Pesan berhasil dikirim! Terima kasih 🎉
            </div>

            <button type="submit" class="btn btn-primary w-full justify-center">
              <i class="fas fa-paper-plane text-xs"></i>
              Kirim Pesan
            </button>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const submitted = ref(false)
const form = ref({ nama: '', email: '', pesan: '' })

const contacts = [
  { label: 'Email', value: 'alifa.mauludyah@example.com', href: 'mailto:alifa.mauludyah@example.com', icon: 'fa-envelope' },
  { label: 'WhatsApp', value: '+62 8xx-xxxx-xxxx', href: '#', icon: 'fa-phone' },
  { label: 'Lokasi', value: 'Salatiga, Jawa Tengah', href: '#', icon: 'fa-map-marker-alt' },
  { label: 'Institusi', value: 'SMAN 1 Salatiga', href: '#', icon: 'fa-school' },
]

const socials = [
  { name: 'Instagram', icon: 'fa-instagram', href: '#' },
  { name: 'LinkedIn', icon: 'fa-linkedin-in', href: '#' },
  { name: 'Twitter/X', icon: 'fa-twitter', href: '#' },
  { name: 'YouTube', icon: 'fa-youtube', href: '#' },
]

const handleSubmit = () => {
  if (form.value.nama && form.value.email && form.value.pesan) {
    submitted.value = true
    form.value = { nama: '', email: '', pesan: '' }
    setTimeout(() => (submitted.value = false), 5000)
  }
}
</script>

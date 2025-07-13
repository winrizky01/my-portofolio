<template>
  <section class="mt-12 max-w-4xl mx-auto py-12 px-6">
    <router-link to="/projects" class="text-blue-600 hover:underline">&larr; Kembali</router-link>
    <div v-if="project" class="mt-6">
      <h1 class="text-3xl font-bold mb-4">{{ project.title }}</h1>
      <img :src="project.image" class="rounded mb-6" />
      <p class="text-gray-700 leading-relaxed">{{ project.detail }}</p>
      <div class="mt-4">
        <a :href="project.github" target="_blank" class="text-blue-600 hover:underline">Lihat di GitHub</a>
      </div>
    </div>
    <div v-else>
      <p>Proyek tidak ditemukan.</p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const allProjects = [
  {
    slug: 'inventory-app',
    title: 'Aplikasi Inventory',
    image: 'https://via.placeholder.com/800x400',
    detail: 'Aplikasi inventory ini dibangun menggunakan Vue.js dan Laravel...',
    github: 'https://github.com/example/inventory-app'
  },
  {
    slug: 'landing-page-produk',
    title: 'Landing Page Produk',
    image: 'https://via.placeholder.com/800x400',
    detail: 'Landing page ini menggunakan Tailwind CSS dan Vite...',
    github: 'https://github.com/example/landing-page'
  }
]

const project = computed(() => allProjects.find(p => p.slug === route.params.slug))
</script>

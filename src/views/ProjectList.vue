<template>
  <section class="mt-12 py-12 max-w-6xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Semua Proyek</h1>
    <div class="grid md:grid-cols-2 gap-6">
      <div v-for="project in projects" :key="project.slug" class="p-4 border rounded hover:shadow">
        <router-link :to="`/projects/${project.slug}`" class="block">
          <img :src="project.image" alt="" class="rounded mb-2" />
          <h2 class="text-xl font-semibold">{{ project.title }}</h2>
          <p class="text-sm text-gray-600">{{ project.description }}</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    slug: 'inventory-app',
    title: 'Aplikasi Inventory',
    description: 'Sistem pencatatan stok masuk/keluar untuk UKM.',
    image: 'https://via.placeholder.com/300x150'
  },
  {
    slug: 'landing-page-produk',
    title: 'Landing Page Produk',
    description: 'Desain landing page responsive untuk promosi online.',
    image: 'https://via.placeholder.com/300x150'
  }
]
</script>

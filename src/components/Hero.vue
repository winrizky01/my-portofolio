<template>
  <section class="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-white shadow-sm">
    <h1 class="text-4xl md:text-55xl font-bold mb-4">{{ name }}</h1>
    <p class="text-xl text-gray-600 mb-6">{{ role }}</p>
    <a href="#projects" class="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
      Lihat Proyek Saya
    </a>
  </section>
</template>

<script setup>
defineProps({
  name: String,
  role: String
})
</script>
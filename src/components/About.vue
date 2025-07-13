<template>
  <section id="about" class="py-16 px-6 max-w-4xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-12">👨‍💻 Tentang Saya</h2>
    <p class="text-gray-700 leading-relaxed">{{ about }}</p>
  </section>
</template>

<script setup>
defineProps({
  about: String
})
</script>
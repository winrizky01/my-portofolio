<template>
  <nav class="bg-white shadow-md py-4 px-6 fixed top-0 left-0 right-0 z-50">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <router-link to="/" class="text-xl font-bold text-blue-600">LumiForge</router-link>
      <ul class="flex space-x-6 text-gray-700">
        <li>
          <router-link to="/" class="hover:text-blue-600" exact>Beranda</router-link>
        </li>
        <li>
          <router-link to="/projects" class="hover:text-blue-600">Proyek</router-link>
        </li>
        <li>
          <a href="#skills" class="hover:text-blue-600">Skill</a>
        </li>
        <li>
          <a href="#contact" class="hover:text-blue-600">Kontak</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
</script>

<template>
  <section id="projects" class="py-16 px-6 bg-gray-50 text-gray-800">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8">📁 Proyek Saya</h2>

      <Swiper
        :modules="modules"
        :navigation="true"
        :slides-per-view="1"
        :space-between="20"
        :breakpoints="{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }"
        :loop="true"
        :autoplay="{ delay: 3500 }"
        class="mySwiper"
      >
        <SwiperSlide v-for="(project, index) in projects" :key="index">
          <div class="bg-white shadow-md rounded-xl overflow-hidden">
            <img :src="project.image" alt="" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">{{ project.title }}</h3>
              <p class="text-sm text-gray-600">{{ project.description }}</p>
              <router-link
                :to="`/projects/${project.slug}`"
                class="inline-block mt-3 text-blue-600 text-sm hover:underline"
              >
                Lihat Detail →
              </router-link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

const projects = [
  {
    slug: 'inventory-app',
    title: 'Aplikasi Inventory',
    description: 'Sistem pencatatan stok masuk/keluar untuk UKM.',
    image: 'https://via.placeholder.com/600x300'
  },
  {
    slug: 'landing-page-produk',
    title: 'Landing Page Produk',
    description: 'Desain landing page responsive untuk promosi online.',
    image: 'https://via.placeholder.com/600x300'
  },
  {
    slug: 'erp-mini',
    title: 'ERP Mini',
    description: 'Sistem ERP sederhana untuk pembelian, penjualan, produksi.',
    image: 'https://via.placeholder.com/600x300'
  },
  {
    slug: 'erp-mini',
    title: 'ERP Mini',
    description: 'Sistem ERP sederhana untuk pembelian, penjualan, produksi.',
    image: 'https://via.placeholder.com/600x300'
  }
]

// Swiper plugin register
const modules = [Navigation, Autoplay]

</script>

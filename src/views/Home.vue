<template>
  <div class="pt-24 bg-gray-50 text-gray-800 font-sans">
    <PortfolioLanding />
    <About :about="about" />
    <Projects :projects="projects" />
    <Skills :skills="skills" />
    <ContactForm @submit="handleForm" />
    <Footer />
  </div>
</template>

<script setup>
import PortfolioLanding from '../components/PortfolioLanding.vue'
import About from '../components/About.vue'
import Projects from '../components/Projects.vue'
import Skills from '../components/Skills.vue'
import ContactForm from '../components/ContactForm.vue'
import Footer from '../components/Footer.vue'

const about = 'Saya berpengalaman di full-stack development. Untuk desain UI/UX, saya menggunakan pendekatan berbasis komponen modern seperti Tailwind CSS dan desain open-source terbaik untuk memastikan kualitas visual aplikasi.'

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

const skills = ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Tailwind CSS', 'Laravel']

const handleForm = (formData) => {
  alert(`Terima kasih, ${formData.name}! Pesan Anda sudah dikirim.`)
}
</script>

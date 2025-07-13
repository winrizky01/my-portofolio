<template>
  <section id="contact" class="bg-white py-16 px-6 max-w-3xl mx-auto">
    <h2 class="text-3xl font-semibold mb-4 text-center">Hubungi Saya</h2>
    <form class="space-y-4 mt-6" @submit.prevent="onSubmit">
      <input type="text" v-model="form.name" placeholder="Nama" class="w-full p-3 border rounded" />
      <input type="email" v-model="form.email" placeholder="Email" class="w-full p-3 border rounded" />
      <textarea v-model="form.message" placeholder="Pesan" rows="5" class="w-full p-3 border rounded"></textarea>
      <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
        Kirim
      </button>
    </form>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['submit'])

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const onSubmit = () => {
  emit('submit', { ...form })
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>
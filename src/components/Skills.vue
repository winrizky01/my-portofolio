<template>
  <section id="skills" class="py-16 px-6 bg-white text-gray-800">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">🛠️ Skill</h2>

      <!-- Grid 4 kolom -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(group, index) in skillGroups"
          :key="index"
          class="bg-white shadow-sm border rounded-lg p-4 transition hover:shadow-md hover:scale-[1.02] transform duration-300"
        >
          <h3 class="text-lg font-semibold mb-2">{{ group.title }}</h3>
          <ul class="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li v-for="(item, i) in group.items" :key="i">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillGroups = [
  {
    title: '🧩 Backend',
    items: [
      'PHP', 'Laravel', 'REST API',
      'MySQL', 'PostgreSQL',
      'Authentication', 'Middleware'
    ]
  },
  {
    title: '🖥️ Frontend',
    items: [
      'Vue.js', 'JavaScript',
      'HTML & CSS', 'Tailwind CSS',
      'Axios', 'Vue Router'
    ]
  },
  {
    title: '🔧 Tools & DevOps',
    items: [
      'Git', 'GitHub', 'Postman',
      'Docker (basic)', 'VS Code',
      'CLI', 'phpMyAdmin'
    ]
  },
  {
    title: '💬 Soft Skills',
    items: [
      'Problem Solving', 'Analytical Thinking',
      'Team Collaboration', 'Dokumentasi Teknis'
    ]
  }
]
</script>

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectList from '../views/ProjectList.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'Projects', component: ProjectList },
  { path: '/projects/:slug', name: 'ProjectDetail', component: ProjectDetail, props: true }
]

export default createRouter({
  history: createWebHistory(),
  routes
})

// Importa a função createRouter do pacote Vue-Router
import { createRouter, createWebHistory } from 'vue-router'

// Importando componente
import HomeContent from '../components/HomePage/HomeContent.vue'

// Cria a intância da rota
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'Home', component: HomeContent },
    { path: '/:notFound(.*)', redirect: '/home' },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition)
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0 }
  },
})

export default router

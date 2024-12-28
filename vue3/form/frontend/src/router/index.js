import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:  import('../views/Home.vue'),
    },
    {
      path: '/forms/:id',
      name: 'application',
      component:  import('../views/Application.vue'),
    },
  ],
})

export default router

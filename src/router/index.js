import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ProxyView from '@/views/ProxyView.vue'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ui',
      component: DefaultLayout,
      children: [
        {
          path: 'dashboard',
          component: DashboardView,
        },
        {
          path: 'proxy',
          component: ProxyView,
        }
      ],
    }
  ],
})

export default router

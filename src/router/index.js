import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import DashboardView from '@/views/DashboardView.vue'
import RequestMappingView from '@/views/RequestMappingView.vue'

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
          path: 'mapping',
          component: RequestMappingView,
        }
      ],
    }
  ],
})

export default router

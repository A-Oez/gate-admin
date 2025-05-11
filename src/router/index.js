import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import LogsView from '@/views/LogsView.vue'
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
          path: 'logs',
          component: LogsView,
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

import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import NotificationView from '@/views/NotificationView.vue'
import ConversationView from '@/views/ConversationView.vue'
import BroadcastTemplateView from '@/views/BroadcastTemplateView.vue'
import TemplatesView from '@/views/TemplatesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: NotificationView
    },
    {
      path: '/conversations',
      name: 'conversations',
      component: ConversationView
    },
    {
      path: '/broadcast-templates',
      name: 'broadcast-templates',
      component: BroadcastTemplateView
    },
    {
      path: '/broadcast-templates/templates',
      name: 'templates',
      component: TemplatesView
    }
  ]
})

export default router

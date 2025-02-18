import { createRouter, createWebHistory } from 'vue-router'
import NoteView from '@/views/NoteView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/notes-todo-app',
      name: 'notes',
      component: NoteView,
    },
  ],
})

export default router

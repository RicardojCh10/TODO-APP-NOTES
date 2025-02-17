// import NoteApp from '@/components/NoteApp.vue'
// import TodoApp from '@/components/TodoApp.vue'
// import NoteView from '@/views/NoteView.vue'
import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: TodoApp,
    // },

    // {
    //   path: '/',
    //   name: 'Notes',
    //   component: NoteView,
    // },

    // {
    //   path: '/note',
    //   name: 'notes',
    //   component: NoteApp,
    // },

  ],
})

export default router

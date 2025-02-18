<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav
      class="flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 p-4 text-white shadow-lg">
      <RouterLink class="mx-4 text-2xl font-bold hover:text-gray-100 transition-colors duration-300"
        :to="{ name: 'home' }">
        Home
      </RouterLink>
      <RouterLink class="mx-4 text-2xl font-bold hover:text-gray-100 transition-colors duration-300"
        :to="{ name: 'notes' }">
        Todo-app
      </RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

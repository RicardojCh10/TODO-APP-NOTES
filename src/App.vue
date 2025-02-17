<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <h1
      class="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
      TODO-APP DE RICHI
    </h1>

    <div class=" mx-auto px-4 flex gap-6">
      <!-- Columna izquierda -->
      <div class="w-1/3">
        <NoteForm :notaParaEditar="notaEnEdicion" @notaGuardada="finalizarEdicion" />
        <br>
        <TagManager class="mb-6" />
      </div>

      <!-- Columna derecha -->
      <div class="w-2/3">
        <NoteList @editarNota="manejarEdicion" />
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Note } from './interfaces/Types'
import NoteForm from './components/notes/NoteForm.vue'
import NoteList from './components/notes/NoteList.vue'
import TagManager from './components/TagManager.vue'

const notaEnEdicion = ref<Note | null>(null)

function manejarEdicion(nota: Note) {
  notaEnEdicion.value = nota
  // Hacer scroll suave hacia el formulario
  const formulario = document.querySelector('form')
  if (formulario) {
    formulario.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function finalizarEdicion() {
  notaEnEdicion.value = null
}
</script>
<template>
    <div class="max-w-4xl mx-auto p-6">

        <!-- ! FILTROS Y CONTROLES PARA EL MANEJO DE DATOS -->

        <div class="bg-white rounded-xl shadow-lg p-4 mb-6 flex flex-wrap gap-4 items-center justify-between">
            <select v-model="store.filtroActual"
                class="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none min-w-[200px]">
                <option value="todos">📝 Todas las notas</option>
                <option v-for="tag in store.tags" :key="tag" :value="tag">
                    🏷️ {{ tag }} ({{ store.notasPorEtiqueta[tag] }})
                </option>
            </select>

            <button @click="cambiarOrden"
                class="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3z" />
                </svg>
                {{ ordenReciente ? 'Más antiguas primero' : 'Más recientes primero' }}
            </button>
        </div>

        <!-- ! ESTADISTICAS Y ACCIÓN DE ELIMINAR TODOS LAS NOTAS -->
        <div class="mt-6 bg-white rounded-xl shadow-lg p-4 flex flex-wrap items-center justify-between">

            <p class="text-gray-700 font-medium flex items-center gap-2">
                <span class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm">
                    {{ store.totalNotas }}
                </span>
                Cantidad de notas existentes
            </p>

            <button @click="store.limpiarNotas"
                class="px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd" />
                </svg>
                Limpiar todas las notas
            </button>
        </div>

        <br>

        <!-- ! LISTA DE LAS NOTAS ORDENADAS POR CREACION -->
        <div class="space-y-4">
            <div v-for="nota in notasOrdenadas" :key="nota.id"
                class="transition-all duration-200 hover:transform hover:scale-[1.02]">
                <NoteTodo :nota="nota" @editar="$emit('editarNota', nota)" @eliminar="store.eliminarNota(nota.id)" />
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
// * DEPENDENCIAS UTILIZADAS
import { ref, computed } from 'vue'
import type { Note } from '@/interfaces/Types'
import { useNoteStore } from '@/stores/notes'
import NoteTodo from '../NoteTodo.vue'

// Declara eventos que el componente puede emitir
const emit = defineEmits<{
    (e: 'editarNota', nota: Note): void
}>()

const store = useNoteStore()
const ordenReciente = ref(true)

// Toma las notas filtradas desde el store (store.notasFiltradas) y las ordena por fecha.
const notasOrdenadas = computed((): Note[] => {
    return [...store.notasFiltradas].sort((a, b) => {
        return ordenReciente.value
            ? new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
            : new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
    })
})

function cambiarOrden(): void {
    ordenReciente.value = !ordenReciente.value
}
</script>
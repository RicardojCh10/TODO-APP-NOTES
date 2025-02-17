<template>
    <div class="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Gestionar Etiquetas</h3>
        
        <!-- Formulario para nueva etiqueta -->
        <form @submit.prevent="agregarNuevaEtiqueta" class="flex gap-2 mb-4">
            <input 
                v-model="nuevaEtiqueta" 
                type="text" 
                placeholder="Nueva etiqueta"
                class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none"
                required
            />
            <button 
                type="submit"
                class="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
            >
                Agregar
            </button>
        </form>

        <!-- Lista de etiquetas -->
        <div class="flex flex-wrap gap-2">
            <div 
                v-for="tag in store.tags" 
                :key="tag"
                class="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full"
            >
                <span>{{ tag }}</span>
                <button 
                    @click="eliminarEtiqueta(tag)"
                    class="text-red-500 hover:text-red-700"
                >
                    ×
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNoteStore } from '@/stores/notes'

const store = useNoteStore()
const nuevaEtiqueta = ref('')


//! SE AGREGA LA NUEVA ETIQUETA AL CLICK EN EL BOTON
function agregarNuevaEtiqueta() {
    if (nuevaEtiqueta.value.trim()) {
        store.agregarEtiqueta(nuevaEtiqueta.value.trim())
        nuevaEtiqueta.value = ''
    }
}

// ! SE CREA LA ALERTA PARA CONFIRMAR ELIMINACION DE LA NOTA 
function eliminarEtiqueta(tag: string) {
    if (confirm(`¿Estás seguro de eliminar la etiqueta "${tag}"? Se eliminará de todas las notas que la contengan.`)) {
        store.eliminarEtiqueta(tag)
    }
}
</script>
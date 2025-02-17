<template>
    <div class="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
        <h3 class="text-2xl font-semibold text-gray-900 mb-6">
            {{ modoEdicion ? 'Editar Nota' : 'Agregar Nota' }}
        </h3>

        <form @submit.prevent="guardarNota" class="space-y-6">
            <!-- CAMPO DEL TITULO DE LA NOTA -->
            <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700">
                    Título
                </label>
                <input v-model="titulo" type="text" required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition" />
            </div>

            <!-- CAMPO DE CONTENIDO DE LA NOTA -->
            <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700">
                    Contenido
                </label>
                <textarea v-model="contenido" required rows="4"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition resize-none"></textarea>
            </div>

            <!-- ETIQUETAS -->
            <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700">
                    Etiquetas
                </label>
                <div class="flex flex-wrap gap-4">
                    <label v-for="tag in store.tags" :key="tag"
                        class="inline-flex items-center space-x-2 cursor-pointer group">
                        <div class="relative">
                            <input type="checkbox" :value="tag" v-model="etiquetasSeleccionadas" class="peer hidden" />
                            <div
                                class="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-pink-500 peer-checked:border-transparent transition-all flex items-center justify-center">
                                <svg class="w-3 h-3 text-white hidden peer-checked:block"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                </svg>
                            </div>
                        </div>
                        <span class="text-sm text-gray-700 group-hover:text-gray-900">
                            {{ tag }}
                        </span>
                    </label>
                </div>
            </div>

            <!-- BOTÓN DE SUBMIT CON CONDICIONALES DEPENDIENDO DE (EDITAR, CREAR) -->
            <button type="submit"
                class="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition">
                {{ modoEdicion ? 'Actualizar' : 'Crear Nota' }}
            </button>
        </form>
    </div>
</template>


<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Note } from '@/interfaces/Types'
import { useNoteStore } from '@/stores/notes'

interface Props {
    notaParaEditar: Note | null
}

const props = withDefaults(defineProps<Props>(), {
    notaParaEditar: null
})

// Declara eventos que el componente puede emitir
const emit = defineEmits<{
    (e: 'notaGuardada'): void
}>()

const store = useNoteStore()

const titulo = ref('')
const contenido = ref('')
const etiquetasSeleccionadas = ref<string[]>([])
const modoEdicion = ref(false)

watch(() => props.notaParaEditar, (nuevaNota) => {
    if (nuevaNota) {
        // Cargar los datos de la nota en el formulario
        titulo.value = nuevaNota.titulo
        contenido.value = nuevaNota.contenido
        etiquetasSeleccionadas.value = [...nuevaNota.etiquetas]
        modoEdicion.value = true
    } else {
        // Limpiar el formulario
        limpiarFormulario()
    }
}, { immediate: true })

function limpiarFormulario(): void {
    titulo.value = ''
    contenido.value = ''
    etiquetasSeleccionadas.value = []
    modoEdicion.value = false
}

function guardarNota(): void {
    const notaData = {
        titulo: titulo.value,
        contenido: contenido.value,
        etiquetas: etiquetasSeleccionadas.value
    }

    if (modoEdicion.value && props.notaParaEditar) {
        // Actualizar la nota existente
        store.editarNota(props.notaParaEditar.id, notaData)
    } else {
        // Crear nueva nota
        store.agregarNota(notaData)
    }

    // Limpiar formulario y emitir evento
    limpiarFormulario()
    emit('notaGuardada')
}
</script>
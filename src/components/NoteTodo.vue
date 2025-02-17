<template>
    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
        <slot name="encabezado">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ nota.titulo }}</h3>
        </slot>

        <slot name="contenido">
            <p class="text-gray-700 mb-4">{{ nota.contenido }}</p>
        </slot>

        <slot name="etiquetas">
            <div class="flex flex-wrap gap-2 mb-4">
                <span 
                    v-for="etiqueta in nota.etiquetas" 
                    :key="etiqueta" 
                    class="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full"
                >
                    {{ etiqueta }}
                </span>
            </div>
        </slot>

        <slot name="acciones">
            <div class="flex justify-end gap-2">
                <button 
                    @click="$emit('editar')"
                    class="px-4 py-2 text-purple-500 hover:bg-purple-50 rounded-lg transition-colors"
                >
                    Editar
                </button>
                <button 
                    @click="$emit('eliminar')"
                    class="px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                    Eliminar
                </button>
            </div>
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { Note } from '@/interfaces/Types';

defineProps<{
    nota: Note
}>()

defineEmits<{
    (e: 'editar'): void
    (e: 'eliminar'): void
}>()
</script>
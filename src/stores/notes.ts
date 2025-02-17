// ! IMPORTACION DE DEPENDENCIAS 
import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

//! INTERFACE DE NOTAS
import type { Note, NotaFormData } from '@/interfaces/Types'

//! FUNCION PARA USAR EL ALMACEN DE NOTAS (useNoteStore)
//ESTA FUNCION SE VA A UTILIZAR PARA EL MANEJO DE LAS NOTAS EN LOS COMPONENTES DEL TODOAPP

export const useNoteStore = defineStore('notes', () => {
    const notes = ref<Note[]>([])
    const tags = ref<string[]>(['Trabajo', 'Personal', 'Educacion'])
    const filtroActual = ref<string>('todos')

    //  *FUNCION PARA EL TOTAL DE NOTAS QUE EXISTEN
    const totalNotas = computed((): number => notes.value.length)

    const notasPorEtiqueta = computed((): Record<string, number> => {
        const totales: Record<string, number> = {}
        tags.value.forEach(tag => {
            totales[tag] = notes.value.filter(nota => nota.etiquetas.includes(tag)).length
        })
        return totales
    })

    // * FUNCION PARA FILTRO DE NOTAS 
    const notasFiltradas = computed((): Note[] => {
        if (filtroActual.value === 'todos') {
            return notes.value
        }
        return notes.value.filter(nota => nota.etiquetas.includes(filtroActual.value))
    })

    // !FUNCIONES DE CRUD DE NOTAS ( AGREGAR, EDITAR, ELIMINAR )


    // * FUNCION PARA AGREGAR UNA NUEVA NOTA AL TODOAPP
    function agregarNota(notaData: NotaFormData): void {
        const nuevaNota: Note = {
            id: Date.now(),
            fecha: new Date(),
            ...notaData
        }
        notes.value.push(nuevaNota)
    }

    // * FUNCION PARA EDITAR POR (ID) UNA NUEVA NOTA AL TODOAPP
    function editarNota(id: number, notaActualizada: NotaFormData): void {
        const indice = notes.value.findIndex(nota => nota.id === id)
        if (indice !== -1) {
            notes.value[indice] = {
                ...notes.value[indice], // Mantiene el id y fecha original
                titulo: notaActualizada.titulo,
                contenido: notaActualizada.contenido,
                etiquetas: notaActualizada.etiquetas
            }
        }
    }

    // * FUNCION PARA ELIMINAR POR (ID) UNA NUEVA NOTA AL TODOAPP 
    function eliminarNota(id: number): void {
        notes.value = notes.value.filter(nota => nota.id !== id)
    }

    // * FUNCION PARA ELIMINAR TODAS LAS NOTAS CREADAS
    function limpiarNotas(): void {
        notes.value = []
    }

    // ! SE UTILIZA (Persistencia en localStorage), PARA ALMACENAR DATOS EN EL NAVEGADOR
    watch(notes, (nuevasNotas) => {
        localStorage.setItem('notas', JSON.stringify(nuevasNotas))
    }, { deep: true })


    //* FUNCIÓN PARA CARGAR LAS NOTAS USANDO EL (LocalStorage)
    const cargarNotas = (): void => {
        const notasGuardadas = localStorage.getItem('notas')
        if (notasGuardadas) {
            notes.value = JSON.parse(notasGuardadas)
        }
    }

    // ?FUNCIONES ADICIONALES PARA EL TODOAPP

    // ! FUNCIONES PARA EL CRUD DE LAS ETIQUETAS SOLO (AGREGAR, ELIMINAR)

    // * FUNCION PARA AGREGAR UNA NUEVA ETIQUETA AL TODOAPP
    function agregarEtiqueta(nuevaEtiqueta: string): void {
        if (!tags.value.includes(nuevaEtiqueta)) {
            tags.value.push(nuevaEtiqueta)
        }
    }

    // * FUNCION PARA ELIMINAR UNA NUEVA ETIQUETA AL TODOAPP
    function eliminarEtiqueta(etiqueta: string): void {
        // Eliminar la etiqueta del array de etiquetas
        tags.value = tags.value.filter(tag => tag !== etiqueta)

        // Eliminar la etiqueta de todas las notas que la contengan
        notes.value = notes.value.map(nota => ({
            ...nota,
            etiquetas: nota.etiquetas.filter(tag => tag !== etiqueta)
        }))
    }

    cargarNotas()

    return {
        notes,
        tags,
        filtroActual,
        totalNotas,
        notasPorEtiqueta,
        notasFiltradas,
        agregarNota,
        editarNota,
        eliminarNota,
        limpiarNotas,
        agregarEtiqueta,
        eliminarEtiqueta
    }
})
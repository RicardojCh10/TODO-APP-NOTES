
// ! CREACION DE LA INTERFACES QUE SE UTILIZAN PARA EL MANEJO DE LAS NOTAS
export interface Note {
    id: number
    titulo: string
    contenido: string
    etiquetas: string[]
    fecha: Date
}

export interface NotaFormData {
    titulo: string
    contenido: string
    etiquetas: string[]
}
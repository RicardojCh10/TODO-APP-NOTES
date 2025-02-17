
<!-- <template>
    <div class="container">
        <h1>Aplicación de Notas</h1>
        <NoteForm @add-note="addNote" />
        <FilterMenu @filter-tag="setFilter" @clear-notes="clearNotes" />
        <NoteList :notes="filteredNotes" @delete-note="deleteNote" @edit-note="editNote" />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useNotesStore } from '@/stores/notesStore';
import NoteForm from '@/components/notes/NoteForm.vue';
import FilterMenu from '@/components/notes/FilterMenu.vue';
import NoteList from '@/components/notes/NoteList.vue';
import type { Note } from '@/types/note';

const store = useNotesStore();
const filterTag = ref<string | null>(null);

const addNote = (title: string, content: string, tags: string[]) => {
    store.addNote(title, content, tags);
};

const deleteNote = (id: number) => {
    store.deleteNote(id);
};

const editNote = (id: number, updatedNote: Note) => {
    store.updateNote(id, updatedNote);
};

const setFilter = (tag: string | null) => {
    filterTag.value = tag;
};

const clearNotes = () => {
    store.clearNotes();
};

const filteredNotes = computed(() => {
    return filterTag.value ? store.filterByTag(filterTag.value) : store.notes;
});
</script>

<style scoped>
.container {
    max-width: 600px;
    margin: auto;
    text-align: center;
}
</style> -->

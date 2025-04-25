<template>
  <dialog open>
    <article>
      <header>
        <button @click="$emit('close')" aria-label="Close" rel="prev"></button>
        <p>
          <strong>🗑️ Delete Item</strong>
        </p>
      </header>

      <p>Select the entries you want to delete:</p>
      <ul>
        <li v-for="mapping in mappings" :key="mapping.id" style="list-style-type: none">
          <label>
            <input type="checkbox" :value="mapping.id" v-model="toDelete" />
            <code>{{ mapping.public_path }} → {{ mapping.service_host }}</code>
          </label>
        </li>
      </ul>
      <footer>
        <button @click="$emit('close')" class="secondary">Abort</button>
        <button @click="deleteRoutes()" class="contrast" :disabled="toDelete.length === 0">
          Delete ({{ toDelete.length }})
        </button>
      </footer>
    </article>
  </dialog>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoutes } from '@/composables/useRoutes'

const toDelete = ref([])
const { mappings, getRoutes } = useRoutes()
const emit = defineEmits();

function deleteRoutes() {
  if (window.confirm('Are you sure you want to delete all the selected items?')) {
    toDelete.value.forEach((id) => {
      axios.delete(`/api/routes/` + id).catch((err) => {
        console.error(err)
      })
    })

    getRoutes()
    emit('close')
    toDelete.value = []
  }
}
</script>

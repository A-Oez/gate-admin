<template>
  <section>
    <hgroup>
      <h2>Request Mapping</h2>
      <p>Manage and define routing rules for backend services through the gateway.</p>
    </hgroup>
  </section>

  <section style="margin-top: 5%">
    <details class="dropdown" style="width: 25%">
      <summary>⚙️ Manage</summary>
      <ul style="cursor: pointer;">
        <li><a @click="showNewModal = true">➕ Create Item</a></li>
        <li><a>✏️ Edit Item</a></li>
        <li><a>🗑️ Delete Item</a></li>
      </ul>
    </details>

    <table>
      <thead>
        <tr>
          <th>Public Path</th>
          <th>Method</th>
          <th>Service Host</th>
          <th>Service Path</th>
          <th>Service Scheme</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="mapping in mappings" :key="mapping.id">
          <td>{{ mapping.public_path }}</td>
          <td>
            <span
              :class="['method-label', mapping.method.toLowerCase()]"
              style="text-transform: uppercase"
            >
              {{ mapping.method }}
            </span>
          </td>
          <td>{{ mapping.service_host }}</td>
          <td>{{ mapping.service_path }}</td>
          <td>{{ mapping.service_scheme }}</td>
        </tr>
      </tbody>
    </table>
  </section>
  <NewMappingModal v-if="showNewModal" @close="handleModalClose()" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import NewMappingModal from '@/components/modal/NewMappingModal.vue'

const showNewModal = ref(false)
const mappings = ref([])
const error = ref(null)

onMounted(() => {
  getRoutes()
})

function handleModalClose(){
  showNewModal.value = false;
  getRoutes()
}

function getRoutes(){
  axios
    .get(`/api/routes`)
    .then((response) => {
      mappings.value = response.data
    })
    .catch((err) => {
      console.error(err)
    })
}

</script>

<style scoped>
.method-label {
  padding: 0.2em 0.6em;
  border-radius: 0.25rem;
  font-weight: bold;
  font-size: 0.85em;
  color: white;
}

.method-label.get {
  background-color: #0a9396;
}

.method-label.post {
  background-color: #bb3e03;
}
</style>

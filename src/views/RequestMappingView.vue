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
        <li><a @click="modals.new = true">➕ Create Item</a></li>
        <li><a>✏️ Edit Item</a></li>
        <li><a @click="modals.delete = true">🗑️ Delete Item</a></li>
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
  <NewMappingModal v-if="modals.new" @close="handleModalClose()" />
  <DeleteMappingModal v-if="modals.delete" @close="handleModalClose()" />
</template>

<script setup>
import { ref } from 'vue'
import NewMappingModal from '@/components/modal/NewMappingModal.vue'
import DeleteMappingModal from '@/components/modal/DeleteMappingModal.vue'
import { useRoutes } from '@/composables/useRoutes'

const { mappings, getRoutes } = useRoutes()
const modals = ref({
  new: false,
  delete: false
})

function handleModalClose(){
  modals.value.new = false;
  modals.value.delete = false
  getRoutes()
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

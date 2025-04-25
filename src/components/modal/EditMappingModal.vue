<template>
  <dialog open>
    <article>
      <header>
        <button @click="$emit('close')" aria-label="Close" rel="prev"></button>
        <p>
          <strong>✏️ Edit Item</strong>
        </p>
      </header>

      <p>Select the entry you want to edit:</p>
      <select name="select" aria-label="Select" required v-model="toEdit">
        <option v-for="mapping in mappings" :key="mapping.id" :value="mapping">
          {{ mapping.public_path }} → {{ mapping.service_host }}
        </option>
      </select>

      <section>
        <hr />
        <form>
          <fieldset>
            <div class="grid">
              <label>
                Public Path
                <input
                  v-model="toEdit.public_path"
                  placeholder="/api/v1/resources"
                  autocomplete="off"
                />
              </label>
              <label>
                Method
                <input
                  v-model="toEdit.method"
                  placeholder="GET, POST, PUT, DELETE"
                  autocomplete="off"
                />
              </label>
            </div>
            <label>
              Service Host
              <input
                v-model="toEdit.service_host"
                placeholder="example.com:8080"
                autocomplete="off"
              />
            </label>
            <label>
              Service Path
              <input v-model="toEdit.service_path" placeholder="/users/{id}" autocomplete="off" />
            </label>
            <label>
              Service Scheme
              <input v-model="toEdit.service_scheme" placeholder="http, https" autocomplete="off" />
            </label>
            <input type="submit" @click="updateRoute" value="Update" />
          </fieldset>
        </form>
      </section>
    </article>
  </dialog>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRoutes } from '@/composables/useRoutes'

const toEdit = ref([])
const { mappings, getRoutes } = useRoutes()

function updateRoute() {
  if (window.confirm('Do you really want to update all the information?')) {
    console.log(toEdit.value)
    axios.put(`/api/routes/` + toEdit.id, toEdit.value).catch((err) => {
      console.error(err)
    })
  }
}
</script>

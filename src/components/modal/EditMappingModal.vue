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
      <select name="select" aria-label="Select" required v-model="route"  @change="routeSelected = true">
        <option v-for="mapping in mappings" :key="mapping.id" :value="mapping">
          Public Path: {{ mapping.public_path }} → Method: {{ mapping.method }}
        </option>
      </select>

      <section v-if="routeSelected">
        <hr />
        <form>
        <fieldset>
          <div class="grid">
            <label>
              <p class="input-label">Public Path</p>
              <span v-if="errorMessage.public_path.length > 0" class="error-message">
                {{ errorMessage.public_path }}
              </span>
              <input v-model="route.public_path" placeholder="/api/v1/resources" autocomplete="off" :aria-invalid="validations.public_path"/>
            </label>
            <label>
              <p class="input-label">Method</p>
              <span v-if="errorMessage.method.length > 0" class="error-message">
                {{ errorMessage.method }}
              </span>
              <input v-model="route.method" placeholder="GET, POST, PUT, DELETE" autocomplete="off" :aria-invalid="validations.method"/>
            </label>
          </div>
          <label>
            <p class="input-label">Service Host</p>
            <span v-if="errorMessage.service_host.length > 0" class="error-message">
                {{ errorMessage.service_host }}
            </span>
            <input v-model="route.service_host" placeholder="example.com:8080" autocomplete="off" :aria-invalid="validations.service_host"/>
          </label>
          <label>
            <p class="input-label">Service Path</p>
            <span v-if="errorMessage.service_path.length > 0" class="error-message">
                {{ errorMessage.service_path }}
            </span>
            <input v-model="route.service_path" placeholder="/users/{id}" autocomplete="off" :aria-invalid="validations.service_path"/>
          </label>
          <label>
            <p class="input-label">Service Scheme</p>
            <span v-if="errorMessage.service_scheme.length > 0" class="error-message">
                {{ errorMessage.service_scheme }}
            </span>
            <input v-model="route.service_scheme" placeholder="http, https" autocomplete="off" :aria-invalid="validations.service_scheme"/>
          </label>
          <input v-if="!hasErrors()" @click="updateRoute()" type="submit" value="Update"/>
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
import { validateRoutes } from '@/composables/validateRoutes'

const { mappings, _ } = useRoutes()
const routeSelected = ref(false)

const route = ref({
  public_path: "",
  method: "",
  service_host: "",
  service_path: "",
  service_scheme: ""
})

const validations = ref({
    public_path: false,
    method: false,
    service_host: false,
    service_path: false,
    service_scheme: false
})

const errorMessage = ref({
  public_path: "",
  method: "",
  service_host: "",
  service_path: "",
  service_scheme: ""
})

validateRoutes(route, validations, errorMessage)

function hasErrors(){
  return Object.values(validations.value).some(error => error === true);
}

function updateRoute() {
  if (window.confirm('Do you really want to update all the information?')) {
    axios.put(`/admin/routes/` + route.id, route.value).catch((err) => {
      console.error(err)
    })
  }
}
</script>

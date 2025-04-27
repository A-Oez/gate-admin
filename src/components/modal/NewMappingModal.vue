<template>
  <dialog open>
    <article>
      <header>
        <button @click="$emit('close')" aria-label="Close" rel="prev"></button>
        <p>
          <strong>➕ Create Item</strong>
        </p>
      </header>

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
          <input v-if="!hasErrors()" @click="createNewRoute()" type="submit" value="Create"/>
        </fieldset>
      </form>
    </article>
  </dialog>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { validateRoutes } from '@/composables/validateRoutes'


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

function createNewRoute(){ 
  axios
    .post(`/api/routes`, route.value)
    .catch((err) => {
      console.error(err)
    })
}

</script>

<style>
.input-label {
  margin-bottom: 0.25rem;  
  font-weight: bold;
}

.error-message {
  color: #ff4d4d;
  font-size: 0.875rem;
  display: block;
}
</style>
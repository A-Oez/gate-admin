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
              Public Path
              <input v-model="route.public_path" placeholder="/api/v1/resources" autocomplete="off" />
            </label>
            <label>
              Method
              <input v-model="route.method" placeholder="GET, POST, PUT, DELETE" autocomplete="off" />
            </label>
          </div>
          <label>
            Service Host
            <input v-model="route.service_host" placeholder="example.com:8080" autocomplete="off" />
          </label>
          <label>
            Service Path
            <input v-model="route.service_path" placeholder="/users/{id}" autocomplete="off" />
          </label>
          <label>
            Service Scheme
            <input v-model="route.service_scheme" placeholder="http, https" autocomplete="off" />
          </label>
          <input @click="createNewRoute()" type="submit" value="Create" />
        </fieldset>
      </form>
    </article>
  </dialog>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'

const route = ref({
  public_path: "",
  method: "",
  service_host: "",
  service_path: "",
  service_scheme: ""
})

function createNewRoute(){
  axios
    .post(`/api/routes`, route.value)
    .catch((err) => {
      console.error(err)
    })
}

</script>
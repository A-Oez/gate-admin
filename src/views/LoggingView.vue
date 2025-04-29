<template>
  <Navbar />
  <main class="container" style="margin-top: 4rem">
    <div class="grid" style="align-items: center; gap: 3rem">
      <article
        style="border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 3rem; padding: 3rem"
      >
        <div>
          <hgroup>
            <h1>Login</h1>
            <p>Please login with your email and password. 🔐</p>
          </hgroup>
        </div>
      </article>

      <div>
        <form @submit.prevent="onLogin">
          <fieldset>
            <label for="email">
              Email
              <input
                id="email"
                name="email"
                type="email"
                required
                autocomplete="email"
                v-model="email"
              />
            </label>

            <label for="password">
              Password
              <input
                id="password"
                name="password"
                type="password"
                required
                autocomplete="current-password"
                v-model="password"
              />
            </label>
          </fieldset>

          <input type="submit" value="Login" class="contrast" />
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../components/LoggingNavbar.vue'

const email = ref('')
const password = ref('')

function onLogin() {
  //TODO: create login call
}
</script>

<template>
  <RouterView v-if="loggedIn" />
  <LoggingView v-else/>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import { RouterView } from 'vue-router'
import LoggingView from '@/views/LoggingView.vue'
import { useSessionTimeStore } from '@/stores/session_timestamp'
const sessionStore = useSessionTimeStore()

const loggedIn = ref(false)

onMounted(() => {
  sessionStore.loadLoggedInFromStorage()
})

watchEffect(() => {
  loggedIn.value = sessionStore.loggedIn
})

function handleLoginSuccess() {
  loggedIn.value = true
}

</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
<template>
  <RouterView v-if="sessionStore.loggedIn" />
  <LoggingView v-else />
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import LoggingView from '@/views/LoggingView.vue'
import { useSessionTimeStore } from '@/stores/session_timestamp'
import { useSessionLogout } from '@/composables/useSessionLogout'

const sessionStore = useSessionTimeStore()

onMounted(() => {
  sessionStore.loadFromStorage()
  
  if(sessionStore.timestamp != null && (new Date().getTime() > sessionStore.timestamp)) {
    useSessionLogout().logout()
  }
})
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
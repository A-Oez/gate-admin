<template>
      <div class="container-fluid">
    <nav style="margin-right: 3%;">
      <ul>
        <img
          src="/src/assets/logo.png"
          style="width: 140px; height: 120px"
        />
        <h1>go-gate</h1>
      </ul>
      <ul>
        <li><a href="/" class="contrast">🏠 Home</a></li>
        <li>
          <details class="dropdown">
            <summary>Services</summary>
            <ul>
              <li><a href="/logs">📊 Logs & Insights</a></li>
              <li><a href="/mapping">🔀 Request Mapping</a></li>
            </ul>
          </details>
        </li>
        <li>|</li>
        <li><button class="contrast" @click="useSessionLogout().logout()">Logout</button></li>
        <li><a href="https://github.com/A-Oez/go-gate"><kbd>GitHub</kbd></a></li>
      </ul>
    </nav>
  </div>
  <hr />
</template>

<script setup>
import { useSessionLogout } from '@/composables/useSessionLogout'
</script>
<template>
  <section>
    <hgroup>
      <h2>Request Mapping</h2>
      <p>Manage and define routing rules for backend services through the gateway.</p>
    </hgroup>
  </section>

  <section style="margin-top: 5%;">
    <details class="dropdown" style="width: 25%;">
      <summary>⚙️ Manage</summary>
      <ul>
        <li><a>➕ Create Item</a></li>
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
        <tr v-for="entry in mappings" :key="entry.id">
          <td>{{ entry.publicPath }}</td>
          <td>
            <span :class="['method-label', entry.method.toLowerCase()]" style="text-transform: uppercase;">
              {{ entry.method }}
            </span>
          </td>
          <td>{{ entry.serviceHost }}</td>
          <td>{{ entry.servicePath }}</td>
          <td>{{ entry.serviceScheme }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
const mappings = [
  {
    id: 1,
    publicPath: '/api',
    method: 'GET',
    serviceHost: 'apitest:8080',
    servicePath: '/test',
    serviceScheme: 'http',
  },
  {
    id: 2,
    publicPath: '/user',
    method: 'POST',
    serviceHost: 'authservice:8000',
    servicePath: '/login',
    serviceScheme: 'http',
  }
]
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

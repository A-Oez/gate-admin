<template>
  <nav role="tab-control">
    <ul>
      <li v-for="(tabItem, index) in tabs">
        <label :class="{ active: selected === index }" @click="selected = index">
          {{ tabItem.label }}
        </label>
      </li>
    </ul>
  </nav>

  <div role="tabs">
    <section>
      <figure v-for="(tabItem, index) in tabs" v-show="selected === index">
        <slot :name="tabItem.slot" />
      </figure>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  tabs: {
    type: Array,
    required: true,
  },
})

const selected = ref(0)
</script>

<style scoped>
nav[role='tab-control'] {
  display: flex;
  justify-content: flex-start;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

nav[role='tab-control'] ul {
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
}

nav[role='tab-control'] label {
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px 8px 0 0;
  font-weight: bold;
  background-color: #e5e7eb;
  color: #111827;
}

nav[role='tab-control'] label:hover {
  background-color: #d1d5db;
}

nav[role='tab-control'] label.active {
  background-color: #3b82f6;
  color: white;
}

[role='tabs'] section {
  width: 100%;
  padding: 2rem;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

</style>

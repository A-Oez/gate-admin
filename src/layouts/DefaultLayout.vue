<template>
    <Navbar />
    <main>
        <router-view />
        <section v-if="isDefaultPath">
            <p>Default Layout View</p>
        </section>
    </main>
</template>

<script setup>
import Navbar from '../components/DefaultNavbar.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isDefaultPath = route.path === '/'

</script>
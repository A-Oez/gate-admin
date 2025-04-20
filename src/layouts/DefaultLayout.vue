<template>
    <Navbar />
    <main class="container">
        <router-view />
        <section v-if="isDefaultPath">
            <hgroup>
                <h2>Secure, Log, and Connect Your APIs</h2>
                <p>Built-in proxy mapping, authentication and request logging — all in one simple gateway.</p>
            </hgroup>
            <small style="display: block;">
                👉 Check out the project on
                <a href="https://github.com/A-Oez/go-gate" target="_blank">GitHub</a>
            </small>

            <div class="grid" style="margin-top: 5%;">
                <article>
                    <h3>🔐 Auth</h3>
                    <p>Centralized authentication to keep services secure without repeated login logic.</p>
                </article>
                <article>
                    <h3>📊 Logs & Insights</h3>
                    <p>Integrated request logging and traffic analysis for better observability.</p>
                </article>
                <article>
                    <h3>🔀 Request Mapping</h3>
                    <p>Define routes to backend services via a simple UI.</p>
                </article>
                <article>
                    <h3>🧩 Microservice Ready</h3>
                    <p>Connect, protect, and monitor your services — all through one gateway.</p>
                </article>
            </div>
        </section>
    </main>
</template>

<script setup>
import Navbar from '../components/DefaultNavbar.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isDefaultPath = route.path === '/'
</script>
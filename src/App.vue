<script setup>
import Topbar from './components/Topbar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <Topbar />
  <main class="page">
    <RouterView />
  </main>
  <AppFooter />
</template>

<style scoped>
.page {
  min-height: calc(100vh - 112px);
}
</style>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="topbar">
    <div class="topbar-inner">
      <RouterLink class="topbar-brand" to="/">
        <span class="brand-mark">HAC</span>
        <span class="brand-text">Human–Agent Collaboration</span>
      </RouterLink>
      <div class="topbar-nav">
        <RouterLink to="/">Overview</RouterLink>
        <RouterLink to="/almanac" class="nav-a">ALMANAC</RouterLink>
        <RouterLink to="/collabsim" class="nav-b">CollabSim</RouterLink>
        <RouterLink to="/platform" class="nav-c">HAC Platform</RouterLink>
        <RouterLink :to="{ path: '/', hash: '#citation' }">Cite</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  author: { type: String, required: true },
  sup: { type: String, default: '' },
  href: { type: String, default: '' },
})
</script>

<template>
  <span class="author-block">
    <a v-if="href" :href="href" class="author-link">{{ author }}</a>
    <span v-else class="author-name">{{ author }}</span>
    <sup v-if="sup">{{ sup }}</sup>
  </span>
</template>

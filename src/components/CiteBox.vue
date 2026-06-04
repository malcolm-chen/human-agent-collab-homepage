<script setup>
import { ref } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
})

const label = ref('Copy')

async function copy() {
  await navigator.clipboard.writeText(props.text)
  label.value = 'Copied!'
  setTimeout(() => {
    label.value = 'Copy'
  }, 1800)
}
</script>

<template>
  <div class="cite-box">
    <button class="copy-btn" type="button" @click="copy">{{ label }}</button>
    {{ text }}
  </div>
</template>

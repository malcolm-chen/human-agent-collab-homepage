<script setup>
import { computed } from 'vue'
import Author from './Author.vue'
import { contactEmail } from '../data/authorCredits.js'

const props = defineProps({
  theme: {
    type: String,
    required: true,
    validator: (v) => v === 'a' || v === 'b' || v === 'c',
  },
  authors: { type: Array, required: true },
  affiliations: { type: Array, required: true },
  email: { type: Object, default: null },
})

const emailInfo = computed(() => props.email ?? contactEmail)
</script>

<template>
  <div class="author-credits" :class="`author-credits-${theme}`">
    <p class="author-list">
      <Author
        v-for="entry in authors"
        :key="entry.author"
        :author="entry.author"
        :href="entry.href"
        :sup="entry.sup"
      />
    </p>
    <div class="author-affiliations">
      <div v-for="aff in affiliations" :key="aff.num" class="affiliation">
        <sup>{{ aff.num }}</sup>{{ aff.name }}
      </div>
    </div>
    <p class="author-email">
      <a :href="emailInfo.mailto">{{ emailInfo.display }}</a>
    </p>
  </div>
</template>

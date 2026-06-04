<script setup>
import { computed } from 'vue'
import mapFollower from '../assets/almanac/map_follower.png'
import { sessionMapImages } from '../data/sessionMapImages.js'

const props = defineProps({
  dataFolder: { type: String, required: true },
  mapImage: { type: String, default: null },
  variant: { type: String, default: 'draw' },
})

const routeSrc = computed(() => {
  if (!props.mapImage) return null
  const key = `${props.dataFolder}/${props.mapImage}`
  return sessionMapImages[key] ?? null
})

const variantLabel = computed(() => {
  if (props.variant === 'erase') return 'Erased'
  if (props.variant === 'undo') return 'Undone'
  return 'Drawn route'
})
</script>

<template>
  <figure v-if="routeSrc" class="map-canvas-wrap">
    <div class="map-canvas-stack">
      <img :src="mapFollower" alt="Follower map" class="map-canvas-base" />
      <img
        :src="routeSrc"
        :alt="variantLabel"
        class="map-canvas-route"
        :class="`map-canvas-route--${variant}`"
      />
    </div>
    <figcaption class="map-canvas-caption">{{ variantLabel }}</figcaption>
  </figure>
</template>

<style scoped>
.map-canvas-wrap {
  width: 100%;
  max-width: 200px;
  margin: 0;
}

.map-canvas-stack {
  position: relative;
  width: 100%;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--rule);
  background: #fff;
  aspect-ratio: 810 / 1180;
}

.map-canvas-base,
.map-canvas-route {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.map-canvas-base {
  z-index: 0;
}

.map-canvas-route {
  z-index: 1;
  pointer-events: none;
}

.map-canvas-route--erase {
  opacity: 0.85;
  filter: hue-rotate(-20deg) saturate(1.2);
}

.map-canvas-caption {
  margin-top: 4px;
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-faint);
}
</style>

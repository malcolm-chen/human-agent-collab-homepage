<script setup>
import { computed, ref } from 'vue'
import sessionData from '../data/sessionViewerSlices.json'
import MapCanvasOverlay from './MapCanvasOverlay.vue'
import { formatDrawingAccuracy } from '../utils/mapCanvas.js'

const props = defineProps({
  canvasVisible: { type: Boolean, default: true },
})

const session = computed(() =>
  props.canvasVisible ? sessionData.visible : sessionData.notVisible
)

const hoveredId = ref(null)
const focusedId = ref(null)

const hoveredAction = computed(() => {
  const id = hoveredId.value ?? focusedId.value
  if (!id) return null
  return session.value.actions.find((a) => a.id === id) ?? null
})

function actionLabel(action) {
  if (action.actionType === 'message') return 'Message'
  if (action.actionType === 'draw') return 'Draw'
  if (action.actionType === 'erase') return 'Erase'
  if (action.actionType === 'undo') return 'Undo'
  return action.actionType
}

function onRowEnter(action) {
  hoveredId.value = action.id
}

function onRowLeave() {
  hoveredId.value = null
}

function onRowFocus(action) {
  focusedId.value = action.id
}

function onRowBlur() {
  focusedId.value = null
}

function formatSessionTime(iso) {
  const d = new Date(iso)
  return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
}

function showMap(action) {
  return action.mapImage && ['draw', 'erase', 'undo'].includes(action.actionType)
}
</script>

<template>
  <div class="anno-demo session-viewer">
    <div class="anno-demo-bar">
      <div class="wdot wd-r"></div>
      <div class="wdot wd-y"></div>
      <div class="wdot wd-g"></div>
      <span>ALMANAC Session Viewer</span>
      <span class="session-info">
        {{ session.sessionName }}
        &nbsp;·&nbsp;
        {{ session.label }}
        &nbsp;·&nbsp;
        {{ formatSessionTime(session.startTime) }}–{{ formatSessionTime(session.endTime) }}
      </span>
    </div>

    <div
      v-if="!canvasVisible"
      class="anno-canvas-hint anno-canvas-hint-off session-viewer-banner"
    >
      Guide canvas hidden — chat-only coordination
    </div>
    <div v-else class="anno-canvas-hint session-viewer-banner">
      Guide canvas visible to follower during drawing
    </div>

    <div class="session-viewer-body">
      <div class="session-timeline-scroll">
        <div class="session-timeline">
          <div class="session-timeline-head">
            <span class="col-time">Time</span>
            <span class="col-guide">
              <span class="role-badge role-badge-guide">Guide</span>
            </span>
            <span class="col-follower">
              <span class="role-badge role-badge-follower">Follower</span>
            </span>
          </div>

          <div
            v-for="action in session.actions"
            :key="action.id"
            class="timeline-row"
            :class="{
              'is-hovered': hoveredId === action.id || focusedId === action.id,
              'is-guide-row': action.role === 'guide',
              'is-follower-row': action.role === 'follower',
            }"
            tabindex="0"
            @mouseenter="onRowEnter(action)"
            @mouseleave="onRowLeave"
            @focusin="onRowFocus(action)"
            @focusout="onRowBlur"
          >
            <div class="timeline-time">
              <span class="timeline-elapsed">{{ action.elapsed }}</span>
            </div>

            <div class="timeline-cell timeline-cell-guide">
              <template v-if="action.role === 'guide'">
                <div class="action-chip action-chip-guide">
                  <span class="action-type">{{ actionLabel(action) }}</span>
                  <div v-if="action.content" class="msg-bubble">{{ action.content }}</div>
                </div>
              </template>
              <span v-else class="timeline-empty" aria-hidden="true">—</span>
            </div>

            <div class="timeline-cell timeline-cell-follower">
              <template v-if="action.role === 'follower'">
                <div class="action-chip action-chip-follower">
                  <span class="action-type">{{ actionLabel(action) }}</span>
                  <div v-if="action.content" class="msg-bubble">{{ action.content }}</div>
                  <MapCanvasOverlay
                    v-if="showMap(action)"
                    :data-folder="session.dataFolder"
                    :map-image="action.mapImage"
                    :variant="action.actionType"
                  />
                  <span
                    v-if="formatDrawingAccuracy(action.drawingAccuracy)"
                    class="action-accuracy"
                  >
                    Accuracy {{ formatDrawingAccuracy(action.drawingAccuracy) }}
                  </span>
                </div>
              </template>
              <span v-else class="timeline-empty" aria-hidden="true">—</span>
            </div>
          </div>
        </div>
      </div>

      <aside class="session-mm-panel" aria-live="polite">
        <h4 class="session-mm-title">Mental Model</h4>
        <p v-if="!hoveredAction" class="mm-hint">
          Hover or focus an action row to view its post-session mental model annotation.
        </p>
        <template v-else-if="hoveredAction.mentalModel">
          <div
            class="mm-speech"
            :class="
              hoveredAction.role === 'guide' ? 'mm-speech-guide' : 'mm-speech-follower'
            "
          >
            <span class="mm-speech-role">
              {{ hoveredAction.role === 'guide' ? 'Guide' : 'Follower' }}:
            </span>
            <span class="mm-speech-text">{{ hoveredAction.mentalModel.rationale }}</span>
          </div>
          <div class="mm-block session-mm-table">
            <div class="mm-row">
              <span class="mm-tag">Team Goal</span>
              <span class="mm-val">{{ hoveredAction.mentalModel.teamGoal }}</span>
            </div>
            <div class="mm-row">
              <span class="mm-tag">Partner Intent</span>
              <span class="mm-val">{{ hoveredAction.mentalModel.partnerIntent }}</span>
            </div>
            <div class="mm-row">
              <span class="mm-tag">Self-Reasoning</span>
              <span class="mm-val">{{ hoveredAction.mentalModel.selfReasoning }}</span>
            </div>
          </div>
        </template>
      </aside>
    </div>
  </div>
</template>

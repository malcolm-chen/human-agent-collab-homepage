<script setup>
import { ref } from 'vue'
import AuthorCredits from '../components/AuthorCredits.vue'
import CiteBox from '../components/CiteBox.vue'
import { almanacCredits } from '../data/authorCredits.js'
import SessionViewer from '../components/SessionViewer.vue'
import screenshotFollower from '../assets/almanac/screenshot_follower.jpg'
import annotationWorkflow from '../assets/almanac/AnnotationWorkflow.png'

const almanacCite = `@article{chen2026humans,
  title={Humans' ALMANAC: A Human Collaboration Dataset of Action-Level Mental Model Annotations for Agent Collaboration},
  author={Chen, Jiaju and Lu, Yuxuan and Su, Jiayi and Chen, Chaoran and Xiao, Songlin and Zhang, Zheng and Wang, Yun and Li, Yunyao and Zhao, Jian and Wu, Tongshuang and others},
  journal={arXiv preprint arXiv:2606.06388},
  year={2026}
}`

const canvasVisible = ref(true)

const steps = [
  {
    num: '01',
    title: 'In-Session Checkpoints',
    text: 'At 25%, 50%, and 75% of route progress, participants voice-record their perceived team goal, partner intention, and self-reasoning. Each checkpoint takes ~10–20 seconds.',
  },
  {
    num: '02',
    title: 'Post-Session Annotation',
    text: 'Immediately after the task, participants retrospectively annotate their <span class="term-highlight">mental model</span> of each action, guided by action screenshots and in-session recordings as memory anchors (Lyle, 2003).',
  }
]
</script>

<template>
  <section class="section page-intro">
    <div class="container">
      <div class="sec-eyebrow sec-eyebrow-a">The ALMANAC Dataset</div>
      <h2 class="sec-title">Humans' ALMANAC: A Human Collaboration Dataset of <span class="underline">A</span>ction-<span class="underline">L</span>evel <span class="underline">M</span>ental model <span class="underline">AN</span>notations for <span class="underline">A</span>gent <span class="underline">C</span>ollaboration</h2>
      <p class="sec-body sec-body-highlight sec-body-highlight-a">
        <strong>ALMANAC</strong> is a dataset of humans' <strong>A</strong>ction-<strong>L</strong>evel <strong>M</strong>ental model <strong>AN</strong>notations for <strong>A</strong>gent <strong>C</strong>ollaboration, built from the Map Task, a classic dyadic routing task from social science. At every action, participants annotated their mental models: what they believed the team goal was, what they thought their partner intended, and what drove their own reasoning.
      </p>

      <AuthorCredits
        theme="a"
        :authors="almanacCredits.authors"
        :affiliations="almanacCredits.affiliations"
      />

      <div class="btn-row page-actions">
        <a href="#" class="btn btn-a">Paper</a>
        <a href="#" class="btn btn-ghost">Dataset</a>
      </div>

      <hr />

      <h3 class="sec-h3">Human Participants' Workspace Example</h3>
      <p class="sec-lead">
        This is a screenshot of the follower workspace during a collaboration session. The follower communicates with the guide through messages and draws the route on a live canvas.
      </p>

      <figure class="figure-block">
        <figcaption class="figure-caption">Follower workspace</figcaption>
        <div class="figure-frame figure-frame-mac">
          <div class="anno-demo-bar">
            <div class="wdot wd-r"></div>
            <div class="wdot wd-y"></div>
            <div class="wdot wd-g"></div>
            <span>The Map Task</span>
          </div>
          <img :src="screenshotFollower" alt="ALMANAC follower workspace with map canvas and chat" />
        </div>
      </figure>

      <hr />

      <h3 class="sec-h3">Annotation Framework</h3>
      <p class="sec-lead">
        At every action, participants annotated their mental models: what they believed the team goal was, what they thought their partner intended, and what drove their own reasoning. This is a two-step process designed to minimize recall bias while capturing action-level cognitive states.
      </p>

      <figure class="figure-block">
        <figcaption class="figure-caption">Annotation workflow</figcaption>
        <div class="figure-frame figure-frame--padded">
          <img :src="annotationWorkflow" alt="In-session checkpoints and post-session annotation workflow" />
        </div>
      </figure>

      <div class="steps">
        <template v-for="(step, i) in steps" :key="step.num">
          <div class="step-card">
            <div class="step-num">{{ step.num }}</div>
            <h4>{{ step.title }}</h4>
            <p v-html="step.text"></p>
          </div>
          <div v-if="i < steps.length - 1" class="step-arrow">→</div>
        </template>
      </div>

      

      <hr />

      <h3 class="sec-h3">Sample Data</h3>
      <p class="sec-lead">
        Six consecutive actions from real sessions shown in time order.
        Hover an action row to inspect its post-session mental model annotation.
      </p>

      <div class="condition-switch">
        <button
          type="button"
          :class="{ active: canvasVisible }"
          @click="canvasVisible = true"
        >
          Canvas Visible
        </button>
        <button
          type="button"
          :class="{ active: !canvasVisible }"
          @click="canvasVisible = false"
        >
          Canvas Not Visible
        </button>
      </div>

      <SessionViewer :canvas-visible="canvasVisible" />

    </div>
  </section>

  <section id="citation" class="section">
    <div class="container">
      <h2 class="sec-title">Citation</h2>
      <CiteBox :text="almanacCite" />
    </div>
  </section>
</template>

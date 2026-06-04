<script setup>
import { ref } from 'vue'
import AuthorCredits from '../components/AuthorCredits.vue'
import CiteBox from '../components/CiteBox.vue'
import { platformCredits } from '../data/authorCredits.js'
import teaserImg from '../assets/platform/teaser.png'
import paperPreview from '../assets/platform/paper-preview.jpg'
import demoVideo from '../assets/platform/CHI26_Human-Agent-Collaboration_0918.mp4'

const platformCite = `@article{yao2025humanagent,
  title = {Through the Lens of Human-Human Collaboration: An Configurable Research Platform for Exploring Human-Agent Collaboration},
  author = {Bingsheng Yao and Jiaju Chen and Chaoran Chen and April Yi Wang and Toby Jia-Jun Li and Dakuo Wang},
  year = {2025},
  journal={arXiv preprint}
}`

const features = [
  'Modular design for seamless adaptation of classic CSCW experiments.',
  'Theory-grounded manipulation of interaction variables.',
  'Configurable user interfaces for diverse experimental setups.',
  'Built-in data collection and analysis tools for researchers.',
  'Open-source and extensible architecture.',
]

const videoEl = ref(null)
const videoAspectRatio = ref('16 / 9')

function onVideoLoadedMetadata() {
  if (videoEl.value?.videoWidth && videoEl.value?.videoHeight) {
    videoAspectRatio.value = `${videoEl.value.videoWidth} / ${videoEl.value.videoHeight}`
  }
}
</script>

<template>
  <section class="section page-intro">
    <div class="container">
      <div class="sec-eyebrow sec-eyebrow-c">Human-Agent Collaboration Platform</div>
      <h2 class="sec-title sec-title-with-venue">
        Through the Lens of Human-Human Collaboration: A Configurable Research Platform for Exploring Human-Agent Collaboration
        <span class="venue-banner" role="status">
          <span class="venue-banner-label">Accepted at</span>
          <span class="venue-banner-title">CHI 2026</span>
        </span>
      </h2>
      <p class="sec-body sec-body-highlight sec-body-highlight-c">
        Intelligent systems have traditionally been designed as tools rather than collaborators. We introduce an open-source, extensible research platform for HCI researchers to systematically investigate whether principles of computer-mediated collaboration persist, change, or fail when humans collaborate with LLM agents.
      </p>

      <AuthorCredits
        theme="c"
        :authors="platformCredits.authors"
        :affiliations="platformCredits.affiliations"
        :email="platformCredits.email"
      />

      <div class="btn-row page-actions">
        <a href="https://arxiv.org/abs/2509.18008" class="btn btn-c" target="_blank" rel="noopener noreferrer">Paper</a>
        <a href="https://github.com/neuhai/human-agent-collab" class="btn btn-ghost" target="_blank" rel="noopener noreferrer">Code</a>
      </div>

      <figure class="figure-block platform-teaser">
        <figcaption class="figure-caption">Platform overview</figcaption>
        <div class="figure-frame">
          <img :src="teaserImg" alt="Human-Agent Collaboration Platform overview" />
        </div>
      </figure>

      <hr />

      <h3 class="sec-h3">Abstract</h3>
      <div class="platform-abstract">
        <figure class="platform-abstract-preview">
          <img :src="paperPreview" alt="Paper preview" />
        </figure>
        <div class="platform-abstract-text sec-body">
          <p>
            Intelligent systems have traditionally been designed as tools rather than collaborators, often lacking critical characteristics that partnerships require. Recent advances in large language model (LLM) agents open new opportunities for human-LLM Agent collaboration by enabling natural communication and various social and cognitive behaviors. Yet it remains unclear whether principles of computer-mediated collaboration established in HCI and CSCW persist, change, or fail when humans collaborate with LLM agents.
          </p>
          <p>
            To support systematic investigation of these questions, we introduce an open-source, extensible research platform for HCI researchers. The platform's modular design allows seamless adaptation of classic CSCW experiments and manipulation of theory-grounded interaction variables over user interfaces. We demonstrate the effectiveness and usability of our platform through two case studies with a re-implementation of the classic Shape Factory experiment; additionally, we conducted a participatory cognitive walkthrough with HCI researchers to refine workflows and interface design for experiment setup and result analysis.
          </p>
        </div>
      </div>

      <hr />

      <h3 class="sec-h3">Platform Demo Video</h3>
      <p class="sec-lead">
        A walkthrough of the platform interface, experiment configuration workflow, and analysis tools.
      </p>

      <figure class="figure-block platform-video">
        <div class="figure-frame figure-frame--video">
          <video
            ref="videoEl"
            :src="demoVideo"
            controls
            :poster="paperPreview"
            :style="{ aspectRatio: videoAspectRatio }"
            @loadedmetadata="onVideoLoadedMetadata"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </figure>

      <hr />

      <h3 class="sec-h3">Key Features</h3>
      <div class="platform-features sec-body-highlight sec-body-highlight-c">
        <p>
          Our <strong>Human-Agent Collaboration Platform</strong> provides researchers with a comprehensive toolkit for studying human-LLM agent interactions:
        </p>
        <ul>
          <li v-for="item in features" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="citation" class="section">
    <div class="container">
      <h2 class="sec-title">Citation</h2>
      <h4 class="cite-label cite-label-c">Human-Agent Collaboration Platform</h4>
      <CiteBox :text="platformCite" />
    </div>
  </section>
</template>

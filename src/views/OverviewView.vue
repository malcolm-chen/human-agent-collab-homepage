<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import CiteBox from '../components/CiteBox.vue'
import datasample from '../assets/almanac/datasample.png'
import actionflow from '../assets/collabsim/actionflow.png'
import platformTeaser from '../assets/platform/teaser.png'

const activeTeaser = ref('a')

const almanacCite = `{
to be added
}`

const collabsimCite = `{
to be added
}`

const platformCite = `@article{yao2025humanagent,
  title = {Through the Lens of Human-Human Collaboration: An Configurable Research Platform for Exploring Human-Agent Collaboration},
  author = {Bingsheng Yao and Jiaju Chen and Chaoran Chen and April Yi Wang and Toby Jia-Jun Li and Dakuo Wang},
  year = {2025},
  journal={arXiv preprint}
}`
</script>

<template>
  <div class="overview-page">
  <header class="hero">
    <h1>
      From Human Mental Models to <span class="hero-line2"><strong>Agent Collaborative Competence</strong></span>
    </h1>

    <p class="hero-sub">
      Effective collaboration depends on maintaining mental models of shared goals, partner intentions, and one's own reasoning. We study this along three complementary lines:
      <strong>ALMANAC</strong> captures how humans form and update these mental models during collaboration;
      <strong>CollabSim</strong> investigates LLM agents' collaborative competence through controlled multi-agent experiments;
      our <strong>Human-Agent Collaboration Platform</strong> provides an open-source research platform for HCI researchers studying human–LLM agent collaboration.
    </p>

    <!-- <div class="author-row">Anonymous Author List &nbsp;·&nbsp; Anonymous Institution</div> -->
    <p class="hero-lab">
      <a href="https://hailab.io/" target="_blank" rel="noopener noreferrer">Human-Centered AI Lab @ Northeastern University</a>
    </p>

    <div class="btn-row">
      <RouterLink to="/almanac" class="btn btn-a">Almanac Dataset</RouterLink>
      <RouterLink to="/collabsim" class="btn btn-b">CollabSim System</RouterLink>
      <RouterLink to="/platform" class="btn btn-c">HAC Platform</RouterLink>
    </div>

    <div class="teaser-wrap">
      <div class="teaser-tabs">
        <button
          type="button"
          class="teaser-tab"
          :class="{ 'active-a': activeTeaser === 'a' }"
          @click="activeTeaser = 'a'"
        >
          ALMANAC — Human Collaboration Dataset
        </button>
        <button
          type="button"
          class="teaser-tab"
          :class="{ 'active-b': activeTeaser === 'b' }"
          @click="activeTeaser = 'b'"
        >
          CollabSim — Multi-Agent Simulation Framework
        </button>
        <button
          type="button"
          class="teaser-tab"
          :class="{ 'active-c': activeTeaser === 'c' }"
          @click="activeTeaser = 'c'"
        >
          Platform — Human-Agent Collaboration Research Platform
        </button>
      </div>

      <div class="teaser-panel" :class="{ active: activeTeaser === 'a' }">
        <div class="teaser-grid">
          <div class="teaser-main">
            <p class="teaser-desc">
              <strong>ALMANAC</strong> is a dataset of humans' <strong>A</strong>ction-<strong>L</strong>evel <strong>M</strong>ental model <strong>AN</strong>notations for <strong>A</strong>gent <strong>C</strong>ollaboration, built from the Map Task, a classic dyadic routing task from social science. At every action, participants annotated their mental models: what they believed the team goal was, what they thought their partner intended, and what drove their own reasoning.
            </p>
            <div class="inline-tags">
              <span class="itag">Collaboration Theory</span>
              <span class="itag">Mental Models</span>
              <span class="itag">Common Ground</span>
              <span class="itag">Referential Grounding</span>
            </div>
            <div class="teaser-actions">
              <RouterLink to="/almanac" class="btn btn-a btn-sm">Project Page</RouterLink>
              <a href="#" class="btn btn-ghost btn-sm">Paper</a>
              <a href="#" class="btn btn-ghost btn-sm">Dataset</a>
            </div>
          </div>
          <div class="teaser-aside">
            <figure class="teaser-figure">
              <img :src="datasample" alt="ALMANAC action-level mental model annotations at time t and t+1" />
            </figure>
            <div class="teaser-stats">
              <div>
                <span class="stat-val stat-val-a">2,987</span>
                <span class="stat-lab">Annotated Actions</span>
              </div>
              <div>
                <span class="stat-val stat-val-a">50</span>
                <span class="stat-lab">Participants</span>
              </div>
              <div>
                <span class="stat-val stat-val-a">25</span>
                <span class="stat-lab">Collaboration Sessions</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="teaser-panel" :class="{ active: activeTeaser === 'b' }">
        <div class="teaser-grid">
          <div class="teaser-main">
            <p class="teaser-desc">
              CollabSim is a configurable simulation framework grounded in CSCW research. It supports systematic investigation across four axes: <strong>task paradigms</strong>, <strong>interaction conditions</strong> (communication bandwidth, information visibility, group size), <strong>model backbones</strong>, and <strong>agent designs</strong>. Together, these allow researchers to isolate what drives or breaks collaborative competence in LLM agents.
            </p>
            <div class="inline-tags">
              <span class="itag">Multi-Agent Systems</span>
              <span class="itag">Collaboration Theory</span>
              <span class="itag">Process-Level Evaluation</span>
            </div>
            <div class="teaser-actions">
              <RouterLink to="/collabsim" class="btn btn-b btn-sm">Project Page</RouterLink>
              <a href="#" class="btn btn-ghost btn-sm">Paper</a>
              <a href="#" class="btn btn-ghost btn-sm">Code</a>
            </div>
          </div>
          <div class="teaser-aside">
            <figure class="teaser-figure">
              <img :src="actionflow" alt="CollabSim experiment controller and agent action flow" />
            </figure>
            <div class="teaser-stats">
              <div>
                <span class="stat-val stat-val-b">4</span>
                <span class="stat-lab">Classic CSCW Collaboration Experimental Paradigms</span>
              </div>
              <div>
                <span class="stat-val stat-val-b">3+</span>
                <span class="stat-lab">Interactive Conditions</span>
              </div>
              <div>
                <span class="stat-val stat-val-b">12+</span>
                <span class="stat-lab">Model + Agent Designs</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="teaser-panel" :class="{ active: activeTeaser === 'c' }">
        <div class="teaser-grid">
          <div class="teaser-main">
            <p class="teaser-desc">
              The <strong>Human-Agent Collaboration Platform</strong> is an open-source, extensible research platform for HCI researchers. Its modular design supports seamless adaptation of classic CSCW experiments and theory-grounded manipulation of interaction variables over user interfaces, enabling systematic study of whether computer-mediated collaboration principles persist, change, or fail when humans collaborate with LLM agents.
            </p>
            <div class="inline-tags">
              <span class="itag">Human-Agent Collaboration</span>
              <span class="itag">CSCW</span>
              <span class="itag">LLM Agents</span>
              <span class="itag">Open Source</span>
            </div>
            <div class="teaser-actions">
              <RouterLink to="/platform" class="btn btn-c btn-sm">Project Page</RouterLink>
              <a href="https://arxiv.org/abs/2509.18008" class="btn btn-ghost btn-sm" target="_blank" rel="noopener noreferrer">Paper</a>
              <a href="https://github.com/neuhai/human-agent-collab" class="btn btn-ghost btn-sm" target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>
          <div class="teaser-aside">
            <figure class="teaser-figure">
              <img :src="platformTeaser" alt="Human-Agent Collaboration Platform overview" />
            </figure>
            <div class="teaser-stats">
              <div>
                <span class="stat-val stat-val-c">Customizable</span>
                <span class="stat-lab">Classic CSCW Experiment Paradigms</span>
              </div>
              <div>
                <span class="stat-val stat-val-c">Configurable</span>
                <span class="stat-lab">Experiment Condition and Agent Design</span>
              </div>
              <div>
                <span class="stat-val stat-val-c">Open</span>
                <span class="stat-lab">Source &amp; Extensible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <section id="citation" class="section">
    <div class="container">
      <h2 class="sec-title">Citation</h2>

      <h4 class="cite-label cite-label-a">Paper 1 — ALMANAC</h4>
      <CiteBox :text="almanacCite" />

      <h4 class="cite-label cite-label-b">Paper 2 — CollabSim</h4>
      <CiteBox :text="collabsimCite" />

      <h4 class="cite-label cite-label-c">Paper 3 — Human-Agent Collaboration Platform</h4>
      <CiteBox :text="platformCite" />
    </div>
  </section>
  </div>
</template>

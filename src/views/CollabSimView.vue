<script setup>
import AuthorCredits from '../components/AuthorCredits.vue'
import CiteBox from '../components/CiteBox.vue'
import { collabsimCredits } from '../data/authorCredits.js'
import ArchIcon from '../components/ArchIcon.vue'
import actionflow from '../assets/collabsim/actionflow.png'
import shapefactory from '../assets/collabsim/shapefactory.png'
import daytrader from '../assets/collabsim/daytrader.png'
import hiddenprofile from '../assets/collabsim/hiddenprofile.png'
import maptask from '../assets/collabsim/maptask.png'

const collabsimCite = `@article{chen2026collabsim,
  title={CollabSim: A CSCW-Grounded Methodology for Investigating Collaborative Competence of LLM Agents through Controlled Multi-Agent Experiments},
  author={Chen, Jiaju and Sun, Bo and Lu, Yuxuan and Wang, Yun and Wang, Dakuo and Yao, Bingsheng},
  journal={arXiv preprint arXiv:2606.06399},
  year={2026}
}`

const architectureLayers = [
  {
    icon: 'layers',
    title: 'Interaction layer',
    text: 'governs how agents perceive the task environment.',
  },
  {
    icon: 'settings',
    title: 'Control layer',
    text: 'orchestrates experiment configuration, execution, and evaluation.',
  },
]

const interactionConditions = [
  {
    icon: 'message',
    title: 'Communication Bandwidth',
    text: 'controls the frequency and length of messages agents can exchange, paralleling media richness manipulations in CSCW experiments.',
  },
  {
    icon: 'eye',
    title: 'Information Visibility',
    text: "controls what shared state information is accessible beyond private observations; for example, an awareness dashboard in Shape Factory displays teammates' balance and order progress, and a canvas visibility condition in Map Task lets the guide observe the follower's drawing progress.",
  },
  {
    icon: 'users',
    title: 'Group Size',
    text: 'varies the number of agents per session (e.g., 4/8/10 in Shape Factory, 3/6/9 in DayTrader) to examine how coordination demands scale.',
  },
]

const tasks = [
  {
    src: 'Shape Factory · Bos et al., 2004',
    title: 'Resource Coordination',
    text: 'Agents produce specialty shapes at lower cost and must negotiate trades to fulfill cross-specialty orders. Tests market coordination under cost asymmetry and incentive structure.',
    image: shapefactory,
    alt: 'Shape Factory resource coordination task interface',
    shared: false,
  },
  {
    src: 'DayTrader · Bos et al., 2002',
    title: 'Social Dilemma',
    text: 'Agents allocate funds between private investments (individual returns) and group investments (higher collective returns). Tests how agents balance self-interest against group benefit.',
    image: daytrader,
    alt: 'DayTrader social dilemma task interface',
    shared: false,
  },
  {
    src: 'Hidden Profile · Stasser & Titus, 1985',
    title: 'Information Pooling',
    text: 'Decision-relevant information is distributed so no single agent can identify the optimal candidate. Agents must exchange unique facts and collectively revise their decision.',
    image: hiddenprofile,
    alt: 'Hidden Profile information pooling task interface',
    shared: false,
  },
  {
    src: 'Map Task · Anderson et al., 1991',
    title: 'Referential Grounding',
    text: 'A guide must instruct a follower to reproduce a route through text-based chat only. Directly comparable to human data from ALMANAC, enabling human–agent benchmarking.',
    image: maptask,
    alt: 'Map Task referential grounding task interface',
    shared: true,
  },
]

const findings = [
  {
    index: '01',
    title: 'Bandwidth Cuts Cooperation',
    text: "Restricting communication consistently lowers cooperation across all tasks. Agents don't strategically prioritize grounding exchanges — Llama-4 drops from 61.2% to 0% cooperation rate in DayTrader.",
  },
  {
    index: '02',
    title: 'Visibility Boosts Engagement',
    text: 'Canvas visibility in Map Task raises drawing revision rates and route accuracy (GPT-5.5: 0.52 → 0.98). In Shape Factory, the awareness dashboard raises trade acceptance across all models.',
  },
  {
    index: '03',
    title: 'Reported ≠ Behavioral Alignment',
    text: 'In large DayTrader groups, agents report higher grounding confidence while contributing less to the shared pool — revealing a diagnostic gap between self-report and actual cooperation.',
  },
  {
    index: '04',
    title: 'GPT-5.5 Leads, but Not Everywhere',
    text: 'GPT-5.5 ranks top-2 in three of four tasks, but has the lowest wealth in DayTrader. Claude 4.6 excels at sustained cooperative investment but fails at structured deliberation in Hidden Profile.',
  },
  {
    index: '05',
    title: 'Theory-Informed Design ≠ Always Better',
    text: 'Collaboration-theory-informed agents improve cooperation in many settings, but reduce accuracy in Hidden Profile under bandwidth constraints — explicit mentalizing adds coordination overhead.',
  },
  {
    index: '06',
    title: 'Larger Groups Create Coordination Strain',
    text: 'More participants expand trading opportunities but lower order fulfillment rates in Shape Factory, reflecting the classic CSCW tension between collaboration benefit and coordination overhead.',
  },
]
</script>

<template>
  <section class="section page-intro">
    <div class="container">
      <div class="sec-eyebrow sec-eyebrow-b">The CollabSim System</div>
      <h2 class="sec-title"><strong>CollabSim</strong>: A CSCW-Grounded Methodology for Investigating
Collaborative Competence of LLM Agents through Controlled Multi-Agent
Experiments</h2>
      <p class="sec-body sec-body-highlight sec-body-highlight-b">
        <strong>CollabSim</strong> is a configurable simulation framework that combines a theory-grounded definition of collaborative capabilities, controlled manipulation of interaction conditions, and action-level probing of agents' internal states.
        Our experiments across four LLMs show that <strong>CollabSim</strong> can capture condition effects, separate model performance patterns, and reveal task-dependent effects of agent design.
      </p>

      <AuthorCredits
        theme="b"
        :authors="collabsimCredits.authors"
        :affiliations="collabsimCredits.affiliations"
      />

      <div class="btn-row page-actions">
        <a href="#" class="btn btn-b">Paper</a>
        <a href="#" class="btn btn-ghost">Code</a>
      </div>

      <hr />

      <h3 class="sec-h3">System Architecture</h3>
      <p class="sec-lead arch-intro">
        CollabSim organizes its architecture into two layers:
      </p>
      <ul class="arch-list">
        <li v-for="layer in architectureLayers" :key="layer.title">
          <span class="arch-icon" aria-hidden="true">
            <ArchIcon :name="layer.icon" />
          </span>
          <span class="arch-list-text">
            <strong>{{ layer.title }}</strong> — {{ layer.text }}
          </span>
        </li>
      </ul>
      <p class="sec-lead arch-intro-tail">
        At each turn, the task maintains a shared state; each agent receives an
        observation, selects an action, and the state transitions according to
        task-specific dynamics.
      </p>

      <figure class="figure-block figure-block--arch">
        <figcaption class="figure-caption">Action flow</figcaption>
        <div class="figure-frame">
          <img :src="actionflow" alt="CollabSim experiment controller and agent action flow" />
        </div>
      </figure>

      <div class="arch-notes">
        <div class="arch-para">
          <h4>
            <span class="arch-icon arch-icon--heading" aria-hidden="true">
              <ArchIcon name="protocol" />
            </span>
            Interaction Layer — Agent Context Protocol
          </h4>
          <p>
            The Agent Context Protocol defines the interface through which agents perceive
            the task environment and act. Initialized with experiment rules and agent
            persona, it constructs each agent's observation at turn <em>t</em> by combining
            a <em>public update</em> (the shared task state filtered by information-visibility
            rules) with a <em>private state</em> carrying agent-specific facts such as
            remaining production capacity or assigned candidate materials. The agent then
            selects an action from its action space. By standardizing how context is
            constructed and delivered, the protocol lets diverse tasks share a unified
            agent interface while preserving task-specific semantics.
          </p>
        </div>
        <div class="arch-para">
          <h4>
            <span class="arch-icon arch-icon--heading" aria-hidden="true">
              <ArchIcon name="controller" />
            </span>
            Control Layer — Experiment Controller
          </h4>
          <p>
            The Experiment Controller manages simulation execution through a turn-based loop
            driven by a <code>.yml</code> configuration file, which specifies agent roles,
            LLM backend settings, interaction conditions, task parameters, and probing
            questions. At each turn, the Controller constructs observations via the Agent
            Context Protocol, queries the agent for the next action, validates the returned
            action, applies its effects to transition the shared state, and triggers the
            Probing Module before the next turn. All observations, actions, and probe
            responses are logged in structured JSON for downstream analysis.
          </p>
        </div>
      </div>

      <hr />

      <h3 class="sec-h3">Four CSCW-Grounded Task Paradigms</h3>
      <p class="sec-lead">
        Each task targets a distinct dimension of collaborative competence, drawn from established
        social science experiments.
      </p>

      <div class="task-list">
        <div
          v-for="task in tasks"
          :key="task.title"
          class="task-row"
          :class="{ 'shared-task': task.shared }"
        >
          <figure class="task-row-figure">
            <img :src="task.image" :alt="task.alt" />
          </figure>
          <div class="task-row-body">
            <div class="task-src">{{ task.src }}</div>
            <h4>{{ task.title }}</h4>
            <p>{{ task.text }}</p>
          </div>
        </div>
      </div>

      <hr />

      <h3 class="sec-h3">Configurable Interaction Conditions</h3>
      <p class="sec-lead arch-intro">
        CSCW research has established that collaboration dynamics are shaped by the richness
        of communication channels, the visibility of teammates' states, and team structure.
        CollabSim translates these factors into three categories of configurable experimental
        variables:
      </p>
      <ul class="arch-list">
        <li v-for="condition in interactionConditions" :key="condition.title">
          <span class="arch-icon" aria-hidden="true">
            <ArchIcon :name="condition.icon" />
          </span>
          <span class="arch-list-text">
            <strong>{{ condition.title }}</strong> — {{ condition.text }}
          </span>
        </li>
      </ul>
      <p class="sec-lead arch-intro-tail">
        The table below summarizes the conditions available for each task.
      </p>

      <div class="table-scroll">
      <table class="cond-table">
        <thead>
          <tr>
            <th>Condition</th>
            <th>Shape Factory</th>
            <th>DayTrader</th>
            <th>Hidden Profile</th>
            <th>Map Task</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Communication Bandwidth</td>
            <td class="check">✓</td>
            <td class="check">✓</td>
            <td class="check">✓</td>
            <td class="check">✓</td>
          </tr>
          <tr>
            <td>Group Size</td>
            <td class="check">✓ (4, 8, 10)</td>
            <td class="check">✓ (3, 6, 9)</td>
            <td class="dash">—</td>
            <td class="dash">—</td>
          </tr>
          <tr>
            <td>Information Visibility</td>
            <td class="check">✓ (dashboard)</td>
            <td class="dash">—</td>
            <td class="dash">—</td>
            <td class="check">✓ (canvas)</td>
          </tr>
        </tbody>
      </table>
      </div>

      <hr />

    </div>
  </section>

  <section id="citation" class="section">
    <div class="container">
      <h2 class="sec-title">Citation</h2>
      <CiteBox :text="collabsimCite" />
    </div>
  </section>
</template>

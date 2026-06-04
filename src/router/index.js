import { createRouter, createWebHistory } from 'vue-router'
import OverviewView from '../views/OverviewView.vue'
import AlmanacView from '../views/AlmanacView.vue'
import CollabSimView from '../views/CollabSimView.vue'
import PlatformView from '../views/PlatformView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'overview', component: OverviewView },
    { path: '/almanac', name: 'almanac', component: AlmanacView },
    { path: '/collabsim', name: 'collabsim', component: CollabSimView },
    { path: '/platform', name: 'platform', component: PlatformView },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router

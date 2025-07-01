import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Pages/Home.vue';
import VideoDetails from '../Pages/VideoDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id',
    name: 'Video',
    component: VideoDetails
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;

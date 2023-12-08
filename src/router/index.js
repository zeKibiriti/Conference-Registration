// Composables
import { createRouter, createWebHistory } from 'vue-router'
import SlideshowPage from "@/components/SlideshowPage";
import ConferenceRegistration from "@/components/ConferenceRegistration";
import Navigation from "@/components/Navigation";

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  // {
  //   path: '/test-page',
  //   name: "TEST",
  //   component: TestPage
  // },
  {
    path: '/registration-page',
    name: "Conference Registration",
    component: ConferenceRegistration
  },
  {
    path: '/home-page',
    name: "Home",
    component: SlideshowPage
  },

  {
    path: '/navigation-page',
    name: "Navigation",
    component: Navigation
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

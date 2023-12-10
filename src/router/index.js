// Composables
import { createRouter, createWebHistory } from 'vue-router'
import SlideshowPage from "@/components/SlideshowPage";
import ConferenceRegistration from "@/components/ConferenceRegistration";
import Login from "@/components/Login";

import About from "@/components/About";

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
      {
        path: '/registration-page',
        name: "Conference Registration",
        component: ConferenceRegistration
      },
      {
        path: '/about-page',
        name: "Conference About",
        component: About
      },
      {
        path: '/login-page',
        name: "Login",
        component: Login
      },
    ],
  },
 
  {
    path: '/home-page',
    name: "Home",
    component: SlideshowPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

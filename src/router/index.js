import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../firebase/config';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import SignupView from '../views/SignupView.vue';
import UploadView from '../views/UploadView.vue';
import GalleryView from '../views/GalleryView.vue';
import PartyInvitation from '../views/PartyInvitation.vue' // Import your party invitation component
import McmButtonDemo from '../components/McmButtonDemo.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/upload',
    name: 'upload',
    component: UploadView,
    meta: { requiresAuth: true }
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView
  },
  {
    path: '/party-invitation',
    name: 'PartyInvitation',
    component: PartyInvitation
  },
  {
    path: '/buttons',
    name: 'buttons',
    component: McmButtonDemo
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation guard for protected routes
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = auth.currentUser;

  if (requiresAuth && !currentUser) {
    next('/login');
  } else {
    next();
  }
});

export default router;
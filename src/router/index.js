import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import SignupView from '../views/SignupView.vue';
import UploadView from '../views/UploadView.vue';
import GalleryView from '../views/GalleryView.vue';
import PartyInvitation from '../views/PartyInvitation.vue';
import AdminDashboard from '../views/AdminDashboard.vue';
import UserProfile from '../views/UserProfile.vue';
import DashboardView from '../views/DashboardView.vue';

const routes = [
  {
    path: '/',
    redirect: '/party-invitation' // Add this redirect
  },
  {
    path: '/party-invitation',
    name: 'PartyInvitation',
    component: () => import('../views/PartyInvitation.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/SignupView.vue')
  },
  {
    path: '/auth-choice',
    name: 'AuthChoice',
    component: () => import('../views/AuthChoice.vue')
  },
  // Protected routes
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/GalleryView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () => import('../views/UploadView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/UserProfile.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/AdminDashboard.vue'),
    meta: { requiresAuth: true, requiresAdmin: true }
  },
  // 404 route
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: {
      template: '<div class="min-h-screen flex items-center justify-center"><div class="text-center"><h1 class="text-4xl font-bold text-gray-800">404</h1><p class="text-xl text-gray-600">Page not found</p><router-link to="/" class="mt-4 inline-block px-4 py-2 bg-shafali-purple text-white rounded-md">Go Home</router-link></div></div>'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Always scroll to top when navigating
    return { top: 0 };
  }
});

// Create a promise to properly handle auth state initialization
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
};

// Navigation guard for protected routes
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);
  const currentUser = auth.currentUser;

  const adminEmails = ['artisanbranding@gmail.com', 'ShafaliSpurlingJeste@gmail.com'];

  if (requiresAuth && !currentUser) {
    next({
      path: '/auth-choice',
      query: { redirect: to.fullPath }
    });
  }
  else if (requiresAdmin && (!currentUser || !adminEmails.includes(currentUser.email))) {
    next({ path: '/' });
  }
  else {
    next();
  }
});
export default router;
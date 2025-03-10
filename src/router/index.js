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
    redirect: '/party-invitation' // Redirect root path to party-invitation
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: { requiresAuth: true }
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
    component: GalleryView,
    meta: { requiresAuth: true } // Added auth requirement for gallery
  },
  {
    path: '/party-invitation',
    name: 'PartyInvitation',
    component: PartyInvitation
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminDashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfile,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
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
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  if (requiresAuth) {
    // Wait for auth state to initialize
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      // Save the intended destination to redirect after login
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
      return;
    }

    if (requiresAdmin) {
      // Check if user has admin rights (for a real app, you'd fetch this from Firestore)
      // For demonstration, we'll check if their email matches an admin email
      const adminEmails = ['artisanb@me.com']; // Add your admin emails here

      if (adminEmails.includes(currentUser.email)) {
        next();
      } else {
        alert('You do not have permission to access the admin dashboard');
        next('/');
      }
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
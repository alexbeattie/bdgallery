import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../firebase/config';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import SignupView from '../views/SignupView.vue';
import UploadView from '../views/UploadView.vue';
import GalleryView from '../views/GalleryView.vue';
import PartyInvitation from '../views/PartyInvitation.vue';
import AdminDashboard from '../views/AdminDashboard.vue';
import UserProfile from '../views/UserProfile.vue';
import DashboardView from '../views/DashboardView.vue';
import McmButtonDemo from '../components/McmButtonDemo.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
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
    path: '/admin',
    name: 'admin',
    component: AdminDashboard,
    meta: { requiresAuth: true, requiresAdmin: true }
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfile,
    meta: { requiresAuth: true }
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
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);
  const currentUser = auth.currentUser;

  if (requiresAuth && !currentUser) {
    next('/login');
  } else if (requiresAdmin) {
    // Check if user has admin rights (for a real app, you'd fetch this from Firestore)
    // For demonstration, we'll check if their email matches an admin email
    const adminEmails = ['admin@example.com']; // Add your admin emails here

    if (currentUser && adminEmails.includes(currentUser.email)) {
      next();
    } else {
      alert('You do not have permission to access the admin dashboard');
      next('/');
    }
  } else {
    next();
  }
});

export default router;
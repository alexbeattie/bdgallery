<template>
  <nav class="bg-gray-900 border-b-2 border-amber-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center">
            <!-- Mid-century starburst icon -->
            <span class="w-8 h-8 mr-2">
              <svg viewBox="0 0 100 100" class="w-full h-full text-amber-500">
                <path d="M50 0 L55 40 L95 45 L55 50 L50 90 L45 50 L5 45 L45 40 Z" fill="currentColor"/>
              </svg>
            </span>
            <span class="text-white font-medium text-xl tracking-wider uppercase">Birthday Celebration</span>
          </router-link>
        </div>
        
        <!-- Desktop menu -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-4">
            <router-link 
              to="/party-invitation" 
              class="px-5 py-2 bg-amber-500 text-white font-medium tracking-wide uppercase transform -rotate-1 hover:rotate-0 transition-transform duration-300"
            >
              Party!
            </router-link>
            <router-link to="/gallery" class="text-gray-300 hover:text-amber-500 px-3 py-2 uppercase tracking-wide font-light">
              Gallery
            </router-link>
            <router-link to="/upload" class="text-gray-300 hover:text-amber-500 px-3 py-2 uppercase tracking-wide font-light">
              Upload
            </router-link>
            <template v-if="user">
              <a 
                href="#" 
                @click.prevent="handleLogout" 
                class="text-gray-300 hover:text-amber-500 px-3 py-2 uppercase tracking-wide font-light"
              >
                Logout
              </a>
            </template>
            <template v-else>
              <router-link to="/login" class="text-gray-300 hover:text-amber-500 px-3 py-2 uppercase tracking-wide font-light">
                Login
              </router-link>
              <router-link to="/signup" class="text-gray-300 hover:text-amber-500 px-3 py-2 uppercase tracking-wide font-light">
                Signup
              </router-link>
            </template>
          </div>
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="toggleMobileMenu" 
            type="button" 
            class="inline-flex items-center justify-center p-2 rounded-md text-amber-500 hover:text-white focus:outline-none"
          >
            <svg 
              class="h-6 w-6" 
              :class="{'hidden': mobileMenuOpen, 'block': !mobileMenuOpen}" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              class="h-6 w-6" 
              :class="{'block': mobileMenuOpen, 'hidden': !mobileMenuOpen}" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div class="md:hidden" :class="{'block': mobileMenuOpen, 'hidden': !mobileMenuOpen}">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-700">
        <router-link 
          to="/party-invitation" 
          class="block px-3 py-2 bg-amber-500 text-white font-medium text-center tracking-wide uppercase transform -rotate-1"
        >
          Party!
        </router-link>
        <router-link 
          to="/gallery" 
          class="block px-3 py-2 text-gray-300 hover:text-amber-500 uppercase tracking-wide font-light"
        >
          Gallery
        </router-link>
        <router-link 
          to="/upload" 
          class="block px-3 py-2 text-gray-300 hover:text-amber-500 uppercase tracking-wide font-light"
        >
          Upload
        </router-link>
        <template v-if="user">
          <a 
            href="#" 
            @click.prevent="handleLogout" 
            class="block px-3 py-2 text-gray-300 hover:text-amber-500 uppercase tracking-wide font-light"
          >
            Logout
          </a>
        </template>
        <template v-else>
          <router-link 
            to="/login" 
            class="block px-3 py-2 text-gray-300 hover:text-amber-500 uppercase tracking-wide font-light"
          >
            Login
          </router-link>
          <router-link 
            to="/signup" 
            class="block px-3 py-2 text-gray-300 hover:text-amber-500 uppercase tracking-wide font-light"
          >
            Signup
          </router-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';

export default {
  name: 'NavBar',
  setup() {
    const router = useRouter();
    const user = ref(null);
    const mobileMenuOpen = ref(false);
    let unsubscribe = null;

    onMounted(() => {
      unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser;
      });
    });

    onUnmounted(() => {
      if (unsubscribe) unsubscribe();
    });

    const handleLogout = async () => {
      try {
        await signOut(auth);
        router.push('/login');
      } catch (error) {
        console.error('Error signing out:', error);
      }
    };

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value;
    };

    return {
      user,
      mobileMenuOpen,
      handleLogout,
      toggleMobileMenu
    };
  }
};
</script>
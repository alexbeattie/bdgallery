<template>
  <nav
    class="bg-gray-900 border-b-2"
    :class="[isDarkMode ? 'border-shafali-purple' : 'border-shafali-light-purple']"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center">
            <!-- Mid-century starburst icon -->
            <span class="w-8 h-8 mr-2">
              <svg
                viewBox="0 0 100 100"
                class="w-full h-full"
                :class="isDarkMode ? 'text-white' : 'text-white'"
              >
                <path
                  d="M50 0 L55 40 L95 45 L55 50 L50 90 L45 50 L5 45 L45 40 Z"
                  fill="white"
                />
              </svg>
            </span>
            <span class="text-white font-medium text-xl tracking-wider uppercase"
              >Shafali's 50th Party</span
            >
          </router-link>
        </div>

        <!-- Desktop menu -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-4">
            <router-link
              to="/party-invitation"
              class="px-5 py-2 font-medium tracking-wide uppercase transform -rotate-1 hover:rotate-0 transition-transform duration-300"
              :class="[
                isDarkMode ? 'bg-shafali-purple' : 'bg-shafali-light-purple',
                route.path === '/party-invitation'
                  ? 'text-white font-bold'
                  : 'text-gray-300',
              ]"
            >
              Party!
            </router-link>

            <!-- Protected routes only shown to logged-in users -->
            <template v-if="user">
              <router-link
                to="/gallery"
                class="px-3 py-2 uppercase tracking-wide font-light transition-all"
                :class="[
                  route.path === '/gallery'
                    ? 'text-white font-bold border-b-2 border-shafali-purple'
                    : 'text-gray-300',
                  isDarkMode ? 'hover:text-shafali-purple' : 'hover:text-shafali-light-purple',
                ]"
              >
                Gallery
              </router-link>

              <router-link
                to="/upload"
                class="px-3 py-2 uppercase tracking-wide font-light transition-all"
                :class="[
                  route.path === '/upload'
                    ? 'text-white font-bold border-b-2 border-shafali-purple'
                    : 'text-gray-300',
                  isDarkMode ? 'hover:text-shafali-purple' : 'hover:text-shafali-light-purple',
                ]"
              >
                Upload
              </router-link>

              <router-link
                to="/dashboard"
                class="px-3 py-2 uppercase tracking-wide font-light transition-all"
                :class="[
                  route.path === '/dashboard'
                    ? 'text-white font-bold border-b-2 border-shafali-purple'
                    : 'text-gray-300',
                  isDarkMode ? 'hover:text-shafali-purple' : 'hover:text-shafali-light-purple',
                ]"
              >
                Dashboard
              </router-link>
            </template>

            <!-- Authentication Links -->
            <template v-if="!user">
              <!-- Bold login button with high visibility - redirects to auth-choice -->
              <router-link
                to="/auth-choice?redirect=/upload"
                class="px-4 py-2 text-white font-bold uppercase tracking-wide bg-shafali-purple rounded-md shadow-md hover:bg-shafali-light-purple transition-all transform hover:scale-105 flex items-center"
              >
                <span class="mr-1">📷</span> Upload Photos
              </router-link>
              
              <router-link
                to="/signup"
                class="text-gray-300 px-3 py-2 uppercase tracking-wide font-light"
                :class="{
                  'hover:text-shafali-purple': isDarkMode,
                  'hover:text-shafali-light-purple': !isDarkMode,
                }"
              >
                Signup
              </router-link>
            </template>

            <!-- User Menu Dropdown -->
            <div v-else class="relative ml-3 user-menu">
              <button
                @click="userMenuOpen = !userMenuOpen"
                class="flex items-center focus:outline-none"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <span
                  class="h-8 w-8 rounded-full bg-shafali-purple flex items-center justify-center text-white"
                  :class="{ 'bg-shafali-light-purple': isDarkMode }"
                >
                  {{ user.email.charAt(0).toUpperCase() }}
                </span>
              </button>

              <!-- Dropdown menu -->
              <div
                v-if="userMenuOpen"
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-shafali-dark-blue py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <router-link
                  to="/profile"
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-700 hover:bg-gray-100 dark:hover:bg-shafali-blue"
                  @click="userMenuOpen = false"
                >
                  Your Profile
                </router-link>
                <router-link
                  to="/upload"
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-700 hover:bg-gray-100 dark:hover:bg-shafali-blue"
                  @click="userMenuOpen = false"
                >
                  Upload Photos
                </router-link>
                <template v-if="isAdmin">
                  <router-link
                    to="/admin"
                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-700 hover:bg-gray-100 dark:hover:bg-shafali-blue"
                    @click="userMenuOpen = false"
                  >
                    Admin Dashboard
                  </router-link>
                </template>
                <button
                  @click="handleLogout"
                  class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-700 hover:bg-gray-100 dark:hover:bg-shafali-blue"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button
            @click="toggleMobileMenu"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-white"
          >
            <svg
              class="h-6 w-6"
              :class="{ hidden: mobileMenuOpen, block: !mobileMenuOpen }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              class="h-6 w-6"
              :class="{ block: mobileMenuOpen, hidden: !mobileMenuOpen }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div class="md:hidden" :class="{ block: mobileMenuOpen, hidden: !mobileMenuOpen }">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-700">
        <router-link
          to="/party-invitation"
          class="block px-5 py-2 font-medium tracking-wide uppercase transform -rotate-1 hover:rotate-0 transition-transform duration-700"
          :class="[
            isDarkMode ? 'bg-shafali-purple' : 'bg-shafali-light-purple',
            route.path === '/party-invitation' ? 'text-white font-bold' : 'text-gray-700',
          ]"
        >
          Party!
        </router-link>
        
        <!-- Protected routes in mobile view -->
        <template v-if="user">
          <router-link
            to="/gallery"
            class="block px-3 py-2 uppercase tracking-wide font-light transition-all"
            :class="[
              route.path === '/gallery'
                ? 'text-white font-bold border-b-2 border-shafali-purple'
                : 'text-gray-300',
              isDarkMode ? 'hover:text-shafali-purple' : 'hover:text-shafali-light-purple',
            ]"
          >
            Gallery
          </router-link>

          <router-link
            to="/upload"
            class="block px-3 py-2 uppercase tracking-wide font-light transition-all"
            :class="[
              route.path === '/upload'
                ? 'text-white font-bold border-b-2 border-shafali-purple'
                : 'text-gray-300',
              isDarkMode ? 'hover:text-shafali-purple' : 'hover:text-shafali-light-purple',
            ]"
          >
            Upload
          </router-link>

          <router-link
            to="/dashboard"
            class="block px-3 py-2 uppercase tracking-wide font-light transition-all"
            :class="[
              route.path === '/dashboard'
                ? 'text-white font-bold border-b-2 border-shafali-purple'
                : 'text-gray-300',
              isDarkMode ? 'hover:text-shafali-purple' : 'hover:text-shafali-light-purple',
            ]"
          >
            Dashboard
          </router-link>
        </template>

        <template v-if="user">
          <router-link
            to="/profile"
            class="block px-3 py-2 text-gray-300 uppercase tracking-wide font-light"
            :class="{
              'hover:text-shafali-purple': isDarkMode,
              'hover:text-shafali-light-purple': !isDarkMode,
            }"
          >
            Profile
          </router-link>

          <template v-if="isAdmin">
            <router-link
              to="/admin"
              class="block px-3 py-2 text-gray-300 uppercase tracking-wide font-light"
              :class="{
                'hover:text-shafali-purple': isDarkMode,
                'hover:text-shafali-light-purple': !isDarkMode,
              }"
            >
              Admin
            </router-link>
          </template>

          <button
            @click="handleLogout"
            class="block w-full text-left px-3 py-2 text-gray-300 uppercase tracking-wide font-light"
            :class="{
              'hover:text-shafali-purple': isDarkMode,
              'hover:text-shafali-light-purple': !isDarkMode,
            }"
          >
            Logout
          </button>
        </template>
        <template v-else>
          <!-- Bold login button in mobile menu - redirects to auth-choice -->
          <router-link
            to="/auth-choice?redirect=/upload"
            class="block px-4 py-3 text-white font-bold uppercase tracking-wide bg-shafali-purple rounded-md shadow-md mb-2 text-center"
          >
            📷 Upload Photos
          </router-link>
          
          <router-link
            to="/signup"
            class="block px-3 py-2 text-gray-300 uppercase tracking-wide font-light"
            :class="{
              'hover:text-shafali-purple': isDarkMode,
              'hover:text-shafali-light-purple': !isDarkMode,
            }"
          >
            Signup
          </router-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

export default {
  name: "UnifiedNavBar",
  props: {
    isDarkMode: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const user = ref(null);
    const mobileMenuOpen = ref(false);
    const userMenuOpen = ref(false);
    const isAdmin = ref(false);
    let unsubscribe = null;

    // List of admin emails for checking privileges
    const adminEmails = ["artisanbranding@gmail.com", "ShafaliSpurlingJeste@gmail.com"]; // Add your admin emails here

    onMounted(() => {
      unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser;

        // Check if user is an admin
        if (currentUser && adminEmails.includes(currentUser.email)) {
          isAdmin.value = true;
        } else {
          isAdmin.value = false;
        }
        
        // Redirect from protected routes if not logged in
        const protectedRoutes = ['/gallery', '/upload', '/dashboard'];
        if (!currentUser && protectedRoutes.includes(route.path)) {
          router.push('/auth-choice?redirect=' + route.path);
        }
      });

      // Close user menu when clicking outside
      document.addEventListener("click", handleClickOutside);
    });

    onUnmounted(() => {
      if (unsubscribe) unsubscribe();
      document.removeEventListener("click", handleClickOutside);
    });

    // Function to handle clicking outside the user menu
    const handleClickOutside = (event) => {
      // Get menu element
      const menu = document.querySelector(".user-menu");

      // If clicking outside the menu and menu is open, close it
      if (menu && !menu.contains(event.target) && userMenuOpen.value) {
        userMenuOpen.value = false;
      }
    };

    const handleLogout = async () => {
      try {
        await signOut(auth);
        router.push("/login");
        userMenuOpen.value = false;
      } catch (error) {
        console.error("Error signing out:", error);
      }
    };

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value;
    };

    // Close menus on route change
    watch(route, () => {
      userMenuOpen.value = false;
      mobileMenuOpen.value = false;
    });

    return {
      user,
      route,
      mobileMenuOpen,
      userMenuOpen,
      isAdmin,
      handleLogout,
      toggleMobileMenu,
    };
  },
};
</script>
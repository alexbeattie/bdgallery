<template>
  <nav class="bg-gray-900 border-b-2">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center">
            <!-- Mid-century starburst icon -->
            <span class="w-8 h-8 mr-2">
              <svg viewBox="0 0 100 100" class="w-full h-full" fill="white">
                <path
                  d="M50 0 L55 40 L95 45 L55 50 L50 90 L45 50 L5 45 L45 40 Z"
                  fill="white"
                />
              </svg>
            </span>
            <span
              class="text-white font-medium text-xl tracking-wider uppercase"
              >Shafali's 50th Party
            </span>
          </router-link>
        </div>

        <!-- Desktop menu -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-4">
            <router-link
              to="/party-invitation"
              class="px-5 py-2 font-medium tracking-wide uppercase duration-"
              :class="[
                ,
                route.path === '/party-invitation'
                  ? 'text-white font-bold'
                  : 'text-gray-800',
              ]"
            >
              Party!
            </router-link>

            <router-link
              to="/gallery"
              class="px-3 py-2 uppercase tracking-wide font-light transition-all"
              :class="[
                route.path === '/gallery'
                  ? 'text-white font-bold border-b-2 border-mcm-orange-500'
                  : 'text-gray-800',
                isDarkMode
                  ? 'hover:text-mcm-orange-500'
                  : 'hover:text-amber-500',
              ]"
            >
              Gallery
            </router-link>

            <router-link
              to="/upload"
              class="px-3 py-2 uppercase tracking-wide font-light transition-all"
              :class="[
                route.path === '/upload'
                  ? 'text-white font-bold border-b-2 border-mcm-orange-500'
                  : 'text-gray-800',
                isDarkMode
                  ? 'hover:text-mcm-orange-500'
                  : 'hover:text-amber-500',
              ]"
            >
              Upload
            </router-link>

            <router-link
              to="/dashboard"
              class="px-3 py-2 uppercase tracking-wide font-light transition-all"
              :class="[
                route.path === '/dashboard'
                  ? 'text-white font-bold border-b-2 border-mcm-orange-500'
                  : 'text-gray-800',
                isDarkMode
                  ? 'hover:text-mcm-orange-500'
                  : 'hover:text-amber-500',
              ]"
            >
              Dashboard
            </router-link>

            <!-- Authentication Links -->
            <template v-if="!user">
              <router-link
                to="/login"
                class="text-gray-800 px-3 py-2 uppercase tracking-wide font-light"
                :class="{
                  'hover:text-mcm-orange-500': isDarkMode,
                  'hover:text-amber-500': !isDarkMode,
                }"
              >
                Login
              </router-link>
              <router-link
                to="/signup"
                class="text-gray-800 px-3 py-2 uppercase tracking-wide font-light"
                :class="{
                  'hover:text-mcm-orange-500': isDarkMode,
                  'hover:text-amber-500': !isDarkMode,
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
                  class="h-8 w-8 rounded-full bg-mcm-amber-500 flex items-center justify-center text-white"
                  :class="{ 'bg-mcm-orange-500': isDarkMode }"
                >
                  {{ user.email.charAt(0).toUpperCase() }}
                </span>
              </button>

              <!-- Dropdown menu -->
              <div
                v-if="userMenuOpen"
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-mcm-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <router-link
                  to="/profile"
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-800 hover:bg-gray-100 dark:hover:bg-mcm-gray-700"
                  @click="userMenuOpen = false"
                >
                  Your Profile
                </router-link>
                <router-link
                  to="/upload"
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-800 hover:bg-gray-100 dark:hover:bg-mcm-gray-700"
                  @click="userMenuOpen = false"
                >
                  Upload Photos
                </router-link>
                <template v-if="isAdmin">
                  <router-link
                    to="/admin"
                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-800 hover:bg-gray-100 dark:hover:bg-mcm-gray-700"
                    @click="userMenuOpen = false"
                  >
                    Admin Dashboard
                  </router-link>
                </template>
                <button
                  @click="handleLogout"
                  class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-800 hover:bg-gray-100 dark:hover:bg-mcm-gray-700"
                >
                  Sign out
                </button>
              </div>
            </div>

            <!-- Theme toggle button -->
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <!-- Theme toggle button (mobile) -->
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      class="md:hidden"
      :class="{ block: mobileMenuOpen, hidden: !mobileMenuOpen }"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-700">
        <router-link
          to="/party-invitation"
          class="block px-5 py-2 font-medium tracking-wide uppercase duration-300"
          :class="[
            isDarkMode ? 'bg-mcm-orange-500' : 'bg-amber-500',
            route.path === '/party-invitation'
              ? 'text-white font-bold'
              : 'text-gray-800',
          ]"
        >
          Party!
        </router-link>
        <router-link
          to="/gallery"
          class="block px-3 py-2 uppercase tracking-wide font-light transition-all"
          :class="[
            route.path === '/gallery'
              ? 'text-white font-bold border-b-2 border-mcm-orange-500'
              : 'text-gray-800',
            isDarkMode ? 'hover:text-mcm-orange-500' : 'hover:text-amber-500',
          ]"
        >
          Gallery
        </router-link>

        <router-link
          to="/upload"
          class="block px-3 py-2 uppercase tracking-wide font-light transition-all"
          :class="[
            route.path === '/upload'
              ? 'text-white font-bold border-b-2 border-mcm-orange-500'
              : 'text-gray-800',
            isDarkMode ? 'hover:text-mcm-orange-500' : 'hover:text-amber-500',
          ]"
        >
          Upload
        </router-link>

        <router-link
          to="/dashboard"
          class="block px-3 py-2 uppercase tracking-wide font-light transition-all"
          :class="[
            route.path === '/dashboard'
              ? 'text-white font-bold border-b-2 border-mcm-orange-500'
              : 'text-gray-800',
            isDarkMode ? 'hover:text-mcm-orange-500' : 'hover:text-amber-500',
          ]"
        >
          Dashboard
        </router-link>

        <template v-if="user">
          <router-link
            to="/profile"
            class="block px-3 py-2 text-gray-800 uppercase tracking-wide font-light"
            :class="{
              'hover:text-mcm-orange-500': isDarkMode,
              'hover:text-amber-500': !isDarkMode,
            }"
          >
            Profile
          </router-link>

          <template v-if="isAdmin">
            <router-link
              to="/admin"
              class="block px-3 py-2 text-gray-800 uppercase tracking-wide font-light"
              :class="{
                'hover:text-mcm-orange-500': isDarkMode,
                'hover:text-amber-500': !isDarkMode,
              }"
            >
              Admin
            </router-link>
          </template>

          <button
            @click="handleLogout"
            class="block w-full text-left px-3 py-2 text-gray-800 uppercase tracking-wide font-light"
            :class="{
              'hover:text-mcm-orange-500': isDarkMode,
              'hover:text-amber-500': !isDarkMode,
            }"
          >
            Logout
          </button>
        </template>
        <template v-else>
          <router-link
            to="/login"
            class="block px-3 py-2 text-gray-800 uppercase tracking-wide font-light"
            :class="{
              'hover:text-mcm-orange-500': isDarkMode,
              'hover:text-amber-500': !isDarkMode,
            }"
          >
            Login
          </router-link>
          <router-link
            to="/signup"
            class="block px-3 py-2 text-gray-800 uppercase tracking-wide font-light"
            :class="{
              'hover:text-mcm-orange-500': isDarkMode,
              'hover:text-amber-500': !isDarkMode,
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
// import { BaseThemeToggle } from "./base";

export default {
  name: "NavBar",
  components: {
    // BaseThemeToggle,
  },
  props: {
    isDarkMode: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["toggleTheme"],
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

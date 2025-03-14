<template>
  <div class="min-h-screen bg-gradient-to-b from-purple-100 to-amber-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
    <div class="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
      <div class="p-8 text-center">
        <div class="w-16 h-16 mx-auto mb-6">
          <svg viewBox="0 0 100 100" class="w-full h-full text-shafali-purple">
            <path d="M50 0 L55 40 L95 45 L55 50 L50 90 L45 50 L5 45 L45 40 Z" fill="currentColor" />
          </svg>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Share Your Photos</h2>
        <p class="text-gray-600 mb-8">
          To upload photos for Shafali's birthday celebration, please sign in or create an account
        </p>
        
        <div class="space-y-4">
          <router-link :to="'/login?redirect=' + redirect" class="block">
            <button class="w-full bg-white text-shafali-purple border-2 border-shafali-purple hover:bg-shafali-purple hover:text-white font-bold py-3 px-6 rounded-md transition-all">
              I already have an account
            </button>
          </router-link>
          
          <router-link :to="'/signup?redirect=' + redirect" class="block">
            <button class="w-full bg-shafali-purple text-white hover:bg-shafali-light-purple font-bold py-3 px-6 rounded-md transition-all">
              Create a new account
            </button>
          </router-link>
        </div>
        
        <div class="mt-6 pt-6 border-t border-gray-200">
          <p class="text-sm text-gray-500">
            Creating an account allows you to upload photos and access the gallery
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'AuthChoiceView',
  setup() {
    const route = useRoute();
    
    const redirect = computed(() => {
      return route.query.redirect || '/upload';
    });
    
    return {
      redirect
    };
  }
}
</script>

<style scoped>
/* Custom styling */
.min-h-screen {
  min-height: 100vh;
}
button.w-full:hover {
  color: white !important;
}


.bg-gradient-to-b {
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
}

.from-purple-100 {
  --tw-gradient-from: #ede9f5;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(237, 233, 245, 0));
}

.to-amber-50 {
  --tw-gradient-to: #fffbeb;
}

.rounded-xl {
  border-radius: 0.75rem;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Button hover effects */
button:hover {
  transform: translateY(-2px);
}

/* Text colors - ensuring visibility */
.text-shafali-purple {
  color: #6c2c9b;
}

.bg-shafali-purple {
  background-color: #6c2c9b;
}

.bg-shafali-light-purple {
  background-color: #9a55c8;
}

.hover\:bg-shafali-purple:hover {
  background-color: #6c2c9b;
}

.hover\:bg-shafali-light-purple:hover {
  background-color: #9a55c8;
}

.border-shafali-purple {
  border-color: #6c2c9b;
}
</style>
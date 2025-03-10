<template>
  <div class="mcm-app overflow-x-hidden">
    <!-- Content area with subtle texture -->
    <div class="min-h-screen bg-mcm-bg overflow-auto background-pattern">
      <div>
        <!-- Add the UnifiedNavBar here -->
        <UnifiedNavBar />
        <main>
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import the UnifiedNavBar component
import UnifiedNavBar from '@/components/UnifiedNavBar.vue';
</script>

<style>
/* Import Google Fonts */

/* Tailwind directives */
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

/* Global styles */
html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  overflow-x: hidden;
}

/* Subtle texture background */
.background-pattern {
  /* background-image: url('/Users/alexbeattie/Developer/vue-shafali/vue-project/public/images/pattern.png'); */
  background-repeat: repeat;
  width: 100%;
  height: 100vh;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #fffbeb;
}

::-webkit-scrollbar-thumb {
  background: #f59e0b;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #d97706;
}
</style>
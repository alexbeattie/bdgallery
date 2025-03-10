<template>
  <div class="mcm-app overflow-x-hidden">
    <!-- Content area with subtle texture -->
    <div class="min-h-screen bg-mcm-bg overflow-auto background-pattern">
      <div>
        <!-- Navigation Bar -->
        <UnifiedNavBar />
        
        <!-- Main Content -->
        <main>
          <router-view />
        </main>
        
        <!-- Floating Upload Button visible on all pages except upload page -->
        <FloatingUploadButton :hideOnPages="['/upload']" />
      </div>
    </div>
  </div>
</template>

<script setup>
// Import components
import UnifiedNavBar from '@/components/UnifiedNavBar.vue';
import FloatingUploadButton from '@/components/FloatingUploadButton.vue';
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

/* Define your custom colors at the :root level for global access */
:root {
  --shafali-purple: #6c2c9b;
  --shafali-light-purple: #9a55c8;
  --shafali-very-light-purple: #755c96;
  --shafali-dark-blue: #171927;
  --shafali-blue: #292d4f;
  --shafali-white: #ffffff;
  --shafali-off-white: #f9f7fd;
}
</style>
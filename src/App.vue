<template>
  <div class="mcm-app">
    <!-- Border design inspired by mid-century graphics -->
    <div class="fixed inset-0 pointer-events-none">
      <div class="absolute inset-x-0 top-0 h-4 bg-gray-900"></div>
      <div class="absolute inset-x-0 bottom-0 h-4 bg-gray-900"></div>
      <div class="absolute inset-y-0 left-0 w-4 bg-gray-900"></div>
      <div class="absolute inset-y-0 right-0 w-4 bg-gray-900"></div>
      
      <!-- Corner decorations -->
      <div class="absolute top-0 left-0 w-16 h-16">
        <svg viewBox="0 0 100 100" class="w-full h-full">
          <path d="M0 0 L100 0 L100 20 L20 20 L20 100 L0 100 Z" fill="#111827" />
          <circle cx="50" cy="50" r="15" fill="#F59E0B" />
        </svg>
      </div>
      <div class="absolute top-0 right-0 w-16 h-16">
        <svg viewBox="0 0 100 100" class="w-full h-full">
          <path d="M0 0 L100 0 L100 100 L80 100 L80 20 L0 20 Z" fill="#111827" />
          <rect x="35" y="35" width="30" height="30" fill="#F59E0B" />
        </svg>
      </div>
      <div class="absolute bottom-0 left-0 w-16 h-16">
        <svg viewBox="0 0 100 100" class="w-full h-full">
          <path d="M0 0 L20 0 L20 80 L100 80 L100 100 L0 100 Z" fill="#111827" />
          <polygon points="35,35 65,35 50,65" fill="#F59E0B" />
        </svg>
      </div>
      <div class="absolute bottom-0 right-0 w-16 h-16">
        <svg viewBox="0 0 100 100" class="w-full h-full">
          <path d="M80 0 L100 0 L100 100 L0 100 L0 80 L80 80 Z" fill="#111827" />
          <path d="M50 35 L65 50 L50 65 L35 50 Z" fill="#F59E0B" />
        </svg>
      </div>
    </div>
    
    <!-- Content area with subtle texture -->
    <div class="min-h-screen p-4 bg-amber-50 overflow-auto">
      <div class="pt-4 pb-16">
        <NavBar />
        <main class="mt-4">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>


<script setup>
import NavBar from './components/NavBar.vue';
</script>

<style>
/* Import Tailwind directives */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');

/* Global styles */
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

/* Subtle texture background */
.bg-amber-50 {
  background-color: #FFFBEB;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23F59E0B' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E");
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #FFFBEB;
}

::-webkit-scrollbar-thumb {
  background: #F59E0B;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #D97706;
}
</style>

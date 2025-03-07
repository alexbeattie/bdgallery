<template>
  <div 
    :class="{ 
      'mcm-app': true,
      'mcm-app-dark': isDarkMode 
    }"
  >
    <slot :isDarkMode="isDarkMode" :toggleTheme="toggleTheme"></slot>
  </div>
</template>

<script>
import { ref, watch, onMounted, provide } from 'vue';

export default {
  name: 'ThemeProvider',
  setup() {
    const isDarkMode = ref(false);
    
    // Toggle theme function
    const toggleTheme = () => {
      isDarkMode.value = !isDarkMode.value;
      localStorage.setItem('mcm-dark-mode', isDarkMode.value);
      applyThemeClass();
    };
    
    // Apply theme class to body
    const applyThemeClass = () => {
      if (isDarkMode.value) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      }
    };
    
    // Restore theme preference from localStorage
    onMounted(() => {
      const savedTheme = localStorage.getItem('mcm-dark-mode');
      if (savedTheme !== null) {
        isDarkMode.value = savedTheme === 'true';
      } else {
        // Check for system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        isDarkMode.value = prefersDark;
      }
      applyThemeClass();
    });
    
    // Watch for changes to isDarkMode
    watch(isDarkMode, () => {
      applyThemeClass();
    });
    
    // Provide theme to child components
    provide('isDarkMode', isDarkMode);
    provide('toggleTheme', toggleTheme);
    
    return {
      isDarkMode,
      toggleTheme
    };
  }
};
</script>

<style>
/* Light/dark mode specific styles */
.mcm-app {
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.mcm-app-dark {
  color: #f8f8f8;
}

.dark-mode {
  --mcm-bg-color: theme('colors.mcm.gray.950');
  --mcm-text-color: #f8f8f8;
  --mcm-card-bg: #2a2a2a;
  --mcm-card-border: theme('colors.mcm.gray.900');
}

.light-mode {
  --mcm-bg-color: theme('colors.mcm.amber.50');
  --mcm-text-color: theme('colors.mcm.gray.900');
  --mcm-card-bg: #ffffff;
  --mcm-card-border: #e5e7eb;
}

/* Dark mode specific styles */
.mcm-app-dark .mcm-card {
  background-color: var(--mcm-card-bg);
  border-color: var(--mcm-card-border);
}

.mcm-app-dark .text-gray-800,
.mcm-app-dark .text-gray-900 {
  color: #f8f8f8 !important;
}

.mcm-app-dark .text-gray-600 {
  color: #d1d5db !important;
}

.mcm-app-dark .bg-white {
  background-color: var(--mcm-card-bg) !important;
}
<template>
  <button 
    @click="toggleTheme"
    class="relative w-14 h-8 rounded-full flex items-center transition-colors duration-300 focus:outline-none"
    :class="isDarkMode ? 'bg-mcm-gray-950 border border-mcm-orange-500' : 'bg-mcm-amber-100 border border-mcm-amber-500'"
  >
    <!-- Track -->
    <span class="sr-only">Toggle theme</span>
    
    <!-- Thumb -->
    <span
      class="w-6 h-6 rounded-full transition-transform duration-300 transform"
      :class="isDarkMode ? 
        'translate-x-7 bg-mcm-gray-950 shadow-[0_0_3px_2px_rgba(241,98,50,0.7)]' : 
        'translate-x-1 bg-white shadow-[0_0_2px_1px_rgba(245,158,11,0.5)]'"
    >
      <!-- Sun or Moon icon -->
      <template v-if="isDarkMode">
        <!-- Moon icon (simplified) -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 text-mcm-orange-500">
          <path fill="currentColor" d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
        </svg>
      </template>
      <template v-else>
        <!-- Sun icon (simplified) -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 text-mcm-amber-500">
          <path fill="currentColor" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-5a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v.03A1 1 0 0 0 12 2zm0 20a1 1 0 0 0-1 1v.03a1 1 0 0 0 2 0V23a1 1 0 0 0-1-1zm10-10a1 1 0 0 0 1-1 1 1 0 0 0-1-1h-.03a1 1 0 0 0 0 2zm-20 0a1 1 0 0 0-1-1 1 1 0 0 0-1 1v.03a1 1 0 0 0 2 0zM19.07 4.93a1 1 0 0 0 1.414-1.407l-.026-.025a1 1 0 0 0-1.414 1.414l.026.018zm-14.14 14.14a1 1 0 0 0-1.414 1.414l.025.025a1 1 0 0 0 1.414-1.414l-.025-.025zM19.07 19.07a1 1 0 0 0-.025-1.414 1 1 0 0 0-1.414.025l.025.025a1 1 0 0 0 1.414 1.364zm-14.14-14.14a1 1 0 0 0 .025 1.414 1 1 0 0 0 1.414-.025L6.343 6.31a1 1 0 0 0-1.414-1.364z" />
        </svg>
      </template>
    </span>
  </button>
</template>

<script>
export default {
  name: 'BaseThemeToggle',
  props: {
    isDarkMode: {
      type: Boolean,
      required: true
    }
  },
  emits: ['toggle'],
  methods: {
    toggleTheme() {
      this.$emit('toggle');
    }
  }
};
</script>
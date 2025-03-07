<template>
  <div 
    class="w-full overflow-hidden relative"
    :style="{ height: height }"
  >
    <!-- Pattern type selection -->
    <template v-if="pattern === 'boomerang'">
      <svg :width="width" :height="height" viewBox="0 0 300 100" preserveAspectRatio="none">
        <pattern id="boomerangPattern" x="0" y="0" width="60" height="50" patternUnits="userSpaceOnUse">
          <path d="M0,0 L30,25 L0,50 L10,25 Z" :fill="primaryColor" />
          <path d="M30,0 L60,25 L30,50 L40,25 Z" :fill="secondaryColor" />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#boomerangPattern)" />
      </svg>
    </template>
    
    <template v-else-if="pattern === 'geometric'">
      <svg :width="width" :height="height" viewBox="0 0 300 100" preserveAspectRatio="none">
        <pattern id="geometricPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="25" height="25" :fill="primaryColor" />
          <rect x="25" y="0" width="25" height="25" :fill="secondaryColor" />
          <rect x="0" y="25" width="25" height="25" :fill="accentColor" />
          <rect x="25" y="25" width="25" height="25" :fill="primaryColor" />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#geometricPattern)" />
      </svg>
    </template>
    
    <template v-else-if="pattern === 'diamonds'">
      <svg :width="width" :height="height" viewBox="0 0 300 100" preserveAspectRatio="none">
        <pattern id="diamondsPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0,20 L20,0 L40,20 L20,40 Z" :fill="primaryColor" />
          <path d="M20,0 A 10,10 0 1 0 40,20" :fill="secondaryColor" opacity="0.7" />
          <path d="M0,20 A 10,10 0 1 0 20,40" :fill="accentColor" opacity="0.7" />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#diamondsPattern)" />
      </svg>
    </template>
    
    <template v-else-if="pattern === 'starburst'">
      <svg :width="width" :height="height" viewBox="0 0 300 100" preserveAspectRatio="none">
        <pattern id="starburstPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M30,0 L35,25 L60,30 L35,35 L30,60 L25,35 L0,30 L25,25 Z" :fill="primaryColor" />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#starburstPattern)" />
      </svg>
    </template>
    
    <template v-else-if="pattern === 'atomic'">
      <svg :width="width" :height="height" viewBox="0 0 300 100" preserveAspectRatio="none">
        <pattern id="atomicPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <!-- Atomic era orbital pattern -->
          <circle cx="40" cy="40" r="5" :fill="primaryColor" />
          <ellipse cx="40" cy="40" rx="35" ry="15" :stroke="secondaryColor" stroke-width="2" fill="none" />
          <ellipse cx="40" cy="40" rx="35" ry="15" :stroke="accentColor" stroke-width="2" fill="none" transform="rotate(60, 40, 40)" />
          <ellipse cx="40" cy="40" rx="35" ry="15" :stroke="primaryColor" stroke-width="2" fill="none" transform="rotate(120, 40, 40)" />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#atomicPattern)" />
      </svg>
    </template>
    
    <template v-else>
      <!-- Default is waves pattern -->
      <svg :width="width" :height="height" viewBox="0 0 300 100" preserveAspectRatio="none">
        <pattern id="wavesPattern" x="0" y="0" width="60" height="20" patternUnits="userSpaceOnUse">
          <path d="M0,10 Q15,20 30,10 Q45,0 60,10" :stroke="primaryColor" stroke-width="2" fill="none" />
          <path d="M0,10 Q15,0 30,10 Q45,20 60,10" :stroke="secondaryColor" stroke-width="2" fill="none" transform="translate(0, 10)" />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#wavesPattern)" />
      </svg>
    </template>
  </div>
</template>

<script>
import { computed, inject, ref } from 'vue';

export default {
  name: 'McmPattern',
  props: {
    pattern: {
      type: String,
      default: 'waves',
      validator: (value) => ['waves', 'boomerang', 'geometric', 'diamonds', 'starburst', 'atomic'].includes(value)
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100px'
    },
    primaryColorProp: {
      type: String,
      default: ''
    },
    secondaryColorProp: {
      type: String,
      default: ''
    },
    accentColorProp: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    // Inject theme from ThemeProvider if available
    const isDarkMode = inject('isDarkMode', ref(false));
    
    // Determine colors based on props or theme
    const primaryColor = computed(() => {
      if (props.primaryColorProp) return props.primaryColorProp;
      return isDarkMode.value ? '#F16232' : '#F59E0B';
    });
    
    const secondaryColor = computed(() => {
      if (props.secondaryColorProp) return props.secondaryColorProp;
      return isDarkMode.value ? '#45B5B9' : '#D97706';
    });
    
    const accentColor = computed(() => {
      if (props.accentColorProp) return props.accentColorProp;
      return isDarkMode.value ? '#E9BC4F' : '#FCD34D';
    });
    
    return {
      primaryColor,
      secondaryColor,
      accentColor
    };
  }
};
</script>
<template>
  <div class="mcm-card-container relative" :class="{ 'angled': angled }">
    <!-- Decorative geometric accent (optional) -->
    <div v-if="showAccent" class="absolute -top-4 -right-4 w-12 h-12 z-10">
      <svg viewBox="0 0 100 100" class="w-full h-full" :class="accentColorClass">
        <component :is="accentShapeComponent" />
      </svg>
    </div>
    
    <!-- Main card with optional angled design -->
    <div 
      class="mcm-card-content overflow-hidden transition-all"
      :class="[
        bgColorClass,
        borderClass,
        shadowClass,
        angled ? 'transform rotate-1' : '',
        hover ? 'cursor-pointer hover:shadow-lg hover:translate-y-[-5px]' : ''
      ]"
      @click="$emit('click', $event)"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed, inject, ref } from 'vue';

export default {
  name: 'McmCard',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'minimal', 'outline', 'angled', 'raised'].includes(value)
    },
    colorTheme: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'orange', 'teal', 'mint', 'mustard', 'amber'].includes(value)
    },
    angled: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    showAccent: {
      type: Boolean,
      default: false
    },
    accentShape: {
      type: String,
      default: 'circle',
      validator: (value) => ['circle', 'square', 'triangle', 'star', 'diamond'].includes(value)
    }
  },
  emits: ['click'],
  setup(props) {
    // Inject theme from ThemeProvider if available
    const isDarkMode = inject('isDarkMode', ref(false));
    
    // Background color based on theme and variant
    const bgColorClass = computed(() => {
      if (props.variant === 'outline') {
        return isDarkMode.value ? 'bg-transparent' : 'bg-transparent';
      }
      
      if (isDarkMode.value) {
        return {
          default: 'bg-mcm-gray-950',
          minimal: 'bg-transparent',
          outline: 'bg-transparent',
          angled: 'bg-mcm-gray-950',
          raised: 'bg-mcm-gray-950'
        }[props.variant];
      } else {
        return {
          default: 'bg-white',
          minimal: 'bg-white',
          outline: 'bg-transparent',
          angled: 'bg-white',
          raised: 'bg-white'
        }[props.variant];
      }
    });
    
    // Border styling based on theme and variant
    const borderClass = computed(() => {
      if (props.variant === 'outline' || props.variant === 'angled') {
        const colorClass = getBorderColorClass();
        return `border-2 ${colorClass}`;
      }
      
      if (props.variant === 'minimal') {
        return 'border-0';
      }
      
      return 'border border-gray-200';
    });
    
    // Shadow based on variant
    const shadowClass = computed(() => {
      return {
        default: 'shadow-md rounded-lg',
        minimal: 'shadow-none rounded-lg',
        outline: 'shadow-none rounded-lg',
        angled: 'shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)] rounded-lg',
        raised: 'shadow-xl rounded-lg'
      }[props.variant];
    });
    
    // Accent color based on theme
    const accentColorClass = computed(() => {
      if (isDarkMode.value) {
        return {
          default: 'text-mcm-orange-500',
          orange: 'text-mcm-orange-500',
          teal: 'text-mcm-teal-500',
          mint: 'text-mcm-mint-500',
          mustard: 'text-mcm-mustard-500',
          amber: 'text-amber-500'
        }[props.colorTheme];
      } else {
        return {
          default: 'text-amber-500',
          orange: 'text-mcm-orange-500',
          teal: 'text-mcm-teal-500',
          mint: 'text-mcm-mint-500',
          mustard: 'text-mcm-mustard-500',
          amber: 'text-amber-500'
        }[props.colorTheme];
      }
    });
    
    // Get border color class based on color theme
    const getBorderColorClass = () => {
      if (isDarkMode.value) {
        return {
          default: 'border-white',
          orange: 'border-mcm-orange-500',
          teal: 'border-mcm-teal-500',
          mint: 'border-mcm-mint-500',
          mustard: 'border-mcm-mustard-500',
          amber: 'border-amber-500'
        }[props.colorTheme];
      } else {
        return {
          default: 'border-gray-900',
          orange: 'border-mcm-orange-500',
          teal: 'border-mcm-teal-500',
          mint: 'border-mcm-mint-500',
          mustard: 'border-mcm-mustard-500',
          amber: 'border-amber-500'
        }[props.colorTheme];
      }
    };
    
    // Accent shape component
    const accentShapeComponent = computed(() => {
      const shapes = {
        circle: () => h('circle', { cx: 50, cy: 50, r: 40, fill: 'currentColor' }),
        square: () => h('rect', { x: 10, y: 10, width: 80, height: 80, fill: 'currentColor' }),
        triangle: () => h('polygon', { points: '50,10 90,90 10,90', fill: 'currentColor' }),
        star: () => h('path', { d: 'M50 0 L63 38 L100 38 L69 61 L82 100 L50 75 L18 100 L31 61 L0 38 L37 38 Z', fill: 'currentColor' }),
        diamond: () => h('path', { d: 'M50 10 L90 50 L50 90 L10 50 Z', fill: 'currentColor' })
      };
      
      return shapes[props.accentShape] || shapes.circle;
    });
    
    return {
      bgColorClass,
      borderClass,
      shadowClass,
      accentColorClass,
      accentShapeComponent
    };
  }
};
</script>

<style scoped>
.mcm-card-container {
  position: relative;
  padding: 0.25rem;
}

.mcm-card-content {
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
</style>
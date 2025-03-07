<template>
  <div class="p-8 max-w-6xl mx-auto">
    <BaseHeading level="1" gradient class="mb-12 text-center">
      Mid-Century Modern Design System
    </BaseHeading>

    <!-- Theme Toggle -->
    <section class="mb-16">
      <BaseHeading level="2" size="medium" class="mb-6">Theme Toggle</BaseHeading>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <p class="text-lg font-medium">Current Theme: {{ isDarkMode ? 'Dark Mode' : 'Light Mode' }}</p>
        <BaseThemeToggle :isDarkMode="isDarkMode" @toggle="toggleTheme" />
      </div>
    </section>

    <!-- Color Palette -->
    <section class="mb-16">
      <BaseHeading level="2" size="medium" class="mb-6">Color Palette</BaseHeading>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <McmCard v-for="(color, index) in colors" :key="index" :colorTheme="color.theme" hover>
          <div class="p-4">
            <div :class="`h-24 rounded-md mb-2 bg-mcm-${color.theme}-500`"></div>
            <p class="font-medium">{{ color.name }}</p>
            <p class="text-sm text-gray-500">{{ color.hex }}</p>
          </div>
        </McmCard>
      </div>
    </section>

    <!-- Buttons -->
    <section class="mb-16">
      <BaseHeading level="2" size="medium" class="mb-6">Buttons</BaseHeading>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <BaseButton variant="primary" class="w-full">Primary Button</BaseButton>
        <BaseButton variant="secondary" class="w-full">Secondary Button</BaseButton>
        <BaseButton variant="accent" class="w-full">Accent Button</BaseButton>
        <BaseButton variant="outline" class="w-full">Outline Button</BaseButton>
      </div>
      
      <BaseHeading level="3" size="small" class="mb-4 mt-8">Color Variants</BaseHeading>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <BaseButton variant="orange" class="w-full">Orange Button</BaseButton>
        <BaseButton variant="teal" class="w-full">Teal Button</BaseButton>
        <BaseButton variant="mint" class="w-full">Mint Button</BaseButton>
        <BaseButton variant="mustard" class="w-full">Mustard Button</BaseButton>
      </div>
    </section>

    <!-- Cards -->
    <section class="mb-16">
      <BaseHeading level="2" size="medium" class="mb-6">Cards</BaseHeading>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <McmCard variant="default" hover>
          <div class="p-5">
            <h3 class="text-lg font-bold mb-2">Default Card</h3>
            <p>This is the standard card with shadow and rounded corners.</p>
          </div>
        </McmCard>
        
        <McmCard variant="outline" colorTheme="orange" hover>
          <div class="p-5">
            <h3 class="text-lg font-bold mb-2">Outline Card</h3>
            <p>This card has a colored outline with no background.</p>
          </div>
        </McmCard>
        
        <McmCard variant="angled" angled colorTheme="teal" hover>
          <div class="p-5">
            <h3 class="text-lg font-bold mb-2">Angled Card</h3>
            <p>This card is slightly rotated for a dynamic look.</p>
          </div>
        </McmCard>
        
        <McmCard variant="raised" hover>
          <div class="p-5">
            <h3 class="text-lg font-bold mb-2">Raised Card</h3>
            <p>This card has an elevated shadow for emphasis.</p>
          </div>
        </McmCard>
        
        <McmCard variant="minimal" colorTheme="mint" hover>
          <div class="p-5">
            <h3 class="text-lg font-bold mb-2">Minimal Card</h3>
            <p>This card has no shadow or border for a cleaner look.</p>
          </div>
        </McmCard>
        
        <McmCard variant="default" colorTheme="mustard" showAccent accentShape="star" hover>
          <div class="p-5">
            <h3 class="text-lg font-bold mb-2">Accent Card</h3>
            <p>This card includes a decorative accent shape.</p>
          </div>
        </McmCard>
      </div>
    </section>

    <!-- Patterns -->
    <section class="mb-16">
      <BaseHeading level="2" size="medium" class="mb-6">Patterns</BaseHeading>
      
      <div class="space-y-8">
        <div v-for="pattern in patterns" :key="pattern" class="mb-6">
          <h3 class="text-lg font-medium mb-2 capitalize">{{ pattern }} Pattern</h3>
          <McmPattern :pattern="pattern" height="120px" />
        </div>
      </div>
    </section>

    <!-- Form Elements -->
    <section class="mb-16">
      <BaseHeading level="2" size="medium" class="mb-6">Form Elements</BaseHeading>
      
      <div class="max-w-md mx-auto">
        <BaseInput 
          id="name" 
          label="Name" 
          placeholder="Enter your name" 
          v-model="formData.name"
          required
        />
        
        <BaseInput 
          id="email" 
          label="Email" 
          type="email" 
          placeholder="Enter your email" 
          v-model="formData.email"
          required
        />
        
        <div class="flex gap-4 mt-6">
          <BaseButton variant="primary" class="flex-1">Submit</BaseButton>
          <BaseButton variant="secondary" class="flex-1">Cancel</BaseButton>
        </div>
      </div>
    </section>

    <!-- Typography -->
    <section class="mb-16">
      <BaseHeading level="2" size="medium" class="mb-6">Typography</BaseHeading>
      
      <div class="space-y-4">
        <BaseHeading level="1" size="large">Heading Level 1</BaseHeading>
        <BaseHeading level="2" size="medium">Heading Level 2</BaseHeading>
        <BaseHeading level="3" size="small">Heading Level 3</BaseHeading>
        <BaseHeading level="4" size="small">Heading Level 4</BaseHeading>
        
        <BaseHeading level="2" size="medium" gradient class="mt-8">Gradient Heading</BaseHeading>
        
        <div class="mt-6">
          <p class="mb-4 text-lg">Body text is clean and legible, using the Inter font family for a modern look that pairs well with mid-century design elements.</p>
          <p class="mb-4">This paragraph uses the default text size, which works well for most content areas.</p>
          <p class="text-sm text-gray-500">Smaller text can be used for captions and secondary information.</p>
        </div>
      </div>
    </section>

    <!-- Mid-Century Decorative Elements -->
    <section class="mb-16">
      <BaseHeading level="2" size="medium" class="mb-6">Decorative Elements</BaseHeading>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="flex justify-center">
          <div class="w-32 h-32">
            <svg viewBox="0 0 100 100" class="w-full h-full" :class="isDarkMode ? 'text-mcm-orange-500' : 'text-amber-500'">
              <path d="M50 0 L55 40 L95 45 L55 50 L50 90 L45 50 L5 45 L45 40 Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
        
        <div class="flex justify-center">
          <div class="w-32 h-32">
            <svg viewBox="0 0 100 100" class="w-full h-full" :class="isDarkMode ? 'text-mcm-teal-500' : 'text-amber-500'">
              <!-- Atomic-style orbit -->
              <circle cx="50" cy="50" r="5" fill="currentColor" />
              <ellipse cx="50" cy="50" rx="45" ry="20" stroke="currentColor" stroke-width="2" fill="none" />
              <ellipse cx="50" cy="50" rx="45" ry="20" stroke="currentColor" stroke-width="2" fill="none" transform="rotate(60, 50, 50)" />
              <ellipse cx="50" cy="50" rx="45" ry="20" stroke="currentColor" stroke-width="2" fill="none" transform="rotate(120, 50, 50)" />
            </svg>
          </div>
        </div>
        
        <div class="flex justify-center">
          <div class="w-32 h-32">
            <svg viewBox="0 0 100 100" class="w-full h-full" :class="isDarkMode ? 'text-mcm-mint-500' : 'text-amber-500'">
              <!-- Boomerang shape -->
              <path d="M10,10 L50,30 L10,50 L30,30 Z" fill="currentColor" />
              <path d="M90,90 L50,70 L90,50 L70,70 Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, inject } from 'vue';
import { BaseHeading, BaseButton, BaseInput, BaseThemeToggle } from './components/base';
import McmCard from './components/McmCard.vue';
import McmPattern from './components/McmPattern.vue';

export default {
  name: 'McmShowcase',
  components: {
    BaseHeading,
    BaseButton,
    BaseInput,
    BaseThemeToggle,
    McmCard,
    McmPattern
  },
  setup() {
    // Get theme variables from ThemeProvider
    const isDarkMode = inject('isDarkMode', ref(false));
    const toggleTheme = inject('toggleTheme', () => {});
    
    // Sample form data
    const formData = ref({
      name: '',
      email: ''
    });
    
    // Pattern types for demonstration
    const patterns = ['waves', 'boomerang', 'geometric', 'diamonds', 'starburst', 'atomic'];
    
    // Colors showcase
    const colors = [
      { name: 'Orange', theme: 'orange', hex: '#F16232' },
      { name: 'Teal', theme: 'teal', hex: '#45B5B9' },
      { name: 'Mint', theme: 'mint', hex: '#B3C99F' },
      { name: 'Mustard', theme: 'mustard', hex: '#E9BC4F' }
    ];
    
    return {
      isDarkMode,
      toggleTheme,
      formData,
      patterns,
      colors
    };
  }
};
</script>
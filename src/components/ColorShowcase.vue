<template>
  <div class="py-8">
    <BaseHeading level="2" size="medium" class="mb-8 text-center">Mid-Century Modern Color Palette</BaseHeading>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <!-- Color Cards -->
      <BaseCard>
        <div class="p-4">
          <div class="h-24 bg-mcm-orange-500 rounded-md mb-2"></div>
          <p class="font-medium">Orange</p>
          <p class="text-sm text-gray-500">#F16232</p>
        </div>
      </BaseCard>
      
      <BaseCard>
        <div class="p-4">
          <div class="h-24 bg-mcm-teal-500 rounded-md mb-2"></div>
          <p class="font-medium">Teal</p>
          <p class="text-sm text-gray-500">#45B5B9</p>
        </div>
      </BaseCard>
      
      <BaseCard>
        <div class="p-4">
          <div class="h-24 bg-mcm-mint-500 rounded-md mb-2"></div>
          <p class="font-medium">Mint</p>
          <p class="text-sm text-gray-500">#B3C99F</p>
        </div>
      </BaseCard>
      
      <BaseCard>
        <div class="p-4">
          <div class="h-24 bg-mcm-mustard-500 rounded-md mb-2"></div>
          <p class="font-medium">Mustard</p>
          <p class="text-sm text-gray-500">#E9BC4F</p>
        </div>
      </BaseCard>
    </div>
    
    <BaseHeading level="3" size="small" class="mb-4 text-center">Button Variants</BaseHeading>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <BaseButton variant="orange" class="w-full">Orange Button</BaseButton>
      <BaseButton variant="teal" class="w-full">Teal Button</BaseButton>
      <BaseButton variant="mint" class="w-full">Mint Button</BaseButton>
      <BaseButton variant="mustard" class="w-full">Mustard Button</BaseButton>
    </div>
    
    <!-- Mid-century pattern showcase -->
    <div class="relative mt-16 py-12 px-8 overflow-hidden">
      <!-- Geometric background -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-0 h-full w-1/5 bg-mcm-orange-500 opacity-80"></div>
        <div class="absolute top-0 left-1/5 h-full w-1/5 bg-mcm-teal-500 opacity-70"></div>
        <div class="absolute top-0 left-2/5 h-full w-1/5 bg-mcm-mint-500 opacity-60"></div>
        <div class="absolute top-0 left-3/5 h-full w-1/5 bg-mcm-mustard-500 opacity-70"></div>
        <div class="absolute top-0 left-4/5 h-full w-1/5 bg-mcm-coral-500 opacity-80"></div>
      </div>
      
      <!-- Content -->
      <div class="relative bg-white shadow-lg p-8 max-w-xl mx-auto transform rotate-2">
        <BaseHeading level="2" size="medium" class="mb-4">Mid-Century Modern Design</BaseHeading>
        <p class="mb-4">
          Mid-century modern is an architectural, interior, product and graphic design that describes
          developments from roughly 1945 to 1975. The style emphasized clean lines, organic forms,
          and a blend of traditional and non-traditional materials.
        </p>
        <div class="flex justify-center space-x-4">
          <div class="w-12 h-12">
            <svg viewBox="0 0 100 100" class="w-full h-full text-mcm-orange-500">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="8" />
            </svg>
          </div>
          <div class="w-12 h-12">
            <svg viewBox="0 0 100 100" class="w-full h-full text-mcm-teal-500">
              <rect x="10" y="10" width="80" height="80" rx="10" fill="currentColor" />
            </svg>
          </div>
          <div class="w-12 h-12">
            <svg viewBox="0 0 100 100" class="w-full h-full text-mcm-mint-500">
              <polygon points="50,10 90,90 10,90" fill="currentColor" />
            </svg>
          </div>
          <div class="w-12 h-12">
            <svg viewBox="0 0 100 100" class="w-full h-full text-mcm-mustard-500">
              <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BaseCard, BaseButton, BaseHeading } from './base';

export default {
  name: 'ColorShowcase',
  components: {
    BaseCard,
    BaseButton,
    BaseHeading
  }
};
</script>
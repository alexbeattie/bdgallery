<template>
  <button 
    :class="[
      baseClass,
      variantClass,
      { 'opacity-70 cursor-not-allowed': disabled }
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'accent', 'outline', 'teal', 'mint', 'orange', 'mustard'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    baseClass() {
      return 'py-3 px-6 rounded-md text-base font-medium transition-all';
    },
    variantClass() {
      const variants = {
        primary: 'mcm-button-primary',
        secondary: 'mcm-button-secondary',
        accent: 'mcm-button-accent',
        outline: 'mcm-button-outline',
        teal: 'mcm-button-teal',
        mint: 'mcm-button-mint',
        orange: 'mcm-button-orange',
        mustard: 'mcm-button-mustard'
      };
      return variants[this.variant] || variants.primary;
    }
  }
};
</script>
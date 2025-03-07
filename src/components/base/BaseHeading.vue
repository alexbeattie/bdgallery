<template>
  <component 
    :is="tag" 
    :class="[
      { 'mcm-heading-gradient': gradient },
      sizeClass
    ]"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'BaseHeading',
  props: {
    level: {
      type: Number,
      default: 1,
      validator: (value) => [1, 2, 3, 4, 5, 6].includes(value)
    },
    size: {
      type: String,
      default: 'large',
      validator: (value) => ['large', 'medium', 'small'].includes(value)
    },
    gradient: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tag() {
      return `h${this.level}`;
    },
    sizeClass() {
      const sizes = {
        large: 'mcm-heading-large',
        medium: 'mcm-heading-medium',
        small: 'mcm-heading-small'
      };
      return sizes[this.size] || sizes.large;
    }
  }
};
</script>
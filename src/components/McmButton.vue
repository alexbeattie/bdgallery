
<template>
  <button 
    :class="buttonClass"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'McmButton',
  props: {
    color: {
      type: String,
      default: 'orange',
      validator: value => ['orange', 'teal', 'mint', 'mustard'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClass() {
      return {
        'mcm-button': true,
        'mcm-button-orange': this.color === 'orange',
        'mcm-button-teal': this.color === 'teal',
        'mcm-button-mint': this.color === 'mint',
        'mcm-button-mustard': this.color === 'mustard',
        'mcm-button-disabled': this.disabled
      };
    }
  },
  emits: ['click']
};
</script>

<style scoped>
.mcm-button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: rotate(-1deg);
  border: none;
}

.mcm-button:hover:not(.mcm-button-disabled) {
  transform: rotate(0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.mcm-button-orange {
  background-color: #F16232;
  color: white;
}

.mcm-button-teal {
  background-color: #45B5B9;
  color: white;
}

.mcm-button-mint {
  background-color: #B3C99F;
  color: #333;
}

.mcm-button-mustard {
  background-color: #E9BC4F;
  color: #333;
}

.mcm-button-disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
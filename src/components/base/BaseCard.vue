<template>
  <div 
    :class="[
      'mcm-card',
      { 'mcm-card-hover': hover }
    ]"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    hover: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click']
};
</script>
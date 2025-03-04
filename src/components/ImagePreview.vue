<template>
  <div class="aspect-square overflow-hidden rounded border border-gray-200">
    <img
      :src="url"
      :alt="alt"
      class="w-full h-full object-cover transition-transform hover:scale-105"
    />
  </div>
</template>

<script>
export default {
  name: 'ImagePreview',
  props: {
    url: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: 'Preview'
    }
  }
};
</script>

<style scoped>
.aspect-square {
  aspect-ratio: 1 / 1;
}

.overflow-hidden {
  overflow: hidden;
}

.rounded {
  border-radius: 0.25rem;
}

.border {
  border-width: 1px;
}

.border-gray-200 {
  border-color: #e5e7eb;
}

.w-full {
  width: 100%;
}

.h-full {
  height: 100%;
}

.object-cover {
  object-fit: cover;
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
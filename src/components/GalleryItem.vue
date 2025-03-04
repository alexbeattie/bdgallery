<template>
  <div
    class="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition-all hover:translate-y-[-5px] hover:shadow-lg"
    @click="$emit('click', image)"
  >
    <div class="aspect-[4/3] overflow-hidden">
      <img
        :src="image.url"
        :alt="`Memory from ${image.sender}`"
        class="w-full h-full object-cover transition-transform hover:scale-105"
      />
    </div>
    <div class="p-3">
      <p class="font-medium">From: {{ image.sender }}</p>
      <p v-if="showDate && image.formattedDate" class="text-sm text-gray-500">
        {{ image.formattedDate }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryItem',
  props: {
    image: {
      type: Object,
      required: true
    },
    showDate: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click']
};
</script>

<style scoped>
.bg-white {
  background-color: white;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.overflow-hidden {
  overflow: hidden;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.cursor-pointer {
  cursor: pointer;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.hover\:translate-y-\[-5px\]:hover {
  transform: translateY(-5px);
}

.hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.aspect-\[4\/3\] {
  aspect-ratio: 4 / 3;
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

.p-3 {
  padding: 0.75rem;
}

.font-medium {
  font-weight: 500;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-gray-500 {
  color: #6b7280;
}
</style>
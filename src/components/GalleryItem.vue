<template>
  <BaseCard hover @click="$emit('click', image)">
    <div class="mcm-gallery-image-container">
      <img
        :src="image.url"
        :alt="`Memory from ${image.sender}`"
        class="mcm-gallery-image"
      />
    </div>
    <div class="mcm-gallery-caption">
      <p class="font-medium">From: {{ image.sender }}</p>
      <p v-if="showDate && image.formattedDate" class="text-sm text-gray-500">
        {{ image.formattedDate }}
      </p>
    </div>
  </BaseCard>
</template>

<script>
import { BaseCard } from './base';

export default {
  name: 'GalleryItem',
  components: {
    BaseCard
  },
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
<template>
  <div class="min-h-screen p-4 flex flex-col justify-center items-center bg-[#fefcff]">
    <main class="py-16 flex-1 flex flex-col justify-center items-center text-center max-w-6xl w-full">
      <h1 class="m-0 mb-8 text-4xl font-bold bg-gradient-to-r from-[#ff6b6b] via-[#ff9e7d] to-[#ffd670] text-transparent bg-clip-text">
        Birthday Memories Gallery
      </h1>

      <div v-if="loading" class="text-lg">Loading memories...</div>
      
      <div v-else-if="images.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mb-8">
        <div
          v-for="image in images"
          :key="image.id"
          class="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition-all hover:translate-y-[-5px] hover:shadow-lg"
          @click="openModal(image)"
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
          </div>
        </div>
      </div>
      
      <p v-else class="text-lg text-gray-600 my-8">No memories have been shared yet. Be the first!</p>

      <div class="flex flex-col sm:flex-row gap-4">
        <router-link to="/upload">
          <button class="bg-gradient-to-r from-[#ff6b6b] to-[#ff9e7d] text-white border-none py-3 px-6 rounded-md text-base cursor-pointer transition-all hover:translate-y-[-2px] hover:shadow-md min-w-48">
            Share Your Photos
          </button>
        </router-link>

        <router-link to="/">
          <button class="bg-gray-100 text-gray-800 border border-gray-300 py-3 px-6 rounded-md text-base cursor-pointer transition-all hover:translate-y-[-2px] hover:shadow-md min-w-48">
            Back to Home
          </button>
        </router-link>
      </div>
    </main>

    <!-- Image Modal -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
      @click="closeModal"
    >
      <div
        class="bg-white max-w-4/5 max-h-[90vh] rounded-lg overflow-hidden relative"
        @click.stop
      >
        <span
          class="absolute top-2 right-4 text-white text-2xl font-bold cursor-pointer z-10 drop-shadow-md"
          @click="closeModal"
        >
          &times;
        </span>
        <img
          :src="selectedImage.url"
          :alt="`Memory from ${selectedImage.sender}`"
          class="w-full max-h-[70vh] object-contain"
        />
        <div class="p-4">
          <p class="font-semibold mb-2">From: {{ selectedImage.sender }}</p>
          <p class="leading-normal">{{ selectedImage.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

// Fallback mock images in case Firebase fetch fails
const mockImages = [
  { id: 1, url: 'https://via.placeholder.com/400x300', sender: 'John', message: 'Happy birthday! Remember our trip to the beach?' },
  { id: 2, url: 'https://via.placeholder.com/400x300', sender: 'Amy', message: 'Wishing you the best day ever!' },
  { id: 3, url: 'https://via.placeholder.com/400x300', sender: 'Michael', message: 'Another year, another adventure!' },
];

export default {
  name: 'GalleryView',
  setup() {
    const images = ref([]);
    const loading = ref(true);
    const selectedImage = ref(null);

    const fetchImages = async () => {
      try {
        console.log('Fetching images from Firestore...');
        
        // Check if in offline mode
        if (db._offlineComponents) {
          console.log("Firestore is in offline mode, using mock data");
          images.value = mockImages;
          loading.value = false;
          return;
        }
        
        // Try to fetch from Firebase
        const q = query(
          collection(db, 'birthdayImages'),
          orderBy('timestamp', 'desc')
        );

        const querySnapshot = await getDocs(q);
        const fetchedImages = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          // Format timestamp if needed
          formattedDate: doc.data().timestamp?.toDate().toLocaleDateString()
        }));

        console.log('Fetched images:', fetchedImages);

        if (fetchedImages.length > 0) {
          images.value = fetchedImages;
        } else {
          // If no images found in Firebase, use mock data
          console.log('No images found in Firestore, using mock data');
          images.value = mockImages;
        }
      } catch (error) {
        console.error('Error fetching images:', error);
        // Fall back to mock data if Firebase fails
        console.log('Error fetching from Firestore, using mock data');
        images.value = mockImages;
      } finally {
        loading.value = false;
      }
    };

    const openModal = (image) => {
      selectedImage.value = image;
    };

    const closeModal = () => {
      selectedImage.value = null;
    };

    onMounted(() => {
      fetchImages();
    });

    return {
      images,
      loading,
      selectedImage,
      openModal,
      closeModal
    };
  }
};
</script>

<style scoped>
/* Tailwind-like styling */
.min-h-screen {
  min-height: 100vh;
}

.p-4 {
  padding: 1rem;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.justify-center {
  justify-content: center;
}

.items-center {
  align-items: center;
}

.bg-\[\#fefcff\] {
  background-color: #fefcff;
}

.py-16 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.flex-1 {
  flex: 1 1 0%;
}

.text-center {
  text-align: center;
}

.max-w-6xl {
  max-width: 72rem;
}

.w-full {
  width: 100%;
}

.m-0 {
  margin: 0;
}

.mb-8 {
  margin-bottom: 2rem;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.font-bold {
  font-weight: 700;
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.from-\[\#ff6b6b\] {
  --tw-gradient-from: #ff6b6b;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.via-\[\#ff9e7d\] {
  --tw-gradient-via: #ff9e7d;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to);
}

.to-\[\#ffd670\] {
  --tw-gradient-to: #ffd670;
}

.text-transparent {
  color: transparent;
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.grid {
  display: grid;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.gap-6 {
  gap: 1.5rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

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

.text-gray-600 {
  color: #4b5563;
}

.my-8 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.flex-col {
  flex-direction: column;
}

.gap-4 {
  gap: 1rem;
}

.to-\[\#ff9e7d\] {
  --tw-gradient-to: #ff9e7d;
}

.text-white {
  color: white;
}

.border-none {
  border-style: none;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.rounded-md {
  border-radius: 0.375rem;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.hover\:translate-y-\[-2px\]:hover {
  transform: translateY(-2px);
}

.min-w-48 {
  min-width: 12rem;
}

.bg-gray-100 {
  background-color: #f3f4f6;
}

.text-gray-800 {
  color: #1f2937;
}

.border {
  border-width: 1px;
}

.border-gray-300 {
  border-color: #d1d5db;
}

.fixed {
  position: fixed;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.bg-black\/80 {
  background-color: rgba(0, 0, 0, 0.8);
}

.z-50 {
  z-index: 50;
}

.max-w-4\/5 {
  max-width: 80%;
}

.max-h-\[90vh\] {
  max-height: 90vh;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.top-2 {
  top: 0.5rem;
}

.right-4 {
  right: 1rem;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.z-10 {
  z-index: 10;
}

.drop-shadow-md {
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
}

.max-h-\[70vh\] {
  max-height: 70vh;
}

.object-contain {
  object-fit: contain;
}

.p-4 {
  padding: 1rem;
}

.font-semibold {
  font-weight: 600;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.leading-normal {
  line-height: 1.5;
}

@media (min-width: 640px) {
  .sm\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  
  .sm\:flex-row {
    flex-direction: row;
  }
}

@media (min-width: 768px) {
  .md\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .lg\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
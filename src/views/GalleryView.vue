<template>
  <div
    class="min-h-screen p-4 flex flex-col justify-center items-center bg-[#fefcff]"
  >
    <!-- <NavBar />
<NavigationBar/> -->
    <main
      class="py-16 flex-1 flex flex-col justify-center items-center text-center max-w-6xl w-full"
    >
      <h1
        class="m-0 mb-8 text-4xl font-bold bg-gradient-to-r from-[#ff6b6b] via-[#ff9e7d] to-[#ffd670] text-transparent bg-clip-text"
      >
        Birthday Memories Gallery
      </h1>

      <div v-if="loading" class="text-lg">Loading memories...</div>

      <div
        v-else-if="images.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mb-8"
      >
        <div
          v-for="image in images"
          :key="image.id"
          class="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition-all hover:translate-y-[-5px] hover:shadow-lg"
          @click="openModal(image)"
        >
<div class="aspect-square overflow-hidden relative bg-gray-100">
  <!-- Placeholder that shows until image loads -->
  <div class="absolute inset-0 flex items-center justify-center text-gray-300">
    <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path>
    </svg>
  </div>
          <img
    :src="image.url"
    :alt="`Memory from ${image.sender}`"
    class="w-full h-full object-cover absolute inset-0 transition-opacity duration-300"
    :class="{'opacity-0': !imageLoaded}"
    loading="lazy"
    @load="imageLoaded = true"
  />
          </div>
          <div class="p-3">
            <p class="font-medium">From: {{ image.sender }}</p>
          </div>
        </div>
      </div>

      <p v-else class="text-lg text-gray-600 my-8">
        No memories have been shared yet. Be the first!
      </p>

      <div class="flex flex-col sm:flex-row gap-4">
        <router-link to="/upload">
          <button
            class="bg-gradient-to-r from-[#ff6b6b] to-[#ff9e7d] text-white border-none py-3 px-6 rounded-md text-base cursor-pointer transition-all hover:translate-y-[-2px] hover:shadow-md min-w-48"
          >
            Share Your Photos
          </button>
        </router-link>

        <router-link to="/">
          <button
            class="bg-gray-100 text-gray-800 border border-gray-300 py-3 px-6 rounded-md text-base cursor-pointer transition-all hover:translate-y-[-2px] hover:shadow-md min-w-48"
          >
            Back to Home
          </button>
        </router-link>
      </div>
    </main>

    <!-- Image Modal -->
   <!-- Image Modal with Fixed Height Container -->
<!-- Image Modal with Overlay Only -->
<div
  v-if="selectedImage"
  class="fixed inset-0 bg-black/80 flex justify-center items-center z-50 modal-overlay"
  @click="closeModal"
>
  <div
    class="max-w-5xl w-full max-h-[90vh] rounded-lg overflow-hidden relative flex flex-col"
    @click.stop
  >
    <!-- Close button -->
    <button
      @click="closeModal"
      class="absolute top-3 right-4 text-white text-2xl font-bold z-20 drop-shadow-lg hover:text-gray-300 transition-colors"
    >
      &times;
    </button>
    
    <!-- Navigation buttons -->
    <button 
      @click.stop="previousImage" 
      class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 z-20 transition-all"
      :class="{ 'opacity-50 cursor-not-allowed': isFirstImage }"
      :disabled="isFirstImage"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    
    <button 
      @click.stop="nextImage" 
      class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 z-20 transition-all"
      :class="{ 'opacity-50 cursor-not-allowed': isLastImage }"
      :disabled="isLastImage"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
    
    <!-- Fixed Size Image Container -->
    <div class="image-container">
      <transition name="fade" mode="out-in">
        <img
          :key="selectedImage.id"
          :src="selectedImage.url"
          :alt="`Memory from ${selectedImage.sender}`"
          class="modal-image"
        />
      </transition>
    </div>
    
    <!-- Message Footer with transparent background -->
    <div class="message-footer">
      <div class="flex justify-between items-center mb-2">
        <p class="font-semibold text-white">From: {{ selectedImage.sender }}</p>
        <span class="text-sm text-gray-300">Image {{ currentImageIndex + 1 }} of {{ images.length }}</span>
      </div>
      <p class="leading-relaxed text-white text-opacity-90 whitespace-pre-wrap">
        {{ selectedImage.message || "No message provided." }}
      </p>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import { ref, onMounted, computed, onUnmounted } from "vue";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import NavBar from "@/components/NavBar.vue"; // Import the NavBar component
// import NavigationBar from '@/components/NavigationBar.vue';
import UnifiedNavBar from '@/components/UnifiedNavBar.vue';
// import NavBar from '@/components/NavBar.vue';

// Fallback mock images in case Firebase fetch fails
const mockImages = [
  {
    id: 1,
    url: "https://via.placeholder.com/400x300",
    sender: "John",
    message: "Happy birthday! Remember our trip to the beach?",
  },
  {
    id: 2,
    url: "https://via.placeholder.com/400x300",
    sender: "Amy",
    message: "Wishing you the best day ever!",
  },
  {
    id: 3,
    url: "https://via.placeholder.com/400x300",
    sender: "Michael",
    message: "Another year, another adventure!",
  },
];

export default {
  name: "GalleryView",
  components: {
    // NavBar,
    // NavigationBar,
    UnifiedNavBar,
    NavBar, // Register the NavBar component
  },
  setup() {
    const imageLoaded = ref(false);

    const images = ref([]);
    const loading = ref(true);
    const selectedImage = ref(null);
    const currentImageIndex = ref(0);
    const handleKeyDown = (e) => {
      if (!selectedImage.value) return;

      if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        previousImage();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    const fetchImages = async () => {
      try {
        console.log("Fetching images from Firestore...");

        // Check if in offline mode
        if (db._offlineComponents) {
          console.log("Firestore is in offline mode, using mock data");
          images.value = mockImages;
          loading.value = false;
          return;
        }

        // Try to fetch from Firebase
        const q = query(
          collection(db, "birthdayImages"),
          orderBy("timestamp", "desc")
        );

        const querySnapshot = await getDocs(q);
        const fetchedImages = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          console.log("Image message:", data.message);
          return {
            id: doc.id,
            ...data,
            formattedDate: data.timestamp?.toDate().toLocaleDateString(),
          };
        });

        console.log("Fetched images:", fetchedImages);

        if (fetchedImages.length > 0) {
          images.value = fetchedImages;
          preloadGalleryImages(); // Preload all images after fetching

        } else {
          // If no images found in Firebase, use mock data
      images.value = mockImages;
      preloadGalleryImages(); // Preload mock images too

        }
      } catch (error) {
        console.error("Error fetching images:", error);
        // Fall back to mock data if Firebase fails
        console.log("Error fetching from Firestore, using mock data");
        images.value = mockImages;
      } finally {
        loading.value = false;
      }
    };
// Add this to your setup()
const preloadImage = (url) => {
  if (!url) return;
  const img = new Image();
  img.src = url;
};

// Preload all gallery images after fetch
const preloadGalleryImages = () => {
  if (images.value && images.value.length > 0) {
    images.value.forEach(image => {
      if (image.url) {
        setTimeout(() => preloadImage(image.url), 100);
      }
    });
  }
};


// Add this function to your setup
const preloadAdjacentImages = () => {
  if (!selectedImage.value) return;
  
  // Preload next image if available
  if (currentImageIndex.value < images.value.length - 1) {
    const nextImg = images.value[currentImageIndex.value + 1];
    if (nextImg && nextImg.url) {
      const img = new Image();
      img.src = nextImg.url;
    }
  }
  
  // Preload previous image if available
  if (currentImageIndex.value > 0) {
    const prevImg = images.value[currentImageIndex.value - 1];
    if (prevImg && prevImg.url) {
      const img = new Image();
      img.src = prevImg.url;
    }
  }
};

// And update the openModal function to call this
const openModal = (image) => {
  selectedImage.value = image;
  // Find the index of the selected image
  currentImageIndex.value = images.value.findIndex(img => img.id === image.id);
  preloadAdjacentImages();
};

// Also update nextImage and previousImage to preload
const nextImage = () => {
  if (currentImageIndex.value < images.value.length - 1) {
    currentImageIndex.value++;
    selectedImage.value = images.value[currentImageIndex.value];
    preloadAdjacentImages();
  }
};

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
    selectedImage.value = images.value[currentImageIndex.value];
    preloadAdjacentImages();
  }
    };
    // Add these computed properties
    const isFirstImage = computed(() => currentImageIndex.value === 0);
    const isLastImage = computed(
      () => currentImageIndex.value === images.value.length - 1
    );

    const closeModal = () => {
      selectedImage.value = null;
    };

    onMounted(() => {
      fetchImages();
      window.addEventListener("keydown", handleKeyDown);
    });
    onUnmounted(() => {
      window.removeEventListener("keydown", handleKeyDown);
    });

    return {
      images,
      loading,
      selectedImage,
      currentImageIndex,
      isFirstImage,
      isLastImage,
      openModal,
      closeModal,
      nextImage,
      previousImage,
      imageLoaded
    };
  },
};
</script>

<style scoped>
/* Tailwind-like styling */
.image-loading {
  opacity: 0;
}

.image-loaded {
  opacity: 1;
  transition: opacity 0.3s ease;
}
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
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via),
    var(--tw-gradient-to);
}

.to-\[\#ffd670\] {
  --tw-gradient-to: #ffd670;
}
/* Better modal animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
/* Fixed size image container to prevent resizing */
.image-container {
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Image styling for consistent sizing */
.modal-image {
  max-height: 70vh;
  max-width: 100%;
  object-fit: contain;
  transition: all 0.3s ease;
}

/* Transparent message footer */
.message-footer {
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
/* Add these transition styles to your <style> section */
/* Smoother fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-height: 65vh;
  display: flex;
  justify-content: center;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


/* alternative  */
/* Alternative sliding transition - choose this or the fade above */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter-from {
  opacity: 0.5;
  transform: translateX(40px);
}

.slide-leave-to {
  opacity: 0.5;
  transform: translateX(-40px);
}
/* If you choose the sliding transition, just change <transition name="fade" mode="out-in"> to <transition name="slide" mode="out-in"> in the HTML. */

.modal-overlay {
  animation: fadeIn 0.3s ease-out;
}

.modal-content {
  animation: slideIn 0.3s ease-out;
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
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
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
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
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
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
    drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
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

<template>
  <div class="min-h-screen p-4 bg-mcm-bg">
    <div class="max-w-6xl mx-auto py-10">
      <!-- Loading state -->

      <div v-if="loading" class="flex justify-center py-10">
        <div
          class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-mcm-amber-500"
        ></div>
      </div>

      <div v-else>
        <!-- Welcome Banner -->
        <div class="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
          <div class="bg-mcm-amber-500 h-24 relative">
            <!-- MCM Design element -->
            <div
              class="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4"
            >
              <svg viewBox="0 0 100 100" class="w-32 h-32 text-white opacity-20">
                <path
                  d="M50 0 L55 40 L95 45 L55 50 L50 90 L45 50 L5 45 L45 40 Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>

          <div class="px-6 py-4">
            <h1 class="text-2xl font-bold mb-2">
              Welcome back, {{ userProfile.name || "Friend" }}!
            </h1>
            <p class="text-gray-600">What would you like to do today?</p>
          </div>
        </div>

        <!-- Dashboard Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <!-- Photos Stat -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-gray-500 text-sm">Your Photos</p>
                <h2 class="text-3xl font-bold mt-1">{{ photoCount }}</h2>
              </div>
              <div
                class="w-12 h-12 bg-mcm-amber-100 rounded-full flex items-center justify-center text-mcm-amber-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div class="mt-4">
              <router-link
                to="/profile"
                class="text-mcm-amber-500 text-sm hover:text-mcm-amber-600"
              >
                View all your photos →
              </router-link>
            </div>
          </div>

          <!-- Latest Photos Stat -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-gray-500 text-sm">Latest Photo</p>
                <h2 class="text-lg font-medium mt-1">
                  {{ latestPhoto ? formatDate(latestPhoto.timestamp) : "No photos yet" }}
                </h2>
              </div>
              <div
                class="w-12 h-12 bg-mcm-amber-100 rounded-full flex items-center justify-center text-mcm-amber-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div class="mt-4">
              <router-link
                to="/upload"
                class="text-mcm-amber-500 text-sm hover:text-mcm-amber-600"
              >
                Upload a new photo →
              </router-link>
            </div>
          </div>

          <!-- Gallery Stat -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-gray-500 text-sm">Total Gallery Photos</p>
                <h2 class="text-3xl font-bold mt-1">{{ totalGalleryPhotos }}</h2>
              </div>
              <div
                class="w-12 h-12 bg-mcm-amber-100 rounded-full flex items-center justify-center text-mcm-amber-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
            </div>
            <div class="mt-4">
              <router-link
                to="/gallery"
                class="text-mcm-amber-500 text-sm hover:text-mcm-amber-600"
              >
                Browse the gallery →
              </router-link>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <h2 class="text-xl font-bold mb-4">Quick Actions</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <router-link
            to="/upload"
            class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div class="flex items-center">
              <div
                class="w-12 h-12 bg-mcm-amber-100 rounded-full flex items-center justify-center text-mcm-amber-500 mr-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-medium">Upload Photo</h3>
                <p class="text-sm text-gray-500">Share your memories</p>
              </div>
            </div>
          </router-link>

          <router-link
            to="/gallery"
            class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div class="flex items-center">
              <div
                class="w-12 h-12 bg-mcm-amber-100 rounded-full flex items-center justify-center text-mcm-amber-500 mr-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-medium">View Gallery</h3>
                <p class="text-sm text-gray-500">Browse all photos</p>
              </div>
            </div>
          </router-link>

          <router-link
            to="/profile"
            class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div class="flex items-center">
              <div
                class="w-12 h-12 bg-mcm-amber-100 rounded-full flex items-center justify-center text-mcm-amber-500 mr-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-medium">My Profile</h3>
                <p class="text-sm text-gray-500">Manage your account</p>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Recent Photos -->
        <h2 class="text-xl font-bold mb-4">Your Recent Photos</h2>
        <div v-if="photosLoading" class="flex justify-center py-6">
          <div
            class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-mcm-amber-500"
          ></div>
        </div>
        <div
          v-else-if="userPhotos.length === 0"
          class="bg-white rounded-lg shadow-md p-6 text-center text-gray-500"
        >
          <p class="mb-4">You haven't uploaded any photos yet.</p>
          <router-link to="/upload">
            <button
              class="py-2 px-4 bg-mcm-amber-500 text-white rounded hover:bg-mcm-amber-600 transition-colors"
            >
              Upload Your First Photo
            </button>
          </router-link>
        </div>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div
            v-for="(photo, index) in recentPhotos"
            :key="index"
            class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
          >
            <div class="aspect-square overflow-hidden">
              <img
                :src="photo.url"
                :alt="`Photo ${index + 1}`"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-3">
              <p class="text-sm text-gray-500">{{ formatDate(photo.timestamp) }}</p>
            </div>
          </div>

          <router-link
            v-if="userPhotos.length > 4"
            to="/profile"
            class="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all flex items-center justify-center"
          >
            <div class="text-center p-4">
              <span class="block text-xl font-medium text-mcm-amber-500"
                >+{{ userPhotos.length - 4 }}</span
              >
              <span class="text-gray-600">more photos</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import {
  doc,
  getDoc,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { db, auth } from "../firebase/config";
import { useUserPhotos } from "../composables/useUserPhotos"; // Import our composable
import UnifiedNavBar from "@/components/UnifiedNavBar.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: { UnifiedNavBar, NavBar },
  name: "DashboardView",
  setup() {
    const loading = ref(true);
    const userProfile = ref({});
    const totalGalleryPhotos = ref(0);

    // Get current user
    const currentUser = auth.currentUser;
    const userId = currentUser?.uid;

    // Use our composable to manage user photos
    const {
      photos: userPhotos,
      photoCount,
      loading: photosLoading,
      error: photosError,
    } = useUserPhotos(userId);

    // Computed property for latest photo
    const latestPhoto = computed(() => {
      if (userPhotos.value.length === 0) return null;

      // Return the most recent photo based on timestamp
      return [...userPhotos.value].sort((a, b) => {
        if (!a.timestamp) return 1;
        if (!b.timestamp) return -1;
        return b.timestamp - a.timestamp;
      })[0];
    });

    // Computed property for recent photos (up to 4)
    const recentPhotos = computed(() => {
      if (userPhotos.value.length === 0) return [];

      // Sort by timestamp (newest first) and take up to 4
      return [...userPhotos.value]
        .sort((a, b) => {
          if (!a.timestamp) return 1;
          if (!b.timestamp) return -1;
          return b.timestamp - a.timestamp;
        })
        .slice(0, 4);
    });

    // Fetch user profile and gallery stats
    const fetchUserData = async () => {
      try {
        if (!currentUser) {
          console.error("No user is logged in");
          return;
        }

        // Get user profile from Firestore
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));

        if (userDoc.exists()) {
          userProfile.value = {
            id: userDoc.id,
            ...userDoc.data(),
          };
        } else {
          console.log("No user profile found");
        }

        // Get total gallery photos count
        const galleryQuery = query(
          collection(db, "birthdayImages"),
          orderBy("timestamp", "desc")
        );

        const querySnapshot = await getDocs(galleryQuery);
        totalGalleryPhotos.value = querySnapshot.size;

        loading.value = false;
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        loading.value = false;
      }
    };

    const formatDate = (timestamp) => {
      if (!timestamp) return "N/A";

      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(timestamp);
    };

    // Initialize data
    onMounted(fetchUserData);

    return {
      loading,
      userProfile,
      userPhotos,
      photoCount,
      photosLoading,
      latestPhoto,
      recentPhotos,
      totalGalleryPhotos,
      formatDate,
    };
  },
};
</script>

<style scoped>
.bg-mcm-bg {
  background-color: #f9f7fd;
}

.bg-mcm-amber-500 {
  background-color: #6c2c9b; /* Purple */
}

.bg-mcm-amber-100 {
  background-color: #f0d4ff; /* Light purple */
}

.text-mcm-amber-500 {
  color: #6c2c9b; /* Purple */
}

.text-mcm-amber-600 {
  color: #551e85; /* Darker purple */
}

.hover\:text-mcm-amber-600:hover {
  color: #551e85; /* Darker purple */
}

.hover\:bg-mcm-amber-600:hover {
  background-color: #551e85; /* Darker purple */
}

.aspect-square {
  aspect-ratio: 1 / 1;
}

/* Fix for Safari which might not support aspect-ratio */
@supports not (aspect-ratio: 1 / 1) {
  .aspect-square::before {
    float: left;
    padding-top: 100%;
    content: "";
  }
  .aspect-square::after {
    display: block;
    content: "";
    clear: both;
  }
}
</style>

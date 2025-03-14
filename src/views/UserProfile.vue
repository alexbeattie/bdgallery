<template>
  <div class="min-h-screen p-4 bg-mcm-bg">
    <!-- <NavBar /> -->
    <div class="max-w-4xl mx-auto py-10">
      <!-- Profile Header -->
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

        <div
          class="px-6 py-4 flex flex-col md:flex-row justify-between items-center"
        >
          <div>
            <h1 class="text-2xl font-bold">
              {{ userProfile.name || "My Profile" }}
            </h1>
            <p class="text-gray-600">{{ userProfile.email }}</p>
            <p class="text-sm text-gray-500">
              Member since {{ formatDate(userProfile.createdAt) }}
            </p>
          </div>

          <div class="mt-4 md:mt-0 flex space-x-3">
            <button
              @click="editProfile = true"
              class="py-2 px-4 border border-mcm-amber-500 text-mcm-amber-600 rounded hover:bg-mcm-amber-50 transition-colors"
            >
              Edit Profile
            </button>
            <button
              @click="handleLogout"
              class="py-2 px-4 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="mb-8 border-b border-gray-200">
        <div class="flex">
          <button
            @click="activeTab = 'photos'"
            class="py-3 px-6 border-b-2 font-medium transition-colors"
            :class="
              activeTab === 'photos'
                ? 'border-mcm-amber-500 text-mcm-amber-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            "
          >
            My Photos
          </button>
          <button
            @click="activeTab = 'account'"
            class="py-3 px-6 border-b-2 font-medium transition-colors"
            :class="
              activeTab === 'account'
                ? 'border-mcm-amber-500 text-mcm-amber-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            "
          >
            Account Settings
          </button>
        </div>
      </div>

      <!-- Loading Indicator -->
      <div v-if="loading" class="py-10 flex justify-center">
        <div
          class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-mcm-amber-500"
        ></div>
      </div>

      <!-- Photos Tab -->
      <div v-else-if="activeTab === 'photos'">
        <div class="mb-6 flex justify-between items-center">
          <h2 class="text-xl font-medium">My Uploaded Photos</h2>
          <router-link to="/upload">
            <button
              class="py-2 px-4 bg-mcm-amber-500 text-white rounded hover:bg-mcm-amber-600 transition-colors"
            >
              Upload New Photo
            </button>
          </router-link>
        </div>

        <div
          v-if="userPhotos.length === 0"
          class="py-10 text-center text-gray-500"
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

        <div
          v-else
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8"
        >
          <div
            v-for="(photo, index) in userPhotos"
            :key="index"
            class="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg"
          >
            <div class="aspect-[4/3] overflow-hidden">
              <img
                :src="photo.url"
                :alt="`Photo ${index + 1}`"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-4">
              <p class="text-sm text-gray-500">
                Uploaded {{ formatDate(photo.timestamp) }}
              </p>
              <p v-if="photo.message" class="mt-2 text-gray-700">
                {{ photo.message }}
              </p>
              <div class="mt-4 flex justify-between">
                <button
                  @click="editPhoto(photo)"
                  class="text-mcm-amber-600 hover:text-mcm-amber-700"
                >
                  Edit
                </button>
                <button
                  @click="confirmDeletePhoto(photo)"
                  class="text-red-500 hover:text-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Account Settings Tab -->
      <div v-else-if="activeTab === 'account'">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-medium mb-6">Account Information</h2>

          <form @submit.prevent="updateAccountInfo" class="max-w-md">
            <div class="mb-4">
              <label
                for="displayName"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Display Name</label
              >
              <input
                type="text"
                id="displayName"
                v-model="accountInfo.name"
                class="w-full p-2 border border-gray-300 rounded focus:ring-mcm-amber-500 focus:border-mcm-amber-500"
              />
            </div>

            <div class="mb-4">
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Email Address</label
              >
              <input
                type="email"
                id="email"
                v-model="accountInfo.email"
                disabled
                class="w-full p-2 border border-gray-300 rounded bg-gray-50"
              />
              <p class="mt-1 text-sm text-gray-500">Email cannot be changed</p>
            </div>

            <div class="mb-6">
              <label
                for="password"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Password</label
              >
              <button
                type="button"
                @click="showChangePassword = true"
                class="text-mcm-amber-600 hover:text-mcm-amber-700 text-sm"
              >
                Change Password
              </button>
            </div>

            <button
              type="submit"
              class="py-2 px-4 bg-mcm-amber-500 text-white rounded hover:bg-mcm-amber-600 transition-colors"
              :disabled="updateLoading"
            >
              {{ updateLoading ? "Saving..." : "Save Changes" }}
            </button>
          </form>

          <div class="mt-12 pt-6 border-t border-gray-200">
            <h3 class="text-lg font-medium text-gray-900 mb-3">Danger Zone</h3>
            <p class="text-sm text-gray-500 mb-4">
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
            <button
              @click="confirmDeleteAccount = true"
              class="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>

      <!-- Edit Profile Modal -->
      <div
        v-if="editProfile"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div class="bg-white rounded-lg shadow-xl max-w-md w-full m-4">
          <div
            class="px-6 py-4 border-b border-gray-200 flex justify-between items-center"
          >
            <h2 class="text-xl font-medium">Edit Profile</h2>
            <button
              @click="editProfile = false"
              class="text-gray-400 hover:text-gray-500"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form @submit.prevent="saveProfile" class="p-6">
            <div class="mb-4">
              <label
                for="profileName"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Display Name</label
              >
              <input
                type="text"
                id="profileName"
                v-model="profileForm.name"
                class="w-full p-2 border border-gray-300 rounded focus:ring-mcm-amber-500 focus:border-mcm-amber-500"
              />
            </div>

            <div class="flex justify-end space-x-3">
              <button
                type="button"
                @click="editProfile = false"
                class="py-2 px-4 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="py-2 px-4 bg-mcm-amber-500 text-white rounded hover:bg-mcm-amber-600 transition-colors"
                :disabled="updateLoading"
              >
                {{ updateLoading ? "Saving..." : "Save Changes" }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Edit Photo Modal -->
      <div
        v-if="selectedPhoto"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full m-4">
          <div
            class="px-6 py-4 border-b border-gray-200 flex justify-between items-center"
          >
            <h2 class="text-xl font-medium">Edit Photo</h2>
            <button
              @click="selectedPhoto = null"
              class="text-gray-400 hover:text-gray-500"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div class="p-6">
            <div class="aspect-[4/3] overflow-hidden rounded mb-4">
              <img
                :src="selectedPhoto.url"
                :alt="'Selected photo'"
                class="w-full h-full object-contain"
              />
            </div>

            <form @submit.prevent="savePhotoChanges" class="mt-4">
              <div class="mb-4">
                <label
                  for="photoMessage"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >Message</label
                >
                <textarea
                  id="photoMessage"
                  v-model="photoForm.message"
                  rows="3"
                  class="w-full p-2 border border-gray-300 rounded focus:ring-mcm-amber-500 focus:border-mcm-amber-500"
                  placeholder="Add a message to go with your photo..."
                ></textarea>
              </div>

              <div class="flex justify-end space-x-3">
                <button
                  type="button"
                  @click="selectedPhoto = null"
                  class="py-2 px-4 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="py-2 px-4 bg-mcm-amber-500 text-white rounded hover:bg-mcm-amber-600 transition-colors"
                  :disabled="updateLoading"
                >
                  {{ updateLoading ? "Saving..." : "Save Changes" }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Change Password Modal -->
      <div
        v-if="showChangePassword"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div class="bg-white rounded-lg shadow-xl max-w-md w-full m-4">
          <div
            class="px-6 py-4 border-b border-gray-200 flex justify-between items-center"
          >
            <h2 class="text-xl font-medium">Change Password</h2>
            <button
              @click="showChangePassword = false"
              class="text-gray-400 hover:text-gray-500"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form @submit.prevent="changePassword" class="p-6">
            <div class="mb-4">
              <label
                for="currentPassword"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Current Password</label
              >
              <input
                type="password"
                id="currentPassword"
                v-model="passwordForm.currentPassword"
                class="w-full p-2 border border-gray-300 rounded focus:ring-mcm-amber-500 focus:border-mcm-amber-500"
                  autocomplete="current-password"

                required
              />
            </div>

            <div class="mb-4">
              <label
                for="newPassword"
                class="block text-sm font-medium text-gray-700 mb-1"
                >New Password</label
              >
              <input
                type="password"
                id="newPassword"
                v-model="passwordForm.newPassword"
                class="w-full p-2 border border-gray-300 rounded focus:ring-mcm-amber-500 focus:border-mcm-amber-500"
                required
                minlength="6"
              />
            </div>

            <div class="mb-6">
              <label
                for="confirmPassword"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Confirm New Password</label
              >
              <input
                type="password"
                id="confirmPassword"
                v-model="passwordForm.confirmPassword"
                class="w-full p-2 border border-gray-300 rounded focus:ring-mcm-amber-500 focus:border-mcm-amber-500"
                required
              />
              <p v-if="passwordError" class="mt-1 text-sm text-red-500">
                {{ passwordError }}
              </p>
            </div>

            <div class="flex justify-end space-x-3">
              <button
                type="button"
                @click="showChangePassword = false"
                class="py-2 px-4 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="py-2 px-4 bg-mcm-amber-500 text-white rounded hover:bg-mcm-amber-600 transition-colors"
                :disabled="
                  updateLoading ||
                  passwordForm.newPassword !== passwordForm.confirmPassword
                "
              >
                {{ updateLoading ? "Updating..." : "Update Password" }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Delete Confirmation Modal -->
      <div
        v-if="showDeleteConfirm"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div class="bg-white rounded-lg shadow-xl max-w-md w-full m-4">
          <div class="px-6 py-4 border-b border-gray-200">
            <h2 class="text-xl font-medium text-red-600">Confirm Delete</h2>
          </div>

          <div class="p-6">
            <p class="mb-4">{{ deleteConfirmMessage }}</p>
            <p
              v-if="deleteType === 'account'"
              class="text-sm text-gray-600 mb-4"
            >
              This will permanently delete your account and all of your uploaded
              photos. This action cannot be undone.
            </p>

            <div class="flex justify-end space-x-3">
              <button
                @click="cancelDelete"
                class="py-2 px-4 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                @click="confirmDelete"
                class="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                :disabled="updateLoading"
              >
                {{ updateLoading ? "Deleting..." : "Yes, Delete" }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, computed, onMounted, watch, onUnmounted } from "vue";
import {
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import {
  signOut,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  deleteUser,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { useUserPhotos } from "../composables/useUserPhotos";
import { db, auth } from "../firebase/config";
// Remove these imports
// import NavigationBar from '@/components/NavigationBar.vue';
// import NavBar from '@/components/NavBar.vue';
import UnifiedNavBar from "@/components/UnifiedNavBar.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: { UnifiedNavBar, NavBar }, // This is the correct way to register components
  name: "UserProfile",
  setup() {
    const router = useRouter();
    const loading = ref(true);
    const updateLoading = ref(false);
    const error = ref(null);
    const activeTab = ref("photos");
    const userProfile = ref({});
    const accountInfo = ref({
      name: "",
      email: "",
    });

    // Get current user
    const userId = ref(null);
    let unsubscribeAuth = null;

    // Use our composable to manage photos
    const {
      photos: userPhotos,
      photoCount,
      loading: photosLoading,
      error: photosError,
      updatePhoto,
      deletePhoto,
    } = useUserPhotos(userId);

    // Edit profile state
    const editProfile = ref(false);
    const profileForm = ref({
      name: "",
    });

    // Photo editing state
    const selectedPhoto = ref(null);
    const photoForm = ref({
      message: "",
    });

    // Password change state
    const showChangePassword = ref(false);
    const passwordForm = ref({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    const passwordError = ref("");

    // Delete confirmation state
    const showDeleteConfirm = ref(false);
    const deleteType = ref("");
    const itemToDelete = ref(null);
    const confirmDeleteAccount = ref(false);

    // Computed properties
    const deleteConfirmMessage = computed(() => {
      if (deleteType.value === "photo") {
        return "Are you sure you want to delete this photo? This action cannot be undone.";
      } else if (deleteType.value === "account") {
        return "Are you sure you want to delete your account?";
      }
      return "Are you sure?";
    });

    // Methods
    const fetchUserData = async () => {
      if (!userId.value) return;

      loading.value = true;
      error.value = null;

      try {
        // Get user profile from Firestore using userId.value
        const userDoc = await getDoc(doc(db, "users", userId.value));

        if (userDoc.exists()) {
          userProfile.value = {
            id: userDoc.id,
            ...userDoc.data(),
          };

          // Initialize account info
          accountInfo.value = {
            name: userProfile.value.name || "",
            email: userProfile.value.email || auth.currentUser?.email || "",
          };

          // Initialize profile form
          profileForm.value.name = userProfile.value.name || "";
        } else {
          // If user document doesn't exist in Firestore, create one
          const userData = {
            name: auth.currentUser?.displayName || "User",
            email: auth.currentUser?.email || "",
            createdAt: serverTimestamp(),
          };

          // Create a new document or update existing one
          await updateDoc(doc(db, "users", userId.value), userData);

          userProfile.value = {
            id: userId.value,
            ...userData,
          };

          accountInfo.value.name = userData.name;
          accountInfo.value.email = userData.email;
          profileForm.value.name = userData.name;
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        error.value = "Failed to load user data. Please try again.";
      } finally {
        loading.value = false;
      }
    };

    const handleLogout = async () => {
      try {
        await signOut(auth);
        router.push("/login");
      } catch (err) {
        console.error("Error signing out:", err);
      }
    };

    const updateAccountInfo = async () => {
      updateLoading.value = true;
      error.value = null;

      try {
        if (!auth.currentUser) {
          throw new Error("You must be logged in to update your profile");
        }
        // Update Firestore user document
        await updateDoc(doc(db, "users", userId.value), {
          name: accountInfo.value.name,
        });

        // Update user profile in Auth
        await updateProfile(auth.currentUser, {
          displayName: accountInfo.value.name,
        });

        // Update local state
        userProfile.value.name = accountInfo.value.name;
        profileForm.value.name = accountInfo.value.name;

        alert("Your account information has been updated!");
        updateLoading.value = false;
      } catch (err) {
        console.error("Error updating account info:", err);
        error.value = err.message;
        updateLoading.value = false;
      }
    };

    const saveProfile = async () => {
      updateLoading.value = true;
      error.value = null;

      try {
        if (!auth.currentUser) {
          throw new Error("You must be logged in to update your profile");
        }

        // Update Firestore user document
        await updateDoc(doc(db, "users", userId.value), {
          name: profileForm.value.name,
        });

        // Update user profile in Auth
        await updateProfile(auth.currentUser, {
          displayName: profileForm.value.name,
        });

        // Update local state
        userProfile.value.name = profileForm.value.name;
        accountInfo.value.name = profileForm.value.name;

        // Close the edit profile modal
        editProfile.value = false;
        updateLoading.value = false;
      } catch (err) {
        console.error("Error saving profile:", err);
        error.value = err.message;
        updateLoading.value = false;
      }
    };

    const editPhoto = (photo) => {
      selectedPhoto.value = photo;
      photoForm.value.message = photo.message || "";
    };

    const savePhotoChanges = async () => {
      updateLoading.value = true;
      error.value = null;

      try {
        // Use the composable's updatePhoto method
        await updatePhoto(selectedPhoto.value.id, {
          message: photoForm.value.message,
        });

        // Close the edit photo modal
        selectedPhoto.value = null;
        updateLoading.value = false;
      } catch (err) {
        console.error("Error updating photo:", err);
        error.value = err.message;
        updateLoading.value = false;
      }
    };

    const changePassword = async () => {
      updateLoading.value = true;
      passwordError.value = "";

      try {
        if (
          passwordForm.value.newPassword !== passwordForm.value.confirmPassword
        ) {
          passwordError.value = "Passwords do not match";
          updateLoading.value = false;
          return;
        }

        if (!auth.currentUser) {
          throw new Error("You must be logged in to change your password");
        }

        // Re-authenticate the user
        const credential = EmailAuthProvider.credential(
          auth.currentUser.email,
          passwordForm.value.currentPassword
        );

        await reauthenticateWithCredential(auth.currentUser, credential);

        // Change password
        await updatePassword(auth.currentUser, passwordForm.value.newPassword);

        // Reset form and close modal
        passwordForm.value = {
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        };

        showChangePassword.value = false;
        alert("Your password has been updated successfully!");
        updateLoading.value = false;
      } catch (err) {
        console.error("Error changing password:", err);

        if (err.code === "auth/wrong-password") {
          passwordError.value = "Incorrect current password";
        } else if (err.code === "auth/weak-password") {
          passwordError.value = "Password should be at least 6 characters";
        } else {
          passwordError.value = err.message;
        }

        updateLoading.value = false;
      }
    };

    const confirmDeletePhoto = (photo) => {
      itemToDelete.value = photo;
      deleteType.value = "photo";
      showDeleteConfirm.value = true;
    };

    const cancelDelete = () => {
      showDeleteConfirm.value = false;
      itemToDelete.value = null;
      deleteType.value = "";
    };

    const confirmDelete = async () => {
      updateLoading.value = true;

      try {
        if (deleteType.value === "photo") {
          // Use the composable's deletePhoto method
          await deletePhoto(itemToDelete.value.id, itemToDelete.value.fileName);

          // Close the confirmation modal
          cancelDelete();
        } else if (deleteType.value === "account") {
          if (!auth.currentUser) {
            throw new Error("You must be logged in to delete your account");
          }

          // Delete all user's photos
          for (const photo of userPhotos.value) {
            try {
              await deletePhoto(photo.id, photo.fileName);
            } catch (photoErr) {
              console.error(`Error deleting photo ${photo.id}:`, photoErr);
            }
          }

          // Delete user document from Firestore
          await deleteDoc(doc(db, "users", userId.value));

          // Delete user's authentication account
          await deleteUser(auth.currentUser);

          // Navigate to home page
          router.push("/");
        }

        updateLoading.value = false;
      } catch (err) {
        console.error("Error during delete operation:", err);
        alert(
          "An error occurred during the delete operation. Please try again."
        );
        updateLoading.value = false;
        cancelDelete();
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

    // Watch for account deletion
    const watchAccountDeletion = () => {
      if (confirmDeleteAccount.value) {
        deleteType.value = "account";
        showDeleteConfirm.value = true;
        confirmDeleteAccount.value = false;
      }
    };

    // Fetch user data on component mount
    onMounted(() => {
      console.log("UserProfile component mounted");
      unsubscribeAuth = onAuthStateChanged(auth, (user) => {
        console.log("Auth state changed:", user?.uid);
        if (user) {
          userId.value = user.uid;
          fetchUserData();
        } else {
          // Not logged in, redirect to login
          router.push("/login");
        }
      });
    });

    onUnmounted(() => {
      if (unsubscribeAuth) {
        unsubscribeAuth();
      }
    });

    // Watch for account deletion request
    watch(confirmDeleteAccount, watchAccountDeletion);

    return {
      loading,
      updateLoading,
      error,
      activeTab,
      userProfile,
      userPhotos,
      photoCount, // Export the photo count
      accountInfo,
      editProfile,
      profileForm,
      selectedPhoto,
      photoForm,
      showChangePassword,
      passwordForm,
      passwordError,
      showDeleteConfirm,
      deleteConfirmMessage,
      confirmDeleteAccount,
      handleLogout,
      updateAccountInfo,
      saveProfile,
      editPhoto,
      savePhotoChanges,
      changePassword,
      confirmDeletePhoto,
      cancelDelete,
      confirmDelete,
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

.bg-mcm-amber-50 {
  background-color: #f9f4ff; /* Very light purple */
}

.text-mcm-amber-500 {
  color: #6c2c9b; /* Purple */
}

.text-mcm-amber-600 {
  color: #551e85; /* Darker purple */
}

.text-mcm-amber-700 {
  color: #40196e;
}
.text-mcm-amber-700 {
  color: #40196e; /* Even darker purple */
}

.hover\:bg-mcm-amber-50:hover {
  background-color: #f9f4ff; /* Very light purple */
}

.hover\:bg-mcm-amber-600:hover {
  background-color: #551e85; /* Darker purple */
}

.border-mcm-amber-500 {
  border-color: #6c2c9b; /* Purple */
}

.focus\:ring-mcm-amber-500:focus {
  --tw-ring-color: #6c2c9b; /* Purple */
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
    var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
    calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
    var(--tw-shadow, 0 0 #0000);
}

.focus\:border-mcm-amber-500:focus {
  border-color: #6c2c9b; /* Purple */
}

/* Aspect ratio styling */
.aspect-\[4\/3\] {
  aspect-ratio: 4/3;
}

/* Fix for Safari which might not support aspect-ratio */
@supports not (aspect-ratio: 4/3) {
  .aspect-\[4\/3\]::before {
    float: left;
    padding-top: 75%; /* 3/4 = 0.75 = 75% */
    content: "";
  }
  .aspect-\[4\/3\]::after {
    display: block;
    content: "";
    clear: both;
  }
}

/* Transitions */
.transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Animations */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>

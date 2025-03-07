<template>
  <div class="min-h-screen p-4 bg-mcm-bg">
    <div class="max-w-4xl mx-auto py-10">
      <!-- Profile Header -->
      <div class="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
        <div class="bg-mcm-amber-500 h-24 relative">
          <!-- MCM Design element -->
          <div class="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4">
            <svg viewBox="0 0 100 100" class="w-32 h-32 text-white opacity-20">
              <path d="M50 0 L55 40 L95 45 L55 50 L50 90 L45 50 L5 45 L45 40 Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
        
        <div class="px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 class="text-2xl font-bold">{{ userProfile.name || 'My Profile' }}</h1>
            <p class="text-gray-600">{{ userProfile.email }}</p>
            <p class="text-sm text-gray-500">Member since {{ formatDate(userProfile.createdAt) }}</p>
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
            :class="activeTab === 'photos' ? 'border-mcm-amber-500 text-mcm-amber-600' : 'border-transparent text-gray-500 hover:text-gray-700'"
          >
            My Photos
          </button>
          <button 
            @click="activeTab = 'account'" 
            class="py-3 px-6 border-b-2 font-medium transition-colors" 
            :class="activeTab === 'account' ? 'border-mcm-amber-500 text-mcm-amber-600' : 'border-transparent text-gray-500 hover:text-gray-700'"
          >
            Account Settings
          </button>
        </div>
      </div>
      
      <!-- Loading Indicator -->
      <div v-if="loading" class="py-10 flex justify-center">
        <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-mcm-amber-500"></div>
      </div>
      
      <!-- Photos Tab -->
      <div v-else-if="activeTab === 'photos'">
        <div class="mb-6 flex justify-between items-center">
          <h2 class="text-xl font-medium">My Uploaded Photos</h2>
          <router-link to="/upload">
            <button class="py-2 px-4 bg-mcm-amber-500 text-white rounded hover:bg-mcm-amber-600 transition-colors">
              Upload New Photo
            </button>
          </router-link>
        </div>
        
        <div v-if="userPhotos.length === 0" class="py-10 text-center text-gray-500">
          <p class="mb-4">You haven't uploaded any photos yet.</p>
          <router-link to="/upload">
            <button class="py-2 px-4 bg-mcm-amber-500 text-white rounded hover:bg-mcm-amber-600 transition-colors">
              Upload Your First Photo
            </button>
          </router-link>
        </div>
        
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div v-for="(photo, index) in userPhotos" :key="index" 
               class="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
            <div class="aspect-[4/3] overflow-hidden">
              <img
                :src="photo.url"
                :alt="`Photo ${index + 1}`"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-4">
              <p class="text-sm text-gray-500">Uploaded {{ formatDate(photo.timestamp) }}</p>
              <p v-if="photo.message" class="mt-2 text-gray-700">{{ photo.message }}</p>
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
              <label for="displayName" class="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
              <input 
                type="text" 
                id="displayName" 
                v-model="accountInfo.name" 
                class="w-full p-2 border border-gray-300 rounded focus:ring-mcm-amber-500 focus:border-mcm-amber-500"
              />
            </div>
            
            <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
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
              <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
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
              {{ updateLoading ? 'Saving...' : 'Save Changes' }}
            </button>
          </form>
          
          <div class="mt-12 pt-6 border-t border-gray-200">
            <h3 class="text-lg font-medium text-gray-900 mb-3">Danger Zone</h3>
            <p class="text-sm text-gray-500 mb-4">
              Once you delete your account, there is no going back. Please be certain.
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
      <div v-if="editProfile" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-xl max-w-md w-full m-4">
          <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 class="text-xl font-medium">Edit Profile</h2>
            <button @click="editProfile = false" class="text-gray-400 hover:text-gray-500">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form @submit.prevent="saveProfile" class="p-6">
            <div class="mb-4">
              <label for="profileName" class="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
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
                {{ updateLoading ? 'Saving...' : 'Save Changes' }}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <!-- Edit Photo Modal -->
      <div v-if="selectedPhoto" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full m-4">
          <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 class="text-xl font-medium">Edit Photo</h2>
            <button @click="selectedPhoto = null" class="text-gray-400 hover:text-gray-500">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
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
                <label for="photoMessage" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
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
                  {{ updateLoading ? 'Saving...' : 'Save Changes' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <!-- Change Password Modal -->
      <div v-if="showChangePassword" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-xl max-w-md w-full m-4">
          <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 class="text-xl font-medium">Change Password</h2>
            <button @click="showChangePassword = false" class="text-gray-400 hover:text-gray-500">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form @submit.prevent="changePassword" class="p-6">
            <div class="mb-4">
              <label for="currentPassword" class="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
              <input 
                type="password" 
                id="currentPassword" 
                v-model="passwordForm.currentPassword" 
                class="w-full p-2 border border-gray-300 rounded focus:ring-mcm-amber-500 focus:border-mcm-amber-500"
                required
              />
            </div>
            
            <div class="mb-4">
              <label for="newPassword" class="block text-sm font-medium text-gray-700 mb-1">New Password</label>
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
              <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                v-model="passwordForm.confirmPassword" 
                class="w-full p-2 border border-gray-300 rounded focus:ring-mcm-amber-500 focus:border-mcm-amber-500"
                required
              />
              <p v-if="passwordError" class="mt-1 text-sm text-red-500">{{ passwordError }}</p>
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
                :disabled="updateLoading || passwordForm.newPassword !== passwordForm.confirmPassword"
              >
                {{ updateLoading ? 'Updating...' : 'Update Password' }}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <!-- Delete Confirmation Modal -->
      <div v-if="showDeleteConfirm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-xl max-w-md w-full m-4">
          <div class="px-6 py-4 border-b border-gray-200">
            <h2 class="text-xl font-medium text-red-600">Confirm Delete</h2>
          </div>
          
          <div class="p-6">
            <p class="mb-4">{{ deleteConfirmMessage }}</p>
            <p v-if="deleteType === 'account'" class="text-sm text-gray-600 mb-4">
              This will permanently delete your account and all of your uploaded photos. This action cannot be undone.
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
                {{ updateLoading ? 'Deleting...' : 'Yes, Delete' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { 
  doc, getDoc, updateDoc, deleteDoc, collection, query, 
  where, getDocs, serverTimestamp 
} from 'firebase/firestore';
import { 
  signOut, updatePassword, EmailAuthProvider, 
  reauthenticateWithCredential, deleteUser, updateProfile 
} from 'firebase/auth';
import { ref as storageRef, deleteObject } from 'firebase/storage';
import { db, auth, storage } from '../firebase/config';

export default {
  name: 'UserProfile',
  setup() {
    const router = useRouter();
    const loading = ref(true);
    const updateLoading = ref(false);
    const error = ref(null);
    const activeTab = ref('photos');
    const userProfile = ref({});
    const userPhotos = ref([]);
    const accountInfo = ref({
      name: '',
      email: ''
    });
    
    // Edit profile state
    const editProfile = ref(false);
    const profileForm = ref({
      name: ''
    });
    
    // Photo editing state
    const selectedPhoto = ref(null);
    const photoForm = ref({
      message: ''
    });
    
    // Password change state
    const showChangePassword = ref(false);
    const passwordForm = ref({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    const passwordError = ref('');
    
    // Delete confirmation state
    const showDeleteConfirm = ref(false);
    const deleteType = ref('');
    const itemToDelete = ref(null);
    const confirmDeleteAccount = ref(false);
    
    // Computed properties
    const deleteConfirmMessage = computed(() => {
      if (deleteType.value === 'photo') {
        return 'Are you sure you want to delete this photo? This action cannot be undone.';
      } else if (deleteType.value === 'account') {
        return 'Are you sure you want to delete your account?';
      }
      return 'Are you sure?';
    });
    
    // Methods
    const fetchUserData = async () => {
      loading.value = true;
      error.value = null;
      
      try {
        const currentUser = auth.currentUser;
        
        if (!currentUser) {
          router.push('/login');
          return;
        }
        
        // Get user profile from Firestore
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        
        if (userDoc.exists()) {
          userProfile.value = {
            id: userDoc.id,
            ...userDoc.data()
          };
          
          // Initialize account info
          accountInfo.value = {
            name: userProfile.value.name || '',
            email: userProfile.value.email || currentUser.email
          };
          
          // Initialize profile form
          profileForm.value.name = userProfile.value.name || '';
        } else {
          // If user document doesn't exist in Firestore, create one
          const userData = {
            name: currentUser.displayName || 'User',
            email: currentUser.email,
            createdAt: serverTimestamp()
          };
          
          await updateDoc(doc(db, 'users', currentUser.uid), userData);
          userProfile.value = {
            id: currentUser.uid,
            ...userData
          };
          accountInfo.value.name = userData.name;
          accountInfo.value.email = userData.email;
          profileForm.value.name = userData.name;
        }
        
        // Fetch user's photos
        await fetchUserPhotos(currentUser.uid);
        
        loading.value = false;
      } catch (err) {
        console.error('Error fetching user data:', err);
        error.value = 'Failed to load user data. Please try again.';
        loading.value = false;
      }
    };
    
    const fetchUserPhotos = async (userId) => {
      try {
        const q = query(
          collection(db, 'birthdayImages'),
          where('userId', '==', userId)
        );
        
        const querySnapshot = await getDocs(q);
        const photos = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          timestamp: doc.data().timestamp?.toDate()
        }));
        
        userPhotos.value = photos;
      } catch (err) {
        console.error('Error fetching user photos:', err);
      }
    };
    
    const handleLogout = async () => {
      try {
        await signOut(auth);
        router.push('/login');
      } catch (err) {
        console.error('Error signing out:', err);
      }
    };
    
    const updateAccountInfo = async () => {
      updateLoading.value = true;
      error.value = null;
      
      try {
        const currentUser = auth.currentUser;
        
        if (!currentUser) {
          throw new Error('You must be logged in to update your profile');
        }
        
        // Update Firestore user document
        await updateDoc(doc(db, 'users', currentUser.uid), {
          name: accountInfo.value.name
        });
        
        // Update user profile in Auth
        await updateProfile(currentUser, {
          displayName: accountInfo.value.name
        });
        
        // Update local state
        userProfile.value.name = accountInfo.value.name;
        profileForm.value.name = accountInfo.value.name;
        
        alert('Your account information has been updated!');
        updateLoading.value = false;
      } catch (err) {
        console.error('Error updating account info:', err);
        error.value = err.message;
        updateLoading.value = false;
      }
    };
    
    const saveProfile = async () => {
      updateLoading.value = true;
      error.value = null;
      
      try {
        const currentUser = auth.currentUser;
        
        if (!currentUser) {
          throw new Error('You must be logged in to update your profile');
        }
        
        // Update Firestore user document
        await updateDoc(doc(db, 'users', currentUser.uid), {
          name: profileForm.value.name
        });
        
        // Update user profile in Auth
        await updateProfile(currentUser, {
          displayName: profileForm.value.name
        });
        
        // Update local state
        userProfile.value.name = profileForm.value.name;
        accountInfo.value.name = profileForm.value.name;
        
        // Close the edit profile modal
        editProfile.value = false;
        updateLoading.value = false;
      } catch (err) {
        console.error('Error saving profile:', err);
        error.value = err.message;
        updateLoading.value = false;
      }
    };
    
    const editPhoto = (photo) => {
      selectedPhoto.value = photo;
      photoForm.value.message = photo.message || '';
    };
    
    const savePhotoChanges = async () => {
      updateLoading.value = true;
      error.value = null;
      
      try {
        // Update photo document in Firestore
        await updateDoc(doc(db, 'birthdayImages', selectedPhoto.value.id), {
          message: photoForm.value.message
        });
        
        // Update local state
        const photoIndex = userPhotos.value.findIndex(p => p.id === selectedPhoto.value.id);
        if (photoIndex !== -1) {
          userPhotos.value[photoIndex].message = photoForm.value.message;
        }
        
        // Close the edit photo modal
        selectedPhoto.value = null;
        updateLoading.value = false;
      } catch (err) {
        console.error('Error updating photo:', err);
        error.value = err.message;
        updateLoading.value = false;
      }
    };
    
    const changePassword = async () => {
      updateLoading.value = true;
      passwordError.value = '';
      
      try {
        if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
          passwordError.value = 'Passwords do not match';
          updateLoading.value = false;
          return;
        }
        
        const currentUser = auth.currentUser;
        
        if (!currentUser) {
          throw new Error('You must be logged in to change your password');
        }
        
        // Re-authenticate the user
        const credential = EmailAuthProvider.credential(
          currentUser.email,
          passwordForm.value.currentPassword
        );
        
        await reauthenticateWithCredential(currentUser, credential);
        
        // Change password
        await updatePassword(currentUser, passwordForm.value.newPassword);
        
        // Reset form and close modal
        passwordForm.value = {
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        };
        
        showChangePassword.value = false;
        alert('Your password has been updated successfully!');
        updateLoading.value = false;
      } catch (err) {
        console.error('Error changing password:', err);
        
        if (err.code === 'auth/wrong-password') {
          passwordError.value = 'Incorrect current password';
        } else if (err.code === 'auth/weak-password') {
          passwordError.value = 'Password should be at least 6 characters';
        } else {
          passwordError.value = err.message;
        }
        
        updateLoading.value = false;
      }
    };
    
    const confirmDeletePhoto = (photo) => {
      itemToDelete.value = photo;
      deleteType.value = 'photo';
      showDeleteConfirm.value = true;
    };
    
    const cancelDelete = () => {
      showDeleteConfirm.value = false;
      itemToDelete.value = null;
      deleteType.value = '';
    };
    
    const confirmDelete = async () => {
      updateLoading.value = true;
      
      try {
        if (deleteType.value === 'photo') {
          // Delete photo from storage
          if (itemToDelete.value.fileName) {
            const imageRef = storageRef(storage, `birthday-images/${itemToDelete.value.fileName}`);
            await deleteObject(imageRef);
          }
          
          // Delete from Firestore
          await deleteDoc(doc(db, 'birthdayImages', itemToDelete.value.id));
          
          // Update local state
          userPhotos.value = userPhotos.value.filter(p => p.id !== itemToDelete.value.id);
          
          // Close the confirmation modal
          cancelDelete();
        } else if (deleteType.value === 'account') {
          const currentUser = auth.currentUser;
          
          if (!currentUser) {
            throw new Error('You must be logged in to delete your account');
          }
          
          // Delete all user's photos
          for (const photo of userPhotos.value) {
            try {
              // Delete from storage
              if (photo.fileName) {
                const imageRef = storageRef(storage, `birthday-images/${photo.fileName}`);
                await deleteObject(imageRef);
              }
              
              // Delete from Firestore
              await deleteDoc(doc(db, 'birthdayImages', photo.id));
            } catch (photoErr) {
              console.error(`Error deleting photo ${photo.id}:`, photoErr);
            }
          }
          
          // Delete user document from Firestore
          await deleteDoc(doc(db, 'users', currentUser.uid));
          
          // Delete user's authentication account
          await deleteUser(currentUser);
          
          // Navigate to home page
          router.push('/');
        }
        
        updateLoading.value = false;
      } catch (err) {
        console.error('Error during delete operation:', err);
        alert('An error occurred during the delete operation. Please try again.');
        updateLoading.value = false;
        cancelDelete();
      }
    };
    
    const formatDate = (timestamp) => {
      if (!timestamp) return 'N/A';
      
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }).format(timestamp);
    };
    
    // Watch for account deletion
    const watchAccountDeletion = () => {
      if (confirmDeleteAccount.value) {
        deleteType.value = 'account';
        showDeleteConfirm.value = true;
        confirmDeleteAccount.value = false;
      }
    };
    
    // Fetch user data on component mount
    onMounted(() => {
      fetchUserData();
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
      formatDate
    };
  }
};
</script>
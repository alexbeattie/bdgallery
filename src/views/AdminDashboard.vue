<template>
  <div class="min-h-screen">
    <!-- Admin dashboard content with Mid-Century Modern styling -->
    <div class="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-10">
        <h1 class="m-0 mb-4 text-3xl font-bold bg-gradient-to-r from-mcm-orange-500 via-mcm-peach-500 to-mcm-butter-500 text-transparent bg-clip-text">
          Admin Dashboard
        </h1>
        <p class="text-gray-600 dark:text-gray-300">
          Manage users, photos, and messages for the birthday celebration
        </p>
      </div>

      <!-- Stats Overview -->
      <div class="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div class="bg-white dark:bg-mcm-gray-800 overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-mcm-orange-500 rounded-md p-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 dark:text-gray-300 truncate">
                    Total Users
                  </dt>
                  <dd class="flex items-baseline">
                    <div class="text-2xl font-semibold text-gray-900 dark:text-white">
                      {{ stats.totalUsers }}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-mcm-gray-800 overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-mcm-teal-500 rounded-md p-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 dark:text-gray-300 truncate">
                    Total Photos
                  </dt>
                  <dd class="flex items-baseline">
                    <div class="text-2xl font-semibold text-gray-900 dark:text-white">
                      {{ stats.totalPhotos }}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-mcm-gray-800 overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-mcm-mint-500 rounded-md p-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 dark:text-gray-300 truncate">
                    Days Until Party
                  </dt>
                  <dd class="flex items-baseline">
                    <div class="text-2xl font-semibold text-gray-900 dark:text-white">
                      {{ daysUntilParty }}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-mcm-gray-800 overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-mcm-mustard-500 rounded-md p-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 dark:text-gray-300 truncate">
                    New Messages
                  </dt>
                  <dd class="flex items-baseline">
                    <div class="text-2xl font-semibold text-gray-900 dark:text-white">
                      {{ stats.newMessages }}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="mb-6 border-b border-gray-200 dark:border-gray-700">
        <nav class="-mb-px flex">
          <button 
            class="py-4 px-6 font-medium text-sm border-b-2 transition-colors duration-200"
            :class="activeTab === 'users' ? 
              'border-mcm-orange-500 text-mcm-orange-500' : 
              'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
            @click="activeTab = 'users'"
          >
            Users
          </button>
          <button 
            class="py-4 px-6 font-medium text-sm border-b-2 transition-colors duration-200"
            :class="activeTab === 'photos' ? 
              'border-mcm-teal-500 text-mcm-teal-500' : 
              'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
            @click="activeTab = 'photos'"
          >
            Photos
          </button>
          <button 
            class="py-4 px-6 font-medium text-sm border-b-2 transition-colors duration-200"
            :class="activeTab === 'messages' ? 
              'border-mcm-mint-500 text-mcm-mint-500' : 
              'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
            @click="activeTab = 'messages'"
          >
            Messages
          </button>
        </nav>
      </div>

      <!-- Loading indicator -->
      <div v-if="loading" class="flex justify-center py-10">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-mcm-orange-500"></div>
      </div>

      <!-- Tab Content -->
      <div v-else>
        <!-- Users Tab -->
        <div v-if="activeTab === 'users'" class="overflow-x-auto">
          <div class="mb-6 flex justify-between items-center">
            <h2 class="text-xl font-medium">Registered Users</h2>
            <div class="flex gap-2">
              <input 
                type="text" 
                v-model="userSearch" 
                placeholder="Search users..." 
                class="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-mcm-orange-500 focus:border-mcm-orange-500"
              />
            </div>
          </div>
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-mcm-gray-700">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Name
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Email
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Joined
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Photos
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-mcm-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <tr v-for="(user, index) in filteredUsers" :key="index" class="hover:bg-gray-50 dark:hover:bg-mcm-gray-700">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900 dark:text-white">{{ user.name }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500 dark:text-gray-300">{{ user.email }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500 dark:text-gray-300">{{ formatDate(user.createdAt) }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500 dark:text-gray-300">{{ user.photoCount || 0 }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                  <button 
                    @click="viewUserDetails(user)" 
                    class="text-mcm-teal-500 hover:text-mcm-teal-600 mr-3"
                  >
                    View
                  </button>
                  <button 
                    @click="deleteUser(user)" 
                    class="text-red-500 hover:text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr v-if="filteredUsers.length === 0">
                <td colspan="5" class="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-300">
                  No users found
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Photos Tab -->
        <div v-if="activeTab === 'photos'">
          <div class="mb-6 flex justify-between items-center">
            <h2 class="text-xl font-medium">Uploaded Photos</h2>
            <div class="flex gap-2">
              <input 
                type="text" 
                v-model="photoSearch" 
                placeholder="Search by sender..." 
                class="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-mcm-teal-500 focus:border-mcm-teal-500"
              />
            </div>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            <div v-for="(image, index) in filteredPhotos" :key="index" 
                class="bg-white dark:bg-mcm-gray-800 rounded-lg overflow-hidden shadow-md cursor-pointer transition-all hover:translate-y-[-5px] hover:shadow-lg">
              <div class="aspect-[4/3] overflow-hidden">
                <img
                  :src="image.url"
                  :alt="`Memory from ${image.sender}`"
                  class="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div class="p-3">
                <p class="font-medium text-gray-900 dark:text-white">From: {{ image.sender }}</p>
                <p class="text-sm text-gray-500 dark:text-gray-300">{{ formatDate(image.timestamp) }}</p>
                <div class="mt-2 flex justify-between">
                  <button 
                    @click="viewPhotoDetails(image)" 
                    class="text-sm text-mcm-teal-500 hover:text-mcm-teal-600"
                  >
                    View
                  </button>
                  <button 
                    @click="deletePhoto(image)" 
                    class="text-sm text-red-500 hover:text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div v-if="filteredPhotos.length === 0" class="col-span-full text-center py-10 text-gray-500 dark:text-gray-300">
              No photos found
            </div>
          </div>
        </div>

        <!-- Messages Tab -->
        <div v-if="activeTab === 'messages'">
          <div class="mb-6 flex justify-between items-center">
            <h2 class="text-xl font-medium">Birthday Messages</h2>
            <div class="flex gap-2">
              <input 
                type="text" 
                v-model="messageSearch" 
                placeholder="Search messages..." 
                class="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-mcm-mint-500 focus:border-mcm-mint-500"
              />
            </div>
          </div>
          
          <div class="space-y-4">
            <div v-for="(message, index) in filteredMessages" :key="index" 
                class="bg-white dark:bg-mcm-gray-800 rounded-lg overflow-hidden shadow-md p-4">
              <div class="flex justify-between items-start">
                <div>
                  <p class="font-medium text-gray-900 dark:text-white">From: {{ message.sender }}</p>
                  <p class="text-sm text-gray-500 dark:text-gray-300">{{ formatDate(message.timestamp) }}</p>
                </div>
                <div class="flex">
                  <button 
                    @click="deleteMessage(message)" 
                    class="text-sm text-red-500 hover:text-red-600 ml-3"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p class="mt-2 text-gray-700 dark:text-gray-300">{{ message.message }}</p>
            </div>
            <div v-if="filteredMessages.length === 0" class="text-center py-10 text-gray-500 dark:text-gray-300">
              No messages found
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for user/photo details -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
      <div class="bg-white dark:bg-mcm-gray-800 rounded-lg shadow-xl max-w-xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white">{{ modalTitle }}</h3>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-500">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="p-6">
          <!-- User details modal content -->
          <div v-if="modalType === 'user'" class="space-y-4">
            <div>
              <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">Name</h4>
              <p class="mt-1 text-gray-900 dark:text-white">{{ selectedItem.name }}</p>
            </div>
            <div>
              <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
              <p class="mt-1 text-gray-900 dark:text-white">{{ selectedItem.email }}</p>
            </div>
            <div>
              <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">Joined</h4>
              <p class="mt-1 text-gray-900 dark:text-white">{{ formatDate(selectedItem.createdAt) }}</p>
            </div>
            <div>
              <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">User ID</h4>
              <p class="mt-1 text-gray-900 dark:text-white">{{ selectedItem.id }}</p>
            </div>
          </div>
          
          <!-- Photo details modal content -->
          <div v-if="modalType === 'photo'" class="space-y-4">
            <div class="aspect-[4/3] overflow-hidden rounded">
              <img
                :src="selectedItem.url"
                :alt="`Memory from ${selectedItem.sender}`"
                class="w-full h-full object-contain"
              />
            </div>
            <div>
              <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">Sender</h4>
              <p class="mt-1 text-gray-900 dark:text-white">{{ selectedItem.sender }}</p>
            </div>
            <div>
              <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">Uploaded</h4>
              <p class="mt-1 text-gray-900 dark:text-white">{{ formatDate(selectedItem.timestamp) }}</p>
            </div>
            <div v-if="selectedItem.message">
              <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">Message</h4>
              <p class="mt-1 text-gray-900 dark:text-white">{{ selectedItem.message }}</p>
            </div>
          </div>
        </div>
        <div class="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
          <button @click="closeModal" class="px-4 py-2 bg-gray-200 dark:bg-mcm-gray-700 text-gray-700 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-mcm-gray-600">
            Close
          </button>
        </div>
      </div>
    </div>

    <!-- Confirmation modal for delete actions -->
    <div v-if="showConfirmModal" class="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
      <div class="bg-white dark:bg-mcm-gray-800 rounded-lg shadow-xl max-w-md w-full mx-4">
        <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white">Confirm Delete</h3>
        </div>
        <div class="p-6">
          <p class="text-gray-700 dark:text-gray-300">{{ confirmMessage }}</p>
        </div>
        <div class="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-4">
          <button @click="cancelDelete" class="px-4 py-2 bg-gray-200 dark:bg-mcm-gray-700 text-gray-700 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-mcm-gray-600">
            Cancel
          </button>
          <button @click="confirmDelete" class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { collection, getDocs, getDoc, doc, deleteDoc, query, orderBy, where } from 'firebase/firestore';
import { deleteUser as firebaseDeleteUser } from 'firebase/auth';
import { ref as storageRef, deleteObject } from 'firebase/storage';
import { db, auth, storage } from '../firebase/config';

export default {
  name: 'AdminDashboard',
  setup() {
    // State
    const loading = ref(true);
    const activeTab = ref('users');
    const users = ref([]);
    const photos = ref([]);
    const messages = ref([]);
    const showModal = ref(false);
    const modalType = ref('');
    const selectedItem = ref(null);
    const showConfirmModal = ref(false);
    const itemToDelete = ref(null);
    const deleteType = ref('');
    const userSearch = ref('');
    const photoSearch = ref('');
    const messageSearch = ref('');

    // Party date
    const partyDate = new Date('2025-04-26');
    const today = new Date();
    const daysUntilParty = Math.ceil((partyDate - today) / (1000 * 60 * 60 * 24));

    // Stats
    const stats = ref({
      totalUsers: 0,
      totalPhotos: 0,
      newMessages: 0
    });

    // Computed properties
    const filteredUsers = computed(() => {
      if (!userSearch.value) return users.value;
      const search = userSearch.value.toLowerCase();
      return users.value.filter(user => 
        user.name.toLowerCase().includes(search) || 
        user.email.toLowerCase().includes(search)
      );
    });

    const filteredPhotos = computed(() => {
      if (!photoSearch.value) return photos.value;
      const search = photoSearch.value.toLowerCase();
      return photos.value.filter(photo => 
        photo.sender.toLowerCase().includes(search)
      );
    });

    const filteredMessages = computed(() => {
      if (!messageSearch.value) return messages.value;
      const search = messageSearch.value.toLowerCase();
      return messages.value.filter(message => 
        message.message.toLowerCase().includes(search) ||
        message.sender.toLowerCase().includes(search)
      );
    });

    const modalTitle = computed(() => {
      if (modalType.value === 'user') return `User Details: ${selectedItem.value?.name}`;
      if (modalType.value === 'photo') return `Photo Details: ${selectedItem.value?.sender}`;
      return '';
    });

    const confirmMessage = computed(() => {
      switch (deleteType.value) {
        case 'user':
          return `Are you sure you want to delete the user ${itemToDelete.value?.name || 'Unknown'}? This will also delete all of their uploaded photos and messages.`;
        case 'photo':
          return `Are you sure you want to delete this photo from ${itemToDelete.value?.sender || 'Unknown'}?`;
        case 'message':
          return `Are you sure you want to delete this message from ${itemToDelete.value?.sender || 'Unknown'}?`;
        default:
          return 'Are you sure you want to delete this item?';
      }
    });

    // Methods
    const fetchData = async () => {
      loading.value = true;
      try {
        await Promise.all([
          fetchUsers(),
          fetchPhotos()
        ]);
        
        // Extract messages from photos
        messages.value = photos.value
          .filter(photo => photo.message && photo.message.trim() !== '')
          .map(photo => ({
            id: photo.id,
            sender: photo.sender,
            message: photo.message,
            timestamp: photo.timestamp,
            userId: photo.userId
          }));
        
        // Update stats
        stats.value = {
          totalUsers: users.value.length,
          totalPhotos: photos.value.length,
          newMessages: messages.value.length
        };
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        loading.value = false;
      }
    };

    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const userData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          photoCount: 0 // Initialize photo count
        }));
        users.value = userData;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    const fetchPhotos = async () => {
      try {
        const q = query(collection(db, 'birthdayImages'), orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        const photoData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          // Format timestamp if needed
          timestamp: doc.data().timestamp?.toDate()
        }));
        photos.value = photoData;
        
        // Update user photo counts
        photos.value.forEach(photo => {
          const userIndex = users.value.findIndex(user => user.id === photo.userId);
          if (userIndex >= 0) {
            users.value[userIndex].photoCount = (users.value[userIndex].photoCount || 0) + 1;
          }
        });
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    const viewUserDetails = (user) => {
      selectedItem.value = user;
      modalType.value = 'user';
      showModal.value = true;
    };

    const viewPhotoDetails = (photo) => {
      selectedItem.value = photo;
      modalType.value = 'photo';
      showModal.value = true;
    };

    const closeModal = () => {
      showModal.value = false;
      selectedItem.value = null;
    };

    const deleteUser = (user) => {
      itemToDelete.value = user;
      deleteType.value = 'user';
      showConfirmModal.value = true;
    };

    const deletePhoto = (photo) => {
      itemToDelete.value = photo;
      deleteType.value = 'photo';
      showConfirmModal.value = true;
    };

    const deleteMessage = (message) => {
      itemToDelete.value = message;
      deleteType.value = 'message';
      showConfirmModal.value = true;
    };

    const cancelDelete = () => {
      showConfirmModal.value = false;
      itemToDelete.value = null;
      deleteType.value = '';
    };

    const confirmDelete = async () => {
      try {
        if (deleteType.value === 'user') {
          // Delete user's photos from storage and Firestore
          const userPhotos = photos.value.filter(photo => photo.userId === itemToDelete.value.id);
          for (const photo of userPhotos) {
            try {
              // Delete from storage if fileName exists
              if (photo.fileName) {
                const imageRef = storageRef(storage, `birthday-images/${photo.fileName}`);
                await deleteObject(imageRef);
              }
              // Delete from Firestore
              await deleteDoc(doc(db, 'birthdayImages', photo.id));
            } catch (photoError) {
              console.error(`Error deleting photo ${photo.id}:`, photoError);
            }
          }
          
          // Delete user from Firestore
          await deleteDoc(doc(db, 'users', itemToDelete.value.id));
          
          // Also try to delete the authentication account
          // Note: This requires special Firebase authentication privileges
          try {
            // This requires admin SDK or custom claims to work properly
            // In a production app, this would typically be handled by a backend function
            console.warn('User auth deletion would require admin SDK or custom backend function');
            // await firebaseDeleteUser(itemToDelete.value.id);
          } catch (authError) {
            console.error('Error deleting auth user:', authError);
          }
          
          // Update local state
          users.value = users.value.filter(user => user.id !== itemToDelete.value.id);
          photos.value = photos.value.filter(photo => photo.userId !== itemToDelete.value.id);
          messages.value = messages.value.filter(message => message.userId !== itemToDelete.value.id);
        } 
        else if (deleteType.value === 'photo') {
          // Delete photo from storage if fileName exists
          if (itemToDelete.value.fileName) {
            const imageRef = storageRef(storage, `birthday-images/${itemToDelete.value.fileName}`);
            await deleteObject(imageRef);
          }
          
          // Delete from Firestore
          await deleteDoc(doc(db, 'birthdayImages', itemToDelete.value.id));
          
          // Update local state
          photos.value = photos.value.filter(photo => photo.id !== itemToDelete.value.id);
          
          // Update photo counts
          const userIndex = users.value.findIndex(user => user.id === itemToDelete.value.userId);
          if (userIndex >= 0 && users.value[userIndex].photoCount > 0) {
            users.value[userIndex].photoCount--;
          }
        } 
        else if (deleteType.value === 'message') {
          // For messages, we need to find the associated photo and update it
          const photoIndex = photos.value.findIndex(photo => photo.id === itemToDelete.value.id);
          
          if (photoIndex >= 0) {
            // Update the message field in Firestore
            await deleteDoc(doc(db, 'birthdayImages', itemToDelete.value.id));
            
            // Update local state
            messages.value = messages.value.filter(message => message.id !== itemToDelete.value.id);
          }
        }
        
        // Update stats
        stats.value = {
          totalUsers: users.value.length,
          totalPhotos: photos.value.length,
          newMessages: messages.value.length
        };
        
        // Close the confirmation modal
        showConfirmModal.value = false;
        itemToDelete.value = null;
      } catch (error) {
        console.error('Error during delete operation:', error);
        alert('An error occurred during the delete operation. Please try again.');
      }
    };

    const formatDate = (timestamp) => {
      if (!timestamp) return 'N/A';
      
      const date = timestamp instanceof Date ? timestamp : timestamp.toDate();
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(date);
    };

    // Lifecycle hooks
    onMounted(() => {
      fetchData();
    });

    return {
      loading,
      activeTab,
      users,
      photos,
      messages,
      stats,
      daysUntilParty,
      showModal,
      modalType,
      selectedItem,
      modalTitle,
      showConfirmModal,
      confirmMessage,
      userSearch,
      photoSearch,
      messageSearch,
      filteredUsers,
      filteredPhotos,
      filteredMessages,
      viewUserDetails,
      viewPhotoDetails,
      closeModal,
      deleteUser,
      deletePhoto,
      deleteMessage,
      cancelDelete,
      confirmDelete,
      formatDate
    };
  }
};
</script>
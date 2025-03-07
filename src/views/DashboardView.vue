<template>
  <div class="min-h-screen p-4 bg-mcm-bg">
    <!-- Welcome Onboarding Modal -->
    <WelcomeOnboarding 
      :show="showWelcome" 
      @close="showWelcome = false"
    />
    
    <div class="max-w-7xl mx-auto py-10">
      <!-- Header -->
      <div class="mb-10 text-center">
        <h1 class="m-0 mb-4 text-4xl font-bold bg-gradient-to-r from-mcm-orange-500 via-mcm-peach-500 to-mcm-butter-500 text-transparent bg-clip-text">
          Birthday Celebration Dashboard
        </h1>
        <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Welcome to the birthday celebration dashboard! Here you can see event details, manage your photos, and keep track of your RSVPs.
        </p>
      </div>
      
      <!-- Main content grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left column -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Stats Component - Only shown for logged in users -->
          <DashboardStats 
            v-if="isLoggedIn" 
            :daysUntilParty="daysUntilParty" 
          />
        
          <!-- Event countdown -->
          <div class="bg-white dark:bg-mcm-gray-800 rounded-lg shadow-md p-6">
            <div class="flex justify-between items-start mb-4">
              <h2 class="text-xl font-medium">Event Countdown</h2>
              <div class="bg-mcm-amber-100 dark:bg-mcm-amber-900 px-3 py-1 rounded-full text-sm font-medium text-mcm-amber-700 dark:text-mcm-amber-200">
                {{ daysUntilParty }} days to go!
              </div>
            </div>
            
            <div class="grid grid-cols-4 gap-4 mb-4">
              <div class="text-center">
                <div class="text-3xl font-bold text-mcm-orange-500">{{ countdown.days }}</div>
                <div class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Days</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-mcm-teal-500">{{ countdown.hours }}</div>
                <div class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Hours</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-mcm-mint-500">{{ countdown.minutes }}</div>
                <div class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Minutes</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-mcm-mustard-500">{{ countdown.seconds }}</div>
                <div class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Seconds</div>
              </div>
            </div>
            
            <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
              <div class="flex justify-between items-center">
                <div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Event Date</div>
                  <div class="font-medium">April 26th, 2025 - 8:00 PM</div>
                </div>
                <router-link to="/party-invitation">
                  <button class="py-2 px-4 bg-mcm-amber-500 text-white rounded hover:bg-mcm-amber-600 transition-colors">
                    View Invitation
                  </button>
                </router-link>
              </div>
            </div>
          </div>
          
          <!-- Recent photos grid -->
          <div class="bg-white dark:bg-mcm-gray-800 rounded-lg shadow-md p-6">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-xl font-medium">Recent Photos</h2>
              <router-link to="/gallery" class="text-mcm-amber-600 hover:text-mcm-amber-700 text-sm font-medium">
                View All →
              </router-link>
            </div>
            
            <div v-if="loading" class="p-10 flex justify-center">
              <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-mcm-amber-500"></div>
            </div>
            
            <div v-else-if="recentPhotos.length > 0" class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div v-for="(photo, index) in recentPhotos" :key="index" class="aspect-square overflow-hidden rounded-md">
                <img
                  :src="photo.url"
                  :alt="`Photo by ${photo.sender}`"
                  class="w-full h-full object-cover transition-transform hover:scale-105 cursor-pointer"
                  @click="viewPhotoDetails(photo)"
                />
              </div>
            </div>
            
            <div v-else class="text-center py-10 text-gray-500 dark:text-gray-400">
              <p class="mb-4">No photos have been uploaded yet.</p>
              <router-link to="/upload">
                <button class="py-2 px-4 bg-mcm-amber-500 text-white rounded hover:bg-mcm-amber-600 transition-colors">
                  Upload First Photo
                </button>
              </router-link>
            </div>
          </div>
        </div>
        
        <!-- Right column - Sidebar -->
        <div class="space-y-8">
          <!-- Your status card -->
          <div class="bg-white dark:bg-mcm-gray-800 rounded-lg shadow-md overflow-hidden">
            <div class="bg-gradient-to-r from-mcm-orange-500 to-mcm-peach-500 px-6 py-4">
              <h2 class="text-white font-medium">Welcome, {{ userName }}</h2>
            </div>
            <div class="p-6">
              <div class="mb-4 flex items-center">
                <div class="h-10 w-10 rounded-full bg-mcm-amber-100 dark:bg-mcm-amber-900 flex items-center justify-center text-mcm-amber-600 dark:text-mcm-amber-300 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <div class="text-sm text-gray-500 dark:text-gray-400">Account Status</div>
                  <div class="font-medium">{{ isLoggedIn ? 'Logged In' : 'Guest' }}</div>
                </div>
              </div>
              
              <div class="mb-4 flex items-center">
                <div class="h-10 w-10 rounded-full bg-mcm-amber-100 dark:bg-mcm-amber-900 flex items-center justify-center text-mcm-amber-600 dark:text-mcm-amber-300 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <div class="text-sm text-gray-500 dark:text-gray-400">Your Photos</div>
                  <div class="font-medium">{{ userPhotoCount }} uploaded</div>
                </div>
              </div>
              
              <div v-if="isLoggedIn" class="flex mt-6">
                <router-link to="/profile" class="flex-1 mr-2">
                  <button class="w-full py-2 px-4 border border-mcm-amber-500 text-mcm-amber-600 rounded hover:bg-mcm-amber-50 dark:hover:bg-mcm-amber-900 transition-colors">
                    Profile
                  </button>
                </router-link>
                <router-link to="/upload" class="flex-1">
                  <button class="w-full py-2 px-4 bg-mcm-amber-500 text-white rounded hover:bg-mcm-amber-600 transition-colors">
                    Upload
                  </button>
                </router-link>
              </div>
              
              <div v-else class="mt-6">
                <router-link to="/login">
                  <button class="w-full py-2 px-4 bg-mcm-amber-500 text-white rounded hover:bg-mcm-amber-600 transition-colors mb-2">
                    Log In
                  </button>
                </router-link>
                <router-link to="/signup">
                  <button class="w-full py-2 px-4 border border-mcm-amber-500 text-mcm-amber-600 rounded hover:bg-mcm-amber-50 dark:hover:bg-mcm-amber-900 transition-colors">
                    Sign Up
                  </button>
                </router-link>
              </div>
            </div>
          </div>
          
          <!-- Party Details card -->
          <div class="bg-white dark:bg-mcm-gray-800 rounded-lg shadow-md p-6">
            <h2 class="text-xl font-medium mb-4">Party Details</h2>
            
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="h-10 w-10 rounded-full bg-mcm-amber-100 dark:bg-mcm-amber-900 flex items-center justify-center text-mcm-amber-600 dark:text-mcm-amber-300 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Location</div>
                  <div class="font-medium">15767 Castlewoods Drive, Los Angeles, CA</div>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="h-10 w-10 rounded-full bg-mcm-amber-100 dark:bg-mcm-amber-900 flex items-center justify-center text-mcm-amber-600 dark:text-mcm-amber-300 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Time</div>
                  <div class="font-medium">April 26th, 2025 - 8:00 PM - LATE</div>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="h-10 w-10 rounded-full bg-mcm-amber-100 dark:bg-mcm-amber-900 flex items-center justify-center text-mcm-amber-600 dark:text-mcm-amber-300 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Attire</div>
                  <div class="font-medium">Cocktail Attire</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- RSVP card -->
          <div class="bg-white dark:bg-mcm-gray-800 rounded-lg shadow-md p-6">
            <h2 class="text-xl font-medium mb-4">Your RSVP</h2>
            
            <div v-if="rsvpStatus === 'yes'" class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-md p-4 mb-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-green-800 dark:text-green-200">
                    You've confirmed you'll be attending!
                  </p>
                </div>
              </div>
            </div>
            
            <div v-else-if="rsvpStatus === 'no'" class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 rounded-md p-4 mb-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-red-800 dark:text-red-200">
                    You've declined the invitation.
                  </p>
                </div>
              </div>
            </div>
            
            <div v-else class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-900 rounded-md p-4 mb-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                    You haven't RSVP'd yet.
                  </p>
                </div>
              </div>
            </div>
            
            <div class="space-y-2">
              <button 
                @click="updateRSVP('yes')" 
                class="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition-colors mb-2"
              >
                I'll be there!
              </button>
              <button 
                @click="updateRSVP('no')" 
                class="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Can't make it
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Photo Detail Modal -->
    <div v-if="selectedPhoto" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div class="bg-white dark:bg-mcm-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <!-- Header -->
        <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h3 class="text-lg font-medium">Photo by {{ selectedPhoto.sender }}</h3>
          <button @click="selectedPhoto = null" class="text-gray-400 hover:text-gray-500">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Content -->
        <div class="flex-grow overflow-auto">
          <div class="p-4 flex flex-col md:flex-row">
            <!-- Image -->
            <div class="md:w-2/3 mb-4 md:mb-0 md:pr-4">
              <div class="bg-gray-100 dark:bg-mcm-gray-900 rounded-lg overflow-hidden">
                <img 
                  :src="selectedPhoto.url" 
                  :alt="`Photo by ${selectedPhoto.sender}`" 
                  class="w-full h-auto object-contain max-h-[60vh]"
                />
              </div>
            </div>
            
            <!-- Details -->
            <div class="md:w-1/3">
              <div class="space-y-4">
                <div>
                  <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">From</h4>
                  <p class="text-gray-900 dark:text-white font-medium">{{ selectedPhoto.sender }}</p>
                </div>
                
                <div>
                  <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">Uploaded</h4>
                  <p class="text-gray-900 dark:text-white">{{ formatDate(selectedPhoto.timestamp) }}</p>
                </div>
                
                <div v-if="selectedPhoto.message">
                  <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">Message</h4>
                  <p class="text-gray-900 dark:text-white">{{ selectedPhoto.message }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { collection, query, orderBy, getDocs, doc, getDoc, updateDoc, where, limit } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../firebase/config';
import WelcomeOnboarding from '../components/WelcomeOnboarding.vue';
import DashboardStats from '../components/DashboardStats.vue';

export default {
  name: 'DashboardView',
  components: {
    WelcomeOnboarding,
    DashboardStats
  },
  setup() {
    // State
    const loading = ref(true);
    const user = ref(null);
    const userProfile = ref(null);
    const recentPhotos = ref([]);
    const userPhotos = ref([]);
    const selectedPhoto = ref(null);
    const rsvpStatus = ref('pending');
    const showWelcome = ref(false);
    
    // Party date and countdown
    const partyDate = new Date('2025-04-26T20:00:00');
    const countdown = ref({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });
    
    // Computed properties
    const isLoggedIn = computed(() => !!user.value);
    
    const userName = computed(() => {
      if (userProfile.value?.name) return userProfile.value.name;
      if (user.value?.displayName) return user.value.displayName;
      if (user.value?.email) return user.value.email.split('@')[0];
      return 'Guest';
    });
    
    const userPhotoCount = computed(() => {
      return userPhotos.value.length;
    });
    
    const daysUntilParty = computed(() => {
      const now = new Date();
      return Math.ceil((partyDate - now) / (1000 * 60 * 60 * 24));
    });
    
    // Check if the welcome screen should be shown
    const checkWelcomeStatus = async (userId) => {
      try {
        // For logged in users, check Firestore
        if (userId) {
          const userDoc = await getDoc(doc(db, 'users', userId));
          
          if (userDoc.exists()) {
            // If user has skipWelcome preference set, don't show welcome
            if (userDoc.data().skipWelcome) {
              showWelcome.value = false;
              return;
            }
            
            // If user has visited count, increase it
            const visitCount = userDoc.data().visitCount || 0;
            
            // If first or second visit, show welcome
            if (visitCount < 2) {
              showWelcome.value = true;
              
              // Update visit count
              await updateDoc(doc(db, 'users', userId), {
                visitCount: visitCount + 1
              });
            } else {
              showWelcome.value = false;
            }
          } else {
            // New user, show welcome
            showWelcome.value = true;
          }
        } else {
          // For non-logged in users, check localStorage
          const skipWelcome = localStorage.getItem('skipWelcome');
          
          if (skipWelcome === 'true') {
            showWelcome.value = false;
          } else {
            const visitCount = parseInt(localStorage.getItem('visitCount') || '0');
            
            if (visitCount < 2) {
              showWelcome.value = true;
              localStorage.setItem('visitCount', (visitCount + 1).toString());
            } else {
              showWelcome.value = false;
            }
          }
        }
      } catch (error) {
        console.error('Error checking welcome status:', error);
        showWelcome.value = false;
      }
    };
    
    // Methods
    const fetchData = async () => {
      loading.value = true;
      try {
        // Fetch recent photos
        const q = query(
          collection(db, 'birthdayImages'),
          orderBy('timestamp', 'desc'),
          limit(6)
        );
        
        const querySnapshot = await getDocs(q);
        recentPhotos.value = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          timestamp: doc.data().timestamp?.toDate()
        }));
        
        // If user is logged in, fetch their profile and photos
        if (user.value) {
          await fetchUserProfile();
          await fetchUserPhotos();
          await fetchUserRSVP();
          checkWelcomeStatus(user.value.uid);
        } else {
          checkWelcomeStatus();
        }
        
        loading.value = false;
      } catch (error) {
        console.error('Error fetching data:', error);
        loading.value = false;
      }
    };
    
    const fetchUserProfile = async () => {
      try {
        const userDoc = await getDoc(doc(db, 'users', user.value.uid));
        
        if (userDoc.exists()) {
          userProfile.value = {
            id: userDoc.id,
            ...userDoc.data()
          };
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };
    
    const fetchUserPhotos = async () => {
      try {
        const q = query(
          collection(db, 'birthdayImages'),
          where('userId', '==', user.value.uid),
          orderBy('timestamp', 'desc')
        );
        
        const querySnapshot = await getDocs(q);
        userPhotos.value = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          timestamp: doc.data().timestamp?.toDate()
        }));
      } catch (error) {
        console.error('Error fetching user photos:', error);
      }
    };
    
    const fetchUserRSVP = async () => {
      try {
        const userDoc = await getDoc(doc(db, 'users', user.value.uid));
        
        if (userDoc.exists() && userDoc.data().rsvp) {
          rsvpStatus.value = userDoc.data().rsvp;
        }
      } catch (error) {
        console.error('Error fetching user RSVP:', error);
      }
    };
    
    const updateRSVP = async (status) => {
      if (!user.value) {
        alert('Please log in to RSVP');
        return;
      }
      
      try {
        await updateDoc(doc(db, 'users', user.value.uid), {
          rsvp: status
        });
        
        rsvpStatus.value = status;
        
        if (status === 'yes') {
          alert('Great! We look forward to seeing you at the party!');
        } else {
          alert('We\'re sorry you can\'t make it. We\'ll miss you!');
        }
      } catch (error) {
        console.error('Error updating RSVP:', error);
        alert('There was an error updating your RSVP. Please try again.');
      }
    };
    
    const viewPhotoDetails = (photo) => {
      selectedPhoto.value = photo;
    };
    
    const updateCountdown = () => {
      const now = new Date();
      const diff = partyDate - now;
      
      if (diff <= 0) {
        // Party has already happened
        countdown.value = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
        return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      countdown.value = {
        days,
        hours,
        minutes,
        seconds
      };
    };
    
    const formatDate = (timestamp) => {
      if (!timestamp) return 'N/A';
      
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(timestamp);
    };
    
    // Lifecycle hooks
    let countdownInterval;
    let authUnsubscribe;
    
    onMounted(() => {
      // Set up auth state change listener
      authUnsubscribe = onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser;
        fetchData();
      });
      
      // Set up countdown interval
      updateCountdown();
      countdownInterval = setInterval(updateCountdown, 1000);
    });
    
    onUnmounted(() => {
      if (authUnsubscribe) authUnsubscribe();
      if (countdownInterval) clearInterval(countdownInterval);
    });
    
    return {
      loading,
      user,
      recentPhotos,
      selectedPhoto,
      rsvpStatus,
      countdown,
      daysUntilParty,
      isLoggedIn,
      userName,
      userPhotoCount,
      viewPhotoDetails,
      updateRSVP,
      formatDate,
      showWelcome
    };
  }
};
</script>
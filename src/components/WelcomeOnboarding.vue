<template>
  <div class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center" v-if="show">
    <div class="bg-white dark:bg-mcm-gray-800 rounded-lg shadow-xl max-w-2xl w-full m-4 transition-all transform" :class="{ 'scale-100 opacity-100': animateIn, 'scale-90 opacity-0': !animateIn }">
      <!-- Header with decorative elements -->
      <div class="relative overflow-hidden rounded-t-lg">
        <div class="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-mcm-orange-500 via-mcm-teal-500 to-mcm-mint-500"></div>
        <div class="px-6 py-4 flex justify-between items-center relative z-10">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Welcome to the Birthday Celebration!</h2>
          <button 
            @click="closeWelcome" 
            class="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Decorative MCM pattern -->
        <div class="absolute -top-16 -right-16 transform rotate-12 opacity-10">
          <svg viewBox="0 0 100 100" class="w-48 h-48 text-mcm-orange-500">
            <path d="M50 0 L55 40 L95 45 L55 50 L50 90 L45 50 L5 45 L45 40 Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
      
      <!-- Content -->
      <div class="px-6 py-4">
        <div class="flex flex-col md:flex-row gap-6">
          <!-- Left side: steps -->
          <div class="md:w-1/2">
            <p class="text-gray-700 dark:text-gray-300 mb-6">
              Thanks for joining our birthday celebration website! Here's how you can participate:
            </p>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="h-10 w-10 rounded-full bg-mcm-amber-100 dark:bg-mcm-amber-900 flex items-center justify-center text-mcm-amber-600 dark:text-mcm-amber-300 mr-3 flex-shrink-0">
                  <span class="font-bold">1</span>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white">Complete Your Profile</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Add your name and personal details so we know who's who!</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="h-10 w-10 rounded-full bg-mcm-amber-100 dark:bg-mcm-amber-900 flex items-center justify-center text-mcm-amber-600 dark:text-mcm-amber-300 mr-3 flex-shrink-0">
                  <span class="font-bold">2</span>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white">RSVP to the Party</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Let us know if you'll be attending so we can plan accordingly.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="h-10 w-10 rounded-full bg-mcm-amber-100 dark:bg-mcm-amber-900 flex items-center justify-center text-mcm-amber-600 dark:text-mcm-amber-300 mr-3 flex-shrink-0">
                  <span class="font-bold">3</span>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white">Share Photos & Memories</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Upload photos and share memories for the celebration gallery.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="h-10 w-10 rounded-full bg-mcm-amber-100 dark:bg-mcm-amber-900 flex items-center justify-center text-mcm-amber-600 dark:text-mcm-amber-300 mr-3 flex-shrink-0">
                  <span class="font-bold">4</span>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white">Check Party Details</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">View important information about the event including location and time.</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Right side: quick actions -->
          <div class="md:w-1/2 mt-6 md:mt-0">
            <div class="bg-gray-50 dark:bg-mcm-gray-900 rounded-lg p-4 mb-6">
              <h3 class="font-medium text-gray-900 dark:text-white mb-3">What would you like to do first?</h3>
              
              <div class="space-y-3">
                <router-link to="/profile">
                  <button class="w-full text-left py-3 px-4 flex items-center bg-white dark:bg-mcm-gray-800 rounded-md shadow-sm border border-gray-200 dark:border-mcm-gray-700 hover:bg-gray-50 dark:hover:bg-mcm-gray-700 transition-colors">
                    <div class="h-8 w-8 rounded-full bg-mcm-teal-100 dark:bg-mcm-teal-900 flex items-center justify-center text-mcm-teal-600 dark:text-mcm-teal-300 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <span class="font-medium text-gray-900 dark:text-white">Complete Your Profile</span>
                      <p class="text-xs text-gray-500 dark:text-gray-400">Add your name and details</p>
                    </div>
                  </button>
                </router-link>
                
                <router-link to="/dashboard">
                  <button class="w-full text-left py-3 px-4 flex items-center bg-white dark:bg-mcm-gray-800 rounded-md shadow-sm border border-gray-200 dark:border-mcm-gray-700 hover:bg-gray-50 dark:hover:bg-mcm-gray-700 transition-colors">
                    <div class="h-8 w-8 rounded-full bg-mcm-orange-100 dark:bg-mcm-orange-900 flex items-center justify-center text-mcm-orange-600 dark:text-mcm-orange-300 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span class="font-medium text-gray-900 dark:text-white">RSVP to the Party</span>
                      <p class="text-xs text-gray-500 dark:text-gray-400">Let us know you're coming</p>
                    </div>
                  </button>
                </router-link>
                
                <router-link to="/upload">
                  <button class="w-full text-left py-3 px-4 flex items-center bg-white dark:bg-mcm-gray-800 rounded-md shadow-sm border border-gray-200 dark:border-mcm-gray-700 hover:bg-gray-50 dark:hover:bg-mcm-gray-700 transition-colors">
                    <div class="h-8 w-8 rounded-full bg-mcm-mint-100 dark:bg-mcm-mint-900 flex items-center justify-center text-mcm-mint-600 dark:text-mcm-mint-300 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span class="font-medium text-gray-900 dark:text-white">Upload Photos</span>
                      <p class="text-xs text-gray-500 dark:text-gray-400">Share your memories</p>
                    </div>
                  </button>
                </router-link>
                
                <router-link to="/party-invitation">
                  <button class="w-full text-left py-3 px-4 flex items-center bg-white dark:bg-mcm-gray-800 rounded-md shadow-sm border border-gray-200 dark:border-mcm-gray-700 hover:bg-gray-50 dark:hover:bg-mcm-gray-700 transition-colors">
                    <div class="h-8 w-8 rounded-full bg-mcm-mustard-100 dark:bg-mcm-mustard-900 flex items-center justify-center text-mcm-mustard-600 dark:text-mcm-mustard-300 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <span class="font-medium text-gray-900 dark:text-white">Party Details</span>
                      <p class="text-xs text-gray-500 dark:text-gray-400">View event information</p>
                    </div>
                  </button>
                </router-link>
              </div>
            </div>
            
            <div class="bg-mcm-amber-50 dark:bg-mcm-amber-900/20 border border-mcm-amber-200 dark:border-mcm-amber-900 rounded-lg p-4">
              <h3 class="font-medium text-mcm-amber-800 dark:text-mcm-amber-200 mb-2">Don't want to see this again?</h3>
              <p class="text-sm text-mcm-amber-700 dark:text-mcm-amber-300 mb-3">You can skip this welcome screen in the future.</p>
              <button 
                @click="skipWelcomeForever" 
                class="text-sm text-mcm-amber-600 dark:text-mcm-amber-400 hover:text-mcm-amber-700 dark:hover:text-mcm-amber-300 transition-colors"
              >
                Skip this welcome screen
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Footer with action buttons -->
      <div class="px-6 py-4 bg-gray-50 dark:bg-mcm-gray-900 rounded-b-lg border-t border-gray-200 dark:border-mcm-gray-700 flex justify-end">
        <button 
          @click="closeWelcome" 
          class="py-2 px-4 bg-mcm-amber-500 text-white rounded hover:bg-mcm-amber-600 transition-colors"
        >
          Start Exploring
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { doc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../firebase/config';

export default {
  name: 'WelcomeOnboarding',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close'],
  setup(props, { emit }) {
    const animateIn = ref(false);
    
    // Animate in when shown
    onMounted(() => {
      if (props.show) {
        setTimeout(() => {
          animateIn.value = true;
        }, 10);
      }
    });
    
    // Handle animation and close
    const closeWelcome = () => {
      animateIn.value = false;
      
      // Wait for animation to complete before emitting close event
      setTimeout(() => {
        emit('close');
      }, 300);
    };
    
    // Skip welcome screen forever
    const skipWelcomeForever = async () => {
      try {
        const currentUser = auth.currentUser;
        
        if (currentUser) {
          // Update user preferences in Firestore
          await updateDoc(doc(db, 'users', currentUser.uid), {
            skipWelcome: true
          });
        } else {
          // For non-logged-in users, store in localStorage
          localStorage.setItem('skipWelcome', 'true');
        }
        
        closeWelcome();
      } catch (error) {
        console.error('Error updating preferences:', error);
        closeWelcome();
      }
    };
    
    return {
      animateIn,
      closeWelcome,
      skipWelcomeForever
    };
  }
};
</script>

<style scoped>
.scale-100 {
  transform: scale(1);
}

.scale-90 {
  transform: scale(0.9);
}

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
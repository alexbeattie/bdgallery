<template>
  <div class="bg-white dark:bg-mcm-gray-800 rounded-lg shadow-md overflow-hidden">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
        Event Statistics
      </h3>

      <div class="grid grid-cols-2 gap-4">
        <div class="bg-mcm-amber-50 dark:bg-mcm-amber-900/20 rounded-lg p-4">
          <div class="flex items-center">
            <div
              class="h-10 w-10 rounded-full bg-mcm-amber-100 dark:bg-mcm-amber-900 flex items-center justify-center text-mcm-amber-600 dark:text-mcm-amber-300 mr-3 flex-shrink-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div>
              <div
                class="text-xs text-mcm-amber-600 dark:text-mcm-amber-300 uppercase font-medium tracking-wide"
              >
                Total RSVPs
              </div>
              <div class="text-2xl font-bold text-mcm-amber-700 dark:text-mcm-amber-200">
                {{ stats.totalRsvps }}
              </div>
            </div>
          </div>
          <div
            class="mt-2 flex justify-between items-center text-xs text-mcm-amber-600 dark:text-mcm-amber-300"
          >
            <div>
              <span class="font-medium">{{ stats.confirmedAttending }}</span> Confirmed
            </div>
            <div>
              <span class="font-medium">{{ stats.declined }}</span> Declined
            </div>
          </div>
        </div>

        <div class="bg-mcm-teal-50 dark:bg-mcm-teal-900/20 rounded-lg p-4">
          <div class="flex items-center">
            <div
              class="h-10 w-10 rounded-full bg-mcm-teal-100 dark:bg-mcm-teal-900 flex items-center justify-center text-mcm-teal-600 dark:text-mcm-teal-300 mr-3 flex-shrink-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
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
            <div>
              <div
                class="text-xs text-mcm-teal-600 dark:text-mcm-teal-300 uppercase font-medium tracking-wide"
              >
                Photos Shared
              </div>
              <div class="text-2xl font-bold text-mcm-teal-700 dark:text-mcm-teal-200">
                {{ stats.totalPhotos }}
              </div>
            </div>
          </div>
          <div
            class="mt-2 flex justify-between items-center text-xs text-mcm-teal-600 dark:text-mcm-teal-300"
          >
            <div>
              <span class="font-medium">{{ stats.totalContributors }}</span> Contributors
            </div>
            <div>
              <span class="font-medium">{{ avg }}</span> Avg. per person
            </div>
          </div>
        </div>

        <div class="bg-mcm-mint-50 dark:bg-mcm-mint-900/20 rounded-lg p-4">
          <div class="flex items-center">
            <div
              class="h-10 w-10 rounded-full bg-mcm-mint-100 dark:bg-mcm-mint-900 flex items-center justify-center text-mcm-mint-600 dark:text-mcm-mint-300 mr-3 flex-shrink-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <div
                class="text-xs text-mcm-mint-600 dark:text-mcm-mint-300 uppercase font-medium tracking-wide"
              >
                Days Until Party
              </div>
              <div class="text-2xl font-bold text-mcm-mint-700 dark:text-mcm-mint-200">
                {{ stats.daysUntilParty }}
              </div>
            </div>
          </div>
          <div class="mt-2 text-xs text-mcm-mint-600 dark:text-mcm-mint-300">
            <div v-if="stats.daysUntilParty > 0">
              <span class="font-medium">{{ stats.partyDate }}</span>
            </div>
            <div v-else>
              <span class="font-medium">The party has already happened!</span>
            </div>
          </div>
        </div>

        <div class="bg-mcm-mustard-50 dark:bg-mcm-mustard-900/20 rounded-lg p-4">
          <div class="flex items-center">
            <div
              class="h-10 w-10 rounded-full bg-mcm-mustard-100 dark:bg-mcm-mustard-900 flex items-center justify-center text-mcm-mustard-600 dark:text-mcm-mustard-300 mr-3 flex-shrink-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <div>
              <div
                class="text-xs text-mcm-mustard-600 dark:text-mcm-mustard-300 uppercase font-medium tracking-wide"
              >
                New Messages
              </div>
              <div
                class="text-2xl font-bold text-mcm-mustard-700 dark:text-mcm-mustard-200"
              >
                {{ stats.totalMessages }}
              </div>
            </div>
          </div>
          <div class="mt-2 text-xs text-mcm-mustard-600 dark:text-mcm-mustard-300">
            <div>
              Last message from
              <span class="font-medium">{{ stats.lastMessageFrom }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Activity Timeline -->
      <div class="mt-6">
        <h4 class="text-sm font-medium text-gray-700 dark:text-gray-800 mb-3">
          Recent Activity
        </h4>

        <div class="space-y-4">
          <div v-for="(activity, index) in recentActivity" :key="index" class="flex">
            <div class="flex-shrink-0 mr-3">
              <div
                class="h-8 w-8 rounded-full bg-gray-100 dark:bg-mcm-gray-700 flex items-center justify-center"
              >
                <div v-if="activity.type === 'rsvp'" class="text-mcm-amber-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div v-else-if="activity.type === 'photo'" class="text-mcm-teal-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
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
                <div v-else-if="activity.type === 'register'" class="text-mcm-mint-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-sm text-gray-700 dark:text-gray-800">
                <span class="font-medium">{{ activity.name }}</span>
                {{ activity.action }}
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                {{ formatTimeAgo(activity.time) }}
              </p>
            </div>
          </div>

          <div
            v-if="recentActivity.length === 0"
            class="text-center text-sm text-gray-500 dark:text-gray-400 py-4"
          >
            No recent activity
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import {
  collection,
  query,
  orderBy,
  getDocs,
  where,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase/config";

export default {
  name: "DashboardStats",
  props: {
    daysUntilParty: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const stats = ref({
      totalRsvps: 0,
      confirmedAttending: 0,
      declined: 0,
      totalPhotos: 0,
      totalContributors: 0,
      daysUntilParty: props.daysUntilParty,
      partyDate: "April 26th, 2025",
      totalMessages: 0,
      lastMessageFrom: "N/A",
    });

    const recentActivity = ref([]);

    // Computed properties
    const avg = computed(() => {
      if (stats.value.totalContributors === 0) return "0";
      return (stats.value.totalPhotos / stats.value.totalContributors).toFixed(1);
    });

    // Methods
const fetchStats = () => {
  try {
    // Live listener for RSVP stats
    const usersQuery = query(collection(db, 'users'));
    onSnapshot(usersQuery, (snapshot) => {
      let totalUsers = 0;
      let confirmedAttending = 0;
      let declined = 0;

      snapshot.forEach((doc) => {
        totalUsers++;
        const userData = doc.data();
        if (userData.rsvp === 'yes') confirmedAttending++;
        else if (userData.rsvp === 'no') declined++;
      });

      stats.value.totalRsvps = confirmedAttending + declined;
      stats.value.confirmedAttending = confirmedAttending;
      stats.value.declined = declined;
    });

    // Live listener for photo stats
    const photosQuery = query(collection(db, 'birthdayImages'), orderBy('timestamp', 'desc'));
    onSnapshot(photosQuery, (snapshot) => {
      let totalPhotos = 0;
      let contributors = new Set();
      let photosWithMessages = 0;
      let lastMessageFrom = 'N/A';
      let lastMessageTime = null;

      snapshot.forEach((doc) => {
        totalPhotos++;
        const photoData = doc.data();
        if (photoData.userId) contributors.add(photoData.userId);
        if (photoData.message && photoData.message.trim() !== '') {
          photosWithMessages++;
          if (!lastMessageTime || photoData.timestamp?.toDate() > lastMessageTime) {
            lastMessageTime = photoData.timestamp?.toDate();
            lastMessageFrom = photoData.sender || 'Anonymous';
          }
        }
      });

      stats.value.totalPhotos = totalPhotos;
      stats.value.totalContributors = contributors.size;
      stats.value.totalMessages = photosWithMessages;
      stats.value.lastMessageFrom = lastMessageFrom;
    });

  } catch (error) {
    console.error('Error fetching stats:', error);
  }
};
const fetchRecentActivity = () => {
  try {
    // Live listener for recent photos
    const recentPhotosQuery = query(
      collection(db, 'birthdayImages'),
      orderBy('timestamp', 'desc'),
      limit(3)
    );

    onSnapshot(recentPhotosQuery, (snapshot) => {
      const photosActivity = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          type: 'photo',
          name: data.sender || 'Anonymous',
          action: 'uploaded a new photo',
          time: data.timestamp?.toDate() || new Date(),
        };
      });

      // Live listener for recent user registrations
      const recentUsersQuery = query(
        collection(db, 'users'),
        orderBy('createdAt', 'desc'),
        limit(2)
      );

      onSnapshot(recentUsersQuery, (userSnapshot) => {
        const usersActivity = userSnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            type: 'register',
            name: data.name || 'Anonymous',
            action: 'joined the celebration',
            time: data.createdAt?.toDate() || new Date(),
          };
        });

        // Combine and sort
        let combinedActivity = [...photosActivity, ...usersActivity];
        combinedActivity.sort((a, b) => b.time - a.time);

        recentActivity.value = combinedActivity.slice(0, 5);
      });
    });
  } catch (error) {
    console.error('Error fetching recent activity:', error);
  }
    };
    const formatTimeAgo = (date) => {
      const now = new Date();
      const diffInSeconds = Math.floor((now - date) / 1000);

      if (diffInSeconds < 60) {
        return "just now";
      } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
      } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600);
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
      } else {
        const days = Math.floor(diffInSeconds / 86400);
        return `${days} day${days > 1 ? "s" : ""} ago`;
      }
    };

    // Lifecycle hooks
    onMounted(() => {
      fetchStats();
    });

    return {
      stats,
      recentActivity,
      avg,
      formatTimeAgo,
    };
  },
};
</script>

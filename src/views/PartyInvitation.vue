<template>
  <div class="min-h-screen bg-gradient-to-b from-purple-100 to-amber-50">
    <!-- Hero Section -->
    <div class="relative">
      <div class="relative flex w-full justify-center items-center">
        <img
          src="/images/shafali-birthday-complete.jpg"
          alt="Shafali's 50th Birthday"
          class="object-contain"
        />
      </div>
    </div>

    <!-- Party Details Section -->
    <section id="party-details" class="section-wrapper section-bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title">Party Details</h2>
        <div class="relative bg-white sm:p-10">
          <!-- Decorative starburst -->
          <div class="absolute top-6 right-8 w-16 h-16"></div>

          <div
            class="relative bg-white border-2 p-8 sm:p-12 max-w-lg mx-auto rounded-lg"
          >
            <!-- Decorative Starburst -->
            <div class="absolute top-4 right-6 w-14 h-14">
              <svg viewBox="0 0 100 100" class="w-full h-full text-amber-500">
                <path
                  d="M50 0 L55 40 L95 45 L55 50 L50 90 L45 50 L5 45 L45 40 Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>

            <!-- Title -->
            <div class="text-center mb-8">
              <h2 class="text-lg font-light text-amber-500 tracking-widest uppercase">
                Join Us For
              </h2>
              <h1
                class="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mt-2"
              >
                A Birthday Celebration
              </h1>
              <div class="mt-4 flex items-center justify-center gap-4">
                <div class="h-px bg-amber-500 flex-grow"></div>
                <p class="text-2xl font-light text-amber-500 uppercase">You're Invited</p>
                <div class="h-px bg-amber-500 flex-grow"></div>
              </div>
            </div>

            <!-- Event Details -->
            <div class="space-y-4 text-center mb-8">
              <ul class="list-disc list-inside text-lg text-gray-900 font-medium">
                <li>April 26th, 2025</li>
                <li>7:00 PM - LATE</li>
                <li class="flex items-center">
                  <a
                    href="https://maps.app.goo.gl/XykuzbA41PiQquuu5"
                    class="flex items-center text-blue-600 hover:text-blue-800 hover:underline transition duration-150"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    15767 Castlewoods Drive, Los Angeles, CA
                  </a>
                </li>
              </ul>

              <p class="text-gray-700 px-4 leading-relaxed mt-6">
                We have <span class="font-bold">FIVE</span> decades worth of celebrating
                to do, so wear comfy shoes, take some Advil, and come ready to boogie!
              </p>
              <p class="text-gray-700 font-semibold mt-4">— Shafali and the boys</p>
            </div>

            <!-- Important Details Box -->
            <div class="bg-amber-50 p-6 rounded-lg mb-8">
              <h3 class="font-bold text-center text-gray-800 text-lg mb-4">
                Important Details
              </h3>
              <ul class="list-disc list-inside text-gray-700 text-base leading-relaxed">
                <li>
                  We will have valet parking, but ride-shares are highly recommended.
                </li>
                <li>There will be plenty of spirits (and food) to consume!</li>
                <li>
                  Please, no gifts. I only ask that you upload pictures of us on this
                  site, and then take one with me at the Photo Booth!
                </li>
              </ul>
            </div>

            <div class="photo-upload-callout my-10 max-w-lg mx-auto">
              <div
                class="bg-white border-2 border-shafali-purple p-6 rounded-lg relative overflow-hidden shadow-md"
              >
                <!-- Decorative camera icon -->
                <div class="absolute -right-4 -top-4 text-shafali-purple opacity-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-32 w-32"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                <h3 class="text-xl font-bold text-shafali-purple mb-2">
                  Share Your Photos!
                </h3>
                <p class="text-shafali-dark-blue mb-4">
                  Help make Shafali's birthday celebration even more special by sharing
                  your favorite photos of your memories together.
                </p>

                <div v-if="isLoggedIn">
                  <router-link to="/upload" class="inline-block">
                    <button
                      class="bg-white text-shafali-purple border-2 border-shafali-purple hover:bg-shafali-purple hover:text-white font-bold py-2 px-4 rounded-md transition-all transform hover:scale-105 flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Upload Your Photos
                    </button>
                  </router-link>
                </div>
                <div v-else>
                  <router-link to="/login?redirect=/upload" class="inline-block">
                    <button
                      class="bg-white text-shafali-purple border-2 border-shafali-purple hover:bg-shafali-purple hover:text-white font-bold py-2 px-4 rounded-md transition-all transform hover:scale-105 flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v-1l1-1 1-1-.257-.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Login to Upload Photos
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div
      class="browse-photos-banner py-12 bg-white text-[#6c2c9b] text-center border-y-2 border-[#6c2c9b]"
    >
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-bold mb-4 text-[#6c2c9b]">
          See All Birthday Photos
        </h2>
        <p class="mb-6 text-[#171927]">
          Browse the gallery to see photos shared by Shafali's friends and family!
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <router-link to="/gallery" class="inline-block">
            <button
              class="bg-white text-shafali-purple hover:bg-shafali-very-light-purple border-2 border-shafali-purple font-bold py-3 px-6 rounded-md transition-all transform hover:scale-105 shadow-md"
            >
              Browse Photo Gallery
            </button>
          </router-link>

          <router-link to="/upload" class="inline-block">
            <button
              class="bg-white text-[#6c2c9b] hover:bg-[#f5f0fa] border-2 border-[#6c2c9b] font-bold py-3 px-6 rounded-md transition-all transform hover:scale-105 flex items-center justify-center shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              Upload Your Photos
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <!-- Hotel Section -->
    <section id="hotel-section" class="section-wrapper section-bg-light">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title">Hotel Options & Venue Location</h2>

        <!-- Mobile Toggle Buttons with Maximum Contrast -->
        <div class="lg:hidden flex justify-center mb-4 gap-2">
          <button
            @click="activeTab = 'map'"
            class="tab-button map-tab"
            :class="activeTab === 'map' ? 'active-tab' : 'inactive-tab'"
          >
            <span class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              Map View
            </span>
          </button>
          <button
            @click="activeTab = 'hotels'"
            class="tab-button hotel-tab"
            :class="activeTab === 'hotels' ? 'active-tab' : 'inactive-tab'"
          >
            <span class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              Hotel List
            </span>
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left: Hotel Options -->
          <div
            class="lg:col-span-1 space-y-6 max-h-[450px] overflow-y-auto pr-2 sidebar-list"
            :class="{ hidden: activeTab === 'map', 'lg:block': true }"
          >
            <!-- Event Venue Card -->
            <div
              class="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-color"
            >
              <h3 class="font-semibold text-lg mb-2 text-primary-color">Event Venue</h3>
              <p class="text-gray-700 prose font-medium leading-relaxed">
                <a
                  href="https://maps.app.goo.gl/XykuzbA41PiQquuu5"
                  class="text-primary-color hover:text-primary-light"
                >
                  15767 Castlewoods Drive, Los Angeles
                </a>
              </p>
              <button
                @click="showVenueOnMap"
                class="text-primary-color hover:text-primary-light inline-block mt-3 font-medium"
              >
                Center on Map →
              </button>
            </div>

            <!-- Hotel Cards -->
            <div
              v-for="(hotel, index) in hotels"
              :key="index"
              class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h3 class="font-semibold text-lg mb-2 text-gray-900">{{ hotel.name }}</h3>
              <p class="text-gray-700 leading-relaxed">{{ hotel.address }}</p>
              <p class="text-gray-600 text-sm mt-1">Tel: {{ hotel.phone }}</p>
              <button
                @click="showDirections(index)"
                class="text-primary-color hover:text-primary-light inline-block mt-3 font-medium"
              >
                Show on Map →
              </button>
            </div>
          </div>
          <!-- Right: Map Area -->
          <div
            class="lg:col-span-2 bg-white p-4 rounded-lg shadow-md"
            :class="{ hidden: activeTab === 'hotels', 'lg:block': true }"
          >
            <div id="map" class="w-full h-[450px] rounded-lg"></div>
            <div
              class="address-form mt-4 flex flex-col sm:flex-row items-center justify-center"
            >
              <input
                type="text"
                id="customAddress"
                placeholder="Enter your address"
                class="w-full sm:w-auto flex-grow p-3 border border-gray-300 rounded-md text-base"
              />
              <button
                @click="submitAddress"
                class="mt-2 sm:mt-0 sm:ml-2 bg-primary-color text-white py-3 px-4 rounded-md hover:bg-primary-light transition-colors"
              >
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <!-- Logo and tagline -->
          <div class="flex flex-col items-center md:items-start">
            <div class="flex items-center mb-4">
              <span class="w-8 h-8 mr-2">
                <svg viewBox="0 0 100 100" class="w-full h-full text-amber-500">
                  <path
                    d="M50 0 L55 40 L95 45 L55 50 L50 90 L45 50 L5 45 L45 40 Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span class="text-xl font-medium">Shafali's 50th</span>
            </div>
            <p class="text-gray-400 mb-4">
              Join us for an unforgettable celebration of five amazing decades!
            </p>
          </div>

          <!-- Quick links -->
          <div class="text-center md:text-left">
            <h3 class="text-lg font-medium mb-4 text-amber-500">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="#party-details"
                  class="text-gray-300 hover:text-amber-500 transition"
                  >Party Details</a
                >
              </li>
              <li>
                <a href="gallery" class="text-gray-300 hover:text-amber-500 transition"
                  >Gallery</a
                >
              </li>
              <li>
                <a href="/upload" class="text-gray-300 hover:text-amber-500 transition"
                  >Upload Photos</a
                >
              </li>
            </ul>
          </div>

          <!-- Contact info -->
          <div class="text-center md:text-left">
            <h3 class="text-lg font-medium mb-4 text-amber-500">Contact Info</h3>
            <p class="text-gray-300 mb-2">For questions, please email:</p>
            <a
              href="mailto:ShafaliSpurlingJeste@gmail.com"
              class="text-amber-500 hover:text-amber-400"
              >Shafali Spurling Jeste</a
            >
          </div>
        </div>

        <div class="pt-8 border-t border-gray-700 text-center">
          <p class="text-gray-300 hover:text-amber-500 transition">
            A Mid-Century Modern Celebration | April 26th, 2025
          </p>
          <p class="mt-2 mb-0 font-medium text-white">Shafali's 50th Birthday</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<style scoped>
/* CSS variables need to be defined on the component */
.min-h-screen {
  --primary-color: #6c2c9b; /* Purple */
  --primary-light: #9a55c8; /* Light purple */
  --accent-color: #171927; /* Dark blue */
  --background-light: #f9f7fd; /* Very light purple */
}

/* External Map Links */
.external-map-link {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important; /* Centered content */
  padding: 10px 15px !important; /* Larger padding */
  border-radius: 8px !important; /* Rounded corners */
  text-decoration: none !important;
  font-weight: 600 !important;
  font-size: 0.9rem !important;
  transition: all 0.3s ease !important;
  margin-bottom: 10px !important;
  color: white !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important; /* Subtle shadow */
  width: 100% !important; /* Full width for touch targets */
}

.external-map-link:hover {
  transform: translateY(-2px) !important; /* Lift on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15) !important; /* Deeper shadow */
}

.external-map-link:last-child {
  margin-bottom: 0 !important;
}

/* .mapboxgl-popup-content .external-map-link:last-child {
  margin-bottom: 0 !important;
} */

.external-map-link svg,
.external-map-link img {
  margin-right: 10px !important;
  width: 20px !important;
  height: 20px !important;
  flex-shrink: 0 !important;
}

/* Specific Background Colors */
.google-maps {
  background-color: #4285f4 !important;
}

.google-maps:hover {
  background-color: #3367d6 !important;
}

.apple-maps {
  background-color: #000000 !important;
}

.apple-maps:hover {
  background-color: #333333 !important;
}

.waze-link {
  background-color: #33ccff !important;
}

.waze-link:hover {
  background-color: #1ab9eb !important;
}
.center-hotel-btn {
  background: none !important;
  border: none !important;
  color: var(--primary-color) !important;
  text-decoration: underline !important;
  cursor: pointer !important;
  padding: 6px 0 !important;
  font-size: 0.9rem !important;
  margin-top: 8px !important;
  width: 100% !important;
  text-align: center !important;
  transition: color 0.3s ease !important;
}
.center-hotel-btn:hover {
  color: var(--primary-light) !important;
}

/* Venue marker styles */
.marker-venue {
  position: relative;
  animation: pulse 2s infinite;
}

.marker-venue::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 10px solid #6c2c9b;
}

/* Hotel marker styles */
.marker-hotel {
  background-color: #9a55c8; /* Light purple */
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.marker-hotel:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(154, 85, 200, 0.6);
}



/* To venue button */
.to-venue {
  width: 100%;
  justify-content: center;
}

/* Pulsing animation for venue marker */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(108, 44, 155, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(108, 44, 155, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(108, 44, 155, 0);
  }
}

/* Tab button styles */
.tab-button {
  padding: 10px 15px;
  min-width: 140px;
  border-radius: 8px;
  font-weight: 800;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  outline: none;
  border: 1px solid #6c2c9b;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Active tab */
.active-tab {
  background-color: #6c2c9b !important;
  color: white !important;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2) !important;
  transform: translateY(-2px);
}

/* Inactive tab */
.inactive-tab {
  background-color: white !important;
  color: #6c2c9b !important;
  border: 2px solid #6c2c9b !important;
}

/* SVG icon colors */
.active-tab svg {
  stroke: white !important;
}

.inactive-tab svg {
  stroke: #6c2c9b !important;
}

/* Tab button hover and active states */
.tab-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
}

.tab-button:active {
  transform: translateY(0);
}

/* Map tab button */
.map-tab-button {
  transition: all 0.2s ease-in-out;
}

.map-tab-button:active {
  transform: scale(0.97);
}

/* Section styles */
.section-bg-light {
  background-color: var(--background-light) !important;
}

.section-bg-white {
  background-color: white;
}

.section-title {
  @apply text-3xl font-bold text-center mb-10 text-gray-900;
  position: relative;
  padding-bottom: 1rem;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: var(--primary-color);
}

.section-wrapper {
  @apply py-16;
}

/* Address form styles */
.address-form {
  margin-top: 1rem;
}

.address-form input {
  border: 1px solid #d1d5db;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}

.address-form button {
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s;
}

.address-form button:hover {
  background-color: var(--primary-light);
}
/* Sidebar list container */
.sidebar-list {
  scrollbar-width: thin;
  scrollbar-color: var(--primary-color) var(--background-light);
}

.sidebar-list::-webkit-scrollbar {
  width: 8px;
}

.sidebar-list::-webkit-scrollbar-track {
  background: var(--background-light);
  border-radius: 4px;
}

.sidebar-list::-webkit-scrollbar-thumb {
  background-color: var(--primary-color);
  border-radius: 4px;
  border: 2px solid var(--background-light);
}

/* Card-specific styles */
.sidebar-list .bg-white {
  border: 1px solid #e5e7eb; /* Subtle gray border for definition */
}

/* Event Venue card */
.sidebar-list .border-primary-color {
  background-color: #f9f7fd; /* Very light purple background */
}

/* Hotel card text */
.sidebar-list h3 {
  color: var(--primary-color); /* Match theme */
  font-size: 1.125rem; /* 18px */
  font-weight: 600;
}

.sidebar-list p {
  font-size: 0.95rem; /* Slightly smaller for balance */
  line-height: 1.5; /* Improved readability */
  word-break: break-word; /* Handle long addresses */
}

/* Button styling */
.sidebar-list button {
  font-size: 0.9rem;
  padding: 4px 0;
  transition: color 0.2s ease;
}

/* Hover effect for cards */
.sidebar-list .hover\:shadow-lg:hover {
  transform: translateY(-2px); /* Slight lift */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .sidebar-list {
    padding: 0 10px; /* Add some horizontal padding */
    max-height: 400px; /* Slightly shorter on mobile */
  }

  .sidebar-list .bg-white {
    padding: 1rem; /* Reduce padding for smaller screens */
  }

  .sidebar-list h3 {
    font-size: 1rem; /* Smaller titles */
  }

  .sidebar-list p {
    font-size: 0.875rem; /* Smaller text */
  }
}
/* Photo frame styles */
.photo-frame {
  width: 220px;
  height: 220px;
  margin: 0 auto 1.5rem;
  position: relative;
  overflow: hidden;
  border: 5px solid white;
  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.3);
}

.photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.photo-border {
  position: absolute;
  inset: 0;
  border: 2px solid var(--primary-color);
  z-index: 2;
}

.photo-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.75rem;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  font-size: 1rem;
  font-weight: 500;
}

/* Button style */
.mcm-button-teal {
  background-color: var(--primary-color);
  color: white;
  font-weight: 500;
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mcm-button-teal:hover {
  background-color: var(--primary-light);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Directions control styles */
.mapboxgl-ctrl-directions {
  max-width: 300px;
}

.directions-control {
  font-family: "mr-eaves-xl-modern", sans-serif;
}

.mapbox-directions-profile label {
  color: var(--primary-color);
}

.mapbox-directions-instructions {
  max-height: 300px;
}

/* Get directions button */
.get-directions-btn {
  background: none;
  border: none;
  padding: 5px 0;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
  color: var(--primary-color);
}

.get-directions-btn:hover {
  color: var(--primary-light);
}

/* Hotel list styling */
.hotel-list {
  scrollbar-width: thin;
  scrollbar-color: var(--primary-light) #f0f0f0;
}

.hotel-list::-webkit-scrollbar {
  width: 6px;
}

.hotel-list::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 10px;
}

.hotel-list::-webkit-scrollbar-thumb {
  background-color: var(--primary-light);
  border-radius: 10px;
}

/* Prevent text overflow in hotel list */
.hotel-list h3,
.hotel-list p {
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}

.hotel-list p {
  max-width: 100%;
  font-size: 1rem;
}

/* Photo upload callout */
.photo-upload-callout {
  transform: translateY(0);
  transition: transform 0.3s ease;
}

.photo-upload-callout:hover {
  transform: translateY(-5px);
}

/* Browse photos banner */
.browse-photos-banner {
  position: relative;
  overflow: hidden;
}

.browse-photos-banner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" fill="%236c2c9b" fill-opacity="0.1" fill-rule="evenodd"/></svg>');
  opacity: 0.2;
}

/* Update all amber/orange references */
.text-amber-500 {
  color: var(--primary-color);
}
.bg-amber-500 {
  background-color: var(--primary-color);
}
.bg-amber-50 {
  background-color: var(--background-light);
}
.border-amber-500 {
  border-color: var(--primary-color);
}
.hover\:text-amber-600:hover {
  color: var(--primary-light);
}
.hover\:bg-amber-600:hover {
  background-color: var(--primary-light);
}

/* Fix parent container issues */
.lg\:hidden.flex {
  background-color: var(--background-light) !important;
  padding: 10px;
  border-radius: 12px;
  margin-bottom: 15px !important;
}

/* Improve scrolling in the hotel list */
.max-h-[450px] {
  -webkit-overflow-scrolling: touch;
}

/* View transitions */
.view-transition {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.view-enter {
  opacity: 0;
  transform: translateY(10px);
}

.view-enter-active {
  opacity: 1;
  transform: translateY(0);
}

/* Mobile-specific styles */
@media (max-width: 768px) {
  .external-map-link {
    padding: 10px 15px;
    font-size: 16px;
  }

  .center-venue-btn {
    padding: 12px 20px;
    font-size: 16px;
  }

  /* Make map controls more mobile-friendly */
  .mapboxgl-ctrl-top-left {
    top: 10px !important;
    left: 10px !important;
    right: 10px !important;
    width: calc(100% - 20px);
  }

  .mapboxgl-ctrl-top-left .mapbox-directions-component,
  .mapboxgl-ctrl-top-left .mapboxgl-ctrl-directions {
    width: 100% !important;
    max-width: 100% !important;
  }

  /* Make the directions input fields larger on mobile */
  .mapbox-directions-inputs input {
    font-size: 16px !important;
    height: 40px !important;
  }

  /* Ensure map control buttons are large enough for touch */
  .map-controls button {
    padding: 10px 15px !important;
    margin: 5px !important;
    font-size: 14px !important;
  }

  /* Make the popup larger on mobile */
  .mapboxgl-popup-content {
    min-width: 200px !important;
  }

  /* Make popup buttons more tappable */
  .mapboxgl-popup-content button {
    padding: 8px 12px !important;
    margin: 5px 0 !important;
    font-size: 14px !important;
  }
}
</style>
<script setup>
import { ref, onMounted, watch } from "vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";
import confetti from "canvas-confetti";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

const isLoggedIn = ref(false);
const mobileMenuOpen = ref(false);
const map = ref(null);
const hotelMarkers = ref([]);
const activeTab = ref("map");
const confettiInterval = ref(null); // Declare confettiInterval as a ref

const mapboxApiKey = import.meta.env.VITE_MAPBOX_API_KEY;
const venueLocation = [-118.4767077174826, 34.134042845365684];
const venueAddress = "15767 Castlewoods Dr, Los Angeles, CA";
const hotels = [
  {
    name: "W Hotel",
    coordinates: [-118.4402, 34.0652],
    address: "930 Hilgard Avenue, Los Angeles, CA 90024",
    phone: "310-208-8765",
  },
  {
    name: "Luxe Hotel",
    coordinates: [-118.4578, 34.0835],
    address: "11461 Sunset Blvd, Los Angeles, CA 90049",
    phone: "310-476-6571",
  },
  {
    name: "Beverly Hills Marriott",
    coordinates: [-118.3949, 34.0548],
    address: "1150 South Beverly Drive, Los Angeles, CA 90035",
    phone: "310-553-6561",
  },
  {
    name: "Montrose at Beverly Hills",
    coordinates: [-118.3873, 34.0879],
    address: "900 Hammond Street, West Hollywood, CA 90069",
    phone: "310-855-1115",
  },
];

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;
  });

  initializeMap();
  console.log("Map initialized:", map.value);

  const updateActiveTabForScreenSize = () => {
    if (window.innerWidth >= 1024) {
      activeTab.value = "both";
    } else {
      if (activeTab.value === "both") {
        activeTab.value = "map";
      }
    }
  };
  updateActiveTabForScreenSize();
  window.addEventListener("resize", updateActiveTabForScreenSize);

  setTimeout(() => {
    getUserLocation();
  }, 1500);

  confettiInterval = setInterval(() => {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ["#6c2c9b", "#9a55c8", "#b580e2"],
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ["#6c2c9b", "#d4a5ff", "#f0d4ff"],
    });
  }, 1500);

  return () => {
    window.removeEventListener("resize", updateActiveTabForScreenSize);
    if (confettiInterval) {
      clearInterval(confettiInterval);
    }
  };
});

watch(activeTab, (newValue) => {
  if (newValue === "map" && map.value) {
    setTimeout(() => {
      const mapContainer = document.getElementById("map");
      console.log("Map container size:", mapContainer.offsetWidth, mapContainer.offsetHeight);
      map.value.resize();
      map.value.flyTo({
        center: venueLocation,
        zoom: 11,
        essential: true,
      });
    }, 200);
  }
});

function showVenueOnMap() {
  if (!map.value) {
    console.error("Map not initialized in showVenueOnMap");
    return;
  }

  if (window.innerWidth < 1024 && activeTab.value !== "map") {
    activeTab.value = "map";
    setTimeout(() => {
      map.value.resize();
      map.value.flyTo({
        center: venueLocation,
        zoom: 14,
        essential: true,
      });

      hotelMarkers.value.forEach((marker) => {
        if (marker.getPopup().isOpen()) {
          marker.togglePopup();
        }
      });

      if (window.venueMarker) {
        window.venueMarker.togglePopup();
      }

      document.getElementById("map").scrollIntoView({ behavior: "smooth" });
    }, 300);
  } else {
    map.value.flyTo({
      center: venueLocation,
      zoom: 14,
      essential: true,
    });

    hotelMarkers.value.forEach((marker) => {
      if (marker.getPopup().isOpen()) {
        marker.togglePopup();
      }
    });

    if (window.venueMarker) {
      window.venueMarker.togglePopup();
    }

    document.getElementById("map").scrollIntoView({ behavior: "smooth" });
  }
}

function showHotelOnMap(hotelIndex) {
  if (!map.value) {
    console.error("Map not initialized in showHotelOnMap");
    return;
  }

  const hotel = hotels[hotelIndex];
  if (!hotel) {
    console.error("Hotel not found at index:", hotelIndex);
    return;
  }

  if (window.innerWidth < 1024 && activeTab.value !== "map") {
    activeTab.value = "map";
    setTimeout(() => {
      map.value.resize();
      map.value.flyTo({
        center: hotel.coordinates,
        zoom: 14,
        essential: true,
      });

      if (window.venueMarker && window.venueMarker.getPopup().isOpen()) {
        window.venueMarker.togglePopup();
      }
      hotelMarkers.value.forEach((marker, idx) => {
        if (idx !== hotelIndex && marker.getPopup().isOpen()) {
          marker.togglePopup();
        }
      });

      if (hotelMarkers.value[hotelIndex]) {
        hotelMarkers.value[hotelIndex].togglePopup();
      }

      document.getElementById("map").scrollIntoView({ behavior: "smooth" });
    }, 300);
  } else {
    map.value.flyTo({
      center: hotel.coordinates,
      zoom: 14,
      essential: true,
    });

    if (window.venueMarker && window.venueMarker.getPopup().isOpen()) {
      window.venueMarker.togglePopup();
    }
    hotelMarkers.value.forEach((marker, idx) => {
      if (idx !== hotelIndex && marker.getPopup().isOpen()) {
        marker.togglePopup();
      }
    });

    if (hotelMarkers.value[hotelIndex]) {
      hotelMarkers.value[hotelIndex].togglePopup();
    }

    document.getElementById("map").scrollIntoView({ behavior: "smooth" });
  }
}

function showDirections(hotelIndex) {
  if (!map.value || !hotelMarkers.value[hotelIndex]) return;

  const hotel = hotels[hotelIndex];
  if (!hotel) return;

  if (window.innerWidth < 1024) {
    activeTab.value = "map";
    setTimeout(() => {
      document.getElementById("hotel-section").scrollIntoView({ behavior: "smooth" });
      map.value.flyTo({
        center: hotel.coordinates,
        zoom: 14,
        essential: true,
      });
      if (window.venueMarker && window.venueMarker.getPopup().isOpen()) {
        window.venueMarker.togglePopup();
      }
      hotelMarkers.value.forEach((marker, idx) => {
        if (idx !== hotelIndex && marker.getPopup().isOpen()) {
          marker.togglePopup();
        }
      });
      hotelMarkers.value[hotelIndex].togglePopup();
    }, 100);
  } else {
    document.getElementById("hotel-section").scrollIntoView({ behavior: "smooth" });
    map.value.flyTo({
      center: hotel.coordinates,
      zoom: 14,
      essential: true,
    });
    if (window.venueMarker && window.venueMarker.getPopup().isOpen()) {
      window.venueMarker.togglePopup();
    }
    hotelMarkers.value.forEach((marker, idx) => {
      if (idx !== hotelIndex && marker.getPopup().isOpen()) {
        marker.togglePopup();
      }
    });
    hotelMarkers.value[hotelIndex].togglePopup();
  }
}

function reverseGeocode(latitude, longitude) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxApiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.features && data.features.length > 0) {
        const address = data.features[0].place_name;
        const addressInput = document.getElementById("customAddress");
        if (addressInput) {
          addressInput.value = address;
          addressInput.disabled = false;
        }
      }
    })
    .catch((error) => {
      console.error("Reverse geocoding error:", error);
      const addressInput = document.getElementById("customAddress");
      if (addressInput) {
        addressInput.placeholder = "Enter your address";
        addressInput.disabled = false;
      }
    });
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

function getUserLocation() {
  if (navigator.geolocation) {
    const addressInput = document.getElementById("customAddress");
    if (addressInput) {
      addressInput.placeholder = "Getting your location...";
      addressInput.disabled = true;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        reverseGeocode(latitude, longitude);
        const directionsControl = map.value?._controls.find(
          (control) => control instanceof MapboxDirections
        );
        if (directionsControl) {
          directionsControl.setOrigin([longitude, latitude]);
          directionsControl.setDestination(venueLocation);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        alert("Could not access your location. Please enter your address manually.");
        const addressInput = document.getElementById("customAddress");
        if (addressInput) {
          addressInput.placeholder = "Enter your address";
          addressInput.disabled = false;
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  } else {
    alert(
      "Geolocation is not supported by your browser. Please enter your address manually."
    );
  }
}

const venueLinks = [
  {
    url: `https://maps.apple.com/?q=${encodeURIComponent(venueAddress)}&ll=${
      venueLocation[1]
    },${venueLocation[0]}`,
    bgColor: "#000000",
    icon:
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
    label: "Apple Maps",
  },
  {
    url: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      venueAddress
    )}`,
    bgColor: "#4285F4",
    icon:
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
    label: "Google Maps",
  },
  {
    url: `waze://?ll=${venueLocation[1]},${venueLocation[0]}&navigate=yes`,
    bgColor: "#33CCFF",
    icon:
      '<svg viewBox="0 0 24 24" class="h-5 w-5 mr-2" fill="white"><path d="M12,1.37c-5.89,0-10.63,4.66-10.63,10.45c0,3,1.33,5.69,3.44,7.56l0.03,0.03c2.11,1.87,4.92,3.01,8,3.01 c4.75,0,8.79-2.97,10.26-7.11c0.15-0.38,0.25-0.73,0.33-1.1c0.1-0.4,0.19-0.8,0.19-1.22C23.63,6.03,17.89,1.37,12,1.37z M19.04,15.53c-0.53,1.61-1.61,3.02-3.05,3.99c-1.32,0.88-2.95,1.4-4.68,1.4c-1.38,0-2.68-0.33-3.83-0.91 c-0.19-0.1-0.39-0.21-0.58-0.32c-1.73-1.1-2.96-2.9-3.2-5.01c-0.1-0.83-0.03-1.69,0.2-2.48c0.22-0.78,0.59-1.51,1.08-2.14 c0.91-1.2,2.25-2.13,3.86-2.54c0.59-0.15,1.21-0.23,1.85-0.23c0.64,0,1.27,0.08,1.85,0.23c1.61,0.41,2.95,1.34,3.86,2.54 c0.49,0.63,0.86,1.36,1.08,2.14c0.23,0.8,0.3,1.65,0.2,2.48C19.58,14.35,19.35,14.96,19.04,15.53z"/><circle cx="8.5" cy="13" r="1.5"/><circle cx="15.5" cy="13" r="1.5"/></svg>',
    label: "Waze",
  },
];

function createPopupHTML(title, address, phone, links, centerButton = null) {
  let linksHTML = links
    .map(
      (link) => `
    <a href="${link.url}" 
       target="_blank" 
       rel="noopener noreferrer" 
       class="external-map-link ${link.label.toLowerCase().replace(/ /g, '-')}-link">
      ${link.icon}
      <span>${link.label}</span>
    </a>
  `
    )
    .join("");

  let centerButtonHTML = centerButton
    ? `
      <button id="${centerButton.id}" class="center-hotel-btn">
        ${centerButton.label}
      </button>
    `
    : "";

  return `
    <h3>${title}</h3>
    <p>${address}</p>
    ${phone ? `<p>${phone}</p>` : ""}
    <div class="flex flex-col gap-4 mt-4">
      ${linksHTML}
      ${centerButtonHTML}
      <button class="custom-close-btn" style="position: absolute; top: 10px; right: 10px; width: 30px; height: 30px; border-radius: 50%; background: rgba(255, 255, 255, 0.9); color: #6c2c9b; border: none; font-size: 18px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); cursor: pointer; display: flex; align-items: center; justify-content: center; transition: transform 0.2s ease;">×</button>
    </div>
  `;
}

function initializeMap() {
  mapboxgl.accessToken = mapboxApiKey;

  map.value = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: venueLocation,
    zoom: 11,
  });

  map.value.addControl(new mapboxgl.NavigationControl());

  const venueElement = document.createElement("div");
  venueElement.className = "marker-venue";
  venueElement.style.width = "40px";
  venueElement.style.height = "40px";
  venueElement.style.borderRadius = "50%";
  venueElement.style.backgroundColor = "#6c2c9b";
  venueElement.style.border = "3px solid white";
  venueElement.style.cursor = "pointer";
  venueElement.style.boxShadow = "0 2px 4px rgba(0,0,0,0.3)";

  const venuePopup = new mapboxgl.Popup({ offset: 25, maxWidth: "300px", closeButton: false })
    .setHTML(createPopupHTML("Shafali's Birthday Party", venueAddress, null, venueLinks));

  const venueMarker = new mapboxgl.Marker(venueElement)
    .setLngLat(venueLocation)
    .setPopup(venuePopup)
    .addTo(map.value);

  venuePopup.on("open", () => {
    const closeBtn = document.querySelector(".custom-close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => venuePopup.remove());
    }
  });

  window.venueMarker = venueMarker;

  hotelMarkers.value = [];

  hotels.forEach((hotel, index) => {
    const element = document.createElement("div");
    element.className = "marker-hotel";
    element.style.width = "32px";
    element.style.height = "32px";
    element.style.borderRadius = "50%";
    element.style.backgroundColor = "#9a55c8";
    element.style.border = "2px solid white";
    element.style.cursor = "pointer";

    const hotelLinks = [
      {
        url: `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(hotel.address)}&destination=${encodeURIComponent(venueAddress)}`,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>',
        label: "Google Maps",
      },
      {
        url: `https://maps.apple.com/?saddr=${encodeURIComponent(hotel.address)}&daddr=${encodeURIComponent(venueAddress)}`,
        icon: '<svg viewBox="0 0 24 24" class="h-5 w-5 mr-2" fill="white"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M14.758,16.121 c-0.607,0.913-1.213,1.824-2.277,1.846c-0.998,0.02-1.314-0.588-2.455-0.588s-1.488,0.57-2.428,0.607 c-0.977,0.037-1.721-0.988-2.334-1.896C3.65,13.661,3.437,10.495,4.65,8.599c0.602-0.946,1.682-1.545,2.852-1.56 c0.889-0.014,1.725,0.595,2.264,0.595c0.541,0,1.555-0.735,2.622-0.627c0.446,0.021,1.698,0.18,2.504,1.356 c-0.064,0.041-1.496,0.872-1.48,2.6c0.018,2.06,1.82,2.75,1.838,2.76C15.25,13.724,15.434,15.096,14.758,16.121z M11.345,6.053 c0.166-0.837,0.848-1.604,1.797-1.861c0.193,1.227-0.4,2.42-1.077,3.176S10.363,8.695,10.192,8.7 C9.964,7.635,11.108,7.009,11.345,6.053z"/></svg>',
        label: "Apple Maps",
      },
      {
        url: `waze://?ll=${venueLocation[1]},${venueLocation[0]}&navigate=yes`,
        icon: '<svg viewBox="0 0 24 24" class="h-5 w-5 mr-2" fill="white"><path d="M12,1.37c-5.89,0-10.63,4.66-10.63,10.45c0,3,1.33,5.69,3.44,7.56l0.03,0.03c2.11,1.87,4.92,3.01,8,3.01 c4.75,0,8.79-2.97,10.26-7.11c0.15-0.38,0.25-0.73,0.33-1.1c0.1-0.4,0.19-0.8,0.19-1.22C23.63,6.03,17.89,1.37,12,1.37z M19.04,15.53c-0.53,1.61-1.61,3.02-3.05,3.99c-1.32,0.88-2.95,1.4-4.68,1.4c-1.38,0-2.68-0.33-3.83-0.91 c-0.19-0.1-0.39-0.21-0.58-0.32c-1.73-1.1-2.96-2.9-3.2-5.01c-0.1-0.83-0.03-1.69,0.2-2.48c0.22-0.78,0.59-1.51,1.08-2.14 c0.91-1.2,2.25-2.13,3.86-2.54c0.59-0.15,1.21-0.23,1.85-0.23c0.64,0,1.27,0.08,1.85,0.23c1.61,0.41,2.95,1.34,3.86,2.54 c0.49,0.63,0.86,1.36,1.08,2.14c0.23,0.8,0.3,1.65,0.2,2.48C19.58,14.35,19.35,14.96,19.04,15.53z"/><circle cx="8.5" cy="13" r="1.5"/><circle cx="15.5" cy="13" r="1.5"/></svg>',
        label: "Waze",
      },
    ];
    const centerButton = {
      id: `center-hotel-btn-${index}`,
      label: "Center on Map",
    };
    const hotelPopup = new mapboxgl.Popup({ offset: 25, maxWidth: "350px", closeButton: false })
      .setHTML(createPopupHTML(hotel.name, hotel.address, hotel.phone, hotelLinks, centerButton));

    hotelPopup.on("open", () => {
      const closeBtn = document.querySelector(".custom-close-btn");
      if (closeBtn) {
        closeBtn.addEventListener("click", () => hotelPopup.remove());
      }
      const centerButtonElement = document.getElementById(`center-hotel-btn-${index}`);
      if (centerButtonElement) {
        centerButtonElement.removeEventListener("click", showHotelOnMap);
        centerButtonElement.addEventListener("click", () => {
          showHotelOnMap(index);
        });
      } else {
        console.error(`Center button not found for hotel index: ${index}`);
      }
    });

    const marker = new mapboxgl.Marker(element)
      .setLngLat(hotel.coordinates)
      .setPopup(hotelPopup)
      .addTo(map.value);

    hotelMarkers.value.push(marker);
  });

  const centerButton = document.createElement("button");
  centerButton.className = "center-venue-btn";
  centerButton.innerHTML = "Show Party Venue";
  centerButton.addEventListener("click", showVenueOnMap);
  document.getElementById("map").appendChild(centerButton);
}

function submitAddress() {
  const address = document.getElementById("customAddress")?.value;
  if (address) {
    const modal = document.createElement("div");
    modal.className = "directions-modal";
    modal.style.position = "fixed";
    modal.style.zIndex = "9999";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";

    const encodedAddress = encodeURIComponent(venueAddress);
    const lat = venueLocation[1];
    const lng = venueLocation[0];

    modal.innerHTML = `
      <div style="background-color: white; padding: 20px; border-radius: 8px; max-width: 90%; width: 400px;">
        <h3 style="margin-top: 0; color: #6c2c9b; font-weight: bold; font-size: 18px; margin-bottom: 15px;">Get Directions</h3>
        <p style="margin-bottom: 15px;">Choose your preferred maps app:</p>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <a href="https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
            address
          )}&destination=${encodedAddress}" 
             target="_blank" rel="noopener noreferrer" 
             style="display: flex; align-items: center; padding: 10px; border: 1px solid #ddd; border-radius: 4px; text-decoration: none; color: #333; font-weight: 500;">
            <div style="width: 24px; height: 24px; margin-right: 10px; color: #4285F4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.050-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003z"/>
              </svg>
            </div>
            Google Maps
          </a>
          <a href="https://maps.apple.com/?saddr=${encodeURIComponent(
            address
          )}&daddr=${encodedAddress}" 
             target="_blank" rel="noopener noreferrer" 
             style="display: flex; align-items: center; padding: 10px; border: 1px solid #ddd; border-radius: 4px; text-decoration: none; color: #333; font-weight: 500;">
            <div style="width: 24px; height: 24px; margin-right: 10px;">
              <svg viewBox="0 0 24 24" fill="#000000">
                <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M14.758,16.121
                  c-0.607,0.913-1.213,1.824-2.277,1.846c-0.998,0.02-1.314-0.588-2.455-0.588s-1.488,0.57-2.428,0.607
                  c-0.977,0.037-1.721-0.988-2.334-1.896C3.65,13.661,3.437,10.495,4.65,8.599c0.602-0.946,1.682-1.545,2.852-1.56
                  c0.889-0.014,1.725,0.595,2.264,0.595c0.541,0,1.555-0.735,2.622-0.627c0.446,0.021,1.698,0.18,2.504,1.356
                  c-0.064,0.041-1.496,0.872-1.48,2.6c0.018,2.06,1.82,2.75,1.838,2.76C15.25,13.724,15.434,15.096,14.758,16.121z M11.345,6.053
                  c0.166-0.837,0.848-1.604,1.797-1.861c0.193,1.227-0.4,2.42-1.077,3.176S10.363,8.695,10.192,8.7
                  C9.964,7.635,11.108,7.009,11.345,6.053z"/>
              </svg>
            </div>
            Apple Maps
          </a>
          <a href="waze://?ll=${lat},${lng}&navigate=yes" 
             target="_blank" rel="noopener noreferrer" 
             style="display: flex; align-items: center; padding: 10px; border: 1px solid #ddd; border-radius: 4px; text-decoration: none; color: #333; font-weight: 500;">
            <div style="width: 24px; height: 24px; margin-right: 10px; color: #33CCFF">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,1.37c-5.89,0-10.63,4.66-10.63,10.45c0,3,1.33,5.69,3.44,7.56l0.03,0.03c2.11,1.87,4.92,3.01,8,3.01
                  c4.75,0,8.79-2.97,10.26-7.11c0.15-0.38,0.25-0.73,0.33-1.1c0.1-0.4,0.19-0.8,0.19-1.22C23.63,6.03,17.89,1.37,12,1.37z
                  M19.04,15.53c-0.53,1.61-1.61,3.02-3.05,3.99c-1.32,0.88-2.95,1.4-4.68,1.4c-1.38,0-2.68-0.33-3.83-0.91
                  c-0.19-0.1-0.39-0.21-0.58-0.32c-1.73-1.1-2.96-2.9-3.2-5.01c-0.1-0.83-0.03-1.69,0.2-2.48c0.22-0.78,0.59-1.51,1.08-2.14
                  c0.91-1.2,2.25-2.13,3.86-2.54c0.59-0.15,1.21-0.23,1.85-0.23c0.64,0,1.27,0.08,1.85,0.23c1.61,0.41,2.95,1.34,3.86,2.54
                  c0.49,0.63,0.86,1.36,1.08,2.14c0.23,0.8,0.3,1.65,0.2,2.48C19.58,14.35,19.35,14.96,19.04,15.53z"/>
                <circle cx="8.5" cy="13" r="1.5"/>
                <circle cx="15.5" cy="13" r="1.5"/>
              </svg>
            </div>
            Waze
          </a>
        </div>
        <button id="close-modal" style="margin-top: 15px; background-color: #f1f1f1; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer; width: 100%;">
          Cancel
        </button>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById("close-modal").addEventListener("click", function () {
      document.body.removeChild(modal);
    });

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    });
  }
}

function rsvpYes() {
  alert("Far out! We're looking forward to seeing you!");
  launchConfetti();
}

function rsvpNo() {
  alert("We're sorry you can't make it. Perhaps next time!");
}

function launchConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#6c2c9b", "#9a55c8", "#b580e2", "#d4a5ff", "#f0d4ff"],
  });
}
</script>

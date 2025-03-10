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
            class="relative bg-white border-2 border-black p-8 sm:p-12 max-w-lg mx-auto rounded-lg"
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
              <h2
                class="text-lg font-light text-amber-500 tracking-widest uppercase"
              >
                Join Us For
              </h2>
              <h1
                class="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mt-2"
              >
                A Birthday Celebration
              </h1>
              <div class="mt-4 flex items-center justify-center gap-4">
                <div class="h-px bg-amber-500 flex-grow"></div>
                <p class="text-2xl font-light text-amber-500 uppercase">
                  You're Invited
                </p>
                <div class="h-px bg-amber-500 flex-grow"></div>
              </div>
            </div>

            <!-- Event Details -->
            <div class="space-y-4 text-center mb-8">
              <ul
                class="list-disc list-inside text-lg text-gray-900 font-medium"
              >
                <li>April 26th, 2025</li>
                <li>7:00 PM - LATE</li>
                <li>15767 Castlewoods Drive, Los Angeles, CA</li>
              </ul>

              <p class="text-gray-700 px-4 leading-relaxed mt-6">
                We have <span class="font-bold">FIVE</span> decades worth of
                celebrating to do, so wear comfy shoes, take some Advil, and
                come ready to boogie!
              </p>
              <p class="text-gray-700 font-semibold mt-4">
                — Shafali and the boys
              </p>
            </div>

            <!-- Important Details Box -->
            <div class="bg-amber-50 p-6 rounded-lg mb-8">
              <h3 class="font-bold text-center text-gray-800 text-lg mb-4">
                Important Details
              </h3>
              <ul
                class="list-disc list-inside text-gray-700 text-base leading-relaxed"
              >
                <li>
                  We will have valet parking, but ride-shares are highly
                  recommended.
                </li>
                <li>There will be plenty of spirits (and food) to consume!</li>
                <li>
                  Please, no gifts. I only ask that you upload pictures of us on
                  this site, and then take one with me at the Photo Booth!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hotel Section -->
    <section id="hotel-section" class="section-wrapper section-bg-light">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title">Hotel Options & Venue Location</h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left: Hotel Options -->
          <div
            class="lg:col-span-1 space-y-4 max-h-[450px] overflow-y-auto pr-2"
          >
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="font-medium text-lg mb-2">Event Venue</h3>
              <p class="text-gray-700 prose font-semibold">
                15767 Castlewoods Drive, Los Angeles, CA
              </p>
              <button
                @click="showVenueOnMap"
                class="text-primary-color hover:text-primary-light inline-block mt-2"
              >
                Center on Map →
              </button>
            </div>

            <!-- Hotel Cards -->
            <div
              v-for="(hotel, index) in hotels"
              :key="index"
              class="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 class="font-medium text-lg mb-2">{{ hotel.name }}</h3>
              <p class="text-gray-700 break-words">{{ hotel.address }}</p>
              <p class="text-gray-700">Tel: {{ hotel.phone }}</p>
              <button
                @click="showDirections(index)"
                class="text-primary-color hover:text-primary-light inline-block mt-2"
              >
                Show on Map →
              </button>
            </div>
          </div>

          <!-- Right: Map Area -->
          <div class="lg:col-span-2 bg-white p-4 rounded-lg shadow-md">
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
                <a
                  href="#gallery"
                  class="text-gray-300 hover:text-amber-500 transition"
                  >Gallery</a
                >
              </li>
              <li>
                <a
                  href="/upload"
                  class="text-gray-300 hover:text-amber-500 transition"
                  >Upload Photos</a
                >
              </li>
            </ul>
          </div>

          <!-- Contact info -->
          <div class="text-center md:text-left">
            <h3 class="text-lg font-medium mb-4 text-amber-500">
              Contact Info
            </h3>
            <p class="text-gray-300 mb-2">For questions, please email:</p>
            <a
              href="mailto:ShafaliSpurlingJeste@gmail.com"
              class="text-amber-500 hover:text-amber-400"
              >Shafali Spurling Jeste</a
            >
          </div>
        </div>

        <div class="pt-8 border-t border-gray-800 text-center">
          <p>A Mid-Century Modern Celebration | April 26th, 2025</p>
          <p class="mt-2">Shafali's 50th Birthday</p>
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

/* Map link colors */
.text-primary-color {
  color: var(--primary-color);
}
.hover\:text-primary-light:hover {
  color: var(--primary-light);
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

/* Improved section styles */
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
.section-bg-white {
  background-color: white;
}

.section-bg-light {
  background-color: var(--background-light);
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
.marker-hotel {
  background-color: #9a55c8; /* Light purple */
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
}
.mapboxgl-ctrl-directions {
  max-width: 300px;
}

.directions-control {
  font-family: "Inter", sans-serif;
}

.mapbox-directions-profile label {
  color: var(--primary-color);
}

.mapbox-directions-instructions {
  max-height: 300px;
}

.mapboxgl-popup-content {
  padding: 15px;
  border-radius: 6px;
}

.mapboxgl-popup-content h3 {
  margin: 0 0 8px;
  color: var(--primary-color);
  font-weight: bold;
}

.mapboxgl-popup-content p {
  margin: 0 0 6px;
}

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

/* Prevent text overflow */
.hotel-list h3 {
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}

.hotel-list p {
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  max-width: 100%;
  font-size: 1rem;
}
</style>
<script setup>
import { ref, onMounted } from "vue";
import confetti from "canvas-confetti";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
// import NavBar from "@/components/NavBar.vue"; // Only import NavBar once with the correct path
// Mobile menu state

import NavigationBar from "@/components/NavigationBar.vue";
const mobileMenuOpen = ref(false);
const map = ref(null);
// Add an array to store hotel markers
const hotelMarkers = ref([]);

const mapboxApiKey = import.meta.env.VITE_MAPBOX_API_KEY;
// Location data - Updated with correct coordinates
const venueLocation = [-118.4767077174826, 34.134042845365684]; // Correct coordinates for 15767 Castlewoods Drive
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

// Function to show a specific hotel on the map
function showHotelOnMap(hotelIndex) {
  if (!map.value) return;

  const hotel = hotels[hotelIndex];
  if (!hotel) return;

  // Fly to the hotel location
  map.value.flyTo({
    center: hotel.coordinates,
    zoom: 14,
    essential: true,
  });

  // Close any open popups first
  const popups = document.querySelectorAll(".mapboxgl-popup");
  popups.forEach((popup) => popup.remove());

  // Open this hotel's popup if we have the marker reference
  if (hotelMarkers.value[hotelIndex]) {
    hotelMarkers.value[hotelIndex].togglePopup();
  }

  // Scroll to map if needed
  document.getElementById("map").scrollIntoView({ behavior: "smooth" });
}

// Gets directions from hotel to venue
function showDirections(hotelIndex) {
  if (!map.value) return;

  const hotel = hotels[hotelIndex];
  if (!hotel) return;

  // Get the directions control
  const directionsControl = map.value._controls.find(
    (control) => control instanceof MapboxDirections
  );

  if (directionsControl) {
    directionsControl.setOrigin(hotel.coordinates);
    directionsControl.setDestination(venueLocation);

    // Scroll to map if needed
    document
      .getElementById("hotel-section")
      .scrollIntoView({ behavior: "smooth" });
  }
}

// Function to center the map on the venue
function showVenueOnMap() {
  if (!map.value) return;

  // Fly to the venue location
  map.value.flyTo({
    center: venueLocation,
    zoom: 14,
    essential: true,
  });

  // Close any open popups first
  const popups = document.querySelectorAll(".mapboxgl-popup");
  popups.forEach((popup) => popup.remove());

  // Open the venue marker popup using the global reference
  if (window.venueMarker) {
    window.venueMarker.togglePopup();
  }

  // Scroll to map if needed
  document.getElementById("map").scrollIntoView({ behavior: "smooth" });
}
function reverseGeocode(latitude, longitude) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxApiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.features && data.features.length > 0) {
        const address = data.features[0].place_name;

        // Update the address input field
        const addressInput = document.getElementById("customAddress");
        if (addressInput) {
          addressInput.value = address;
          addressInput.disabled = false;
        }
      }
    })
    .catch((error) => {
      console.error("Reverse geocoding error:", error);

      // Reset input field
      const addressInput = document.getElementById("customAddress");
      if (addressInput) {
        addressInput.placeholder = "Enter your address";
        addressInput.disabled = false;
      }
    });
}

// Toggle mobile menu
function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}
function getUserLocation() {
  if (navigator.geolocation) {
    // Show loading indicator
    const addressInput = document.getElementById("customAddress");
    if (addressInput) {
      addressInput.placeholder = "Getting your location...";
      addressInput.disabled = true;
    }

    navigator.geolocation.getCurrentPosition(
      // Success handler
      (position) => {
        const { latitude, longitude } = position.coords;

        // Use reverse geocoding to get the address from coordinates
        reverseGeocode(latitude, longitude);

        // Also set the direction origin directly with coordinates
        const directionsControl = map.value?._controls.find(
          (control) => control instanceof MapboxDirections
        );

        if (directionsControl) {
          directionsControl.setOrigin([longitude, latitude]);
          directionsControl.setDestination(venueLocation);
        }
      },
      // Error handler
      (error) => {
        console.error("Geolocation error:", error);
        alert(
          "Could not access your location. Please enter your address manually."
        );

        // Reset input field
        const addressInput = document.getElementById("customAddress");
        if (addressInput) {
          addressInput.placeholder = "Enter your address";
          addressInput.disabled = false;
        }
      },
      // Options
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

// Initialize map
function initializeMap() {
  mapboxgl.accessToken = mapboxApiKey;

  map.value = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: venueLocation,
    zoom: 11,
  });

  // Add navigation controls
  map.value.addControl(new mapboxgl.NavigationControl());

  // Add directions control with improved configuration
  const directions = new MapboxDirections({
    accessToken: mapboxApiKey,
    unit: "imperial",
    profile: "mapbox/driving",
    placeholderOrigin: "Enter your starting address",
    placeholderDestination: `Venue: ${venueAddress}`,
    controls: {
      inputs: true,
      instructions: true,
    },
  });

  // Variable to track if directions are visible
  let directionsVisible = true;

  map.value.addControl(directions, "top-left");

  // Set venue as the default destination
  directions.setDestination(venueLocation);

  // Add venue marker with updated popup
  const venueMarker = new mapboxgl.Marker({ color: "#6c2c9b" })
    .setLngLat(venueLocation)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h3 class="font-bold text-base">Venue</h3>
         <p class="prose">${venueAddress}</p>
         <p class="text-sm text-gray-600 mt-1">Shafali's Birthday HOUSE!</p>`
      )
    )
    .addTo(map.value);

  // Store the venue marker reference globally
  window.venueMarker = venueMarker;

  // Clear hotel markers array
  hotelMarkers.value = [];

  // Add hotel markers with improved popups
  hotels.forEach((hotel, index) => {
    const element = document.createElement("div");
    element.className = "marker-hotel";
    element.style.width = "32px";
    element.style.height = "32px";
    element.style.borderRadius = "50%";
    element.style.backgroundColor = "#9a55c8";
    element.style.border = "2px solid white";
    element.style.cursor = "pointer";

    const marker = new mapboxgl.Marker(element)
      .setLngLat(hotel.coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <h3 class="font-bold">${hotel.name}</h3>
            <p class="prose">${hotel.address}</p>
            <p class="prose">${hotel.phone}</p>
            <div class="flex flex-col gap-2 mt-2">
              <button class="directions-to-venue-btn text-white bg-primary-color hover:bg-primary-light px-2 py-1 rounded text-sm">
                Directions to Venue
              </button>
              <button class="directions-from-venue-btn text-primary-color hover:text-primary-light text-sm">
                Directions from Venue
              </button>
            </div>
          `)
      )
      .addTo(map.value);

    // Store reference to marker for later use
    hotelMarkers.value.push(marker);

    // Add click handlers for the directions buttons in the popup
    marker.getPopup().on("open", () => {
      setTimeout(() => {
        // Button for directions from hotel to venue
        const toVenueBtn = document.querySelector(".directions-to-venue-btn");
        if (toVenueBtn) {
          toVenueBtn.addEventListener("click", () => {
            const directionsControl = map.value._controls.find(
              (control) => control instanceof MapboxDirections
            );
            if (directionsControl) {
              directionsControl.setOrigin(hotel.coordinates);
              directionsControl.setDestination(venueLocation);
            }
          });
        }

        // Button for directions from venue to hotel
        const fromVenueBtn = document.querySelector(
          ".directions-from-venue-btn"
        );
        if (fromVenueBtn) {
          fromVenueBtn.addEventListener("click", () => {
            const directionsControl = map.value._controls.find(
              (control) => control instanceof MapboxDirections
            );
            if (directionsControl) {
              directionsControl.setOrigin(venueLocation);
              directionsControl.setDestination(hotel.coordinates);
            }
          });
        }
      }, 100);
    });
  });

  // Add event listener to the map to handle external address input
  map.value.on("load", () => {
    // Expose a function to set a custom origin
    window.setCustomOrigin = function (address) {
      const directionsControl = map.value._controls.find(
        (control) => control instanceof MapboxDirections
      );
      if (directionsControl) {
        directionsControl.setOrigin(address);
        directionsControl.setDestination(venueLocation);
      }
    };

    // Expose a function to toggle directions list visibility
    window.toggleDirections = function () {
      const directionsContainer = document.querySelector(
        ".mapbox-directions-instructions"
      );
      const directionsSteps = document.querySelector(
        ".mapbox-directions-steps"
      );

      if (directionsContainer) {
        directionsVisible = !directionsVisible;
        const displayValue = directionsVisible ? "block" : "none";

        // Toggle main instructions container
        directionsContainer.style.display = displayValue;

        // Also toggle steps if they exist
        if (directionsSteps) {
          directionsSteps.style.display = displayValue;
        }

        // Update toggle button text
        const toggleBtn = document.querySelector(".toggle-directions-btn");
        if (toggleBtn) {
          toggleBtn.innerHTML = directionsVisible
            ? "Hide Directions"
            : "Show Directions";
        }

        return directionsVisible; // Return current state
      }
      return false;
    };

    // Add control buttons to the map container
    const controlsContainer = document.createElement("div");
    controlsContainer.className = "map-controls";
    controlsContainer.style.position = "absolute";
    controlsContainer.style.zIndex = "10";
    controlsContainer.style.bottom = "10px";
    controlsContainer.style.right = "10px";
    controlsContainer.style.display = "flex";
    controlsContainer.style.flexDirection = "column";
    controlsContainer.style.gap = "8px";

    // Toggle directions button
    const toggleButton = document.createElement("button");
    toggleButton.className = "toggle-directions-btn";
    toggleButton.innerHTML = "Toggle Directions List";
    toggleButton.style.padding = "8px 12px";
    toggleButton.style.backgroundColor = "#6c2c9b";
    toggleButton.style.color = "white";
    toggleButton.style.border = "none";
    toggleButton.style.borderRadius = "4px";
    toggleButton.style.cursor = "pointer";
    toggleButton.style.width = "100%";
    toggleButton.style.textAlign = "center";
    toggleButton.addEventListener("click", () => {
      window.toggleDirections();
    });

    // Show venue button
    const venueButton = document.createElement("button");
    venueButton.className = "show-venue-btn";
    venueButton.innerHTML = "Show Venue";
    venueButton.style.padding = "8px 12px";
    venueButton.style.backgroundColor = "#6c2c9b";
    venueButton.style.color = "white";
    venueButton.style.border = "none";
    venueButton.style.borderRadius = "4px";
    venueButton.style.cursor = "pointer";
    venueButton.style.width = "100%";
    venueButton.style.textAlign = "center";
    venueButton.addEventListener("click", () => {
      showVenueOnMap();
    });

    // Add buttons to container
    controlsContainer.appendChild(toggleButton);
    controlsContainer.appendChild(venueButton);

    // Add container to map
    document.getElementById("map").appendChild(controlsContainer);
  });
}

// Function to handle address form submission
function submitAddress() {
  const address = document.getElementById("customAddress")?.value;
  if (address && window.setCustomOrigin) {
    window.setCustomOrigin(address);
    // Scroll to map if needed
    document.getElementById("map").scrollIntoView({ behavior: "smooth" });
  }
}

// RSVP functions
function rsvpYes() {
  alert("Far out! We're looking forward to seeing you!");
  launchConfetti();
}

function rsvpNo() {
  alert("We're sorry you can't make it. Perhaps next time!");
}

// Function to launch confetti using the canvas-confetti library
function launchConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#6c2c9b", "#9a55c8", "#b580e2", "#d4a5ff", "#f0d4ff"], // Matching purple theme
  });
}

// Continuous confetti
const confettiCanvas = ref(null);
let confettiInterval = null;

onMounted(() => {
  initializeMap();

  // Create a confetti canvas instance
  const myConfetti = confetti.create(confettiCanvas.value, {
    resize: true,
    useWorker: true,
  });
  setTimeout(() => {
    // Automatically get user's location when the page loads
    getUserLocation();
  }, 1500);
  // Continuous light confetti with purple theme
  confettiInterval = setInterval(() => {
    myConfetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ["#6c2c9b", "#9a55c8", "#b580e2"],
    });

    myConfetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ["#6c2c9b", "#d4a5ff", "#f0d4ff"],
    });
  }, 1500);

  // Clean up interval on component unmount
  return () => {
    if (confettiInterval) {
      clearInterval(confettiInterval);
    }
  };
});
</script>

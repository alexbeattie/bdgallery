<template>
  <nav class="bg-gray-900 border-b-2 border-amber-500 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo/Brand -->
        <div class="flex-shrink-0">
          <div class="flex items-center">
            <!-- Star icon -->
            <span class="w-8 h-8 mr-2">
              <svg viewBox="0 0 100 100" class="w-full h-full text-amber-500">
                <path
                  d="M50 0 L55 40 L95 45 L55 50 L50 90 L45 50 L5 45 L45 40 Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span class="text-white font-medium text-xl tracking-wider uppercase"
              >Shafali's 50th</span
            >
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-4">
            <a
              href="#party-details"
              class="text-gray-300 hover:text-amber-500 px-3 py-2 text-sm font-medium"
              >Party Details</a
            >
            <a
              href="#hotel-section"
              class="text-gray-300 hover:text-amber-500 px-3 py-2 text-sm font-medium"
              >Location</a
            >
            <a
              href="gallery"
              class="text-gray-300 hover:text-amber-500 px-3 py-2 text-sm font-medium"
              >Gallery</a
            >

            <!-- Auth buttons -->
            <a
              href="/login"
              class="bg-transparent text-amber-500 border border-amber-500 px-4 py-1 rounded hover:bg-amber-500 hover:text-white transition duration-300"
            >
              Log In
            </a>
            <a
              href="/signup"
              class="bg-amber-500 text-white px-4 py-1 rounded hover:bg-amber-600 transition duration-300"
            >
              Sign Up
            </a>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button
            @click="toggleMobileMenu"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-amber-500"
          >
            <svg
              class="h-6 w-6"
              :class="{ hidden: mobileMenuOpen, block: !mobileMenuOpen }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              class="h-6 w-6"
              :class="{ block: mobileMenuOpen, hidden: !mobileMenuOpen }"
              xmlns="http://www.w3.org/2000/svg"
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
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state -->
    <div :class="{ block: mobileMenuOpen, hidden: !mobileMenuOpen }" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 border-t border-gray-700">
        <a
          href="#party-details"
          class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-amber-500"
          @click="mobileMenuOpen = false"
        >
          Party Details
        </a>
        <a
          href="#hotel-section"
          class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-amber-500"
          @click="mobileMenuOpen = false"
        >
          Location
        </a>
        <a
          href="#gallery"
          class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-amber-500"
          @click="mobileMenuOpen = false"
        >
          Gallery
        </a>
        <div class="pt-4 flex space-x-3 px-3">
          <a
            href="/login"
            class="bg-transparent text-amber-500 border border-amber-500 px-4 py-1 rounded hover:bg-amber-500 hover:text-white transition duration-300 text-center flex-1"
          >
            Log In
          </a>
          <a
            href="/signup"
            class="bg-amber-500 text-white px-4 py-1 rounded hover:bg-amber-600 transition duration-300 text-center flex-1"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

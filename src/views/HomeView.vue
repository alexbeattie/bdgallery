<template>
  <div class="min-h-screen p-4 flex flex-col justify-center items-center">
    <main class="py-16 flex-1 flex flex-col justify-center items-center text-center max-w-4xl">
      <h1 class="m-0 text-5xl font-bold bg-gradient-to-r from-[#ff6b6b] via-[#ff9e7d] to-[#ffd670] text-transparent bg-clip-text">
        Happy Birthday <span class="text-[#ff6b6b]">{{ celebrantName }}</span>!
      </h1>

      <p class="mt-6 text-xl">
        Help us celebrate {{ celebrantName }}'s special day!
      </p>

      <div class="mt-8 p-6 text-left bg-white rounded-lg shadow-md w-full max-w-md">
        <div class="mb-4">
          <label for="name" class="block mb-2 font-medium">Your Name:</label>
          <input
            type="text"
            id="name"
            v-model="name"
            placeholder="Enter your name"
            class="w-full p-3 border border-gray-300 rounded-md text-base mb-4"
          />
        </div>

        <router-link to="/upload">
          <button class="w-full bg-gradient-to-r from-[#ff6b6b] to-[#ff9e7d] text-white border-none py-3 px-6 rounded-md text-base cursor-pointer transition-all hover:translate-y-[-2px] hover:shadow-md">
            Share Photos
          </button>
        </router-link>
      </div>

      <div class="mt-8 p-4 bg-white/80 rounded-lg shadow-sm">
        <h2>Celebrating on April 7, 2025!</h2>
      </div>
    </main>

    <footer class="w-full h-24 border-t border-gray-200 flex justify-center items-center mt-8">
      <p>With love from all of {{ celebrantName }}'s friends and family ❤️</p>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue';
import confetti from 'canvas-confetti';

const launchConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
};
export default {
  name: 'HomeView',
  setup() {
    const name = ref('');
    const celebrantName = ref('Shafali'); // Change to the birthday person's name

    return {
      name,
      celebrantName
    };
  }
};
</script>

<style scoped>
/* Tailwind-like classes */
.min-h-screen {
  min-height: 100vh;
}

.p-4 {
  padding: 1rem;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.justify-center {
  justify-content: center;
}

.items-center {
  align-items: center;
}

.py-16 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.flex-1 {
  flex: 1 1 0%;
}

.text-center {
  text-align: center;
}

.max-w-4xl {
  max-width: 56rem;
}

.m-0 {
  margin: 0;
}

.text-5xl {
  font-size: 3rem;
  line-height: 1;
}

.font-bold {
  font-weight: 700;
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.from-\[\#ff6b6b\] {
  --tw-gradient-from: #ff6b6b;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.via-\[\#ff9e7d\] {
  --tw-gradient-via: #ff9e7d;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to);
}

.to-\[\#ffd670\] {
  --tw-gradient-to: #ffd670;
}

.text-transparent {
  color: transparent;
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

.text-\[\#ff6b6b\] {
  color: #ff6b6b;
}

.mt-6 {
  margin-top: 1.5rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.mt-8 {
  margin-top: 2rem;
}

.p-6 {
  padding: 1.5rem;
}

.text-left {
  text-align: left;
}

.bg-white {
  background-color: white;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.w-full {
  width: 100%;
}

.max-w-md {
  max-width: 28rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.block {
  display: block;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.font-medium {
  font-weight: 500;
}

.p-3 {
  padding: 0.75rem;
}

.border {
  border-width: 1px;
}

.border-gray-300 {
  border-color: #d1d5db;
}

.rounded-md {
  border-radius: 0.375rem;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.to-\[\#ff9e7d\] {
  --tw-gradient-to: #ff9e7d;
}

.text-white {
  color: white;
}

.border-none {
  border-style: none;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.cursor-pointer {
  cursor: pointer;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.hover\:translate-y-\[-2px\]:hover {
  transform: translateY(-2px);
}

.hover\:shadow-md:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.bg-white\/80 {
  background-color: rgba(255, 255, 255, 0.8);
}

.shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.h-24 {
  height: 6rem;
}

.border-t {
  border-top-width: 1px;
}

.border-gray-200 {
  border-color: #e5e7eb;
}

.mt-8 {
  margin-top: 2rem;
}
</style>
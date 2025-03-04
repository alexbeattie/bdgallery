<template>
  <!-- Main wrapper with mid-century background pattern -->
  <div class="min-h-screen bg-amber-100 p-4 sm:p-8 flex items-center justify-center">
    <!-- Card container with geometric background and angled design -->
    <div class="w-full max-w-4xl relative">
      <!-- Geometric background elements -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-0 h-full w-1/4 bg-amber-600 opacity-70"></div>
        <div class="absolute top-0 left-1/4 h-full w-1/6 bg-amber-400 opacity-60"></div>
        <div class="absolute top-0 left-[calc(1/4+1/6)] h-full w-1/5 bg-amber-300 opacity-50"></div>
        <div class="absolute top-0 right-0 h-full w-2/5 bg-amber-200"></div>
      </div>
      
      <!-- Main invitation card - angled white section -->
      <div class="relative transform rotate-2 bg-white border-2 border-black p-6 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]">
        <!-- Decorative starburst -->
        <div class="absolute top-6 right-8 w-16 h-16">
          <svg viewBox="0 0 100 100" class="w-full h-full text-amber-500">
            <path d="M50 0 L55 40 L95 45 L55 50 L50 90 L45 50 L5 45 L45 40 Z" fill="currentColor"/>
          </svg>
        </div>
        
        <!-- Header -->
        <div class="mb-8 text-center">
          <h2 class="text-lg text-center font-light tracking-widest text-amber-500 mb-2">THE</h2>
          <h1 class="text-4xl sm:text-6xl font-black tracking-tight text-gray-900 leading-tight">PARTY <br>INVITATION</h1>
          <div class="mt-4 flex items-center justify-center gap-4">
            <div class="h-px bg-amber-500 flex-grow"></div>
            <p class="text-xl sm:text-2xl font-light text-amber-500 uppercase tracking-wide">You're Invited</p>
            <div class="h-px bg-amber-500 flex-grow"></div>
          </div>
        </div>
        
        <!-- Content -->
        <div class="space-y-6 max-w-2xl mx-auto">
          <!-- Details with mid-century styling -->
          <div class="space-y-4 text-center">
            <div class="flex items-center justify-center gap-3">
              <div class="w-3 h-3 bg-amber-500 rounded-full"></div>
              <p class="text-lg font-normal tracking-wide">SATURDAY, MARCH 15TH, 2025</p>
            </div>
            <div class="flex items-center justify-center gap-3">
              <div class="w-3 h-3 bg-amber-500 rounded-full"></div>
              <p class="text-lg font-normal tracking-wide">8:00 PM - LATE</p>
            </div>
            <div class="flex items-center justify-center gap-3">
              <div class="w-3 h-3 bg-amber-500 rounded-full"></div>
              <p class="text-lg font-normal tracking-wide">123 ATOMIC AVENUE, SUNNYVILLE</p>
            </div>
          </div>
          
          <p class="text-center text-gray-700 px-4 leading-relaxed">
            Join us for an evening of mid-century modern fun! Enjoy classic cocktails, hors d'oeuvres, 
            and the smooth sounds of jazz and bossa nova. Dress code is vintage fabulous or cocktail attire.
          </p>
          
          <!-- RSVP section -->
          <div class="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button @click="rsvpYes" class="px-8 py-3 bg-amber-500 text-white font-medium tracking-wide uppercase hover:bg-amber-600 transition-colors duration-300 transform -rotate-1">
              Count Me In
            </button>
            <button @click="rsvpNo" class="px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium tracking-wide uppercase hover:bg-gray-100 transition-colors duration-300 transform rotate-1">
              Regretfully Decline
            </button>
          </div>
        </div>
        
        <!-- Footer -->
        <div class="mt-10 text-center">
          <p class="text-xs uppercase tracking-widest text-gray-500">A Mid-Century Modern Celebration</p>
        </div>
      </div>
    </div>
    
    <!-- Canvas for confetti -->
    <canvas ref="confettiCanvas" class="fixed inset-0 pointer-events-none z-50"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import confetti from 'canvas-confetti';

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
    colors: ['#F59E0B', '#D97706', '#92400E', '#FBBF24', '#FEF3C7']
  });
}

// Continuous confetti
const confettiCanvas = ref(null);
let confettiInterval = null;

onMounted(() => {
  // Create a confetti canvas instance
  const myConfetti = confetti.create(confettiCanvas.value, {
    resize: true,
    useWorker: true
  });
  
  // Continuous light confetti with mid-century color palette
  confettiInterval = setInterval(() => {
    myConfetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#F59E0B', '#D97706', '#FBBF24']
    });
    
    myConfetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#92400E', '#FEF3C7', '#F59E0B']
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
<template>
  <!-- Main wrapper with mid-century background pattern -->
  <div
    class="min-h-screen bg-amber-100 bg-opacity-80 p-4 sm:p-8 flex items-center justify-center"
  >
    <!-- Card container with geometric background and angled design -->
    <div class="w-full max-w-4xl relative">
      <!-- Geometric background elements -->
      <div class="absolute inset-0 -z-10">
        <div
          class="absolute top-0 left-0 h-full w-1/4 bg-mcm-orange opacity-70"
        ></div>
        <div
          class="absolute top-0 left-1/4 h-full w-1/6 bg-mcm-teal opacity-60"
        ></div>
        <div
          class="absolute top-0 left-[calc(1/4+1/6)] h-full w-1/5 bg-mcm-mint opacity-50"
        ></div>
        <div
          class="absolute top-0 right-0 h-full w-2/5 bg-mcm-mustard opacity-30"
        ></div>
      </div>

      <!-- Main invitation card - angled white section -->
      <div
        class="relative transform rotate-2 bg-white border-2 border-black p-6 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]"
      >
        <!-- Decorative starburst -->
        <div class="absolute top-6 right-8 w-16 h-16">
          <svg viewBox="0 0 100 100" class="w-full h-full text-amber-500">
            <path
              d="M50 0 L55 40 L95 45 L55 50 L50 90 L45 50 L5 45 L45 40 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <!-- Header -->
        <div class="mb-8 text-center">
          <h2
            class="text-lg text-center font-light tracking-widest text-amber-500 mb-2"
          >
            THE
          </h2>
          <h1
            class="text-4xl sm:text-6xl font-black tracking-tight text-gray-900 leading-tight"
          >
            Shafali's 50th <br />
          </h1>
          <div class="mt-4 flex items-center justify-center gap-4">
            <div class="h-px bg-amber-500 flex-grow"></div>
            <p
              class="text-xl sm:text-2xl font-light text-amber-500 uppercase tracking-wide"
            >
              You're Invited
            </p>
            <div class="h-px bg-amber-500 flex-grow"></div>
          </div>
        </div>
        <!-- Inside your template, you could add this before or after the main content section -->
        <!-- <div class="mt-8 mb-8 relative">
  <div class="relative overflow-hidden rounded-lg transform -rotate-1 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)]">
    <img 
      src="/images/IMG_3319.jpg" 
      alt="Shafali and the boys" 
      class="w-full h-auto object-cover"
    />
    <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
      <p class="text-white text-lg font-medium">Get ready to celebrate in style!</p>
    </div>
  </div>
</div> -->

        <!-- Photo frame (framed and smaller) -->
        <div class="photo-frame">
          <img
            src="/images/IMG_3319.jpg"
            alt="Shafali and the boys"
            class="w-full h-auto object-cover"
          />
          <div class="photo-border"></div>
          <div class="photo-caption">Get ready to celebrate in style!</div>
        </div>
        <!-- Content -->
        <div class="space-y-6 max-w-2xl mx-auto">
          <!-- Details with mid-century styling -->
          <div class="space-y-4 text-center">
            <div class="flex items-center justify-center gap-3">
              <div class="w-3 h-3 bg-amber-500 rounded-full"></div>
              <p class="text-lg font-normal tracking-wide">April 26th, 2025</p>
            </div>
            <div class="flex items-center justify-center gap-3">
              <div class="w-3 h-3 bg-amber-500 rounded-full"></div>
              <p class="text-lg font-normal tracking-wide">8:00 PM - LATE</p>
            </div>
            <div class="flex items-center justify-center gap-3">
              <div class="w-3 h-3 bg-amber-500 rounded-full"></div>
              <p class="text-lg font-normal tracking-wide">
                15767 Castlewoods Drive, Los Angeles, CA
              </p>
            </div>
          </div>

          <p class="text-center text-gray-700 px-4 leading-relaxed">
            We have <span class="font-bold">FIVE decades</span> worth of
            celebrating to do, so wear comfy shoes, take some advil, and come
            ready to boogie!
          </p>

          <p class="text-center text-gray-700 px-4 leading-relaxed italic">
            &mdash; Shafali and the boys
          </p>

          <div class="space-y-2 bg-amber-50 p-4 rounded-md">
            <h3 class="font-bold text-center text-gray-800 mb-2">
              Important Details
            </h3>
            <p class="text-gray-700 leading-relaxed text-sm">
              • We will have valet parking, but ride-shares are highly
              recommended
            </p>
            <p class="text-gray-700 leading-relaxed text-sm">
              • There will be plenty of spirits (and food) to consume!
            </p>
            <p class="text-gray-700 leading-relaxed text-sm">
              • Please, no gifts. I only ask that you upload pictures of us on
              this site, and then take one with me at the Photo Booth!
            </p>
          </div>

          <div class="space-y-2">
            <h3 class="font-bold text-center text-gray-800 mb-2">
              Hotel Options
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div class="bg-amber-50 p-2 rounded">
                <p class="font-medium">W Hotel</p>
                <p>930 Hilgard Avenue, Los Angeles, CA 90024</p>
                <p>Tel: 310-208-8765</p>
              </div>
              <div class="bg-amber-50 p-2 rounded">
                <p class="font-medium">Luxe Hotel</p>
                <p>11461 Sunset Blvd, Los Angeles, CA 90049</p>
                <p>Tel: 310-476-6571</p>
              </div>
              <div class="bg-amber-50 p-2 rounded">
                <p class="font-medium">Beverly Hills Marriott</p>
                <p>1150 South Beverly Drive, Los Angeles, CA 90035</p>
                <p>Tel: 310-553-6561</p>
              </div>
              <div class="bg-amber-50 p-2 rounded">
                <p class="font-medium">Montrose at Beverly Hills</p>
                <p>900 Hammond Street, West Hollywood, CA 90069</p>
                <p>Tel: 310-855-1115</p>
              </div>
              <div class="bg-amber-50 p-2 rounded md:col-span-2">
                <p class="font-medium">Courtyard Los Angeles Sherman Oaks</p>
                <p>15433 Ventura Blvd, Sherman Oaks, CA 91403</p>
                <p>Tel: 818-981-5400</p>
              </div>
            </div>
          </div>

          <!-- RSVP section -->
          <div
            class="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button @click="rsvpYes" class="mcm-button-teal">
              Count Me In
            </button>
            <button
              @click="rsvpNo"
              class="px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium tracking-wide uppercase hover:bg-gray-100 transition-colors duration-300 transform rotate-1"
            >
              Regretfully Decline
            </button>
          </div>
        </div>

        <!-- Footer -->
        <div class="mt-10 text-center">
          <p class="text-xs uppercase tracking-widest text-gray-500">
            A Mid-Century Modern Celebration
          </p>
        </div>
      </div>
    </div>

    <!-- Canvas for confetti -->
    <canvas
      ref="confettiCanvas"
      class="fixed inset-0 pointer-events-none z-50"
    ></canvas>
  </div>
</template>
<style scoped>
.photo-frame {
  width: 220px;
  height: 220px;
  margin: 0 auto 1.5rem;
  position: relative;
  transform: rotate(-3deg);
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
  border: 2px solid var(--mcm-mustard);
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
</style>
<script setup>
import { ref, onMounted } from "vue";
import confetti from "canvas-confetti";

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
    colors: ["#F59E0B", "#D97706", "#92400E", "#FBBF24", "#FEF3C7"],
  });
}

// Continuous confetti
const confettiCanvas = ref(null);
let confettiInterval = null;

onMounted(() => {
  // Create a confetti canvas instance
  const myConfetti = confetti.create(confettiCanvas.value, {
    resize: true,
    useWorker: true,
  });

  // Continuous light confetti with mid-century color palette
  confettiInterval = setInterval(() => {
    myConfetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ["#F59E0B", "#D97706", "#FBBF24"],
    });

    myConfetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ["#92400E", "#FEF3C7", "#F59E0B"],
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

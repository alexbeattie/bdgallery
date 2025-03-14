<template>
  <div 
    v-if="!hideOnPages.includes($route.path)"
    class="fixed bottom-6 right-6 z-30 floating-button-container"
  >
    <transition name="bounce">
      <button 
        v-if="showButton"
        @click="handleClick" 
        class="floating-upload-button flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white text-shafali-purple font-bold shadow-lg border-2 border-shafali-purple hover:bg-shafali-purple hover:text-white transform hover:scale-105 transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
        {{ buttonText }}
      </button>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/config';

export default {
  name: 'FloatingUploadButton',
  props: {
    hideOnPages: {
      type: Array,
      default: () => ['/upload']
    }
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const showButton = ref(true);
    const isLoggedIn = ref(false);
    const buttonText = ref('UPLOAD PHOTOS');
    
    // Check if user is logged in
    onMounted(() => {
      onAuthStateChanged(auth, (user) => {
        isLoggedIn.value = !!user;
      });
      
      // Hide button if we're scrolled to the top
      const handleScroll = () => {
        showButton.value = window.scrollY > 100;
      };
      
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
    
    // Adjust button text based on login status
    watch(isLoggedIn, (newValue) => {
      buttonText.value = newValue ? 'UPLOAD PHOTOS' : 'LOGIN TO UPLOAD';
    });
    
    // Handle button click - redirect to upload or login page
    const handleClick = () => {
      if (isLoggedIn.value) {
        router.push('/upload');
      } else {
    router.push('/auth-choice?redirect=/upload');
      }
    };
    
    return {
      showButton,
      buttonText,
      handleClick
    };
  }
};
</script>

<style scoped>
.floating-button-container {
  pointer-events: auto;
}

/* Bounce animation for the button */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Pulse animation for attention */
.floating-upload-button {
  animation: pulse 2s infinite;
}

/* Ensure hover text is white */
.floating-upload-button:hover {
  color: white;
}

/* Ensure the SVG inherits the white color on hover */
.floating-upload-button:hover svg {
  fill: white;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(108, 44, 155, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(108, 44, 155, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(108, 44, 155, 0);
  }
}
</style>


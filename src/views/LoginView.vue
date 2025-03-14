<template>
  <div class="min-h-screen bg-gradient-to-b from-purple-100 to-amber-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div class="p-8">
        <!-- Login access message with photo upload callout -->
        <div class="bg-shafali-very-light-purple p-5 rounded-lg mb-6 border-l-4 border-shafali-purple relative">
          <!-- Decorative camera icon -->
          <div class="absolute -right-2 -top-2 opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        
          <h2 class="text-xl font-bold text-shafali-dark-blue mb-2">Share Your Birthday Memories!</h2>
          <p class="text-shafali-dark-blue">
            Log in to view photos from Shafali's celebration and share your own memories by uploading photos.
          </p>
        </div>

        <div class="text-center mb-8">
          <div class="flex justify-center mb-4">
            <div class="w-12 h-12">
              <svg viewBox="0 0 100 100" class="w-full h-full text-shafali-purple">
                <path
                  d="M50 0 L55 40 L95 45 L55 50 L50 90 L45 50 L5 45 L45 40 Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
      <h2 class="text-3xl font-extrabold text-gray-900">Account Access</h2>
<p class="mt-2 text-gray-600">
  Sign in to upload photos and view the gallery
</p>

          
          <!-- Display redirect message if coming from protected route -->
          <div v-if="redirectMessage" class="mt-4 p-2 bg-shafali-very-light-purple rounded text-shafali-dark-blue">
            {{ redirectMessage }}
          </div>
        </div>

        <form @submit.prevent="login" class="space-y-6">
          <!-- Email field -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <input
                id="email"
                v-model="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-shafali-purple focus:border-shafali-purple"
              />
            </div>
          </div>

          <!-- Password field -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div class="mt-1">
              <input
                id="password"
                v-model="password"
                type="password"
                  autocomplete="current-password"

                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-shafali-purple focus:border-shafali-purple"
              />
            </div>
          </div>

          <!-- Remember me and forgot password -->
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                v-model="rememberMe"
                class="h-4 w-4 text-shafali-purple focus:ring-shafali-purple border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a href="#" @click.prevent="showResetPassword = true" class="font-medium text-shafali-purple hover:text-shafali-light-purple">
                Forgot your password?
              </a>
            </div>
          </div>

          <!-- Error message -->
          <div v-if="errorMessage" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded" role="alert">
            <p>{{ errorMessage }}</p>
          </div>

          <!-- Submit button -->
          <div>
          <button
  type="submit"
  class="w-full flex justify-center py-2 px-4 border-2 border-shafali-purple rounded-md shadow-sm text-sm font-medium text-black bg-shafali-purple hover:bg-white hover:text-shafali-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-shafali-purple transition-colors duration-200"
  :disabled="loading"
>
  <span v-if="loading">Signing in...</span>
  <span v-else>Sign in</span>
</button>
          </div>
        </form>

        <!-- Sign up link -->
        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600">
            Don't have an account?
            <router-link
              to="/signup"
              class="font-medium text-shafali-purple hover:text-shafali-light-purple"
            >
              Sign up now
            </router-link>
          </p>
        </div>
        
        <!-- Circular centered and linkable image -->
        <!-- <div class="flex justify-center mt-8">
          <a
            href="/party-invitation"
            class="inline-block"
            title="View Party Details"
          >
            <img 
              src="/images/50th.png" 
              alt="50th Birthday" 
              class="rounded-full w-24 h-24 object-cover border-2 border-shafali-purple hover:border-shafali-light-purple transition-colors duration-300"
            />
          </a>
        </div> -->
        
        <!-- Text link under image -->
        <!-- <div class="text-center mt-2">
          <a
            href="/party-invitation"
            class="text-shafali-purple hover:text-shafali-light-purple transition-colors duration-300"
          >
            View Party Details
          </a>
        </div> -->
      </div>
    </div>
    
    <!-- Password Reset Modal -->
    <div
      v-if="showResetPassword"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h3 class="text-xl font-semibold mb-4">Reset Your Password</h3>
        <p class="mb-4 text-gray-600">
          Enter your email address and we'll send you a link to reset your password.
        </p>

        <div v-if="resetSuccess" class="mb-4 p-3 bg-green-100 text-green-800 rounded">
          Password reset email sent! Check your inbox.
        </div>

        <div v-if="resetError" class="mb-4 p-3 bg-red-100 text-red-800 rounded">
          {{ resetError }}
        </div>

        <form @submit.prevent="handlePasswordReset">
          <input
            type="email"
              autocomplete="email"
            v-model="resetEmail"
            
            placeholder="Email address"
            class="w-full p-3 border rounded mb-4"
            required
          />

          <div class="flex justify-end space-x-3">
            <button
              type="button"
              @click="showResetPassword = false"
              class="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-shafali-purple text-white rounded hover:bg-shafali-light-purple"
              :disabled="resetLoading"
            >
              {{ resetLoading ? "Sending..." : "Send Reset Link" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/firebase/config';
import { useRouter, useRoute } from 'vue-router';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const rememberMe = ref(false);
    const errorMessage = ref('');
    const loading = ref(false);
    const router = useRouter();
    const route = useRoute();
    
    // Password reset state
    const showResetPassword = ref(false);
    const resetEmail = ref('');
    const resetLoading = ref(false);
    const resetError = ref('');
    const resetSuccess = ref(false);

    // Compute a message based on the redirect query param
    const redirectMessage = computed(() => {
      if (route.query.redirect) {
        const routeName = route.query.redirect.replace('/', '');
        return `Please log in to access the ${routeName} page`;
      }
      return '';
    });

    // Check for a saved email in localStorage
    onMounted(() => {
      const savedEmail = localStorage.getItem('rememberedEmail');
      if (savedEmail) {
        email.value = savedEmail;
        rememberMe.value = true;
      }
    });

    const login = async () => {
      loading.value = true;
      errorMessage.value = '';
      
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        
        // Save email if remember me is checked
        if (rememberMe.value) {
          localStorage.setItem('rememberedEmail', email.value);
        } else {
          localStorage.removeItem('rememberedEmail');
        }
        
        // Redirect to the requested page or to the gallery
        if (route.query.redirect) {
          router.push(route.query.redirect);
        } else {
          router.push('/gallery');
        }
      } catch (error) {
        console.error('Login error:', error);
        switch (error.code) {
          case 'auth/user-not-found':
            errorMessage.value = 'No account found with this email';
            break;
          case 'auth/wrong-password':
            errorMessage.value = 'Incorrect password';
            break;
          case 'auth/too-many-requests':
            errorMessage.value = 'Too many unsuccessful login attempts. Please try again later.';
            break;
          default:
            errorMessage.value = 'Failed to sign in. Please check your credentials.';
        }
      } finally {
        loading.value = false;
      }
    };
    
    const handlePasswordReset = async () => {
      resetLoading.value = true;
      resetError.value = '';
      resetSuccess.value = false;

      try {
        await sendPasswordResetEmail(auth, resetEmail.value);
        resetSuccess.value = true;

        // Auto-close the modal after a delay
        setTimeout(() => {
          showResetPassword.value = false;
          resetEmail.value = '';
        }, 5000);
      } catch (err) {
        console.error('Password reset error:', err);
        resetError.value = err.message;
      } finally {
        resetLoading.value = false;
      }
    };

    return {
      email,
      password,
      rememberMe,
      errorMessage,
      loading,
      login,
      redirectMessage,
      // Password reset
      showResetPassword,
      resetEmail,
      resetLoading,
      resetError,
      resetSuccess,
      handlePasswordReset
    };
  }
};
</script>

<style scoped>
/* Custom styling */
.min-h-screen {
  min-height: 100vh;
}

.bg-gradient-to-b {
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
}

.from-purple-100 {
  --tw-gradient-from: #ede9f5;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(237, 233, 245, 0));
}

.to-amber-50 {
  --tw-gradient-to: #fffbeb;
}

.rounded-xl {
  border-radius: 0.75rem;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.border-l-4 {
  border-left-width: 4px;
}

.transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.duration-300 {
  transition-duration: 300ms;
}

/* Focus ring styling */
input:focus, button:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-color: rgba(108, 44, 155, 0.5);
}

/* Animation for the camera icon in the callout */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.bg-shafali-very-light-purple {
  position: relative;
  overflow: hidden;
}

.bg-shafali-very-light-purple:hover svg {
  animation: float 3s ease-in-out infinite;
}
</style>
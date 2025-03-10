<template>
  <div class="min-h-screen flex flex-col justify-center items-center">
    <form @submit.prevent="handleLogin" class="p-8 bg-white shadow-md rounded-lg">
      <h2 class="text-2xl font-bold mb-4">Log in</h2>
      <p v-if="error" class="text-red-500 mb-4">{{ error }}</p>

      <input
        type="email"
        placeholder="Email"
        class="w-full p-2 border rounded mb-4"
        v-model="email"
        required
      />

      <input
        type="password"
        placeholder="Password"
        class="w-full p-2 border rounded mb-4"
        v-model="password"
        required
      />

      <!-- Add Forgot Password link here -->
      <div class="text-right mb-4">
        <a
          @click="showResetPassword = true"
          class="text-blue-600 hover:text-blue-800 cursor-pointer text-sm"
        >
          Forgot Password?
        </a>
      </div>

      <LoadingSpinner v-if="loading" />

      <button
        type="submit"
        :disabled="loading"
        class="w-full mcm-button mcm-button-teal text-white p-2 rounded"
      >
        {{ loading ? "Logging in..." : "Log In" }}
      </button>

      <p class="mt-4 text-center">
        Don't have an account?
        <router-link to="/signup" class="mcm-button mcm-button-orange"
          >Sign up</router-link
        >
      </p>
      
      <!-- Circular centered and linkable image -->
      <div class="flex justify-center mt-6">
        <a
          href="https://links.paperlesspost.com/ls/click?upn=u001.fp1Y-2B-2B6EsH5Pp5ZB1HM8Q9NOaIRTPFTb2Sy8VZ2FuNPBKHnYkKQYNY7A-2F4lerwiLSu-2BdVHhYu4EgYQCkWNwYZ5AJUWAy6xzjWzjzlkBd0Oez5CGYoBVui-2Fla7MGNpAJNmSw4UCBDDNf9mZ5X5RSPBa07sQ-2FZNdrwkt23TjNwHbUFT6iM2NsXdS9p2r6d-2F-2B8oKEZYeOwQnTO-2Fkq6eGTl7qT3vzN2rqrOfNjcog84TxR1XVK1DZgj9HqLuCkrNkk15cgDIyPb8WLCqeysyiMK0pQ-3D-3DOcPT_L9vtWzwsmwvk7wdq732xNBeptxflwyIYytUIrzm7xjQ0a6z45AVy67cX947Ciy5tqdzNrNmvrZ7JhLrEslyACku0h5lFnVL6B8PAoOtDuh5VaTudu5A-2BDLLyXr2VMY1SUCesY630Z7BOmVKU-2Fc7Yx7EJsgBXnuvvyEGVKLqwxD5QL78oFjVzcXi4c2Q5bIflgjmStcFaRBJP0QpaHFsfLhbsgeXJVbUm1rsIu7UUQ1XnpORSGolod3dsGckxwabT1uWU5SC6BEeYzo8Kcdy-2FtuhEOl2NkALuROU3aazuPJcX3feEKhQQdcx36cw-2FndMqN8SdyzWExcy2PJi5osUqHmSVRR7Oon-2FRRoRHjgwzKJbMzwHPDv0WkR20212mVKT3"
          class="inline-block"
          title="View Party Details"
        >
          <img 
            src="/public/images/50th.png" 
            alt="50th Birthday" 
            class="rounded-full w-24 h-24 object-cover border-2 border-mcm-teal hover:border-mcm-orange transition-colors duration-300"
          />
        </a>
      </div>
      
      <!-- Text link under image -->
      <div class="text-center mt-2">
        <a
          href="https://links.paperlesspost.com/ls/click?upn=u001.fp1Y-2B-2B6EsH5Pp5ZB1HM8Q9NOaIRTPFTb2Sy8VZ2FuNPBKHnYkKQYNY7A-2F4lerwiLSu-2BdVHhYu4EgYQCkWNwYZ5AJUWAy6xzjWzjzlkBd0Oez5CGYoBVui-2Fla7MGNpAJNmSw4UCBDDNf9mZ5X5RSPBa07sQ-2FZNdrwkt23TjNwHbUFT6iM2NsXdS9p2r6d-2F-2B8oKEZYeOwQnTO-2Fkq6eGTl7qT3vzN2rqrOfNjcog84TxR1XVK1DZgj9HqLuCkrNkk15cgDIyPb8WLCqeysyiMK0pQ-3D-3DOcPT_L9vtWzwsmwvk7wdq732xNBeptxflwyIYytUIrzm7xjQ0a6z45AVy67cX947Ciy5tqdzNrNmvrZ7JhLrEslyACku0h5lFnVL6B8PAoOtDuh5VaTudu5A-2BDLLyXr2VMY1SUCesY630Z7BOmVKU-2Fc7Yx7EJsgBXnuvvyEGVKLqwxD5QL78oFjVzcXi4c2Q5bIflgjmStcFaRBJP0QpaHFsfLhbsgeXJVbUm1rsIu7UUQ1XnpORSGolod3dsGckxwabT1uWU5SC6BEeYzo8Kcdy-2FtuhEOl2NkALuROU3aazuPJcX3feEKhQQdcx36cw-2FndMqN8SdyzWExcy2PJi5osUqHmSVRR7Oon-2FRRoRHjgwzKJbMzwHPDv0WkR20212mVKT3"
          class="text-mcm-teal hover:text-mcm-orange transition-colors duration-300"
        >
          View Party Details
        </a>
      </div>
    </form>

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
              class="px-4 py-2 mcm-button mcm-button-teal text-white rounded"
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
import { ref } from "vue";
import { useRouter } from "vue-router";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/config";
import LoadingSpinner from "../components/LoadingSpinner.vue";

export default {
  name: "LoginView",
  components: {
    LoadingSpinner,
  },
  setup() {
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const error = ref("");
    const loading = ref(false);

    // Password reset state
    const showResetPassword = ref(false);
    const resetEmail = ref("");
    const resetLoading = ref(false);
    const resetError = ref("");
    const resetSuccess = ref(false);

    const handleLogin = async () => {
      loading.value = true;
      error.value = "";
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        router.push("/upload");
      } catch (err) {
        console.error("Login error:", err);
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    const handlePasswordReset = async () => {
      resetLoading.value = true;
      resetError.value = "";
      resetSuccess.value = false;

      try {
        await sendPasswordResetEmail(auth, resetEmail.value);
        resetSuccess.value = true;

        // Auto-close the modal after a delay
        setTimeout(() => {
          showResetPassword.value = false;
          resetEmail.value = "";
        }, 5000);
      } catch (err) {
        console.error("Password reset error:", err);
        resetError.value = err.message;
      } finally {
        resetLoading.value = false;
      }
    };

    return {
      email,
      password,
      error,
      loading,
      handleLogin,
      // Password reset
      showResetPassword,
      resetEmail,
      resetLoading,
      resetError,
      resetSuccess,
      handlePasswordReset,
    };
  },
};
</script>

<style scoped>
/* Your existing styles plus these additions */
.text-blue-600 {
  color: #2563eb;
}

.hover\:text-blue-800:hover {
  color: #1e40af;
}

.cursor-pointer {
  cursor: pointer;
}

.fixed {
  position: fixed;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.z-10 {
  z-index: 10;
}

.bg-opacity-50 {
  --tw-bg-opacity: 0.5;
}

.max-w-md {
  max-width: 28rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.font-semibold {
  font-weight: 600;
}

.text-gray-600 {
  color: #4b5563;
}

.bg-green-100 {
  background-color: #d1fae5;
}

.text-green-800 {
  color: #065f46;
}

.bg-red-100 {
  background-color: #fee2e2;
}

.text-red-800 {
  color: #991b1b;
}

.p-3 {
  padding: 0.75rem;
}

.space-x-3 > * + * {
  margin-left: 0.75rem;
}

.text-gray-700 {
  color: #374151;
}

.hover\:bg-gray-100:hover {
  background-color: #f3f4f6;
}

.text-right {
  text-align: right;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

/* Circular image styles */
.rounded-full {
  border-radius: 9999px;
}

.w-24 {
  width: 6rem;
}

.h-24 {
  height: 6rem;
}

.object-cover {
  object-fit: cover;
}

.text-mcm-teal {
  color: var(--mcm-teal, #008080);
}

.text-mcm-orange {
  color: var(--mcm-orange, #FF6B35);
}

.hover\:text-mcm-orange:hover {
  color: var(--mcm-orange, #FF6B35);
}

.border-mcm-teal {
  border-color: var(--mcm-teal, #008080);
}

.hover\:border-mcm-orange:hover {
  border-color: var(--mcm-orange, #FF6B35);
}

.transition-colors {
  transition-property: color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.duration-300 {
  transition-duration: 300ms;
}
</style>
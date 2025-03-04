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

      <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded">
        Log In
      </button>

      <p class="mt-4 text-center">
        Don't have an account? <router-link to="/signup" class="text-blue-500">Sign up</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export default {
  name: 'LoginView',
  setup() {
    const router = useRouter();
    const email = ref('');
    const password = ref('');
    const error = ref('');

    const handleLogin = async () => {
      error.value = '';
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        router.push('/upload');
      } catch (err) {
        console.error('Login error:', err);
        error.value = err.message;
      }
    };

    return {
      email,
      password,
      error,
      handleLogin
    };
  }
};
</script>

<style scoped>
/* Tailwind-like classes */
.min-h-screen {
  min-height: 100vh;
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

.p-8 {
  padding: 2rem;
}

.bg-white {
  background-color: white;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.rounded-lg {
  border-radius: 0.5rem;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.font-bold {
  font-weight: 700;
}

.mb-4 {
  margin-bottom: 1rem;
}

.text-red-500 {
  color: #ef4444;
}

.w-full {
  width: 100%;
}

.p-2 {
  padding: 0.5rem;
}

.border {
  border-width: 1px;
}

.rounded {
  border-radius: 0.25rem;
}

.bg-blue-500 {
  background-color: #3b82f6;
}

.text-white {
  color: white;
}

.mt-4 {
  margin-top: 1rem;
}

.text-center {
  text-align: center;
}

.text-blue-500 {
  color: #3b82f6;
}
</style>
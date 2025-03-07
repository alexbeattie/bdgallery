<template>
  <div class="min-h-screen flex flex-col justify-center items-center">
    <form @submit.prevent="handleSignup" class="p-8 bg-white shadow-md rounded-lg">
      <h2 class="text-2xl font-bold mb-4">Create an Account</h2>
      <p v-if="error" class="text-red-500 mb-4">{{ error }}</p>

      <input
        type="text"
        placeholder="Your Name"
        class="w-full p-2 border rounded mb-4"
        v-model="name"
        required
      />

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

      <input
        type="password"
        placeholder="Confirm Password"
        class="w-full p-2 border rounded mb-4"
        v-model="confirmPassword"
        required
      />
      <LoadingSpinner v-if="loading" />

      <button
        type="submit"
        :disabled="loading"
        class="w-full mcm-button mcm-button-teal text-white p-2 rounded"
      >
        {{ loading ? "Creating account..." : "Sign Up" }}
      </button>

      <p class="mt-4 text-center">
        Already have an account?
        <router-link to="/login" class="mcm-button mcm-button-orange">Log in</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import LoadingSpinner from "../components/LoadingSpinner.vue";

export default {
  name: "SignupView",
  components: {
    LoadingSpinner,
  },
  setup() {
    const router = useRouter();
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const error = ref("");
    const loading = ref(false);

    const handleSignup = async () => {
      error.value = "";

      if (password.value !== confirmPassword.value) {
        error.value = "Passwords do not match";
        return;
      }
      loading.value = true;

      try {
        console.log("Creating authentication record...");
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.value,
          password.value
        );
        const user = userCredential.user;

        try {
          console.log("Storing user data in Firestore...");
          await setDoc(doc(db, "users", user.uid), {
            name: name.value,
            email: email.value,
            createdAt: serverTimestamp(),
          });
        } catch (firestoreError) {
          console.error("Error creating Firestore document:", firestoreError);
        }

        router.push("/upload");
      } catch (err) {
        console.error("Signup error:", err);
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    return {
      name,
      email,
      password,
      confirmPassword,
      error,
      loading,
      handleSignup,
    };
  },
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

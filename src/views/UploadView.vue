<template>
  <div class="min-h-screen p-4 flex flex-col justify-center items-center bg-[#fefcff]">
    <main class="py-16 flex-1 flex flex-col justify-center items-center text-center max-w-4xl w-full">
      <h1 class="m-0 mb-8 text-4xl font-bold bg-gradient-to-r from-[#ff6b6b] via-[#ff9e7d] to-[#ffd670] text-transparent bg-clip-text">
        Share Your Memories
      </h1>

      <button
        @click="handleLogout"
        class="mb-6 px-4 py-2 bg-gray-200 rounded-md"
      >
        Logout
      </button>

      <div v-if="loading" class="text-lg">Loading...</div>

      <div v-else-if="!submitted">
        <form
          @submit.prevent="handleSubmit"
          class="bg-white rounded-lg shadow-md p-8 w-full max-w-2xl text-left"
        >
          <div class="mb-6">
            <label for="name" class="block mb-2 font-medium">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              v-model="name"
              placeholder="Enter your name"
              class="w-full p-3 border border-gray-300 rounded-md text-base"
            />
          </div>

          <div class="mb-6">
            <label for="message" class="block mb-2 font-medium">
              Your Birthday Message:
            </label>
            <textarea
              id="message"
              v-model="message"
              placeholder="Write a birthday wish or share a memory..."
              class="w-full p-3 border border-gray-300 rounded-md text-base"
              rows="4"
            ></textarea>
          </div>

          <div class="mb-6">
            <label for="images" class="block mb-2 font-medium">
              Select Photos:
            </label>
            <input
              type="file"
              id="images"
              @change="handleFileChange"
              multiple
              accept="image/*"
              class="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>

          <div v-if="previewUrls.length > 0" class="mb-6">
            <h3 class="mb-2 font-medium">Image Previews:</h3>
            <div class="grid grid-cols-3 gap-2 sm:grid-cols-4">
              <div
                v-for="(url, index) in previewUrls"
                :key="index"
                class="aspect-square overflow-hidden rounded border border-gray-200"
              >
                <img
                  :src="url"
                  :alt="`Preview ${index + 1}`"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="w-full bg-gradient-to-r from-[#ff6b6b] to-[#ff9e7d] text-white border-none py-3 px-6 rounded-md text-base cursor-pointer transition-all hover:translate-y-[-2px] hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed mb-4"
            :disabled="uploading"
          >
            {{ uploading ? "Uploading..." : "Submit" }}
          </button>
        </form>
      </div>

      <div v-else class="bg-white rounded-lg shadow-md p-8 w-full max-w-2xl text-center mb-6">
        <h2 class="text-[#ff6b6b] text-2xl font-bold mb-4">
          Thank You!
        </h2>
        <p class="mb-6">
          Your photos and message have been uploaded successfully.
        </p>
        <router-link to="/gallery">
          <button class="bg-gradient-to-r from-[#ff6b6b] to-[#ff9e7d] text-white border-none py-3 px-6 rounded-md text-base cursor-pointer transition-all hover:translate-y-[-2px] hover:shadow-md w-full mb-4">
            View Gallery
          </button>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth, storage, db } from '../firebase/config';

export default {
  name: 'UploadView',
  setup() {
    const router = useRouter();
    const user = ref(null);
    const loading = ref(true);
    const name = ref('');
    const message = ref('');
    const images = ref([]);
    const uploading = ref(false);
    const submitted = ref(false);
    const previewUrls = ref([]);
    const error = ref('');
    
    let unsubscribe = null;

    onMounted(() => {
      unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          console.log("User authenticated:", currentUser.email);
          user.value = currentUser;
        } else {
          console.error("User NOT authenticated");
          user.value = null;
          router.push("/login"); // Redirect to login if not authenticated
        }
        loading.value = false;
      });
    });

    onUnmounted(() => {
      if (unsubscribe) unsubscribe();
    });

    const handleLogout = async () => {
      try {
        await signOut(auth);
        router.push("/login");
      } catch (error) {
        console.error("Logout error:", error);
      }
    };
    const uploadImage = async (file) => {
  try {
    const timestamp = Date.now()
    const fileName = `${timestamp}-${file.name}`
    const storageReference = storageRef(storage, `birthday-images/${fileName}`)
    
    // Upload the file
    const snapshot = await uploadBytes(storageReference, file)
    
    // Get download URL
    const downloadURL = await getDownloadURL(snapshot.ref)
    console.log('Upload successful:', downloadURL)
    return downloadURL
    
  } catch (error) {
    console.error('Upload error:', error)
    throw error
  }
}

    const handleFileChange = (e) => {
      const selectedFiles = Array.from(e.target.files);
      images.value = selectedFiles;

      // Create preview URLs
      previewUrls.value = [];
      selectedFiles.forEach(file => {
        previewUrls.value.push(URL.createObjectURL(file));
      });
    };

    const handleSubmit = async () => {
      if (!user.value) {
        alert("You must be logged in to upload images.");
        return;
      }

      if (images.value.length === 0) {
        alert("Please select at least one image");
        return;
      }

      uploading.value = true;
      error.value = '';

      try {
        const uploadPromises = images.value.map(async (image, index) => {
          console.log(`Processing image ${index}: ${image.name}`);

          // Create a storage reference directly
          const fileName = `${Date.now()}-${image.name}`;
          const fileRef = storageRef(storage, `birthday-images/${fileName}`);
          
          // Upload directly to Firebase Storage
          console.log(`Uploading image ${index} directly to Firebase Storage`);
          const uploadResult = await uploadBytes(fileRef, image);
          console.log(`Image ${index} uploaded successfully`);
          
          // Get download URL
          const downloadURL = await getDownloadURL(uploadResult.ref);
          console.log(`Download URL for image ${index}:`, downloadURL);
          
          // Add to Firestore
          try {
            const docRef = await addDoc(collection(db, "birthdayImages"), {
              url: downloadURL,
              sender: name.value || "Anonymous",
              message: message.value || "",
              fileName: fileName,
              userId: user.value.uid,
              timestamp: serverTimestamp(),
            });
            console.log(`Firestore document created for image ${index}:`, docRef.id);
          } catch (firestoreError) {
            console.error(`Firestore error for image ${index}:`, firestoreError);
            // Continue even if Firestore fails
          }
          
          return downloadURL;
        });

        const urls = await Promise.all(uploadPromises);
        console.log("All uploads completed successfully:", urls);

        submitted.value = true;
        uploading.value = false;
        images.value = [];
        message.value = "";
        previewUrls.value = [];
      } catch (error) {
        console.error("Upload error:", error);
        uploading.value = false;
        alert(`There was an error uploading your images: ${error.message}`);
      }
    };

    return {
      user,
      loading,
      name,
      message,
      images,
      uploading,
      submitted,
      previewUrls,
      error,
      handleLogout,
      handleFileChange,
      handleSubmit
    };
  }
};
</script>

<style scoped>
/* Tailwind-like styling */
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

.bg-\[\#fefcff\] {
  background-color: #fefcff;
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

.w-full {
  width: 100%;
}

.m-0 {
  margin: 0;
}

.mb-8 {
  margin-bottom: 2rem;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
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

.mb-6 {
  margin-bottom: 1.5rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.bg-gray-200 {
  background-color: #e5e7eb;
}

.rounded-md {
  border-radius: 0.375rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
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

.p-8 {
  padding: 2rem;
}

.max-w-2xl {
  max-width: 42rem;
}

.text-left {
  text-align: left;
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

.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.bg-gray-50 {
  background-color: #f9fafb;
}

.grid {
  display: grid;
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.gap-2 {
  gap: 0.5rem;
}

.aspect-square {
  aspect-ratio: 1 / 1;
}

.overflow-hidden {
  overflow: hidden;
}

.border-gray-200 {
  border-color: #e5e7eb;
}

.h-full {
  height: 100%;
}

.object-cover {
  object-fit: cover;
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

.disabled\:opacity-70:disabled {
  opacity: 0.7;
}

.disabled\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}

.mb-4 {
  margin-bottom: 1rem;
}

.text-\[\#ff6b6b\] {
  color: #ff6b6b;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

@media (min-width: 640px) {
  .sm\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
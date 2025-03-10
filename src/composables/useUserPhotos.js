// src/composables/useUserPhotos.js
import { ref, computed, watch, isRef } from 'vue';
import {
  collection, query, where, getDocs,
  doc, updateDoc, deleteDoc, serverTimestamp
} from 'firebase/firestore';
import { ref as storageRef, deleteObject } from 'firebase/storage';
import { db, storage } from '../firebase/config';

export function useUserPhotos(userIdRef) {
  const photos = ref([]);
  const loading = ref(true);
  const error = ref(null);

  // Computed properties
  const photoCount = computed(() => photos.value.length);

  // Method to fetch user's photos
  const fetchUserPhotos = async (uid) => {
    if (!uid) {
      console.log("No user ID provided, skipping photo fetch");
      loading.value = false;
      return;
    }

    loading.value = true;
    error.value = null;

    try {
      console.log('Fetching photos for user:', uid);
      const q = query(
        collection(db, 'birthdayImages'),
        where('userId', '==', uid) // This should be a string, not a ref
      );

      const querySnapshot = await getDocs(q);
      const fetchedPhotos = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate()
      }));

      console.log(`Found ${fetchedPhotos.length} photos for user:`, uid);
      photos.value = fetchedPhotos;
    } catch (err) {
      console.error('Error fetching user photos:', err);
      error.value = 'Failed to load photos. Please try again.';
    } finally {
      loading.value = false;
    }
  };

  // Method to add a new photo
  const addPhoto = (photo) => {
    photos.value = [photo, ...photos.value];
  };

  // Method to update a photo
  const updatePhoto = async (photoId, updates) => {
    try {
      // Update document in Firestore
      await updateDoc(doc(db, 'birthdayImages', photoId), {
        ...updates,
        updatedAt: serverTimestamp()
      });

      // Update local state
      const index = photos.value.findIndex(p => p.id === photoId);
      if (index !== -1) {
        photos.value[index] = { ...photos.value[index], ...updates };
      }

      return true;
    } catch (err) {
      console.error('Error updating photo:', err);
      throw err;
    }
  };

  // Method to delete a photo
  const deletePhoto = async (photoId, fileName) => {
    try {
      // Delete from storage if fileName is provided
      if (fileName) {
        const imageRef = storageRef(storage, `birthday-images/${fileName}`);
        await deleteObject(imageRef);
      }

      // Delete from Firestore
      await deleteDoc(doc(db, 'birthdayImages', photoId));

      // Update local state
      photos.value = photos.value.filter(p => p.id !== photoId);

      return true;
    } catch (err) {
      console.error('Error deleting photo:', err);
      throw err;
    }
  };

  // Watch for userId changes
  watch(() => {
    // Handle both ref and direct value
    const uid = isRef(userIdRef) ? userIdRef.value : userIdRef;
    if (uid) {
      fetchUserPhotos(uid);
    } else {
      photos.value = [];
    }
  }, { immediate: true });

  return {
    photos,
    photoCount,
    loading,
    error,
    fetchUserPhotos,
    addPhoto,
    updatePhoto,
    deletePhoto
  };
}
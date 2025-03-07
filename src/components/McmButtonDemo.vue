<template>
  <div class="p-8">
    <h2 class="text-2xl font-bold mb-6">Mid-Century Modern Buttons</h2>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <McmButton color="orange" @click="showAlert('Orange button clicked!')">
        Orange Button
      </McmButton>
      
      <McmButton color="teal" @click="showAlert('Teal button clicked!')">
        Teal Button
      </McmButton>
      
      <McmButton color="mint" @click="showAlert('Mint button clicked!')">
        Mint Button
      </McmButton>
      
      <McmButton color="mustard" @click="showAlert('Mustard button clicked!')">
        Mustard Button
      </McmButton>
    </div>
    
    <p v-if="message" class="mt-4 p-3 bg-gray-100 rounded">{{ message }}</p>
  </div>
</template>

<script>
import McmButton from './McmButton.vue';

export default {
  name: 'McmButtonDemo',
  components: {
    McmButton
  },
  data() {
    return {
      message: ''
    };
  },
  methods: {
    showAlert(msg) {
      this.message = msg;
      alert(msg);
    }
  }
};
</script>
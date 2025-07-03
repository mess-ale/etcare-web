<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-md rounded-lg p-8 text-center">
      
      <div class="success-img">
        <img src="/PngItem_3416354.png" alt="success image" />
      </div>
      <!-- Success Message -->
      <h1 class="text-2xl font-bold text-primary mb-4">Submission Successful!</h1>
      <p class="text-primary mb-12">
        Thank you for completing the form. Your submission has been received successfully. We’ll get back to you soon.
      </p>

      <!-- Back Button -->
      <nuxt-link to="/" class="etcare-button p xxxs:px-4 xxxs:py-2 md:px-10 md:py-2 xxxs:text-xs md:text-base">
        Back to Home
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

useHead({
  title: 'Success - Etcare SACCOs Ltd',
});
const title = "Success Page";
</script>

<style scoped>
.success-img {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.5rem;
}

img {
  width: 5rem;
  height: 5rem;
}
</style>

<template>
  <nuxt-link class="blog-button" :to="`/blog/${blog_id}`">
    <div class="blog-card bg-white shadow-md overflow-hidden">
      <!-- Blog Title -->
      <div class="bg-white xxxs:px-4 md:px-6 xxxs:py-2 md:py-4">
        <nuxt-link :to="`/blog/${blog_id}`">
          <h2 class="text-xl truncate font-bold xxxs:mb-1 md:mb-2 text-secondary transition-all duration-450">
            {{ title }}
          </h2>
        </nuxt-link>
      </div>

      <!-- Blog Image and Content -->
      <div class="bg-gray-200 px-6 py-4">
        <img :src="`https://django.etcaresacco.com${image}`" alt="Blog Image" class="w-full h-auto  mb-4">
        <p class="text-primary truncate">{{ content }}</p>
      </div>

      <!-- Author and Read More Section -->
      <div class="bg-white xxxs:p-4 md:p-6 flex justify-between items-center">
        <div>
          <p class="text-gray-400 text-sm">By EtCare</p>
        </div>
        <div class="flex">
          <p class="text-gray-400 text-sm">Date: {{ publishedAt }}</p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    summary: { type: String, default: "" },
    image: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    publishedAt: { type: String, required: true },
    blog_id: { type: Number, required: true },
  },
};
</script>

<style scoped>
.blog-button {
  transition: all .5s ease-in-out;
  border-radius: 15px;
}

.blog-button:hover {
  transform: scale(1.03);
  box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.1);
}

.blog-button:hover h2 {
  color: theme('colors.primary');
}
</style>
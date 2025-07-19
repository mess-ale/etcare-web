<template>
  <nuxt-link class="blog-button" :to="`/blog/${blog_id}`">
    <div class="blog-card bg-white shadow-md overflow-hidden">
      <!-- Blog Title -->
      <div class="bg-white blog-title">
        <nuxt-link :to="`/blog/${blog_id}`">
          <h2
            class="text-xl truncate font-bold xxxs:mb-1 md:mb-2 text-secondary transition-all duration-450"
          >
            {{ title }}
          </h2>
        </nuxt-link>
      </div>

      <div v-if="link" class="video-wrapper">
        <iframe
          width="1500px"
          height="844px"
          src="https://www.youtube.com/embed/VGi-edO1wXk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <!-- Blog Image and Content -->
      <div v-else class="bg-gray-200 blog-title">
        <img
          :src="`https://django.etcaresacco.com${image}`"
          alt="Blog Image"
          class="w-full h-auto mb-4"
        />
        <p class="text-primary truncate">{{ content }}</p>
      </div>

      <!-- Author and Read More Section -->
      <div class="bg-white blog-title flex justify-between items-center">
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
    link: { type: String, default: "" },
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
  transition: all 0.5s ease-in-out;
  border-radius: 15px;
}

.blog-button:hover {
  transform: scale(1.03);
  box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.1);
}

.blog-button:hover h2 {
  color: theme("colors.primary");
}

.blog-title {
  padding: min(0.8rem, 7%) min(1.5rem, 7%);
}

.video-wrapper {
  position: relative;
  padding-bottom: 66.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  max-width: 100%;
}

.video-wrapper iframe,
.video-wrapper video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

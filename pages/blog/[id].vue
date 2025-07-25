<template>
  <div class="p-6 max-w-4xl mx-auto body-padding_margin">
    <div class="container">
      <!-- Loading State -->
      <div v-if="isLoading" class="space-y-6 py-32 text-center text-blue-500">
        <LoadingPage />
      </div>

      <!-- Error State -->
      <div v-if="error" class="text-center text-red-500">
        {{ error }}
      </div>

      <!-- Blog Details -->
      <div v-if="blogData && !isLoading" class="space-y-6 py-32">
        <h1 class="blog-title-detail font-bold text-primary">
          {{ blogData.title }}
        </h1>
        <div class="text-primary text-sm">
          By <span class="font-medium">EtCare</span> | Event Date:
          {{ blogData.event_date }}
        </div>
        <img
          v-if="!blogData.link"
          :src="`https://django.etcaresacco.com${blogData.blog_image}`"
          alt="Blog Image"
          class="rounded-lg shadow-md w-full"
        />

        <div v-else class="video-wrapper">
          <iframe
            :src="blogData.link"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p class="text-lg leading-7 text-primary text-justify">
          {{ blogData.content }}
        </p>

        <div class="flex justify-between space-x-12 pt-2 social-link">
          <nuxt-link to="https://web.facebook.com/etcaresacco" target="_blank"
            ><svg
              class="socialM about-link"
              xmlns="http://www.w3.org/2000/svg"
              width="2.7em"
              height="2.7em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
              ></path></svg
          ></nuxt-link>

          <nuxt-link
            to="https://www.youtube.com/@etcarebeautyandcosmeticssales"
            target="_blank"
          >
            <svg
              class="socialM about-link"
              xmlns="http://www.w3.org/2000/svg"
              width="2.7em"
              height="2.7em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.244 4c.534.003 1.87.016 3.29.073l.504.022c1.429.067 2.857.183 3.566.38c.945.266 1.687 1.04 1.938 2.022c.4 1.56.45 4.602.456 5.339l.001.152v.174c-.007.737-.057 3.78-.457 5.339c-.254.985-.997 1.76-1.938 2.022c-.709.197-2.137.313-3.566.38l-.504.023c-1.42.056-2.756.07-3.29.072l-.235.001h-.255c-1.13-.007-5.856-.058-7.36-.476c-.944-.266-1.687-1.04-1.938-2.022c-.4-1.56-.45-4.602-.456-5.339v-.326c.006-.737.056-3.78.456-5.339c.254-.985.997-1.76 1.939-2.021c1.503-.419 6.23-.47 7.36-.476zM9.999 8.5v7l6-3.5z"
              ></path></svg
          ></nuxt-link>

          <nuxt-link to="https://vm.tiktok.com/ZMhQxWYC7/" target="_blank">
            <svg
              class="socialM about-link"
              xmlns="http://www.w3.org/2000/svg"
              width="2.7em"
              height="2.7em"
              viewBox="0 0 24 24"
            >
              <path
                d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74a2.89 2.89 0 0 1 2.31-4.64a2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                fill="currentColor"
              ></path></svg
          ></nuxt-link>

          <nuxt-link to="https://t.me/etcaresacco" target="_blank"
            ><svg
              class="socialM about-link"
              xmlns="http://www.w3.org/2000/svg"
              width="2.7em"
              height="2.7em"
              viewBox="0 0 24 24"
            >
              <path
                d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"
                fill="currentColor"
              ></path></svg
          ></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import LoadingPage from "~/components/LoadingPage.vue";
const { $axios } = useNuxtApp();
const route = useRoute();

const id = route.params.id; // Get blog ID from route params
const blogData = ref(null); // Blog data state
const error = ref(null); // Error message state
const isLoading = ref(false); // Loading state

// Fetch blog details
const fetchBlogDetails = async () => {
  isLoading.value = true;
  try {
    const response = await $axios.get(`/blog/${id}/`); // Adjust the URL to match your API
    blogData.value = response.data;
    useHead({
      title: `${blogData.value.title} - Etcare SACCOs Ltd`,
    });
  } catch (err) {
    if (err.response && err.response.status === 404) {
      error.value = "Blog not found";
    } else {
      error.value = "An error occurred while fetching the blog details";
    }
  } finally {
    isLoading.value = false;
  }
};

// Fetch the blog when the component mounts
onMounted(() => {
  fetchBlogDetails();
});
</script>

<style scoped>
.video-wrapper {
  border-radius: 0;
}

.video-wrapper:hover {
  scale: 1;
}

.social-link {
  display: flex;
  justify-content: center;
  align-items: center;
}

.blog-title-detail {
  font-size: clamp(1.4rem, calc(1.067vw + 1rem), 2.25rem);
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

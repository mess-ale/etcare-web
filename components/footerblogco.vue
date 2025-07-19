<template>
  <nuxt-link :to="`/blog/${blog_id}`" class="foter-button">
    <div class="flex items-center max-w-xs foter-class">
      <img :src="`https://django.etcaresacco.com${imageSrc}`" alt="Image"
        class="footerbloge-compo pr-3" />
      <div>
        <p class="text-sm">{{ description }}</p>
        <p class="text-sm font-bold mt-1">{{ date }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    description: { type: String, required: true },
    summary: { type: String, default: "" },
    imageSrc: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: String, required: true },
    blog_id: { type: Number, required: true },
  },
};
</script>

<style scoped>
.foter-class {
  transition: all 0.35s ease-in-out;
}

.foter-class:hover {
  font-weight: bold;
  transform: scale(1.04);
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.foter-class:not(:hover) {
  transform: scale(1.0);
  text-shadow: none;
}

.footerbloge-compo {
  width: 5.75rem;
  height: 5rem;
  border-radius: 0.25rem;  
}
</style>
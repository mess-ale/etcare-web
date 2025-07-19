<template>
  <div class="body-padding_margin">
    <div class="container">
      <div class="py-8">
        <!-- Image Slider -->
        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <img
            v-for="(photo, index) in visiblePhotos"
            :key="index"
            :src="photo.url"
            alt="Photo"
            class="slider-photo"
            @click="showPhoto(index)"
          />
        </div>

        <!-- Modal -->
        <div v-if="selectedPhoto !== null" class="modal" @click="closeModal">
          <img
            :src="photos[selectedPhoto].url"
            alt="Selected Photo"
            class="modal-img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageSlider",
  data() {
    return {
      photos: [
        { url: "/photo/gallary-1.jpg" },
        { url: "/photo/gallary-2.jpg" },
        { url: "/photo/gallary-3.jpg" },
        { url: "/photo/gallary-4.jpg" },
        { url: "/photo/gallary-5.jpg" },
        { url: "/photo/gallary-3.jpg" },
        { url: "/photo/gallary-4.jpg" },
        { url: "/photo/gallary-5.jpg" },
        { url: "/photo/gallary-3.jpg" },
        { url: "/photo/gallary-4.jpg" },
        { url: "/photo/gallary-5.jpg" },
      ],
      selectedPhoto: null,
      screenWidth: window.innerWidth,
    };
  },
  computed: {
    visiblePhotos() {
      if (this.screenWidth < 480) return this.photos.slice(0, 2);
      if (this.screenWidth < 768) return this.photos.slice(0, 3);
      if (this.screenWidth < 1024) return this.photos.slice(0, 4);
      return this.photos;
    },
  },
  mounted() {
    window.addEventListener("resize", this.updateScreenWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateScreenWidth);
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
    showPhoto(index) {
      this.selectedPhoto = index;
    },
    closeModal() {
      this.selectedPhoto = null;
    },
  },
};
</script>

<style scoped>
.slider-photo {
  width: 220px;
  height: 220px;
  object-fit: cover;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 8px;
  background-position: cover;
  transition: transform 0.3s ease-in-out;
}

.slider-photo:hover {
  transform: scale(1.05);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1111;
}

.modal-img {
  width: 90%;
  height: auto;
  max-height: 80%;
  object-fit: contain;
}
</style>

<template>
  <div class="body-padding_margin">
    <div class="container">
      <div class="py-8">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center"
        >
          <img
            v-for="(photo, index) in visiblePhotos"
            :key="index"
            :src="photo.url"
            alt="Photo"
            class="hover-photo"
            @click="showPhoto(getPhotoIndex(index))"
          />
        </div>

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
  data() {
    return {
      photos: [
        { url: "/photo/gallary-1.png" },
        { url: "/photo/gallary-2.png" },
        { url: "/photo/gallary-3.png" },
        { url: "/photo/gallary-4.png" },
        { url: "/photo/gallary-5.png" },
        { url: "/photo/gallary-6.png" },
        { url: "/photo/gallary-7.png" },
        { url: "/photo/gallary-8.png" },
        { url: "/photo/gallary-9.png" },
        { url: "/photo/gallary-10.png" },
      ],
      startIndex: 0,
      selectedPhoto: null,
      visibleCount: 5, // default
      interval: null,
    };
  },
  computed: {
    visiblePhotos() {
      const result = [];
      for (let i = 0; i < this.visibleCount; i++) {
        result.push(this.photos[(this.startIndex + i) % this.photos.length]);
      }
      return result;
    },
  },
  mounted() {
    this.setVisibleCount();
    window.addEventListener("resize", this.setVisibleCount);

    this.interval = setInterval(() => {
      this.startIndex = (this.startIndex + 1) % this.photos.length;
    }, 5000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
    window.removeEventListener("resize", this.setVisibleCount);
  },
  methods: {
    getPhotoIndex(offset) {
      return (this.startIndex + offset) % this.photos.length;
    },
    showPhoto(index) {
      this.selectedPhoto = index;
    },
    closeModal() {
      this.selectedPhoto = null;
    },
    setVisibleCount() {
      const width = window.innerWidth;
      if (width >= 1024) {
        this.visibleCount = 5;
      } else if (width >= 768) {
        this.visibleCount = 4;
      } else if (width >= 480) {
        this.visibleCount = 2;
      } else {
        this.visibleCount = 1;
      }
    },
  },
};
</script>

<style>
.hover-photo {
  max-width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.hover-photo:hover {
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

@media (min-width: 0) {
  .modal-img {
    max-width: 100%;
    height: auto;
    aspect-ratio: 1/1;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }
}

@media (min-width: 1024px) {
  .modal-img {
    width: 60%;
    height: 80%;
  }
}
</style>

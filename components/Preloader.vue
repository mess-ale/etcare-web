<template>
  <transition name="fade">
    <div v-if="loading" class="preloader">
      <div class="inner">
        <img src="/public/icon-logo.png" alt="Company Logo" class="logo" />
        <div class="spinner"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
    data() {
        return { loading: true };
    },
    mounted() {
        const images = document.querySelectorAll("img");
        let loadedCount = 0;
        const totalImages = images.length;

        if (totalImages === 0) {
            this.loading = false;
        } else {
            const checkLoad = () => {
                loadedCount++;
                if (loadedCount === totalImages) {
                    this.loading = false;
                }
            };

            images.forEach((img) => {
                img.onload = checkLoad;
                img.onerror = checkLoad;
                if (img.complete) {
                    checkLoad();
                }
            });
        }
    },
};
</script>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh; 
  height: 100dvh;
  background: #EEF4FF;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: scaleIn 0.6s ease-out;
}

.logo {
  width: 100px;
  margin-bottom: 20px;
}

.spinner {
  width: 45px;
  height: 45px;
  border: 5px solid #214080;
  border-top: 5px solid #D92A27;
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

/* Animations */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

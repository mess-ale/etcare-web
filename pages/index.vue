<template>
  <div class="etcare-home">
    <SwitchingStacks />

    <div class="bg-primary xxxs:py-4 md:py-8 xxl:py-12">
      <div class="body-padding_margin">
        <div class="container xxxs:space-y-4 md:space-y-6">
          <h1
            class="text-center font-oswald xxxs:text-3xl xxl:text-4xl font-bold text-background"
          >
            {{ $t("whoWeAreTitle") }}
          </h1>
          <p class="text-center font-roboto xxxs:text-1xl sm:text-2xl">
            {{ $t("whoWeAreText") }}
          </p>
          <div class="justify-center flex">
            <nuxt-link
              class="who-we-are-button items-center xxxs:text-lg md:text-lg xxl:text-xl font-oswald xxxs:space-x-2 md:space-x-4 flex font-roboto"
              to="/about"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m7.45 17.45l-1.4-1.4L9.075 13H2v-2h7.075L6.05 7.95l1.4-1.4L12.9 12zM13 17v-2h9v2zm0-8V7h9v2zm3 4v-2h6v2z"
                ></path>
              </svg>
              <span>{{ $t("learnMore") }}</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="xxxs:py-4 md:py-8">
      <div class="body-padding_margin">
        <div class="container">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              class="value-boje-section shadow-md xxxs:space-y-2 md:space-y-4"
            >
              <div class="flex items-bottoms">
                <img src="/vision.png" class="h-16 w-16" alt="vision" />
                <div class="cercle-nub">
                  <h1 class="cercle-nub-on font-bold text-2xl">
                    {{ $t("number.one") }}
                  </h1>
                </div>
              </div>
              <h3 class="text-3xl font-bold">{{ $t("visionTitle") }}</h3>
              <p>{{ $t("visionText") }}</p>
            </div>

            <div
              class="value-boje-section shadow-md xxxs:space-y-2 md:space-y-4"
            >
              <div class="flex items-bottoms">
                <img src="/Mission.png" class="h-16 w-16" alt="vision" />
                <div class="cercle-nub">
                  <h1 class="cercle-nub-on font-bold text-2xl">
                    {{ $t("number.two") }}
                  </h1>
                </div>
              </div>
              <h3 class="text-3xl font-bold">{{ $t("missionTitle") }}</h3>
              <p>
                {{ $t("missionText") }}
              </p>
            </div>

            <div
              class="value-boje-section shadow-md xxxs:space-y-2 md:space-y-4"
            >
              <div class="flex items-bottoms">
                <img src="/object.png" class="h-16 w-16" alt="vision" />
                <div class="cercle-nub">
                  <h1 class="cercle-nub-on font-bold text-2xl">
                    {{ $t("number.three") }}
                  </h1>
                </div>
              </div>
              <h3 class="text-3xl font-bold">{{ $t("valueTitle") }}</h3>
              <p>
                {{ $t("valueText") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="body-padding_margin">
      <div class="container">
        <div class="youtube-video-continar xxxs:mb-6 md:mb-12 xxxs:mt-2 md:mt-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-secondary">
            <div class="video-wrapper">
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

            <div class=" flex justify-center items-center">
              <div class="text-content">
                <h1 class="youtext-font font-oswald font-abyssinica">
                  {{ $t("youtubeVideotext1") }}
                </h1>

                <div class="flex justify-center item-center pt-8">
                  <nuxt-link
                    to="/blog/23"
                    class="etcare-button hero-title-button px-6 py-1 md:px-10 xxl:px-14 md:py-1 items-center font-oswald"
                  >
                    {{ $t("readMore") }}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="photo-g text-center py-8">
      <h1 class="font-oswald xxxs:text-3xl md:text-4xl xl:text-5xl">
        {{ $t("gallery") }}
      </h1>
    </div>

    <PhotoGallery />

    <div class="xxxs:py-4 md:py-8 mb-32">
      <div class="body-padding_margin blog-letest">
        <div class="container xxxs:space-y-4 md:space-y-6">
          <div class="flex justify-center pt-20">
            <img src="/logo1-removebg.png" alt="logo" />
          </div>

          <h1
            class="text-center text-primary font-oswald xxxs:text-sm md:text-xl"
          >
            {{ $t("blogHeader") }}
          </h1>

          <div class="flex justify-center pb-20">
            <p class="p-blog text-primary text-center font-oswald font-bold">
              {{ $t("blogSubHeader") }}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <blog-component
              v-for="(blog, index) in blogPostsLetest"
              :key="index"
              :blog_id="blog.blog_id"
              :title="blog.title"
              :link="blog.link"
              :image="blog.blog_image"
              :content="blog.content"
              author="EtCare"
              :publishedAt="blog.event_date"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $axios } = useNuxtApp();
import { ref, onMounted } from "vue";

const blogPostsLetest = ref([]);
const isLoading = ref(false);

useHead({
  title: "Etcare SACCOs Ltd",
});

const fetchBlogs = async () => {
  isLoading.value = true;
  try {
    const response = await $axios.get(`/LatestBlogs/`);
    blogPostsLetest.value = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchBlogs();
});
</script>

<style>
.video-wrapper {
  position: relative;
  padding-bottom: 66.25%; /* 16:9 aspect ratio */
  height: 0;
  /* border-radius: 8px; */
  overflow: hidden;
  max-width: 100%;
  transition: all 0.35s ease-in-out;
}

.video-wrapper:hover {
  scale: 1.01;
  border-radius: 3px;
}

.video-wrapper iframe,
.video-wrapper video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.youtube-video-continar {
  /* padding: min(1.5rem, 8%) min(2.5rem, 8%); */
  /* background-color: #ffcac9; */
  border-radius: 8px;
}

.youtext-font {
    font-size: clamp(1.125rem, calc(1.4vw + 0.65rem), 2rem);
    /* font-weight: bold; */
    text-align: center;
}

.etcare-home {
  overflow-x: hidden;
}

.blog-letest {
  background-image: url("/services-bg.png");
  background-size: cover;
  background-position: center;
}

.p-blog {
  /* padding: min(5em, 8%); */
  font-size: clamp(1rem, calc(4vw + 1rem), 2.25rem);
}

.value-boje-section {
  position: relative;
  background-color: #ffcac9;
  color: theme("colors.secondary");
  font-family: oswald, sans-serif;
  text-align: center;
  padding: min(1.5rem, 8%) min(2.5rem, 8%);
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  transition: color 1s ease;
  z-index: 1;
}

.value-boje-section:hover {
  color: #fff;
}

.value-boje-section::before {
  content: "";
  width: 0%;
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  border-radius: 8px;
  transition: width 1s ease;
  background: theme("colors.primary");
  z-index: -1;
}

.value-boje-section:hover::before {
  width: 100%;
}

@media (min-width: 200px) {
  .who-we-are-button {
    padding: 0.125rem 1.25rem;
    background-color: theme("colors.background");
    color: theme("colors.primary");
    border-radius: 5px;
    transition: color 1s, border 1s;
  }

  .who-we-are-button:hover {
    border: solid 2px theme("colors.secondary");
    color: theme("colors.secondary");
  }
}

@media (min-width: 500px) {
  .body-padding_margin {
    padding: 0 2.25rem;
  }
}

@media (min-width: 800px) {
  .body-padding_margin {
    padding: 0 3.5rem;
  }

  .who-we-are-button {
    padding: 0.35rem 2.25rem;
    background-color: theme("colors.background");
    color: theme("colors.primary");
    border-radius: 5px;
    transition: color 1s, border 1s;
  }

  .who-we-are-button:hover {
    border: solid 2px theme("colors.secondary");
    color: theme("colors.secondary");
  }
}

@media (min-width: 1200px) {
  .who-we-are-button {
    padding: 0.5rem 3rem;
    background-color: theme("colors.background");
    color: theme("colors.primary");
    border-radius: 5px;
    transition: color 1s, border 1s;
  }

  .who-we-are-button:hover {
    border: solid 2px theme("colors.secondary");
    color: theme("colors.secondary");
  }
}

.cercle-nub {
  width: 5rem;
  height: 5rem;
  border-radius: 2.5rem;
  color: #fff;
  background-color: theme("colors.secondary");
  margin-left: -1rem;
}

.cercle-nub-on {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.items-bottoms {
  display: flex;
  align-items: end;
  justify-content: center;
}

.photo-g {
  background-image: url("/photoG.png");
}
</style>

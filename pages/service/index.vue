<template>
    <div class=" font-sens text-justify">
        <ServiceCard :text="$t('servicespage.pagetitle')" imgservice="/service/service.png" />

        <div class="xxxs:py-6 md:py-10">
            <div class="body-padding_margin">
                <div class="container">
                    <div class="space-y-2 pb-2">
                        <h1
                            class="text-center text-primary font-oswald font-bold xxxs:text-2xl sm:text-3xl md:text-4xl">
                            {{ $t("servicespage.title") }}</h1>
                        <p
                            class="text-center text-primary font-light font-oswald xxxs:text-base sm:text-lg lg:text-base">
                            {{ $t("servicespage.description")}}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="xxxs:py-6 md:py-12 mb-32">
            <div class="body-padding_margin">
                <div class="container">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-0 service-body">
                        <div :class="{ 'onscreenleft': isVisibleleft1 }" class=" offscreenleft" ref="myElementleft1">
                            <img src="/service/saving.png" alt="Description" class="service-image" />
                        </div>
                        <div :class="{ 'onscreenright': isVisibleright1 }" class="offscreenright" ref="myElementright1">
                            <div class="space-y-4 xs:p-4">
                                <h1 class="text-secondary font-oswald xxxs:text-3xl md:text-4xl font-bold">{{ $t("servicespage.saving.title") }}</h1>
                                <p
                                    class="text-primary font-roboto text-xl text-justify xxxs:text-base sm:text-lg lg:text-xl">
                                    {{ $t("servicespage.saving.text") }}</p>
                                <div class="flex">
                                    <nuxt-link class="service-button items-center text-xl flex space-x-4 font-roboto"
                                        to="/service/saving">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="m7.45 17.45l-1.4-1.4L9.075 13H2v-2h7.075L6.05 7.95l1.4-1.4L12.9 12zM13 17v-2h9v2zm0-8V7h9v2zm3 4v-2h6v2z">
                                            </path>
                                        </svg>
                                        <span>{{ $t("servicespage.saving.button") }}</span>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div :class="{ 'onscreenleft': isVisibleleft2 }" class="offscreenleft" ref="myElementleft2">
                            <div class="space-y-4 xs:p-4">
                                <h1 class="text-secondary font-oswald xxxs:text-3xl md:text-4xl font-bold">{{ $t("servicespage.training.title") }}</h1>
                                <p
                                    class="text-primary font-roboto text-xl text-justify xxxs:text-base sm:text-lg lg:text-xl">
                                    {{ $t("servicespage.training.text") }}</p>
                                <div class="flex">
                                    <nuxt-link
                                        class="service-button items-center text-xl flex space-x-4 font-roboto"
                                        to="/service/training">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="m7.45 17.45l-1.4-1.4L9.075 13H2v-2h7.075L6.05 7.95l1.4-1.4L12.9 12zM13 17v-2h9v2zm0-8V7h9v2zm3 4v-2h6v2z">
                                            </path>
                                        </svg>
                                        <span>{{ $t("servicespage.training.button") }}</span>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div :class="{ 'onscreenright': isVisibleright2 }" class=" offscreenright"
                            ref="myElementright2">
                            <img src="/service/training.JPG" class="service-image" alt="saving" />
                        </div>
                        <div :class="{ 'onscreenleft': isVisibleleft3 }" class=" offscreenleft" ref="myElementleft3">
                            <img src="/service/equb.png" alt="saving" class="service-image" />
                        </div>
                        <div :class="{ 'onscreenright': isVisibleright3 }" class="offscreenright" ref="myElementright3">
                            <div class="space-y-4 xs:p-4">
                                <h1 class="text-secondary font-oswald xxxs:text-3xl md:text-4xl font-bold">{{ $t("servicespage.equb.title") }}</h1>
                                <p
                                    class="text-primary font-roboto text-xl text-justify xxxs:text-base sm:text-lg lg:text-xl">
                                    {{ $t("servicespage.equb.text") }}</p>
                                <div class="flex">
                                    <nuxt-link
                                        class="service-button items-center text-xl flex space-x-4 font-roboto"
                                        to="/service/equb">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="m7.45 17.45l-1.4-1.4L9.075 13H2v-2h7.075L6.05 7.95l1.4-1.4L12.9 12zM13 17v-2h9v2zm0-8V7h9v2zm3 4v-2h6v2z">
                                            </path>
                                        </svg>
                                        <span>{{ $t("servicespage.equb.button") }}</span>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div :class="{ 'onscreenleft': isVisibleleft4 }" class="offscreenleft" ref="myElementleft4">
                            <div class="space-y-4 xs:p-4">
                                <h1 class="text-secondary font-oswald xxxs:text-3xl md:text-4xl font-bold">{{ $t("servicespage.loan.title") }}</h1>
                                <p
                                    class="text-primary font-roboto text-xl text-justify xxxs:text-base sm:text-lg lg:text-xl">
                                    {{ $t("servicespage.loan.text") }}</p>
                                <div class="flex">
                                    <nuxt-link
                                        class="service-button items-center text-xl flex space-x-4 font-roboto"
                                        to="/service/loan">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="m7.45 17.45l-1.4-1.4L9.075 13H2v-2h7.075L6.05 7.95l1.4-1.4L12.9 12zM13 17v-2h9v2zm0-8V7h9v2zm3 4v-2h6v2z">
                                            </path>
                                        </svg>
                                        <span>{{ $t("servicespage.equb.button") }}</span>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div :class="{ 'onscreenright': isVisibleright4 }" class=" offscreenright"
                            ref="myElementright4">
                            <img src="/service/loan.png" alt="saving" class="service-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

useHead({
    title: 'Service - Etcare SACCOs Ltd',
});

const isVisibleleft1 = ref(false);
const isVisibleright1 = ref(false);
const isVisibleleft2 = ref(false);
const isVisibleright2 = ref(false);
const isVisibleleft3 = ref(false);
const isVisibleright3 = ref(false);
const isVisibleleft4 = ref(false);
const isVisibleright4 = ref(false);

const myElementleft1 = ref(null);
const myElementright1 = ref(null);
const myElementleft2 = ref(null);
const myElementright2 = ref(null);
const myElementleft3 = ref(null);
const myElementright3 = ref(null);
const myElementleft4 = ref(null);
const myElementright4 = ref(null);

const handleScroll = () => {
    if (myElementleft1.value && myElementright1.value && myElementleft2.value && myElementright2.value && myElementleft3.value && myElementright3.value && myElementleft4.value && myElementright4.value) {
        const rectleft1 = myElementleft1.value.getBoundingClientRect();
        const rectright1 = myElementright1.value.getBoundingClientRect();
        const rectleft2 = myElementleft2.value.getBoundingClientRect();
        const rectright2 = myElementright2.value.getBoundingClientRect();
        const rectleft3 = myElementleft3.value.getBoundingClientRect();
        const rectright3 = myElementright3.value.getBoundingClientRect();
        const rectleft4 = myElementleft4.value.getBoundingClientRect();
        const rectright4 = myElementright4.value.getBoundingClientRect();

        isVisibleleft1.value =
            rectleft1.top >= 0 && rectleft1.top <= window.innerHeight - 100 ||
            rectleft1.bottom >= 100 && rectleft1.bottom <= window.innerHeight;
        isVisibleright1.value =
            rectright1.top >= 0 && rectright1.top <= window.innerHeight - 100 ||
            rectright1.bottom >= 100 && rectright1.bottom <= window.innerHeight;
        isVisibleleft2.value =
            rectleft2.top >= 0 && rectleft2.top <= window.innerHeight - 100 ||
            rectleft2.bottom >= 100 && rectleft2.bottom <= window.innerHeight;
        isVisibleright2.value =
            rectright2.top >= 0 && rectright2.top <= window.innerHeight - 100 ||
            rectright2.bottom >= 100 && rectright2.bottom <= window.innerHeight;
        isVisibleleft3.value =
            rectleft3.top >= 0 && rectleft3.top <= window.innerHeight - 100 ||
            rectleft3.bottom >= 100 && rectleft3.bottom <= window.innerHeight;
        isVisibleright3.value =
            rectright3.top >= 0 && rectright3.top <= window.innerHeight - 100 ||
            rectright3.bottom >= 100 && rectright3.bottom <= window.innerHeight;
        isVisibleleft4.value =
            rectleft4.top >= 0 && rectleft4.top <= window.innerHeight - 100 ||
            rectleft4.bottom >= 100 && rectleft4.bottom <= window.innerHeight;
        isVisibleright4.value =
            rectright4.top >= 0 && rectright4.top <= window.innerHeight - 100 ||
            rectright4.bottom >= 100 && rectright4.bottom <= window.innerHeight;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
.offscreenleft {
    opacity: 0;
    transform: translateX(-100%);
    /* Adjust as needed */
    transition: opacity 1s ease-in-out, transform 1.5s ease-in-out;
}

.onscreenleft {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.offscreenright {
    opacity: 0;
    transform: translateX(100%);
    /* Adjust as needed */
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.onscreenright {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.box-image {
    transform: translateX(0);
    overflow-x: hidden;
}

.cover-service-img {
    background-image: url('../2.jpg');
    height: 33rem;
    display: flex;
    align-items: center;
    background-size: cover;
    background-position: center;
}

.service-body {
    overflow: hidden;
}

.service-button {
    background-color: theme('colors.primary');
    color: theme('colors.background');
    padding: 0.5rem 2rem;
    border-radius: 0.25rem;
    transition: all 1s ease;
}

.service-button:hover {
    color: theme('colors.secondary');
    background-color: theme('colors.white');
    border: solid 1px theme('colors.secondary');
}

.service-image {
    width: 100%;
    height: 100%;
}
</style>
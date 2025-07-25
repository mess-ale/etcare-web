<template>
  <div class="web-body font-abyssinica">
    <Preloader />

    <header
      :style="{ backgroundColor: headerBackgroundColor }"
      class="fixed z-in top-0 left-0 right-0 text-primary body-padding_margin"
    >
      <div class="container">
        <div class="flex items-center justify-between xs:h-20 md:h-24 xxl:h-32">
          <div class="w-1/4">
            <nuxt-link to="/"
              ><img
                class="xxxs:w-24 xxxs:h-10 sm:w-32 sm:h-12 md:w-32 md:h-16 xxl:w-34 xxl:h-20"
                src="/Etcare_logo1-removebg.png"
                alt="etcare logo"
              />
            </nuxt-link>
          </div>

          <div class="w-2/4 hidden lg:inline">
            <div
              class="lg:text-sm flex justify-center items-center xxl:text-lg"
            >
              <div
                class="lg:space-x-6 xxl:space-x-8 flex item-center font-bold"
              >
                <nuxt-link to="/" class="links">{{ $t("menu[0]") }}</nuxt-link>
                <div class="flex items-center dropdown-link">
                  <nuxt-link to="/service" class="links">{{
                    $t("menu[1]")
                  }}</nuxt-link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="ml-1"
                  >
                    <path fill="currentColor" d="m5 8l7 8l7-8z"></path>
                  </svg>
                  <ul class="dropdown font-bold font-Roboto">
                    <nuxt-link to="/service/saving">
                      <li>{{ $t("services[0]") }}</li>
                    </nuxt-link>
                    <nuxt-link to="/service/equb">
                      <li>{{ $t("services[1]") }}</li>
                    </nuxt-link>
                    <nuxt-link to="/service/loan">
                      <li>{{ $t("services[2]") }}</li>
                    </nuxt-link>
                    <nuxt-link to="/service/training">
                      <li>{{ $t("services[3]") }}</li>
                    </nuxt-link>
                  </ul>
                </div>
                <nuxt-link to="/about" class="links">{{
                  $t("menu[2]")
                }}</nuxt-link>
                <nuxt-link to="/blog" class="links">{{
                  $t("menu[3]")
                }}</nuxt-link>
                <nuxt-link to="/contact" class="links">{{
                  $t("menu[4]")
                }}</nuxt-link>
              </div>
            </div>
          </div>

          <!-- Slide-In Mobile Menu -->
          <transition name="slide">
            <div
              v-if="isMenuOpen"
              class="fixed inset-0 bg-primary text-white z-10 flex justify-center items-center flex-col items-start p-6 space-y-4 lg:hidden"
            >
              <button
                @click="toggleMenu"
                class="absolute top-6 z-100 right-8 self-end text-white text-3xl pr-6"
              >
                &times;
              </button>
              <ul class="space-y-4 items-center py-2 font-bold text-center">
                <li class="">
                  <nuxt-link to="/" @click="closeMenu">{{
                    $t("menu[0]")
                  }}</nuxt-link>
                </li>
                <li class="flex justify-center items-center">
                  <nuxt-link to="/service" @click="closeMenu">{{
                    $t("menu[1]")
                  }}</nuxt-link>
                  <svg
                    @click="toggleMenuservice"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="ml-1"
                  >
                    <path fill="currentColor" d="m5 8l7 8l7-8z"></path>
                  </svg>
                </li>

                <div
                  v-if="openMenuService"
                  class="w-full lg:hidden shadow-lg z-10"
                >
                  <ul class="space-y-4 py-2 font-bold text-center">
                    <li @click="closeMenuservice" class="">
                      <nuxt-link to="/service/saving">
                        {{ $t("services[0]") }}
                      </nuxt-link>
                    </li>
                    <li @click="closeMenuservice" class="">
                      <nuxt-link to="/service/equb">
                        {{ $t("services[1]") }}
                      </nuxt-link>
                    </li>
                    <li @click="closeMenuservice" class="">
                      <nuxt-link to="/service/loan">
                        {{ $t("services[2]") }}
                      </nuxt-link>
                    </li>
                    <li @click="closeMenuservice">
                      <nuxt-link to="/service/training">
                        {{ $t("services[3]") }}
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
                <li class="">
                  <nuxt-link to="/about" @click="closeMenu">{{
                    $t("menu[2]")
                  }}</nuxt-link>
                </li>
                <li class="">
                  <nuxt-link to="/blog" @click="closeMenu">{{
                    $t("menu[3]")
                  }}</nuxt-link>
                </li>
                <li class="">
                  <nuxt-link to="/contact" @click="closeMenu">{{
                    $t("menu[4]")
                  }}</nuxt-link>
                </li>
              </ul>
            </div>
          </transition>

          <div
            class="xxxs:w-3/4 md:w-1/4 flex xxxs:space-x-2 md:space-x-4 justify-end"
          >
            <div class="flex items-center justify-center">
              <nuxt-link
                to="/MembershipForm"
                class="xxxs:text-xs truncate md:text-sm xxl:text-base flex etcare-button xxxs:pt-1 xxxs:pb-1 xxxs:pl-2 xxxs:pr-2 md:pt-1 md:pb-1 md:pl-4 md:pr-4 xxl:pt-2 xxl:pb-2 xxl:pl-8 xxl:pr-8 space-x-10"
              >
                {{ $t("menu[5]") }}
              </nuxt-link>
            </div>

            <div>
              <div class="class_flag flex gap-2">
                <!-- English Flag Button -->
                <button
                  @click="chengeenglangvariable"
                  :class="{
                    'border-2 border-blue-500 rounded': langvar === 'en',
                  }"
                  class="p-1 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md"
                  aria-label="Switch to English"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.7em"
                    height="1.2em"
                    viewBox="0 0 640 480"
                  >
                    <!-- Icon from Flag Icons by Panayiotis Lipiridis - https://github.com/lipis/flag-icons/blob/main/LICENSE -->
                    <path fill="#bd3d44" d="M0 0h640v480H0" />
                    <path
                      stroke="#fff"
                      stroke-width="37"
                      d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
                    />
                    <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
                    <marker id="flagUs4x30" markerHeight="30" markerWidth="30">
                      <path fill="#fff" d="m14 0l9 27L0 10h28L5 27z" />
                    </marker>
                    <path
                      fill="none"
                      markerMid="url(#flagUs4x30)"
                      d="m0 0l16 11h61h61h61h61h60L47 37h61h61h60h61L16 63h61h61h61h61h60L47 89h61h61h60h61L16 115h61h61h61h61h60L47 141h61h61h60h61L16 166h61h61h61h61h60L47 192h61h61h60h61L16 218h61h61h61h61h60z"
                    />
                  </svg>
                </button>

                <button
                  @click="chengeamhlangvariable"
                  :class="{
                    'border-2 border-blue-500 rounded': langvar === 'am',
                  }"
                  class="p-1 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md"
                  aria-label="Switch to Amharic"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.7em"
                    height="1.2em"
                    viewBox="0 0 640 480"
                  >
                    <!-- Icon from Flag Icons by Panayiotis Lipiridis - https://github.com/lipis/flag-icons/blob/main/LICENSE -->
                    <defs>
                      <clipPath id="flagEt4x30">
                        <path fillOpacity=".7" d="M-61.3 0h682.7v512H-61.3z" />
                      </clipPath>
                    </defs>
                    <g
                      fillRule="evenodd"
                      stroke-width="1pt"
                      clipPath="url(#flagEt4x30)"
                      transform="translate(57.5)scale(.94)"
                    >
                      <path fill="#ffc621" d="M-238 3.5H800v498H-238z" />
                      <path fill="#ef2118" d="M-240 342.5H799.3V512H-240z" />
                      <path fill="#298c08" d="M-238 0H800v180H-238z" />
                      <circle
                        cx="534.2"
                        cy="353"
                        r="199.7"
                        fill="#006bc6"
                        transform="matrix(.54 0 0 .54 -25.8 74)"
                      />
                      <path
                        fill="#ffc621"
                        d="m214.3 188.2l-6.5 4.5l23.5 33l6.3-4zm29.4 78l-9.7-6.8l4-12.7l-48.1.7l-14-10.7l65.7-.7l12.2-36.9l6.6 15zm76.5-70.7l-6.3-4.8l-24.3 32.4l5.6 4.7zM254.8 247l3.5-11.2h13.3L256.4 190l6-16.5l20.5 62.4l38.8.5l-12.2 10.7zm90.6 51.2l2.7-7.4l-38.3-13.3l-2.8 7zm-69.1-46.4l11.7-.1l4.1 12.6l38.8-28.5l17.6.6l-53.1 38.7l11.5 37.2l-14-8.4zm-19.8 102l7.9.2l.3-40.5l-7.4-.5zm22-80.3l3.8 11.1l-10.7 8l39.4 27.7l5 16.8l-53.6-38l-31.5 22.7l3.5-16l44-32.3zm-103.3 13l2.3 7.5l38.7-12.2l-2-7.2zm83.2-4l-9.4 7.1l-10.8-7.7l-14.2 46l-14.4 10l19.5-62.7l-31.4-23l16.3-1.6z"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>

            <div class="lg:hidden flex justify-center items-center">
              <button @click="toggleMenu" aria-label="Toggle Menu">
                <svg
                  v-if="!isMenuOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
                  ></path>
                </svg>

                <svg
                  v-if="isMenuOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  class="font-bold"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m5 19l7-7m0 0l7-7m-7 7L5 5m7 7l7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="bg-background text-white h-100">
      <slot />
    </div>

    <footer class="bg-primary font-roboto text-white">
      <div class="body-padding_margin">
        <div class="container">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4 pt-10 pb-10">
            <div class="space-y-3">
              <h4 class="mb-4 font-bold font-oswald">{{ $t("contactUs") }}</h4>

              <div class="items-center flex space-x-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 20.556q-.235 0-.47-.077t-.432-.25q-1.067-.981-2.164-2.185q-1.096-1.203-1.99-2.493t-1.468-2.633t-.572-2.622q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 1.279-.572 2.613q-.572 1.333-1.458 2.632q-.885 1.3-1.981 2.494T12.92 20.21q-.191.173-.434.26q-.244.086-.487.086m.004-8.825q.667 0 1.14-.476q.472-.475.472-1.143t-.476-1.14t-1.143-.472t-1.14.476t-.472 1.143t.475 1.14t1.144.472"
                  ></path>
                </svg>
                <a
                  href="https://maps.app.goo.gl/Bim8BvzZjeQAjKTU8"
                  class="links"
                  target="_blank"
                >
                  <h4>{{ $t("address") }}</h4>
                </a>
              </div>

              <div class="items-center flex space-x-5">
                   <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M7 17q-.825 0-1.412-.587T5 15V5q0-.825.588-1.412T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.587 1.413T21 17zm7-4.7L7 7.425V15h14V7.425zm0-2.45L21 5H7zM3 21q-.825 0-1.412-.587T1 19V6.5h2V19h16.5v2zM21 7.35V5H7v2.35V5h14z" /></svg>

                <a
                  href="mailto:saccoetcare051@gmail.com"
                  class="links"
                  target="_blank"
                >
                  <h4>saccoetcare051@ gmail.com</h4>
                </a>
              </div>

              <div class="items-center flex space-x-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                  ></path>
                </svg>

                <a href="tel:+251-11-666-2529" class="links">
                  <h4>+251-11-666-2529</h4>
                </a>
              </div>
            </div>

            <div>
              <h4 class="mb-4 font-bold font-oswald">
                {{ $t("companytitle") }}
              </h4>
              <ul class="space-y-2">
                <li>
                  <nuxt-link to="/about" class="links">{{
                    $t("company[0]")
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/service" class="links">{{
                    $t("company[1]")
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/blog" class="links">{{
                    $t("company[2]")
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/service/saving" class="links">{{
                    $t("company[3]")
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/service/equb" class="links">{{
                    $t("company[4]")
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/service/loan" class="links">{{
                    $t("company[5]")
                  }}</nuxt-link>
                </li>
              </ul>
            </div>

            <div class="space-y-3">
              <h4 class="mb-4 font-bold font-oswald">{{ $t("latestNews") }}</h4>
              <div class="grid grid-cols-1 gap-4">
                <footerblogco
                  v-for="(blog, index) in blogPostsLetest"
                  :key="index"
                  :blog_id="blog.blog_id"
                  :description="blog.title"
                  :link="blog.link"
                  :imageSrc="blog.blog_image"
                  :content="blog.content"
                  author="EtCare"
                  :date="blog.event_date"
                />
              </div>
            </div>
            <div>
              <h5 class="mb-4 md:text-2xl text-center font-Madimi font-bold">
                {{ $t("footerText") }}
              </h5>
              <div class="flex justify-center pt-5">
                <nuxt-link
                  to="/contact"
                  class="etcare-button xs:pt-1 xxxs:pb-1 xxxs:pl-5 xxxs:pr-5 md:pt-2 md:pb-2 md:pl-8 md:pr-8 footer-button flex items-center space-x-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M17 11v3l-3-3H8a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2zm-3 2v2a2 2 0 0 1-2 2H6l-3 3v-3H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h2v3a4 4 0 0 0 4 4z"
                    ></path>
                  </svg>
                  <h1>{{ $t("footerContact") }}</h1>
                </nuxt-link>
              </div>

              <div class="flex justify-center">
                <div class="flex space-x-3 pt-5">
                  <nuxt-link
                    to="https://web.facebook.com/etcaresacco"
                    target="_blank"
                    ><svg
                      class="socialM"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
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
                      class="socialM"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12.244 4c.534.003 1.87.016 3.29.073l.504.022c1.429.067 2.857.183 3.566.38c.945.266 1.687 1.04 1.938 2.022c.4 1.56.45 4.602.456 5.339l.001.152v.174c-.007.737-.057 3.78-.457 5.339c-.254.985-.997 1.76-1.938 2.022c-.709.197-2.137.313-3.566.38l-.504.023c-1.42.056-2.756.07-3.29.072l-.235.001h-.255c-1.13-.007-5.856-.058-7.36-.476c-.944-.266-1.687-1.04-1.938-2.022c-.4-1.56-.45-4.602-.456-5.339v-.326c.006-.737.056-3.78.456-5.339c.254-.985.997-1.76 1.939-2.021c1.503-.419 6.23-.47 7.36-.476zM9.999 8.5v7l6-3.5z"
                      ></path></svg
                  ></nuxt-link>
                  <nuxt-link
                    to="https://vm.tiktok.com/ZMhQxWYC7/"
                    target="_blank"
                  >
                    <svg
                      class="socialM"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74a2.89 2.89 0 0 1 2.31-4.64a2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                        fill="currentColor"
                      ></path></svg
                  ></nuxt-link>

                  <nuxt-link to="https://t.me/etcaresacco" target="_blank"
                    ><svg
                      class="socialM"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
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
        </div>
      </div>

      <div class="textcopy">
        <div class="body-padding_margin">
          <div class="container">
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-4 xxxs:py-4 justify-around w-full items-center text-primary md:py-6 xxl:py-8"
            >
              <div>
                <nuxt-link to="/">
                  <img src="/Etcare_logo1-removebg.png" alt="etcare logo" />
                </nuxt-link>
              </div>
              <div class="md:text-end">
                <h4 class="font-bold">
                  {{ $t("copyright") }}
                </h4>
                <div class="flex gap-2 font-robot md:justify-end">
                  <h1>{{ $t("WebsiteBy") }}</h1>
                  <a href="mailto:alemnehmeseret@gmail.com" class="links">
                    <h4 class="text-secondary">{{ $t("Name") }}</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const { $axios } = useNuxtApp();
const headerBackgroundColor = ref("rgba(255, 255, 255, 0.55)");
const isMenuOpen = ref(false);
const openMenuService = ref(false);
const isLoading = ref(false);
const blogPostsLetest = ref([]);
const langvar = ref("en");
const { setLocale } = useI18n();
const chengeenglangvariable = () => {
  langvar.value = "en";
  setLocale("en");
};
const chengeamhlangvariable = () => {
  langvar.value = "am";
  setLocale("am");
};
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
const handleScroll = async () => {
  if (window.scrollY > 100) {
    headerBackgroundColor.value = "#fff";
  } else {
    headerBackgroundColor.value = "rgba(255, 255, 255, 0.55)";
  }
};
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  openMenuService.value = false;
};
const toggleMenuservice = () => {
  openMenuService.value = !openMenuService.value;
};
const closeMenuservice = () => {
  openMenuService.value = !openMenuService.value;
  isMenuOpen.value = false;
};
onMounted(async () => {
  window.addEventListener("scroll", handleScroll);
  fetchBlogs();
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&family=Roboto:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abyssinica+SIL&display=swap");

@media (min-width: 200px) {
  .body-padding_margin {
    padding: 0 1rem;
  }
}

@media (min-width: 500px) {
  .body-padding_margin {
    padding: 0 2.25rem;
  }
}

@media (min-width: 800px) {
  .body-padding_margin {
    padding: 0 2.5rem;
  }
}

@media (min-width: 1200px) {
  .body-padding_margin {
    padding: 0 3rem;
  }
}

.z-in {
  z-index: 100;
}

.container {
  max-width: 1240px;
  /* Adjust this value as per your design */
  margin: 0 auto;
  /* Center the container */
  padding: 0 1rem;
  /* Add some padding for smaller screens */
}

.home-image {
  border-radius: 50%;
  width: 170px;
  height: 170px;
  border: 4px solid theme("colors.secondary");
}

.cancle-img {
  cursor: pointer;
}

.web-body {
  padding: 0;
  margin: 0;
  background-color: theme("colors.background");
}

.links {
  transition: all 0.2s ease-in-out;
}

.links:hover {
  color: theme("colors.secondary");
}

.etcare-button {
  background-color: theme("colors.primary");
  color: theme("colors.white");
  border-radius: 10px 10px 10px 0;
  font-family: theme("fontFamily.abyssinica");
  border: none;
  cursor: pointer;
  transition: all 0.35s ease-in-out;
}

.etcare-button:hover {
  font-weight: bold;
  transform: scale(1.05);
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.etcare-button:not(:hover) {
  /* color: inherit; */
  transform: scale(1);
  text-shadow: none;
}

.footer-button {
  font-size: 0.8rem;
  border-radius: 1px;
  background-color: theme("colors.secondary");
  color: theme("colors.background");
}

.textcopy {
  background-color: theme("colors.background");
}

.footerpadding {
  padding: 0 4rem;
  height: 440px;
}

.socialM {
  transition: transform 0.3s ease-in-out;
}

.socialM:hover {
  transform: translateY(-15%);
  color: theme("colors.secondary");
}

.dropdown {
  position: absolute;
  background-color: white;
  /* Replace with theme('colors.white') */
  width: 25%;
  border-top: solid 1px #ccc;
  /* Replace with theme('colors.secondary') */
  top: 60%;
  visibility: hidden;
  opacity: 0;
  transition: opacity 1s, visibility 1s;
}

.dropdown-link:hover .dropdown {
  visibility: visible;
  opacity: 1;
}

.dropdown li:hover {
  color: theme("colors.secondary");
}

.dropdown li {
  padding: 0.5rem 1rem;
  position: relative;
  border-bottom: solid 1px theme("colors.secondary");
  overflow: hidden;
}

.dropdown li::before {
  content: "";
  background-image: linear-gradient(
    to right,
    transparent,
    theme("colors.primary")
  );
  width: 0;
  position: absolute;
  bottom: 0;
  height: 100%;
  left: 0;
  transition: width 0.65s ease;
}

.dropdown li:hover::before {
  width: 100%;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s ease, opacity 0.4s ease;
}
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>

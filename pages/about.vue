<template>
  <div>
    <ServiceCard :text="$t('about.title')" imgservice="/service/about.png" />

    <div class="body-padding_margin xxxs:text-base sm:text-lg">
      <div class="container">
        <div
          class="grid grid-cols-1 md:grid-cols-2 xxxs:gap-4 md:gap-8 about-border about-padding"
        >
          <div>
            <img
              src="/service/building.png"
              class="about-image"
              alt="building"
            />
          </div>
          <div class="xxxs:space-y-4 md:space-y-8">
            <h1
              class="text-primary font-bold text-justify xxxs:text-base md:text-lg"
            >
              {{ $t("about.building1") }}
            </h1>
            <p class="text-primary text-justify xxxs:text-sm md:text-base">
              {{ $t("about.building2") }}
            </p>
          </div>
        </div>

        <div class="pt-8 pb-8 xxxs:space-y-4 md:space-y-8">
          <h1
            class="text-secondary text-oswald font-bold xxxs:text-3xl md:text-4xl text-center"
          >
            {{ $t("about.AboutTitle") }}
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-2 xxxs:gap-4 md:gap-8">
            <div class="flex items-center">
              <p
                class="text-primary font-robot text-justify xxxs:text-base md:text-lg"
              >
                {{ $t("about.Abouttext") }}
              </p>
            </div>
            <div>
              <img src="/service/ETCA1490.png" class="about-image" alt="etc" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="Our-Best-Quality">
      <div class="body-padding_margin space-y-4">
        <div class="container">
          <div class="grid grid-cols-1 md:grid-cols-2 xxxs:gap-4 md:gap-8">
            <div class="space-y-4">
              <h1
                class="text-secondary font-oswald font-bold xxxs:text-3xl md:text-4xl pt-8 xxxs:text-center md:text-left"
              >
                {{ $t("about.quality") }}
              </h1>
              <p
                class="text-primary font-robot text-justify xxxs:text-sm md:text-base"
              >
                {{ $t("about.qualityText") }}
              </p>
            </div>
            <div class="flex items-center justify-center">
              <img src="/logo1-removebg.png" class="w-32 h-32" alt="logo" />
            </div>
          </div>

          <div class="flex justify-center pt-5 pb-8">
            <nuxt-link
              to="/contact"
              class="xs:pt-1 xs:pb-1 xs:pl-5 xs:pr-5 md:pt-2 md:pb-2 md:pl-8 md:pr-8 about-button flex items-center space-x-4"
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
              <h1>{{ $t("about.contactUs") }}</h1>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-16 pb-32">
      <div class="body-padding_margin space-y-2">
        <div class="container">
          <h1
            class="text-primary font-bold font-oswald text-center xxxs:text-3xl md:text-4xl"
          >
            {{ $t("about.team") }}
          </h1>
          <p
            class="text-primary xxxs:text-sm md:text-base font-robot text-center"
          >
            {{ $t("about.teamText") }}
          </p>

          <div
            class="flex justify-between items-center xxxs:gap-2 md:gap-4 team-staff"
          >
            <div
              class="text-secondary arrow-back"
              @click="prevTeam"
              :class="{ 'opacity-50 pointer-events-none': startIndex === 0 }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.8 13H15q.425 0 .713-.288T16 12t-.288-.712T15 11h-3.2l.9-.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275l-2.6 2.6q-.3.3-.3.7t.3.7l2.6 2.6q.275.275.7.275t.7-.275t.275-.7t-.275-.7zm.2 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                ></path>
              </svg>
            </div>

            <team
              v-for="(member, index) in visibleTeamMembers"
              :key="index"
              :member="member"
            />

            <div
              class="text-secondary arrow-forward"
              @click="nextTeam"
              :class="{
                'opacity-50 pointer-events-none':
                  endIndex >= teamMembers.length,
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6zm0 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

useHead({
  title: "About - Etcare SACCOs Ltd",
});
const teamMembers = ref([
  {
    name: "Kidist",
    role: "CEO",
    image: "/team/picKidistb.jpg",
    bio: "Kidist leads with vision and a passion for innovation. She believes in empowering her team and creating a positive impact.",
  },
  {
    name: "Tigest",
    role: "Manager",
    image: "/team/PicTGb.jpg",
    bio: "Tigest keeps things running smoothly and efficiently. she's a skilled leader and problem-solver, always ready for a challenge.",
  },
  {
    name: "Luna",
    role: "Loan Manager",
    image: "/team/PicLuna.jpg",
    bio: "Luna helps clients achieve their financial goals. She's dedicated to providing excellent service and building strong relationships.",
  },
  {
    name: "Samri",
    role: "Loan Officer",
    image: "/team/PicSamri.jpg",
    bio: "Samri helps clients navigate the loan process with ease. she's knowledgeable and supportive, ensuring a smooth experience.",
  },
  {
    name: "Hanan",
    role: "Junior Accountant",
    image: "/team/Hanan Pic 1.jpg",
    bio: "Hanan is meticulous and detail-oriented, ensuring the accuracy of financial records. She's eager to learn and grow in her field.",
  },
  {
    name: "Ekram",
    role: "Junior Accountant",
    image: "/team/PicEkram.jpg",
    bio: "Ekram is a quick learner and a valuable member of the accounting team. she's passionate about numbers and problem-solving.",
  },
  {
    name: "Melat",
    role: "Accountant",
    image: "/team/PicMelat.jpg",
    bio: "Melat is a skilled accountant with a strong understanding of financial principles. she's dedicated to accuracy and efficiency.",
  },
  {
    name: "Redu",
    role: "Casher",
    image: "/team/PicRedu.jpg",
    bio: "Redu provides friendly and efficient service to customers. She's patient and helpful, always ready to assist.",
  },
  {
    name: "Selam",
    role: "Loan Officer",
    image: "/team/PicSelam.jpg",
    bio: "Selam is dedicated to helping clients find the right loan solutions. She's a skilled communicator and problem-solver.",
  },
  {
    name: "Tigist",
    role: "Accounting",
    image: "/team/PicTG.png",
    bio: "Tigist is a valuable member of the accounting team, contributing to accurate and efficient financial operations. She is always eager to learn.",
  },
  {
    name: "Andualem",
    role: "IT Officer",
    image: "/team/PicAndualem.jpg",
    bio: "Andualem keeps the company's technology running smoothly. He's a skilled problem-solver and is passionate about all things tech.",
  },
  {
    name: "Meseret",
    role: "IT Officer",
    image: "/team/PicMeseret.jpg",
    bio: "Meseret is a tech expert, ensuring the company's systems are secure and up-to-date. he's a valuable asset to the IT team.",
  },
  {
    name: "Johnny",
    role: "Driver",
    image: "/team/PicJohnny1.jpg",
    bio: "Johnny ensures everyone gets where they need to go safely and on time. He's reliable and courteous, always with a smile.",
  },
]);

const startIndex = ref(0);
const teamDisplayLimit = ref(1);

function updateTeamDisplayLimit() {
  const width = window.innerWidth;

  if (width >= 1024) {
    // lg breakpoint
    teamDisplayLimit.value = 4;
  } else if (width >= 768) {
    // md breakpoint
    teamDisplayLimit.value = 3;
  } else if (width >= 640) {
    // sm breakpoint
    teamDisplayLimit.value = 2;
  } else {
    teamDisplayLimit.value = 1;
  }
}

onMounted(() => {
  updateTeamDisplayLimit();
  window.addEventListener("resize", updateTeamDisplayLimit);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateTeamDisplayLimit);
});

const endIndex = computed(() => startIndex.value + teamDisplayLimit.value);
const visibleTeamMembers = computed(() =>
  teamMembers.value.slice(startIndex.value, endIndex.value)
);

function nextTeam() {
  if (endIndex.value < teamMembers.value.length) {
    startIndex.value += 1;
  }
}

function prevTeam() {
  if (startIndex.value > 0) {
    startIndex.value -= 1;
  }
}
</script>

<style>
.arrow-forward,
.arrow-back {
  cursor: pointer;
  transition: all 0.3s ease;
}

.arrow-forward.opacity-50,
.arrow-back.opacity-50 {
  opacity: 0.5;
  pointer-events: none;
  /* Disable click */
}

.arrow-back:hover {
  transform: scale(1.25);
}

.arrow-forward:hover {
  transform: scale(1.25);
}

.Our-Best-Quality {
  background-color: #ffdfdf;
}

.about-button {
  background-color: theme("colors.secondary");
  border-radius: 8px 8px 8px 0;
  padding: 0.7rem 3.5rem;
  transition: all 0.5s ease;
}

.about-button:hover {
  color: theme("colors.white");
  background-color: theme("colors.primary");
}

.about-border {
  border: 2px solid theme("colors.secondary");
  border-radius: 20px;
}

.about-image {
  width: 100%;
  height: 100%;
}

.about-padding {
  padding: min(1.75rem, 8%) min(3rem, 8%);
}
</style>

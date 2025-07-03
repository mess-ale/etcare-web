<template>
  <div class="text-primary pb-8 font-sens text-justify">
    <ServiceCard :text="$t('equb.title')" imgservice="/service/equb-p.png" />

    <div id="equb" class="body-padding_margin">
      <div class="container">
        <div class="duration-500 flex">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="">
              <div class="saving-right-box p-4">
                <h1
                  class="text-secondary font-oswald text-2xl text-center font-bold p-4"
                >
                  {{ $t("whyChooseOurEqub.title") }}
                </h1>
                <div class="space-y-2">
                  <div class="gap-4 p-4 border-b border-gray-200">
                    <div class="flex items-center text-primary space-x-10">
                      <img src="/right.png" class="right-icon" />

                      <h2 class="text-lg flex items-center">
                        {{ $t("whyChooseOurEqub.reasons[0]") }}
                      </h2>
                    </div>
                  </div>

                  <div class="gap-4 p-4 border-b border-gray-200">
                    <div class="flex items-center text-primary space-x-10">
                      <img src="/right.png" class="right-icon" />

                      <h2 class="text-lg flex items-center">
                        {{ $t("whyChooseOurEqub.reasons[1]") }}
                      </h2>
                    </div>
                  </div>

                  <div class="gap-4 p-4 border-b border-gray-200">
                    <div class="flex items-center text-primary space-x-10">
                      <img src="/right.png" class="right-icon" />

                      <h2 class="text-lg flex items-center">
                        {{ $t("whyChooseOurEqub.reasons[2]") }}
                      </h2>
                    </div>
                  </div>

                  <div class="gap-4 p-4 border-b border-gray-200">
                    <div class="flex items-center text-primary space-x-10">
                      <img src="/right.png" class="right-icon" />

                      <h2 class="text-lg flex items-center">
                        {{ $t("whyChooseOurEqub.reasons[3]") }}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="">
              <ul class="list-disc pl-5">
                <h1 class="saving-title text-center">{{ $t("equb.title") }}</h1>
                <p>
                  {{ $t("equb.definition") }}
                </p>
              </ul>

              <ul class="list-disc pl-5">
                <h1 class="saving-title">{{ $t("equb.digitalEqub.title") }}</h1>
                <p>{{ $t("equb.digitalEqub.description") }}</p>
                <h1 class="saving-title">
                  {{ $t("equb.digitalEqub.mainFunctions.title") }}
                </h1>

                <li>
                  {{ $t("equb.digitalEqub.mainFunctions.list[0]") }}
                </li>
                <li>
                  {{ $t("equb.digitalEqub.mainFunctions.list[1]") }}
                </li>
                <li>
                  {{ $t("equb.digitalEqub.mainFunctions.list[2]") }}
                </li>
                <li>
                  {{ $t("equb.digitalEqub.mainFunctions.list[3]") }}
                </li>
                <li>
                  {{ $t("equb.digitalEqub.mainFunctions.list[4]") }}
                </li>
                <li>
                  {{ $t("equb.digitalEqub.mainFunctions.list[5]") }}
                </li>
              </ul>

              <ul class="list-disc pl-5">
                <h1 class="saving-title">
                  {{ $t("equb.digitalEqub.benefitsForMembers.title") }}
                </h1>
                <li>
                  {{ $t("equb.digitalEqub.benefitsForMembers.list[0]") }}
                </li>
                <li>
                  {{ $t("equb.digitalEqub.benefitsForMembers.list[1]") }}
                </li>
                <li>
                  {{ $t("equb.digitalEqub.benefitsForMembers.list[2]") }}
                </li>
                <li>
                  {{ $t("equb.digitalEqub.benefitsForMembers.list[3]") }}
                </li>
                <li>
                  {{ $t("equb.digitalEqub.benefitsForMembers.list[4]") }}
                </li>
                <li>
                  {{ $t("equb.digitalEqub.benefitsForMembers.list[5]") }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Equb - Etcare SACCOs Ltd",
});
</script>

<style scoped>
.login-equb-body {
  background-image: url("/car-equb.png");
  padding: 2rem 4rem;
}

.equb-img {
  border-radius: 50%;
  border: 1px solid theme("colors.secondary");
}

.equb-button {
  padding: 0.5rem 3rem;
  border-radius: 5px;
  background-color: theme("colors.primary");
  color: theme("colors.white");
}

.equb-icon {
  border: 2px solid theme("colors.secondary");
  padding: 1rem;
  border-radius: 50%;
}

.saving-p-m {
  padding: 0 4rem 6rem 4rem;
  display: flex;
}

.saving-left {
  width: 60%;
}

.saving-right {
  width: 40%;
}

.saving-right-box {
  box-shadow: 2px 2px 5px theme("colors.secondary");
  border-radius: 0.5rem;
  position: sticky;
  top: 0;
}

.saving-title {
  color: theme("colors.secondary");
  font-family: oswald, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 0;
}

.saving-left ul li {
  color: theme("colors.primary");
  font-family: robot, sans-serif;
  padding: 5px;
}
</style>

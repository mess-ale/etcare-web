<template>
  <div class="text-primary pb-8 font-sens text-justify">
    <ServiceCard
      :text="$t('trainingAndConsulting.title1')"
      imgservice="/service/training.JPG"
    />
    <div class="body-padding_margin">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div class="saving-right-box p-4">
              <h1
                class="text-secondary font-oswald text-2xl text-center font-bold loan-title-padding"
              >
                {{ $t("whyTrainWithUs.title") }}
              </h1>
              <div class="space-y-2">
                <div class="xxxs:gap-1 sm:gap-4 loan-comp-padding p-4 border-b border-gray-200">
                  <div class="flex items-center text-primary xxxs:space-x-2 sm:space-x-10">
                    <img src="/right.png" class="right-icon" />

                    <h2 class="xxxs:text-sm xs:text-base sm:text-lg flex items-center">
                      {{ $t("whyTrainWithUs.reasons[0]") }}
                    </h2>
                  </div>
                </div>

                <div class="xxxs:gap-1 sm:gap-4 loan-comp-padding p-4 border-b border-gray-200">
                  <div class="flex items-center text-primary xxxs:space-x-2 sm:space-x-10">
                    <img src="/right.png" class="right-icon" />

                    <h2 class="xxxs:text-sm xs:text-base sm:text-lg flex items-center">
                      {{ $t("whyTrainWithUs.reasons[1]") }}
                    </h2>
                  </div>
                </div>

                <div class="xxxs:gap-1 sm:gap-4 loan-comp-padding p-4 border-b border-gray-200">
                  <div class="flex items-center text-primary xxxs:space-x-2 sm:space-x-10">
                    <img src="/right.png" class="right-icon" />

                    <h2 class="xxxs:text-sm xs:text-base sm:text-lg flex items-center">
                      {{ $t("whyTrainWithUs.reasons[2]") }}
                    </h2>
                  </div>
                </div>

                <div class="xxxs:gap-1 sm:gap-4 loan-comp-padding p-4 border-b border-gray-200">
                  <div class="flex items-center text-primary xxxs:space-x-2 sm:space-x-10">
                    <img src="/right.png" class="right-icon" />

                    <h2 class="xxxs:text-sm xs:text-base sm:text-lg flex items-center">
                      {{ $t("whyTrainWithUs.reasons[3]") }}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="xxxs:text-base sm:text-lg">
            <h1 class="saving-title text-center">
              {{ $t("trainingAndConsulting.title1") }}
            </h1>
            <p class="underline">{{ $t("trainingAndConsulting.title") }}</p>
            <p class="underline">{{ $t("trainingAndConsulting.tagline") }}</p>
            <p>{{ $t("trainingAndConsulting.introduction") }}</p>

            <ul class="list-disc pl-5">
              <h1 class="saving-title">
                {{ $t("trainingAndConsulting.trainingServices.title") }}
              </h1>
              <li>{{ $t("trainingAndConsulting.trainingServices.list[0]") }}</li>
              <li>{{ $t("trainingAndConsulting.trainingServices.list[1]") }}</li>
              <li>{{ $t("trainingAndConsulting.trainingServices.list[2]") }}</li>
              <li>{{ $t("trainingAndConsulting.trainingServices.list[3]") }}</li>
              <li>{{ $t("trainingAndConsulting.trainingServices.list[4]") }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Training - Etcare SACCOs Ltd",
});
</script>

<style>
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

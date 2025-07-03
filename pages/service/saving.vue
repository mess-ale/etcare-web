<template>
  <div class="text-primary pb-8 font-sens text-justify">
    <ServiceCard
      :text="$t('services[0]')"
      imgservice="/service/saving-page.png"
    />
    <div class="body-padding_margin">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div class="">
            <div class="saving-right-box p-4">
              <h1
                class="text-secondary font-oswald text-2xl text-center font-bold p-4"
              >
                {{ $t("whySaveWithUs.title") }}
              </h1>
              <div class="space-y-2">
                <div class="gap-4 p-4 border-b border-gray-200">
                  <div class="flex items-center text-primary space-x-10">
                    <img src="/right.png" class="right-icon" />

                    <h2 class="text-lg flex items-center">
                      {{ $t("whySaveWithUs.reasons[0]") }}
                    </h2>
                  </div>
                </div>

                <div class="gap-4 p-4 border-b border-gray-200">
                  <div class="flex items-center text-primary space-x-10">
                    <img src="/right.png" class="right-icon" />

                    <h2 class="text-lg flex items-center">
                      {{ $t("whySaveWithUs.reasons[1]") }}
                    </h2>
                  </div>
                </div>

                <div class="gap-4 p-4 border-b border-gray-200">
                  <div class="flex items-center text-primary space-x-10">
                    <img src="/right.png" class="right-icon" />

                    <h2 class="text-lg flex items-center">
                      {{ $t("whySaveWithUs.reasons[2]") }}
                    </h2>
                  </div>
                </div>

                <div class="gap-4 p-4 border-b border-gray-200">
                  <div class="flex items-center text-primary space-x-10">
                    <img src="/right.png" class="right-icon" />

                    <h2 class="text-lg flex items-center">
                      {{ $t("whySaveWithUs.reasons[3]") }}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ul class="list-disc pl-5">
              <h1 class="saving-title text-center font-bold text-2lg">
                {{ $t("savings.types.title") }}
              </h1>
              <p>{{ $t("savings.types.intro") }}</p>
            </ul>

            <ul class="list-disc pl-5">
              <h1 class="saving-title">
                {{ $t("savings.types.regularSaving.title") }}
              </h1>
              <li class="saving-header">
                {{ $t("savings.types.regularSaving.details[0]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.regularSaving.details[1]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.regularSaving.details[2]") }}
              </li>
            </ul>

            <ul class="list-disc pl-5">
              <h1 class="saving-title">
                {{ $t("savings.types.demandSaving.title") }}
              </h1>
              <li class="saving-header">
                {{ $t("savings.types.demandSaving.details[0]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.demandSaving.details[1]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.demandSaving.details[2]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.demandSaving.details[3]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.demandSaving.details[4]") }}
              </li>
            </ul>

            <ul class="list-disc pl-5">
              <h1 class="saving-title">
                {{ $t("savings.types.timeDepositSaving.title") }}
              </h1>
              <li class="saving-header">
                {{ $t("savings.types.timeDepositSaving.details[0]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.timeDepositSaving.details[1]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.timeDepositSaving.details[2]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.timeDepositSaving.details[3]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.timeDepositSaving.details[4]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.timeDepositSaving.details[5]") }}
              </li>
            </ul>

            <ul class="list-disc pl-5">
              <h1 class="saving-title">
                {{ $t("savings.types.interestFreeSaving.title") }}
              </h1>
              <li class="saving-header">
                {{ $t("savings.types.interestFreeSaving.details[0]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.interestFreeSaving.details[1]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.interestFreeSaving.details[2]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.interestFreeSaving.details[3]") }}
              </li>
            </ul>

            <ul class="list-disc pl-5">
              <h1 class="saving-title">
                {{ $t("savings.types.childrenSaving.title") }}
              </h1>
              <li class="saving-header">
                {{ $t("savings.types.childrenSaving.details[0]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.childrenSaving.details[1]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.childrenSaving.details[2]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.childrenSaving.details[3]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.childrenSaving.details[4]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.childrenSaving.details[5]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.childrenSaving.details[6]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.childrenSaving.details[7]") }}
              </li>
            </ul>

            <ul class="list-disc pl-5">
              <h1 class="saving-title">
                {{ $t("savings.types.womenSaving.title") }}
              </h1>
              <li class="saving-header">
                {{ $t("savings.types.womenSaving.details[0]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.womenSaving.details[1]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.womenSaving.details[2]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.womenSaving.details[3]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.types.womenSaving.details[4]") }}
              </li>
            </ul>

            <ul class="list-disc pl-5">
              <h1 class="saving-title text-center">
                {{ $t("savings.interestRates.title") }}
              </h1>
              <li class="saving-header">
                {{ $t("savings.interestRates.list[0]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.interestRates.list[1]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.interestRates.list[2]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.interestRates.list[3]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.interestRates.list[4]") }}
              </li>
              <li class="saving-header">
                {{ $t("savings.interestRates.list[5]") }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Saving - Etcare SACCOs Ltd",
});
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.savint-user {
  padding: 0 4rem 6rem 4rem;
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

.saving-header {
  color: #334a79;
  padding-bottom: 0.3rem;
}

.saving-left ul li {
  color: theme("colors.primary");
  font-family: robot, sans-serif;
  padding: 5px;
}
</style>

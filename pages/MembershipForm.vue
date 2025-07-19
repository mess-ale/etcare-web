<template>
  <div>
    <ServiceCard
      :text="$t('membership.etcareMembershipForm.title')"
      imgservice="/form.jpg"
    />

    <div class="body-padding_margin xxxs:text-base sm:text-lg">
      <div
        class="my-div max-w-4xl pb-4 mb-12 mx-auto membertiop-padding bg-white text-primary shadow-md bb-primary rounded-md justify-between flex font-robot gap-2"
      >
        <nuxt-link class="links xxxs:text-sm md:text-lg" to="#bank">{{
          $t("membership.bankAccounts.title")
        }}</nuxt-link>
        <nuxt-link class="links xxxs:text-sm md:text-lg" to="#eligibility">{{
          $t("membership.eligibilityCriteria.title")
        }}</nuxt-link>
        <nuxt-link class="links xxxs:text-sm md:text-lg" to="#benefits">{{
          $t("membership.becomingAMember.title")
        }}</nuxt-link>
        <nuxt-link class="links xxxs:text-sm md:text-lg" to="#becoming">{{
          $t("membership.benefitsOfMembership.title")
        }}</nuxt-link>
      </div>

      <div
        class="my-div max-w-4xl pb-8 mb-12 mx-auto membertiop-padding bg-white text-primary shadow-md rounded-md font-robot"
      >
        <h2
          class="xxxs:text-2xl md:text-3xl font-bold text-center text-secondary mb-12 font-oswald"
        >
          {{ $t("membership.etcareMembershipForm.title") }}
        </h2>

        <form @submit.prevent="handleSubmit">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div>
              <label
                for="firstName"
                class="block text-sm font-medium text-primary"
                >{{
                  $t("membership.etcareMembershipForm.fields[0].label")
                }}</label
              >
              <input
                v-model="form.firstName"
                id="firstName"
                :type="$t('membership.etcareMembershipForm.fields[0].type')"
                class="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                :placeholder="
                  $t('membership.etcareMembershipForm.fields[0].name')
                "
                required
              />
            </div>
            <div>
              <label
                for="fatherName"
                class="block text-sm font-medium text-primary"
                >{{
                  $t("membership.etcareMembershipForm.fields[1].label")
                }}</label
              >
              <input
                v-model="form.fatherName"
                id="fatherName"
                :type="$t('membership.etcareMembershipForm.fields[1].type')"
                class="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                :placeholder="
                  $t('membership.etcareMembershipForm.fields[1].name')
                "
                required
              />
            </div>
            <div>
              <label
                for="grandfatherName"
                class="block text-sm font-medium text-primary"
                >{{
                  $t("membership.etcareMembershipForm.fields[2].label")
                }}</label
              >
              <input
                v-model="form.grandfatherName"
                id="grandfatherName"
                :type="$t('membership.etcareMembershipForm.fields[2].type')"
                class="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                :placeholder="
                  $t('membership.etcareMembershipForm.fields[2].name')
                "
                required
              />
            </div>
          </div>

          <!-- Address -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div>
              <label
                for="Address"
                class="block text-sm font-medium text-primary"
                >{{
                  $t("membership.etcareMembershipForm.fields[3].label")
                }}</label
              >
              <input
                v-model="form.address"
                id="Address"
                :type="$t('membership.etcareMembershipForm.fields[3].type')"
                class="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                :placeholder="
                  $t('membership.etcareMembershipForm.fields[3].name')
                "
                required
              />
            </div>

            <fieldset class="mb-6">
              <legend class="text-sm font-medium text-primary mb-2">
                {{ $t("membership.etcareMembershipForm.fields[4].label") }}
              </legend>
              <div>
                <select
                  v-model="form.sex"
                  class="focus:ring-green-500 focus:border-green-500 text-secondary cursor-pointer block w-full shadow-sm sm:text-sm border-gray-300 p-2 rounded-md"
                >
                  <option class="text-secondary" value="" disabled selected>
                    {{ $t("membership.etcareMembershipForm.fields[4].label") }}
                  </option>
                  <option class="text-primary" value="M">
                    {{
                      $t("membership.etcareMembershipForm.fields[4].options[0]")
                    }}
                  </option>
                  <option class="text-primary" value="F">
                    {{
                      $t("membership.etcareMembershipForm.fields[4].options[1]")
                    }}
                  </option>
                  <option class="text-primary" value="O">
                    {{
                      $t("membership.etcareMembershipForm.fields[4].options[2]")
                    }}
                  </option>
                </select>
              </div>
            </fieldset>

            <div>
              <label
                for="nationality"
                class="block text-sm font-medium text-primary"
                >{{
                  $t("membership.etcareMembershipForm.fields[5].label")
                }}</label
              >
              <input
                v-model="form.nationality"
                id="nationality"
                :type="$t('membership.etcareMembershipForm.fields[0].type')"
                class="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                :placeholder="
                  $t('membership.etcareMembershipForm.fields[5].name')
                "
                required
              />
            </div>
          </div>

          <div class="mb-6 md:flex md:space-x-4">
            <div class="w-full">
              <label
                for="phone"
                class="block text-sm font-medium text-primary"
                >{{ $t("membership.etcareMembershipForm.fields[6].label") }}</label
              >
              <input
                v-model="form.phone"
                id="phone"
                :type="$t('membership.etcareMembershipForm.fields[6].label')"
                class="p-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                :placeholder="
                  $t('membership.etcareMembershipForm.fields[6].name')
                "
                required
              />
            </div>

            <div class="w-full">
              <fieldset class="mb-6">
                <legend class="text-sm font-medium text-primary mb-2">
                  {{ $t("maritalStatus.title") }}
                </legend>

                <div>
                  <select
                    v-model="form.marrie"
                    class="focus:ring-green-500 focus:border-green-500 text-secondary cursor-pointer block w-full shadow-sm sm:text-sm border-gray-300 p-2 rounded-md"
                  >
                    <option class="text-secondary" value="" disabled selected>
                      {{ $t("maritalStatus.title") }}
                    </option>
                    <option class="text-primary" value="M">
                      {{ $t("maritalStatus.single") }}
                    </option>
                    <option class="text-primary" value="F">
                      {{ $t("maritalStatus.married") }}
                    </option>
                  </select>
                </div>
              </fieldset>
            </div>
          </div>

          <div class="md:flex">
            <div class="mb-6">
              <label
                for="receipt"
                class="block text-sm font-medium text-primary"
                >{{
                  $t("membership.etcareMembershipForm.fields[7].label")
                }}</label
              >
              <input
                id="receipt"
                :type="$t('membership.etcareMembershipForm.fields[7].type')"
                required
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                @change="handleReceiptIdUpload"
              />
            </div>

            <div class="mb-6">
              <label
                for="receipt"
                class="block text-sm font-medium text-primary"
                >{{
                  $t("membership.etcareMembershipForm.fields[8].label")
                }}</label
              >
              <input
                id="receipt"
                :type="$t('membership.etcareMembershipForm.fields[8].type')"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                @change="handleReceiptIdUploadBack"
              />
            </div>
          
          </div>

          <div class="mb-6">
            <label
              for="receipt"
              class="block text-sm font-medium text-primary"
              >{{
                $t("membership.etcareMembershipForm.fields[9].label")
              }}</label
            >
            <input
              id="receipt"
              :type="$t('membership.etcareMembershipForm.fields[9].type')"
              required
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              @change="handleBankReceiptUpload"
            />
          </div>

          <div>
            <button
              type="submit"
              class="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              {{ $t("membership.etcareMembershipForm.submitButton") }}
            </button>
          </div>
        </form>
      </div>

      <div
        id="bank"
        class="my-div max-w-4xl pb-8 mb-12 mx-auto membertiop-padding bg-white text-primary shadow-md rounded-md"
      >
        <h1 class="font-bold font-oswald text-secondary text-xl">
          {{ $t("membership.bankAccounts.title") }}
        </h1>
        <ul class="bg-white shadow-md rounded-lg md:w-3/4 max-w-lg">
          <li class="border-b border-gray-200 p-4">
            <span class="font-medium text-gray-700">{{
              $t("membership.bankAccounts.accounts[0].bank")
            }}</span>
            <span class="block font-semibold">{{
              $t("membership.bankAccounts.accounts[0].number")
            }}</span>
          </li>
          <li class="border-b border-gray-200 p-4">
            <span class="font-medium text-gray-700">{{
              $t("membership.bankAccounts.accounts[1].bank")
            }}</span>
            <span class="block font-semibold">{{
              $t("membership.bankAccounts.accounts[1].number")
            }}</span>
          </li>
          <li class="border-b border-gray-200 p-4">
            <span class="font-medium text-gray-700">{{
              $t("membership.bankAccounts.accounts[2].bank")
            }}</span>
            <span class="block font-semibold">{{
              $t("membership.bankAccounts.accounts[2].number")
            }}</span>
          </li>
          <li class="border-b border-gray-200 p-4">
            <span class="font-medium text-gray-700">{{
              $t("membership.bankAccounts.accounts[3].bank")
            }}</span>
            <span class="block font-semibold">{{
              $t("membership.bankAccounts.accounts[3].number")
            }}</span>
          </li>
          <li class="border-b border-gray-200 p-4">
            <span class="font-medium text-gray-700">{{
              $t("membership.bankAccounts.accounts[4].bank")
            }}</span>
            <span class="block font-semibold">{{
              $t("membership.bankAccounts.accounts[4].number")
            }}</span>
          </li>
          <li class="border-b border-gray-200 p-4">
            <span class="font-medium text-gray-700">{{
              $t("membership.bankAccounts.accounts[5].bank")
            }}</span>
            <span class="block font-semibold">{{
              $t("membership.bankAccounts.accounts[5].number")
            }}</span>
          </li>
          <li class="border-b border-gray-200 p-4">
            <span class="font-medium text-gray-700">{{
              $t("membership.bankAccounts.accounts[6].bank")
            }}</span>
            <span class="block font-semibold">{{
              $t("membership.bankAccounts.accounts[6].number")
            }}</span>
          </li>
        </ul>
      </div>

      <div
        id="eligibility"
        class="my-div max-w-4xl pb-8 mb-12 mx-auto membertiop-padding bg-white text-primary shadow-md rounded-md"
      >
        <h1 class="mb-4 font-bold font-oswald text-secondary text-xl">
          {{ $t("membership.eligibilityCriteria.title") }}
        </h1>
        <ul class="list-decimal pl-6 space-y-3">
          <li>
            {{ $t("membership.eligibilityCriteria.list[0]") }}
          </li>
          <li>
            {{ $t("membership.eligibilityCriteria.list[1]") }}
          </li>
          <li>
            {{ $t("membership.eligibilityCriteria.list[2]") }}
            <ul class="list-disc pl-6 mt-2">
              <li>
                {{ $t("membership.eligibilityCriteria.list[3]") }}
              </li>
              <li>
                {{ $t("membership.eligibilityCriteria.list[4]") }}
              </li>
              <li>
                {{ $t("membership.eligibilityCriteria.list[5]") }}
              </li>
            </ul>
          </li>
          <li>
            {{ $t("membership.eligibilityCriteria.list[6]") }}
          </li>
        </ul>
      </div>

      <div
        id="becoming"
        class="my-div max-w-4xl pb-8 mb-12 mx-auto membertiop-padding bg-white text-primary shadow-md rounded-md"
      >
        <h1 class="mb-4 font-bold font-oswald text-secondary text-xl">
          {{ $t("membership.becomingAMember.title") }}
        </h1>
        <ul class="list-decimal pl-6 space-y-3">
          <li>
            {{ $t("membership.becomingAMember.steps[0]") }}
          </li>
          <li>
            {{ $t("membership.becomingAMember.steps[1]") }}
          </li>
          <li>
            {{ $t("membership.becomingAMember.steps[2]") }}
          </li>
          <li>
            {{ $t("membership.becomingAMember.steps[3]") }}
          </li>
        </ul>
      </div>

      <div
        id="benefits"
        class="my-div max-w-4xl pb-8 mb-12 mx-auto membertiop-padding bg-white text-primary shadow-md rounded-md"
      >
        <h1 class="mb-4 font-bold font-oswald text-secondary text-xl">
          {{ $t("membership.benefitsOfMembership.title") }}
        </h1>
        <ul class="list-decimal pl-6 space-y-3">
          <li>
            {{ $t("membership.benefitsOfMembership.list[0]") }}
          </li>
          <li>
            {{ $t("membership.benefitsOfMembership.list[1]") }}
          </li>
          <li>
            {{ $t("membership.benefitsOfMembership.list[2]") }}
          </li>
          <li>
            {{ $t("membership.benefitsOfMembership.list[3]") }}
          </li>
          <li>
            {{ $t("membership.benefitsOfMembership.list[4]") }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Membership Form - Etcare SACCOs Ltd",
});

import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const { $axios } = useNuxtApp();

const form = ref({
  firstName: "",
  fatherName: "",
  grandfatherName: "",
  address: "",
  sex: "",
  marrie: "",
  nationality: "",
  phone: "",
  receiptId: null,
  receiptBId: null,
  bankReceipt: null,
});

const handleReceiptIdUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    form.value.receiptId = file;
  }
};

const handleBankReceiptUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    form.value.bankReceipt = file;
  }
};

const handleReceiptIdUploadBack = (event) => {
  const file = event.target.files[0];
  if (file) {
    form.value.receiptBId = file;
  }
};

const handleSubmit = async () => {
  const formData = new FormData();
  formData.append("first_name", form.value.firstName);
  formData.append("father_name", form.value.fatherName);
  formData.append("grandfather_name", form.value.grandfatherName);
  formData.append("address", form.value.address);
  formData.append("sex", form.value.sex);
  formData.append("marrie", form.value.marrie);
  formData.append("nationality", form.value.nationality);
  formData.append("phone", form.value.phone);
  if (form.value.receiptId) {
    formData.append("receipt_id", form.value.receiptId);
  }
  if (form.value.bankReceipt) {
    formData.append("bank_receipt", form.value.bankReceipt);
  }
  if (form.value.receiptBId) {
    formData.append("bank_receipt_back", form.value.receiptBId);
  }

  try {
    const response = await $axios.post("/submissions/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // Reset form or show success message

    form.value = {
      firstName: "",
      fatherName: "",
      grandfatherName: "",
      address: "",
      sex: "",
      marrie: "",
      nationality: "",
      phone: "",
      receiptId: null,
      bankReceipt: null,
      receiptBId: null,
    };
    form.value.receiptId = null;
    form.value.receiptBId = null;
    form.value.bankReceipt = null;
    router.push("/success");
  } catch (error) {
    console.error("Submission failed:", error);
    // Handle error (show error message)
  }
};
</script>

<style scoped>
body {
  background-color: #f9fafb;
  font-family: Arial, sans-serif;
}

.my-div {
  border-bottom: 4px solid theme("colors.primary");
}

.membertiop-padding {
  padding: min(1.5rem, 8%) min(2.5rem, 8%);
}
</style>

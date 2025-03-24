<template>
    <div>
        <ServiceCard text="Membership Form" imgservice="/form.jpg" />

        <div class="body-padding_margin">
            <div
                class="my-div max-w-4xl pb-4 mb-12 mx-auto p-6 bg-white text-primary shadow-md bb-primary rounded-md justify-between flex font-robot gap-2">
                <nuxt-link class="links xxxs:text-sm md:text-lg" to="#bank">Bank Accounts</nuxt-link>
                <nuxt-link class="links xxxs:text-sm md:text-lg" to="#eligibility">Eligibility Criteria</nuxt-link>
                <nuxt-link class="links xxxs:text-sm md:text-lg" to="#benefits">Benefits of Membership</nuxt-link>
                <nuxt-link class="links xxxs:text-sm md:text-lg" to="#becoming">Becoming a Member</nuxt-link>
            </div>

            <div class="my-div max-w-4xl pb-8 mb-12 mx-auto p-6 bg-white text-primary shadow-md rounded-md font-robot">

                <h2 class="xxxs:text-2xl md:text-3xl font-bold text-center text-secondary mb-12 font-oswald">EtCare
                    Membership Form</h2>

                <form @submit.prevent="handleSubmit">
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        <div>
                            <label for="firstName" class="block text-sm font-medium text-primary">First
                                Name</label>
                            <input v-model="form.firstName" id="firstName" type="text"
                                class="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="First Name" required />
                        </div>
                        <div>
                            <label for="fatherName" class="block text-sm font-medium text-primary">Father
                                Name</label>
                            <input v-model="form.fatherName" id="fatherName" type="text"
                                class="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Father Name" required />
                        </div>
                        <div>
                            <label for="grandfatherName" class="block text-sm font-medium text-primary">Grandfather
                                Name</label>
                            <input v-model="form.grandfatherName" id="grandfatherName" type="text"
                                class="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Grandfather Name" required />
                        </div>
                    </div>

                    <!-- Address -->
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        <div>
                            <label for="Address" class="block text-sm font-medium text-primary">Address</label>
                            <input v-model="form.address" id="Address" type="text"
                                class="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Address" required />
                        </div>

                        <fieldset class="mb-6">
                            <legend class="text-sm font-medium text-primary mb-2">Sex</legend>
                            <div>
                                <select v-model="form.sex"
                                    class="focus:ring-green-500 focus:border-green-500 text-secondary cursor-pointer block w-full shadow-sm sm:text-sm border-gray-300 p-2 rounded-md">
                                    <option class="text-secondary" value="" disabled selected>Sex</option>
                                    <option class="text-primary" value="M">Male</option>
                                    <option class="text-primary" value="F">Female</option>
                                    <option class="text-primary" value="O">Other</option>
                                </select>
                            </div>
                        </fieldset>

                        <div>
                            <label for="nationality" class="block text-sm font-medium text-primary">nationality</label>
                            <input v-model="form.nationality" id="nationality" type="text"
                                class="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="nationality" required />
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="mb-6">
                        <label for="phone" class="block text-sm font-medium text-primary">Phone Number</label>
                        <input v-model="form.phone" id="phone" type="tel"
                            class="p-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            placeholder="Phone Number" required />
                    </div>

                    <div class="mb-6">
                        <label for="receipt" class="block text-sm font-medium text-primary">Attach Id(መታወቂያ)</label>
                        <input id="receipt" type="file" required
                            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            @change="handleReceiptIdUpload" />
                    </div>

                    <div class="mb-6">
                        <label for="receipt" class="block text-sm font-medium text-primary">Attach Receipt of Bank
                            Deposit:</label>
                        <input id="receipt" type="file" required
                            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            @change="handleBankReceiptUpload" />
                    </div>

                    <div>
                        <button type="submit"
                            class="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            <div id="bank" class="my-div max-w-4xl pb-8 mb-12 mx-auto p-6 bg-white text-primary shadow-md rounded-md">
                <h1 class="font-bold font-oswald text-secondary text-xl">Bank Accounts</h1>
                <ul class="bg-white shadow-md rounded-lg md:w-3/4 max-w-lg">
                    <li class="border-b border-gray-200 p-4">
                        <span class="font-medium text-gray-700">Commercial Bank Of Ethiopia Account 1</span>
                        <span class="block font-semibold">1000628868739</span>
                    </li>
                    <li class="border-b border-gray-200 p-4">
                        <span class="font-medium text-gray-700">Commercial Bank Of Ethiopia Interest Free Account
                            2</span>
                        <span class="block font-semibold">1000628867309</span>
                    </li>
                    <li class="border-b border-gray-200 p-4">
                        <span class="font-medium text-gray-700">Commercial Bank Of Ethiopia Account 3</span>
                        <span class="block font-semibold">1000628870927</span>
                    </li>
                    <li class="border-b border-gray-200 p-4">
                        <span class="font-medium text-gray-700">Commercial Bank Of Ethiopia Account 4</span>
                        <span class="block font-semibold">1000524668347</span>
                    </li>
                    <li class="border-b border-gray-200 p-4">
                        <span class="font-medium text-gray-700">Commercial Bank Of Ethiopia Interest Free Account
                            5</span>
                        <span class="block font-semibold">1000543908464</span>
                    </li>
                    <li class="p-4">
                        <span class="font-medium text-gray-700">Dashen Bank (Savings Account) Account 1</span>
                        <span class="block font-semibold">5264357490011</span>
                    </li>
                    <li class="p-4">
                        <span class="font-medium text-gray-700">Dashen Bank (Savings Account) Account 2</span>
                        <span class="block font-semibold">0264357490011</span>
                    </li>
                    <li class="p-4">
                        <span class="font-medium text-gray-700">Awash Bank (Savings Account) Interest Free Account
                            1</span>
                        <span class="block font-semibold">014371384732200</span>
                    </li>
                    <li class="p-4">
                        <span class="font-medium text-gray-700">Awash Bank (Savings Account) Account 2</span>
                        <span class="block font-semibold">013221384732200</span>
                    </li>
                </ul>
            </div>

            <div id="eligibility"
                class="my-div max-w-4xl pb-8 mb-12 mx-auto p-6 bg-white text-primary shadow-md rounded-md">
                <h1 class="mb-4 font-bold font-oswald text-secondary text-xl">Eligibility Criteria</h1>
                <ul class="list-decimal pl-6 space-y-3">
                    <li>
                        <p>Must be 18 years of age or older.</p>
                    </li>
                    <li>
                        <p>Willing to accept the society's bylaws, internal regulations, and guidelines.</p>
                    </li>
                    <li>
                        <p>Capable of paying the following:</p>
                        <ul class="list-disc pl-6 mt-2">
                            <li>Registration fee: <span class="font-semibold">1,500 ETB</span></li>
                            <li>Minimum initial share: <span class="font-semibold">2,000 ETB</span></li>
                            <li>Monthly savings contribution: <span class="font-semibold">750 ETB</span></li>
                        </ul>
                    </li>
                    <li>
                        <p>Able to provide identification documents such as a national ID, driver's license, or
                            passport.
                        </p>
                    </li>
                </ul>
            </div>

            <div id="becoming"
                class="my-div max-w-4xl pb-8 mb-12 mx-auto p-6 bg-white text-primary shadow-md rounded-md">
                <h1 class="mb-4 font-bold font-oswald text-secondary text-xl">Becoming a Member</h1>
                <ul class="list-decimal pl-6 space-y-3">
                    <li>
                        <p>Complete the membership application online or visit our office to collect a membership
                            booklet.
                        </p>
                    </li>
                    <li>
                        <p>Submit any required additional information.
                        </p>
                    </li>
                    <li>
                        <p>Your application will be evaluated by our expert membership committee.
                        </p>

                    </li>
                    <li>
                        <p>Upon approval, you will officially join EtCare SACCO, receive a membership certificate, and
                            enjoy
                            full access to all our services, products, and benefits.</p>
                    </li>
                </ul>
            </div>

            <div id="benefits"
                class="my-div max-w-4xl pb-8 mb-12 mx-auto p-6 bg-white text-primary shadow-md rounded-md">
                <h1 class="mb-4 font-bold font-oswald text-secondary text-xl">Benefits of Membership</h1>
                <ul class="list-decimal pl-6 space-y-3">
                    <li>
                        <p>Comprehensive Financial Services: Gain access to diverse financial products, such as savings
                            accounts, loans, and insurance.</p>
                    </li>
                    <li>
                        <p>Profit-Sharing Opportunities: Participate in profit-sharing and earn dividends based on
                            Etcare
                            SACCO’s financial regulations.
                        </p>
                    </li>
                    <li>
                        <p>Competitive Interest Rates: Enjoy favorable interest rates on both savings and loans.

                        </p>

                    </li>
                    <li>
                        <p>Flexible Repayment Options: We understand that everyone’s financial needs are unique, so we
                            offer
                            flexible repayment schedules tailored to your situation.</p>
                    </li>
                    <li>
                        <p>Dedicated Support: Receive guidance and assistance from our friendly and professional staff.

                        </p>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script setup>
useHead({
    title: 'Membership Form - Etcare SACCOs Ltd',
});

import { ref } from 'vue';
const router = useRouter();
const { $axios } = useNuxtApp();

const form = ref({
    firstName: '',
    fatherName: '',
    grandfatherName: '',
    address: '',
    sex: '',
    nationality: '',
    phone: '',
    receiptId: null,
    bankReceipt: null,
});

const receiptIdFile = ref(null);
const bankReceiptFile = ref(null);

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

const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('first_name', form.value.firstName);
    formData.append('father_name', form.value.fatherName);
    formData.append('grandfather_name', form.value.grandfatherName);
    formData.append('address', form.value.address);
    formData.append('sex', form.value.sex);
    formData.append('nationality', form.value.nationality);
    formData.append('phone', form.value.phone);
    if (receiptIdFile.value) {
        formData.append('receipt_id', receiptIdFile.value);
    }
    if (bankReceiptFile.value) {
        formData.append('bank_receipt', bankReceiptFile.value);
    }

    try {
        const response = await $axios.post('/submissions/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log('Submission successful:', response.data);
        // Reset form or show success message
        form.value = {
            firstName: '',
            fatherName: '',
            grandfatherName: '',
            address: '',
            sex: '',
            nationality: '',
            phone: '',
            receiptId: null,
            bankReceipt: null,
        };
        receiptIdFile.value = null;
        bankReceiptFile.value = null;
        router.push('/success'); 
    } catch (error) {
        console.error('Submission failed:', error);
        // Handle error (show error message)
    }

console.log(form)
};
</script>


<style>
body {
    background-color: #f9fafb;
    font-family: Arial, sans-serif;
}

.my-div {
    border-bottom: 4px solid theme('colors.primary');
}
</style>
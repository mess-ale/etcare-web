<template>
  <div class="text-primary pb-8 font-sens text-justify">
    <ServiceCard :text="$t('loans.title')" imgservice="/service/loan-p.png" />
    <div class="body-padding_margin">
      <div class="container">
        <div class="duration-500 flex gap-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div class="saving-right-box p-4">
                <h1
                  class="text-secondary font-oswald text-2xl text-center font-bold loan-title-padding"
                >
                  {{ $t("whyLoanWithUs.title") }}
                </h1>

                <div class="xxxs:space-y-1 md:space-y-2">
                  <div class="xxxs:gap-1 sm:gap-4 loan-comp-padding border-b border-gray-200">
                    <div class="flex items-center text-primary xxxs:space-x-2 sm:space-x-10">
                      <img src="/right.png" class="right-icon" />

                      <h2 class="xxxs:text-sm xs:text-base sm:text-lg flex items-center">
                        {{ $t("whySaveWithUs.reasons[0]") }}
                      </h2>
                    </div>
                  </div>
                  
                  <div class="xxxs:gap-1 sm:gap-4 loan-comp-padding  border-b border-gray-200">
                    <div class="flex items-center text-primary  xxxs:space-x-2 sm:space-x-10">
                      <img src="/right.png" class="right-icon" />

                      <h2 class="xxxs:text-sm xs:text-base sm:text-lg flex items-center">
                        {{ $t("whySaveWithUs.reasons[1]") }}
                      </h2>
                    </div>
                  </div>
                  
                  <div class="xxxs:gap-1 sm:gap-4 loan-comp-padding border-b border-gray-200">
                    <div class="flex items-center text-primary  xxxs:space-x-2 sm:space-x-10">
                      <img src="/right.png" class="right-icon" />

                      <h2 class="xxxs:text-sm xs:text-base sm:text-lg flex items-center">
                        {{ $t("whySaveWithUs.reasons[2]") }}
                      </h2>
                    </div>
                  </div>
                  
                  <div class="xxxs:gap-1 sm:gap-4 loan-comp-padding border-b border-gray-200">
                    <div class="flex items-center text-primary  xxxs:space-x-2 sm:space-x-10">
                      <img src="/right.png" class="right-icon" />

                      <h2 class="xxxs:text-sm xs:text-base sm:text-lg flex items-center">
                        {{ $t("whySaveWithUs.reasons[3]") }}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="xxxs:text-base sm:text-lg">
              <ul class="list-disc pl-5">
                <h1 class="saving-title text-center">
                  {{ $t("loans.types.title") }}
                </h1>
                <p>{{ $t("loans.intro") }}</p>
              </ul>

              <ul class="list-disc pl-5">
                <h1 class="saving-title">
                  {{ $t("loans.types.consumerLoan.title") }}
                </h1>
                <li>{{ $t("loans.types.consumerLoan.categories[0]") }}</li>
                <li>{{ $t("loans.types.consumerLoan.categories[1]") }}</li>
                <li>{{ $t("loans.types.consumerLoan.categories[2]") }}</li>
                <li>{{ $t("loans.types.consumerLoan.categories[3]") }}</li>
                <li>{{ $t("loans.types.consumerLoan.categories[4]") }}</li>
              </ul>

              <ul class="list-disc pl-5">
                <h1 class="saving-title">
                  {{ $t("loans.types.businessLoan.title") }}
                </h1>
                <li>{{ $t("loans.types.businessLoan.categories[0]") }}</li>
                <li>{{ $t("loans.types.businessLoan.categories[1]") }}</li>
                <li>{{ $t("loans.types.businessLoan.categories[2]") }}</li>
                <li>{{ $t("loans.types.businessLoan.categories[3]") }}</li>
                <li>{{ $t("loans.types.businessLoan.categories[4]") }}</li>
              </ul>

              <ul class="list-disc pl-5">
                <h1 class="saving-title">
                  {{ $t("loans.types.housingLoan.title") }}
                </h1>
                <li>{{ $t("loans.types.housingLoan.categories[0]") }}</li>
                <li>{{ $t("loans.types.housingLoan.categories[1]") }}</li>
                <li>{{ $t("loans.types.housingLoan.categories[2]") }}</li>
              </ul>

              <ul class="list-disc pl-5">
                <h1 class="saving-title">
                  {{ $t("loans.types.carLoan.title") }}
                </h1>
                <li>{{ $t("loans.types.carLoan.categories[0]") }}</li>
                <li>{{ $t("loans.types.carLoan.categories[1]") }}</li>
              </ul>

              <div class="pt-4 new-loans">
                <h1 class="font-bold font-2lg">
                  {{ $t("loans.types.specialShortTermLoan") }}
                </h1>
                <h1 class="font-bold font-2lg">
                  {{ $t("loans.types.leaseFinanceLoan") }}
                </h1>
                <h1 class="font-bold font-2lg">
                  {{ $t("loans.types.interestFreeLoanServices") }}
                </h1>
                <h1 class="font-bold font-2lg">
                  {{ $t("loans.types.salaryLoan") }}
                </h1>
              </div>

              <h1 class="saving-title text-center">{{ $t("loans.amountAndRepayment.title") }}</h1>

              <ul class="list-disc pl-5">
                <h1 class="saving-title">
                  {{ $t("loans.amountAndRepayment.consumerLoan.title") }}
                </h1>
                <li>{{ $t("loans.amountAndRepayment.consumerLoan.options[0]") }}</li>
                <li>{{ $t("loans.amountAndRepayment.consumerLoan.options[1]") }}</li>
              </ul>
              
              <ul class="list-disc pl-5">
                <h1 class="saving-title">
                  {{ $t("loans.amountAndRepayment.businessLoan.title") }}
                </h1>
                <li>{{ $t("loans.amountAndRepayment.businessLoan.options[0]") }}</li>
                <li>{{ $t("loans.amountAndRepayment.businessLoan.options[1]") }}</li>
                <li>{{ $t("loans.amountAndRepayment.businessLoan.options[2]") }}</li>
              </ul>
              <ul class="list-disc pl-5">
                <h1 class="saving-title">
                  {{ $t("loans.amountAndRepayment.housingLoan.title") }}
                </h1>
                <li>{{ $t("loans.amountAndRepayment.housingLoan.options[0]") }}</li>
                <li>{{ $t("loans.amountAndRepayment.housingLoan.options[1]") }}</li>
                <li>{{ $t("loans.amountAndRepayment.housingLoan.options[2]") }}</li>
              </ul>
              <ul class="list-disc pl-5">
                <h1 class="saving-title">
                  {{ $t("loans.amountAndRepayment.carLoan.title") }}
                </h1>
                <li>{{ $t("loans.amountAndRepayment.carLoan.options[0]") }}</li>
                <li>{{ $t("loans.amountAndRepayment.carLoan.options[1]") }}</li>
              </ul>
              <ul class="list-disc pl-5">
                <h1 class="saving-title">
                  {{ $t("loans.amountAndRepayment.specialShortTermLoan.title") }}
                </h1>
                <li>{{ $t("loans.amountAndRepayment.specialShortTermLoan.options[0]") }}</li>
                <li>{{ $t("loans.amountAndRepayment.specialShortTermLoan.options[1]") }}</li>
              </ul>
              <ul class="list-disc pl-5">
                <h1 class="saving-title">
                  {{ $t("loans.amountAndRepayment.salaryLoan.title") }}
                </h1>
                <li>{{ $t("loans.amountAndRepayment.salaryLoan.description") }}</li>
              </ul>
            

              <ul class="list-disc pl-5">
                <h1 class="saving-title text-center">
                  {{ $t("loans.eligibility.title") }}
                </h1>
                <li>{{ $t("loans.eligibility.requirements[0]") }}</li>
                <li>{{ $t("loans.eligibility.requirements[1]") }}</li>
                <li>{{ $t("loans.eligibility.requirements[2]") }}</li>
                <li>{{ $t("loans.eligibility.requirements[3]") }}</li>
                <li>{{ $t("loans.eligibility.requirements[4]") }}</li>
                <li>{{ $t("loans.eligibility.requirements[5]") }}</li>
              </ul>

              
              <ul class="list-disc pl-5">
                <h1 class="saving-title text-center">
                  {{ $t("loans.guaranteeTypes.title") }}
                </h1>
              </ul>

              <ul class="list-disc pl-5">
                <h1 class="saving-title text-center">
                  {{ $t("loans.guaranteeTypes.savingAndLotteryGuarantee.title") }}
                </h1>
                <li>{{ $t("loans.guaranteeTypes.savingAndLotteryGuarantee.description") }}</li>
              </ul>

              <ul class="list-disc pl-5">
                <h1 class="saving-title text-center">
                  {{ $t("loans.guaranteeTypes.letterOfGuaranteeOrSalary.title") }}
                </h1>
                <li>{{ $t("loans.guaranteeTypes.letterOfGuaranteeOrSalary.details[0]") }}</li>
                <li>{{ $t("loans.guaranteeTypes.letterOfGuaranteeOrSalary.details[1]") }}</li>
              </ul>
              
              <ul class="list-disc pl-5">
                <h1 class="saving-title text-center">
                  {{ $t("loans.guaranteeTypes.propertyGuarantee.title") }}
                </h1>
                <ul class="list-disc pl-5">
                    <h1 class="saving-title text-center">
                    {{ $t("loans.guaranteeTypes.propertyGuarantee.vehicle.title") }}
                    </h1>
                    <li>{{ $t("loans.guaranteeTypes.propertyGuarantee.vehicle.details[0]") }}</li>
                    <li>{{ $t("loans.guaranteeTypes.propertyGuarantee.vehicle.details[1]") }}</li>
                    <li>{{ $t("loans.guaranteeTypes.propertyGuarantee.vehicle.details[2]") }}</li>
                    <li>{{ $t("loans.guaranteeTypes.propertyGuarantee.vehicle.details[3]") }}</li>
                </ul>
                <ul class="list-disc pl-5">
                    <h1 class="saving-title text-center">
                    {{ $t("loans.guaranteeTypes.propertyGuarantee.fixedAssetGuarantee.title") }}
                    </h1>
                    <li>{{ $t("loans.guaranteeTypes.propertyGuarantee.fixedAssetGuarantee.details[0]") }}</li>
                    <li>{{ $t("loans.guaranteeTypes.propertyGuarantee.fixedAssetGuarantee.details[1]") }}</li>
                </ul>
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
  title: "Loan - Etcare SACCOs Ltd",
});
</script>

<style>
.new-loans {
    color: theme("colors.secondary");
    font-size: larger;
}

.loan-title-padding {
  padding: min(3rem, 6%);
}

.loan-comp-padding {
  padding: min(1rem, 2%);
}

@media (min-width: 200px) {
  .right-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}

@media (min-width: 500px) {
  .right-icon {
    width: 2rem;
    height: 2rem;
  }
}

@media (min-width: 800px) {
  .right-icon {
    width: 2.5rem;
    height: 2.5rem;
  }
}

@media (min-width: 1200px) {
  .right-icon {
    width: 3rem;
    height: 3rem;
  }
}

</style>
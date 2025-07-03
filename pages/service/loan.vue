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
                  class="text-secondary font-oswald text-2xl text-center font-bold p-4"
                >
                  {{ $t("whyLoanWithUs.title") }}
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

              


              <!-- <h1 class="saving-title">Loan amount and repayment period</h1>

              <ul class="list-disc pl-5">
                <h1 class="saving-title">Consumer loan</h1>
                <li>
                  5/Five months/ and above 15% regular savings and 10% lottery
                  Own member gets a consumer loan, the loan limit is 300,000.00
                  and the repayment period is up to It will be up to 30 months.
                </li>
                <li>
                  6/six months/ and above 15% regular savings and 10% interest
                  Own member gets a consumer loan, the loan limit is 400,000.00
                  and the repayment period is up to It will be up to 36 months.
                </li>
              </ul>

              <ul class="list-disc pl-5">
                <h1 class="saving-title">Business loan</h1>
                <li>
                  5/Five months/ and above 20% normal savings and 10% lottery
                  Your member can get a business loan with a loan limit of
                  500,000.00 and a repayment period of up to It will be up to 36
                  months.
                </li>
                <li>
                  6/six months/more than 20% normal savings and 10% lottery Own
                  member gets a business loan the loan limit is 750,000.00 and
                  the repayment period is up to It will be up to 48 months.
                </li>
                <li>
                  12/twelve months/ more than 20% regular savings and 5%
                  interest Own member gets a business loan and the loan limit is
                  1,500,000.00 and the repayment period It will be up to 60
                  months
                </li>
              </ul>

              <ul class="list-disc pl-5">
                <h1 class="saving-title">
                  Loans for home purchase, construction and renovation
                </h1>
                <li>
                  20% normal savings of 6/six months/ and above in a row to
                  borrow a home loan A member who saves and buys a 10% lot gets
                  a home loan with a loan limit of 2,000,000.00. The repayment
                  period will be up to 60 months.
                </li>
                <li>
                  8/eight months/ and above 20% regular savings and 10% interest
                  Own member gets a home loan and the loan limit is 3,000,000.00
                  and the repayment period is up to It will be up to 84 months.
                </li>
                <li>
                  12/twelve months/ and above 18% regular savings and 7% A
                  member who owns a lot gets a home loan and the loan ceiling is
                  5,000,000.00 and the repayment period is It will be up to 84
                  months.
                </li>
              </ul>

              <ul class="list-disc pl-5">
                <h1 class="saving-title">Car loan</h1>
                <li>
                  20% regular savings of 6 months and more and 10% of lotteries
                  A member gets a car loan with a loan limit of 2,000,000.00 and
                  a repayment period will be up to 48 months.
                </li>
                <li>
                  8/eight months/ and more who has saved 20% regular savings and
                  bought 5% lottery A member gets a car loan with a loan limit
                  of up to 3,000,000.00 and the repayment period will be up to
                  60 months.
                </li>
              </ul>

              <ul class="list-disc pl-5">
                <h1 class="saving-title">Special short-term loans</h1>
                <li>
                  For four months and more, he has saved 25% regular savings and
                  bought 5% lotteries and A special short-term loan for members
                  in business with no interest at 10% commission You will get it
                  by paying only /Commission/ and the loan limit is 400,000.00
                  and the repayment period It will last up to four months. The
                  loan repayment period is twice a month every fifteen days
                </li>
                <li>
                  6 months continuous borrowing 20% ​​regular savings and 5% lot
                  purchase and business Special short-term loan for working
                  members with no interest paid at 15% commission only. You will
                  get it by paying, and the loan ceiling is 600,000.00 and the
                  repayment period will be up to 6 months. The loan repayment
                  period will be twice a month every fifteen days
                </li>
              </ul>

              <ul class="list-disc pl-5">
                <h1 class="saving-title">Salary loan</h1>
                <li>
                  For member of government employees, bank employees, insurance
                  employees and hospital employees 15% advance savings and 5% of
                  6 months net salary for emergency loans Complete the lot and
                  submit a letter of guarantee from the office where you are
                  working for a loan that will be repaid in one year You can
                  borrow.
                </li>
                <li>
                  6 months continuous borrowing 20% ​​regular savings and 5% lot
                  purchase and business Special short-term loan for working
                  members with no interest paid at 15% commission only. You will
                  get it by paying, and the loan ceiling is 600,000.00 and the
                  repayment period will be up to 6 months. The loan repayment
                  period will be twice a month every fifteen days
                </li>
              </ul> -->
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

.right-icon {
    width: 3rem;
    height: 3rem;
}

</style>
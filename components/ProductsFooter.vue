<template>
  <div>
    <div class="pt-10 pb-3 px-[2rem] lg:px-[5rem] bg-[#64748B]">
      <div>
        <div class="flex justify-center lg:justify-start mb-5 md:mb-8">
          <NuxtLink to="/" class="inline-block">
            <NuxtImg
              src="/images/logos/w-labs-white.png"
              alt="W Soft Logo"
              class="w-[134px]"
            />
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <!-- Contact Information -->
          <div>
            <h3 class="text-lg font-semibold mb-4 text-[#F8FAFC99]">
              {{ $t("productsFooter.contactInformation") }}
            </h3>
            <div>
              <div class="flex items-center gap-3 text-[14px] mt-3">
                <span class="text-[#F8FAFC99]">{{
                  $t("productsFooter.inquiryEmail")
                }}</span>
                <span class="text-white">contact@wsoft.space</span>
              </div>
              <div class="flex items-center gap-3 text-[14px] mt-3">
                <span class="text-[#F8FAFC99]">{{
                  $t("productsFooter.inquiryType")
                }}</span>
                <span class="text-white">{{
                  $t("productsFooter.inquiryTypeValue")
                }}</span>
              </div>
            </div>
          </div>

          <!-- Provider Information -->
          <div>
            <h3 class="text-lg font-semibold mb-4 text-[#F8FAFC99]">
              {{ $t("productsFooter.providerInformation") }}
            </h3>
            <div>
              <div class="flex items-center gap-3 text-[14px]">
                <span class="text-[#F8FAFC99]">{{
                  $t("productsFooter.serviceProvider")
                }}</span>
                <span class="text-white">W Labs Inc.</span>
              </div>
              <div class="flex items-center gap-3 text-[14px] mt-3">
                <span class="text-[#F8FAFC99]">{{
                  $t("productsFooter.organizationType")
                }}</span>
                <span class="text-white">{{
                  $t("productsFooter.organizationTypeValue")
                }}</span>
              </div>
              <div class="flex items-center gap-3 text-[14px] mt-3">
                <span class="text-[#F8FAFC99]">{{
                  $t("productsFooter.location")
                }}</span>
                <span class="text-white">{{
                  $t("productsFooter.locationValue")
                }}</span>
              </div>
            </div>
          </div>

          <!-- Registrations -->
          <div>
            <h3 class="text-lg font-semibold mb-4 text-[#F8FAFC99]">
              {{ $t("registrations") }}
            </h3>
            <div>
              <a
                href="https://www.dunsregistered.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-[14px] text-white font-inter hover:text-white/80 transition-colors duration-300 rounded-md px-4 py-2 border border-white group"
                @click="trackSealClick"
              >
                {{ $t("duns-registered") }}: 696568010
                <div
                  class="text-white group-hover:text-white/80 transition-colors duration-300"
                >
                  <NuxtImg
                    src="/images/footer/duns-arrow-white.svg"
                    class="h-[16px] w-[16px]"
                    alt="arrow"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const navLinks = [
  {
    title: "About Us",
    to: "/about-us",
  },
  {
    title: "Services",
    to: "/services",
  },
  {
    title: "Our Works",
    to: "/our-works",
  },
  {
    title: "Blogs",
    to: "/blogs",
  },
];

const isUedu = ref(false);

const trackSealClick = () => {
  console.log("D-U-N-S® Seal clicked");
};

onMounted(() => {
  isUedu.value = window.location.hostname === "uedu.wsoft.space";
});
</script>

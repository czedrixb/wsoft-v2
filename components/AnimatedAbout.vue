<template>
  <div ref="aboutAnimatedContainer">
    <!-- Section 1: Cutting Edge -->
    <div class="about-section bg-[#e2e8f0]">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <div class="relative">
          <!-- Mobile/Tablet: top caption + image/animation card + bottom caption (matches Figma) -->
          <div class="lg:hidden flex flex-col gap-4">
            <div class="about-mobile-top backdrop-blur-[8px] bg-[#D3D3D399] rounded-[14px] p-4">
              <p class="text-[#20252CE5] text-[14px] font-opensans">
                {{
                  $t("about.animated_about.cutting_edge.second_description", {
                    brand: brand,
                  })
                }}
              </p>
            </div>

            <div class="about-mobile-media relative rounded-[14px] overflow-hidden min-h-[230px] flex">
              <img
                src="/images/revamp/about-us/cutting-edge.png"
                alt=""
                aria-hidden="true"
                class="absolute inset-0 w-full h-full object-cover"
              />
              <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                <video autoplay loop muted playsinline class="h-auto object-contain" width="200">
                  <source
                    src="/images/revamp/about-us/cutting-edge-animate.webm"
                    type="video/webm"
                  />
                </video>
              </div>
            </div>

            <div class="about-mobile-bottom backdrop-blur-[8px] bg-[#D3D3D399] rounded-[14px] p-4 flex flex-col gap-3">
              <h3 class="text-[#752323] text-[20px] font-satoshi font-[400] leading-[28px]">
                {{ $t("about.animated_about.cutting_edge.title") }}
              </h3>
              <p class="text-[#20252CE5] text-[14px] font-opensans">
                {{
                  $t("about.animated_about.cutting_edge.description", {
                    brand: brand,
                  })
                }}
              </p>
              <div class="flex justify-end">
                <BaseButton
                  variant="secondary"
                  class="w-full sm:w-auto !px-4 sm:!pl-[56px] sm:!pr-[40px]"
                  @click="openContact($t('about.animated_about.cutting_edge.cta'))"
                >
                  {{ $t("about.animated_about.cutting_edge.cta") }}
                </BaseButton>
              </div>
            </div>
          </div>

          <div class="relative hidden lg:block">
            <div
              class="grid grid-cols-3 gap-8 items-center min-h-[500px]"
            >
              <div class="self-center">
                <h3 class="text-[#64748B] text-[24px] font-[400]">
                  {{ $t("about.animated_about.cutting_edge.title") }}
                </h3>
                <p class="text-[#20252CE5] text-md mt-8 max-w-md">
                  {{
                    $t("about.animated_about.cutting_edge.description", {
                      brand: brand,
                    })
                  }}
                </p>
                <div class="mt-6 flex justify-end max-w-md">
                  <BaseButton variant="secondary" @click="openContact($t('about.animated_about.cutting_edge.cta'))">
                    {{ $t("about.animated_about.cutting_edge.cta") }}
                  </BaseButton>
                </div>
              </div>

              <div class="relative flex items-center justify-center">
                <div class="section-main-img w-full">
                  <NuxtImg
                    src="/images/revamp/about-us/cutting-edge.png"
                    class="h-auto max-w-full object-cover"
                    width="598px"
                    :alt="$t('about.animated_about.cutting_edge.title')"
                  />
                </div>
                <div
                  class="section-animate-img absolute inset-0 flex items-center justify-center z-10"
                >
                  <video
                    autoplay
                    loop
                    muted
                    playsinline
                    class="h-auto object-cover"
                    width="400"
                  >
                    <source
                      src="/images/revamp/about-us/cutting-edge-animate.webm"
                      type="video/webm"
                    />
                  </video>
                </div>
              </div>

              <div class="section-second-text self-center">
                <p class="text-[#20252CE5] text-md mt-8 max-w-md">
                  {{
                    $t("about.animated_about.cutting_edge.second_description", {
                      brand: brand,
                    })
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 2: Expertise Innovation -->
    <div class="about-section bg-[#ffffff]">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <div class="relative">
          <!-- Mobile/Tablet: top caption + image/animation card + bottom caption (matches Figma) -->
          <div class="lg:hidden flex flex-col gap-4">
            <div class="about-mobile-top backdrop-blur-[8px] rounded-[14px] p-4">
              <p class="text-[#20252CE5] text-[14px] font-opensans">
                {{
                  $t(
                    "about.animated_about.expertise_innovation.second_description",
                    { brand: brand },
                  )
                }}
              </p>
            </div>

            <div class="about-mobile-media relative rounded-[14px] overflow-hidden min-h-[230px] flex">
              <img
                src="/images/revamp/about-us/expertise-innovation.png"
                alt=""
                aria-hidden="true"
                class="absolute inset-0 w-full h-full object-cover"
              />
              <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                <video autoplay loop muted playsinline class="h-auto object-contain" width="200">
                  <source
                    src="/images/revamp/about-us/expertise-innovation-animate.webm"
                    type="video/webm"
                  />
                </video>
              </div>
            </div>

            <div class="about-mobile-bottom backdrop-blur-[8px] bg-[#FFFFFF99] rounded-[14px] p-4 flex flex-col gap-3">
              <h3 class="text-[#752323] text-[20px] font-satoshi font-[400] leading-[28px]">
                {{ $t("about.animated_about.expertise_innovation.title") }}
              </h3>
              <p class="text-[#20252CE5] text-[14px] font-opensans">
                {{
                  $t("about.animated_about.expertise_innovation.description", {
                    brand: brand,
                  })
                }}
              </p>
              <div class="flex justify-end">
                <BaseButton
                  variant="secondary"
                  class="w-full sm:w-auto !px-4 sm:!pl-[56px] sm:!pr-[40px]"
                  @click="openContact($t('about.animated_about.expertise_innovation.cta'))"
                >
                  {{ $t("about.animated_about.expertise_innovation.cta") }}
                </BaseButton>
              </div>
            </div>
          </div>

          <div class="relative hidden lg:block">
            <div
              class="grid grid-cols-3 gap-8 items-center min-h-[500px]"
            >
              <div class="section-second-text self-center">
                <p class="text-[#20252CE5] text-md mt-8 max-w-md">
                  {{
                    $t(
                      "about.animated_about.expertise_innovation.second_description",
                      { brand: brand },
                    )
                  }}
                </p>
              </div>

              <div class="relative flex items-center justify-center">
                <div class="section-main-img w-full">
                  <NuxtImg
                    src="/images/revamp/about-us/expertise-innovation.png"
                    class="h-auto max-w-full object-cover"
                    width="598px"
                    :alt="$t('about.animated_about.expertise_innovation.title')"
                  />
                </div>
                <div
                  class="section-animate-img absolute inset-0 flex items-center justify-center z-10"
                >
                  <video
                    autoplay
                    loop
                    muted
                    playsinline
                    class="h-auto object-cover"
                    width="400"
                  >
                    <source
                      src="/images/revamp/about-us/expertise-innovation-animate.webm"
                      type="video/webm"
                    />
                  </video>
                </div>
              </div>

              <div class="self-center">
                <h3 class="text-[#64748B] text-[24px] font-[400]">
                  {{ $t("about.animated_about.expertise_innovation.title") }}
                </h3>
                <p class="text-[#20252CE5] text-md mt-8 max-w-md">
                  {{
                    $t("about.animated_about.expertise_innovation.description", {
                      brand: brand,
                    })
                  }}
                </p>
                <div class="mt-6 flex justify-end max-w-md">
                  <BaseButton variant="secondary" @click="openContact($t('about.animated_about.expertise_innovation.cta'))">
                    {{ $t("about.animated_about.expertise_innovation.cta") }}
                  </BaseButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ContactModal v-model="showContactModal" :subject="contactSubject" />

    <!-- Section 3: Reliable Partner -->
    <div class="about-section bg-[#e2e8f0]">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <div class="relative">
          <!-- Mobile/Tablet: top caption + image/animation card + bottom caption (matches Figma) -->
          <div class="lg:hidden flex flex-col gap-4">
            <div class="about-mobile-top backdrop-blur-[8px] bg-[#D3D3D399] rounded-[14px] p-4">
              <p class="text-[#20252CE5] text-[14px] font-opensans">
                {{
                  $t(
                    "about.animated_about.reliable_partner.second_description",
                    { brand: brand },
                  )
                }}
              </p>
            </div>

            <div class="about-mobile-media relative rounded-[14px] overflow-hidden min-h-[230px] flex">
              <img
                src="/images/revamp/about-us/reliable-technology.png"
                alt=""
                aria-hidden="true"
                class="absolute inset-0 w-full h-full object-cover"
              />
              <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                <video autoplay loop muted playsinline class="h-auto object-contain" width="200">
                  <source
                    src="/images/revamp/about-us/reliable-technology-animate.webm"
                    type="video/webm"
                  />
                </video>
              </div>
            </div>

            <div class="about-mobile-bottom backdrop-blur-[8px] bg-[#D3D3D399] rounded-[14px] p-4 flex flex-col gap-3">
              <h3 class="text-[#752323] text-[20px] font-satoshi font-[400] leading-[28px]">
                {{ $t("about.animated_about.reliable_partner.title") }}
              </h3>
              <p class="text-[#20252CE5] text-[14px] font-opensans">
                {{
                  $t("about.animated_about.reliable_partner.description", {
                    brand: brand,
                  })
                }}
              </p>
              <div class="flex justify-end">
                <BaseButton
                  variant="secondary"
                  class="w-full sm:w-auto !px-4 sm:!pl-[56px] sm:!pr-[40px]"
                  @click="openContact($t('about.animated_about.reliable_partner.cta'))"
                >
                  {{ $t("about.animated_about.reliable_partner.cta") }}
                </BaseButton>
              </div>
            </div>
          </div>

          <div class="relative hidden lg:block">
            <div
              class="grid grid-cols-3 gap-8 items-center min-h-[500px]"
            >
              <div class="self-center">
                <h3 class="text-[#64748B] text-[24px] font-[400]">
                  {{ $t("about.animated_about.reliable_partner.title") }}
                </h3>
                <p class="text-[#20252CE5] text-md mt-8">
                  {{
                    $t("about.animated_about.reliable_partner.description", {
                      brand: brand,
                    })
                  }}
                </p>
                <div class="mt-6 flex justify-end">
                  <BaseButton variant="secondary" @click="openContact($t('about.animated_about.reliable_partner.cta'))">
                    {{ $t("about.animated_about.reliable_partner.cta") }}
                  </BaseButton>
                </div>
              </div>

              <div class="relative flex items-center justify-center">
                <div class="section-main-img w-full">
                  <NuxtImg
                    src="/images/revamp/about-us/reliable-technology.png"
                    class="h-auto max-w-full object-cover"
                    width="598px"
                    :alt="$t('about.animated_about.reliable_partner.title')"
                  />
                </div>
                <div
                  class="section-animate-img absolute inset-0 flex items-center justify-center z-10"
                >
                  <video
                    autoplay
                    loop
                    muted
                    playsinline
                    class="h-auto object-cover"
                    width="400"
                  >
                    <source
                      src="/images/revamp/about-us/reliable-technology-animate.webm"
                      type="video/webm"
                    />
                  </video>
                </div>
              </div>

              <div class="section-second-text self-center">
                <p class="text-[#20252CE5] text-md mt-8 max-w-md">
                  {{
                    $t(
                      "about.animated_about.reliable_partner.second_description",
                      { brand: brand },
                    )
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutAnimatedContainer = ref(null);
const showContactModal = ref(false);
const contactSubject = ref("");
const openContact = (subject) => {
  contactSubject.value = subject;
  showContactModal.value = true;
};
let ctx = null;

const isMobile = () => window.innerWidth < 1024;
const isUedu = ref(false);

onMounted(() => {
  ctx = gsap.context(() => {
    const sections = gsap.utils.toArray(".about-section");

    sections.forEach((section) => {
      const animateImg = section.querySelector(".section-animate-img");
      const mainImg = section.querySelector(".section-main-img");
      const secondText = section.querySelector(".section-second-text");

      const mobile = isMobile();

      if (mobile) {
        const mobileTop = section.querySelector(".about-mobile-top");
        const mobileMedia = section.querySelector(".about-mobile-media");
        const mobileBottom = section.querySelector(".about-mobile-bottom");

        gsap.set([mobileTop, mobileMedia, mobileBottom], { opacity: 0, y: 0 });

        ScrollTrigger.create({
          trigger: section,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(mobileTop, { opacity: 1, duration: 0.4, ease: "power1.out" });
            gsap.to(mobileMedia, {
              opacity: 1,
              duration: 0.4,
              delay: 0.1,
              ease: "power1.out",
            });
            gsap.to(mobileBottom, {
              opacity: 1,
              duration: 0.4,
              delay: 0.2,
              ease: "power1.out",
            });
          },
        });
        return;
      }

      gsap.set(animateImg, { opacity: 0, y: "180%" });
      gsap.set(mainImg, { opacity: 0, y: 200 });
      gsap.set(secondText, { opacity: 0, y: 200 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      tl.to(
        animateImg,
        { opacity: 1, y: "0%", duration: 1.5, ease: "power2.out" },
        0.5,
      );
      tl.to(
        mainImg,
        { opacity: 1, y: 0, duration: 2, ease: "power2.out" },
        1.8,
      );
      tl.to(
        secondText,
        { opacity: 1, y: 0, duration: 2, ease: "power2.out" },
        1.8,
      );
    });
  }, aboutAnimatedContainer.value);

  isUedu.value = window.location.hostname === "ueducation.co.kr";
});

const brand = computed(() => (isUedu.value ? "UEducation" : "W Labs"));

onUnmounted(() => {
  ctx?.revert();
});
</script>

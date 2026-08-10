<template>
  <div ref="servicesContainer">
    <div class="service-section bg-[#e2e8f0] relative overflow-hidden">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <!-- Tablet/Mobile: two-card stacked layout (WOS-263) -->
        <div class="lg:hidden flex flex-col gap-4">
          <!-- Card 1: context image + frosted glass text overlay -->
          <div class="mobile-fade relative rounded-[14px] overflow-hidden min-h-[360px] flex flex-col">
            <img
              src="/images/revamp/home/services/ai-automation-1.png"
              alt=""
              aria-hidden="true"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="relative mt-auto p-4">
              <div class="backdrop-blur-[8px] bg-[#D8CBEB66] rounded-[14px] p-4 flex flex-col gap-3 w-full">
                <h3 class="text-[#752323] text-[20px] font-satoshi font-[400] leading-[28px]">
                  {{ $t("home.services.aiAutomation.title") }}
                </h3>
                <p class="text-[#20252CE5] text-[14px] font-opensans">
                  {{ $t("home.services.aiAutomation.subtitle") }}
                </p>
                <p class="text-[#20252CE5] text-[14px] font-opensans">
                  {{ $t("home.services.aiAutomation.description") }}
                </p>
                <div class="flex justify-end">
                  <BaseButton
                    variant="secondary"
                    class="w-full sm:w-auto !px-4 sm:!pl-[56px] sm:!pr-[40px]"
                    @click="openContact($t('home.services.aiAutomation.cta'))"
                  >
                    {{ $t("home.services.aiAutomation.cta") }}
                  </BaseButton>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 2: main image + animate gif overlay -->
          <div class="mobile-fade relative rounded-[14px] overflow-hidden min-h-[360px]">
            <img
              src="/images/revamp/home/services/ai-automation-2.png"
              alt=""
              aria-hidden="true"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img
                src="/images/revamp/home/services/ai-automation-animate.gif"
                alt=""
                aria-hidden="true"
                class="h-[180px] w-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div class="relative hidden lg:block">
          <div
            class="grid grid-cols-3 gap-8 items-center min-h-[500px]"
          >
            <div class="text-block self-center" data-section="0">
              <h3 class="text-[#752323] text-[24px] font-[400]">
                {{ $t("home.services.aiAutomation.title") }}
              </h3>
              <p class="text-[#20252CE5] text-[16px] mb-5">
                {{ $t("home.services.aiAutomation.subtitle") }}
              </p>
              <p class="text-[#20252CE5] text-[16px]">
                {{ $t("home.services.aiAutomation.description") }}
              </p>
              <div class="mt-8">
                <BaseButton variant="secondary" @click="openContact($t('home.services.aiAutomation.cta'))">
                  {{ $t("home.services.aiAutomation.cta") }}
                </BaseButton>
              </div>
            </div>

            <div class="image-parallax" data-direction="up">
              <NuxtImg
                src="/images/revamp/home/services/ai-automation-1.png"
                class="h-auto object-cover w-full"
                width="598px"
              />
            </div>

            <div class="image-parallax" data-direction="down">
              <NuxtImg
                src="/images/revamp/home/services/ai-automation-2.png"
                class="h-auto object-cover w-full"
                width="598px"
              />
            </div>
          </div>

          <div
            class="animate-img pointer-events-none absolute top-0 left-[38%] w-[33.33%] h-full flex items-center z-10"
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
                src="/images/revamp/home/services/ai-automation-animate.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 2: Legacy Modernization -->
    <div class="service-section bg-[#ffffff] relative overflow-hidden">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <!-- Tablet/Mobile: two-card stacked layout (WOS-263) -->
        <div class="lg:hidden flex flex-col gap-4">
          <div class="mobile-fade relative rounded-[14px] overflow-hidden min-h-[360px] flex flex-col">
            <img
              src="/images/revamp/home/services/legacy-systems-1.png"
              alt=""
              aria-hidden="true"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="relative mt-auto p-4">
              <div class="backdrop-blur-[8px] bg-[#D8CBEB66] rounded-[14px] p-4 flex flex-col gap-3 w-full">
                <h3 class="text-[#752323] text-[20px] font-satoshi font-[400] leading-[28px]">
                  {{ $t("home.services.legacyModernization.title") }}
                </h3>
                <p class="text-[#20252CE5] text-[14px] font-opensans">
                  {{ $t("home.services.legacyModernization.subtitle") }}
                </p>
                <p class="text-[#20252CE5] text-[14px] font-opensans">
                  {{ $t("home.services.legacyModernization.description") }}
                </p>
                <div class="flex justify-end">
                  <BaseButton
                    variant="secondary"
                    class="w-full sm:w-auto !px-4 sm:!pl-[56px] sm:!pr-[40px]"
                    @click="openContact($t('home.services.legacyModernization.cta'))"
                  >
                    {{ $t("home.services.legacyModernization.cta") }}
                  </BaseButton>
                </div>
              </div>
            </div>
          </div>
          <div class="mobile-fade relative rounded-[14px] overflow-hidden min-h-[360px]">
            <img
              src="/images/revamp/home/services/legacy-systems-2.png"
              alt=""
              aria-hidden="true"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img
                src="/images/revamp/home/services/legacy-system-animate.gif"
                alt=""
                aria-hidden="true"
                class="h-[180px] w-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div class="relative hidden lg:block">
          <div
            class="grid grid-cols-3 gap-8 items-center min-h-[500px]"
          >
            <div class="image-parallax" data-direction="up">
              <NuxtImg
                src="/images/revamp/home/services/legacy-systems-1.png"
                class="h-auto object-cover w-full"
                width="598px"
              />
            </div>

            <div class="image-parallax" data-direction="down">
              <NuxtImg
                src="/images/revamp/home/services/legacy-systems-2.png"
                class="h-auto object-cover w-full"
                width="598px"
              />
            </div>

            <div class="text-block self-center" data-section="1">
              <h3 class="text-[#752323] text-[24px] font-[400]">
                {{ $t("home.services.legacyModernization.title") }}
              </h3>
              <p class="text-[#20252CE5] text-[16px] mb-5">
                {{ $t("home.services.legacyModernization.subtitle") }}
              </p>
              <p class="text-[#20252CE5] text-[16px]">
                {{ $t("home.services.legacyModernization.description") }}
              </p>
              <div class="mt-8">
                <BaseButton variant="secondary" @click="openContact($t('home.services.legacyModernization.cta'))">
                  {{ $t("home.services.legacyModernization.cta") }}
                </BaseButton>
              </div>
            </div>
          </div>

          <div
            class="animate-img pointer-events-none absolute top-0 left-[38%] w-[33.33%] h-full flex items-center z-10"
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
                src="/images/revamp/home/services/legacy-system-animate.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 3: SaaS Development -->
    <div class="service-section bg-[#e2e8f0] relative overflow-hidden">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <!-- Tablet/Mobile: two-card stacked layout (WOS-263) -->
        <div class="lg:hidden flex flex-col gap-4">
          <div class="mobile-fade relative rounded-[14px] overflow-hidden min-h-[360px] flex flex-col">
            <img
              src="/images/revamp/home/services/saas-custom-1.png"
              alt=""
              aria-hidden="true"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="relative mt-auto p-4">
              <div class="backdrop-blur-[8px] bg-[#D8CBEB66] rounded-[14px] p-4 flex flex-col gap-3 w-full">
                <h3 class="text-[#752323] text-[20px] font-satoshi font-[400] leading-[28px]">
                  {{ $t("home.services.saasDevelopment.title") }}
                </h3>
                <p class="text-[#20252CE5] text-[14px] font-opensans">
                  {{ $t("home.services.saasDevelopment.subtitle") }}
                </p>
                <p class="text-[#20252CE5] text-[14px] font-opensans">
                  {{ $t("home.services.saasDevelopment.description") }}
                </p>
                <div class="flex justify-end">
                  <BaseButton
                    variant="secondary"
                    class="w-full sm:w-auto !px-4 sm:!pl-[56px] sm:!pr-[40px]"
                    @click="openContact($t('home.services.saasDevelopment.cta'))"
                  >
                    {{ $t("home.services.saasDevelopment.cta") }}
                  </BaseButton>
                </div>
              </div>
            </div>
          </div>
          <div class="mobile-fade relative rounded-[14px] overflow-hidden min-h-[360px]">
            <img
              src="/images/revamp/home/services/saas-custom-2.png"
              alt=""
              aria-hidden="true"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img
                src="/images/revamp/home/services/saas-custom-animate.gif"
                alt=""
                aria-hidden="true"
                class="h-[180px] w-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div class="relative hidden lg:block">
          <div
            class="grid grid-cols-3 gap-8 items-center min-h-[500px]"
          >
            <div class="text-block self-center" data-section="2">
              <h3 class="text-[#752323] text-[24px] font-[400]">
                {{ $t("home.services.saasDevelopment.title") }}
              </h3>
              <p class="text-[#20252CE5] text-[16px] mb-5">
                {{ $t("home.services.saasDevelopment.subtitle") }}
              </p>
              <p class="text-[#20252CE5] text-[16px]">
                {{ $t("home.services.saasDevelopment.description") }}
              </p>
              <div class="mt-8">
                <BaseButton variant="secondary" @click="openContact($t('home.services.saasDevelopment.cta'))">
                  {{ $t("home.services.saasDevelopment.cta") }}
                </BaseButton>
              </div>
            </div>

            <div class="image-parallax" data-direction="up">
              <img
                src="/images/revamp/home/services/saas-custom-1.png"
                class="h-auto object-cover w-full"
                width="598px"
              />
            </div>

            <div class="image-parallax" data-direction="down">
              <NuxtImg
                src="/images/revamp/home/services/saas-custom-2.png"
                class="h-auto object-cover w-full"
                width="598px"
              />
            </div>
          </div>

          <div
            class="animate-img pointer-events-none absolute top-0 left-[38%] w-[33.33%] h-full flex items-center z-10"
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
                src="/images/revamp/home/services/saas-custom-animate.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 4: Public Sector -->
    <div class="service-section bg-[#ffffff] relative overflow-hidden">
      <div class="mx-auto px-8 max-w-screen-4xl py-16">
        <!-- Tablet/Mobile: two-card stacked layout (WOS-263) -->
        <div class="lg:hidden flex flex-col gap-4">
          <div class="mobile-fade relative rounded-[14px] overflow-hidden min-h-[360px] flex flex-col">
            <img
              src="/images/revamp/home/services/education-administration-1.png"
              alt=""
              aria-hidden="true"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="relative mt-auto p-4">
              <div class="backdrop-blur-[8px] bg-[#D8CBEB66] rounded-[14px] p-4 flex flex-col gap-3 w-full">
                <h3 class="text-[#752323] text-[20px] font-satoshi font-[400] leading-[28px]">
                  {{ $t("home.services.publicSector.title") }}
                </h3>
                <p class="text-[#20252CE5] text-[14px] font-opensans">
                  {{ $t("home.services.publicSector.subtitle") }}
                </p>
                <p class="text-[#20252CE5] text-[14px] font-opensans">
                  {{ $t("home.services.publicSector.description") }}
                </p>
                <div class="flex justify-end">
                  <BaseButton
                    variant="secondary"
                    class="w-full sm:w-auto !px-4 sm:!pl-[56px] sm:!pr-[40px]"
                    @click="openContact($t('home.services.publicSector.cta'))"
                  >
                    {{ $t("home.services.publicSector.cta") }}
                  </BaseButton>
                </div>
              </div>
            </div>
          </div>
          <div class="mobile-fade relative rounded-[14px] overflow-hidden min-h-[360px]">
            <img
              src="/images/revamp/home/services/education-administration-2.png"
              alt=""
              aria-hidden="true"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img
                src="/images/revamp/home/services/education-administration-animate.gif"
                alt=""
                aria-hidden="true"
                class="h-[180px] w-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div class="relative hidden lg:block">
          <div
            class="grid grid-cols-3 gap-8 items-center min-h-[500px]"
          >
            <div class="image-parallax" data-direction="up">
              <NuxtImg
                src="/images/revamp/home/services/education-administration-1.png"
                class="h-auto object-cover w-full"
                width="598px"
              />
            </div>

            <div class="image-parallax" data-direction="down">
              <NuxtImg
                src="/images/revamp/home/services/education-administration-2.png"
                class="h-auto object-cover w-full"
                width="598px"
              />
            </div>

            <div class="text-block self-center" data-section="3">
              <h3 class="text-[#752323] text-[24px] font-[400]">
                {{ $t("home.services.publicSector.title") }}
              </h3>
              <p class="text-[#20252CE5] text-[16px] mb-5">
                {{ $t("home.services.publicSector.subtitle") }}
              </p>
              <p class="text-[#20252CE5] text-[16px]">
                {{ $t("home.services.publicSector.description") }}
              </p>
              <div class="mt-8">
                <BaseButton variant="secondary" @click="openContact($t('home.services.publicSector.cta'))">
                  {{ $t("home.services.publicSector.cta") }}
                </BaseButton>
              </div>
            </div>
          </div>

          <div
            class="animate-img pointer-events-none absolute top-0 left-[38%] w-[33.33%] h-full flex items-center z-10"
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
                src="/images/revamp/home/services/education-administration-animate.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
    <ContactModal v-model="showContactModal" :subject="contactSubject" />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const servicesContainer = ref(null);
const showContactModal = ref(false);
const contactSubject = ref("");
const openContact = (subject) => {
  contactSubject.value = subject;
  showContactModal.value = true;
};
let ctx = null;

const isMobile = () => window.innerWidth < 1024;

onMounted(() => {
  ctx = gsap.context(() => {
    const sections = gsap.utils.toArray(".service-section");

    sections.forEach((section) => {
      const textBlock = section.querySelector(".text-block");
      const upImages = section.querySelectorAll(
        '.image-parallax[data-direction="up"]',
      );
      const downImages = section.querySelectorAll(
        '.image-parallax[data-direction="down"]',
      );
      const animateImg = section.querySelector(".animate-img");

      const mobile = isMobile();

      if (mobile) {
        const cards = gsap.utils.toArray(section.querySelectorAll(".mobile-fade"));
        gsap.set(cards, { opacity: 0, y: 0 });

        ScrollTrigger.create({
          trigger: section,
          start: "top 85%",
          once: true,
          onEnter: () => {
            cards.forEach((card, i) =>
              gsap.to(card, {
                opacity: 1,
                duration: 0.4,
                delay: i * 0.1,
                ease: "power1.out",
              }),
            );
          },
        });
        return;
      }

      // Desktop: full pin + parallax animation
      const upOffset = 120;
      const downOffset = -120;
      const textOffset = 50;

      gsap.set(textBlock, { opacity: 0, y: textOffset });
      gsap.set(upImages, { opacity: 0, y: upOffset });
      gsap.set(downImages, { opacity: 0, y: downOffset });

      if (animateImg) {
        gsap.set(animateImg, { opacity: 0, y: "220%" });
      }

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
        textBlock,
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        0,
      );
      tl.to(
        upImages,
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
        0.8,
      );
      tl.to(
        downImages,
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
        0.8,
      );

      if (animateImg) {
        tl.to(
          animateImg,
          { opacity: 1, y: "0%", duration: 2, ease: "power3.out" },
          1.8,
        );
      }
    });
  }, servicesContainer.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>

<template>
  <div class="mx-auto px-8 max-w-screen-4xl pb-0 md:py-16 mb-0 md:mb-10">
    <div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
        <div class="col-span-12 lg:col-span-8">
          <NuxtImg
            src="/images/revamp/home/projects/hems.png"
            class="w-full h-auto max-w-full object-cover"
            :alt="$t('home.projects.title')"
          />
        </div>
        <div class="col-span-12 lg:col-span-4">
          <NuxtImg
            src="/images/revamp/home/projects/yumtrack.png"
            class="w-full h-auto max-w-full object-cover"
            :alt="$t('home.projects.title')"
          />
        </div>
        <div class="col-span-12 lg:col-span-4">
          <NuxtImg
            src="/images/revamp/home/projects/oct.png"
            class="w-full h-auto max-w-full object-cover"
            :alt="$t('home.projects.title')"
          />
        </div>
        <div class="col-span-12 lg:col-span-8">
          <NuxtImg
            src="/images/revamp/home/projects/kakaotalk.png"
            class="w-full h-auto max-w-full object-cover"
            :alt="$t('home.projects.title')"
          />
        </div>
      </div>
    </div>

    <div class="mt-10">
      <h4 class="text-[#64748B] text-[24px] max-w-2xl">
        {{ $t("home.projects.description") }}
      </h4>
    </div>

    <div class="mt-6 flex justify-end max-w-2xl">
      <BaseButton variant="secondary" @click="openContact($t('home.projects.cta'))">
        {{ $t("home.projects.cta") }}
      </BaseButton>
    </div>

    <ContactModal v-model="showContactModal" :subject="contactSubject" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const showContactModal = ref(false);
const contactSubject = ref("");
const openContact = (subject) => {
  contactSubject.value = subject;
  showContactModal.value = true;
};
</script>

<template>
  <div class="flex flex-col items-center gap-4 my-16">
    <BaseButton variant="secondary" @click="show = true">
      {{ label }}
    </BaseButton>

    <!-- The address has to be readable and copyable, not merely reachable
         through a form: an evaluator must be able to email us directly.
         AB-134 item 1. -->
    <p
      v-if="showEmail"
      class="text-[14px] font-opensans text-[#20252CE5] mb-0 text-center"
    >
      {{ $t("productsFooter.inquiryEmail") }}:
      <a
        :href="mailtoHref"
        class="underline decoration-dotted hover:text-black"
        >{{ brandEmail }}</a
      >
    </p>

    <ContactModal v-model="show" :subject="subject" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useBrand } from "~/composables/useBrand";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  // Pre-fills the modal's Topic/Subject and the mailto subject, so an
  // inquiry is attributable to the page it came from.
  subject: {
    type: String,
    default: "",
  },
  showEmail: {
    type: Boolean,
    default: false,
  },
});

const { brandEmail } = useBrand();
const show = ref(false);

const mailtoHref = computed(
  () =>
    `mailto:${brandEmail.value}?subject=${encodeURIComponent(
      props.subject || props.label
    )}`
);
</script>

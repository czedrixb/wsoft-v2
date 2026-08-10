<template>
  <div>
    <div class="flex justify-center my-16">
      <BaseButton variant="secondary" @click="show = true">
        {{ label }}
      </BaseButton>
    </div>
    <ContactModal v-model="show" />
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  label: {
    type: String,
    required: true,
  },
});

const show = ref(false);
</script>

import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

// The navbar and footer 문의하기 buttons are global (mounted from app.vue),
// so an inquiry opened from a product page used to arrive with an empty
// Topic/Subject and no indication of which page it came from — unlike
// AnimatedProducts / AnimatedServices / AnimatedAbout / BriefProjects, which
// all pass a subject to their own ContactModal instance. AB-134 item 1.
const PAGE_SUBJECT_KEYS = {
  "/skin_arch": "optical-microscope.inquirySubject",
};

export function usePageContactSubject() {
  const route = useRoute();
  const { t } = useI18n();
  return computed(() => {
    const key = PAGE_SUBJECT_KEYS[route.path];
    return key ? t(key) : "";
  });
}

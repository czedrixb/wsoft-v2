import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useBrand } from "./useBrand";

// True pixel size of the artwork in public/images, so og:image:width/height
// never drift from the files actually being served.
const SHARE_IMAGE_WIDTH = "1200";
const SHARE_IMAGE_HEIGHT = "628";

// W Labs ships a per-locale share thumbnail (WOS-275). UEducation has a single
// variant, so every locale resolves to the same file there.
const SHARE_IMAGES = {
  wlabs: {
    ko: "/images/thumbnail-ko.png",
    en: "/images/thumbnail-en.png",
  },
  uedu: {
    ko: "/images/thumbnail-uedu.png",
    en: "/images/thumbnail-uedu.png",
  },
};

const FALLBACK_LOCALE = "ko";

/**
 * Single source of truth for the link-preview image (og:image / twitter:image).
 *
 * Returns computed refs rather than snapshots so `useHead` stays reactive when
 * Language.vue mutates the locale without a route change.
 */
export function useShareImage() {
  const config = useRuntimeConfig();
  const { brand } = useBrand();
  const { locale } = useI18n();

  const shareImagePath = computed(() => {
    const byLocale = SHARE_IMAGES[brand.value.key] ?? SHARE_IMAGES.wlabs;
    return byLocale[locale.value] ?? byLocale[FALLBACK_LOCALE];
  });

  // og:image must be an absolute URL — Facebook, Slack and KakaoTalk do not
  // resolve root-relative paths. baseUrl carries a trailing slash, so trim it
  // before joining to avoid emitting a double slash.
  const shareImageUrl = computed(() => {
    const baseUrl = (config.public.baseUrl || "https://wsoft.space").replace(
      /\/+$/,
      ""
    );
    return `${baseUrl}${shareImagePath.value}`;
  });

  return {
    shareImagePath,
    shareImageUrl,
    shareImageWidth: SHARE_IMAGE_WIDTH,
    shareImageHeight: SHARE_IMAGE_HEIGHT,
  };
}

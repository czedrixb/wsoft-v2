import { ref, computed, onMounted } from "vue";

const BRANDS = {
  "ueducation.co.kr": {
    key: "uedu",
    name: "UEducation",
    company: "주식회사 유에듀케이션",
    businessId: "124-87-33297",
    siteUrl: "https://ueducation.co.kr/",
    logoPath: "/images/logos/uedu.png",
    footerLogo: "/images/logos/uedu.png",
    footerCeoName: "footer-uedu",
    email: "matt@ueducation.co.kr",
    phone: "+82 10 5067 8800",
  },
  "wsoft.space": {
    key: "wlabs",
    name: "W Labs",
    company: "주식회사 더블유랩스",
    businessId: "387-87-03701",
    siteUrl: "https://wsoft.space/",
    logoPath: "/images/logos/w-labs-default-new.svg",
    footerLogo: "/images/revamp/footer-logo.svg",
    footerCeoName: "footer-wlabs",
    email: "contact@wsoft.space",
    phone: "+82 10 5067 8800",
  },
};

const DEFAULT_BRAND = BRANDS["wsoft.space"];
// const DEFAULT_BRAND = BRANDS["ueducation.co.kr"];

export function useBrand() {
  // Resolved during SSR too. brandEmail/brandPhone now feed mailto:/tel:
  // hrefs, so an SSR value that only settles in onMounted (client-only)
  // would be a hydration mismatch on the ueducation.co.kr host. AB-134.
  const hostname = ref(
    import.meta.server
      ? useRequestURL().hostname
      : typeof window !== "undefined"
        ? window.location.hostname
        : ""
  );

  onMounted(() => {
    hostname.value = window.location.hostname;
  });

  const brand = computed(
    () => BRANDS[hostname.value] ?? DEFAULT_BRAND
  );

  const isUedu = computed(() => brand.value.key === "uedu");

  const brandName = computed(() => brand.value.name);
  const brandCompany = computed(() => brand.value.company);
  const brandBusinessId = computed(() => brand.value.businessId);
  const brandSiteUrl = computed(() => brand.value.siteUrl);
  const brandLogoPath = computed(() => brand.value.logoPath);
  const brandFooterLogo = computed(() => brand.value.footerLogo);
  const brandEmail = computed(() => brand.value.email);
  const brandPhone = computed(() => brand.value.phone);
  const brandEmailHref = computed(() => `mailto:${brand.value.email}`);
  // E.164-ish for tel:. nuxt.config.ts sets format-detection: telephone=no,
  // which suppresses auto-linkification but not an explicit tel: href.
  const brandPhoneHref = computed(
    () => `tel:${brand.value.phone.replace(/[^\d+]/g, "")}`
  );

  return {
    isUedu,
    brand,
    brandName,
    brandCompany,
    brandBusinessId,
    brandSiteUrl,
    brandLogoPath,
    brandFooterLogo,
    brandEmail,
    brandPhone,
    brandEmailHref,
    brandPhoneHref,
  };
}
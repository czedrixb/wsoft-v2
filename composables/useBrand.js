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
    thumbnailPath: "/images/thumbnail-uedu.png",
    footerCeoName: "footer-uedu",
    email: "matt@ueducation.co.kr",
  },
  "wsoft.space": {
    key: "wlabs",
    name: "W Labs",
    company: "주식회사 더블유랩스",
    businessId: "387-87-03701",
    siteUrl: "https://wsoft.space/",
    logoPath: "/images/logos/w-labs-default-new.svg",
    footerLogo: "/images/revamp/footer-logo.svg",
    thumbnailPath: "/images/thumbnail.png",
    footerCeoName: "footer-wlabs",
    email: "contact@wsoft.space",
  },
};

const DEFAULT_BRAND = BRANDS["wsoft.space"];
// const DEFAULT_BRAND = BRANDS["ueducation.co.kr"];

export function useBrand() {
  const hostname = ref("");

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
  const brandThumbnailPath = computed(() => brand.value.thumbnailPath);
  const brandEmail = computed(() => brand.value.email);

  return {
    isUedu,
    brand,
    brandName,
    brandCompany,
    brandBusinessId,
    brandSiteUrl,
    brandLogoPath,
    brandFooterLogo,
    brandThumbnailPath,
    brandEmail,
  };
}
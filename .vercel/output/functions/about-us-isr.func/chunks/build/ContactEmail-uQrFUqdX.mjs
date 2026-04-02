import { ref, watch, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { f as publicAssetsURL } from '../_/nitro.mjs';
import { useI18n } from 'vue-i18n';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const _imports_0 = publicAssetsURL("/images/home/left-photo.png");
const _imports_1 = publicAssetsURL("/images/home/right-photo.png");
function useEmailSubscription() {
  const { t } = useI18n();
  const { errors, defineField, handleSubmit, resetForm } = useForm({
    validationSchema: yup.object({
      email: yup.string().email(t("invalid-email")).required(t("email-required"))
    })
  });
  const [email] = defineField("email");
  const submitForm = handleSubmit(async (values) => {
    console.log("Submitting form with values:", values);
    const templateParams = {
      email: values.email
    };
    try {
      console.log("Sending email...");
      await emailjs.send(
        "service_hgcmb0c",
        "template_ud2c6pn",
        templateParams,
        "yIL5xLn_QSTMWUXp8"
      );
      console.log("Email sent successfully!");
      Swal.fire({
        icon: "success",
        title: "Message sent successfully!",
        toast: true,
        position: "top-end",
        iconColor: "white",
        customClass: {
          popup: "toast-success"
        },
        showConfirmButton: false,
        timer: 3e3,
        timerProgressBar: true
      });
      resetForm();
    } catch (error) {
      console.error("Error sending email:", error);
      Swal.fire({
        icon: "error",
        title: "Message failed to send!",
        toast: true,
        position: "top-end",
        iconColor: "white",
        customClass: {
          popup: "toast-error"
        },
        showConfirmButton: false,
        timer: 3e3,
        timerProgressBar: true
      });
    }
  });
  return {
    email,
    submitForm,
    errors
  };
}
const _sfc_main = {
  __name: "ContactEmail",
  __ssrInlineRender: true,
  setup(__props) {
    const { email, errors } = useEmailSubscription();
    const { locale } = useI18n();
    const enEmail = ref("Enter your email");
    const koEmail = ref("\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694");
    const placeholder = ref(enEmail.value);
    const updatePlaceholder = () => {
      if (locale.value === "en") {
        placeholder.value = enEmail.value;
      } else {
        placeholder.value = koEmail.value;
      }
    };
    watch(locale, () => {
      localStorage.setItem("lang", locale.value);
      updatePlaceholder();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="md:py-[5rem] mx-auto px-3 md:px-8 xl:max-w-screen-4xl 2xl:max-w-screen-4xl mt-[8rem] md:mt-0 mb-10"><div class="bg-[url(&#39;/images/home/bg-email.jpg&#39;)] bg-cover bg-center bg-no-repeat rounded-2xl py-10 h-full md:h-[28rem] flex items-center relative"><div class="hidden md:block"><div class="grid grid-cols-2 px-2 md:px-16 2xl:px-[10rem]"><div><div class="text-left font-poppins font-[600] text-[25px] lg:text-[30px] xl:text-[50px] px-5 md:px-0 text-white mb-3">${ssrInterpolate(_ctx.$t("partner-growth"))}</div><p class="font-inter font-[300] text-[18px] xl:text-[20px] text-white mb-8 lg:w-[80%]">${ssrInterpolate(_ctx.$t("help-transform"))}</p><form><label class="input md:input-md lg:input-lg md:py-7 rounded-full bg-white flex items-center lg:w-[90%] xl:w-[80%] gap-2 lg:pe-2"><input type="email"${ssrRenderAttr("value", unref(email))} class="grow text-black"${ssrRenderAttr("placeholder", placeholder.value)}><button type="submit" class="relative btn-md font-inter md:text-[15px] lg:text-[18px] md:px-8 lg:px-8 bg-gradient-to-r from-[#82b6ed] to-[#76d3e4] text-white rounded-full cursor-pointer transition-all duration-300 hover:opacity-90"><span class="relative z-10">${ssrInterpolate(_ctx.$t("send"))}</span><span class="absolute inset-0 bg-gradient-to-r from-[#70aae9] to-[#68d2e5] rounded-full p-[8px] -z-10 transition-all duration-300 hover:opacity-80"></span><span class="absolute inset-0 bg-gradient-to-r from-[#2375E9] to-[#02C7D0] rounded-full m-[8px] transition-all duration-300 hover:m-[4px]"></span></button></label>`);
      if (unref(errors).email) {
        _push(`<p class="text-white text-sm mt-2">${ssrInterpolate(unref(errors).email.includes("required") ? _ctx.$t("email-required") : _ctx.$t("invalid-email"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div></div><div class="block md:hidden"><div class="grid grid-cols-2 px-2"><div class="text-left font-poppins font-[600] text-[25px] lg:text-[30px] xl:text-[40px] px-2 md:px-0 text-white mb-3 col-span-2 w-[60%]">${ssrInterpolate(_ctx.$t("partner-growth"))}</div></div><div class="px-5"><p class="font-inter font-[300] text-[18px] text-white mb-8 lg:w-[80%]">${ssrInterpolate(_ctx.$t("help-transform"))}</p><form><label class="input py-8 md:input-md lg:input-lg rounded-full bg-white flex items-center lg:w-[90%] xl:w-[80%] gap-2 pe-2"><input type="email"${ssrRenderAttr("value", unref(email))} class="grow text-black w-full"${ssrRenderAttr("placeholder", placeholder.value)}><button type="submit" class="relative md:btn-sm lg:btn-md font-inter text-[18px] px-8 py-4 md:px-8 lg:px-8 bg-gradient-to-r from-[#82b6ed] to-[#76d3e4] text-white rounded-full cursor-pointer transition-all duration-300 hover:opacity-90"><span class="relative z-10">${ssrInterpolate(_ctx.$t("send"))}</span><span class="absolute inset-0 bg-gradient-to-r from-[#70aae9] to-[#68d2e5] rounded-full p-[8px] -z-10 transition-all duration-300 hover:opacity-80"></span><span class="absolute inset-0 bg-gradient-to-r from-[#2375E9] to-[#02C7D0] rounded-full m-[8px] transition-all duration-300 hover:m-[4px]"></span></button></label>`);
      if (unref(errors).email) {
        _push(`<p class="text-white text-sm mt-2">${ssrInterpolate(unref(errors).email.includes("required") ? _ctx.$t("email-required") : _ctx.$t("invalid-email"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div><div class="absolute left-[45%] bottom-[59%] md:bottom-[10%] md:left-[48%] lg:bottom-[-10%] lg:left-[50%] xl:left-[60%] xl:bottom-[0%] w-[100%] animate-moveRightLeft"><img${ssrRenderAttr("src", _imports_0)} class="w-[180px] md:w-[300px] lg:w-[330px] xl:w-[350px] 2xl:w-[400px]" alt="img-email"></div><div class="absolute left-[60%] bottom-[59%] md:bottom-[-10%] md:left-[65%] lg:bottom-[-25%] lg:left-[68%] xl:left-[73%] xl:bottom-[-25%] 2xl:left-[68%] w-[100%] animate-moveLeftRight"><img${ssrRenderAttr("src", _imports_1)} class="w-[180px] md:w-[300px] lg:w-[330px] xl:w-[350px] 2xl:w-[400px]" alt="img-email"></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactEmail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };

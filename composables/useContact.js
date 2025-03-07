import { ref, computed } from "vue";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export const valid = ref(false);
export const name = ref("");
export const first_name = ref("");
export const last_name = ref("");
export const email = ref("");
export const phone = ref("");
export const company = ref("");
export const message = ref("");

export const nameRules = computed(() => [
  (value) => {
    if (value) return true;
    return "Name is required.";
  },
  (value) => {
    if (value?.length <= 10) return true;
    return "Name must be less than 10 characters.";
  },
]);

export const emailRules = computed(() => [
  (value) => {
    if (value) return true;
    return "E-mail is required.";
  },
  (value) => {
    if (/.+@.+\..+/.test(value)) return true;
    return "E-mail must be valid.";
  },
]);

export const messageRules = computed(() => [
  (value) => {
    if (value) return true;
    return "Message is required.";
  },
]);

export const handleSubmit = async () => {
  valid.value = true;
  name.value = `${first_name.value} ${last_name.value}`;

  if (email.value && !message.value) {
    message.value = "Wants to receive promotional email updates";
  }

  if (valid.value) {
    const templateParams = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      console.log("Email sent successfully:", response);

      Swal.fire({
        icon: "success",
        title: "Message Sent Successfully!",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    } catch (error) {
      console.error("Failed to send email:", error);

      Swal.fire({
        icon: "error",
        title: "Message failed to send!",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    }
  }
};

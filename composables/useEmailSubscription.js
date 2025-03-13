import { useI18n } from "vue-i18n";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { useForm } from "vee-validate";
import * as yup from "yup";

export function useEmailSubscription() {
  const { t } = useI18n();
  const { errors, defineField, handleSubmit, resetForm } = useForm({
    validationSchema: yup.object({
      email: yup
        .string()
        .email(t("invalid-email"))
        .required(t("email-required")),
    }),
  });

  const [email] = defineField("email");

  const submitForm = handleSubmit(async (values) => {
    console.log("Submitting form with values:", values);

    const templateParams = {
      email: values.email,
    };

    try {
      console.log("Sending email...");
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_SUBSCRIPTION_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully!");

      Swal.fire({
        icon: "success",
        title: "Message sent successfully!",
        toast: true,
        position: "top-end",
        iconColor: "white",
        customClass: {
          popup: "toast-success",
        },
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
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
          popup: "toast-error",
        },
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    }
  });

  return {
    email,
    submitForm,
    errors,
  };
}

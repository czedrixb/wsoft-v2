import { useI18n } from "vue-i18n";
import Swal from "sweetalert2";
import { useForm } from "vee-validate";
import * as yup from "yup";
import { ref } from "vue";

export function useContact() {
  const { t } = useI18n();
  const isSubmitting = ref(false);

  const { errors, defineField, handleSubmit, resetForm } = useForm({
    validationSchema: yup.object({
      first_name: yup.string().required(t("first-name-required")),
      last_name: yup.string().required(t("last-name-required")),
      email: yup
        .string()
        .email(t("invalid-email"))
        .required(t("email-required")),
      phone: yup
        .string()
        .matches(/^\d+$/, t("invalid-phone"))
        .required(t("phone-required")),
      message: yup.string().required(t("message-required")),
    }),
  });

  const [first_name] = defineField("first_name");
  const [last_name] = defineField("last_name");
  const [email] = defineField("email");
  const [phone] = defineField("phone");
  const [company] = defineField("company");
  const [message] = defineField("message");

  const submitForm = handleSubmit(async (values) => {
    isSubmitting.value = true;

    try {
      await $fetch("/api/contact", {
        method: "POST",
        body: {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          phone: values.phone,
          company: values.company || "",
          message: values.message,
        },
      });

      Swal.fire({
        icon: "success",
        title: "Message sent successfully!",
        toast: true,
        position: "top-end",
        iconColor: "white",
        customClass: { popup: "toast-success" },
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });

      resetForm();
      return true;
    } catch (error) {
      console.error("Error sending email:", error);

      Swal.fire({
        icon: "error",
        title: "Message failed to send!",
        toast: true,
        position: "top-end",
        iconColor: "white",
        customClass: { popup: "toast-error" },
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });

      return false;
    } finally {
      isSubmitting.value = false;
    }
  });

  return {
    first_name,
    last_name,
    email,
    phone,
    company,
    message,
    submitForm,
    errors,
    isSubmitting,
  };
}
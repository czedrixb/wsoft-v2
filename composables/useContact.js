import { useI18n } from "vue-i18n";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { useForm } from "vee-validate";
import * as yup from "yup";

export function useContact() {
  const { t } = useI18n();
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
    console.log("Submitting form with values:", values);

    const templateParams = {
      name: `${values.first_name} ${values.last_name}`,
      email: values.email,
      phone: values.phone,
      company: values.company,
      message: values.message,
    };

    try {
      console.log("Sending email...");
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
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
    first_name,
    last_name,
    email,
    phone,
    company,
    message,
    submitForm,
    errors,
  };
}

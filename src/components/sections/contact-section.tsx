import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { TextInput } from "../form-fields/text-input";
import { yupResolver } from "@hookform/resolvers/yup";
import { Textarea } from "../form-fields/text-area";
import roundedSelfPic from "@/assets/rounded-self-pic.jpg";
import axios, { AxiosError, AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const schema = yup.object({
  email: yup.string().email().required().label("Email"),
  subject: yup.string().required().label("Subject"),
  message: yup.string().required().label("Message"),
  name: yup.string().required().label("Name"),
});

type ContactFormData = yup.InferType<typeof schema>;

function ContactSection() {
  const [isMessageSuccess, setIsMessageSuccess] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
      name: "",
    },
  });

  const captchaRef = useRef<ReCAPTCHA | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    if (!isVerified) {
      return toast.error("You need to complete reCAPTCHA!");
    }
    try {
      const response = await axios.post<
        AxiosError,
        AxiosResponse<string>,
        ContactFormData
      >(`${import.meta.env.VITE_API_BASE_URL}/email`, data);

      setIsMessageSuccess(true);

      toast.success(response.data);
    } catch (error) {
      const axiosError = error as AxiosError;

      const errorMessage = axiosError.response?.data;

      toast.error(`Something unexpected happened: ${errorMessage}`);
    }
  };

  const handleVerify = async (token: string) => {
    try {
      await axios.post<AxiosError, AxiosResponse<string>, { token: string }>(
        `${import.meta.env.VITE_API_BASE_URL}/verify-captcha`,
        { token }
      );

      setIsVerified(true);
    } catch (error) {
      const axiosError = error as AxiosError;

      const errorMessage = axiosError.response?.data;

      toast.error(`Something unexpected happened: ${errorMessage}`);
    }
  };

  return (
    <section id="contact" className="mb-40">
      <div className="flex justify-center items-center flex-col">
        <div className="mb-10 px-5">
          <p className="text-2xl text-cyan-300 mb-5">Contact</p>
          <p className="text-xl">
            Do you have any cool ideas to build? Let's chat!
          </p>
        </div>
        <div className="flex gap-20 lg:flex-row flex-col-reverse">
          <div className="sm:min-w-[400px] min-w-[300px] sm:px-0 px-5">
            {isMessageSuccess ? (
              <div className="w-[400px] h-[425px]">
                <svg width="100%" height="100%">
                  <circle
                    fill="none"
                    stroke="#61d345"
                    strokeWidth="20"
                    cx="200"
                    cy="200"
                    r="190"
                    strokeLinecap="round"
                    transform="rotate(-90 200 200)"
                    className="circle"
                  />
                  <polyline
                    fill="none"
                    stroke="#61d345"
                    points="88,214 173,284 304,138"
                    strokeWidth="24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tick"
                  />
                </svg>
              </div>
            ) : (
              <FormProvider {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <TextInput
                    name="email"
                    placeholder="your@email.com"
                    label="Your Email"
                  />
                  <TextInput
                    name="name"
                    placeholder="Brian Brooks"
                    label="Your Name"
                  />
                  <TextInput
                    name="subject"
                    placeholder="Very interesting subject"
                    label="Subject"
                  />
                  <Textarea
                    name="message"
                    placeholder="Tell me about your idea.."
                    label="Your Message"
                    rows={5}
                  />
                  <div className="flex justify-center">
                    <ReCAPTCHA
                      sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || ""}
                      ref={captchaRef}
                      theme="dark"
                      size="normal"
                      onChange={(token) => handleVerify(token || "")}
                    />
                  </div>
                  <button
                    className="btn btn-primary w-full !mt-10"
                    type="submit"
                    disabled={form.formState.isSubmitting}
                  >
                    Send Message
                  </button>
                </form>
              </FormProvider>
            )}
          </div>
          <div className="flex items-center gap-5 sm:flex-row flex-col">
            <img className="rounded-full h-[150px]" src={roundedSelfPic} />
            <div className="mb-5">
              <p>Email:</p>
              <a
                href="mailto:nagyzsbalint@gmail.com"
                className="hover:underline"
              >
                nagyzsbalint@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ContactSection };

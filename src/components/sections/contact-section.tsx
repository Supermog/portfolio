import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { TextInput } from "../form-fields/text-input";
import { yupResolver } from "@hookform/resolvers/yup";
import { Textarea } from "../form-fields/text-area";
import roundedSelfPic from "@/assets/rounded-self-pic.jpg";

const schema = yup.object({
  email: yup.string().email().required().label("Email"),
  subject: yup.string().min(2).required().label("Subject"),
  message: yup.string().min(10).required().label("Message"),
});

type ContactFormData = yup.InferType<typeof schema>;

function ContactSection() {
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => console.log(data);

  return (
    <section id="contact" className="mb-40">
      <div className="flex justify-center items-center flex-col">
        <div className="mb-10">
          <p className="text-2xl text-cyan-300 mb-5">Contact</p>
          <p className="text-xl">
            Do you have any cool ideas to build? Let's chat!
          </p>
        </div>
        <div className="flex gap-20">
          <div className="w-[400px]">
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
                <button className="btn btn-primary w-full !mt-10">
                  Send Message
                </button>
              </form>
            </FormProvider>
          </div>
          <div>
            <div className="flex items-center space-x-5">
              <img className="rounded-full h-[150px]" src={roundedSelfPic} />
              <div className="mb-5">
                <p>Email:</p>
                <a
                  href="mailto:brian67531@gmail.com"
                  className="hover:underline"
                >
                  brian67531@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ContactSection };

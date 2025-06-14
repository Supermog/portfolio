import roundedSelfPic from "@/assets/rounded-self-pic.jpg";

function ContactSection() {
  return (
    <section id="contact" className="mb-40">
      <div className="flex justify-center items-center flex-col">
        <div className="mb-10 pb-20">
          <h2 className="text-2xl text-cyan-300 mb-5">Contact</h2>
          <p className="text-xl">
            Do you have any cool ideas to build? Let's chat!
          </p>
        </div>
        <div className="flex gap-20 lg:flex-row flex-col">
          <div className="flex gap-5 sm:flex-row flex-col">
            <div className="flex h-min gap-5 items-center">
              <img className="rounded-full h-[150px]" src={roundedSelfPic} />
              <div className="mb-5 mt-5">
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
      </div>
    </section>
  );
}

export { ContactSection };

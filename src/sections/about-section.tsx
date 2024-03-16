import aboutSectionPic from "@/assets/about-section-pic.png";

function AboutSection() {
  return (
    <section className="h-screen flex flex-col bg-gray-950" id="about">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex w-[70%] gap-10">
          <div className="flex justify-center items-center">
            <img src={aboutSectionPic} className="h-[400px]" />
          </div>
          <div className="flex flex-col w-4/6">
            <p className="text-xl text-cyan-300 mb-5">About Me</p>
            <p className="text-2xl mb-3">
              A dedicated Full-Stack developer with a focus on Front-End based
              in Veszprém, Hungary 📍
            </p>
            <p className="text-lg text-gray-300">
              From a young age, I've been fascinated by the endless
              possibilities of the internet and its ability to connect people
              around the globe. This fascination drove me to pursue a career in
              web development, where I thrive on blending creativity with
              cutting-edge technology to bring ideas to life. As a web
              developer, I've honed my skills in both frontend and backend
              development, allowing me to create seamless, user-friendly
              interfaces while ensuring robust functionality behind the scenes.
              Whether it's bringing a client's vision to fruition or tackling a
              personal project, I approach each project with enthusiasm and
              attention to detail. In addition to my technical expertise, I'm
              deeply committed to keep up the latest industry trends and best
              practices. I thrive in dynamic environments where I can
              continually learn, grow and also where transparency with team
              members is a must in communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { AboutSection };

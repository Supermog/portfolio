import homeSectionBackground from "@/assets/landing-page-background.webp";
import selfPic from "@/assets/self-pic.webp";
import { TechStack } from "../tech-stack";

function HomeSection() {
  return (
    <section className="h-screen flex flex-col">
      <img
        src={homeSectionBackground}
        alt="Abstract background pattern"
        className="absolute object-cover min-h-screen w-full -z-10"
      />
      <div className="flex justify-center gap-24 h-full items-center self-center p-5 flex-col">
        <div className="flex justify-center items-center gap-24 lg:-mt-20">
          <div className="flex flex-col max-w-xl gap-3">
            <h1 className="text-4xl text-white  p-2 rounded-md">
              JavaScript Full-Stack Developer
            </h1>
            <p className="text-white  p-2 text-xl">
              Hi 👋, my name is Bálint Nagy-Zsugya and I'm a Full-Stack
              JavaScript developer with over 4 years of experience.
            </p>
          </div>
          <img
            src={selfPic}
            alt="Portrait of Bálint Nagy-Zsugya"
            className="h-96 rounded-3xl sm:block hidden"
          />
        </div>
        <TechStack />
      </div>
    </section>
  );
}

export { HomeSection };

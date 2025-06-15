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
        width="1920"
        height="1080"
        srcSet={`${homeSectionBackground} 1920w, ${homeSectionBackground.replace(
          ".webp",
          "-small.webp"
        )} 960w`}
        sizes="100vw"
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
            className="max-h-96 w-auto h-full rounded-3xl sm:block hidden object-contain"
            width="384"
            height="384"
            srcSet={`${selfPic} 384w, ${selfPic.replace(
              ".webp",
              "-small.webp"
            )} 192w`}
            sizes="(max-width: 768px) 192px, 384px"
          />
        </div>
        <TechStack />
      </div>
    </section>
  );
}

export { HomeSection };

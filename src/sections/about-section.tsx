import { aboutSection } from "../utils/strings";
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
            <p className="text-lg text-gray-300">{aboutSection}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { AboutSection };

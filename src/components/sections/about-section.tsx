import aboutSectionPic from "@/assets/about-section-pic.webp";
import { RevealOnScroll } from "../reveal-on-scroll";
import { Code, Globe, Users, Lightbulb } from "lucide-react";
import SkillCard from "../skill-card";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, TypeScript, Tailwind CSS",
  },
  {
    icon: Globe,
    title: "Backend Development",
    description: "Node.js, APIs, AWS, Database Design",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Agile, Communication, Leadership",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Creative Solutions, Innovation",
  },
];

function AboutSection() {
  return (
    <section
      className="bg-gradient-to-b from-gray-900 to-black md:py-10 py-20"
      id="about"
    >
      <div className="flex items-center justify-center my-10">
        <RevealOnScroll>
          <div className="flex gap-10 container md:flex-row flex-col justify-center items-center px-10">
            <div className="flex justify-center items-center sm:block hidden">
              <img
                src={aboutSectionPic}
                alt="About me website builder image"
                className="max-h-[400px] w-auto h-full object-contain"
                width="400"
                height="400"
                srcSet={`${aboutSectionPic} 400w, ${aboutSectionPic.replace(
                  ".webp",
                  "-small.webp"
                )} 200w`}
                sizes="(max-width: 768px) 200px, 400px"
              />
            </div>
            <div className="flex flex-col md:w-[70%]">
              <h2 className="text-xl text-cyan-300 mb-5">About Me</h2>
              <p className="text-2xl mb-3">
                A dedicated Full-Stack developer based in Hungary 📍
              </p>
              <p className="text-lg text-gray-300">
                From a young age, I've been fascinated by the endless
                possibilities of the internet and its ability to connect people
                around the globe. This fascination drove me to pursue a career
                in web development, where I thrive on blending creativity with
                cutting-edge technology to bring ideas to life. As a web
                developer, I've honed my skills in both frontend and backend
                development, allowing me to create seamless, user-friendly
                interfaces while ensuring robust functionality behind the
                scenes. Whether it's bringing a client's vision to fruition or
                tackling a personal project, I approach each project with
                enthusiasm and attention to detail. In addition to my technical
                expertise, I'm deeply committed to keep up the latest industry
                trends and best practices. I thrive in dynamic environments
                where I can continually learn, grow and also where transparency
                with team members is a must in communication.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 px-10">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                delay={index * 0.2}
              />
            ))}
          </div>
        </RevealOnScroll>
      </div>
      {/* Skills Grid */}
    </section>
  );
}

export { AboutSection };

import myExecutorBox from "@/assets/project-pics/myexecutorbox-overview.webp";
import blackfordSolutions from "@/assets/project-pics/blackford-solutions.webp";
import typeScriptLogo from "@/assets/tech-stack-logos/typescript-logo.svg";
import reactLogo from "@/assets/tech-stack-logos/react-logo.svg";
import nestJsLogo from "@/assets/tech-stack-logos/nest-js-logo.svg";
import tailwindLogo from "@/assets/tech-stack-logos/tailwind-logo.svg";
import firebaseLogo from "@/assets/tech-stack-logos/firebase-logo.svg";
import airtableLogo from "@/assets/tech-stack-logos/airtable-logo.svg";
import nextJsLogo from "@/assets/tech-stack-logos/next-js-logo.svg";
import prismicLogo from "@/assets/tech-stack-logos/prismic-logo.svg";
import styledComponentsLogo from "@/assets/tech-stack-logos/styled-components.svg";
import { FaUpRightFromSquare } from "react-icons/fa6";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import { RevealOnScroll } from "../reveal-on-scroll";
import perlegoKnowledgeBase from "@/assets/project-pics/perlego-knowledge-base.webp";
import scottlogic from "@/assets/project-pics/scottlogic.webp";
import nodeJsLogo from "@/assets/tech-stack-logos/node-js-logo.svg";

interface Project {
  image: string;
  title: string;
  description: string;
  stack: { name: string; logo: string }[];
  href: string;
  role: string;
}

const techStackLogoSizes: Record<
  Project["stack"][number]["name"],
  { width: string; height: string }
> = {
  TypeScript: { width: "32.5", height: "32.5" },
  React: { width: "32.5", height: "32.5" },
  "Tailwind CSS": { width: "50", height: "32.5" },
  NestJS: { width: "32.5", height: "32.5" },
  Firebase: { width: "24", height: "32.5" },
  NodeJS: { width: "29", height: "32.5" },
  Airtable: { width: "32.5", height: "32.5" },
  NextJS: { width: "32.5", height: "32.5" },
  "Styled Component": { width: "32.5", height: "32.5" },
  Prismic: { width: "32.5", height: "32.5" },
};

const projects: Project[] = [
  {
    image: myExecutorBox,
    title: "My Executor Box",
    description:
      "A platform to assist people with their estates. This app was made for older people to gather their assets/liabilities at the end of their lifes so when they pass their estates will be in order. This app also has an invitation system where a user might invite another user to see their estates.",
    stack: [
      {
        name: "TypeScript",
        logo: typeScriptLogo,
      },
      { name: "React", logo: reactLogo },
      {
        name: "Tailwind CSS",
        logo: tailwindLogo,
      },
      { name: "NestJS", logo: nestJsLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
    href: "https://app.myexecutorbox.co.uk/",
    role: "Lead Frontend developer",
  },
  {
    image: blackfordSolutions,
    title: "Navigator Tool",
    description:
      "Internal tool for a scottish corporation named Blackford Analysis. They have a database full of AI solutions for medical problems and they needed a way to filter through them in a user friendly way. They use this app at conventions. (due to it being an internal tool users can only be created manually in the database)",
    stack: [
      {
        name: "TypeScript",
        logo: typeScriptLogo,
      },
      { name: "React", logo: reactLogo },
      {
        name: "Tailwind CSS",
        logo: tailwindLogo,
      },
      { name: "Firebase", logo: firebaseLogo },
      { name: "NodeJS", logo: nodeJsLogo },
      { name: "Airtable", logo: airtableLogo },
    ],
    href: "https://blackford-navigator.netlify.app/",
    role: "Lead Frontend developer",
  },
  {
    image: perlegoKnowledgeBase,
    title: "Perlego Knowledge Base",
    description:
      "A knowledge base working with educators and publishers to create a digital library of more than a million books, available anywhere in the world.",
    stack: [
      { name: "TypeScript", logo: typeScriptLogo },
      {
        name: "NextJS",
        logo: nextJsLogo,
      },
      { name: "Tailwind CSS", logo: tailwindLogo },
      {
        name: "Styled Component",
        logo: styledComponentsLogo,
      },
      { name: "Prismic", logo: prismicLogo },
    ],
    href: "https://www.perlego.com/knowledge/",
    role: "Maintainer",
  },
  {
    image: scottlogic,
    title: "Scott Logic website",
    description:
      "The website of the UK-based software consultancy named Scott Logic. They design and build bespoke systems to solve complex business problems primarily in financial services and the public sector.",
    stack: [
      { name: "TypeScript", logo: typeScriptLogo },
      {
        name: "NextJS",
        logo: nextJsLogo,
      },
      { name: "Tailwind CSS", logo: tailwindLogo },
      { name: "Prismic", logo: prismicLogo },
    ],
    href: "https://www.scottlogic.com/",
    role: "Frontend developer",
  },
];

function ProjectsSection() {
  const [lightboxImage, setLightboxImage] = useState("");

  return (
    <section
      className="mt-20 mb-40 container min-w-full pswp-gallery"
      id="projects"
    >
      <div className="flex justify-center items-center flex-col">
        <div className="mb-10 px-10">
          <h2 className="text-xl text-cyan-300 mb-5">Projects</h2>
          <p className="text-lg">
            These are some of the projects that I've worked on so far
          </p>
        </div>
        <div className="lg:w-4/6 lg:p-0 p-10 space-y-20">
          {projects.map((project) => {
            return (
              <RevealOnScroll key={project.title}>
                <div className="flex md:flex-row flex-col-reverse gap-10 items-center">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title} project`}
                    className="max-w-[400px] w-full h-auto object-contain hover:cursor-pointer"
                    onClick={() => setLightboxImage(project.image)}
                    width="400"
                    height="225"
                    srcSet={`${project.image} 400w, ${project.image.replace(
                      ".webp",
                      "-small.webp"
                    )} 200w`}
                    sizes="(max-width: 768px) 200px, 400px"
                  />
                  <div>
                    <p className="text-lg mb-5">{project.title}</p>
                    <p className="text-gray-300">{project.description}</p>
                    <p className="mt-5">Role: {project.role}</p>
                    <div className="flex mt-5 gap-5">
                      {project.stack.map((stack) => {
                        const techStackLogoSize =
                          techStackLogoSizes[stack.name];
                        return (
                          <img
                            key={stack.name}
                            src={stack.logo}
                            alt={stack.name}
                            className="h-10 hover:cursor-pointer"
                            data-tooltip-id="technology"
                            data-tooltip-content={stack.name}
                            width={techStackLogoSize.width}
                            height={techStackLogoSize.height}
                          />
                        );
                      })}
                    </div>
                    <div className="space-y-2 mt-5">
                      <a
                        className="flex items-center gap-2 w-fit"
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo <FaUpRightFromSquare />
                      </a>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
      <Lightbox
        open={Boolean(lightboxImage)}
        close={() => setLightboxImage("")}
        slides={[{ src: lightboxImage }]}
        noScroll={{ disabled: true }}
        carousel={{
          finite: true,
        }}
      />
    </section>
  );
}

export { ProjectsSection };

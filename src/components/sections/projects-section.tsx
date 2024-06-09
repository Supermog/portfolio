import myExecutorBox from "@/assets/project-pics/myexecutorbox-overview.png";
import blackfordSolutions from "@/assets/project-pics/blackford-solutions.png";
import typeScriptLogo from "@/assets/tech-stack-logos/typescript-logo.svg";
import reactLogo from "@/assets/tech-stack-logos/react-logo.png";
import nestJsLogo from "@/assets/tech-stack-logos/nest-js-logo.png";
import tailwindLogo from "@/assets/tech-stack-logos/tailwind-logo.png";
import firebaseLogo from "@/assets/tech-stack-logos/firebase-logo.png";
import airtableLogo from "@/assets/tech-stack-logos/airtable-logo.png";
import nextJsLogo from "@/assets/tech-stack-logos/next-js-logo.png";
import prismicLogo from "@/assets/tech-stack-logos/prismic-logo.svg";
import styledComponentsLogo from "@/assets/tech-stack-logos/styled-components.svg";
import { FaUpRightFromSquare } from "react-icons/fa6";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import { RevealOnScroll } from "../reveal-on-scroll";
import perlegoKnowledgeBase from "@/assets/project-pics/perlego-knowledge-base.png";
import scottlogic from "@/assets/project-pics/scottlogic.png";
import nodeJsLogo from "@/assets/tech-stack-logos/node-js-logo.png";

const projects = [
  {
    image: myExecutorBox,
    title: "My Executor Box",
    description:
      "A platform to assist people with their estates. This app was made for older people to gather their assets/liabilities at the end of their lifes so when they pass their estates will be in order. This app also has an invitation system where a user might invite another user to see their estates.",
    stack: [
      { name: "TypeScript", logo: typeScriptLogo },
      { name: "React", logo: reactLogo },
      { name: "Tailwind CSS", logo: tailwindLogo },
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
      { name: "TypeScript", logo: typeScriptLogo },
      { name: "React", logo: reactLogo },
      { name: "Tailwind CSS", logo: tailwindLogo },
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
    <section className="my-64 container min-w-full pswp-gallery" id="projects">
      <div className="flex justify-center items-center flex-col">
        <div className="mb-10">
          <p className="text-xl text-cyan-300 mb-5">Projects</p>
          <p className="text-lg">
            These are some of the projects that I've worked on so far
          </p>
        </div>
        <div className="lg:w-4/6 lg:p-0 p-10 space-y-20">
          {projects.map((project) => {
            return (
              <RevealOnScroll key={project.title}>
                <div className="flex md:flex-row flex-col-reverse gap-10">
                  <img
                    src={project.image}
                    className="w-[400px] object-contain hover:cursor-pointer"
                    onClick={() => setLightboxImage(project.image)}
                  />
                  <div>
                    <p className="text-lg mb-5">{project.title}</p>
                    <p className="text-gray-300">{project.description}</p>
                    <p className="mt-5">Role: {project.role}</p>
                    <div className="flex mt-5 gap-5">
                      {project.stack.map((stack) => (
                        <img
                          src={stack.logo}
                          className="h-10 hover:cursor-pointer"
                          data-tooltip-id="technology"
                          data-tooltip-content={stack.name}
                        />
                      ))}
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

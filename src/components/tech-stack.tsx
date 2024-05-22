import typescriptLogo from "@/assets/tech-stack-logos/typescript-logo.svg";
import reactLogo from "@/assets/tech-stack-logos/react-logo.png";
import tailwindLogo from "@/assets/tech-stack-logos/tailwind-logo.png";
import nextJsLogo from "@/assets/tech-stack-logos/next-js-logo.png";
import nestJsLogo from "@/assets/tech-stack-logos/nest-js-logo.png";
import nodeJsLogo from "@/assets/tech-stack-logos/node-js-logo.png";
import firebaseLogo from "@/assets/tech-stack-logos/firebase-logo.png";
import mongodbLogo from "@/assets/tech-stack-logos/mongodb-logo.png";
import { Tooltip } from "react-tooltip";

function TechStack() {
  return (
    <div className="flex lg:flex-row flex-col items-center gap-5 bg-gray-950 p-3 rounded-xl">
      <Tooltip id="technology" className="tooltip" />
      <p className="text-xl lg:border-r-2 lg:pr-5 lg:pb-0 pb-5 mb-5 lg:mb-0 lg:border-b-0 border-b-2">
        Tech Stack
      </p>
      <div className="gap-12 grid grid-rows-2 grid-flow-col lg:flex lg:items-center">
        <img
          src={typescriptLogo}
          className="h-14 hover:cursor-pointer"
          data-tooltip-id="technology"
          data-tooltip-content="TypeScript"
        />
        <img
          src={reactLogo}
          className="h-14 hover:cursor-pointer"
          data-tooltip-id="technology"
          data-tooltip-content="React"
        />
        <img
          src={tailwindLogo}
          className="h-9 hover:cursor-pointer"
          data-tooltip-id="technology"
          data-tooltip-content="TailwindCSS"
        />
        <img
          src={nextJsLogo}
          className="h-14 hover:cursor-pointer"
          data-tooltip-id="technology"
          data-tooltip-content="NextJS"
        />
        <img
          src={nodeJsLogo}
          className="h-14 hover:cursor-pointer"
          data-tooltip-id="technology"
          data-tooltip-content="NodeJS"
        />
        <img
          src={nestJsLogo}
          className="h-14 hover:cursor-pointer"
          data-tooltip-id="technology"
          data-tooltip-content="NestJS"
        />
        <img
          src={firebaseLogo}
          className="h-14 hover:cursor-pointer"
          data-tooltip-id="technology"
          data-tooltip-content="Firebase"
        />
        <img
          src={mongodbLogo}
          className="h-14 hover:cursor-pointer"
          data-tooltip-id="technology"
          data-tooltip-content="MongoDB"
        />
      </div>
    </div>
  );
}

export { TechStack };

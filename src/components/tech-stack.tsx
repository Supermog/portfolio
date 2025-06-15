import typescriptLogo from "@/assets/tech-stack-logos/typescript-logo.svg";
import reactLogo from "@/assets/tech-stack-logos/react-logo.svg";
import tailwindLogo from "@/assets/tech-stack-logos/tailwind-logo.svg";
import nextJsLogo from "@/assets/tech-stack-logos/next-js-logo.svg";
import nestJsLogo from "@/assets/tech-stack-logos/nest-js-logo.svg";
import nodeJsLogo from "@/assets/tech-stack-logos/node-js-logo.svg";
import firebaseLogo from "@/assets/tech-stack-logos/firebase-logo.svg";
import mongodbLogo from "@/assets/tech-stack-logos/mongodb-logo.svg";
import { Tooltip } from "react-tooltip";

function TechStack() {
  return (
    <div className="flex lg:flex-row flex-col items-center gap-5 bg-gray-950 p-3 rounded-xl">
      <Tooltip id="technology" className="tooltip" noArrow />
      <p className="text-xl lg:border-r-2 lg:pr-5 lg:pb-0 pb-5 mb-5 lg:mb-0 lg:border-b-0 border-b-2">
        Tech Stack
      </p>
      <div className="gap-12 grid grid-rows-2 grid-flow-col lg:flex items-center sm:justify-center">
        <img
          src={typescriptLogo}
          alt="typescript"
          className="h-14 hover:cursor-pointer"
          data-tooltip-id="technology"
          data-tooltip-content="TypeScript"
          width="45.5"
          height="45.5"
        />
        <img
          src={reactLogo}
          alt="react"
          className="h-14 hover:cursor-pointer"
          data-tooltip-id="technology"
          data-tooltip-content="React"
          width="45.5"
          height="45.5"
        />
        <img
          src={tailwindLogo}
          alt="tailwind css"
          className="h-9 hover:cursor-pointer"
          data-tooltip-id="technology"
          data-tooltip-content="Tailwind CSS"
          width="45.5"
          height="45.5"
        />
        <img
          src={nextJsLogo}
          alt="next js"
          className="h-14 hover:cursor-pointer"
          data-tooltip-id="technology"
          data-tooltip-content="NextJS"
          width="45.5"
          height="45.5"
        />
        <img
          src={nodeJsLogo}
          alt="node js"
          className="h-14 hover:cursor-pointer"
          data-tooltip-id="technology"
          data-tooltip-content="NodeJS"
          width="40.29"
          height="45.5"
        />
        <img
          src={nestJsLogo}
          alt="nest js"
          className="h-14 hover:cursor-pointer"
          data-tooltip-id="technology"
          data-tooltip-content="NestJS"
          width="45.5"
          height="45.5"
        />
        <img
          src={firebaseLogo}
          alt="firebase"
          className="h-14 hover:cursor-pointer"
          data-tooltip-id="technology"
          data-tooltip-content="Firebase"
          width="33"
          height="45.5"
        />
        <img
          src={mongodbLogo}
          alt="mongodb"
          className="h-14 hover:cursor-pointer"
          data-tooltip-id="technology"
          data-tooltip-content="MongoDB"
          width="30"
          height="45.5"
        />
      </div>
    </div>
  );
}

export { TechStack };

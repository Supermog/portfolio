import javascriptLogo from "@/assets/tech-stack-logos/javascript-logo.png";
import reactLogo from "@/assets/tech-stack-logos/react-logo.png";
import tailwindLogo from "@/assets/tech-stack-logos/tailwind-logo.png";
import nextJsLogo from "@/assets/tech-stack-logos/next-js-logo.png";
// import nestJsLogo from "@/assets/nest-js-logo.png";
import nodeJsLogo from "@/assets/tech-stack-logos/node-js-logo.png";
import firebaseLogo from "@/assets/tech-stack-logos/firebase-logo.png";
import mongodbLogo from "@/assets/tech-stack-logos/mongodb-logo.png";

function TechStack() {
  return (
    <div className="flex items-center gap-5">
      <p className="text-xl border-r-2 pr-5">Tech Stack</p>
      <div className="flex justify-between items-center gap-12">
        <img src={javascriptLogo} className="h-14" />
        <img src={reactLogo} className="h-14" />
        <img src={tailwindLogo} className="h-9" />
        <img src={nextJsLogo} className="h-14" />
        <img src={nodeJsLogo} className="h-14" />
        {/* <img src={nestJsLogo} className="h-14" /> */}
        <img src={firebaseLogo} className="h-14" />
        <img src={mongodbLogo} className="h-14" />
      </div>
    </div>
  );
}

export { TechStack };

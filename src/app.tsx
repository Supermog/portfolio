import { Header } from "./components/header";
import { HomeSection } from "./components/sections/home-section";
import { Suspense, lazy } from "react";

// Lazy load sections that are below the fold
const LazyAboutSection = lazy(() =>
  import("./components/sections/about-section").then((module) => ({
    default: module.AboutSection,
  }))
);
const LazyProjectsSection = lazy(() =>
  import("./components/sections/projects-section").then((module) => ({
    default: module.ProjectsSection,
  }))
);
const LazyContactSection = lazy(() =>
  import("./components/sections/contact-section").then((module) => ({
    default: module.ContactSection,
  }))
);

function App() {
  return (
    <div className="flex flex-col">
      <header className="bg-transparent fixed h-20 w-full self-center container">
        <Header />
      </header>
      <main className="min-h-screen">
        <HomeSection />
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <LazyAboutSection />
        </Suspense>
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <LazyProjectsSection />
        </Suspense>
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <LazyContactSection />
        </Suspense>
      </main>
    </div>
  );
}

export default App;

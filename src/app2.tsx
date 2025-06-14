import { Header } from "./components/header";
import { ContactSection } from "./components/sections/contact-section";
import { AboutSection } from "./components/sections/about-section";
import { HomeSection } from "./components/sections/home-section";
import { ProjectsSection } from "./components/sections/projects-section";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="flex flex-col">
      <Toaster />
      <header className="bg-transparent fixed h-20 w-full self-center container">
        <Header />
      </header>
      <main className="min-h-screen">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        asd
      </main>
    </div>
  );
}

export default App;

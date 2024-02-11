import { Header } from "./components/header";
import { AboutSection } from "./sections/about-section";
import { HomeSection } from "./sections/home-section";

function App() {
  return (
    <div className="flex flex-col">
      <header className="bg-transparent fixed h-20 w-full self-center container">
        <Header />
      </header>
      <main className="min-h-screen">
        <HomeSection />
        <AboutSection />
      </main>
    </div>
  );
}

export default App;

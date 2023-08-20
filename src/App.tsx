import { Header } from "./components/header";
import { HomeSection } from "./components/home-section";

function App() {
  return (
    <>
      <header className="bg-transparent absolute h-20 w-full">
        <Header />
      </header>
      <main className="min-h-screen">
        <HomeSection />
      </main>
    </>
  );
}

export default App;

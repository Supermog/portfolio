import { Header } from "./components/header";
import { HomeSection } from "./components/home-section";

function App() {
  return (
    <div className="flex flex-col">
      <header className="bg-transparent absolute h-20 w-full self-center container">
        <Header />
      </header>
      <main className="min-h-screen">
        <HomeSection />
      </main>
    </div>
  );
}

export default App;

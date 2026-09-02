import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import Stack from "./sections/Stack";
import Contact from "./sections/Contact";

function App() {
  return (
    <main className="bg-[#F5F3EE] text-[#20201E]">
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Stack />
      <Contact />
    </main>
  );
}

export default App;

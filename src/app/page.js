import Hero from "@/Component/Hero";
import Navbar from "@/Component/Navbar";
import About from "@/Component/About";
import Skill from "@/Component/Skill"
import Projects from "@/Component/Projects";
import Contact from "@/Component/Contact";
import Footer from "@/Component/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] text-white">
      
      <div>

        <Hero />
        <Navbar />
        <About />
        <Skill />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
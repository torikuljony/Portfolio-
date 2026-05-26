import Navbar from "@/components/Navbar/Navbar.jsx";
import Hero from "@/components/Hero/Hero.jsx";
import About from "@/components/About/About.jsx";
import Skills from "@/components/Skills/Skills.jsx";
import Projects from "@/components/Projects/Projects.jsx";
import Contact from "@/components/Contact/Contact.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import Academic from "@/components/Academic/Academic";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Academic />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
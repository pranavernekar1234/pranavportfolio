import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import PracticeArenaPreview from "@/components/PracticeArenaPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Education />
        <Experience />
        <FeaturedProjects />
        <PracticeArenaPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

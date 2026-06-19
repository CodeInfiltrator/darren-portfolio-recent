import { About } from "@/components/About";
import { Certificates } from "@/components/Certificates";
import { CinematicTechScroll } from "@/components/CinematicTechScroll";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Journey } from "@/components/Journey";
import { NavBar } from "@/components/NavBar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function TechPortfolioPage() {
  return (
    <main className="tech-page">
      <InteractiveBackground />
      <CinematicTechScroll />

      <div className="tech-bg-grid" />
      <div className="tech-cursor-spotlight" />

      <NavBar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Journey />
      <Contact />
    </main>
  );
}
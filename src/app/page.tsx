import { About } from "@/components/about/About";
import { Architecture } from "@/components/architecture/Architecture";
import { CodeSection } from "@/components/code/CodeSection";
import { Contact } from "@/components/contact/Contact";
import { Engineering } from "@/components/engineering/Engineering";
import { Experience } from "@/components/experience/Experience";
import { Hero } from "@/components/hero/Hero";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { Notes } from "@/components/notes/Notes";
import { Projects } from "@/components/projects/Projects";
import { PublicProjects } from "@/components/projects/PublicProjects";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <PublicProjects />
        <Engineering />
        <Architecture />
        <CodeSection />
        <Experience />
        <Notes />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

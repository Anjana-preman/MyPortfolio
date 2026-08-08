import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
// import HireMe from "@/components/sections/HireMe";
import Certificates from "@/components/sections/Certificates";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Certificates />
        <Projects />
        {/* <HireMe /> */}
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Anjana K P. Built with passion and clean code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

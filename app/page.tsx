import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Pathways from "@/components/sections/Pathways";
import AboutTeaser from "@/components/sections/AboutTeaser";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Services />
        <Pathways />
        <AboutTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

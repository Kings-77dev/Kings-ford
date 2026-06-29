import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Work from "@/components/sections/Work";
import WhatIBelieve from "@/components/sections/WhatIBelieve";
import AboutTeaser from "@/components/sections/AboutTeaser";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Work />
        <WhatIBelieve />
        <AboutTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import React from "react";
import Hero from "../subpages/Hero";
import AboutSection from "../subpages/AboutSection";
import ProjectsSection from "../subpages/ProjectsSection";
import ContactSection from "../subpages/ContactSection";
import HeroFirst from "../subpages/HeroFirst";

function Home() {
  return (
    <div>
      <HeroFirst />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default Home;

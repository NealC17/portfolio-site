import React, { useState } from "react";
import SideNav from "./components/SideNav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Research from "./components/Research.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  // Shared between Skills and Projects: clicking a skill tag anywhere
  // (in the Skills section or on a project card) sets this, and the
  // Projects section filters down to only projects tagged with it.
  const [activeSkill, setActiveSkill] = useState(null);

  const selectSkill = (skill) => {
    setActiveSkill(skill);
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--ink)", position: "relative" }}>
      <SideNav />
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>
        <Hero />
        <About />
        <Experience />
        <Research />
        <Projects activeSkill={activeSkill} onSelectSkill={selectSkill} onClearSkill={() => setActiveSkill(null)} />
        <Education />
        <Skills activeSkill={activeSkill} onSelectSkill={selectSkill} />
        <Footer />
      </main>
    </div>
  );
}

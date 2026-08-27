import React, { useEffect, useState } from "react";
import Via from "./Via.jsx";
import { NAV_SECTIONS } from "../data/content.js";

export default function SideNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className="side-nav font-mono"
      style={{
        position: "fixed",
        left: 40,
        top: "50%",
        transform: "translateY(-50%)",
        flexDirection: "column",
        gap: 18,
        zIndex: 10,
      }}
    >
      {NAV_SECTIONS.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px 0",
            color: activeSection === s.id ? "var(--ink)" : "var(--ink-mute)",
            fontSize: 12,
            letterSpacing: "0.04em",
          }}
        >
          <Via active={activeSection === s.id} />
          {s.label}
        </button>
      ))}
    </nav>
  );
}

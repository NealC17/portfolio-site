import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { CONTACT } from "../data/content.js";

export default function Hero() {
  return (
    <section style={{ paddingTop: 120, paddingBottom: 100 }}>
      <p className="font-mono" style={{ fontSize: 13, color: "var(--accent)", letterSpacing: "0.06em", marginBottom: 20 }}>
        {"// embedded systems × machine learning"}
      </p>
      <h1
        className="font-display"
        style={{
          fontSize: "clamp(40px, 7vw, 64px)",
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          margin: "0 0 24px",
        }}
      >
        {CONTACT.name}
      </h1>
      <p
        className="font-body"
        style={{ fontSize: 19, lineHeight: 1.6, color: "var(--ink-soft)", maxWidth: 560, margin: "0 0 36px" }}
      >
        I build systems that live close to the hardware — firmware for
        embedded devices, tooling for ASIC verification, and machine
        learning models tuned to run at the edge.
      </p>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        <a
          href={`mailto:${CONTACT.email}`}
          className="link-underline font-mono"
          style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}
        >
          <Mail size={15} /> {CONTACT.email}
        </a>
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline font-mono"
          style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}
        >
          <Linkedin size={15} /> linkedin
        </a>
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline font-mono"
          style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}
        >
          <Github size={15} /> github
        </a>
      </div>
    </section>
  );
}

import React from "react";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <Reveal>
      <section
        style={{
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          padding: "28px 0",
          marginBottom: 100,
        }}
      >
        <p className="font-body" style={{ fontSize: 16, lineHeight: 1.7, color: "#3A3D40", margin: 0 }}>
          Currently pursuing an M.S. in Computer Science at Arizona State
          University, after a B.S. in Computer Engineering from San José
          State University. Working across ASIC tooling, algorithmic
          trading, and embedded firmware — with research in unified
          vision transformers for medical imaging.
        </p>
      </section>
    </Reveal>
  );
}

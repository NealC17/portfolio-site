import React from "react";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { RESEARCH } from "../data/content.js";

export default function Research() {
  return (
    <section id="research" style={{ marginBottom: 110 }}>
      <SectionHeading id="research-h" index="02">
        Research
      </SectionHeading>
      <Reveal>
        <div
          style={{
            border: "1px solid var(--line)",
            borderRadius: 8,
            padding: "28px 28px 30px",
            background: "var(--bg-alt)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 10,
            }}
          >
            <h3 className="font-display" style={{ fontSize: 21, fontWeight: 600, margin: 0, lineHeight: 1.3 }}>
              {RESEARCH.title}
            </h3>
            <span className="font-mono" style={{ fontSize: 11, color: "var(--ink-mute)", whiteSpace: "nowrap" }}>
              {RESEARCH.date}
            </span>
          </div>
          <p className="font-mono" style={{ fontSize: 12, color: "var(--accent)", margin: "0 0 18px" }}>
            {RESEARCH.stack}
          </p>
          <ul style={{ margin: "0 0 16px", paddingLeft: 18, display: "flex", flexDirection: "column", gap: 8 }}>
            {RESEARCH.bullets.map((b, idx) => (
              <li key={idx} className="font-body" style={{ fontSize: 15, lineHeight: 1.65, color: "#3A3D40" }}>
                {b}
              </li>
            ))}
          </ul>
          {RESEARCH.process && (
            <div style={{ borderLeft: "2px solid var(--line)", padding: "2px 0 2px 16px" }}>
              <p
                className="font-mono"
                style={{ fontSize: 11, color: "var(--ink-mute)", margin: "0 0 6px", letterSpacing: "0.04em" }}
              >
                how it worked
              </p>
              <p className="font-body" style={{ fontSize: 14, lineHeight: 1.7, color: "var(--ink-soft)", margin: 0 }}>
                {RESEARCH.process}
              </p>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}

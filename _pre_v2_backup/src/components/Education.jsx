import React from "react";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { EDUCATION } from "../data/content.js";

export default function Education() {
  return (
    <section id="education" style={{ marginBottom: 110 }}>
      <SectionHeading id="education-h" index="04">
        Education
      </SectionHeading>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {EDUCATION.map((e, i) => (
          <Reveal key={e.school} delay={i * 60}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: 8,
                paddingBottom: 20,
                borderBottom: i === EDUCATION.length - 1 ? "none" : "1px solid var(--line)",
              }}
            >
              <div>
                <h3 className="font-display" style={{ fontSize: 17, fontWeight: 600, margin: "0 0 4px" }}>
                  {e.school}
                </h3>
                <p className="font-body" style={{ fontSize: 14, color: "var(--ink-soft)", margin: 0 }}>
                  {e.degree} · {e.gpa}
                </p>
              </div>
              <span className="font-mono" style={{ fontSize: 12, color: "var(--ink-mute)" }}>
                {e.period}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

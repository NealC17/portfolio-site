import React from "react";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { EXPERIENCE } from "../data/content.js";

export default function Experience() {
  return (
    <section id="experience" style={{ marginBottom: 110 }}>
      <SectionHeading id="experience-h" index="01">
        Experience
      </SectionHeading>
      <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        {EXPERIENCE.map((job, i) => (
          <Reveal key={job.org} delay={i * 60}>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 6,
                }}
              >
                <h3 className="font-display" style={{ fontSize: 19, fontWeight: 600, margin: 0 }}>
                  {job.role} <span style={{ color: "var(--ink-soft)", fontWeight: 400 }}>— {job.org}</span>
                </h3>
                <span className="font-mono" style={{ fontSize: 12, color: "var(--ink-mute)" }}>
                  {job.period}
                </span>
              </div>
              <p className="font-mono" style={{ fontSize: 12, color: "var(--ink-mute)", margin: "0 0 14px" }}>
                {job.location}
              </p>
              <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 8 }}>
                {job.bullets.map((b, idx) => (
                  <li key={idx} className="font-body" style={{ fontSize: 15, lineHeight: 1.65, color: "#3A3D40" }}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

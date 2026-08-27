import React from "react";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { SKILLS } from "../data/content.js";

export default function Skills({ activeSkill, onSelectSkill }) {
  return (
    <section id="skills" style={{ marginBottom: 120 }}>
      <SectionHeading id="skills-h" index="05">
        Skills
      </SectionHeading>
      <p className="font-body" style={{ fontSize: 14, color: "var(--ink-soft)", margin: "0 0 26px" }}>
        Click any skill to see the projects that used it.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        {SKILLS.map((group, i) => (
          <Reveal key={group.label} delay={i * 60}>
            <div>
              <p
                className="font-mono"
                style={{ fontSize: 12, color: "var(--ink-mute)", marginBottom: 12, letterSpacing: "0.04em" }}
              >
                {group.label}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {group.items.map((item) => {
                  const active = activeSkill === item;
                  return (
                    <button
                      key={item}
                      onClick={() => onSelectSkill(item)}
                      className="font-mono"
                      style={{
                        fontSize: 12,
                        padding: "4px 9px",
                        border: `1px solid ${active ? "var(--accent)" : "var(--line)"}`,
                        borderRadius: 4,
                        color: active ? "var(--bg)" : "var(--ink-soft)",
                        background: active ? "var(--accent)" : "var(--bg-alt)",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        transition: "all 150ms ease",
                      }}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

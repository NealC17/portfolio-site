import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { PROJECTS, PROJECT_CATEGORIES, CLUBS } from "../data/content.js";

function SkillChip({ skill, onClick }) {
  return (
    <button
      onClick={() => onClick(skill)}
      className="font-mono"
      style={{
        fontSize: 11,
        padding: "3px 8px",
        border: "1px solid var(--line)",
        borderRadius: 4,
        color: "var(--ink-soft)",
        background: "var(--bg)",
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      {skill}
    </button>
  );
}

export default function Projects({ activeSkill, onSelectSkill, onClearSkill }) {
  const [projectFilter, setProjectFilter] = useState("All");

  const visibleProjects = activeSkill
    ? PROJECTS.filter((p) => p.skills?.includes(activeSkill))
    : projectFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === projectFilter);

  return (
    <section id="projects" style={{ marginBottom: 110 }}>
      <SectionHeading id="projects-h" index="03">
        Projects
      </SectionHeading>

      {activeSkill ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 36,
            padding: "8px 12px",
            border: "1px solid var(--accent)",
            borderRadius: 6,
            background: "var(--bg-alt)",
            width: "fit-content",
          }}
        >
          <span className="font-mono" style={{ fontSize: 12, color: "var(--ink-soft)" }}>
            tagged: <span style={{ color: "var(--accent)" }}>{activeSkill}</span>
          </span>
          <button
            onClick={onClearSkill}
            aria-label="Clear skill filter"
            style={{
              display: "flex",
              alignItems: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              color: "var(--ink-mute)",
            }}
          >
            <X size={14} />
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
          {PROJECT_CATEGORIES.map((cat) => {
            const active = projectFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setProjectFilter(cat)}
                className="font-mono"
                style={{
                  fontSize: 12,
                  padding: "6px 12px",
                  borderRadius: 4,
                  cursor: "pointer",
                  border: `1px solid ${active ? "var(--accent)" : "var(--line)"}`,
                  background: active ? "var(--accent)" : "transparent",
                  color: active ? "var(--bg)" : "var(--ink-soft)",
                  transition: "all 180ms ease",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {visibleProjects.length === 0 ? (
        <p className="font-body" style={{ fontSize: 14, color: "var(--ink-mute)" }}>
          No projects tagged with this skill yet.
        </p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 44 }}>
          {visibleProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 40}>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <h3 className="font-display" style={{ fontSize: 19, fontWeight: 600, margin: 0 }}>
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
                      >
                        {p.title} <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      p.title
                    )}
                  </h3>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12, whiteSpace: "nowrap" }}>
                    <span className="font-mono" style={{ fontSize: 11, color: "var(--ink-mute)" }}>
                      {p.date}
                    </span>
                    <span className="font-mono" style={{ fontSize: 11, color: "var(--accent)" }}>
                      {p.category}
                    </span>
                  </div>
                </div>
                <p className="font-mono" style={{ fontSize: 12, color: "var(--ink-mute)", margin: "0 0 14px" }}>
                  {p.stack}
                </p>
                <ul style={{ margin: "0 0 14px", paddingLeft: 18, display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.bullets.map((b, idx) => (
                    <li key={idx} className="font-body" style={{ fontSize: 15, lineHeight: 1.65, color: "#3A3D40" }}>
                      {b}
                    </li>
                  ))}
                </ul>
                {p.process && (
                  <div
                    style={{
                      borderLeft: "2px solid var(--line)",
                      borderRadius: 0,
                      padding: "2px 0 2px 16px",
                      margin: "0 0 14px",
                    }}
                  >
                    <p
                      className="font-mono"
                      style={{ fontSize: 11, color: "var(--ink-mute)", margin: "0 0 6px", letterSpacing: "0.04em" }}
                    >
                      how it worked
                    </p>
                    <p className="font-body" style={{ fontSize: 14, lineHeight: 1.7, color: "var(--ink-soft)", margin: 0 }}>
                      {p.process}
                    </p>
                  </div>
                )}
                {p.skills && p.skills.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {p.skills.map((s) => (
                      <SkillChip key={s} skill={s} onClick={onSelectSkill} />
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      )}

      <Reveal delay={140}>
        <div
          style={{
            marginTop: 48,
            paddingTop: 32,
            borderTop: "1px dashed var(--line)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 28,
          }}
        >
          {CLUBS.map((c) => (
            <div key={c.org}>
              <p
                className="font-mono"
                style={{ fontSize: 11, color: "var(--ink-mute)", margin: "0 0 4px", letterSpacing: "0.04em" }}
              >
                {c.period}
              </p>
              <h4 className="font-display" style={{ fontSize: 15, fontWeight: 600, margin: "0 0 2px" }}>
                {c.org}
              </h4>
              <p className="font-body" style={{ fontSize: 13, color: "var(--ink-soft)", margin: "0 0 8px" }}>
                {c.role}
              </p>
              <p className="font-body" style={{ fontSize: 14, lineHeight: 1.6, color: "#3A3D40", margin: 0 }}>
                {c.detail}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

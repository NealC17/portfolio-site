import React from "react";
import { useReveal } from "../hooks/useReveal.js";

export default function SectionHeading({ id, index, children }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 14,
        marginBottom: 40,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(14px)",
        transition: "opacity 600ms ease, transform 600ms ease",
      }}
    >
      <span className="font-mono" style={{ fontSize: 12, color: "var(--ink-mute)", letterSpacing: "0.08em" }}>
        {index}
      </span>
      <h2
        className="font-display"
        style={{ fontSize: 28, fontWeight: 600, color: "var(--ink)", margin: 0, letterSpacing: "-0.01em" }}
        id={id}
      >
        {children}
      </h2>
      <span style={{ flex: 1, height: 1, background: "var(--line)" }} />
    </div>
  );
}

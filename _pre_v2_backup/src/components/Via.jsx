import React from "react";

export default function Via({ active }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 8,
        height: 8,
        borderRadius: "50%",
        border: `1.5px solid ${active ? "var(--accent)" : "var(--line)"}`,
        background: active ? "var(--accent)" : "transparent",
        transition: "all 220ms ease",
        flexShrink: 0,
      }}
    />
  );
}

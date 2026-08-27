import React from "react";

export default function Tag({ children }) {
  return (
    <span
      className="font-mono"
      style={{
        fontSize: 12,
        padding: "4px 9px",
        border: "1px solid var(--line)",
        borderRadius: 4,
        color: "var(--ink-soft)",
        background: "var(--bg-alt)",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}
